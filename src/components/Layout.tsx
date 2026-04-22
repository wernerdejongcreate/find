import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShieldCheck, Search, MessageSquare, User, Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-primary-600" />
                <span className="font-bold text-2xl tracking-tight text-primary-900">Findit</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/marketplace" className={`text-sm font-medium hover:text-primary-600 transition-colors ${location.pathname === '/marketplace' ? 'text-primary-600' : 'text-neutral-600'}`}>Marketplace</Link>
              <Link to="/trust" className={`text-sm font-medium hover:text-primary-600 transition-colors ${location.pathname === '/trust' ? 'text-primary-600' : 'text-neutral-600'}`}>Trust & Safety</Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/messages" className="p-2 text-neutral-600 hover:text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link to="/dashboard" className="p-2 text-neutral-600 hover:text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors px-3 py-2">
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
              <Link to="/dashboard" className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm">
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
          <div className="md:hidden bg-white border-t border-neutral-100 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            <Link to="/marketplace" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 hover:bg-neutral-50">Marketplace</Link>
            <Link to="/trust" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 hover:bg-neutral-50">Trust & Safety</Link>
            <Link to="/messages" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 hover:bg-neutral-50">Messages</Link>
            <Link to="/dashboard" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-900 hover:bg-neutral-50">Seller Dashboard</Link>
            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
              <Link to="/login" onClick={toggleMenu} className="block w-full text-center px-4 py-2 border border-neutral-300 rounded-lg text-base font-medium bg-white text-neutral-700">Sign In</Link>
              <Link to="/dashboard" onClick={toggleMenu} className="block w-full text-center px-4 py-2 rounded-lg text-base font-medium bg-primary-600 text-white">Sell an Item</Link>
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
