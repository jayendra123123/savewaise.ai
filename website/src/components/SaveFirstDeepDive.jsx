import React, { useState } from 'react';
import { 
  PiggyBank, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Lock, 
  Coins, 
  ArrowRight,
  TrendingUp 
} from 'lucide-react';

export default function SaveFirstDeepDive() {
  const [income, setIncome] = useState(60000);
  const [savingsRate, setSavingsRate] = useState(25);

  const lockedSavings = Math.round((income * savingsRate) / 100);
  const safeToSpend = income - lockedSavings;
  const annualSavings = lockedSavings * 12;

  return (
    <section id="save-first" className="w-full py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
            THE PHILOSOPHY THAT CHANGES EVERYTHING
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stop Saving What is Left Over.{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Save First.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-normal max-w-2xl mx-auto">
            Traditional expense apps let you spend blindly and hope something remains at the end of the month. SaveWise AI reverses the paradigm.
          </p>
        </div>

        {/* 2-Column Grid: Comparison + Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Side-by-side Comparison (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Old Way */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-3 text-rose-700 font-bold text-sm">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>The Outdated "Retroactive" Method</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                You get paid → you spend across the month without guardrails → you try to save whatever pennies happen to survive. By day 25, unexpected expenses eliminate all potential savings.
              </p>
              <div className="bg-rose-50/70 border border-rose-200/60 rounded-xl p-3 flex items-center justify-between text-xs font-semibold text-rose-800">
                <span>Result: Low financial peace, unpredictable month-end stress</span>
                <span className="font-mono text-rose-600 font-bold">~0–5% Saved</span>
              </div>
            </div>

            {/* SaveWise Way */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-500/80 shadow-fintech relative">
              <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                SaveWise AI Rule
              </div>
              <div className="flex items-center gap-2.5 mb-3 text-emerald-700 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>The SaveWise AI "Deterministic Safe-Spend" Rule</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                You get paid → Your customized savings target is <strong>immediately ring-fenced</strong> into your goal vaults. The rest is your transparent, anxiety-free <strong>Safe-to-Spend Allowance</strong>.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between text-xs font-bold text-emerald-900">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Guaranteed monthly wealth accumulation
                </span>
                <span className="font-mono text-emerald-700 font-extrabold">20–40% Guaranteed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Calculator (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-fintech-lg p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center border border-purple-200">
                  <PiggyBank className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900">Interactive Simulator</h3>
              </div>
              <span className="text-[11px] font-bold text-slate-400">Live Math</span>
            </div>

            {/* Income Slider */}
            <div className="mb-5">
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-600">Monthly Net Income</span>
                <span className="font-mono text-slate-900 font-extrabold">₹{income.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range"
                min="20000"
                max="250000"
                step="5000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full accent-brand-purple cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹20,000</span>
                <span>₹2,50,000</span>
              </div>
            </div>

            {/* Savings Rate Slider */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-600">Target Savings Allocation</span>
                <span className="font-mono text-brand-green font-extrabold">{savingsRate}% of income</span>
              </div>
              <input 
                type="range"
                min="10"
                max="60"
                step="5"
                value={savingsRate}
                onChange={(e) => setSavingsRate(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>10% (Casual)</span>
                <span>30% (Recommended)</span>
                <span>60% (Aggressive)</span>
              </div>
            </div>

            {/* Calculated Breakdown Display */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <div className="p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide block">Locked Savings</span>
                  <span className="text-[10px] text-emerald-600 font-medium">Secured before any spending</span>
                </div>
                <span className="font-mono text-lg font-black text-emerald-700">₹{lockedSavings.toLocaleString('en-IN')}</span>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">Safe-to-Spend Ceiling</span>
                  <span className="text-[10px] text-slate-500 font-medium">Your guilt-free monthly budget</span>
                </div>
                <span className="font-mono text-lg font-black text-slate-900">₹{safeToSpend.toLocaleString('en-IN')}</span>
              </div>

              <div className="p-3 bg-purple-50/60 border border-purple-200/70 rounded-xl flex items-center justify-between text-xs">
                <span className="font-bold text-purple-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                  1-Year Compound Wealth:
                </span>
                <span className="font-mono text-purple-700 font-extrabold text-sm">₹{annualSavings.toLocaleString('en-IN')}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
