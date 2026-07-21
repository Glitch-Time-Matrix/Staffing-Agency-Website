import React, { useState } from "react";
import { PROCESS_STEPS_EMPLOYER, PROCESS_STEPS_CANDIDATE } from "../data";
import { Building2, Sparkles, CheckCircle2 } from "lucide-react";

interface ProcessWorkflowProps {
  onActionClick: () => void;
}

export default function ProcessWorkflow({ onActionClick }: ProcessWorkflowProps) {
  const [activeTab, setActiveTab] = useState<"employer" | "candidate">("employer");
  const steps = activeTab === "employer" ? PROCESS_STEPS_EMPLOYER : PROCESS_STEPS_CANDIDATE;

  return (
    <section className="py-24 border-b border-zinc-200/80 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-left">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-emerald font-semibold text-xs tracking-widest uppercase block mb-3 font-mono">
              The Rupa Agency Placement Protocol
            </span>
            <h2 className="font-serif italic font-normal text-5xl text-zinc-900 tracking-tight">
              Streamlined Recruitment Precision
            </h2>
            <p className="text-zinc-600 text-sm font-light mt-2">
              Combining specialized executive search protocols with dedicated placement matching.
            </p>
          </div>

          <div role="tablist" aria-label="Workflow Perspective" className="flex items-center p-1 rounded-full bg-white border border-zinc-200 shrink-0 shadow-xs">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "employer"}
              onClick={() => setActiveTab("employer")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 ${
                activeTab === "employer"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Building2 className="size-3.5 text-brand-slate" aria-hidden="true" />
              For Employers
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "candidate"}
              onClick={() => setActiveTab("candidate")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 ${
                activeTab === "candidate"
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Sparkles className="size-3.5 text-brand-emerald" aria-hidden="true" />
              For Candidates
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div 
              key={idx}
              className="cosmos-card p-6 rounded-2xl border border-zinc-200/80 hover:border-zinc-300 transition-all flex flex-col justify-between text-left group bg-white shadow-xs"
            >
              <div>
                <span className="font-serif italic text-3xl font-semibold text-brand-emerald block mb-4">
                  {item.step}
                </span>
                <h3 className="text-zinc-900 font-semibold text-base mb-2 group-hover:text-brand-emerald transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-xs font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-zinc-500 text-[11px] font-mono">
                <CheckCircle2 className="size-3.5 text-brand-emerald" aria-hidden="true" />
                <span>Phase 0{idx + 1} Protocol</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white border border-zinc-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="text-zinc-900 font-semibold text-sm">Ready to initiate the protocol?</h4>
            <p className="text-zinc-500 text-xs font-light mt-0.5">
              {activeTab === "employer" 
                ? "Generate candidate specifications or speak with our search advisors." 
                : "Align your resume with active placements or review salary benchmarks."}
            </p>
          </div>
          <button
            type="button"
            onClick={onActionClick}
            className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-mono font-semibold hover:bg-zinc-800 transition-all shrink-0"
          >
            {activeTab === "employer" ? "Architect Talent Pipeline" : "Align My CV Now"}
          </button>
        </div>

      </div>
    </section>
  );
}
