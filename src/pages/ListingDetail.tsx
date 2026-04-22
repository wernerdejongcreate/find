import { MapPin, ShieldCheck, Clock, CheckCircle2, AlertTriangle, MessageSquare, Heart, Lock, ChevronLeft, CreditCard } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ListingDetail() {
  const { id } = useParams();

  // Mock data based on the ID for preview
  const data = {
    title: "Sony A7III Camera + Lens kit excellent condition",
    price: 1450,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800&auto=format&fit=crop&w=400&q=60"
    ],
    description: `Selling my beloved Sony A7III. I've only used it for a few weekend trips, shutter count is less than 5000. It comes with the standard kit lens, a carrying bag, an extra battery, and original charging cables.
    
The screen has had a protector on since day 1 so no scratches. Reason for selling: Upgrading to A7IV.
    
Happy to let you test it out before accepting the item. Let me know if you have any questions!`,
    condition: "Like New",
    postedAt: "2 hours ago",
    views: 45,
    location: "Downtown, San Francisco (approx 1.2 mi)",
    seller: {
      name: "Alex Tran",
      initial: "A",
      memberSince: "2022",
      verified: true,
      trustScore: 98,
      completedDeals: 14,
      avgResponseTime: "< 1 hour"
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-6">
          <Link to="/marketplace" className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to search results
          </Link>
        </div>

        {/* Global Warning (Example of Anomaly Detection) */}
        {/* <div className="mb-6 bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-amber-800 font-bold text-sm">Price Anomaly Detected</h4>
            <p className="text-amber-700 text-sm mt-1">Note: This item is priced significantly lower than average market value. Buyers should verify authenticity and use Findit Escrow.</p>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content: Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
              <div className="aspect-[4/3] sm:aspect-video bg-neutral-100 relative">
                <img src={data.images[0]} alt={data.title} className="w-full h-full object-cover" />
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full text-neutral-600 hover:text-red-500 shadow-sm transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2 p-4 border-t border-neutral-100 bg-neutral-50/50">
                <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden border-2 border-primary-500">
                  <img src={data.images[0]} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden border border-neutral-200 opacity-60 hover:opacity-100 cursor-pointer transition">
                  <img src={data.images[0]} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Title & Desc */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-1 rounded">{data.condition}</span>
                <span className="flex items-center gap-1 text-sm text-neutral-500"><Clock className="w-4 h-4" /> {data.postedAt} • {data.views} views</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">{data.title}</h1>
              
              <div className="prose prose-neutral max-w-none">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-neutral-600 whitespace-pre-wrap leading-relaxed">{data.description}</p>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                 <h3 className="text-lg font-semibold mb-4">Approximate Location</h3>
                 <div className="flex items-center gap-2 text-neutral-600 mb-4">
                   <MapPin className="w-5 h-5" /> {data.location}
                 </div>
                 <div className="h-48 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-neutral-400">Map view hidden for privacy</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar: Price, Action, Seller */}
          <div className="space-y-6 lg:sticky lg:top-24 h-max">
            
            {/* Purchase Card */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-200/40">
              <div className="text-3xl font-bold text-neutral-900 mb-6">${data.price.toLocaleString()}</div>
              
              <div className="space-y-3 mb-6">
                 <button className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition flex justify-center items-center gap-2 shadow-sm">
                   <Lock className="w-5 h-5" /> Buy it Securely
                 </button>
                 <button className="w-full bg-white text-neutral-700 font-bold py-3.5 rounded-xl border-2 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition flex justify-center items-center gap-2">
                   <MessageSquare className="w-5 h-5" /> Message Seller
                 </button>
              </div>

              {/* Trust Reinforcement Box */}
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">Money-Back Guarantee</h4>
                    <p className="text-xs text-neutral-500 mt-1">Funds are held securely in escrow until you verify the item in person.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-3 border-t border-neutral-200">
                  <CreditCard className="w-5 h-5 text-neutral-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">No cash needed</h4>
                    <p className="text-xs text-neutral-500 mt-1">Pay with card or Apple Pay now, pick up later.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Profile Card */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
               <h3 className="font-semibold text-neutral-900 border-b border-neutral-100 pb-3 mb-4">About the Seller</h3>
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xl font-bold border border-primary-200 shrink-0">
                    {data.seller.initial}
                 </div>
                 <div>
                   <h4 className="font-bold text-neutral-900 text-lg flex items-center gap-1">
                     {data.seller.name} 
                     {data.seller.verified && <ShieldCheck className="w-4 h-4 text-green-500" />}
                   </h4>
                   <p className="text-sm text-neutral-500">Member since {data.seller.memberSince}</p>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-3 mb-6">
                 <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 text-center">
                    <div className="text-xl font-bold text-green-600 mb-1">{data.seller.trustScore}</div>
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Trust Score</div>
                 </div>
                 <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 text-center">
                    <div className="text-xl font-bold text-neutral-900 mb-1">{data.seller.completedDeals}</div>
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Safely Sold</div>
                 </div>
               </div>

               <ul className="space-y-2 text-sm text-neutral-600 mb-6">
                 <li className="flex gap-2">
                   <div className="w-4 flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                   <span>Identity Verified (ID & Selfie)</span>
                 </li>
                 <li className="flex gap-2">
                   <div className="w-4 flex justify-center"><CheckCircle2 className="w-4 h-4 text-green-500" /></div>
                   <span>Phone & Email Verified</span>
                 </li>
                 <li className="flex gap-2">
                   <div className="w-4 flex justify-center"><Clock className="w-4 h-4 text-neutral-400" /></div>
                   <span>Replies {data.seller.avgResponseTime}</span>
                 </li>
               </ul>

               <Link to="#" className="text-primary-600 text-sm font-medium hover:underline flex justify-center pt-4 border-t border-neutral-100">
                 View all listings by {data.seller.name}
               </Link>
            </div>

            {/* Report listing */}
            <div className="text-center">
              <button className="text-xs font-medium text-neutral-400 hover:text-red-500 transition px-4 py-2 flex items-center gap-1 justify-center w-full">
                <AlertTriangle className="w-3.5 h-3.5" /> Report suspicious listing
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
