import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShieldCheck, Search, MessageSquare, User, Menu, X, LogIn, Settings as SettingsIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Ensuring light mode
    window.document.documentElement.classList.remove('dark');
    localStorage.setItem('findit_theme', 'light');

    // Initialize verification
    const checkVerify = () => {
      setIsVerified(localStorage.getItem('findit_verified') === 'true');
    };
    checkVerify();

    window.addEventListener('findit_verified_change', checkVerify);
    return () => window.removeEventListener('findit_verified_change', checkVerify);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
      <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-primary-600 dark:text-primary-500" />
                <span className="font-bold text-2xl tracking-tight text-primary-900 dark:text-white">Findit</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/marketplace" className={`text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${location.pathname === '/marketplace' ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-600 dark:text-neutral-400'}`}>Marketplace</Link>
              <Link to="/trust" className={`text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${location.pathname === '/trust' ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-600 dark:text-neutral-400'}`}>Trust & Safety</Link>
              {!isVerified && (
                <Link to="/verification" className={`text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${location.pathname === '/verification' ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-600 dark:text-neutral-400'}`}>Verify ID</Link>
              )}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/messages" className="relative p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-neutral-900"></span>
              </Link>
              <Link to="/dashboard" className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <Link to="/settings" className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors">
                <SettingsIcon className="w-5 h-5" />
              </Link>
              <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-3 py-2">
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
              {!isVerified && (
                <Link to="/verification" className="flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 transition-colors px-3 py-2 bg-green-50 rounded-full border border-green-200">
                  <ShieldCheck className="w-4 h-4" />
                  Verify ID
                </Link>
              )}
              <Link to="/create-listing" className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm">
                Sell an Item
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-neutral-600 hover:text-primary-600 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            <Link to="/marketplace" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800">Marketplace</Link>
            <Link to="/trust" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800">Trust & Safety</Link>
            <Link to="/messages" onClick={toggleMenu} className="px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center justify-between">
              <span>Messages</span>
              <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">2</span>
            </Link>
            <Link to="/dashboard" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800">Seller Dashboard</Link>
            <Link to="/settings" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800">Settings</Link>
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2">
              <Link to="/login" onClick={toggleMenu} className="block w-full text-center px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg text-base font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">Sign In</Link>
              {!isVerified && (
                <Link to="/verification" onClick={toggleMenu} className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-lg text-base font-medium bg-green-50 text-green-700 border border-green-200">
                  <ShieldCheck className="w-5 h-5" /> Verify ID
                </Link>
              )}
              <Link to="/create-listing" onClick={toggleMenu} className="block w-full text-center px-4 py-2 rounded-lg text-base font-medium bg-primary-600 text-white">Sell an Item</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-neutral-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-6 h-6 text-primary-600" />
                <span className="font-bold text-xl text-primary-900">Findit</span>
              </Link>
              <p className="text-sm text-neutral-500 mb-4">
                Find it. Buy it. Trust it. The safest way to buy and sell secondhand locally.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-neutral-900 mb-4 tracking-tight">Marketplace</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link to="/marketplace" className="hover:text-primary-600">All Items</Link></li>
                <li><Link to="/marketplace?category=electronics" className="hover:text-primary-600">Electronics</Link></li>
                <li><Link to="/marketplace?category=furniture" className="hover:text-primary-600">Furniture</Link></li>
                <li><Link to="/marketplace?category=clothing" className="hover:text-primary-600">Clothing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-4 tracking-tight">Company</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><Link to="/trust" className="hover:text-primary-600">Trust & Safety</Link></li>
                <li><Link to="/payments" className="hover:text-primary-600">How Payments Work</Link></li>
                <li><a href="#" className="hover:text-primary-600">About Us</a></li>
                <li><a href="#" className="hover:text-primary-600">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-4 tracking-tight">Legal</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><a href="#" className="hover:text-primary-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-600">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary-600">Buyer Protection Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center z-10">
            <p className="text-xs text-neutral-500 z-10">&copy; {new Date().getFullYear()} Findit. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 z-10">
              <span className="text-xs text-green-600 font-medium flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full"><ShieldCheck className="w-3 h-3"/> Bank-Level Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
