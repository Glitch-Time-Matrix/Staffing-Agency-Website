import React, { useState } from "react";
import { Cpu, TrendingUp, Crown, Palette, ArrowRight, CheckCircle2, HeartPulse, Scale, Users, DollarSign } from "lucide-react";

interface SpecializationsProps {
  onSelectSpecialization?: (title: string) => void;
}

export interface SectorSpec {
  id: string;
  title: string;
  description: string;
  avgSalary: string;
  vettedTalentCount: string;
  popularRoles: string[];
  icon: any;
}

const EXPANDED_SPECIALIZATIONS: SectorSpec[] = [
  {
    id: "tech-ai",
    title: "Technology & AI Engineering",
    description: "Architectural leaders in Artificial Intelligence, LLM Fine-Tuning, Distributed Infrastructure, Full-Stack Development, and Cloud Security.",
    avgSalary: "$160,000 - $320,000",
    vettedTalentCount: "1,240+ Active Engineers",
    popularRoles: ["Staff AI/ML Architect", "VP of Engineering", "Distributed Systems Engineer", "Principal Security Lead"],
    icon: Cpu
  },
  {
    id: "executive-search",
    title: "Executive & C-Suite Search",
    description: "Retained executive search for CEOs, CTOs, CFOs, and Board Directors for venture-backed scaleups and Fortune 500 enterprises.",
    avgSalary: "$250,000 - $650,000+",
    vettedTalentCount: "380+ Vetted Executives",
    popularRoles: ["Chief Executive Officer", "Chief Technology Officer", "Chief Product Officer", "Managing Director"],
    icon: Crown
  },
  {
    id: "creative-design",
    title: "Creative & Digital Product",
    description: "Design system architects, UX researchers, Creative Directors, and Spatial Computing designers redefining digital experiences.",
    avgSalary: "$130,000 - $240,000",
    vettedTalentCount: "820+ Designers",
    popularRoles: ["VP of Product Design", "Design Systems Lead", "Principal UX Researcher", "Creative Director"],
    icon: Palette
  },
  {
    id: "finance-accounting",
    title: "Finance & Accounting",
    description: "Specialized financial controllers, FP&A directors, M&A specialists, and treasury leaders based on top global financial staffing standards.",
    avgSalary: "$140,000 - $280,000",
    vettedTalentCount: "650+ Finance Leaders",
    popularRoles: ["VP of Finance", "Corporate Controller", "Head of FP&A", "M&A Strategic Director"],
    icon: DollarSign
  },
  {
    id: "healthcare-lifesciences",
    title: "Healthcare & Life Sciences",
    description: "Clinical research directors, Regulatory Affairs leads, and Biotech executives driving innovations in medical technology.",
    avgSalary: "$155,000 - $310,000",
    vettedTalentCount: "410+ Specialists",
    popularRoles: ["VP of Regulatory Affairs", "Clinical Operations Director", "Bioinformatics Lead", "Head of R&D"],
    icon: HeartPulse
  },
  {
    id: "growth-marketing",
    title: "Growth & Brand Marketing",
    description: "Performance marketing heads, CMOs, Brand Strategists, and Product Marketing leads scaling consumer & B2B brands.",
    avgSalary: "$135,000 - $260,000",
    vettedTalentCount: "590+ Marketers",
    popularRoles: ["Chief Marketing Officer", "VP of Growth", "Head of Product Marketing", "Brand Strategy Lead"],
    icon: TrendingUp
  },
  {
    id: "legal-compliance",
    title: "Legal & Corporate Compliance",
    description: "General counsels, Data Privacy officers, and Corporate Governance experts navigating global regulatory frameworks.",
    avgSalary: "$180,000 - $380,000",
    vettedTalentCount: "290+ Legal Counsel",
    popularRoles: ["General Counsel", "Chief Compliance Officer", "Data Privacy Director", "Corporate IP Lead"],
    icon: Scale
  },
  {
    id: "people-hr",
    title: "People Ops & HR Leadership",
    description: "Chief People Officers, Compensation Analysts, and Strategic Recruiters building world-class organizational cultures.",
    avgSalary: "$140,000 - $250,000",
    vettedTalentCount: "480+ HR Leaders",
    popularRoles: ["Chief People Officer", "VP of Talent Acquisition", "Head of Total Rewards", "Director of People Ops"],
    icon: Users
  }
];

export default function Specializations({ onSelectSpecialization }: SpecializationsProps) {
  const [activeId, setActiveId] = useState(EXPANDED_SPECIALIZATIONS[0].id);

  const activeSpec = EXPANDED_SPECIALIZATIONS.find((s) => s.id === activeId) || EXPANDED_SPECIALIZATIONS[0];
  const IconComponent = activeSpec.icon;

  return (
    <section id="specializations" className="py-24 border-b border-zinc-200/80 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-left">
        
        <div className="max-w-3xl mb-16">
          <span className="text-brand-emerald font-semibold text-xs tracking-widest uppercase block mb-3 font-mono">
            8 Specialized Recruitment Divisions
          </span>
          <h2 className="font-serif italic font-normal text-5xl text-zinc-900 tracking-tight mb-4">
            Targeted Industry Sectors
          </h2>
          <p className="text-zinc-600 text-base font-light leading-relaxed">
            Modeled after top global recruitment agencies. Our specialized divisions maintain direct access to confidential passive talent pools across major global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div role="tablist" aria-label="Industry Specializations" className="lg:col-span-5 flex flex-col gap-2.5">
            {EXPANDED_SPECIALIZATIONS.map((spec) => {
              const isSelected = spec.id === activeId;
              const SpecIcon = spec.icon;
              return (
                <button
                  key={spec.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(spec.id)}
                  className={`cosmos-card p-4 rounded-2xl text-left transition-all duration-300 flex items-center gap-3.5 ${
                    isSelected
                      ? "border-brand-emerald/50 bg-white shadow-md ring-1 ring-brand-emerald/20"
                      : "opacity-85 hover:opacity-100 bg-white/80 hover:bg-white"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${isSelected ? "bg-emerald-50 text-brand-emerald border-emerald-200" : "bg-zinc-100 text-zinc-600 border-zinc-200"}`}>
                    <SpecIcon className="size-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-zinc-900 font-semibold text-sm truncate">
                      {spec.title}
                    </h3>
                    <span className="text-zinc-500 font-mono text-[10px]">
                      {spec.vettedTalentCount}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 cosmos-card p-8 rounded-2xl border border-zinc-200/80 text-left relative overflow-hidden bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-50 text-brand-emerald border border-emerald-200">
                <IconComponent className="size-6" />
              </div>
              <div>
                <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider block">Specialization Division</span>
                <h3 className="text-zinc-900 font-serif italic text-2xl font-normal">{activeSpec.title}</h3>
              </div>
            </div>

            <p className="text-zinc-600 text-sm font-light leading-relaxed mb-6">
              {activeSpec.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-1">
                  Average Compensation Band
                </span>
                <span className="text-zinc-900 font-mono font-bold text-base">
                  {activeSpec.avgSalary}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-1">
                  Active Vetted Pool
                </span>
                <span className="text-brand-emerald font-mono font-bold text-base">
                  {activeSpec.vettedTalentCount}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <span className="block text-zinc-600 text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
                High-Demand Placement Roles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSpec.popularRoles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-zinc-700 text-xs font-light p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80">
                    <CheckCircle2 className="size-3.5 text-brand-emerald shrink-0" aria-hidden="true" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectSpecialization?.(activeSpec.title)}
              className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Request {activeSpec.title} Shortlist
              <ArrowRight className="size-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
