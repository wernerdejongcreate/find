import React, { useState, useRef, useEffect } from 'react';
import { Send, ShieldCheck, AlertTriangle, Search, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_CONVOS = [
  { id: 1, name: "Alex Tran", item: "Sony A7III Camera + Lens", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=100", unread: 2, lastMsg: "Sounds good, see you tomorrow at 5", time: "10:42 AM", verified: true },
  { id: 2, name: "Sarah J.", item: "Nike Air Max 270", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100", unread: 0, lastMsg: "Payment secured. Waiting for pickup.", time: "Yesterday", verified: true },
];

export default function Messages() {
  const [activeConvo, setActiveConvo] = useState(MOCK_CONVOS[0]);
  const [messageText, setMessageText] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Mock message history
  const messages = [
    { id: 1, sender: 'them', text: "Hi! Is the camera still available?" },
    { id: 2, sender: 'me', text: "Yes it is! Let me know if you want to come take a look." },
    { id: 3, sender: 'system', text: "Do not share your phone number. Payments outside of Findit are entirely unprotected. Keep communication in this chat." },
    { id: 4, sender: 'them', text: "Awesome. I can meet at the Starbucks on Main St tomorrow?" },
    { id: 5, sender: 'me', text: "Perfect. Please use the 'Buy Securely' button so we can lock in the transaction." },
    { id: 6, sender: 'them', text: "Sounds good, see you tomorrow at 5" },
  ];

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeConvo]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    // In a real app, this would send via websockets/API
    // Since UI prototype, we just clear
    setMessageText("");
  };

  return (
    <div className="bg-neutral-50 min-h-[calc(100vh-64px)] flex justify-center py-6 px-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex h-[80vh]">
        
        {/* Sidebar - Conversations list */}
        <div className="w-full md:w-80 border-r border-neutral-200 flex flex-col bg-white shrink-0">
          <div className="p-4 border-b border-neutral-200">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input type="text" placeholder="Search messages..." className="w-full pl-9 pr-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {MOCK_CONVOS.map(c => (
              <div 
                key={c.id} 
                onClick={() => setActiveConvo(c)}
                className={`p-4 border-b border-neutral-100 cursor-pointer transition-colors ${activeConvo.id === c.id ? 'bg-primary-50' : 'hover:bg-neutral-50'}`}
              >
                <div className="flex gap-3">
                  <div className="relative shrink-0">
                    <img src={c.img} alt={c.item} className="w-12 h-12 rounded-lg object-cover" />
                    {c.unread > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex justify-center items-center rounded-full border-2 border-white">{c.unread}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h4 className="font-semibold text-neutral-900 text-sm truncate flex justify-center items-center gap-1">
                        {c.name} {c.verified && <ShieldCheck className="w-3.5 h-3.5 text-green-500" />}
                      </h4>
                      <span className="text-xs text-neutral-400 shrink-0">{c.time}</span>
                    </div>
                    <p className="text-xs font-medium text-neutral-500 mb-1 truncate">{c.item}</p>
                    <p className={`text-sm truncate ${activeConvo.id === c.id ? 'text-primary-700 font-medium' : 'text-neutral-600'}`}>{c.lastMsg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col hidden md:flex min-w-0 bg-neutral-50/50">
          
          {/* Chat Header */}
          <div className="p-4 bg-white border-b border-neutral-200 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-4">
              <img src={activeConvo.img} className="w-12 h-12 rounded-lg object-cover border border-neutral-200" />
              <div>
                <h3 className="font-bold text-neutral-900 flex items-center gap-1">
                  {activeConvo.name} {activeConvo.verified && <ShieldCheck className="w-4 h-4 text-green-500" />}
                </h3>
                <Link to={`/listing/${activeConvo.id}`} className="text-sm font-medium text-primary-600 hover:underline inline-block truncate max-w-xs">{activeConvo.item}</Link>
              </div>
            </div>
            <div className="flex gap-2">
               <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition">
                View Secured Payment
               </button>
               <button className="text-neutral-400 hover:text-neutral-600 p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition">
                  <Info className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="bg-blue-50 border-b border-blue-100 p-3 shrink-0 flex items-start gap-3">
             <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
             <div className="text-sm">
                <span className="font-semibold text-blue-900">Protected Conversation</span>
                <p className="text-blue-800 mt-0.5">Keep chat on Findit. Sending money directly via Zelle, CashApp or Venmo voids your buyer protection.</p>
             </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4">
            {messages.map(msg => {
              if (msg.sender === 'system') {
                return (
                  <div key={msg.id} className="self-center bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-md my-2 flex gap-3 text-sm text-amber-800 shadow-sm">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{msg.text}</span>
                  </div>
                );
              }
              
              const isMe = msg.sender === 'me';
              return (
                <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 shadow-sm text-[15px] leading-relaxed ${isMe ? 'bg-primary-600 text-white rounded-br-sm' : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              );
            })}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-neutral-200 shrink-0">
            <form onSubmit={handleSend} className="max-w-4xl mx-auto flex items-end gap-2 relative">
               {/* Simulating fraud warning if user types numbers */}
               {/\d{3}-?\d{3}-?\d{4}/.test(messageText) && (
                 <div className="absolute -top-12 left-0 right-12 bg-red-50 text-red-700 border border-red-200 p-2 rounded-lg text-sm flex gap-2 items-center shadow-md animate-in fade-in slide-in-from-bottom-2">
                    <AlertTriangle className="w-4 h-4" /> Sharing numbers violates terms. Keep trade secure in-app.
                 </div>
               )}
               
              <textarea 
                value={messageText}
                onChange={e => setMessageText(e.target.value)}
                placeholder="Type a message..." 
                className="flex-1 border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none max-h-32 min-h-[50px] shadow-sm"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(e); }
                }}
              />
              <button 
                type="submit" 
                disabled={!messageText.trim()}
                className={`p-3.5 rounded-xl flex items-center justify-center transition-colors shadow-sm shrink-0 ${messageText.trim() ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
