import React, { useState } from 'react';
import { 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Coins, 
  PiggyBank, 
  CheckCircle2, 
  Bot
} from 'lucide-react';

export default function Hero() {
  const [income, setIncome] = useState(60000);
  const [savingsRate, setSavingsRate] = useState(25);

  const lockedSavings = Math.round((income * savingsRate) / 100);
  const safeToSpend = income - lockedSavings;
  const dailyAllowance = Math.round(safeToSpend / 30);
  const annualSaved = lockedSavings * 12;

  return (
    <section className="relative w-full pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Centered Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFDF7] border-2 border-slate-900 shadow-brutal-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-wide text-slate-900">
              Save First Wealth Architecture
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            Save First. Spend Guilt-Free.{' '}
            <span className="text-blue-600 underline decoration-4 underline-offset-8 decoration-yellow-400">
              Build Real Wealth.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Traditional apps only tell you where your money disappeared. <strong>SaveWise AI</strong> locks your savings targets the second your salary lands, calculates your true daily <strong>Safe-to-Spend</strong> limit, and provides 24/7 AI financial guidance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <a
              href="/SaveWise-AI.apk"
              download="SaveWise-AI.apk"
              className="w-full sm:w-auto brutal-btn-primary px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5" />
              <span>Download Android APK</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono">v1.0 (86 MB)</span>
            </a>

            <a
              href="#save-first"
              className="w-full sm:w-auto brutal-btn-secondary px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-black text-slate-800">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Privacy</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-amber-600" />
              <span>Custom Gold & Silver Alerts (₹)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Private AI Financial Coach</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Cockpit Card (Clean Sliders & Results) */}
        <div className="max-w-2xl mx-auto bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-brutal">
          
          {/* Card Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Live Wealth Cockpit Simulator
              </h3>
              <span className="text-[10px] font-black uppercase bg-yellow-200 text-slate-900 px-2.5 py-1 rounded-md border-2 border-slate-900 shadow-brutal-sm">
                Interactive
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Adjust your monthly income and savings rate to see your instant Safe-to-Spend allowance.
            </p>
          </div>

          {/* Sliders Area */}
          <div className="space-y-4 mb-6">
            {/* Monthly Income */}
            <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-brutal-sm">
              <div className="flex justify-between items-center text-xs sm:text-sm font-black text-slate-900 mb-2">
                <span>Monthly Take-Home Salary:</span>
                <span className="text-blue-600 font-mono text-base">₹{income.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="25000"
                max="200000"
                step="5000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg border border-slate-900"
              />
            </div>

            {/* Savings Target Rate */}
            <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-brutal-sm">
              <div className="flex justify-between items-center text-xs sm:text-sm font-black text-slate-900 mb-2">
                <span>Save First Rule (Target %):</span>
                <span className="text-emerald-600 font-mono text-base">{savingsRate}% Locked</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={savingsRate}
                onChange={(e) => setSavingsRate(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg border border-slate-900"
              />
            </div>
          </div>

          {/* Real-Time Mathematical Results Box */}
          <div className="grid grid-cols-2 gap-3.5 mb-6">
            <div className="bg-blue-50 border-2 border-slate-900 rounded-2xl p-4 shadow-brutal-sm">
              <span className="text-[11px] font-black uppercase text-blue-900 block mb-1">
                Safe-to-Spend Balance
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono block">
                ₹{safeToSpend.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-slate-600 block mt-1">
                ~₹{dailyAllowance.toLocaleString()} / day limit
              </span>
            </div>

            <div className="bg-emerald-50 border-2 border-slate-900 rounded-2xl p-4 shadow-brutal-sm">
              <span className="text-[11px] font-black uppercase text-emerald-900 block mb-1">
                Monthly Locked Savings
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-800 font-mono block">
                ₹{lockedSavings.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-slate-600 block mt-1">
                ₹{annualSaved.toLocaleString()} / year saved
              </span>
            </div>
          </div>

          {/* AI Insight Snippet */}
          <div className="bg-yellow-50 border-2 border-slate-900 rounded-2xl p-4 shadow-brutal-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-yellow-300 flex items-center justify-center shrink-0 mt-0.5">
              <Bot className="w-4 h-4" />
            </div>
            <p className="text-xs text-slate-800 font-medium leading-relaxed">
              <strong>SaveWise AI Coach:</strong> "With <strong>{savingsRate}%</strong> auto-locked on the 1st, you safely accumulate <strong>₹{annualSaved.toLocaleString()}</strong> every year while enjoying <strong>₹{dailyAllowance.toLocaleString()}/day</strong> completely guilt-free."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
