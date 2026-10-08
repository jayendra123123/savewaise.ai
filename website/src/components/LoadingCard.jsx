import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  RotateCw, 
  Lock, 
  Activity,
  Compass,
  Coins
} from 'lucide-react';

const STAGES = [
  {
    threshold: 22,
    title: "Initializing secure session & 256-bit encryption...",
    subtitle: "Connecting to bank-grade financial security protocols",
    icon: Lock,
    accent: "text-purple-600 bg-purple-50 border-purple-200"
  },
  {
    threshold: 48,
    title: "Synchronizing live commodity & market rates...",
    subtitle: "Fetching dynamic Gold, Silver (INR) & US equity feeds",
    icon: Coins,
    accent: "text-blue-600 bg-blue-50 border-blue-200"
  },
  {
    threshold: 74,
    title: "Calibrating deterministic 'Save First' budget rules...",
    subtitle: "Structuring smart savings partitions and spend thresholds",
    icon: Compass,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200"
  },
  {
    threshold: 95,
    title: "Preparing your personalized financial insights...",
    subtitle: "Generating educational AI wealth strategies & trend analyses",
    icon: Sparkles,
    accent: "text-purple-600 bg-purple-50 border-purple-200"
  },
  {
    threshold: 100,
    title: "Welcome to SaveWise AI • Ready to Launch",
    subtitle: "Your intelligent financial cockpit is synchronized and ready",
    icon: CheckCircle2,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200"
  }
];

export default function LoadingCard({ progress, setProgress, isComplete, onComplete }) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    for (let i = 0; i < STAGES.length; i++) {
      if (progress <= STAGES[i].threshold) {
        index = i;
        break;
      }
      if (i === STAGES.length - 1) {
        index = STAGES.length - 1;
      }
    }
    setCurrentStageIndex(index);
  }, [progress]);

  const activeStage = STAGES[currentStageIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Ambient Multi-Color Halo Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-emerald-400/25 rounded-3xl blur-2xl opacity-75 animate-pulse-ring -z-10" />

      {/* Main Glassmorphic Fintech Card */}
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl border border-slate-200/90 shadow-fintech-lg p-6 sm:p-10 text-center overflow-hidden">
        
        {/* Subtle decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green" />

        {/* 1. Logo Section with Rotating Gradient Ring */}
        <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
          {/* Rotating iridescent border ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-purple via-brand-blue to-brand-green animate-spin-slow opacity-80 p-0.5 shadow-lg">
            <div className="w-full h-full bg-white rounded-2xl" />
          </div>

          {/* Soft outer glow */}
          <div className="absolute -inset-2 bg-purple-500/15 rounded-3xl blur-lg" />

          {/* The Pure Concept 1 Logo Image */}
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl p-2.5 shadow-md border border-slate-100 flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105">
            <img 
              src="/logo.png" 
              alt="SaveWise AI Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Floating mini AI spark badge */}
          <div className="absolute -bottom-1 -right-1 z-20 bg-gradient-to-br from-brand-purple to-indigo-700 text-white p-1.5 rounded-full shadow-md border-2 border-white">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 2. Brand Titles & Tagline */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5">
            SaveWise <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-sm mx-auto">
            Save First. Spend Smarter. Reach Your Goals.
          </p>
        </div>

        {/* 3. Branded Trust Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200/80 shadow-2xs">
            <Sparkles className="w-3 h-3 text-purple-600" />
            <span>AI-POWERED</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>FINTECH GRADE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
            <TrendingUp className="w-3 h-3 text-blue-600" />
            <span>LIVE COMMODITIES</span>
          </div>
        </div>

        {/* 4. Smooth Modern Loading Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <div className="flex items-center gap-1.5 text-slate-700">
              <Activity className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
              <span>{isComplete ? "System Synchronized" : "Preparing Workspace"}</span>
            </div>
            <span className="font-mono text-sm text-slate-900 font-extrabold">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress track */}
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80 shadow-inner">
            <div 
              className="h-full rounded-full shimmer-gradient animate-shimmer transition-all duration-300 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 5. Dynamic Status Message Callout */}
        <div className="min-h-[76px] flex flex-col items-center justify-center bg-slate-50/80 border border-slate-200/60 rounded-2xl p-4 mb-6 transition-all duration-300">
          <div className="flex items-center gap-2 mb-1">
            <div className={`p-1 rounded-md border ${activeStage.accent}`}>
              <ActiveIcon className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 text-center">
              {activeStage.title}
            </p>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 text-center font-normal">
            {activeStage.subtitle}
          </p>
        </div>

        {/* 6. Step Milestones Visualizer */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-6">
          {STAGES.slice(0, 4).map((stage, idx) => {
            const isDone = progress >= stage.threshold;
            const isCurrent = currentStageIndex === idx && !isComplete;

            return (
              <div 
                key={idx}
                className={`py-2 px-1 rounded-xl text-center border transition-all duration-300 ${
                  isDone 
                    ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-800' 
                    : isCurrent
                    ? 'bg-purple-50/80 border-purple-300 text-purple-900 ring-2 ring-purple-400/20'
                    : 'bg-white/60 border-slate-200/60 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-center mb-1">
                  {isDone ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <span className={`w-3.5 h-3.5 rounded-full text-[9px] font-bold flex items-center justify-center ${isCurrent ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                      {idx + 1}
                    </span>
                  )}
                </div>
                <p className="text-[10px] font-bold truncate">
                  {idx === 0 ? "Security" : idx === 1 ? "Market" : idx === 2 ? "Budget" : "AI Intel"}
                </p>
              </div>
            );
          })}
        </div>

        {/* 7. Action Button when Complete or Skip option */}
        <div className="pt-2">
          {isComplete ? (
            <div className="space-y-3">
              <button
                onClick={onComplete}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-blue hover:opacity-95 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-fintech hover:shadow-glow-purple flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Launch SaveWise AI Dashboard</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setProgress(0)}
                className="text-xs font-semibold text-slate-500 hover:text-purple-600 transition-colors flex items-center justify-center gap-1.5 mx-auto"
              >
                <RotateCw className="w-3 h-3" />
                <span>Replay loading sequence</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Real-time loading</span>
              </span>
              <button
                onClick={() => setProgress(100)}
                className="text-purple-600 hover:text-purple-700 font-bold hover:underline transition-all cursor-pointer"
              >
                Fast-forward →
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
