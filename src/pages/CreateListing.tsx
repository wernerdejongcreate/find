import React, { useState } from 'react';
import { Camera, MapPin, DollarSign, ArrowRight, UploadCloud, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useListings } from '../hooks/useListings';

export default function CreateListing() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('Good');
  const [sponsored, setSponsored] = useState(false);
  const navigate = useNavigate();
  const { addListing } = useListings();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      
      const newListing = {
        title: title || "New Untitled Listing",
        price: parseFloat(price) || 0,
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400", // Default shoe img
        dist: 0.1,
        verified: true,
        time: "Just now",
        sellerScore: 100,
        condition: condition,
        sponsored: sponsored,
      };
      
      addListing(newListing);

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }
  };

  return (
    <div className="bg-neutral-50 min-h-[calc(100vh-64px)] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Tracker */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Create New Listing</h1>
          <p className="text-neutral-500">Fast, secure local selling starts here.</p>
          
          <div className="flex justify-center items-center mt-8 space-x-2">
            <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
            <div className={`w-8 h-1 rounded ${step >= 2 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
            <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
            <div className={`w-8 h-1 rounded ${step >= 3 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
            <div className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
          <form onSubmit={handleNext}>
            {step === 1 && (
              <div className="p-8 md:p-12 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Step 1: Photos & Details</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Upload Photos</label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-10 text-center hover:bg-neutral-50 hover:border-primary-500 transition cursor-pointer">
                     <UploadCloud className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
                     <p className="text-sm text-neutral-600 font-medium">Click or drag photos here</p>
                     <p className="text-xs text-neutral-400 mt-1">Upload up to 10 images. High quality photos sell faster.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Item Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500" placeholder="e.g. Sony A7III Camera + Lens" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Description</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500" placeholder="Describe the condition, usage, and any defects..." />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="p-8 md:p-12 animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Step 2: Price & Location</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Selling Price</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-neutral-500" />
                      </div>
                      <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} className="block w-full pl-11 pr-4 py-3 text-lg border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 font-semibold" placeholder="0.00" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Category & Condition</label>
                    <div className="grid grid-cols-2 gap-4">
                      <select className="px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white">
                        <option>Electronics</option>
                        <option>Furniture</option>
                        <option>Clothing</option>
                        <option>Tools</option>
                      </select>
                      <select value={condition} onChange={(e) => setCondition(e.target.value)} className="px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white">
                        <option>Brand New</option>
                        <option>Like New</option>
                        <option>Good</option>
                        <option>Fair</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Meetup Location (Zip Code)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-neutral-500" />
                      </div>
                      <input type="text" className="block w-full pl-11 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500" defaultValue="94103" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <label className="flex items-start gap-3 p-4 bg-primary-50 border border-primary-200 rounded-xl cursor-pointer hover:bg-primary-100 transition shadow-sm">
                      <input 
                        type="checkbox" 
                        checked={sponsored}
                        onChange={(e) => setSponsored(e.target.checked)}
                        className="mt-1 rounded border-primary-400 text-primary-600 focus:ring-primary-500" 
                      />
                      <div>
                         <span className="block text-sm font-bold text-primary-900">Promote as Sponsored Listing</span>
                         <span className="block text-xs text-primary-700 mt-1">Appear at the top of search results and category pages for 7 days.</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="p-8 md:p-12 text-center animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tag className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Ready to Post!</h3>
                <p className="text-neutral-600 mb-8 max-w-md mx-auto">Your listing is secure and protected by Findit's Escrow system. Once your buyer pays, you'll be notified to arrange a meetup.</p>
                
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 text-left max-w-sm mx-auto mb-6">
                   <h4 className="font-semibold text-neutral-900 mb-2">Seller Protections Enabled:</h4>
                   <ul className="text-sm text-neutral-600 space-y-2">
                     <li className="flex gap-2">✓ Payment confirmed before meeting</li>
                     <li className="flex gap-2">✓ No show? 20% deposit penalty protected</li>
                     <li className="flex gap-2">✓ Dispute mediation assistance</li>
                   </ul>
                </div>
              </div>
            )}

            <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 border border-neutral-300 rounded-xl text-neutral-700 font-medium hover:bg-neutral-100 transition">
                  Back
                </button>
              ) : (
                <Link to="/dashboard" className="px-6 py-3 text-neutral-500 font-medium hover:text-neutral-800 transition">
                  Cancel
                </Link>
              )}
              
              <button disabled={isSubmitting} type="submit" className="bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition flex items-center gap-2 disabled:opacity-50 shadow-sm">
                {isSubmitting ? 'Publishing...' : step === 3 ? 'Publish Listing' : 'Next'} {!isSubmitting && step < 3 && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
