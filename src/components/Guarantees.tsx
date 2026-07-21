import React, { useState } from "react";
import { GUARANTEES } from "../data";
import { ShieldCheck, Clock, Lock, Award } from "lucide-react";

export default function Guarantees() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="size-6 text-brand-emerald" aria-hidden="true" />;
      case 1:
        return <Clock className="size-6 text-brand-slate" aria-hidden="true" />;
      case 2:
        return <Lock className="size-6 text-purple-600" aria-hidden="true" />;
      case 3:
        return <Award className="size-6 text-amber-600" aria-hidden="true" />;
      default:
        return <ShieldCheck className="size-6 text-brand-emerald" aria-hidden="true" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 border-b border-zinc-200/80 bg-[#fafafa] relative w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-left w-full max-w-full">
        
        <div className="max-w-2xl mb-16">
          <span className="text-brand-emerald font-semibold text-xs tracking-widest uppercase block mb-3 font-mono">
            Placement Assurance Terms
          </span>
          <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-zinc-900 tracking-tight">
            Built on risk reversal & speed.
          </h2>
          <p className="text-zinc-600 text-sm font-light mt-2">
            Why leading enterprises and specialized talent place their trust in Rupa Employment Agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((item, idx) => (
            <div 
              key={idx}
              className="cosmos-card p-6 rounded-2xl border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between text-left group bg-white shadow-xs"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    {getIcon(idx)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 font-mono text-[10px] font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-zinc-900 font-semibold text-base mb-2 group-hover:text-brand-emerald transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-xs font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-medium">
                ✓ Guaranteed Policy
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
