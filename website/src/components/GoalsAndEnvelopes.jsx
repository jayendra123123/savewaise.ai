import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PiggyBank, 
  ShoppingBag, 
  Utensils, 
  Home, 
  Car, 
  Laptop, 
  CheckCircle2, 
  CreditCard,
  Clock,
  Target
} from 'lucide-react';

const ENVELOPES = [
  { name: 'Housing & Rent', spent: 18000, limit: 18000, color: 'bg-purple-500' },
  { name: 'Groceries & Home', spent: 8400, limit: 12000, color: 'bg-emerald-500' },
  { name: 'Dining & Social', spent: 5200, limit: 8000, color: 'bg-blue-500' },
  { name: 'Fuel & Transit', spent: 2800, limit: 4500, color: 'bg-amber-500' },
];

const VAULTS = [
  { name: '🛡️ 6-Month Emergency Shield', saved: 120000, target: 150000, percent: 80 },
  { name: '🪙 Physical Gold Reserve', saved: 45000, target: 50000, percent: 90 },
  { name: '💻 Workstation Tech Setup', saved: 65000, target: 100000, percent: 65 },
];

const REMINDERS = [
  { title: 'Nifty 50 Index Mutual Fund SIP', date: 'Due 15th of month', amount: '₹10,000', done: false },
  { title: 'HDFC Credit Card Statement', date: 'Due tomorrow', amount: '₹14,250', done: false },
  { title: 'Save First Vault Transfer', date: 'Completed on 1st', amount: '₹15,000', done: true },
];

export default function GoalsAndEnvelopes() {
  const [todos, setTodos] = useState(REMINDERS);

  const toggleTodo = (index) => {
    setTodos(todos.map((t, i) => i === index ? { ...t, done: !t.done } : t));
  };

  return (
    <section id="save-first" className="w-full py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border-2 border-slate-900 shadow-brutal-sm text-xs font-black uppercase text-emerald-900 mb-3">
            CLARITY & CONTROL
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Budgets, Goals & Scheduled To-Dos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            Real screens from the mobile app designed to eliminate financial stress.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Col 1: Budget Envelopes */}
          <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-6 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-100 mb-4">
                <h3 className="text-base font-black text-slate-900">Category Envelopes</h3>
                <span className="text-[10px] font-black uppercase bg-blue-100 text-blue-900 px-2 py-0.5 rounded border border-slate-900">
                  Monthly Caps
                </span>
              </div>

              <div className="space-y-3">
                {ENVELOPES.map((env) => {
                  const pct = Math.round((env.spent / env.limit) * 100);
                  return (
                    <div key={env.name} className="bg-white border-2 border-slate-900 rounded-xl p-3 shadow-brutal-sm">
                      <div className="flex justify-between text-xs font-bold text-slate-900 mb-1">
                        <span>{env.name}</span>
                        <span className="font-mono">{pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 border border-slate-900 overflow-hidden">
                        <div 
                          className={`h-full ${pct >= 100 ? 'bg-rose-500' : 'bg-blue-600'}`} 
                          style={{ width: `${Math.min(pct, 100)}%` }} 
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                        <span>₹{env.spent.toLocaleString()}</span>
                        <span>₹{env.limit.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <span className="text-[11px] font-bold text-slate-500 pt-4 block">
              ✓ Prevents overspending on food & lifestyle
            </span>
          </div>

          {/* Col 2: Goal Vaults */}
          <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-6 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-100 mb-4">
                <h3 className="text-base font-black text-slate-900">Multi-Goal Vaults</h3>
                <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded border border-slate-900">
                  Ring-Fenced
                </span>
              </div>

              <div className="space-y-3">
                {VAULTS.map((vault) => (
                  <div key={vault.name} className="bg-white border-2 border-slate-900 rounded-xl p-3 shadow-brutal-sm">
                    <div className="flex justify-between text-xs font-bold text-slate-900 mb-1">
                      <span className="truncate">{vault.name}</span>
                      <span className="font-mono text-emerald-700">{vault.percent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 border border-slate-900 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500" 
                        style={{ width: `${vault.percent}%` }} 
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                      <span>₹{vault.saved.toLocaleString()}</span>
                      <span>Target: ₹{vault.target.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <span className="text-[11px] font-bold text-slate-500 pt-4 block">
              ✓ Automated recurring deposit allocations
            </span>
          </div>

          {/* Col 3: Smart Reminders */}
          <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-6 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-slate-100 mb-4">
                <h3 className="text-base font-black text-slate-900">SIPs & Due Dates</h3>
                <span className="text-[10px] font-black uppercase bg-yellow-200 text-slate-900 px-2 py-0.5 rounded border border-slate-900">
                  Interactive
                </span>
              </div>

              <div className="space-y-2.5">
                {todos.map((todo, idx) => (
                  <div 
                    key={todo.title}
                    onClick={() => toggleTodo(idx)}
                    className={`cursor-pointer bg-white border-2 border-slate-900 rounded-xl p-3 shadow-brutal-sm flex items-center justify-between gap-2 transition-all ${
                      todo.done ? 'opacity-60 bg-slate-50' : 'hover:translate-x-[-1px]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-5 h-5 rounded-md border-2 border-slate-900 flex items-center justify-center shrink-0 ${
                        todo.done ? 'bg-emerald-600 text-white' : 'bg-white'
                      }`}>
                        {todo.done && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div className="min-w-0">
                        <h4 className={`text-xs font-bold text-slate-900 truncate ${todo.done ? 'line-through text-slate-400' : ''}`}>
                          {todo.title}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-medium block">
                          {todo.date}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-black text-slate-900 font-mono shrink-0">
                      {todo.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <span className="text-[11px] font-bold text-slate-500 pt-4 block">
              ✓ Click any reminder to test completion
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
