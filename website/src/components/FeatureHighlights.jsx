import React from 'react';
import { 
  PiggyBank, 
  Coins, 
  BrainCircuit, 
  MailCheck, 
  CheckCircle 
} from 'lucide-react';

export default function FeatureHighlights() {
  const features = [
    {
      icon: PiggyBank,
      badge: "CORE ENGINE",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Save First Spending Architecture",
      desc: "Unlike traditional retroactive expense apps, SaveWise locks your savings target the moment income enters, calculating your exact permissible spend safely.",
      accent: "hover:border-emerald-300 group-hover:text-emerald-600"
    },
    {
      icon: Coins,
      badge: "REAL MARKET DATA",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      title: "Gold & Silver INR Monitoring",
      desc: "Live spot rates fetched directly from real-time market APIs in Indian Rupees (₹/INR). Configurable Buy-on-Dip and Investment Growth email alerts.",
      accent: "hover:border-blue-300 group-hover:text-blue-600"
    },
    {
      icon: BrainCircuit,
      badge: "INTELLIGENT INSIGHTS",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      title: "Educational AI Market Analysis",
      desc: "Instant AI trend assessments explaining commodity movements, macroeconomic drivers, and educational strategies without financial bias.",
      accent: "hover:border-purple-300 group-hover:text-purple-600"
    }
  ];

  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/80 mb-3">
          FINTECH CAPABILITIES
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Engineered for Wealth Clarity & Precision
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          SaveWise AI bridges institutional financial discipline with real-time AI market awareness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div 
              key={idx}
              className={`group bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-fintech transition-all duration-300 hover:-translate-y-1 ${feat.accent}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${feat.badgeColor}`}>
                  {feat.badge}
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900 mb-2 group-hover:text-slate-900">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Trust & Spec Strip */}
      <div className="mt-10 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-600">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Real-time Gold & Silver Spot Feeds</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-purple-600" />
          <span>SaveWise AI Trend Intelligence</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-blue-600" />
          <span>Nodemailer + SMTP Instant Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-slate-700" />
          <span>Zero Mock Data • Production Ready</span>
        </div>
      </div>
    </section>
  );
}
