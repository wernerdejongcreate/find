import React, { useState } from 'react';
import { FileText, ShieldCheck, CheckCircle2, Loader2, UploadCloud } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProofOfAddress() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (step === 1) {
        localStorage.setItem('findit_poa_verified', 'true');
      }
      setStep(s => s + 1);
    }, 1500);
  };

  return (
    <div className="bg-neutral-50 min-h-screen py-12 flex justify-center items-center">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-neutral-100">
        
        {step < 2 && (
          <div className="bg-neutral-900 text-white p-6 pb-12 rounded-b-3xl">
            <h2 className="text-2xl font-bold flex items-center gap-2 tracking-tight">
              <ShieldCheck className="w-6 h-6 text-green-400" /> Proof of Address
            </h2>
            <p className="text-neutral-400 mt-2 text-sm">Please upload a recent utility bill, bank statement, or official letter showing your name and address.</p>
          </div>
        )}

        <div className="p-8">
          {step === 1 && (
            <div className="text-center animate-in fade-in slide-in-from-right-4">
               <h3 className="text-lg font-bold text-neutral-900 mb-2">Upload Document</h3>
               <p className="text-sm text-neutral-500 mb-8">Document must be dated within the last 3 months.</p>
               
               <div className="aspect-[1.58] bg-neutral-100 rounded-xl mb-8 relative flex flex-col items-center justify-center border-2 border-dashed border-neutral-300 hover:border-primary-500 transition cursor-pointer group">
                  <div className="absolute inset-4 border-2 border-primary-500/50 rounded-lg pointer-events-none"></div>
                  <UploadCloud className="w-10 h-10 text-neutral-400 group-hover:text-primary-500 transition mb-2" />
                  <span className="text-sm font-medium text-neutral-500 group-hover:text-primary-600 transition">Tap to upload PDF or Image</span>
               </div>
               
               <button onClick={handleNext} disabled={isProcessing} className="w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl flex justify-center items-center gap-2 hover:bg-primary-700 disabled:opacity-70 transition shadow-sm">
                 {isProcessing ? <><Loader2 className="w-5 h-5 animate-spin" /> Verifying document...</> : 'Submit Document'}
               </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-8 animate-in fade-in zoom-in-95">
               <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex justify-center items-center mx-auto mb-6 shadow-green-100 shadow-xl">
                 <CheckCircle2 className="w-12 h-12" />
               </div>
               <h3 className="text-2xl font-bold text-neutral-900 mb-2">Address Confirmed!</h3>
               <p className="text-neutral-500 max-w-sm mx-auto mb-8">
                 Your proof of address has been verified successfully. Your account setup is now complete!
               </p>
               <button onClick={() => navigate('/dashboard')} className="inline-block w-full bg-primary-600 text-white font-bold py-3.5 rounded-xl hover:bg-primary-700 transition shadow-sm">
                 Go to Dashboard
               </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
