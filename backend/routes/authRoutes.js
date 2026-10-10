import express from 'express';
import jwt from 'jsonwebtoken';
import twilio from 'twilio';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Temporary in-memory OTP store (Use Redis or MongoDB in production)
const otpStore = new Map();

// Initialize Twilio client (Safe check if ENV keys exist)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const client = (accountSid && authToken) ? twilio(accountSid, authToken) : null;

// Existing Auth Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// POST /api/auth/google
router.post('/google', async (req, res) => {
  const { token } = req.body;

  try {
    // Fetch user profile from Google using the access_token
    const googleRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!googleRes.ok) {
      return res.status(400).json({ success: false, message: 'Failed to fetch Google user profile' });
    }

    const payload = await googleRes.json();
    const { email, name, picture, sub: googleId } = payload;

    // Generate app JWT
    const appToken = jwt.sign(
      { email, name },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      token: appToken,
      user: { email, name, picture },
    });
  } catch (error) {
    console.error('Google Auth Route Error:', error);
    res.status(500).json({ success: false, message: 'Server error during Google authentication' });
  }
});

// POST /api/auth/send-otp
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ success: false, message: 'Phone number is required' });
  }

  // Generate 6-digit random OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(phone, { otp, expiresAt: Date.now() + 5 * 60 * 1000 }); // Valid for 5 minutes

  try {
    if (client && twilioNumber) {
      // Send real SMS via Twilio
      await client.messages.create({
        body: `Your Pazhama Patron Access Key is: ${otp}. Valid for 5 minutes.`,
        from: twilioNumber,
        to: phone,
      });
    } else {
      // Development mode fallback (prints OTP to terminal console)
      console.log(`\n=================================`);
      console.log(`[DEV OTP MODE] Phone: ${phone} | Code: ${otp}`);
      console.log(`=================================\n`);
    }

    res.status(200).json({ success: true, message: 'OTP dispatched successfully' });
  } catch (error) {
    console.error('OTP Send Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP SMS' });
  }
});

// POST /api/auth/verify-otp
router.post('/verify-otp', async (req, res) => {
  const { phone, otp } = req.body;

  const record = otpStore.get(phone);

  if (!record) {
    return res.status(400).json({ success: false, message: 'OTP expired or not requested' });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(phone);
    return res.status(400).json({ success: false, message: 'OTP code has expired' });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP code' });
  }

  // Clear OTP from memory after successful verification
  otpStore.delete(phone);

  // Generate JWT token for user session
  const appToken = jwt.sign(
    { phone },
    process.env.JWT_SECRET || 'secretkey',
    { expiresIn: '7d' }
  );

  res.status(200).json({
    success: true,
    token: appToken,
    user: { phone },
  });
});

export default router;