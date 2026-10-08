import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t-2 border-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-slate-100">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border-2 border-slate-900 shadow-brutal-sm p-1 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div>
              <span className="font-black text-lg text-slate-900">
                SaveWise <span className="text-blue-600">AI</span>
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                Save First. Spend Guilt-Free.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-black text-slate-700 uppercase tracking-wide">
            <a href="#save-first" className="hover:text-blue-600 transition-colors">Save First</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#ai-coach" className="hover:text-blue-600 transition-colors">AI Coach</a>
            <a href="#market" className="hover:text-blue-600 transition-colors">Gold & Silver (₹)</a>
            <a href="#security" className="hover:text-blue-600 transition-colors">Security</a>
            <a href="/SaveWise-AI.apk" download="SaveWise-AI.apk" className="text-blue-600 hover:underline">Download APK</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="brutal-btn-secondary px-4 py-2 text-xs flex items-center gap-1.5"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} SaveWise AI. Built for disciplined personal wealth creation.</p>
          <p className="text-[11px] text-slate-400">
            Educational market monitoring & budgeting tools. Not SEBI investment advice.
          </p>
        </div>

      </div>
    </footer>
  );
}
