import { ShieldCheck, MapPin, Lock, CreditCard, ChevronRight, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-primary-900 text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800 via-primary-900 to-neutral-900 opacity-80 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6 border border-green-500/30 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" />
              100% Protection Guarantee
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-white">
              Buy and sell locally—<br />
              <span className="text-primary-300">without getting scammed.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg leading-relaxed">
              Secure payments. Verified users. Full buyer protection. Findit is the safest way to trade in your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/marketplace" className="bg-white text-primary-900 px-8 py-4 rounded-xl text-center font-bold text-lg hover:bg-neutral-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] flex justify-center items-center gap-2">
                Start Buying <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/dashboard" className="bg-primary-800 text-white px-8 py-4 rounded-xl text-center font-bold text-lg hover:bg-primary-700 border border-primary-700 transition-colors flex justify-center items-center gap-2">
                Sell an Item
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-primary-800">
              <div className="flex items-center gap-2 text-primary-200 text-sm font-medium">
                <Lock className="w-4 h-4 text-green-400" /> Secure Payments
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-green-400" /> Verified Sellers
              </div>
              <div className="flex items-center gap-2 text-primary-200 text-sm font-medium">
                <CreditCard className="w-4 h-4 text-green-400" /> Escrow Protection
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-primary-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-neutral-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" alt="Avatar" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-sm">Sarah J.</h3>
                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 4.9 <span className="mx-1">•</span> <ShieldCheck className="w-3 h-3 text-green-500" /> ID Verified
                    </div>
                  </div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400" alt="Product" className="w-full h-48 object-cover rounded-xl mb-4" />
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-neutral-900">Nike Air Max 270</h4>
                <span className="font-bold text-xl text-primary-600">$85</span>
              </div>
              <div className="flex gap-2 text-sm text-neutral-500 mb-6">
                <span className="bg-neutral-100 px-2 py-1 rounded line-through text-neutral-400">$120</span>
                <span>• Practically New</span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800 flex items-start gap-2 mb-4">
                <Lock className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <p>Payment held securely. Seller only paid when you receive the item.</p>
              </div>
              <button className="w-full bg-primary-600 text-white font-semibold py-3 rounded-xl hover:bg-primary-700 transition">Buy Now with Escrow</button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-4">How Findit Escrow Works</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">We've removed the anxiety from local meetups. Your money is completely safe until you have the item in your hands.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-neutral-200 z-0"></div>

            {[
              { step: 1, icon: <MapPin className="w-8 h-8 text-primary-600" />, title: "Find it locally", desc: "Browse items safely. Every seller goes through our automated trust-scoring system." },
              { step: 2, icon: <Lock className="w-8 h-8 text-neutral-900" />, title: "Pay securely in-app", desc: "Your money goes into our secure holding account, not directly to the seller." },
              { step: 3, icon: <ShieldCheck className="w-8 h-8 text-green-500" />, title: "Confirm & Release", desc: "Meet up, inspect the item. Only when you tap 'Item Received' does the seller get paid." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-neutral-100">
                  {s.icon}
                </div>
                <div className="inline-block bg-primary-100 text-primary-800 font-bold px-3 py-1 rounded-full text-xs mb-4">STEP {s.step}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & COMPARISON SECTION */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-6">Why Findit is safer than the rest</h2>
              <p className="text-neutral-600 mb-8 text-lg">Traditional classifieds are a guessing game. We built a fintech-grade security layer natively into our marketplace.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Escrow Payments", desc: "No more carrying cash. We hold funds until delivery is confirmed." },
                  { title: "ID Verification", desc: "Sellers can link their local ID for a Verified badge, boosting trust." },
                  { title: "Fraud Detection Engine", desc: "Our AI scans for duplicate listings, price anomalies, and suspicious seller behavior." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-green-100 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">{feature.title}</h4>
                      <p className="text-neutral-500 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
              <div className="bg-neutral-900 text-white p-6">
                <h3 className="font-bold text-lg">The Findit Difference</h3>
              </div>
              <div className="p-0">
                <table className="w-full text-left">
                  <thead className="bg-neutral-50 border-b border-neutral-200 text-xs uppercase font-bold text-neutral-500">
                    <tr>
                      <th className="p-4">Feature</th>
                      <th className="p-4 text-center">Others</th>
                      <th className="p-4 text-center text-primary-600 bg-primary-50/50">Findit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {[
                      ["Funds held safely in escrow", "❌", "✅"],
                      ["No carrying large amounts of cash", "❌", "✅"],
                      ["ID verification badges", "❌", "✅"],
                      ["AI fraud detection", "❌", "✅"],
                      ["Automated refund for no-shows", "❌", "✅"]
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="p-4 text-sm font-medium text-neutral-700">{row[0]}</td>
                        <td className="p-4 text-center text-neutral-400">{row[1]}</td>
                        <td className="p-4 text-center bg-primary-50/50">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Trending near you</h2>
              <p className="text-neutral-500 mt-2">Verified items available for secure checkout</p>
            </div>
            <Link to="/marketplace" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1 hidden sm:flex">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Sony A7III Camera + Lens", price: "$1,450", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400", dist: "1.2 miles", verified: true, time: "2h ago" },
              { id: 2, title: "Herman Miller Aeron Chair", price: "$400", img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400", dist: "3.5 miles", verified: true, time: "4h ago" },
              { id: 3, title: "MacBook Pro M1 2020", price: "$750", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400", dist: "0.8 miles", verified: false, time: "5h ago" },
              { id: 4, title: "Nintendo Switch OLED", price: "$280", img: "https://images.unsplash.com/photo-1622297843482-19e0edb8932c?auto=format&fit=crop&q=80&w=400", dist: "2.1 miles", verified: true, time: "1d ago" },
            ].map((item) => (
              <Link to={`/listing/${item.id}`} key={item.id} className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-neutral-700 shadow-sm">
                    {item.time}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-neutral-900 leading-tight line-clamp-2 pr-4">{item.title}</h3>
                  </div>
                  <div className="text-xl font-bold text-primary-600 mb-4">{item.price}</div>
                  
                  <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {item.dist}</span>
                    {item.verified && (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <ShieldCheck className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Link to="/marketplace" className="inline-block border border-neutral-300 rounded-lg px-6 py-3 font-semibold text-neutral-700 w-full">View All Items</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary-900 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-green-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join thousands trading safely</h2>
          <p className="text-primary-200 text-xl mb-10 max-w-xl mx-auto">
            Stop worrying about scams, counterfeits, and carrying cash. Create your Findit account today.
          </p>
          <Link to="/signup" className="inline-block bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition shadow-lg">
            Create Free Account
          </Link>
          <p className="mt-6 text-sm text-primary-300">Takes less than 2 minutes. No credit card required to browse.</p>
        </div>
      </section>
    </div>
  );
}
