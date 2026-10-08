import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, CheckCircle2 } from 'lucide-react';

const SECURITY_ITEMS = [
  {
    icon: Lock,
    title: '256-Bit SSL/TLS Encryption',
    desc: 'All communications between your device and MongoDB clusters are encrypted with modern cryptographic ciphers.'
  },
  {
    icon: EyeOff,
    title: 'Zero Data Selling • Pure Privacy',
    desc: 'We never sell your financial records, balances, or transactions to advertisers, brokers, or third parties.'
  },
  {
    icon: Server,
    title: 'Isolated Database Tenancy',
    desc: 'Every account is strictly partitioned in isolated clusters with salted and hashed bcrypt credentials.'
  }
];

export default function SecuritySection() {
  return (
    <section id="security" className="w-full py-16 sm:py-24 bg-white border-y-2 border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border-2 border-slate-900 shadow-brutal-sm text-xs font-black uppercase text-emerald-900 mb-3">
            INSTITUTIONAL TRUST
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Security & Privacy Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            Your personal net worth is strictly confidential. SaveWise AI is built with zero-trust principles.
          </p>
        </div>

        {/* 3 Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECURITY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FFFDF7] border-2 border-slate-900 rounded-2xl p-6 shadow-brutal flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border-2 border-slate-900 shadow-brutal-sm flex items-center justify-center text-emerald-900 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-slate-100 flex items-center gap-1.5 text-xs font-black text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
