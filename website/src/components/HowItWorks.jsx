import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sliders, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  PiggyBank,
  TrendingUp,
  Target
} from 'lucide-react';
import { SectionHeader, Badge } from './ui/Primitives.jsx';

const STEPS = [
  {
    step: '01',
    icon: Sliders,
    title: 'Establish Your Core Rule',
    desc: 'Enter your monthly take-home salary and lock your chosen target savings rate (e.g., 25% or ₹15,000). SaveWise AI partitions your capital immediately.',
    accent: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  {
    step: '02',
    icon: ShieldCheck,
    title: 'Spend Freely Within Guardrails',
    desc: 'Log expenses in under 15 seconds. Watch your dynamic Safe-to-Spend meter adapt in real-time, giving you total freedom to enjoy life without wondering if you can afford it.',
    accent: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Compound with AI & Market Alerts',
    desc: 'Receive automated notifications when Gold/Silver dips below your buy target, consult your AI Coach before major buys, and hit milestone goals months ahead.',
    accent: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeader
          badge="SEAMLESS ONBOARDING"
          badgeVariant="slate"
          title="How SaveWise AI Works in"
          highlight="3 Simple Steps"
          subtitle="No complex accounting degrees required. Start securing your financial future in less than two minutes."
        />

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {STEPS.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-2xs hover:shadow-fintech transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Step watermarked number */}
                <div className="absolute top-4 right-6 text-5xl font-black text-slate-100 select-none group-hover:text-purple-50 transition-colors">
                  {st.step}
                </div>

                <div>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${st.iconBg} mb-6 shadow-inner`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-brand-purple group-hover:text-indigo-800 transition-colors">
                  <span>Step {st.step} Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
