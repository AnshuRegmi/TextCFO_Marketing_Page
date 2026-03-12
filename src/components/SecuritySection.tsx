import React from 'react';
import { Shield, CheckCircle2, Smartphone, Server, Info } from 'lucide-react';

export const SecuritySection = () => {
  return (
    <section id="integrations" className="py-24 bg-white border-y border-[#0F3D2E]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#0F3D2E] text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 size-96 rounded-full bg-[#22c35d] blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-96 rounded-full bg-[#22c35d] blur-[100px] opacity-20"></div>
          
          <div className="relative z-10 p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wide">
                <Shield size={16} className="text-[#22c35d]" />
                Zero-Access Architecture
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Bank-Grade Security for Your Financial Data
              </h2>
              <p className="text-lg text-green-50/80 leading-relaxed">
                We prioritize your privacy. TextCFO acts as a secure bridge between WhatsApp and Tally. We don't store your financial records—all queries are processed in real-time with end-to-end encryption.
              </p>
              
              <ul className="space-y-6 pt-4">
                {[
                  { title: "End-to-End Encryption", desc: "Only you can read your messages and reports." },
                  { title: "No Data Storage", desc: "We process queries in real-time without storing your books." },
                  { title: "Role-Based Access", desc: "Granular control over who sees what in your team." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#22c35d]/20 text-[#22c35d]">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <span className="block font-bold text-xl mb-1">{item.title}</span>
                      <span className="text-green-50/70">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-2xl relative z-10 text-[#0F3D2E]">
                <div className="flex items-center gap-5 mb-8 border-b border-gray-100 pb-6">
                  <div className="size-16 rounded-full bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E]">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Encryption Protocol</h4>
                    <p className="text-sm text-gray-500 font-mono mt-1">AES-256 Bit Standard</p>
                  </div>
                  <div className="ml-auto text-[#22c35d] bg-[#22c35d]/10 px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#22c35d] animate-pulse"></span>
                    Active
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-[#FDFBF0] rounded-3xl border-none shadow-inner">
                    <div className="flex flex-col items-center gap-2">
                      <div className="size-14 bg-white rounded-full flex items-center justify-center shadow-sm text-[#0F3D2E]">
                        <Smartphone size={24} />
                      </div>
                      <span className="text-xs font-bold">WhatsApp</span>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center relative px-4">
                      <div className="w-full h-0.5 bg-[#22c35d]/30 relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#22c35d] origin-left animate-[scale-x_2s_ease-in-out_infinite]"></div>
                      </div>
                      <span className="bg-white text-[#22c35d] text-[10px] font-bold px-3 py-1 rounded-full border border-[#22c35d]/20 shadow-sm absolute -top-3">TLS 1.3</span>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="size-14 bg-white rounded-full flex items-center justify-center shadow-sm text-[#22c35d]">
                        <Server size={24} />
                      </div>
                      <span className="text-xs font-bold">Tally Server</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-50/50 rounded-3xl border-none shadow-inner text-sm text-blue-900 flex gap-4 leading-relaxed">
                    <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
                    <span>TextCFO servers act only as a pass-through tunnel. No financial data is ever persisted on our cloud infrastructure.</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-[#22c35d]/10 rounded-[3rem] border border-[#22c35d]/20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
