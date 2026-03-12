import React from 'react';
import { Wallet } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="mx-auto max-w-5xl pointer-events-auto">
        <div className="flex h-16 items-center justify-between bg-white/90 backdrop-blur-md rounded-full px-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5">
          <div className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#0F3D2E] text-[#22c35d]">
              <Wallet size={24} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#0F3D2E]">TextCFO</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-bold text-[#0F3D2E]/70 hover:text-[#22c35d] transition-colors" href="#features">Features</a>
            <a className="text-sm font-bold text-[#0F3D2E]/70 hover:text-[#22c35d] transition-colors" href="#integrations">Integrations</a>
            <a className="text-sm font-bold text-[#0F3D2E]/70 hover:text-[#22c35d] transition-colors" href="#pricing">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="flex items-center justify-center rounded-full bg-[#22c35d] hover:bg-[#1ea34d] text-white px-6 py-2.5 text-sm font-bold transition-all shadow-lg shadow-[#22c35d]/30 hover:-translate-y-0.5">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
