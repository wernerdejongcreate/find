import React, { useState } from 'react';
import { Plus, BarChart3, Eye, ShieldCheck, Mail, Save, Clock, Trash2, Edit, Wallet, ArrowUpRight, Lock, CheckCircle2, ArrowDownRight, Package, Camera, UploadCloud, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useListings } from '../hooks/useListings';

export default function Dashboard() {
  const [showProofModal, setShowProofModal] = useState(false);
  const [proofStep, setProofStep] = useState<'upload' | 'processing' | 'success'>('upload');
  const [activeTab, setActiveTab] = useState<'active' | 'sold'>('active');
  const [showCashOutSuccess, setShowCashOutSuccess] = useState(false);
  
  const { listings, markAsSold, deleteListing, cashOutFunds } = useListings();
  const myActiveListings = listings.filter(l => l.isMine && !l.sold);
  const mySoldListings = listings.filter(l => l.isMine && l.sold);

  const pendingFunds = myActiveListings.reduce((acc, curr) => acc + curr.price, 0); // Fake pending
  const availableFunds = mySoldListings.reduce((acc, curr) => curr.cashedOut ? acc : acc + curr.price, 0);

  const handleCashOut = () => {
    if (availableFunds > 0) {
      cashOutFunds();
      setShowCashOutSuccess(true);
      setTimeout(() => setShowCashOutSuccess(false), 3000);
    }
  };

  const handleProofSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProofStep('processing');
    setTimeout(() => setProofStep('success'), 2000);
  };
  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">Seller Dashboard</h1>
            <p className="text-neutral-500 mt-1">Manage listings, track performance, and handle escrows.</p>
          </div>
          <Link to="/create-listing" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-primary-700 transition shadow-sm border border-primary-700">
            <Plus className="w-5 h-5" /> Create New Listing
          </Link>
        </div>

        {/* Verification Banner */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
           <div className="flex items-start sm:items-center gap-4">
             <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
               <ShieldCheck className="w-8 h-8" />
             </div>
             <div>
                <h3 className="font-bold text-green-900 text-lg">You are a Verified Seller</h3>
                <p className="text-green-800 text-sm mt-1">Verified sellers get up to 3x more views and finalize sales 40% faster. Thank you for keeping Findit safe.</p>
             </div>
           </div>
           <div className="bg-white/60 px-4 py-2 rounded-lg border border-green-200 font-bold text-green-800 shrink-0">
             Trust Score: 98/100
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Listings", value: myActiveListings.length.toString(), icon: <BarChart3 className="w-5 h-5 text-neutral-500" />, trend: "+1 this week"},
            { label: "Total Views", value: "1,248", icon: <Eye className="w-5 h-5 text-neutral-500" />, trend: "+12% this week"},
            { label: "Unread Messages", value: "2", icon: <Mail className="w-5 h-5 text-neutral-500" />, trend: "Reply quickly to boost score"},
            { label: "Completed Deals", value: mySoldListings.length > 0 ? mySoldListings.length.toString() : "14", icon: <CheckCircle2 className="w-5 h-5 text-neutral-500" />, trend: "100% positive feedback"},
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-500 font-medium text-sm">{stat.label}</span>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</div>
              <div className="text-xs text-neutral-500 font-medium bg-neutral-100 inline-block px-2 py-1 rounded">{stat.trend}</div>
            </div>
          ))}
        </div>

        {/* Wallet Section */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden mb-8">
           <div className="p-6 border-b border-neutral-200 bg-neutral-50/50 flex items-center justify-between">
              <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary-600" /> My Wallet
              </h2>
              <Link to="#" className="text-sm font-medium text-primary-600 hover:text-primary-700">View History</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
             
             {/* Pending / Escrow Funds */}
             <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-500 flex items-center gap-1">
                    <Lock className="w-4 h-4" /> Pending in Escrow
                  </span>
                </div>
                <div className="text-4xl font-bold text-amber-500 tracking-tight">${pendingFunds.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <p className="text-xs text-neutral-500 mt-2">{myActiveListings.length} active deal{myActiveListings.length === 1 ? '' : 's'}. Funds will be released when the buyer confirms receipt.</p>
                <div className="mt-4 flex flex-col gap-2 relative">
                   {myActiveListings.slice(0, 3).map(l => (
                     <div key={l.id} className="w-full bg-neutral-100 rounded-lg p-3 text-sm flex justify-between items-center border border-neutral-200">
                       <span className="font-medium truncate pr-4">{l.title}</span>
                       <span className="font-bold text-amber-600">${l.price}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Paid / Available Funds */}
             <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Available to Cash Out
                  </span>
                </div>
                <div className="text-4xl font-bold text-neutral-900 tracking-tight">${availableFunds.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <p className="text-xs text-neutral-500 mt-2">Funds from completed deals. Ready to transfer to your bank account.</p>
                
                <div className="mt-4">
                  {showCashOutSuccess ? (
                    <div className="bg-green-100 text-green-800 font-bold py-3 px-6 rounded-xl flex items-center gap-2 justify-center w-full sm:w-auto shadow-sm">
                      <CheckCircle2 className="w-5 h-5" /> Transfer Initiated!
                    </div>
                  ) : (
                    <button 
                      onClick={handleCashOut}
                      disabled={availableFunds === 0}
                      className="bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center"
                    >
                      Cash Out to Bank <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
             </div>

           </div>
           
           {/* Lifetime Stats */}
           <div className="bg-neutral-50 p-4 border-t border-neutral-200 grid grid-cols-2 divide-x divide-neutral-200 text-center">
             <div className="flex flex-col items-center justify-center">
               <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1"><ArrowDownRight className="w-3 h-3 text-green-500"/> Lifetime Money In</p>
               <p className="text-xl font-bold text-green-600">+${(availableFunds + 2450).toLocaleString()}</p>
             </div>
             <div className="flex flex-col items-center justify-center">
               <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1"><ArrowUpRight className="w-3 h-3 text-red-500"/> Lifetime Money Spent</p>
               <p className="text-xl font-bold text-neutral-900">-$620.00</p>
             </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden mb-12">
          <div className="p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50">
             <h2 className="text-lg font-bold text-neutral-900">Your Listings</h2>
             <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('active')}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition shadow-sm ${activeTab === 'active' ? 'bg-white border border-neutral-300 text-neutral-900' : 'bg-transparent text-neutral-500 hover:text-neutral-700'}`}
                >
                  Active ({myActiveListings.length})
                </button>
                <button 
                  onClick={() => setActiveTab('sold')}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition shadow-sm ${activeTab === 'sold' ? 'bg-white border border-neutral-300 text-neutral-900' : 'bg-transparent text-neutral-500 hover:text-neutral-700'}`}
                >
                  Sold ({mySoldListings.length})
                </button>
             </div>
          </div>
          
          <div className="divide-y divide-neutral-100">
             {(activeTab === 'active' ? myActiveListings : mySoldListings).map(listing => (
               <div key={listing.id} className="p-6 flex flex-col md:flex-row gap-6 hover:bg-neutral-50/50 transition relative">
                  <div className="w-full md:w-40 aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden shrink-0 border border-neutral-200">
                    <img src={listing.img} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-neutral-900 text-lg mb-1">{listing.title}</h3>
                      <div className="text-xl font-bold text-neutral-600 mb-4">${listing.price.toLocaleString()}</div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4 md:mb-0">
                       <span className="flex items-center gap-1"><Eye className="w-4 h-4"/> 14 views</span>
                       <span className="flex items-center gap-1"><Save className="w-4 h-4"/> 2 saves</span>
                       <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> Listed recently</span>
                    </div>
                  </div>

                  <div className="flex gap-2 shrink-0 items-start justify-end flex-col sm:flex-row">
                     {!listing.sold && (
                       <button onClick={() => markAsSold(listing.id)} className="px-4 py-2 border border-neutral-200 bg-white text-neutral-900 font-bold rounded-lg shadow-sm hover:bg-neutral-50 transition w-full sm:w-auto flex justify-center items-center gap-2">
                         <CheckCircle2 className="w-4 h-4 text-green-500" /> Mark Sold
                       </button>
                     )}
                     <div className="flex gap-2 w-full justify-end">
                       {!listing.sold && (
                         <button className="p-2 border border-neutral-200 text-neutral-600 rounded-lg shadow-sm hover:bg-neutral-50 transition tooltip-trigger" title="Edit">
                           <Edit className="w-4 h-4" />
                         </button>
                       )}
                       <button onClick={() => deleteListing(listing.id)} className="p-2 border border-neutral-200 text-red-500 rounded-lg shadow-sm hover:bg-red-50 transition" title="Delete">
                         <Trash2 className="w-4 h-4" />
                       </button>
                     </div>
                  </div>
               </div>
             ))}
             
             {(activeTab === 'active' ? myActiveListings : mySoldListings).length === 0 && (
               <div className="p-12 text-center text-neutral-500">
                 You don't have any {activeTab} listings right now.
               </div>
             )}
          </div>
        </div>

      </div>

      {/* SHIPPING PROOF MODAL */}
      {showProofModal && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col">
            
            <div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50 rounded-t-3xl shrink-0">
              <div className="flex items-center gap-2 text-primary-900 font-bold text-lg">
                <Package className="w-5 h-5 text-primary-600" /> Pre-Shipment Proof
              </div>
              {proofStep !== 'processing' && (
                <button 
                  onClick={() => setShowProofModal(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="p-6 md:p-8">
              {proofStep === 'upload' && (
                <form onSubmit={handleProofSubmit} className="animate-in fade-in slide-in-from-right-4">
                  <p className="text-sm text-neutral-600 mb-6">
                    Protect yourself from false claims. Upload a clear photo of the item and its package weight before generating the shipping label.
                  </p>
                  
                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Package Weight</label>
                    <div className="flex items-center gap-2">
                      <input required type="number" step="0.1" className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:bg-primary-50 transition shadow-sm" placeholder="e.g. 2.5" />
                      <select className="px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white shadow-sm font-medium text-neutral-700">
                        <option>lbs</option>
                        <option>oz</option>
                        <option>kg</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Item Status Photo</label>
                    <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-8 text-center hover:bg-neutral-50 hover:border-primary-500 transition cursor-pointer relative group">
                       <UploadCloud className="w-8 h-8 text-neutral-400 mx-auto mb-2 group-hover:text-primary-500 transition" />
                       <p className="text-sm text-neutral-600 font-medium">Click to upload photo</p>
                       <p className="text-xs text-neutral-400 mt-1">JPEG/PNG, up to 10MB</p>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl hover:bg-primary-700 transition shadow-sm flex items-center justify-center gap-2">
                    Submit & Generate Label
                  </button>
                </form>
              )}

              {proofStep === 'processing' && (
                <div className="h-[300px] flex flex-col justify-center items-center py-12 animate-in fade-in">
                  <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-6" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Verifying Proof...</h3>
                  <p className="text-neutral-500 text-center max-w-xs">Uploading your photo to our secure fraud prevention vault.</p>
                </div>
              )}

              {proofStep === 'success' && (
                <div className="h-[300px] flex flex-col justify-center items-center py-8 animate-in fade-in zoom-in-95">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex justify-center items-center mb-6 shadow-green-100 shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Pre-Shipment Saved!</h3>
                  <p className="text-neutral-600 text-center mb-8 max-w-xs">
                    Your shipping proof is locked securely. You are now protected by Seller Protection.
                  </p>
                  
                  <button 
                    onClick={() => {
                      setShowProofModal(false);
                      setProofStep('upload');
                    }}
                    className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl hover:bg-primary-700 transition shadow-sm"
                  >
                    View Shipping Label
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
