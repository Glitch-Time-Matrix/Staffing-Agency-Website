import React from "react";
import { ArrowUpRight, CheckCircle2, Bookmark, Star, MapPin, Grid, Phone } from "lucide-react";
import { STATISTICS } from "../data";

export interface CandidateCardData {
  id: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  skills: string[];
  avatar: string;
}

const FEATURED_CANDIDATES: CandidateCardData[] = [
  {
    id: "cand-1",
    name: "Elena Rostova",
    role: "VP of Product Design",
    experience: "11 yrs exp",
    location: "New York, NY",
    skills: ["Design Systems", "Product Strategy", "Figma", "Design Ops"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "cand-2",
    name: "Marcus Vance",
    role: "Staff AI/ML Architect",
    experience: "9 yrs exp",
    location: "New York, NY",
    skills: ["PyTorch", "LLM Fine-tuning", "Distributed Systems", "CUDA"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "cand-3",
    name: "Sophia Chen",
    role: "Head of Talent Acquisition",
    experience: "8 yrs exp",
    location: "Elmhurst, NY",
    skills: ["Executive Search", "Compensation Modeling", "Scaling Tech Teams"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
];

interface HeroProps {
  onExploreClick: () => void;
  savedCandidateIds?: string[];
  onToggleSaveCandidate?: (cand: CandidateCardData) => void;
}

export default function Hero({ 
  onExploreClick,
  savedCandidateIds = [],
  onToggleSaveCandidate
}: HeroProps) {
  return (
    <section className="relative w-full max-w-full pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 px-4 sm:px-6 grid-bg border-b border-zinc-200/80 overflow-hidden bg-[#fafafa]">
      <div className="absolute top-[10%] left-[5%] sm:left-[15%] w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] rounded-full bg-emerald-500/5 blur-[100px] sm:blur-[140px] pointer-events-none pulse-glow-bg"></div>
      <div className="absolute bottom-[20%] right-[5%] sm:right-[10%] w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] rounded-full bg-blue-500/5 blur-[100px] sm:blur-[150px] pointer-events-none pulse-glow-bg"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10 w-full max-w-full">
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full max-w-full">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-[10px] sm:text-xs font-mono font-medium text-zinc-700 mb-6 shadow-xs max-w-full flex-wrap">
            <span className="flex size-2 rounded-full bg-brand-emerald animate-pulse shrink-0"></span>
            <span className="leading-tight">RUPA AGENCY · SERVING NYC FOR 15+ YEARS</span>
          </div>

          <h1 className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-[64px] text-zinc-900 tracking-tight leading-[1.08] mb-5 break-words max-w-full">
            Your most reliable partner in <br className="hidden sm:inline"/>
            <span className="not-italic font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600">
              NYC hiring & job search.
            </span>
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Rupa Employment Agency has been serving the residents and enterprises of New York City for over 15 years. Finding a job or top-notch talent can drain your energy—our Elmhurst team is your trusted partner.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-zinc-700 mb-8 sm:mb-10 max-w-full">
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs max-w-full">
              <MapPin className="size-3.5 text-brand-emerald shrink-0" aria-hidden="true" />
              <span className="truncate">75-32 Broadway, Elmhurst, NY</span>
            </span>
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs">
              <CheckCircle2 className="size-3.5 text-brand-slate shrink-0" aria-hidden="true" />
              15 Yrs NYC Service
            </span>
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs">
              <CheckCircle2 className="size-3.5 text-amber-600 shrink-0" aria-hidden="true" />
              90-Day Warranty
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-6">
            <a 
              href="#active-roles"
              className="group flex flex-col justify-between p-5 rounded-2xl border cursor-pointer text-left transition-all duration-300 bg-white border-brand-emerald/60 shadow-lg shadow-emerald-500/5 ring-1 ring-brand-emerald/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-brand-emerald border border-emerald-100">
                  <Grid className="size-5" />
                </div>
                <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </div>
              <div>
                <h3 className="text-zinc-900 font-semibold text-sm mb-1">
                  Browse Active NYC Placements
                </h3>
                <p className="text-zinc-500 text-xs font-light">
                  View open positions in technology, executive search, design, and finance across New York.
                </p>
              </div>
            </a>

            <a 
              href="#about-rupa"
              className="group flex flex-col justify-between p-5 rounded-2xl border cursor-pointer text-left transition-all duration-300 bg-white/80 border-zinc-200/80 hover:border-zinc-400 hover:bg-white"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 text-brand-slate border border-blue-100">
                  <Phone className="size-5" />
                </div>
                <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </div>
              <div>
                <h3 className="text-zinc-900 font-semibold text-sm mb-1">
                  Contact Elmhurst Office
                </h3>
                <p className="text-zinc-500 text-xs font-light">
                  Visit our primary location at 75-32 Broadway, Elmhurst or contact our placement advisors.
                </p>
              </div>
            </a>
          </div>

        </div>

        <div className="lg:col-span-5 relative w-full flex flex-col gap-4">
          <div className="flex justify-between items-center px-1">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-1.5 font-medium">
              <Star className="size-3 text-amber-500 fill-amber-500" />
              Rupa Curated Talent Directory
            </span>
            <span className="text-[11px] font-mono text-zinc-500">NYC Pre-Vetted</span>
          </div>

          <div className="space-y-3">
            {FEATURED_CANDIDATES.map((cand) => {
              const isSaved = savedCandidateIds.includes(cand.id);
              return (
                <div
                  key={cand.id}
                  className="cosmos-card p-4 rounded-2xl flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={cand.avatar}
                      alt={cand.name}
                      className="size-12 rounded-xl object-cover border border-zinc-200 group-hover:border-zinc-400 transition-colors shadow-xs shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-zinc-900 font-semibold text-sm group-hover:text-brand-emerald transition-colors">
                          {cand.name}
                        </h4>
                      </div>
                      <p className="text-zinc-500 text-xs font-light">{cand.role} · <span className="font-mono">{cand.location}</span></p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {cand.skills.slice(0, 2).map((sk, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onToggleSaveCandidate && onToggleSaveCandidate(cand)}
                    type="button"
                    className={`p-2.5 rounded-xl border transition-all ${
                      isSaved
                        ? "bg-emerald-50 border-brand-emerald text-brand-emerald"
                        : "bg-zinc-50 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400"
                    }`}
                    title={isSaved ? "Saved to collection" : "Save to Collection"}
                  >
                    <Bookmark className="size-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 text-center shadow-xs">
            <p className="text-xs text-zinc-600 font-light">
              Serving Elmhurst & Greater NYC residents with trusted placements for 15+ years.
            </p>
          </div>
        </div>

      </div>

      <div id="stats" className="max-w-7xl mx-auto mt-20 pt-12 border-t border-zinc-200/80 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATISTICS.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-start text-left">
            <span className="font-serif italic text-3xl sm:text-4xl text-zinc-900 font-normal leading-none mb-2">
              {stat.value}
            </span>
            <span className="text-brand-emerald font-semibold text-xs tracking-wider uppercase mb-1 font-mono">
              {stat.label}
            </span>
            <span className="text-zinc-500 text-xs font-light max-w-[180px]">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
