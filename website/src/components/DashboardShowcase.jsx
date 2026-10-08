import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PiggyBank, 
  BrainCircuit, 
  Coins, 
  PieChart, 
  Target, 
  CalendarCheck, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Bell,
  Wallet,
  Zap,
  DollarSign,
  Activity
} from 'lucide-react';
import { SectionHeader, Badge } from './ui/Primitives.jsx';

const TABS = [
  {
    id: 'cockpit',
    title: 'Safe-to-Spend Cockpit',
    icon: Wallet,
    tag: 'CORE ENGINE',
    subtitle: 'Live mathematical spend ceiling that protects your savings automatically.',
    stats: [
      { label: 'Safe Allowance', value: '₹38,450.00' },
      { label: 'Locked Vault', value: '₹15,000.00' },
      { label: 'Daily Run Rate', value: '₹1,280 / day' }
    ],
    features: [
      'Locks target percentage instantly upon income entry',
      'Continuous daily pacing prevents month-end deficit',
      'Dynamic color-coded health indicators (Green / Amber / Red)'
    ]
  },
  {
    id: 'ai-coach',
    title: 'Conversational AI Coach',
    icon: BrainCircuit,
    tag: 'INTELLIGENCE',
    subtitle: 'Context-aware guidance grounded directly in your personal numbers.',
    stats: [
      { label: 'Response Time', value: '< 1.5s' },
      { label: 'Context Engine', value: 'Private Vault' },
      { label: 'Educational Bias', value: '100% Unbiased' }
    ],
    features: [
      'Ask complex "Can I afford this?" queries before spending',
      'Automated monthly financial health audits and cashflow optimization',
      'Explains macro market shifts (Gold/Equities) in simple terms'
    ]
  },
  {
    id: 'market-intel',
    title: 'Precious Metals & Equities',
    icon: Coins,
    tag: 'REAL-TIME DATA',
    subtitle: 'Gold and Silver spot feeds in Indian Rupees (₹) with email dip alerts.',
    stats: [
      { label: 'Gold Spot (XAU)', value: '₹3,98,626 / oz' },
      { label: 'Silver Spot (XAG)', value: '₹5,689 / oz' },
      { label: 'Conversion', value: '24K & 22K Grams' }
    ],
    features: [
      'Official Gold API & Twelve Data spot rate integrations',
      'Configurable Buy-on-Dip and Growth Monitoring email triggers',
      'Educational trend analysis on every automated alert dispatch'
    ]
  },
  {
    id: 'goals',
    title: 'Savings Goals Vaults',
    icon: Target,
    tag: 'WEALTH CREATION',
    subtitle: 'Ring-fenced multi-purpose vaults with automated milestone projections.',
    stats: [
      { label: 'Emergency Fund', value: '₹1,20,000 (80%)' },
      { label: 'Gold Reserve', value: '₹45,000 (100%)' },
      { label: 'Tech Upgrade', value: '₹28,500 (65%)' }
    ],
    features: [
      'Visual progress rings with automatic completion date estimates',
      'Isolated vaults prevent accidental leakage into daily spending',
      'Smart recurring contribution allocations from monthly income'
    ]
  },
  {
    id: 'reminders',
    title: 'Smart Financial To-Dos',
    icon: CalendarCheck,
    tag: 'ZERO LATE FEES',
    subtitle: 'Automated recurring deadlines for SIPs, credit cards, and tax filings.',
    stats: [
      { label: 'Active Alerts', value: '4 Scheduled' },
      { label: 'Next Due', value: 'Tomorrow (CC Bill)' },
      { label: 'Late Fees Saved', value: '₹12,400+' }
    ],
    features: [
      'Auto-sync with monthly income cycles',
      'Priority tags (Urgent, High, Normal, Completed)',
      'Direct checklist integration with push & email notifications'
    ]
  }
];

