import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How does the "Save First" spending rule work in practice?',
    a: 'When you set up your budget in SaveWise AI, you designate your monthly income and a savings target (e.g., 25% or ₹15,000). Rather than tracking expenses after the fact and hoping money remains, the app locks your savings target first and calculates your exact permissible Safe-to-Spend balance. If your spending approaches this ceiling, you receive proactive alerts.'
  },
  {
    q: 'Does SaveWise AI execute automatic market trades or buy gold on my behalf?',
    a: 'No. SaveWise AI is strictly an educational monitoring, budgeting, and intelligence platform. It tracks real market feeds and alerts you via email when prices reach your configured targets, but it will never automatically buy, sell, or touch your financial assets without your personal action.'
  },
  {
    q: 'Where do the Gold and Silver spot prices come from, and are they in Indian Rupees (₹)?',
    a: 'Gold and Silver spot prices are dynamically retrieved via direct integration with live commodity feeds from api.gold-api.com and quoted in Indian Rupees (₹/INR) per Troy Ounce, with automatic conversion to 24K retail and 22K jewelry gram benchmarks. Zero mock or static prices are used.'
  },
  {
    q: 'How do the price alerts and email notifications work?',
    a: 'You can configure an alert for Gold, Silver, or popular equities with your specific intention: "Buy when price falls (Buy Dip)" or "Monitor investment & notify when price rises". When real-time spot prices cross your target, SaveWise AI sends a dedicated email dispatch via Nodemailer + SMTP with educational AI trend analysis.'
  },
  {
    q: 'Is my personal financial information kept private and secure?',
    a: 'Yes. All data is protected with 256-bit SSL encryption. SaveWise AI never sells user data or transactions to advertising networks or credit agencies. Your financial cockpit is completely private.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200 mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Questions & Answers
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2 font-normal">
            Everything you need to know about the SaveWise AI methodology and technology.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:text-brand-purple transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-purple' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 border-t border-slate-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
