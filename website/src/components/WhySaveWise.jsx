import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  XCircle, 
  CheckCircle2, 
  PiggyBank, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles, 
  Zap, 
  ArrowRight,
  RefreshCw,
  Scale
} from 'lucide-react';
import { SectionHeader, Badge } from './ui/Primitives.jsx';

const METRICS = [
  {
    value: '40%',
    label: 'Higher Average Savings Retention',
    desc: 'Users accumulate 35–40% more capital monthly by locking savings before discretionary outflows begin.'
  },
  {
    value: '< 15s',
    label: 'Frictionless Daily Tracking',
    desc: 'No tedious manual categorization. Check your Safe-to-Spend meter in seconds and go on with your day.'
  },
  {
    value: '100%',
    label: 'Zero Debt Overruns',
    desc: 'The mathematical Safe-to-Spend ceiling permanently guards essential obligations and investments.'
  },
  {
    value: '24/7',
    label: 'Contextual AI Advisory',
    desc: 'Private, unbiased intelligence to validate large lifestyle purchases before pulling the trigger.'
  }
];

export default function WhySaveWise() {
  const [activeTab, setActiveTab] = useState('savewise');

  return (
    <section id="why-savewise" className="w-full py-20 sm:py-28 bg-white border-y border-slate-200/70 relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="THE ARCHITECTURAL PARADIGM SHIFT"
          badgeVariant="purple"
          title="Why Traditional Budgeting Apps Fail —"
          highlight="And How We Fixed It."
          subtitle="Most finance apps act like rear-view mirrors: they log what you’ve already spent and leave you hoping money remains on the 30th. SaveWise AI reverses the equation."
        />

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto mb-20">
          
          {/* Toggle Switch */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
              <button
                onClick={() => setActiveTab('old')}
                className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'old'
                    ? 'bg-white text-rose-700 shadow-2xs border border-rose-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>The Traditional Broken Way</span>
              </button>

              <button
                onClick={() => setActiveTab('savewise')}
                className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'savewise'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>The SaveWise AI Method</span>
              </button>
            </div>
          </div>

          {/* Dynamic Card Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Column 1: Traditional Way */}
            <div className={`rounded-3xl p-7 sm:p-9 border transition-all duration-300 ${
              activeTab === 'old' 
                ? 'bg-rose-50/40 border-rose-200 shadow-fintech ring-2 ring-rose-300/30' 
                : 'bg-white border-slate-200 opacity-75'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black">
                  ✕
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    The Old Approach: Save What Remains
                  </h3>
                  <p className="text-xs text-rose-600 font-semibold">
                    Income → Spend Blindly → Attempt to Save Leftovers
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Month-End Guilt:</strong> You spend freely the first 2 weeks, then face financial anxiety when bills arrive.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Passive Rear-View Tracking:</strong> Charts only show where you overspent after the damage is irreversible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Strategic Protection:</strong> Unpredictable spontaneous purchases cannibalize long-term emergency reserves.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: SaveWise AI Way */}
            <div className={`rounded-3xl p-7 sm:p-9 border transition-all duration-300 ${
              activeTab === 'savewise'
                ? 'bg-gradient-to-br from-purple-50/70 via-indigo-50/50 to-emerald-50/60 border-purple-200 shadow-fintech ring-2 ring-purple-400/40'
                : 'bg-white border-slate-200 opacity-75'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-black shadow-xs">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    The SaveWise AI Architecture
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold">
                    Income → Lock Savings Instantly → Spend Remainder Guilt-Free
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Upfront Capital Security:</strong> Your 20%–40% target is ring-fenced the second salary lands into the app.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Guilt-Free Spending:</strong> Your "Safe-to-Spend" meter represents true disposable income. Enjoy without anxiety.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Real-Time AI Guardrails:</strong> Ask your AI Wealth Coach before major buys to confirm if they fit your goals.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 4 Quantifiable Pillars / Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 hover:bg-white hover:border-purple-200 hover:shadow-fintech transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <h4 className="text-sm font-extrabold text-slate-900 mb-1">
                {metric.label}
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
