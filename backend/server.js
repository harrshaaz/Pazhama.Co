import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Relative imports for ES Modules MUST include the .js extension:
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Global Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Global Error Handler (Catches any uncaught route/controller errors)
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack || err.message);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Global 404 Fallback Route
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Catch unhandled promise rejections so the process logs instead of exiting silently
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Start Server
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));