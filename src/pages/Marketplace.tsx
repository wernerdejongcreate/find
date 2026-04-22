import { MapPin, Search, Filter, SlidersHorizontal, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MOCK_LISTINGS = [
  { id: 1, title: "Sony A7III Camera + Lens kit excellent condition", price: 1450, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400", dist: 1.2, verified: true, time: "2h ago", sellerScore: 98, condition: "Like New" },
  { id: 2, title: "Herman Miller Aeron Chair Size B", price: 400, img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400", dist: 3.5, verified: true, time: "4h ago", sellerScore: 100, condition: "Good" },
  { id: 3, title: "MacBook Pro M1 2020 16GB RAM 512GB SSD", price: 750, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400", dist: 0.8, verified: false, time: "5h ago", sellerScore: 85, condition: "Fair" },
  { id: 4, title: "Nintendo Switch OLED White Joycons", price: 280, img: "https://images.unsplash.com/photo-1622297843482-19e0edb8932c?auto=format&fit=crop&q=80&w=400", dist: 2.1, verified: true, time: "1d ago", sellerScore: 95, condition: "Like New" },
  { id: 5, title: "Yamaha Acoustic Guitar FG800", price: 150, img: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=400", dist: 5.0, verified: true, time: "2d ago", sellerScore: 92, condition: "Good" },
  { id: 6, title: "Vintage Leather Jacket Medium", price: 85, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400", dist: 1.5, verified: true, time: "3d ago", sellerScore: 100, condition: "Used - Vintage" },
];

export default function Marketplace() {
  const [view, setView] = useState<'grid'|'map'>('grid');

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* SEARCH & FILTER BAR */}
      <div className="sticky top-16 z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Main Search Input */}
            <div className="relative w-full md:flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-xl leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-neutral-900"
                placeholder="What are you looking for?"
              />
            </div>

            {/* Location */}
            <div className="relative w-full md:w-64 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-xl leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                placeholder="Near you (e.g. 5 miles)"
                defaultValue="San Francisco, CA"
              />
            </div>
            
             {/* Map Toggle & Filters (Mobile) */}
             <div className="flex w-full md:w-auto gap-2">
              <button className="flex-1 md:w-auto bg-neutral-100 hover:bg-neutral-200 px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 text-neutral-700 transition">
                <SlidersHorizontal className="w-4 h-4" /> <span className="md:hidden">Filters</span>
              </button>
              <div className="bg-neutral-100 p-1 rounded-xl flex">
                <button onClick={()=>setView('grid')} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${view === 'grid' ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'}`}>Grid</button>
                <button onClick={()=>setView('map')} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${view === 'map' ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'}`}>Map</button>
              </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-start gap-8">
        
        {/* DESKTOP SIDEBAR FILTERS */}
        <div className="hidden md:block w-64 shrink-0 space-y-8 sticky top-[140px]">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900"><input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> Electronics</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900"><input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> Furniture</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900"><input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> Auto</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900"><input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> Clothing & Shoes</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900"><input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" /> Tools</label></li>
            </ul>
          </div>
          
          <div className="pt-8 border-t border-neutral-200">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">Price Range</h3>
            <div className="flex gap-2 items-center">
              <input type="number" placeholder="Min" className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm" />
              <span className="text-neutral-400">-</span>
              <input type="number" placeholder="Max" className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm" />
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">Condition</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-neutral-300 text-primary-600" /> Brand New</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-neutral-300 text-primary-600" /> Like New</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-neutral-300 text-primary-600" /> Good</label></li>
              <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded border-neutral-300 text-primary-600" /> Fair</label></li>
            </ul>
          </div>
          
          <div className="pt-8 border-t border-neutral-200">
             <label className="flex items-start gap-3 p-3 bg-green-50/50 border border-green-200 rounded-xl cursor-pointer hover:bg-green-50 transition">
                <input type="checkbox" className="mt-1 rounded border-green-400 text-green-600 focus:ring-green-500" />
                <div>
                   <span className="block text-sm font-bold text-green-900">Verified Sellers Only</span>
                   <span className="block text-xs text-green-700 mt-1">Hide unverified profiles</span>
                </div>
             </label>
          </div>
        </div>

        {/* MAIN RESULTS AREA */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-neutral-900">{MOCK_LISTINGS.length} Results <span className="text-sm font-normal text-neutral-500">within 10 miles</span></h2>
            <select className="border-none bg-transparent text-sm font-medium text-neutral-700 cursor-pointer focus:ring-0 appearance-none">
              <option>Sort: Best Match</option>
              <option>Sort: Nearest</option>
              <option>Sort: Price (Low - High)</option>
              <option>Sort: Price (High - Low)</option>
              <option>Sort: Newest First</option>
            </select>
          </div>

          {view === 'grid' ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10">
               {MOCK_LISTINGS.map((item) => (
                  <Link to={`/listing/${item.id}`} key={item.id} className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-neutral-300 transition-all duration-200">
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                    
                    {/* Urgency / Time Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 flex items-center gap-1 rounded text-xs font-semibold text-neutral-700 shadow-sm">
                      <Clock className="w-3 h-3 text-neutral-500"/> {item.time}
                    </div>

                    {/* Escrow badge */}
                    <div className="absolute bottom-3 left-3 bg-neutral-900/90 backdrop-blur px-2 py-1 rounded shadow-sm text-xs text-white font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-green-400" /> Secure Checkout
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-neutral-900 leading-tight mb-1 line-clamp-2">{item.title}</h3>
                    <div className="text-xs text-neutral-500 mb-3">{item.condition}</div>
                    <div className="text-2xl font-bold text-neutral-900 mb-4">${item.price.toLocaleString()}</div>
                    
                    <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-600 w-1/2">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-neutral-400"/>
                        <span className="truncate">{item.dist} mi away</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-xs border-l border-neutral-200 pl-3 w-1/2 justify-end">
                         {item.verified ? (
                           <div className="flex items-center gap-1 text-green-700 font-medium bg-green-50 px-2 py-1 rounded">
                             <ShieldCheck className="w-3.5 h-3.5" /> <span className="truncate">Score {item.sellerScore}</span>
                           </div>
                         ) : (
                           <div className="text-neutral-500">Unverified</div>
                         )}
                      </div>
                    </div>
                  </div>
                </Link>
               ))}
             </div>
          ) : (
             <div className="h-[600px] w-full bg-neutral-200 rounded-2xl flex items-center justify-center border border-neutral-300">
               <div className="text-center p-8 bg-white rounded-xl shadow-sm">
                  <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-neutral-900 mb-2">Interactive Map Area</h3>
                  <p className="text-neutral-500 text-sm max-w-xs">In a production environment, this would render a Google Map with clustered listing markers.</p>
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
