/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ListingDetail from './pages/ListingDetail';
import Messages from './pages/Messages';
import Dashboard from './pages/Dashboard';
import TrustSafety from './pages/TrustSafety';
import Payments from './pages/Payments';
import AuthFlow from './pages/AuthFlow';
import CreateListing from './pages/CreateListing';
import Verification from './pages/Verification';
import ProofOfAddress from './pages/ProofOfAddress';
import Settings from './pages/Settings';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuth = localStorage.getItem('findit_auth') === 'true';
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="animate-in fade-in zoom-in-[0.98] duration-1000">
        <Routes>
          <Route path="/login" element={<AuthFlow mode="login" />} />
          <Route path="/signup" element={<AuthFlow mode="signup" />} />
          <Route path="/verification" element={<ProtectedRoute><Verification /></ProtectedRoute>} />
          <Route path="/proof-of-address" element={<ProtectedRoute><ProofOfAddress /></ProtectedRoute>} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="listing/:id" element={<ListingDetail />} />
            <Route path="trust" element={<TrustSafety />} />
            <Route path="payments" element={<Payments />} />
            
            {/* Protected Routes */}
            <Route path="messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="create-listing" element={<ProtectedRoute><CreateListing /></ProtectedRoute>} />
            <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
