import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Sparkles, 
  PiggyBank, 
  Coins, 
  ShieldCheck, 
  Plane, 
  Laptop, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader, Badge } from './ui/Primitives.jsx';

const GOALS = [
  {
    id: 'emergency',
    title: '6-Month Emergency Shield',
    icon: ShieldCheck,
    target: 150000,
    current: 120000,
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    tag: 'ESSENTIAL FOUNDATION'
  },
  {
    id: 'gold',
    title: 'Precious Metals Reserve',
    icon: Coins,
    target: 50000,
    current: 45000,
    color: 'from-amber-500 to-yellow-600',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
    tag: 'INFLATION HEDGE'
  },
  {
    id: 'tech',
    title: 'Workstation Tech Upgrade',
    icon: Laptop,
    target: 100000,
    current: 65000,
    color: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
    tag: 'PRODUCTIVITY'
  },
  {
    id: 'travel',
    title: 'Annual Family Vacation',
    icon: Plane,
    target: 80000,
    current: 32000,
    color: 'from-blue-500 to-cyan-600',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
    tag: 'LIFESTYLE'
  }
];

export default function SavingsGoalsSection() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(15000);

  return (
    <section id="goals" className="w-full py-20 sm:py-28 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="MULTI-PURPOSE VAULTS"
          badgeVariant="green"
          title="Ring-Fenced Savings Goals &"
          highlight="Milestone Vaults"
          subtitle="Partition your wealth into isolated vaults. Prevent accidental lifestyle creep and hit life milestones months ahead of schedule."
        />

        {/* 4 Goal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {GOALS.map((goal) => {
            const Icon = goal.icon;
            const percent = Math.round((goal.current / goal.target) * 100);
            return (
              <div
                key={goal.id}
                className="bg-[#F8FAFC] hover:bg-white border border-slate-200/90 hover:border-purple-200 rounded-3xl p-6 shadow-2xs hover:shadow-fintech transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${goal.iconBg} shadow-inner`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      {goal.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    {goal.title}
                  </h3>

                  <div className="flex items-baseline justify-between mt-3 mb-1">
                    <span className="text-sm font-black text-slate-900">
                      ₹{goal.current.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Target: ₹{goal.target.toLocaleString()}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-200/80 p-0.5 overflow-hidden my-2">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${goal.color}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/70 flex justify-between items-center text-xs">
                  <span className="font-bold text-emerald-600">{percent}% Achieved</span>
                  <span className="text-slate-400 font-medium">₹{(goal.target - goal.current).toLocaleString()} left</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Milestone Accelerator Card */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl max-w-5xl mx-auto border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full inline-block">
                INTERACTIVE ACCELERATOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Simulate Your Wealth Accumulation Speed
              </h3>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Adjust your monthly locked savings contribution and watch your multi-vault timeline compress in real-time.
              </p>

              {/* Slider */}
              <div className="pt-2">
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                  <span>Monthly Locked Target:</span>
                  <span className="text-emerald-400 text-sm">₹{monthlyDeposit.toLocaleString()} / month</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="2500"
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-white/20 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹5,000</span>
                  <span>₹25,000</span>
                  <span>₹50,000</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-md">
                <span className="text-xs text-slate-300 block">1-Year Accumulated</span>
                <span className="text-2xl sm:text-3xl font-black text-white block mt-1">
                  ₹{(monthlyDeposit * 12).toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-300 font-semibold block mt-1">+ Interest & Compound</span>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-md">
                <span className="text-xs text-slate-300 block">3-Year Accumulated</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 block mt-1">
                  ₹{(monthlyDeposit * 36).toLocaleString()}
                </span>
                <span className="text-[11px] text-slate-300 font-semibold block mt-1">Complete financial safety</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
