import React from "react";
import { UserCheck, Clock, RefreshCw, ShieldCheck, ArrowRight } from "lucide-react";

interface StaffingModelsProps {
  onSelectModel?: (modelTitle: string) => void;
}

export default function StaffingModels({ onSelectModel }: StaffingModelsProps) {
  const MODELS = [
    {
      id: "direct-hire",
      title: "Executive Direct Search",
      subtitle: "Retained & Contingency Placements",
      icon: UserCheck,
      badge: "Full-Time Leadership",
      description: "Comprehensive executive search for VPs, C-suite, and specialized technical leads. Includes full 90-day retention warranty and deep background vetting.",
      features: ["98.4% Retention Warranty", "Confidential Sourcing", "Global Executive Network"],
      accentColor: "border-emerald-500/30 text-emerald-600 bg-emerald-50/50"
    },
    {
      id: "contract-staffing",
      title: "Contract & Temporary Staffing",
      subtitle: "Agile Project-Based Talent",
      icon: Clock,
      badge: "Immediate Turnaround",
      description: "Scale specialized engineering, design, and operational talent for critical project sprints within 24 to 48 hours.",
      features: ["24-48 hr Talent Turnaround", "Flexible Billing Terms", "Compliant Payroll & Tax Handling"],
      accentColor: "border-blue-500/30 text-blue-600 bg-blue-50/50"
    },
    {
      id: "contract-to-hire",
      title: "Contract-to-Hire",
      subtitle: "Risk-Free Evaluation Period",
      icon: RefreshCw,
      badge: "Trial-Before-Hire",
      description: "Evaluate candidate cultural fit, technical execution, and team synergy over a 3-to-6 month trial period before extending direct offers.",
      features: ["Zero Placement Risk", "Seamless Conversion Option", "Continuous Performance Audits"],
      accentColor: "border-purple-500/30 text-purple-600 bg-purple-50/50"
    },
    {
      id: "managed-services",
      title: "Managed Talent Solutions (RPO)",
      subtitle: "Recruitment Process Outsourcing",
      icon: ShieldCheck,
      badge: "Enterprise Scale",
      description: "Dedicated embedded talent acquisition team to manage end-to-end sourcing, interview coordination, and offer negotiation for rapid scaleups.",
      features: ["Embedded Talent Lead", "Reduces Time-to-Hire by 45%", "Custom ATS & Analytics"],
      accentColor: "border-amber-500/30 text-amber-600 bg-amber-50/50"
    }
  ];

  return (
    <section id="staffing-models" className="py-24 border-b border-zinc-200/80 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-left">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-brand-emerald font-semibold text-xs tracking-widest uppercase block mb-2 font-mono">
              Top Tier Agency Engagement Models
            </span>
            <h2 className="font-serif italic font-normal text-5xl text-zinc-900 tracking-tight">
              Flexible Staffing Solutions
            </h2>
            <p className="text-zinc-500 text-sm font-light mt-2 max-w-xl">
              Engineered according to global recruitment benchmarks (Robert Half, Adecco, Korn Ferry) to match your organizational hiring velocity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                className="cosmos-card p-6 rounded-2xl flex flex-col justify-between group hover:border-zinc-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl border ${model.accentColor}`}>
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-zinc-900 font-semibold text-lg mb-1 group-hover:text-brand-emerald transition-colors">
                    {model.title}
                  </h3>
                  <span className="block text-zinc-500 text-xs font-mono mb-3">
                    {model.subtitle}
                  </span>

                  <p className="text-zinc-600 text-xs font-light leading-relaxed mb-6">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-zinc-600 font-light">
                        <span className="size-1.5 rounded-full bg-brand-emerald shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onSelectModel?.(model.title)}
                    className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-800 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    Select Engagement <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
