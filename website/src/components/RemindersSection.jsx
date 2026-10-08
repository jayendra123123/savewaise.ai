import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarCheck, 
  CreditCard, 
  PiggyBank, 
  FileText, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Plus
} from 'lucide-react';
import { SectionHeader, Badge } from './ui/Primitives.jsx';

const INITIAL_TODOS = [
  {
    id: 1,
    title: 'Nifty 50 Index Mutual Fund SIP Auto-Debit',
    category: 'Investments',
    date: 'Due on 15th of this month',
    amount: '₹10,000',
    priority: 'HIGH',
    priorityClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: TrendingUp,
    completed: false
  },
  {
    id: 2,
    title: 'HDFC Millennia Credit Card Outstanding Bill',
    category: 'Debt / Bills',
    date: 'Due tomorrow (10th)',
    amount: '₹14,250',
    priority: 'URGENT',
    priorityClass: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: CreditCard,
    completed: false
  },
  {
    id: 3,
    title: 'Save First Monthly Target Vault Transfer',
    category: 'Save First',
    date: 'Completed on 1st of month',
    amount: '₹15,000',
    priority: 'DONE',
    priorityClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: PiggyBank,
    completed: true
  },
  {
    id: 4,
    title: 'Quarterly Advance Tax Review & Filing',
    category: 'Tax & Compliance',
    date: 'Due in 18 days',
    amount: 'N/A',
    priority: 'NORMAL',
    priorityClass: 'bg-slate-100 text-slate-700 border-slate-200',
    icon: FileText,
    completed: false
  }
];

export default function RemindersSection() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <section id="reminders" className="w-full py-20 sm:py-28 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="ZERO MISSED DEADLINES"
          badgeVariant="purple"
          title="Financial Peace with"
          highlight="Smart Reminders"
          subtitle="Never pay another late fee or miss a strategic market transfer. Keep all your monthly financial obligations organized with automated priority alerts."
        />

        {/* Interactive Checklist Card */}
        <div className="max-w-4xl mx-auto bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-6">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Monthly Financial Action Checklist
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Click any task below to toggle completion and see real-time status update.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-2xs">
                {completedCount} of {todos.length} Completed
              </span>
            </div>
          </div>

          {/* List items */}
          <div className="space-y-3.5">
            {todos.map((todo) => {
              const Icon = todo.icon;
              return (
                <div
                  key={todo.id}
                  onClick={() => toggleTodo(todo.id)}
                  className={`cursor-pointer rounded-2xl p-4.5 sm:p-5 border transition-all duration-200 flex items-center justify-between gap-4 ${
                    todo.completed
                      ? 'bg-white/50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-fintech'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Checkbox */}
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                      todo.completed
                        ? 'bg-emerald-600 text-white'
                        : 'border-2 border-slate-300 hover:border-purple-500'
                    }`}>
                      {todo.completed && <CheckCircle2 className="w-4 h-4" />}
                    </div>

                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 hidden sm:flex">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold text-slate-900 ${todo.completed ? 'line-through text-slate-400' : ''}`}>
                        {todo.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700">{todo.category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3 h-3" />
                          {todo.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side amount + priority */}
                  <div className="text-right shrink-0">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                      {todo.amount}
                    </span>
                    <span className={`inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full mt-1 ${
                      todo.completed
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : todo.priorityClass
                    }`}>
                      {todo.completed ? 'COMPLETED' : todo.priority}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
