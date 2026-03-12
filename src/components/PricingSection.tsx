import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-[#FDFBF0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F3D2E] mb-6">
            Simple Pricing for Growing Businesses
          </h2>
          <p className="text-lg text-[#0F3D2E]/70">
            Start with a free trial. No credit card required. Upgrade as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:bg-white/60 hover:-translate-y-2 transition-all duration-500">
            <h3 className="text-2xl font-bold text-[#0F3D2E] mb-2">Starter</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-extrabold text-[#0F3D2E]">रु 2,499</span>
              <span className="text-[#0F3D2E]/50 font-medium">/mo</span>
            </div>
            <p className="text-sm text-[#0F3D2E]/70 mb-10 min-h-[40px]">Perfect for solo entrepreneurs and small shops getting started with automation.</p>
            <button className="w-full py-4 px-6 bg-[#0F3D2E]/5 hover:bg-[#0F3D2E]/10 text-[#0F3D2E] font-bold rounded-full transition-colors mb-10">
              Start Free Trial
            </button>
            <ul className="space-y-5 text-sm text-[#0F3D2E]/80 font-medium">
              <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> 1 WhatsApp Number</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Daily Reports</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Basic Financial Queries</li>
              <li className="flex items-center gap-4 opacity-40"><XCircle className="text-[#0F3D2E]" size={24} /> Multi-language Support</li>
            </ul>
          </div>
          
          <div className="relative bg-[#0F3D2E] rounded-[3rem] p-10 shadow-[0_20px_60px_rgba(15,61,46,0.3)] transform md:-translate-y-6 md:scale-105 z-10 text-white">
            <div className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-48 rounded-full bg-[#22c35d] blur-[60px] opacity-20"></div>
            </div>
            <div className="absolute top-0 right-0 left-0 -mt-5 flex justify-center z-20">
              <span className="bg-[#22c35d] text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">Most Popular</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold">रु 5,499</span>
                <span className="text-green-50/50 font-medium">/mo</span>
              </div>
              <p className="text-sm text-green-50/80 mb-10 min-h-[40px]">For growing SMEs that need real-time insights and multi-language support.</p>
              <button className="w-full py-4 px-6 bg-[#22c35d] hover:bg-[#1ea34d] text-white font-bold rounded-full transition-all shadow-[0_8px_20px_rgba(34,195,93,0.3)] hover:shadow-[0_10px_25px_rgba(34,195,93,0.4)] mb-10">
                Get Started Now
              </button>
              <ul className="space-y-5 text-sm text-green-50 font-medium">
                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Up to 5 WhatsApp Numbers</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Real-time Sync</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Full Multi-language NLP</li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Voice Commands</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:bg-white/60 hover:-translate-y-2 transition-all duration-500">
            <h3 className="text-2xl font-bold text-[#0F3D2E] mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-extrabold text-[#0F3D2E]">रु 11,499</span>
              <span className="text-[#0F3D2E]/50 font-medium">/mo</span>
            </div>
            <p className="text-sm text-[#0F3D2E]/70 mb-10 min-h-[40px]">Advanced features for larger organizations with custom integration needs.</p>
            <button className="w-full py-4 px-6 bg-[#0F3D2E]/5 hover:bg-[#0F3D2E]/10 text-[#0F3D2E] font-bold rounded-full transition-colors mb-10">
              Contact Sales
            </button>
            <ul className="space-y-5 text-sm text-[#0F3D2E]/80 font-medium">
              <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Unlimited Users</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Custom Reports & Dashboards</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> Dedicated Account Manager</li>
              <li className="flex items-center gap-4"><CheckCircle2 className="text-[#22c35d]" size={24} /> API Access</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
