import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Save First', href: '#save-first' },
    { name: 'Features', href: '#features' },
    { name: 'AI Coach', href: '#ai-coach' },
    { name: 'Gold & Silver (₹)', href: '#market' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <div className="sticky top-3 sm:top-4 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6">
      <motion.header
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className={`w-full transition-all duration-300 rounded-2xl sm:rounded-3xl border-2 border-slate-900 shadow-brutal ${
          scrolled
            ? 'bg-[#FFFDF7]/90 backdrop-blur-2xl py-2.5 sm:py-3 px-4 sm:px-6'
            : 'bg-white/80 backdrop-blur-xl py-3 sm:py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border-2 border-slate-900 shadow-brutal-sm p-1 flex items-center justify-center group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all">
              <img 
                src="/logo.png" 
                alt="SaveWise AI Logo" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900">
                SaveWise <span className="text-blue-600">AI</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-emerald-100 text-emerald-900 border-2 border-slate-900 shadow-brutal-sm">
                v1.0 Live
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 bg-white/90 border-2 border-slate-900 rounded-xl px-4 py-1.5 shadow-brutal-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-wide text-slate-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Download CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/SaveWise-AI.apk"
              download="SaveWise-AI.apk"
              className="brutal-btn-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download APK</span>
              <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded font-mono">86MB</span>
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
              className="p-1.5 rounded-lg bg-white border-2 border-slate-900 shadow-brutal-sm text-slate-900"
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
              className="sm:hidden mt-3 pt-3 border-t-2 border-slate-900 space-y-2.5 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-black text-slate-900 hover:text-blue-600 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/SaveWise-AI.apk"
                download="SaveWise-AI.apk"
                onClick={() => setMobileMenuOpen(false)}
                className="brutal-btn-primary w-full py-2.5 text-center text-xs flex items-center justify-center gap-2 mt-1"
              >
                <Download className="w-4 h-4" />
                <span>Download SaveWise AI (Android APK)</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
