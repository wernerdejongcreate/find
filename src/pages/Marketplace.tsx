import { MapPin, Search, Filter, SlidersHorizontal, ShieldCheck, Clock, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useListings } from '../hooks/useListings';

export default function Marketplace() {
  const [view, setView] = useState<'grid'|'map'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { listings } = useListings();
  const navigate = useNavigate();

  const sortedListings = [...listings.filter(l => !l.sold)].sort((a, b) => {
    if (a.sponsored && !b.sponsored) return -1;
    if (!a.sponsored && b.sponsored) return 1;
    return 0;
  });

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
              <button onClick={() => setShowFilters(!showFilters)} className={`flex-1 md:w-auto ${showFilters ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'} px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition`}>
                <SlidersHorizontal className="w-4 h-4" /> <span>Filters</span>
              </button>
              <div className="bg-neutral-100 p-1 rounded-xl flex">
                <button onClick={()=>setView('grid')} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${view === 'grid' ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'}`}>Grid</button>
                <button onClick={()=>setView('map')} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${view === 'map' ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'}`}>Map</button>
              </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-start gap-8 relative">
        
        {/* DESKTOP SIDEBAR FILTERS */}
        {(showFilters) && (
          <div className="absolute z-30 md:static bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:border-none p-6 md:p-0 rounded-2xl w-full md:w-64 shrink-0 space-y-8 md:sticky md:top-[140px] shadow-xl md:shadow-none animate-in fade-in slide-in-from-top-4 left-0 right-0 mt-4 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Electronics</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Furniture</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Auto</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Clothing & Shoes</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Tools</label></li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4">Price Range</h3>
              <div className="flex gap-2 items-center">
                <input type="number" placeholder="Min" className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" />
                <span className="text-neutral-400">-</span>
                <input type="number" placeholder="Max" className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" />
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4">Condition</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Brand New</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Like New</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Good</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100"><input type="checkbox" className="rounded border-neutral-300 dark:border-neutral-700 text-primary-600 focus:ring-primary-500 bg-neutral-50 dark:bg-neutral-800" /> Fair</label></li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
               <label className="flex items-start gap-3 p-3 bg-green-50/50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 rounded-xl cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/30 transition">
                  <input type="checkbox" className="mt-1 rounded border-green-400 text-green-600 focus:ring-green-500 bg-white dark:bg-green-900/50" />
                  <div>
                     <span className="block text-sm font-bold text-green-900 dark:text-green-400">Verified Sellers Only</span>
                     <span className="block text-xs text-green-700 dark:text-green-500 mt-1">Hide unverified profiles</span>
                  </div>
               </label>
            </div>
          </div>
        )}

        {/* MAIN RESULTS AREA */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{sortedListings.length} Results <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">within 10 miles</span></h2>
            <select className="border-none bg-transparent dark:bg-neutral-900 text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer focus:ring-0">
              <option>Sort: Best Match</option>
              <option>Sort: Nearest</option>
              <option>Sort: Price (Low - High)</option>
              <option>Sort: Price (High - Low)</option>
              <option>Sort: Newest First</option>
            </select>
          </div>

          {view === 'grid' ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10">
               {sortedListings.map((item) => (
                  <Link 
                    onClick={(e) => {
                       if (item.isMine) {
                          e.preventDefault();
                          navigate(`/messages?chatId=${item.id}`);
                       }
                    }}
                    to={`/listing/${item.id}`} key={item.id} className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-neutral-300 transition-all duration-200">
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                    <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                    
                    {/* Urgency / Time Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 flex items-center gap-1 rounded text-xs font-semibold text-neutral-700 shadow-sm">
                      <Clock className="w-3 h-3 text-neutral-500"/> {item.time}
                    </div>

                    {item.sponsored && (
                      <div className="absolute top-3 right-3 bg-primary-100 text-primary-800 backdrop-blur px-2 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                        Sponsored
                      </div>
                    )}

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
