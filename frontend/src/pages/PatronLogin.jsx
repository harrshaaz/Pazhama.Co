import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './PatronLogin.css';

export default function PatronLogin() {
  const [authMode, setAuthMode] = useState('credentials'); // 'credentials' | 'phone'
  const [otpStep, setOtpStep] = useState(1); // Step 1: Enter Phone | Step 2: Enter OTP Code

  // Form State
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otpCode, setOtpCode] = useState('');

  // UI State
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [infoMessage, setInfoMessage] = useState('');

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  // 1. Google Authentication
  const handleGoogleSuccess = async (tokenResponse) => {
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: tokenResponse.access_token }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('token', data.token);
        setLoading(false);
        setVerified(true);
        setTimeout(() => navigate('/vault'), 1000);
      } else {
        setLoading(false);
        setErrorMessage(data.message || 'Google Authentication failed.');
      }
    } catch (error) {
      console.error('Google Auth Error:', error);
      setLoading(false);
      setErrorMessage('Unable to complete Google Authentication.');
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: () => setErrorMessage('Google Sign-In was cancelled or failed.'),
  });

  // 2. Mobile OTP - Send Code
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setInfoMessage('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLoading(false);
        setOtpStep(2);
        setInfoMessage(`Access code sent to ${phone}. Check server terminal in dev mode.`);
      } else {
        setLoading(false);
        setErrorMessage(data.message || 'Failed to dispatch access key.');
      }
    } catch (error) {
      console.error('Send OTP Error:', error);
      setLoading(false);
      setErrorMessage('Unable to connect to the authentication server.');
    }
  };

  // 3. Mobile OTP - Verify Code
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp: otpCode }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('token', data.token);
        setLoading(false);
        setVerified(true);
        setTimeout(() => navigate('/vault'), 1000);
      } else {
        setLoading(false);
        setErrorMessage(data.message || 'Invalid or expired OTP code.');
      }
    } catch (error) {
      console.error('Verify OTP Error:', error);
      setLoading(false);
      setErrorMessage('Server connection error during verification.');
    }
  };

  // 4. Standard Patron ID / Password Login
  const handleCredentialSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setLoading(false);
        setVerified(true);
        setTimeout(() => navigate('/vault'), 1000);
      } else {
        setLoading(false);
        setErrorMessage(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Auth error:', error);
      setLoading(false);
      setErrorMessage('Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <main>
      <div className="ambient-glow-wrapper">
        <div className="glow-secondary"></div>
        <div className="glow-primary"></div>

        <div className="patron-card">
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
            <div className="brand-crest-box">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1X8zN9LwLQf6_rkl1qHRcGoA9ELGYry9lifV7Fs2A2NJF6c25zYdTGYiRlTwuEXZQlKsfX5mlWH7EXI6KMp0YqJRqq9asQ3MFKqP6SNtusR2iVg3dJCNXlFYHSHGTHHpCpMTov-QTmr6PSAM1lWCAOmaT9SKSkTYD-q4983EtMbnyBADgpc-7cl_yIt5C-fw5VDB_HX0kxe1gkiw6lrjW222XVNgXZrXcYxsxpKAbZiVFW6qW1FcHuNul_X"
                alt="Pazhama.co Emblem"
              />
            </div>
            <span className="badge-tag">Provenance Sanctum • Kerala</span>
            <h1 className="card-title">Patron Access</h1>
            <p className="card-subtitle">
              Kerala, Curated for the World. Enter your private sanctum to view bespoke commissions & archival offerings.
            </p>
          </div>

          {/* Social SSO Group */}
          <div className="sso-group">
            <button className="btn-sso" type="button" onClick={() => loginWithGoogle()}>
              <svg style={{ width: '16px', height: '16px', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4" />
                <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.4 7.37 24 12 24z" fill="#34A853" />
                <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.27 2.6 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
              </svg>
              <span>Continue with Google</span>
            </button>
            <button
              className="btn-sso"
              type="button"
              onClick={() => {
                setAuthMode(authMode === 'phone' ? 'credentials' : 'phone');
                setOtpStep(1);
                setErrorMessage('');
                setInfoMessage('');
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-tertiary)' }}>
                phonelink_ring
              </span>
              <span>{authMode === 'phone' ? 'Use Patron ID' : 'Mobile OTP / SMS'}</span>
            </button>
          </div>

          {/* Editorial Divider */}
          <div className="editorial-divider">
            <div className="divider-line"></div>
            <span className="divider-text">
              {authMode === 'phone' ? 'sign in with verified mobile' : 'or sign in with patron id'}
            </span>
          </div>

          {/* Error Message Display */}
          {errorMessage && (
            <div style={{ color: '#d9534f', backgroundColor: '#fdf7f7', padding: '0.75rem', borderRadius: '6px', border: '1px solid #f5c6cb', fontSize: '13px', textAlign: 'center', marginBottom: '1rem' }}>
              {errorMessage}
            </div>
          )}

          {/* Info Banner Display */}
          {infoMessage && (
            <div style={{ color: '#155724', backgroundColor: '#d4edda', padding: '0.75rem', borderRadius: '6px', border: '1px solid #c3e6cb', fontSize: '13px', textAlign: 'center', marginBottom: '1rem' }}>
              {infoMessage}
            </div>
          )}

          {/* MODE 1: MOBILE OTP AUTH */}
          {authMode === 'phone' ? (
            otpStep === 1 ? (
              // Step 1: Input Phone Number
              <form className="auth-form" onSubmit={handleSendOtp}>
                <div>
                  <label className="input-label" htmlFor="mobilePhone">
                    <span>Mobile Phone Number</span>
                    <span style={{ color: 'var(--color-outline)', fontSize: '10px' }}>E.g. +919876543210</span>
                  </label>
                  <div className="input-container" style={{ marginTop: '0.375rem' }}>
                    <span className="material-symbols-outlined input-icon" style={{ fontSize: '20px' }}>
                      smartphone
                    </span>
                    <input
                      className="form-input"
                      id="mobilePhone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button className="btn-submit" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }}>
                        progress_activity
                      </span>
                      <span>Dispatching Sanctum Key...</span>
                    </>
                  ) : (
                    <>
                      <span>Send OTP Access Key</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        send
                      </span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              // Step 2: Input 6-Digit OTP Code
              <form className="auth-form" onSubmit={handleVerifyOtp}>
                <div>
                  <div className="input-label">
                    <span>Enter 6-Digit Sanctum Key</span>
                    <button
                      type="button"
                      onClick={() => setOtpStep(1)}
                      style={{ background: 'none', border: 'none', color: 'var(--color-secondary)', fontSize: '10px', cursor: 'pointer' }}
                    >
                      Change Number
                    </button>
                  </div>
                  <div className="input-container" style={{ marginTop: '0.375rem' }}>
                    <span className="material-symbols-outlined input-icon" style={{ fontSize: '20px' }}>
                      pin
                    </span>
                    <input
                      className="form-input"
                      id="otpCode"
                      type="text"
                      maxLength={6}
                      placeholder="• • • • • •"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      required
                      style={{ letterSpacing: '4px', fontWeight: 600 }}
                    />
                  </div>
                </div>

                <button className="btn-submit" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }}>
                        progress_activity
                      </span>
                      <span>Verifying Key...</span>
                    </>
                  ) : verified ? (
                    <>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        check_circle
                      </span>
                      <span>Key Verified • Entering</span>
                    </>
                  ) : (
                    <>
                      <span>Verify & Enter Vault</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                        east
                      </span>
                    </>
                  )}
                </button>
              </form>
            )
          ) : (
            /* MODE 2: STANDARD PATRON ID FORM */
            <form className="auth-form" onSubmit={handleCredentialSubmit}>
              <div>
                <label className="input-label" htmlFor="patronIdentifier">
                  <span>Email or Patron Identifier</span>
                  <span style={{ color: 'var(--color-outline)', fontSize: '10px' }}>E.g. GI-8492</span>
                </label>
                <div className="input-container" style={{ marginTop: '0.375rem' }}>
                  <span className="material-symbols-outlined input-icon" style={{ fontSize: '20px' }}>
                    account_circle
                  </span>
                  <input
                    className="form-input"
                    id="patronIdentifier"
                    type="text"
                    placeholder="patron@domain.com"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="input-label">
                  <span>Sanctum Access Key</span>
                  <a href="#forgot" style={{ color: 'var(--color-secondary)', fontSize: '10px', textDecoration: 'none' }}>
                    Forgot Key?
                  </a>
                </div>
                <div className="input-container" style={{ marginTop: '0.375rem' }}>
                  <span className="material-symbols-outlined input-icon" style={{ fontSize: '20px' }}>
                    lock_open
                  </span>
                  <input
                    className="form-input"
                    style={{ paddingRight: '2.75rem' }}
                    id="sanctumKey"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    style={{
                      position: 'absolute',
                      right: '0.875rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-outline)',
                      cursor: 'pointer',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingTop: '0.25rem' }}>
                <input type="checkbox" id="remember" style={{ cursor: 'pointer', accentColor: 'var(--color-primary)' }} />
                <label htmlFor="remember" style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)', cursor: 'pointer' }}>
                  Remember this verified workstation
                </label>
              </div>

              <button className="btn-submit" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }}>
                      progress_activity
                    </span>
                    <span>Authenticating Sanctum...</span>
                  </>
                ) : verified ? (
                  <>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      check_circle
                    </span>
                    <span>Patron Verified • Entering</span>
                  </>
                ) : (
                  <>
                    <span>Enter Patron Vault</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                      east
                    </span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Concierge Section */}
          <div className="concierge-box">
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--color-on-surface)' }}>
                New to Pazhama?
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
                Access rare GI artifacts & lineage estates.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a href="#request" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-secondary)', textDecoration: 'none' }}>
                Request Patronage →
              </a>
              <span style={{ color: 'var(--color-outline-variant)', fontSize: '10px' }}>•</span>
              <a href="#guest" style={{ fontSize: '12px', color: 'var(--color-outline)', textDecoration: 'none' }}>
                Browse Guest
              </a>
            </div>
          </div>

          {/* Trust Ribbon */}
          <div className="trust-ribbon">
            <div className="trust-item">
              <span className="material-symbols-outlined" style={{ color: 'var(--color-primary-container)', fontSize: '18px' }}>
                encrypted
              </span>
              <span>256-Bit Encrypted Patron Vault</span>
            </div>
            <div className="trust-item">
              <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '18px' }}>
                verified
              </span>
              <span>Statutory GI Protected Lineage</span>
            </div>
            <div className="trust-item">
              <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>
                handshake
              </span>
              <span>100% Direct Artisan Settlements</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem' }}>
          <p style={{ fontSize: '13px', color: 'var(--color-outline)' }}>
            © MMXXIV Pazhama.co • Preserving God’s Own Country Living Heritage • Kochi, Malabar & Travancore
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '10px', color: 'var(--color-outline)' }}>
            <a href="#privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Patron Privacy Charter</a>
            <span>•</span>
            <a href="#terms" style={{ color: 'inherit', textDecoration: 'none' }}>Curatorial Terms</a>
            <span>•</span>
            <a href="#verification" style={{ color: 'inherit', textDecoration: 'none' }}>Estate Provenance Verification</a>
          </div>
        </div>
      </div>
    </main>
  );
}