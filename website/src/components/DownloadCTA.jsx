import React from 'react';
import { 
  Download, 
  Sparkles, 
  ShieldCheck, 
  QrCode, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="w-full py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 sm:p-14 lg:p-16 text-white shadow-2xl overflow-hidden border border-slate-800">
          
          {/* Ambient Lighting Orbs inside banner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant Android Installation Available</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Take Control of Your Financial Destiny Today.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join savers who have eliminated month-end anxiety with the deterministic Save First rule and real-time AI commodity intelligence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="/SaveWise-AI.apk"
                  download="SaveWise-AI.apk"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:opacity-95 text-slate-950 font-black text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-98 group"
                >
                  <Download className="w-5 h-5 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download SaveWise AI (APK)</span>
                </a>

                <a
                  href="#save-first"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>How It Works</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </a>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Free to download & use
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Direct Android installation
                </span>
              </div>
            </div>

            {/* Right Card / Logo Badge Showcase (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 text-center w-full max-w-xs shadow-xl">
                <div className="w-20 h-20 bg-white rounded-2xl p-2 mx-auto mb-4 shadow-md border border-white/30 flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-base font-extrabold text-white mb-1">SaveWise AI Mobile</h4>
                <p className="text-xs text-slate-300 mb-4">Version 1.0 • Android Release</p>
                
                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/10 text-[11px] text-emerald-300 font-mono">
                  SaveWise-AI.apk • 86.4 MB
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
