import { useState } from 'react';
import { Camera, ShieldCheck, CheckCircle2, UserCheck, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Verification() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (step === 3) {
        localStorage.setItem('findit_verified', 'true');
        // Dispatch custom event so layout can update instantly
        window.dispatchEvent(new Event('findit_verified_change'));
      }
      setStep(s => s + 1);
    }, 1500);
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-12 flex justify-center items-center">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-neutral-100">
        
        {step < 4 && (
          <div className="bg-neutral-900 text-white p-6 pb-12 rounded-b-3xl">
            <h2 className="text-2xl font-bold flex items-center gap-2 tracking-tight">
              <ShieldCheck className="w-6 h-6 text-green-400" /> Identity Verification
            </h2>
            <p className="text-neutral-400 mt-2 text-sm">We need to verify you are a real human to keep our marketplace safe.</p>
            
            <div className="flex justify-between mt-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-700 -z-0 -translate-y-1/2">
                 <div className={`h-full bg-green-500 transition-all duration-300`} style={{ width: `${(step - 1) * 50}%` }}></div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors ${step >= 1 ? 'bg-green-500 text-white' : 'bg-neutral-800 text-neutral-500'}`}>1</div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors ${step >= 2 ? 'bg-green-500 text-white' : 'bg-neutral-800 text-neutral-500'}`}>2</div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors ${step >= 3 ? 'bg-green-500 text-white' : 'bg-neutral-800 text-neutral-500'}`}>3</div>
            </div>
            <div className="flex justify-between text-xs text-neutral-400 mt-2 font-medium">
               <span>ID Front</span>
               <span>ID Back</span>
               <span>Selfie</span>
            </div>
          </div>
        )}

        <div className="p-8">
          {step === 1 && (
            <div className="text-center animate-in fade-in slide-in-from-right-4">
               <h3 className="text-lg font-bold text-neutral-900 mb-2">Scan Front of ID</h3>
               <p className="text-sm text-neutral-500 mb-8">Place your ID inside the frame. Make sure it is well-lit and clearly readable.</p>
               
               <div className="aspect-[1.58] bg-neutral-100 rounded-xl mb-8 relative flex items-center justify-center border-2 border-dashed border-neutral-300 hover:border-primary-500 transition cursor-pointer group">
                  <div className="absolute inset-4 border-2 border-primary-500/50 rounded-lg pointer-events-none"></div>
                  <Camera className="w-10 h-10 text-neutral-400 group-hover:text-primary-500 transition" />
               </div>
               
               <button onClick={handleNext} disabled={isProcessing} className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 hover:bg-primary-700 disabled:opacity-70 transition shadow-sm">
                 {isProcessing ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : 'Scan Front'}
               </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center animate-in fade-in slide-in-from-right-4">
               <h3 className="text-lg font-bold text-neutral-900 mb-2">Scan Back of ID</h3>
               <p className="text-sm text-neutral-500 mb-8">Flip your ID over. Ensure the barcode is fully visible.</p>
               
               <div className="aspect-[1.58] bg-neutral-100 rounded-xl mb-8 relative flex items-center justify-center border-2 border-dashed border-neutral-300 hover:border-primary-500 transition cursor-pointer group">
                  <div className="absolute inset-4 border-2 border-primary-500/50 rounded-lg pointer-events-none"></div>
                  <Camera className="w-10 h-10 text-neutral-400 group-hover:text-primary-500 transition" />
               </div>
               
               <button onClick={handleNext} disabled={isProcessing} className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 hover:bg-primary-700 disabled:opacity-70 transition shadow-sm">
                 {isProcessing ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : 'Scan Back'}
               </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center animate-in fade-in slide-in-from-right-4">
               <h3 className="text-lg font-bold text-neutral-900 mb-2">Selfie Verification</h3>
               <p className="text-sm text-neutral-500 mb-8">Take a selfie to prove you are a real human and match your ID.</p>
               
               <div className="w-48 h-48 mx-auto bg-neutral-100 rounded-full mb-8 relative flex items-center justify-center border-2 border-dashed border-neutral-300 hover:border-primary-500 transition cursor-pointer group overflow-hidden">
                  <div className="absolute inset-2 border-2 border-primary-500/50 rounded-full pointer-events-none"></div>
                  <UserCheck className="w-12 h-12 text-neutral-400 group-hover:text-primary-500 transition" />
               </div>
               
               <button onClick={handleNext} disabled={isProcessing} className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 hover:bg-primary-700 disabled:opacity-70 transition shadow-sm">
                 {isProcessing ? <><Loader2 className="w-5 h-5 animate-spin" /> Verifying match...</> : 'Take Selfie'}
               </button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8 animate-in fade-in zoom-in-95">
               <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex justify-center items-center mx-auto mb-6 shadow-green-100 shadow-xl">
                 <CheckCircle2 className="w-12 h-12" />
               </div>
               <h3 className="text-2xl font-bold text-neutral-900 mb-2">ID Verified!</h3>
               <p className="text-neutral-500 max-w-sm mx-auto mb-8">
                 Your identity has been confirmed. Next, we need to verify your address.
               </p>
               <Link to="/proof-of-address" className="inline-block w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl hover:bg-primary-700 transition shadow-sm">
                 Continue to Address Verification
               </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
