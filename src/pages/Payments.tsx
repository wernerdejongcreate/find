import { RefreshCcw, Lock, CheckCircle2, ChevronRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Payments() {
  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-600 rounded-full mb-6">
             <Lock className="w-10 h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">How Escrow Works</h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Findit holds the buyer's money securely. The seller only gets paid when the buyer physically accepts the item. Zero risk for both parties.
          </p>
        </div>

        {/* 3 Step Process */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden mb-16 relative">
           <div className="hidden md:block absolute top-[120px] left-[50px] right-[50px] bottom-0 w-1 bg-neutral-100 rounded"></div>
           
           <div className="p-8 sm:p-12 relative flex flex-col gap-12">
              
              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                 <div className="bg-primary-900 text-white w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative transform rotate-3">
                   <span className="text-4xl font-black">1</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Buyer deposits funds</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                      When a buyer clicks "Buy Securely", they enter their credit card or Apple Pay. The funds are charged but held securely by our financial partner (Stripe). The money <span className="font-bold underline decoration-primary-300">does not</span> go to the seller yet.
                    </p>
                    <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm font-medium border border-blue-100">
                      Seller sees: "Funds Secured. Arrange Meetup."
                    </div>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                 <div className="bg-white border-2 border-primary-600 text-primary-600 w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 shadow-sm relative transform -rotate-2">
                   <span className="text-4xl font-black">2</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Meet and inspect in person</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                      Meet at a safe, public location. The buyer inspects the item to ensure it matches the listing exactly. If it's the wrong item or broken, the buyer can cancel and get an instant refund.
                    </p>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                 <div className="bg-green-500 text-white w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative transform rotate-3">
                   <span className="text-4xl font-black">3</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Funds Released</h3>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                      If everything is good, the buyer taps "Confirm Receipt" on their phone. This instantly releases the funds from escrow to the seller's bank account. Both parties walk away happy.
                    </p>
                    <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm font-medium border border-green-100 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 shrink-0" />
                      Transaction Locked: Once confirmed, the sale is final. No "chargeback scams".
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-white p-6 rounded-2xl border border-neutral-200">
             <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2"><RefreshCcw className="w-5 h-5 text-neutral-400" /> What about refunds?</h4>
             <p className="text-sm text-neutral-600">If the meetup doesn't happen, or the item is defective before confirmation, the buyer taps "Cancel" and the hold on their card is reversed immediately (taking 1-3 days to show on statement).</p>
           </div>
           
           <div className="bg-white p-6 rounded-2xl border border-neutral-200">
             <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-neutral-400" /> What if the buyer doesn't tap confirm?</h4>
             <p className="text-sm text-neutral-600">Sellers should never hand over the item until they see their app screen change to "Paid". If a dispute happens at meetup, leave with your item. Findit support is available 24/7 if police intervention is needed.</p>
           </div>
        </div>

        <div className="text-center mt-12">
           <Link to="/marketplace" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition">
             Browse Secure Listings
           </Link>
        </div>

      </div>
    </div>
  );
}
