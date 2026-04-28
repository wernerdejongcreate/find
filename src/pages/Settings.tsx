import React, { useState } from 'react';
import { LogOut, Settings as SettingsIcon, ShieldCheck, ChevronRight, User, X, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [accountDetails, setAccountDetails] = useState({ name: 'Alexander', email: 'alexander@example.com', phone: '+1 (555) 000-0000' });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('findit_auth');
    navigate('/login');
  };

  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAccountModal(false);
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-12 dark:bg-neutral-900 transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-primary-600" /> Settings
        </h1>

        <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-700 overflow-hidden mb-8">
          
          <div className="p-6 md:p-8">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">Preferences</h3>
            
            <div onClick={() => setShowAccountModal(true)} className="flex items-center justify-between py-6 border-b border-neutral-100 dark:border-neutral-700 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="bg-neutral-100 dark:bg-neutral-700 p-2 rounded-xl group-hover:bg-neutral-200 dark:group-hover:bg-neutral-600 transition">
                  <User className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">Account Details</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Manage your email and phone number</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition" />
            </div>

            <div className="flex items-center justify-between py-6 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="bg-neutral-100 dark:bg-neutral-700 p-2 rounded-xl group-hover:bg-neutral-200 dark:group-hover:bg-neutral-600 transition">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white">Privacy & Security</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Update your password and 2FA settings</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition" />
            </div>

          </div>

          <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 md:p-8 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-700">
             <div>
                <h4 className="font-bold text-red-600">Danger Zone</h4>
                <p className="text-xs text-neutral-500">Log out of your current session.</p>
             </div>
             <button onClick={handleLogout} className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-red-600 font-bold px-6 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition flex items-center gap-2 shadow-sm">
               <LogOut className="w-4 h-4" /> Log Out
             </button>
          </div>
        </div>
      </div>

      {showAccountModal && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-3xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col">
            <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-700 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-bold text-lg">
                <User className="w-5 h-5" /> Edit Account Details
              </div>
              <button 
                onClick={() => setShowAccountModal(false)}
                className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveAccount} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Full Name</label>
                  <input required value={accountDetails.name} onChange={e => setAccountDetails({...accountDetails, name: e.target.value})} type="text" className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Email Address</label>
                  <input required value={accountDetails.email} onChange={e => setAccountDetails({...accountDetails, email: e.target.value})} type="email" className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Phone Number</label>
                  <input required value={accountDetails.phone} onChange={e => setAccountDetails({...accountDetails, phone: e.target.value})} type="tel" className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition shadow-sm" />
                </div>
              </div>
              <button type="submit" className="mt-8 w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl hover:bg-primary-700 transition shadow-sm flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
