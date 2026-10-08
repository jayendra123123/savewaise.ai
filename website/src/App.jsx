import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CoreFeatures from './components/CoreFeatures.jsx';
import AICoachSection from './components/AICoachSection.jsx';
import MarketSection from './components/MarketSection.jsx';
import GoalsAndEnvelopes from './components/GoalsAndEnvelopes.jsx';
import SecuritySection from './components/SecuritySection.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-yellow-200 selection:text-slate-900 antialiased overflow-x-hidden">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="w-full">
        {/* 1. Hero & Interactive Cockpit */}
        <Hero />

        {/* 2. Core 6 App Features */}
        <CoreFeatures />

        {/* 3. AI Financial Coach Preview */}
        <AICoachSection />

        {/* 4. Live Gold & Silver (₹) and Notification Trigger */}
        <MarketSection />

        {/* 5. In-App Budgets, Goal Vaults & Due Dates */}
        <GoalsAndEnvelopes />

        {/* 6. Security & Trust */}
        <SecuritySection />

        {/* 7. Direct Download CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
