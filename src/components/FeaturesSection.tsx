import React from 'react';
import { motion } from 'framer-motion';
import { Globe, HardDrive, Languages, ArrowRight, Lock } from 'lucide-react';

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F3D2E] mb-6">
          Speaks Your Language
        </h2>
        <p className="text-lg text-[#0F3D2E]/70">
          TextCFO understands local business contexts, slang, and languages. Just ask naturally, no complex commands required.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div whileHover={{ y: -10 }} className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:bg-white/60 transition-all duration-500 flex flex-col">
          <div className="size-16 rounded-full bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] mb-6">
            <Languages size={28} />
          </div>
          <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Multilingual NLP</h3>
          <p className="text-[#0F3D2E]/70 mb-8 flex-1">
            Advanced natural language processing that handles Hindi, Arabic, Spanish, and mixed-language queries (Hinglish) with ease.
          </p>
          <div className="flex flex-col gap-3">
            <div className="bg-[#0F3D2E]/5 text-[#0F3D2E] text-sm px-5 py-4 rounded-3xl rounded-tl-none max-w-[85%] font-medium">
              आजको बिक्री कति छ?
            </div>
            <div className="self-end bg-[#22c35d]/10 text-[#0F3D2E] text-sm px-5 py-4 rounded-3xl rounded-tr-none max-w-[85%] font-medium">
              आजको कुल बिक्री: रु २५,०००
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:bg-white/60 transition-all duration-500 flex flex-col">
          <div className="size-16 rounded-full bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] mb-6">
            <HardDrive size={28} />
          </div>
          <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">On-Device Analysis</h3>
          <p className="text-[#0F3D2E]/70 mb-8 flex-1">
            Your financial data never leaves your premises. TextCFO analyzes your business by staying securely in your own device.
          </p>
          <div className="bg-[#FDFBF0] p-5 rounded-3xl border-none shadow-inner flex items-center justify-center gap-4">
            <HardDrive className="text-[#0F3D2E]" size={32} />
            <div className="flex gap-1.5">
              <div className="size-2.5 bg-[#22c35d] rounded-full animate-pulse"></div>
              <div className="size-2.5 bg-[#22c35d] rounded-full animate-pulse delay-150"></div>
              <div className="size-2.5 bg-[#22c35d] rounded-full animate-pulse delay-300"></div>
            </div>
            <Lock className="text-[#22c35d]" size={32} />
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:bg-white/60 transition-all duration-500 flex flex-col">
          <div className="size-16 rounded-full bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] mb-6">
            <Globe size={28} />
          </div>
          <h3 className="text-2xl font-bold text-[#0F3D2E] mb-4">Global Reach</h3>
          <p className="text-[#0F3D2E]/70 mb-8 flex-1">
            Designed for SME owners worldwide. Whether you use Tally in Dubai, Mumbai, or Nairobi, we've got you covered.
          </p>
          <div className="relative h-28 rounded-3xl overflow-hidden bg-[#0F3D2E]/5 flex items-center justify-center">
            <Globe size={120} className="text-[#0F3D2E]/10 absolute -right-6 -bottom-6" />
            <div className="flex gap-8 relative z-10">
              <div className="size-4 bg-[#22c35d] rounded-full shadow-[0_0_20px_rgba(34,195,93,0.8)] animate-pulse"></div>
              <div className="size-4 bg-[#0F3D2E] rounded-full shadow-[0_0_20px_rgba(15,61,46,0.8)] animate-pulse delay-150"></div>
              <div className="size-4 bg-[#22c35d] rounded-full shadow-[0_0_20px_rgba(34,195,93,0.8)] animate-pulse delay-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-16 text-center">
        <button className="inline-flex items-center gap-2 text-[#0F3D2E] font-bold hover:text-[#22c35d] transition-colors group text-lg bg-white px-8 py-4 rounded-full shadow-sm hover:shadow-md">
          See all supported languages
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
