import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Phone, MoreVertical, Smile, Plus, Mic, Bot, Send } from 'lucide-react';

export const PhoneMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500); // User asks
    const timer2 = setTimeout(() => setStep(2), 3500); // Bot replies
    const timer3 = setTimeout(() => setStep(3), 6000); // User asks again
    const timer4 = setTimeout(() => setStep(4), 8000); // Bot replies again

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[320px] mx-auto perspective-[2000px]">
      <div className="relative bg-white rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden aspect-[9/19] transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-7 bg-slate-900 z-30 rounded-b-3xl w-[50%] mx-auto"></div>
        
        {/* Header */}
        <div className="bg-[#008069] p-4 pt-10 text-white flex items-center gap-3 shadow-md relative z-20">
          <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <div className="flex-1 flex items-center gap-2.5">
            <div className="size-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Bot className="text-[#008069]" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">TextCFO AI</h3>
              <span className="text-[11px] text-green-100 font-medium">{step < 4 ? 'typing...' : 'Online'}</span>
            </div>
          </div>
          <div className="flex gap-4 pr-1">
            <Video size={20} />
            <Phone size={20} />
            <MoreVertical size={20} />
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="bg-[#E5DDD5] h-full overflow-y-auto p-4 flex flex-col gap-3 pb-24 relative scroll-smooth">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF_zwRGXQN6M4VRRH1a9uliJvdz_JSad1IergUe-gg6cE9pyLTapYHcDu3TQsBW2OLNOSH5hLo--Kw5iZU8uAkylv-LkeyMFg1sbRxeAt3znjVCS0iX_9hvlq5C0So4YFETv2ZFYJrCxwo_oZa7sAe6zTT3usAC_xFv8xjw_ZirHb1bXuxc6EIl9S2PxdAI5RA4a8StSM-yPG0eWPJ8zlxjWuJHpeQl3WDONVYbyYSu45Zd2Xg6GQwBUtdOxcEWWfWgbQoAWQk6cjT')", backgroundSize: "400px" }}></div>
          
          <AnimatePresence>
            {step >= 1 && (
              <motion.div 
                key="step-1"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="self-end max-w-[85%] relative z-10 mt-2"
              >
                <div className="bg-[#dcf8c6] text-slate-800 p-3 rounded-2xl shadow-sm text-[15px] leading-snug relative rounded-tr-sm">
                  <p>aaja mero bikri kati bhayo? 🤔</p>
                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-[10px] text-slate-500">10:42 AM</span>
                    <svg className="w-4 h-4 text-[#53bdeb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 18l4 4L19 12" /></svg>
                  </div>
                </div>
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div 
                key="step-2"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="self-start max-w-[90%] relative z-10"
              >
                <div className="bg-white text-slate-800 p-3.5 rounded-2xl shadow-sm text-[15px] leading-snug relative rounded-tl-sm">
                  <p className="font-bold text-[#008069] text-xs mb-1">TextCFO</p>
                  <p className="mb-2">tapai ko biktri aaja <span className="font-bold text-[#0F3D2E]">5000 rupaiya</span> bhayeko cha 📈</p>
                  <p className="text-sm bg-green-50 text-green-800 p-2 rounded-xl border border-green-100">k tapailai aafno kharcha pani herna mancha?</p>
                  <span className="text-[10px] text-slate-400 block mt-1.5 text-right">10:42 AM</span>
                </div>
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div 
                key="step-3"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="self-end max-w-[85%] relative z-10"
              >
                <div className="bg-[#dcf8c6] text-slate-800 p-3 rounded-2xl shadow-sm text-[15px] leading-snug relative rounded-tr-sm">
                  <p>ahh cha dekhau 👀</p>
                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-[10px] text-slate-500">10:43 AM</span>
                    <svg className="w-4 h-4 text-[#53bdeb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 18l4 4L19 12" /></svg>
                  </div>
                </div>
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div 
                key="step-4"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="self-start max-w-[90%] relative z-10"
              >
                <div className="bg-white text-slate-800 p-3.5 rounded-2xl shadow-sm text-[15px] leading-snug relative rounded-tl-sm">
                  <p className="font-bold text-[#008069] text-xs mb-1">TextCFO</p>
                  <p className="mb-2">Huss! Aaja ko kharcha (Expenses) yesto cha 💸:</p>
                  <div className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="flex justify-between mb-2 pb-2 border-b border-slate-200 border-dashed">
                      <span className="text-slate-600 flex items-center gap-1">☕ Chiya/Khaja</span>
                      <span className="font-mono font-bold text-red-500">रु 450</span>
                    </div>
                    <div className="flex justify-between mb-2 pb-2 border-b border-slate-200 border-dashed">
                      <span className="text-slate-600 flex items-center gap-1">🚚 Transport</span>
                      <span className="font-mono font-bold text-red-500">रु 1,200</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="font-bold text-slate-800">Total Kharcha</span>
                      <span className="font-mono font-extrabold text-red-600">रु 1,650</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-2 text-right">10:43 AM</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Input Area */}
        <div className="absolute bottom-0 inset-x-0 bg-[#f0f2f5] p-2 flex items-center gap-2 z-20 pb-6 pt-3 px-3">
          <Smile className="text-slate-500" size={24} />
          <Plus className="text-slate-500" size={24} />
          <div className="flex-1 bg-white rounded-full h-10 px-4 flex items-center text-slate-400 text-sm shadow-sm">
            {step < 3 ? 'Type a message...' : 'Message sent'}
          </div>
          <div className="size-10 rounded-full bg-[#008069] flex items-center justify-center text-white shadow-md">
            {step < 3 ? <Mic size={20} /> : <Send size={18} className="ml-0.5" />}
          </div>
        </div>
      </div>
    </div>
  );
};
