import React from 'react';
import { motion } from 'framer-motion';
import { FileText, RefreshCw, Shield } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative bg-[#0F3D2E] rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(15,61,46,0.3)]">
        {/* Organic Blobs */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 size-[500px] rounded-full bg-[#22c35d] blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 size-[400px] rounded-full bg-[#22c35d] blur-[100px] opacity-20 pointer-events-none"></div>

        {/* Doodles / Wavy Lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M-100,300 C200,200 400,600 1100,400" fill="none" stroke="#22c35d" strokeWidth="3" strokeDasharray="10 10" />
            <path d="M-100,600 C300,800 500,300 1100,700" fill="none" stroke="#22c35d" strokeWidth="2" />
            <circle cx="200" cy="200" r="10" fill="none" stroke="#22c35d" strokeWidth="2" />
            <circle cx="800" cy="700" r="15" fill="none" stroke="#22c35d" strokeWidth="2" />
            <path d="M850,200 L870,220 M870,200 L850,220" stroke="#22c35d" strokeWidth="2" />
            <path d="M150,750 L170,770 M170,750 L150,770" stroke="#22c35d" strokeWidth="2" />
          </svg>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16 pb-24 relative z-10">
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 w-fit mb-8 backdrop-blur-md shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#22c35d] animate-pulse"></span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">Live Tally Integration</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Your Business Data.<br />
              <span className="text-[#22c35d]">On WhatsApp.</span><br />
              In Your Language.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-green-50/80 mb-10 max-w-lg leading-relaxed"
            >
              Access your Tally financial reports instantly without opening your laptop. Chat with your AI CFO 24/7 in Hindi, Spanish, Arabic, or English.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#pricing" className="bg-[#22c35d] hover:bg-[#1ea34d] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_8px_20px_rgba(34,195,93,0.3)] hover:shadow-[0_10px_25px_rgba(34,195,93,0.4)] hover:-translate-y-1">
                Get Started on WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="relative flex justify-center items-center mt-12 lg:mt-0">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Overlapping Stats */}
      <div className="relative z-20 hidden lg:flex gap-6 px-12 -mt-12 justify-start">
        <motion.div whileHover={{ y: -5 }} className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col gap-4 min-w-[170px]">
          <div className="text-red-500 bg-red-50 w-14 h-14 rounded-full flex items-center justify-center"><FileText size={24} /></div>
          <span className="font-bold text-[#0F3D2E] text-lg leading-tight">Financial<br/>Reports</span>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col gap-4 min-w-[170px]">
          <div className="text-[#22c35d] bg-[#22c35d]/10 w-14 h-14 rounded-full flex items-center justify-center"><RefreshCw size={24} /></div>
          <span className="font-bold text-[#0F3D2E] text-lg leading-tight">Real-time<br/>Sync</span>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col gap-4 min-w-[170px]">
          <div className="text-orange-500 bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center"><Shield size={24} /></div>
          <span className="font-bold text-[#0F3D2E] text-lg leading-tight">Bank-grade<br/>Security</span>
        </motion.div>
      </div>
    </section>
  );
};
