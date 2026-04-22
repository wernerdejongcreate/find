import { ShieldCheck, Lock, Search, HelpCircle, CheckCircle, AlertTriangle } from 'lucide-react';

export default function TrustSafety() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20 px-4 text-center">
        <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-green-400" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Trust & Safety Core</h1>
        <p className="text-xl text-primary-200 max-w-2xl mx-auto">
          We built Findit with bank-level security features to eliminate the risks of local secondhand trading.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
             <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-neutral-100">
                <Lock className="w-7 h-7 text-primary-600" />
             </div>
             <h2 className="text-2xl font-bold text-neutral-900 mb-4">Escrow-Backed Payments</h2>
             <p className="text-neutral-600 mb-4">
               Buyers pay upfront via credit card or Apple Pay, but the seller doesn't get the money until you meet up and confirm the item matches the description.
             </p>
             <ul className="space-y-3 mt-6">
                <li className="flex gap-2 text-sm text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> No ghosting: Buyers are committed.
                </li>
                <li className="flex gap-2 text-sm text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> No haggling at meetup.
                </li>
                <li className="flex gap-2 text-sm text-neutral-700">
                   <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Protects against fake goods.
                </li>
             </ul>
          </div>

          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
             <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-neutral-100">
                <Search className="w-7 h-7 text-primary-600" />
             </div>
             <h2 className="text-2xl font-bold text-neutral-900 mb-4">AI Fraud Detection</h2>
             <p className="text-neutral-600 mb-4">
               Our system scans every listing, message, and transaction for anomalies to preemptively ban scammers before they can message you.
             </p>
             <ul className="space-y-3 mt-6">
                <li className="flex gap-2 text-sm text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Duplicate/stolen photo detection.
                </li>
                <li className="flex gap-2 text-sm text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Price anomaly warnings.
                </li>
                <li className="flex gap-2 text-sm text-neutral-700">
                   <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> "Take it off platform" messaging alerts.
                </li>
             </ul>
          </div>
        </div>

        {/* The Verification Process */}
        <div className="mb-20">
           <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center tracking-tight">The Trust Score System</h2>
           <div className="bg-white border border-neutral-200 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <p className="text-lg text-neutral-600 mb-8 max-w-2xl">
                  Every user has a Trust Score (0-100). Higher scores mean faster sales. Here is how we verify identities without storing raw document data.
                </p>
                
                <div className="space-y-6">
                   <div className="flex gap-4 items-start">
                     <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                     <div>
                       <h4 className="font-bold text-neutral-900 text-lg">Phone & Email Verification</h4>
                       <p className="text-neutral-500 text-sm mt-1">Basic requirement to send any messages.</p>
                     </div>
                   </div>
                   <div className="w-0.5 h-6 bg-neutral-200 ml-4"></div>
                   <div className="flex gap-4 items-start">
                     <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                     <div>
                       <h4 className="font-bold text-neutral-900 text-lg">Government ID Check (Optional but recommended)</h4>
                       <p className="text-neutral-500 text-sm mt-1">Powered by Stripe Identity. We verify an ID against a live selfie. We do not store the photos, only the verification status.</p>
                     </div>
                   </div>
                   <div className="w-0.5 h-6 bg-neutral-200 ml-4"></div>
                   <div className="flex gap-4 items-start">
                     <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                     <div>
                       <h4 className="font-bold text-neutral-900 text-lg">Successful Escrow History</h4>
                       <p className="text-neutral-500 text-sm mt-1">Scores naturally rise as users complete smooth, dispute-free transactions.</p>
                     </div>
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Warning Section */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8 mb-20">
           <div className="flex items-center gap-3 mb-6">
             <AlertTriangle className="w-8 h-8 text-red-500" />
             <h2 className="text-2xl font-bold text-red-950">How to lose your Buyer Protection</h2>
           </div>
           <p className="text-red-800 mb-6 font-medium">Findit can only protect you if you stay on the platform. Your protection is voided if you:</p>
           <ul className="space-y-4">
              <li className="flex gap-3 text-red-900 bg-white/50 p-4 rounded-xl border border-red-100">
                <span className="font-bold text-red-500">1.</span> Pay with Cash, Zelle, CashApp, Venmo, or Wire Transfer.
              </li>
              <li className="flex gap-3 text-red-900 bg-white/50 p-4 rounded-xl border border-red-100">
                <span className="font-bold text-red-500">2.</span> Communicate off-platform (SMS, WhatsApp) where our support team cannot see the chat history.
              </li>
              <li className="flex gap-3 text-red-900 bg-white/50 p-4 rounded-xl border border-red-100">
                <span className="font-bold text-red-500">3.</span> Have the item shipped. Findit is strictly for local, in-person meetup verification.
              </li>
           </ul>
        </div>
      </div>
    </div>
  );
}
