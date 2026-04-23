import { useState } from 'react';
import { Plus, BarChart3, Eye, ShieldCheck, Mail, Save, Clock, Trash2, Edit, Wallet, ArrowUpRight, Lock, CheckCircle2, ArrowDownRight, Package, Camera, UploadCloud, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [showProofModal, setShowProofModal] = useState(false);
  const [proofStep, setProofStep] = useState<'upload' | 'processing' | 'success'>('upload');

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
            { label: "Active Listings", value: "3", icon: <BarChart3 className="w-5 h-5 text-neutral-500" />, trend: "+1 this week"},
            { label: "Total Views", value: "1,248", icon: <Eye className="w-5 h-5 text-neutral-500" />, trend: "+12% this week"},
            { label: "Unread Messages", value: "2", icon: <Mail className="w-5 h-5 text-neutral-500" />, trend: "Reply quickly to boost score"},
            { label: "Completed Deals", value: "14", icon: <CheckCircle2 className="w-5 h-5 text-neutral-500" />, trend: "100% positive feedback"},
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
                <div className="text-4xl font-bold text-amber-500 tracking-tight">$400.00</div>
                <p className="text-xs text-neutral-500 mt-2">1 active deal. Funds will be released when the buyer confirms receipt.</p>
                <div className="mt-4 flex flex-col gap-2 relative">
                   <div className="w-full bg-neutral-100 rounded-lg p-3 text-sm flex justify-between items-center border border-neutral-200">
                     <span className="font-medium">Herman Miller Aeron Chair</span>
                     <span className="font-bold text-amber-600">$400</span>
                   </div>
                </div>
             </div>

             {/* Paid / Available Funds */}
             <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Available to Cash Out
                  </span>
                </div>
                <div className="text-4xl font-bold text-neutral-900 tracking-tight">$850.00</div>
                <p className="text-xs text-neutral-500 mt-2">Funds from completed deals. Ready to transfer to your bank account.</p>
                
                <div className="mt-4">
                  <button className="bg-neutral-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-neutral-800 transition flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center">
                    Cash Out to Bank <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
             </div>

           </div>
           
           {/* Lifetime Stats */}
           <div className="bg-neutral-50 p-4 border-t border-neutral-200 grid grid-cols-2 divide-x divide-neutral-200 text-center">
             <div className="flex flex-col items-center justify-center">
               <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1"><ArrowDownRight className="w-3 h-3 text-green-500"/> Lifetime Money In</p>
               <p className="text-xl font-bold text-green-600">+$2,450.00</p>
             </div>
             <div className="flex flex-col items-center justify-center">
               <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1"><ArrowUpRight className="w-3 h-3 text-red-500"/> Lifetime Money Spent</p>
               <p className="text-xl font-bold text-neutral-900">-$620.00</p>
             </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50">
             <h2 className="text-lg font-bold text-neutral-900">Your Listings</h2>
             <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-neutral-300 rounded-lg text-sm font-medium shadow-sm hover:bg-neutral-50 transition">Active (3)</button>
                <button className="px-3 py-1.5 text-neutral-500 hover:text-neutral-700 text-sm font-medium transition">Sold (14)</button>
             </div>
          </div>
          
          <div className="divide-y divide-neutral-100">
             {/* Example Active Listing 1 - In Escrow */}
             <div className="p-6 flex flex-col md:flex-row gap-6 hover:bg-neutral-50/50 transition relative">
                {/* Status Ribbon */}
                <div className="absolute top-6 -left-2 bg-amber-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-r shadow-md z-10 flex items-center gap-1">
                  <Lock className="w-3 h-3"/> Escrow Active
                </div>

                <div className="w-full md:w-48 aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden shrink-0 border border-neutral-200 pl-4 md:pl-0">
                  <img src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg mb-1">Herman Miller Aeron Chair</h3>
                    <div className="text-2xl font-bold text-primary-600 mb-4">$400</div>
                  </div>
                  
                  {/* Escrow Status Area */}
                  <div className="bg-amber-50/50 rounded-xl p-4 mb-4 border border-amber-200">
                    <div className="flex justify-between items-start mb-2">
                       <p className="text-sm font-bold text-amber-900">Buyer paid for shipping.</p>
                       <span className="bg-amber-100 text-amber-800 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Action Required</span>
                    </div>
                    <p className="text-xs text-amber-700 mb-3">Please provide the package weight and a photo of the item before shipping to activate Seller Protection.</p>
                    <button onClick={() => setShowProofModal(true)} className="bg-primary-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-primary-700 transition flex items-center gap-2 shadow-sm w-full justify-center sm:w-auto">
                      <Camera className="w-4 h-4"/> Provide Shipping Proof
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                     <span className="flex items-center gap-1"><Eye className="w-4 h-4"/> 104 views</span>
                     <span className="flex items-center gap-1"><Save className="w-4 h-4"/> 12 saves</span>
                     <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> Listed 4 days ago</span>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-2 shrink-0 border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-6 items-center md:items-stretch justify-center">
                   <Link to="/messages" className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-neutral-800 text-center flex items-center justify-center gap-2">
                     <Mail className="w-4 h-4"/> Contact Buyer
                   </Link>
                </div>
             </div>

             {/* Example Active Listing 2 */}
             <div className="p-6 flex flex-col md:flex-row gap-6 hover:bg-neutral-50/50 transition">
                <div className="w-full md:w-40 aspect-[4/3] bg-neutral-100 rounded-xl overflow-hidden shrink-0 border border-neutral-200">
                  <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg mb-1">Sony A7III Camera + Lens kit</h3>
                    <div className="text-xl font-bold text-neutral-600 mb-4">$1,450</div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-4 md:mb-0">
                     <span className="flex items-center gap-1"><Eye className="w-4 h-4"/> 845 views</span>
                     <span className="flex items-center gap-1"><Save className="w-4 h-4"/> 34 saves</span>
                     <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> Listed 2 hrs ago</span>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0 items-start justify-end">
                   <button className="p-2 border border-neutral-200 text-neutral-600 rounded-lg shadow-sm hover:bg-neutral-50 transition tooltip-trigger" title="Edit">
                     <Edit className="w-4 h-4" />
                   </button>
                   <button className="p-2 border border-neutral-200 text-red-500 rounded-lg shadow-sm hover:bg-red-50 transition" title="Delete">
                     <Trash2 className="w-4 h-4" />
                   </button>
                </div>
             </div>
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
