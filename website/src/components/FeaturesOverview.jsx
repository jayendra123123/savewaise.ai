import React from 'react';
import { 
  PiggyBank, 
  BrainCircuit, 
  Coins, 
  PieChart, 
  Target, 
  CalendarCheck, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

const FEATURES = [
  {
    id: 'save-first',
    icon: PiggyBank,
    badge: 'CORE INNOVATION',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    title: 'Save First Spending Architecture',
    desc: 'Never rely on leftover cash. The app immediately locks your chosen monthly savings target upon income entry and sets a real-time safe-to-spend boundary.',
    benefit: 'Automated 20%–40% wealth retention guaranteed',
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  {
    id: 'ai-coach',
    icon: BrainCircuit,
    badge: 'AI INTELLIGENCE',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    title: 'Conversational AI Financial Coach',
    desc: 'Ask complex cashflow questions or receive automated monthly financial wellness audits. Built for educational guidance without commercial upsells.',
    benefit: 'Context-aware advice grounded in your real numbers',
    color: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200'
  },
  {
    id: 'market-intel',
    icon: Coins,
    badge: 'REAL-TIME DATA',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    title: 'Precious Metals & Equities Feeds',
    desc: 'Live Gold (XAU) and Silver (XAG) spot prices quoted in Indian Rupees (₹/INR) plus top US equities, backed by automated email price threshold alerts.',
    benefit: 'Zero mock data • Direct Gold API & Twelve Data',
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200'
  },
  {
    id: 'expense-tracking',
    icon: PieChart,
    badge: 'DISCIPLINE',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    title: 'Granular Expense & Budget Tracking',
    desc: 'Categorize spending across housing, groceries, transport, and utilities with instant visual warnings when approaching sub-category ceilings.',
    benefit: 'Instant feedback loop prevents month-end surprises',
    color: 'from-blue-500 to-cyan-600',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    id: 'savings-goals',
    icon: Target,
    badge: 'MILESTONES',
    badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
    title: 'Dedicated Target Savings Goals',
    desc: 'Build dedicated vaults for Emergency Funds, Gold accumulation, Dream Vacations, or home deposits with clear time-to-completion trajectories.',
    benefit: 'Visual milestone bars keep motivation high',
    color: 'from-rose-500 to-pink-600',
    iconBg: 'bg-rose-50 text-rose-600 border-rose-200'
  },
  {
    id: 'reminders',
    icon: CalendarCheck,
    badge: 'AUTOMATION',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    title: 'Smart Financial Reminders & To-Dos',
    desc: 'Manage upcoming SIP auto-debits, credit card bill payment due dates, tax filing reminders, and rent payments with priority urgency flags.',
    benefit: 'Zero late payment fees and total peace of mind',
    color: 'from-indigo-500 to-violet-600',
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200'
  }
];

export default function FeaturesOverview() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 bg-white border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 mb-3">
            COMPREHENSIVE FINANCIAL SUITE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Six Intelligent Pillars of Personal Wealth
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-normal max-w-2xl mx-auto">
            Everything you need to secure your baseline, control your daily cashflow, and navigate modern market opportunities.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-slate-300 rounded-3xl p-6 sm:p-7 shadow-2xs hover:shadow-fintech transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110 ${item.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {item.benefit}
                  </span>
                  <a href={`#${item.id}`} className="text-slate-400 group-hover:text-brand-purple transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
