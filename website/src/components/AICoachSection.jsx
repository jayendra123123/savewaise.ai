import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  ShieldCheck, 
  CheckCircle2, 
  Laptop, 
  Coins, 
  ShoppingBag, 
  Shield, 
  Send 
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'gadget',
    label: 'Tech Purchase',
    icon: Laptop,
    question: 'Can I afford a ₹25,000 gaming monitor this weekend?',
    verdict: 'APPROVED • 100% SAFE TO BUY',
    verdictClass: 'bg-emerald-100 text-emerald-900 border-emerald-900',
    metrics: [
      { label: 'Locked Savings Vault', value: '₹15,000', sub: '100% Untouched' },
      { label: 'Remaining Safe-to-Spend', value: '₹38,450', sub: '16 Days Left' },
      { label: 'Daily Allowance After', value: '₹840 / day', sub: 'Guilt-Free Buffer' }
    ],
    explanation: 'Your 25% savings rule remains completely safe. Spending ₹25,000 leaves ₹13,450 in discretionary spend (~₹840/day for daily essentials).',
    tip: 'Pro-Tip: You already have ₹14,200 accumulated in your "Tech Goal Vault". Using that retains a higher daily allowance of ₹1,515/day.'
  },
  {
    id: 'market',
    label: 'Gold Dip',
    icon: Coins,
    question: 'Why did Gold spot dip 0.45% today and should I buy?',
    verdict: 'DCA BUY OPPORTUNITY',
    verdictClass: 'bg-amber-100 text-amber-900 border-amber-900',
    metrics: [
      { label: 'Gold Spot (XAU/INR)', value: '₹3,98,200', sub: '-0.45% Today' },
      { label: '24K Retail Gram', value: '₹12,803.85', sub: 'Per Gram Benchmark' },
      { label: 'Monthly Metal Budget', value: '₹5,000', sub: 'Pre-Allocated' }
    ],
    explanation: 'US Dollar Index strengthening triggered brief profit-taking across global commodities. Support levels remain firm.',
    tip: 'Strategic Guidance: Stick to your planned ₹5,000 recurring monthly metal deposit rather than emotional lump sums.'
  },
  {
    id: 'grocery',
    label: 'Trim Expenses',
    icon: ShoppingBag,
    question: 'How can I trim ₹5,000 from discretionary monthly spend?',
    verdict: '+₹60,000 / YEAR ACCUMULATED',
    verdictClass: 'bg-purple-100 text-purple-900 border-purple-900',
    metrics: [
      { label: 'Delivery Apps Outflow', value: '₹14,800', sub: '22 Orders' },
      { label: 'Short Cab Rides (<3km)', value: '₹3,400', sub: 'Commute Spill' },
      { label: 'Capital Retained', value: '+₹5,000 / mo', sub: 'Into Vault' }
    ],
    explanation: 'Food delivery apps and short rides accounted for 42% of non-essential outflow over the past 45 days.',
    tip: 'Action: Batch-cooking 2 dinners per week saves ~₹3,800/mo without feeling restricted.'
  },
  {
    id: 'runway',
    label: 'Runway Audit',
    icon: Shield,
    question: 'What is my financial runway if my primary income stops?',
    verdict: '4.21 MONTHS LIQUID SAFETY',
    verdictClass: 'bg-blue-100 text-blue-900 border-blue-900',
    metrics: [
      { label: 'Essential Baseline', value: '₹28,500 / mo', sub: 'Fixed Living Cost' },
      { label: 'Emergency Fund Vault', value: '₹1,20,000', sub: 'Liquid Reserves' },
      { label: 'Guaranteed Horizon', value: '4.21 Months', sub: 'Zero-Debt Buffer' }
    ],
    explanation: 'Your emergency reserves cover over 4 months of essential rent, groceries, and utilities without taking any consumer loans.',
    tip: 'Milestone: You are just ₹30,000 away from achieving the recommended 6-month fortress.'
  }
];

export default function AICoachSection() {
  const [activeId, setActiveId] = useState('gadget');
  const scenario = SCENARIOS.find(s => s.id === activeId) || SCENARIOS[0];

  return (
    <section id="ai-coach" className="w-full py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border-2 border-slate-900 shadow-brutal-sm text-xs font-black uppercase text-purple-900 mb-3">
            PRIVATE FINANCIAL AI
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Conversational AI Coach Preview
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            Ask questions before making lifestyle purchases to verify their impact on your numbers.
          </p>
        </div>

        {/* Main Reference-Style Card Box */}
        <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-brutal">
          
          {/* Top Title */}
          <div className="mb-5">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Test SaveWise AI Coach | Intelligence Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Select a financial scenario to simulate real-time vault analysis.
            </p>
          </div>

          {/* Reference Segmented Tabs (Like Email / WhatsApp in screenshot) */}
          <div className="bg-white border-2 border-slate-900 rounded-xl p-1.5 grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-6 shadow-brutal-sm">
            {SCENARIOS.map((item) => {
              const isSelected = item.id === activeId;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-brutal-sm border border-slate-900'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Simulated Query Box (Like Email input in screenshot) */}
          <div className="mb-6">
            <label className="text-xs font-black uppercase text-slate-700 block mb-1.5">
              Simulated User Question
            </label>
            <div className="bg-white border-2 border-slate-900 rounded-xl p-3.5 shadow-brutal-sm flex items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                "{scenario.question}"
              </span>
              <span className="text-[10px] font-black uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-900 shrink-0">
                Prompt
              </span>
            </div>
          </div>

          {/* AI Response Output Card */}
          <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 shadow-brutal-sm space-y-4">
            
            {/* Header Verdict */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                  AI
                </div>
                <span className="text-xs font-black text-slate-900">
                  SaveWise AI Calculation Result
                </span>
              </div>
              <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-md border-2 ${scenario.verdictClass}`}>
                {scenario.verdict}
              </span>
            </div>

            {/* 3 Metric Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {scenario.metrics.map((m, i) => (
                <div key={i} className="bg-[#FAF8F5] border-2 border-slate-900 rounded-xl p-3 shadow-brutal-sm">
                  <span className="text-[10px] font-black uppercase text-slate-500 block truncate">{m.label}</span>
                  <span className="text-sm sm:text-base font-black text-slate-900 font-mono block mt-0.5">{m.value}</span>
                  <span className="text-[10px] font-bold text-emerald-700 block">{m.sub}</span>
                </div>
              ))}
            </div>

            {/* AI Explanation & Tip */}
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              {scenario.explanation}
            </p>

            <div className="bg-yellow-100 border-2 border-slate-900 rounded-xl p-3 text-xs text-slate-900 font-medium shadow-brutal-sm">
              💡 {scenario.tip}
            </div>

          </div>

          {/* Bottom Security Pill */}
          <div className="mt-5 pt-4 border-t-2 border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Private Local Vault • Zero Advertising</span>
            </span>
            <span className="font-bold text-blue-600">SaveWise AI Cockpit</span>
          </div>

        </div>

      </div>
    </section>
  );
}
