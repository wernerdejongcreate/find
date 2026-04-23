/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthFlow mode="login" />} />
        <Route path="/signup" element={<AuthFlow mode="signup" />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="listing/:id" element={<ListingDetail />} />
          <Route path="messages" element={<Messages />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="trust" element={<TrustSafety />} />
          <Route path="payments" element={<Payments />} />
          <Route path="create-listing" element={<CreateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
