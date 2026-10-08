import React from 'react';
import { Download, Sparkles, ShieldCheck, Smartphone, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="download" className="w-full py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Banner Box */}
        <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-8 sm:p-12 shadow-brutal-lg">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border-2 border-slate-900 shadow-brutal-sm text-xs font-black uppercase text-blue-900">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Release Ready</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Start Saving First Today.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Download the official Android APK and start locking your monthly savings with real-time AI guidance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/SaveWise-AI.apk"
                download="SaveWise-AI.apk"
                className="w-full sm:w-auto brutal-btn-primary px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2.5"
              >
                <Download className="w-5 h-5" />
                <span>Download Android APK (86 MB)</span>
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto brutal-btn-secondary px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <span>Review Features</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Spec strip */}
            <div className="pt-4 border-t-2 border-slate-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-600">
              <span>Android 9.0+</span>
              <span>•</span>
              <span>SHA-256 Verified</span>
              <span>•</span>
              <span>Free Production Build</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
