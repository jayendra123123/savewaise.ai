import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Utensils, 
  Home, 
  Car, 
  Tv, 
  ShoppingBag,
  Plus,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SectionHeader, Badge } from './ui/Primitives.jsx';

const INITIAL_CATEGORIES = [
  { id: 'housing', name: 'Housing & Rent', allocated: 18000, spent: 18000, icon: Home, color: 'bg-purple-500' },
  { id: 'groceries', name: 'Groceries & Household', allocated: 12000, spent: 8400, icon: ShoppingBag, color: 'bg-emerald-500' },
  { id: 'dining', name: 'Dining Out & Social', allocated: 8000, spent: 5200, icon: Utensils, color: 'bg-blue-500' },
  { id: 'transit', name: 'Fuel & Commute', allocated: 4500, spent: 2800, icon: Car, color: 'bg-amber-500' },
  { id: 'utilities', name: 'Utilities & Bills', allocated: 2500, spent: 2500, icon: Tv, color: 'bg-indigo-500' },
];

export default function ExpenseBudgetSection() {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const totalAllocated = categories.reduce((sum, c) => sum + c.allocated, 0);
  const totalSpent = categories.reduce((sum, c) => sum + c.spent, 0);
  const remainingBudget = totalAllocated - totalSpent;
  const percentSpent = Math.round((totalSpent / totalAllocated) * 100);

  return (
    <section id="budget" className="w-full py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="PRECISION ENVELOPES"
          badgeVariant="blue"
          title="Granular Expense &"
          highlight="Budget Tracking"
          subtitle="Effortless envelope budgeting that never forces you to micro-manage every rupee. Know your exact category health at a single glance."
        />

        {/* 2-Column Interactive Dashboard Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Category Envelopes (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Monthly Category Envelopes
              </span>
              <span className="text-xs font-bold text-slate-600">
                5 Active Envelopes
              </span>
            </div>

            {categories.map((cat) => {
              const Icon = cat.icon;
              const catPercent = Math.round((cat.spent / cat.allocated) * 100);
              const isWarning = catPercent >= 90;
              return (
                <div
                  key={cat.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-2xs hover:shadow-fintech transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl ${cat.color}/10 text-slate-800 flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-slate-700" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">{cat.name}</span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          Spent: ₹{cat.spent.toLocaleString()} / ₹{cat.allocated.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                      catPercent >= 100 
                        ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                        : isWarning 
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {catPercent}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        catPercent >= 100 ? 'bg-rose-500' : isWarning ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${Math.min(catPercent, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Overall Budget Health Card (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 shadow-xl rounded-3xl p-7 sm:p-9 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <PieChart className="w-4 h-4" />
                </div>
                <span className="text-sm font-extrabold text-slate-900">Total Envelope Health</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Disciplined Pace
              </span>
            </div>

            {/* Main numbers */}
            <div>
              <span className="text-xs font-medium text-slate-400 block">Total Remaining Envelope Balance</span>
              <div className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1">
                ₹{remainingBudget.toLocaleString()}.00
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Across your 5 planned envelopes, you have utilized <strong>{percentSpent}%</strong> of your monthly allocation.
              </p>
            </div>

            {/* Overall visual bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Spent: ₹{totalSpent.toLocaleString()}</span>
                <span>Limit: ₹{totalAllocated.toLocaleString()}</span>
              </div>
              <div className="w-full h-3.5 rounded-full bg-slate-100 p-0.5 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-600 transition-all duration-500"
                  style={{ width: `${percentSpent}%` }}
                />
              </div>
            </div>

            {/* 2 Key Safeguards */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Instant Category Warnings:</strong> Proactive push notifications when an envelope reaches 85% capacity.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero Cross-Envelope Bleed:</strong> Prevents grocery capital from silently vanishing into impulsive weekend splurges.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
