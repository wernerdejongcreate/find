import { useState, useMemo } from 'react';
import { MapPin, ShieldCheck, Clock, CheckCircle2, AlertTriangle, MessageSquare, Heart, Lock, ChevronLeft, CreditCard, X, Smartphone, Loader2, Truck, User } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useListings } from '../hooks/useListings';
import { motion, AnimatePresence } from 'motion/react';

export default function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { listings } = useListings();
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'processing' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple'>('card');
  const [deliveryMethod, setDeliveryMethod] = useState<'meetup' | 'shipping'>('meetup');

  // Load active listing
  const activeListing = useMemo(() => {
    const found = listings.find((l) => l.id.toString() === id);
    if (found) return found;
    return listings[0]; // fallback
  }, [id, listings]);

  const data = {
    title: activeListing?.title || "Sony A7III Camera + Lens kit excellent condition",
    price: activeListing?.price || 1450,
    images: [
      activeListing?.img || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
       activeListing?.img || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800&auto=format&fit=crop&w=400&q=60"
    ],
    description: `Selling my beloved item. It is in great condition. I've only used it a few times. \n\nReason for selling: Decluttering and raising funds for a move.\n\nHappy to let you test it out before accepting the item. Let me know if you have any questions!`,
    condition: activeListing?.condition || "Like New",
    postedAt: activeListing?.time || "2 hours ago",
    views: 45,
    location: "Downtown, San Francisco (approx 1.2 mi)",
    seller: {
      name: activeListing?.isMine ? "You" : "Alex Tran",
      initial: activeListing?.isMine ? "Y" : "A",
      memberSince: "2022",
      verified: activeListing ? activeListing.verified : true,
      trustScore: activeListing?.sellerScore || 98,
      completedDeals: 14,
      avgResponseTime: "< 1 hour"
    }
  };

  const shippingCost = 15;
  const buyerFeePercent = 0.05;
  const buyerFee = data.price * buyerFeePercent;
  const serviceFeePercent = 0.03;
  const serviceFee = data.price * serviceFeePercent;
  const total = (deliveryMethod === 'shipping' ? data.price + shippingCost + buyerFee + serviceFee : data.price + buyerFee + serviceFee);
  
  const sellerEarnings = data.price; 

  const handlePay = () => {
    setCheckoutStep('processing');
    setTimeout(() => {
       setCheckoutStep('success');
    }, 2000);
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <div className="mb-6">
          <Link to="/marketplace" className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to search results
          </Link>
        </div>

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
                 <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition flex justify-center items-center gap-2 shadow-sm"
                 >
                   <Lock className="w-5 h-5" /> Buy it Securely
                 </button>
                 <button 
                  onClick={() => navigate(`/messages?chatId=${id}`)}
                  className="w-full bg-white text-neutral-700 font-bold py-3.5 rounded-xl border-2 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition flex justify-center items-center gap-2"
                 >
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

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50 shrink-0 rounded-t-3xl">
              <div className="flex items-center gap-2 text-primary-900 font-bold text-lg">
                <Lock className="w-5 h-5 text-green-500" /> Secure Checkout
              </div>
              {checkoutStep !== 'processing' && (
                <button 
                  onClick={() => setShowCheckout(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="p-6 md:p-8 min-h-[400px] overflow-y-auto">
              
              {checkoutStep === 'details' && (
                <div className="animate-in fade-in slide-in-from-right-4">
                  <div className="flex gap-4 items-center bg-neutral-50 p-4 rounded-xl border border-neutral-200 mb-6">
                    <img src={data.images[0]} className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm line-clamp-1">{data.title}</h4>
                      <p className="text-sm text-neutral-500">Pick up from: {data.seller.name}</p>
                      <div className="font-bold text-primary-600 mt-1">${data.price.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="mb-6 border-b border-neutral-100 pb-6">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3">Delivery Method</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => setDeliveryMethod('meetup')}
                        className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${deliveryMethod === 'meetup' ? 'border-primary-600 bg-primary-50 text-primary-900 shadow-sm' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                      >
                        <User className="w-6 h-6" />
                        <span className="text-sm font-medium">Local Meetup</span>
                        <span className="text-xs text-neutral-500">Free</span>
                      </button>
                      <button 
                        onClick={() => setDeliveryMethod('shipping')}
                        className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${deliveryMethod === 'shipping' ? 'border-primary-600 bg-primary-50 text-primary-900 shadow-sm' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                      >
                        <Truck className="w-6 h-6" />
                        <span className="text-sm font-medium">Shipping</span>
                        <span className="text-xs text-neutral-500">+${shippingCost}</span>
                      </button>
                    </div>
                  </div>

                  {deliveryMethod === 'shipping' && (
                    <div className="mb-6 border-b border-neutral-100 pb-6 animate-in fade-in slide-in-from-top-2">
                       <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-3">Shipping Address</label>
                       <input type="text" placeholder="Full Name" className="w-full px-4 py-3 mb-3 border border-neutral-300 rounded-xl focus:outline-none focus:bg-primary-50 transition shadow-sm" />
                       <input type="text" placeholder="Street Address" className="w-full px-4 py-3 mb-3 border border-neutral-300 rounded-xl focus:outline-none focus:bg-primary-50 transition shadow-sm" />
                       <div className="grid grid-cols-2 gap-3">
                         <input type="text" placeholder="City" className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:bg-primary-50 transition shadow-sm" />
                         <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:bg-primary-50 transition shadow-sm" />
                       </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-3">Select Payment Method</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-primary-600 bg-primary-50 text-primary-900 shadow-sm' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                      >
                        <CreditCard className="w-6 h-6" />
                        <span className="text-sm font-medium">Credit Card</span>
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('apple')}
                        className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'apple' ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm' : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'}`}
                      >
                        <Smartphone className="w-6 h-6" />
                        <span className="text-sm font-medium">Apple Pay</span>
                      </button>
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 mb-8">
                       <div>
                         <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">Card Information</label>
                         <div className="border border-neutral-300 rounded-xl overflow-hidden shadow-sm">
                           <input type="text" placeholder="Card number" className="w-full px-4 py-3 border-b border-neutral-300 focus:outline-none focus:bg-primary-50 transition" />
                           <div className="grid grid-cols-2">
                             <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 border-r border-neutral-300 focus:outline-none focus:bg-primary-50 transition" />
                             <input type="text" placeholder="CVC" className="w-full px-4 py-3 focus:outline-none focus:bg-primary-50 transition" />
                           </div>
                         </div>
                       </div>
                       <div>
                         <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">Cardholder Name</label>
                         <input type="text" placeholder="Name on card" className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:bg-primary-50 transition shadow-sm" />
                       </div>
                    </div>
                  )}

                  {paymentMethod === 'apple' && (
                    <div className="mb-8 py-10 text-center text-neutral-500 text-sm">
                       Please confirm payment using your Apple device when prompted.
                    </div>
                  )}

                  {/* Order Summary breakdown */}
                  <div className="bg-neutral-50 rounded-xl p-4 mb-6 border border-neutral-200 text-sm space-y-2">
                    <div className="flex justify-between items-center text-neutral-600">
                      <span>Item Price</span>
                      <span>${data.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    {deliveryMethod === 'shipping' && (
                      <div className="flex justify-between items-center text-neutral-600">
                        <span>Shipping</span>
                        <span>${shippingCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-neutral-600">
                      <span>Buyer Protection Fee (5%)</span>
                      <span>${buyerFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-600 border-b border-neutral-200 pb-2">
                      <span>Platform Service Fee (3%)</span>
                      <span>${serviceFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-neutral-900 pt-2 text-base">
                      <span>Total to Pay</span>
                      <span>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-neutral-200 text-xs text-neutral-500 flex justify-between">
                      <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Seller Payout:</span>
                      <span className="font-medium text-neutral-600">${sellerEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (100% of item price)</span>
                    </div>
                  </div>

                  <button 
                    onClick={handlePay}
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition shadow-sm"
                  >
                    Pay ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Securely
                  </button>
                  <p className="text-xs text-center text-neutral-500 mt-4 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" /> Payments are processed securely and held in Escrow.
                  </p>
                </div>
              )}

              {checkoutStep === 'processing' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col justify-center items-center py-12"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="mb-8 relative"
                  >
                     <div className="absolute inset-0 bg-primary-100 rounded-full blur-xl scale-150"></div>
                     <Loader2 className="w-16 h-16 text-primary-600 relative z-10" />
                  </motion.div>
                  <motion.h3 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-neutral-900 mb-2"
                  >
                    Processing Payment...
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-neutral-500 text-center max-w-xs"
                  >
                    Securing your funds in our shielded escrow account.
                  </motion.p>
                </motion.div>
              )}

              {checkoutStep === 'success' && (
                <div className="h-full flex flex-col justify-center items-center py-8 animate-in fade-in zoom-in-95">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex justify-center items-center mb-6 shadow-green-100 shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Payment Secured!</h3>
                  <p className="text-neutral-600 text-center mb-8 max-w-sm">
                    Findit Escrow has successfully locked ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}. {deliveryMethod === 'meetup' ? 'The seller has been notified to arrange a meetup.' : 'The seller has been notified to ship your item.'}
                  </p>
                  
                  <div className="w-full space-y-3">
                    <button 
                      onClick={() => {
                        setShowCheckout(false);
                        navigate('/messages');
                      }}
                      className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-5 h-5" /> Message Seller for Meetup
                    </button>
                    <button 
                      onClick={() => setShowCheckout(false)}
                      className="w-full bg-neutral-100 text-neutral-700 font-bold py-3.5 rounded-xl hover:bg-neutral-200 transition"
                    >
                      Close Checkout
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
