import React, { useState } from 'react';
import { ShieldCheck, Mail, LogIn, Lock, ArrowRight, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AuthFlow({ mode }: { mode: 'login' | 'signup' }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup' && step === 1) {
      setStep(2);
    } else {
      // Simulate real auth
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <Link to="/" className="inline-flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-primary-600" />
        </Link>
        <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 tracking-tight">
          {mode === 'login' ? 'Sign in to Findit' : 'Create your secure account'}
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          {mode === 'login' ? (
            <>Don't have an account? <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">Sign up</Link></>
          ) : (
            <>Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">Sign in</Link></>
          )}
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-neutral-200/50 sm:rounded-2xl sm:px-10 border border-neutral-100 relative overflow-hidden">
          
          {/* Progress Bar for signup */}
          {mode === 'signup' && (
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-neutral-100">
              <div className="h-full bg-primary-600 transition-all duration-300" style={{ width: step === 1 ? '50%' : '100%' }}></div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleNext}>
            {step === 1 ? (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email address</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      autoComplete="email" 
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-xl shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors" 
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700">Password</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input 
                      id="password" 
                      name="password" 
                      type="password" 
                      autoComplete={mode === 'login' ? 'current-password' : 'new-password'} 
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-xl shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors" 
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {mode === 'login' && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-900">Remember me</label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-primary-600 hover:text-primary-500">Forgot your password?</a>
                    </div>
                  </div>
                )}

                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
                  {mode === 'login' ? 'Sign in' : 'Continue'} {mode === 'signup' && <ArrowRight className="ml-2 w-4 h-4 mt-0.5" />}
                </button>
              </>
            ) : (
              // STEP 2: PROFILE SETUP
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="text-center mb-6">
                  <div className="bg-green-50 text-green-700 p-3 rounded-xl mb-4 border border-green-200 inline-flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5"/> Verified users sell 3x faster
                  </div>
                  <p className="text-sm text-neutral-600">Please provide your real name. It will be verified against your ID later.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fname" className="block text-sm font-medium text-neutral-700">First Name</label>
                    <input id="fname" type="text" required className="mt-1 block w-full py-3 px-3 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-medium text-neutral-700">Last Name</label>
                    <input id="lname" type="text" required className="mt-1 block w-full py-3 px-3 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-neutral-700">Zip Code</label>
                  <input id="zip" type="text" required className="mt-1 block w-full py-3 px-3 border border-neutral-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" placeholder="e.g. 94103" />
                  <p className="mt-1 text-xs text-neutral-500">Used to show listings near you.</p>
                </div>

                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 transition-colors">
                  Complete Setup
                </button>
              </div>
            )}
          </form>

          {step === 1 && (
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-neutral-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button type="button" onClick={() => navigate('/dashboard')} className="w-full inline-flex justify-center py-3 px-4 border border-neutral-300 rounded-xl shadow-sm bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition">
                  Google
                </button>
                <button type="button" onClick={() => navigate('/dashboard')} className="w-full inline-flex justify-center py-3 px-4 border border-neutral-300 rounded-xl shadow-sm bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition">
                  Apple
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer Trust Note */}
        <p className="text-center text-xs text-neutral-500 mt-8 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" /> Secure SSL Connection. We do not sell your data.
        </p>
      </div>
    </div>
  );
}
