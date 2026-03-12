/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SecuritySection } from './components/SecuritySection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF0] font-sans selection:bg-[#22c35d]/30">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SecuritySection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
