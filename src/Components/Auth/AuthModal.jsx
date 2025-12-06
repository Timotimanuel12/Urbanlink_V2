import React, { useState, useEffect } from 'react';

const AuthModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});
  const [signupErrors, setSignupErrors] = useState({});

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose?.(); };
    if (open) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    setLoginErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
    setSignupErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!loginForm.email) errs.email = 'Needed to be filled';
    if (!loginForm.password) errs.password = 'Needed to be filled';
    setLoginErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log('Login attempted', loginForm);
    onClose?.();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!signupForm.name) errs.name = 'Needed to be filled';
    if (!signupForm.email) errs.email = 'Needed to be filled';
    if (!signupForm.password) errs.password = 'Needed to be filled';
    if (!signupForm.confirmPassword) errs.confirmPassword = 'Needed to be filled';
    if (!errs.confirmPassword && signupForm.password !== signupForm.confirmPassword) {
      errs.confirmPassword = 'Password does not match';
    }
    setSignupErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log('Signup attempted', signupForm);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 flex justify-between items-center">
            <h2 className="text-2xl font-serif">{activeTab === 'login' ? 'Log in' : 'Sign up'}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
          </div>

          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="p-6 space-y-4">
              <div className="space-y-3">
                <button type="button" className="w-full border rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                  <span className="text-sm font-medium">Continue with Google</span>
                </button>
                <button type="button" className="w-full border rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5" />
                  <span className="text-sm font-medium">Continue with Apple</span>
                </button>
                <button type="button" className="w-full border rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-5 h-5" />
                  <span className="text-sm font-medium">Continue with LinkedIn</span>
                </button>
              </div>

              <div className="flex items-center gap-3 py-2">
                <span className="text-xs text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  className={`w-full rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none text-gray-800 border ${
                    loginErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="you@example.com"
                />
                {loginErrors.email && (
                  <p className="mt-1 text-xs text-red-600">{loginErrors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    className={`w-full rounded-md p-2 pr-10 focus:ring-2 focus:outline-none text-gray-800 border ${
                      loginErrors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
                    }`}
                    placeholder="••••••••"
                  />
                  <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {loginErrors.password && (
                  <p className="mt-1 text-xs text-red-600">{loginErrors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition"
              >
                Continue
              </button>

              <div className="text-center text-sm text-gray-600">
                <button type="button" className="hover:underline">Forgot Password?</button>
              </div>

              <div className="mt-4 border-t pt-4 text-center text-sm text-gray-600">
                Not a member yet?{' '}
                <button type="button" className="underline" onClick={() => setActiveTab('signup')}>Sign up</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="p-6 space-y-4">
              <div className="space-y-3">
                <button type="button" className="w-full border rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                  <span className="text-sm font-medium">Continue with Google</span>
                </button>
                <button type="button" className="w-full border rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5" />
                  <span className="text-sm font-medium">Continue with Apple</span>
                </button>
                <button type="button" className="w-full border rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-5 h-5" />
                  <span className="text-sm font-medium">Continue with LinkedIn</span>
                </button>
              </div>

              <div className="flex items-center gap-3 py-2">
                <span className="text-xs text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={signupForm.name}
                  onChange={handleSignupChange}
                  className={`w-full rounded-md p-2 focus:ring-2 focus:outline-none text-gray-800 border ${
                    signupErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
                  }`}
                  placeholder="Your name"
                />
                {signupErrors.name && (
                  <p className="mt-1 text-xs text-red-600">{signupErrors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  value={signupForm.email}
                  onChange={handleSignupChange}
                  className={`w-full rounded-md p-2 focus:ring-2 focus:outline-none text-gray-800 border ${
                    signupErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
                  }`}
                  placeholder="you@example.com"
                />
                {signupErrors.email && (
                  <p className="mt-1 text-xs text-red-600">{signupErrors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  value={signupForm.password}
                  onChange={handleSignupChange}
                  className={`w-full rounded-md p-2 focus:ring-2 focus:outline-none text-gray-800 border ${
                    signupErrors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
                  }`}
                  placeholder="••••••••"
                />
                {signupErrors.password && (
                  <p className="mt-1 text-xs text-red-600">{signupErrors.password}</p>
                )}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={signupForm.confirmPassword}
                  onChange={handleSignupChange}
                  className={`w-full rounded-md p-2 focus:ring-2 focus:outline-none text-gray-800 border ${
                    signupErrors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
                  }`}
                  placeholder="••••••••"
                />
                {signupErrors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600">{signupErrors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition"
              >
                Continue
              </button>

              <div className="mt-4 border-t pt-4 text-center text-sm text-gray-600">
                Already a member?{' '}
                <button type="button" className="underline" onClick={() => setActiveTab('login')}>Log in</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
