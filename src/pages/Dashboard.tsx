import { Plus, BarChart3, Eye, ShieldCheck, Mail, Save, Clock, Trash2, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">Seller Dashboard</h1>
            <p className="text-neutral-500 mt-1">Manage listings, track performance, and handle escrows.</p>
          </div>
          <Link to="#" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-primary-700 transition shadow-sm border border-primary-700">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Active Listings", value: "3", icon: <BarChart3 className="w-5 h-5 text-neutral-500" />, trend: "+1 this week"},
            { label: "Total Views", value: "1,248", icon: <Eye className="w-5 h-5 text-neutral-500" />, trend: "+12% this week"},
            { label: "Pending Sales (Escrow)", value: "$400", icon: <Clock className="w-5 h-5 text-neutral-500" />, trend: "1 waiting delivery"},
            { label: "Unread Messages", value: "2", icon: <Mail className="w-5 h-5 text-neutral-500" />, trend: "Reply quickly to boost score"},
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
                  <div className="bg-neutral-100 rounded-xl p-4 mb-4 border border-neutral-200">
                    <p className="text-sm font-medium text-neutral-900 mb-2">Buyer has deposited funds.</p>
                    <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                      <div className="bg-amber-500 h-2 rounded-full w-1/2"></div>
                    </div>
                    <p className="text-xs text-neutral-500">Meet up and have buyer tap "Confirm Receipt" to release funds to your bank.</p>
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
    </div>
  );
}
