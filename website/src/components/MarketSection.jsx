import React from 'react';
import { 
  Coins, 
  TrendingDown, 
  TrendingUp, 
  Bell, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Sliders,
  Mail
} from 'lucide-react';

export default function MarketSection() {
  return (
    <section id="market" className="w-full py-16 sm:py-24 bg-white border-y-2 border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border-2 border-slate-900 shadow-brutal-sm text-xs font-black uppercase text-amber-900 mb-3">
            SMART COMMODITY ALERTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Custom Gold & Silver Price Alerts (₹ INR)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            Set your personalized low (dip) and high (peak) targets. SaveWise AI monitors precious metals feeds 24/7 and alerts you the moment your threshold is hit.
          </p>
        </div>

        {/* 2 Main Alert Cards (Low / High Trigger Explanation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Low Price Dip Alert */}
          <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-6 sm:p-7 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border-2 border-slate-900 shadow-brutal-sm flex items-center justify-center text-amber-900">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border-2 border-slate-900 shadow-brutal-sm">
                  Trigger: Price ≤ Your Dip Target
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-2">
                1. Low Price / Buy-on-Dip Alert
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Configure your target discount threshold for Gold or Silver in Indian Rupees (₹). Whenever live market rates drop into your buying zone, SaveWise AI alerts you immediately.
              </p>

              <div className="bg-white border-2 border-slate-900 rounded-xl p-3.5 shadow-brutal-sm space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-slate-900">
                  <span>In-App Alert Strategy:</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    BUY_ON_DIP
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  "Alert: Gold spot dropped below your ₹3,95,000 threshold. Ideal Dollar-Cost-Averaging entry point."
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-slate-100 flex items-center gap-2 text-xs font-black text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Never miss an optimal accumulation dip</span>
            </div>
          </div>

          {/* Card 2: High Price Target Alert */}
          <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-3xl p-6 sm:p-7 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 border-2 border-slate-900 shadow-brutal-sm flex items-center justify-center text-blue-900">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 border-2 border-slate-900 shadow-brutal-sm">
                  Trigger: Price ≥ Your High Target
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-2">
                2. High Price / Milestone Peak Alert
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Set your milestone valuation in Indian Rupees (₹). When precious metals surge to your target high, receive an automated dispatch to review or rebalance your portfolio.
              </p>

              <div className="bg-white border-2 border-slate-900 rounded-xl p-3.5 shadow-brutal-sm space-y-2">
                <div className="flex justify-between items-center text-xs font-black text-slate-900">
                  <span>In-App Alert Strategy:</span>
                  <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    TARGET_REACHED
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  "Alert: Silver spot surged past your ₹5,800 milestone. Vault growth target achieved."
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-slate-100 flex items-center gap-2 text-xs font-black text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Track portfolio milestones effortlessly</span>
            </div>
          </div>

        </div>

        {/* AI Educational Context Strip */}
        <div className="bg-[#FFFDF7] border-2 border-slate-900 rounded-2xl p-5 sm:p-6 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border-2 border-slate-900 shadow-brutal-sm flex items-center justify-center text-purple-900 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900">
                AI Trend Analysis Included With Every Notification
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Every high/low alert dispatch includes an AI-generated educational breakdown explaining why the price moved (US Dollar index, interest rates, macro demand) without any broker bias.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-black uppercase bg-yellow-200 text-slate-900 px-3 py-1.5 rounded-lg border-2 border-slate-900 shadow-brutal-sm inline-block">
              100% Unbiased
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
