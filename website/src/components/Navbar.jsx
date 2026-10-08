import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Save First', href: '#save-first' },
    { name: 'Features', href: '#features' },
    { name: 'AI Coach', href: '#ai-coach' },
    { name: 'Gold & Silver (₹)', href: '#market' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAF8F5]/95 backdrop-blur-xl border-b-2 border-slate-900 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-900 shadow-brutal-sm p-1 flex items-center justify-center group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all">
            <img 
              src="/logo.png" 
              alt="SaveWise AI Logo" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900">
              SaveWise <span className="text-blue-600">AI</span>
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-100 text-emerald-900 border-2 border-slate-900 shadow-brutal-sm">
              v1.0 Live
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 bg-white border-2 border-slate-900 rounded-xl px-6 py-2 shadow-brutal-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-black uppercase tracking-wide text-slate-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Download CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/SaveWise-AI.apk"
            download="SaveWise-AI.apk"
            className="brutal-btn-primary px-5 py-2.5 text-xs lg:text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download APK</span>
            <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">87MB</span>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/SaveWise-AI.apk"
            download="SaveWise-AI.apk"
            className="brutal-btn-primary px-3 py-1.5 text-xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-white" />
            <span>APK</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border-2 border-slate-900 shadow-brutal-sm text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white border-b-2 border-slate-900 px-5 pt-2 pb-5 space-y-3 overflow-hidden shadow-brutal"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-black text-slate-900 hover:text-blue-600 py-1.5 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/SaveWise-AI.apk"
              download="SaveWise-AI.apk"
              onClick={() => setMobileMenuOpen(false)}
              className="brutal-btn-primary w-full py-3 text-center text-xs flex items-center justify-center gap-2 mt-2"
            >
              <Download className="w-4 h-4" />
              <span>Download SaveWise AI (Android APK)</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
