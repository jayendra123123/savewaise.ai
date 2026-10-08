import React from 'react';
import { 
  PiggyBank, 
  BrainCircuit, 
  Coins, 
  PieChart, 
  Target, 
  CalendarCheck, 
  ArrowRight 
} from 'lucide-react';

const FEATURES = [
  {
    icon: PiggyBank,
    title: '1. Save First Rule Engine',
    desc: 'Locks your target savings rate (e.g., 25% or ₹15,000) the second your income lands. You spend only the remainder without month-end panic.',
    tag: 'CORE DISCIPLINE',
    tagColor: 'bg-emerald-100 text-emerald-900',
    accentColor: 'bg-emerald-500'
  },
  {
    icon: BrainCircuit,
    title: '2. Conversational AI Coach',
    desc: 'Ask your private AI Coach "Can I afford this ₹25,000 purchase?" and receive answers grounded in your exact live cashflow and vaults.',
    tag: '24/7 INTELLIGENCE',
    tagColor: 'bg-purple-100 text-purple-900',
    accentColor: 'bg-purple-500'
  },
  {
    icon: Coins,
    title: '3. Gold & Silver Spot Feeds (₹)',
    desc: 'Live commodity feeds from official Gold APIs quoted in Indian Rupees (₹/INR) per Troy Ounce, plus 24K and 22K per-gram benchmarks.',
    tag: 'REAL-TIME DATA',
    tagColor: 'bg-amber-100 text-amber-900',
    accentColor: 'bg-amber-500'
  },
  {
    icon: PieChart,
    title: '4. Granular Category Envelopes',
    desc: 'Set strict monthly ceilings for Groceries, Dining, Rent, and Commute. Visual meters alert you before you exceed your planned envelope.',
    tag: 'BUDGET CONTROL',
    tagColor: 'bg-blue-100 text-blue-900',
    accentColor: 'bg-blue-500'
  },
  {
    icon: Target,
    title: '5. Multi-Goal Milestone Vaults',
    desc: 'Ring-fence savings for your 6-Month Emergency Shield, Physical Gold Reserve, Tech Upgrades, and Travel with automated progress tracking.',
    tag: 'WEALTH CREATION',
    tagColor: 'bg-indigo-100 text-indigo-900',
    accentColor: 'bg-indigo-500'
  },
  {
    icon: CalendarCheck,
    title: '6. Smart Reminders & SIP To-Dos',
    desc: 'Automated recurring deadlines for SIP auto-debits, credit card statements, and tax milestones. Never incur another late penalty.',
    tag: 'ZERO LATE FEES',
    tagColor: 'bg-rose-100 text-rose-900',
    accentColor: 'bg-rose-500'
  }
];

export default function CoreFeatures() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 bg-white border-y-2 border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border-2 border-slate-900 shadow-brutal-sm text-xs font-black uppercase text-slate-900 mb-3">
            ALL-IN-ONE MOBILE SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What SaveWise AI Actually Does
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3">
            Six focused, high-impact features engineered to give you total control over your cashflow.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FFFDF7] border-2 border-slate-900 rounded-2xl p-6 shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-900 shadow-brutal-sm flex items-center justify-center text-slate-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border-2 border-slate-900 shadow-brutal-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-slate-100 flex items-center text-xs font-black text-blue-600">
                  <span>Included in Free APK</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
