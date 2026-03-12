import React from 'react';
import { Wallet, Twitter, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0A291F] pt-20 pb-10 text-white border-t border-[#0F3D2E]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#22c35d]/20 text-[#22c35d]">
                <Wallet size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">TextCFO</span>
            </div>
            <p className="text-green-50/60 text-sm mb-8 max-w-sm leading-relaxed">
              Empowering SMEs with instant financial insights directly on WhatsApp. Secure, fast, and in your language.
            </p>
            <div className="flex gap-6">
              <a className="text-green-50/40 hover:text-[#22c35d] transition-colors" href="#">
                <Twitter size={24} />
              </a>
              <a className="text-green-50/40 hover:text-[#22c35d] transition-colors" href="#">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-sm text-green-50/60">
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Features</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Integrations</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm text-green-50/60">
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-green-50/60">
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-[#22c35d] transition-colors" href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-green-50/40 text-sm">© 2026 TextCFO Inc. All rights reserved.</p>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
            <span className="size-2.5 rounded-full bg-[#22c35d] animate-pulse shadow-[0_0_10px_rgba(34,195,93,0.8)]"></span>
            <span className="text-green-50/80 text-sm font-bold">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