export default function DashboardShowcase() {
  const [activeTabId, setActiveTabId] = useState('cockpit');
  const currentTab = TABS.find(t => t.id === activeTabId) || TABS[0];

  return (
    <section id="showcase" className="w-full py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="PRODUCT CAPABILITIES"
          badgeVariant="purple"
          title="Explore the SaveWise AI"
          highlight="Ecosystem"
          subtitle="Take an interactive tour through the five pillars that make SaveWise AI the smartest personal wealth manager."
        />

        {/* Interactive Tab Navigation Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-3 scrollbar-none">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-fintech scale-102'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Preview Canvas */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Left Column: Feature Description & Checklist (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="mb-3">
                    <Badge variant="purple" size="sm">{currentTab.tag}</Badge>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentTab.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                    {currentTab.subtitle}
                  </p>
                </div>

                {/* Stat Badges */}
                <div className="grid grid-cols-3 gap-2.5 py-4 border-y border-slate-100">
                  {currentTab.stats.map((st) => (
                    <div key={st.label} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3">
                      <span className="text-[10px] font-bold text-slate-400 block truncate">{st.label}</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 block truncate mt-0.5">{st.value}</span>
                    </div>
                  ))}
                </div>

                {/* Key Points Checklist */}
                <ul className="space-y-3">
                  {currentTab.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/SaveWise-AI.apk"
                  download="SaveWise-AI.apk"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-purple hover:text-indigo-800 transition-colors pt-2 group"
                >
                  <span>Experience this in the app</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right Column: Live Feature UI Simulation Mockup (7 cols) */}
              <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-inner">
                
                {/* 1. Cockpit Visualizer */}
                {currentTab.id === 'cockpit' && (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-md">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-slate-300">SAFE-TO-SPEND REMAINING</span>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                          ON TRACK
                        </span>
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                        ₹38,450.00
                      </div>
                      <p className="text-xs text-slate-400">
                        You can spend up to <strong>₹1,280/day</strong> for the next 16 days without breaching your 25% savings rule.
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-slate-400 block">Total Income</span>
                          <span className="font-bold text-white">₹60,000.00</span>
                        </div>
                        <div>
                          <span className="text-emerald-400 block">Locked Savings</span>
                          <span className="font-bold text-emerald-300">₹15,000.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-500 block">Logged Expenses</span>
                        <span className="text-base font-extrabold text-slate-900">₹6,550.00</span>
                        <span className="text-[11px] text-slate-400 block mt-1">Housing, Food & Transit</span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-500 block">Wealth Retention</span>
                        <span className="text-base font-extrabold text-emerald-600">+25.0%</span>
                        <span className="text-[11px] text-emerald-700 block mt-1">Auto-saved on 1st</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. AI Coach Visualizer */}
                {currentTab.id === 'ai-coach' && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5 justify-end">
                      <div className="bg-slate-900 text-white text-xs sm:text-sm font-medium p-3.5 rounded-2xl rounded-tr-xs max-w-md shadow-xs">
                        Can I purchase an Apple Watch for ₹28,000 this weekend?
                      </div>
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-900 font-bold flex items-center justify-center text-xs shrink-0">
                        YOU
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-900 to-indigo-950 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-white border border-slate-200 text-xs sm:text-sm font-normal text-slate-700 p-4 rounded-2xl rounded-tl-xs shadow-xs space-y-2 max-w-lg">
                        <p className="font-semibold text-slate-900">
                          Analysis based on your current numbers:
                        </p>
                        <p>
                          Your locked savings of <strong>₹15,000</strong> is completely safe. Your remaining Safe-to-Spend balance is <strong>₹38,450</strong>.
                        </p>
                        <p className="text-emerald-700 font-medium bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                          ✓ <strong>Affordable:</strong> Spending ₹28,000 leaves ₹10,450 (~₹653/day) for remaining essentials. You also have ₹12,000 in your Tech Vault!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Market Intel Visualizer */}
                {currentTab.id === 'market-intel' && (
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-5 border border-slate-200">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <Coins className="w-5 h-5 text-amber-500" />
                          <span className="font-extrabold text-sm text-slate-900">Gold Spot (XAU/INR)</span>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          +0.21%
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900">
                        ₹3,98,626.44 <span className="text-xs font-normal text-slate-400">/ oz</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs">
                        <div>
                          <span className="text-slate-400 block">24K Retail Gram:</span>
                          <span className="font-bold text-slate-800">₹12,817.07</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">22K Jewelry Gram:</span>
                          <span className="font-bold text-slate-800">₹11,749.41</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 text-xs text-amber-900">
                      <div className="flex items-center gap-2 font-bold mb-1">
                        <Bell className="w-3.5 h-3.5 text-amber-700" />
                        <span>Configured Buy-on-Dip Trigger</span>
                      </div>
                      <p>
                        Email dispatch configured: Notify when Gold falls below <strong>₹3,95,000</strong> with AI technical summary.
                      </p>
                    </div>
                  </div>
                )}

                {/* 4. Goals Visualizer */}
                {currentTab.id === 'goals' && (
                  <div className="space-y-3">
                    <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-2xs">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-900">🛡️ Emergency Fund (6 Months)</span>
                        <span className="text-emerald-600">80% (₹1,20,000 / ₹1,50,000)</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-100 p-0.5 overflow-hidden my-2">
                        <div className="h-full rounded-full bg-emerald-500 w-[80%]" />
                      </div>
                      <span className="text-[11px] text-slate-400">Projected completion: In 2 months</span>
                    </div>

                    <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-2xs">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-900">💻 MacBook Pro M-Series</span>
                        <span className="text-brand-purple">65% (₹65,000 / ₹1,00,000)</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-100 p-0.5 overflow-hidden my-2">
                        <div className="h-full rounded-full bg-brand-purple w-[65%]" />
                      </div>
                      <span className="text-[11px] text-slate-400">Auto-allocating ₹10,000/month</span>
                    </div>
                  </div>
                )}

                {/* 5. Reminders Visualizer */}
                {currentTab.id === 'reminders' && (
                  <div className="space-y-2.5">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                          !
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">HDFC Credit Card Bill</span>
                          <span className="text-[10px] text-rose-600 font-semibold">Due tomorrow (₹14,250)</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                        Urgent
                      </span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">Nifty 50 Index SIP Auto-Debit</span>
                          <span className="text-[10px] text-slate-400 font-semibold">Executed on 5th (₹10,000)</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                        Done
                      </span>
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
