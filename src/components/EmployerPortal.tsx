import React, { useState } from "react";
import { Building2, DollarSign, Users, ChevronRight } from "lucide-react";
import { EmployerSpec } from "../types";

export default function EmployerPortal() {
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("11-50 employees");
  const [targetHireText, setTargetHireText] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [spec, setSpec] = useState<EmployerSpec | null>(null);

  const SAMPLES = [
    {
      title: "Interactive UI Lead",
      company: "Cosmos Design Studio",
      text: "We need a principal design-focused engineer to craft custom layouts, elegant typography grids, and rich responsive interactive canvases."
    },
    {
      title: "Quantitative Dev",
      company: "Aether Capitals",
      text: "We require an expert with deep systems knowledge of Linux containers, Node server-side proxies, custom bundlers like esbuild, and scalable microservices."
    },
    {
      title: "Cultural Creative Lead",
      company: "Loom Lifestyle",
      text: "Looking for an editorial lead to manage high-end lifestyle campaigns, photoshoots in cultural hubs like Paris, and social-first media curation."
    }
  ];

  const loadSample = (sample: typeof SAMPLES[0]) => {
    setCompanyName(sample.company);
    setTargetHireText(sample.text);
  };

  const handleGeneratePipeline = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetHireText.trim()) {
      setError("Please describe the kind of talent you are looking to hire.");
      return;
    }

    setLoading(true);
    setError(null);
    setSpec(null);

    try {
      const response = await fetch("/api/employer-pipeline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, companySize, targetHireText })
      });

      if (!response.ok) {
        throw new Error("Unable to execute talent specification pipeline.");
      }

      const data = await response.json();
      setSpec(data);
    } catch (err: any) {
      console.error(err);
      setError("Talent Spec Engine failed. Please ensure environment variables are configured and try again.");
    } fontally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 text-left shadow-xs">
            <h3 className="text-zinc-900 font-semibold text-lg mb-2 flex items-center gap-2">
              <Building2 className="size-5 text-brand-slate" />
              Talent Pipeline Architect
            </h3>
            <p className="text-zinc-500 text-xs font-light mb-6">
              Describe your target profile. Our recruitment engine will design a targeted sourcing spec, compensation model, and screening framework.
            </p>

            <div className="mb-6">
              <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-2 font-medium">
                Sourcing Spec Templates
              </span>
              <div className="flex flex-wrap gap-2">
                {SAMPLES.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => loadSample(sample)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-[11px] font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100 transition-all"
                  >
                    {sample.title}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleGeneratePipeline} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="employer-company-name" className="block text-zinc-700 text-xs font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    id="employer-company-name"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Stripe, Linear"
                    className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-brand-slate focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="employer-company-size" className="block text-zinc-700 text-xs font-medium mb-2">
                    Company Scale
                  </label>
                  <select
                    id="employer-company-size"
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:border-zinc-400 focus:ring-1 focus:ring-brand-slate focus:outline-none"
                  >
                    <option value="1-10 employees">1-10 (Seed Stage)</option>
                    <option value="11-50 employees">11-50 (Scaleup)</option>
                    <option value="51-200 employees">51-200 (Series B-C)</option>
                    <option value="200+ employees">200+ (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="employer-target-hire-text" className="block text-zinc-700 text-xs font-medium mb-2">
                  Describe the Target Hire
                </label>
                <textarea
                  id="employer-target-hire-text"
                  value={targetHireText}
                  onChange={(e) => setTargetHireText(e.target.value)}
                  placeholder="Describe your ideal candidate. What are the key responsibilities, technical stacks, or unique domain preferences required?"
                  className="w-full h-44 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs font-light placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-brand-slate focus:outline-none transition-colors resize-none"
                />
              </div>

              <fieldset className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                <legend className="block text-zinc-500 text-[9px] font-mono uppercase tracking-wider font-medium">
                  Engagement Model
                </legend>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1.5 text-zinc-800 text-xs cursor-pointer">
                    <input type="radio" name="solution" defaultChecked className="accent-brand-slate" />
                    Direct Executive Search
                  </label>
                  <label className="flex items-center gap-1.5 text-zinc-600 text-xs cursor-pointer">
                    <input type="radio" name="solution" className="accent-brand-slate" />
                    Contract & Temporary
                  </label>
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={loading || !targetHireText}
                className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-200 disabled:text-zinc-400 transition-colors font-semibold font-mono text-white text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                {loading ? "Architecting Sourcing Spec..." : "Generate Pipeline Strategy"}
              </button>
            </form>
          </div>
        </div>

        <div aria-live="polite" className="lg:col-span-7 flex flex-col gap-6">

          {loading ? (
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 min-h-[463px] flex flex-col items-center justify-center text-center shadow-xs">
              <div className="flex gap-1.5 mb-6">
                <span className="size-2.5 rounded-full bg-brand-slate animate-bounce delay-0"></span>
                <span className="size-2.5 rounded-full bg-brand-slate animate-bounce delay-150"></span>
                <span className="size-2.5 rounded-full bg-brand-slate animate-bounce delay-300"></span>
              </div>
              <p className="text-zinc-900 text-sm font-semibold mb-1">
                Consulting Sourcing Frameworks
              </p>
              <p className="text-zinc-500 text-xs font-light max-w-xs leading-relaxed">
                Translating requirements into candidate specs, market compensation bands, and screening heuristics...
              </p>
            </div>
          ) : error ? (
            <div className="p-8 rounded-2xl bg-white border border-red-200 min-h-[463px] flex flex-col items-center justify-center text-center shadow-xs">
              <p className="text-zinc-800 text-sm font-medium mb-2">Notice</p>
              <p className="text-zinc-500 text-xs font-light max-w-xs">{error}</p>
            </div>
          ) : spec ? (
            <div className="space-y-6 text-left">
              <div className="mb-2">
                <h3 className="text-zinc-900 font-semibold text-lg">
                  Target Candidate Profile Specification
                </h3>
                <p className="text-zinc-500 text-xs font-light">
                  Direct search mapping constructed by our matching heuristics.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 transition-all space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-5 border-b border-zinc-100">
                  <div>
                    <h4 className="text-zinc-900 font-bold text-lg">
                      {spec.idealTitle}
                    </h4>
                    <p className="text-zinc-500 text-xs font-mono font-medium mt-1 uppercase tracking-wider">
                      Ideal Placement Architecture
                    </p>
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <DollarSign className="size-4 text-brand-slate" />
                    <span className="text-zinc-900 text-xs font-semibold font-mono tracking-tight">
                      {spec.estimatedBaseSalary}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                    <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-2 font-semibold">
                      Sourcing Strategy
                    </span>
                    <p className="text-zinc-600 text-xs font-light leading-relaxed">
                      {spec.sourcingStrategy}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                    <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-2 font-semibold">
                      Target Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.requiredSkills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 rounded bg-white border border-zinc-200 text-zinc-700 font-mono text-[10px]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-1 font-semibold">
                    Market Pool Insights
                  </span>
                  <p className="text-zinc-600 text-xs font-light leading-relaxed">
                    {spec.marketInsights}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider">
                    Recommended Technical Screening Heuristics
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {spec.screeningQuestions.map((question, idx) => (
                      <div key={idx} className="flex gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
                        <span className="text-brand-slate font-mono text-xs font-semibold select-none">
                          Q{idx + 1}
                        </span>
                        <p className="text-zinc-600 text-xs font-light leading-snug">
                          {question}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center gap-4 border-t border-zinc-100">
                  <p className="text-zinc-500 text-[11px] font-light">
                    Sourcing spec compiled. Initiate search to begin receiving matched profiles.
                  </p>
                  <button 
                    onClick={() => alert(`A targeted placement campaign has been launched for "${spec.idealTitle}". We will deliver matched candidate specifications to you directly.`)}
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-xs font-mono font-semibold flex items-center gap-1.5"
                  >
                    Initiate Active Sourcing
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 min-h-[463px] flex flex-col items-center justify-center text-center shadow-xs">
              <div className="p-3 rounded-xl bg-zinc-100 text-zinc-500 mb-4">
                <Users className="size-6" />
              </div>
              <p className="text-zinc-900 text-sm font-semibold mb-1">
                Awaiting Target Requirements
              </p>
              <p className="text-zinc-500 text-xs font-light max-w-xs leading-relaxed">
                Describe the profile specifications of the talent you require on the left. Our algorithms will map compensation benchmarks and screening logic.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
