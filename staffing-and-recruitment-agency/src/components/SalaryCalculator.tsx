import React, { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";

export default function SalaryCalculator() {
  const [role, setRole] = useState("Engineering");
  const [seniority, setSeniority] = useState("Senior");
  const [location, setLocation] = useState("NYC");

  const SALARY_DATA: Record<string, Record<string, Record<string, { base: string; equity: string; bonus: string }>>> = {
    Engineering: {
      "Mid-Level": {
        NYC: { base: "$140,000 - $175,000", equity: "0.1% - 0.25%", bonus: "10% - 15%" },
        SF: { base: "$150,000 - $185,000", equity: "0.1% - 0.3%", bonus: "10% - 15%" },
        Remote: { base: "$130,000 - $160,000", equity: "0.05% - 0.2%", bonus: "5% - 10%" },
      },
      Senior: {
        NYC: { base: "$185,000 - $235,000", equity: "0.25% - 0.6%", bonus: "15% - 25%" },
        SF: { base: "$195,000 - $250,000", equity: "0.3% - 0.7%", bonus: "15% - 25%" },
        Remote: { base: "$170,000 - $215,000", equity: "0.15% - 0.4%", bonus: "10% - 15%" },
      },
      "Lead / VP": {
        NYC: { base: "$250,000 - $350,000+", equity: "0.8% - 2.5%", bonus: "25% - 40%" },
        SF: { base: "$265,000 - $380,000+", equity: "1.0% - 3.0%", bonus: "25% - 40%" },
        Remote: { base: "$230,000 - $310,000", equity: "0.5% - 1.8%", bonus: "20% - 30%" },
      },
    },
    Design: {
      "Mid-Level": {
        NYC: { base: "$125,000 - $155,000", equity: "0.05% - 0.2%", bonus: "10%" },
        SF: { base: "$135,000 - $165,000", equity: "0.08% - 0.2%", bonus: "10%" },
        Remote: { base: "$115,000 - $145,000", equity: "0.05% - 0.15%", bonus: "5%" },
      },
      Senior: {
        NYC: { base: "$165,000 - $210,000", equity: "0.2% - 0.5%", bonus: "15%" },
        SF: { base: "$175,000 - $225,000", equity: "0.2% - 0.5%", bonus: "15%" },
        Remote: { base: "$150,000 - $185,000", equity: "0.1% - 0.35%", bonus: "10%" },
      },
      "Lead / VP": {
        NYC: { base: "$220,000 - $300,000", equity: "0.5% - 1.5%", bonus: "20% - 30%" },
        SF: { base: "$235,000 - $320,000", equity: "0.6% - 2.0%", bonus: "20% - 35%" },
        Remote: { base: "$200,000 - $270,000", equity: "0.3% - 1.2%", bonus: "15% - 25%" },
      },
    },
    Executive: {
      "Mid-Level": {
        NYC: { base: "$160,000 - $200,000", equity: "0.2% - 0.5%", bonus: "15% - 20%" },
        SF: { base: "$170,000 - $215,000", equity: "0.2% - 0.6%", bonus: "15% - 20%" },
        Remote: { base: "$150,000 - $185,000", equity: "0.1% - 0.4%", bonus: "10% - 15%" },
      },
      Senior: {
        NYC: { base: "$220,000 - $290,000", equity: "0.5% - 1.2%", bonus: "20% - 30%" },
        SF: { base: "$240,000 - $310,000", equity: "0.6% - 1.5%", bonus: "20% - 35%" },
        Remote: { base: "$200,000 - $260,000", equity: "0.3% - 0.8%", bonus: "15% - 25%" },
      },
      "Lead / VP": {
        NYC: { base: "$300,000 - $450,000+", equity: "1.5% - 4.0%", bonus: "30% - 50%" },
        SF: { base: "$320,000 - $500,000+", equity: "2.0% - 5.0%", bonus: "30% - 50%" },
        Remote: { base: "$275,000 - $390,000", equity: "1.0% - 3.0%", bonus: "25% - 40%" },
      },
    },
  };

  const currentComp = SALARY_DATA[role]?.[seniority]?.[location] || {
    base: "$185,000 - $235,000",
    equity: "0.25% - 0.6%",
    bonus: "15% - 25%",
  };

  return (
    <section id="salary-calculator" className="py-24 border-b border-zinc-200/80 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-6 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-brand-emerald font-semibold text-xs tracking-widest uppercase block mb-3 font-mono">
              Compensation Benchmark Guide
            </span>
            <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-zinc-900 tracking-tight leading-tight mb-4">
              Executive Salary & Equity Calculator.
            </h2>
            <p className="text-zinc-600 text-sm font-light leading-relaxed mb-6">
              Benchmark total compensation models based on live placement data across major tech hubs (NYC, San Francisco, London, and Remote).
            </p>
            
            <div className="p-4 rounded-xl bg-white border border-zinc-200/80 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 font-semibold">
                <TrendingUp className="size-4 text-brand-emerald" />
                <span>Updated Market Placement Intelligence</span>
              </div>
              <p className="text-zinc-500 text-xs font-light">
                Includes base salary ranges, equity percentage grants, and target variable performance bonuses.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 cosmos-card p-8 rounded-2xl border border-zinc-200/80 text-left bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-brand-emerald border border-emerald-200">
                <Calculator className="size-5" />
              </div>
              <div>
                <h3 className="text-zinc-900 font-bold text-base">Interactive Compensation Estimator</h3>
                <p className="text-zinc-500 text-xs font-light">Select role, tier, and region to compute market compensation</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div>
                <label htmlFor="calc-role" className="block text-zinc-700 text-xs font-medium mb-2">Role Vector</label>
                <select
                  id="calc-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:border-zinc-400 focus:ring-1 focus:ring-brand-emerald focus:outline-none"
                >
                  <option value="Engineering">Engineering & AI</option>
                  <option value="Design">Design & Product</option>
                  <option value="Executive">Executive & C-Suite</option>
                </select>
              </div>

              <div>
                <label htmlFor="calc-seniority" className="block text-zinc-700 text-xs font-medium mb-2">Seniority Tier</label>
                <select
                  id="calc-seniority"
                  value={seniority}
                  onChange={(e) => setSeniority(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:border-zinc-400 focus:ring-1 focus:ring-brand-emerald focus:outline-none"
                >
                  <option value="Mid-Level">Mid-Level (3-5 yrs)</option>
                  <option value="Senior">Senior (5-8 yrs)</option>
                  <option value="Lead / VP">Lead / VP / C-Suite</option>
                </select>
              </div>

              <div>
                <label htmlFor="calc-location" className="block text-zinc-700 text-xs font-medium mb-2">Region Hub</label>
                <select
                  id="calc-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:border-zinc-400 focus:ring-1 focus:ring-brand-emerald focus:outline-none"
                >
                  <option value="NYC">New York City (NYC)</option>
                  <option value="SF">San Francisco / Bay Area</option>
                  <option value="Remote">Global Remote</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-zinc-50 border border-zinc-200">
              <div>
                <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-1 font-medium">Estimated Base Salary</span>
                <span className="text-zinc-900 font-mono font-bold text-base">{currentComp.base}</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-1 font-medium">Target Equity Band</span>
                <span className="text-brand-emerald font-mono font-bold text-base">{currentComp.equity}</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-1 font-medium">Target Annual Bonus</span>
                <span className="text-brand-slate font-mono font-bold text-base">{currentComp.bonus}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
