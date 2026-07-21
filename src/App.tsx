import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, MapPin, Building, Calendar, Users, Globe } from "lucide-react";
import Header from "./components/Header";
import Hero, { CandidateCardData } from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ActivePositions from "./components/ActivePositions";
import Specializations from "./components/Specializations";
import StaffingModels from "./components/StaffingModels";
import ProcessWorkflow from "./components/ProcessWorkflow";
import Guarantees from "./components/Guarantees";
import SalaryCalculator from "./components/SalaryCalculator";
import SavedDrawer, { SavedCandidate } from "./components/SavedDrawer";
import { INITIAL_JOBS } from "./data";
import { Job } from "./types";

export default function App() {
  const [currentTab, setCurrentTab] = useState<"candidate" | "employer">("candidate");
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  
  const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
    try {
      const stored = localStorage.getItem("cosmos_saved_jobs");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedCandidates, setSavedCandidates] = useState<SavedCandidate[]>(() => {
    try {
      const stored = localStorage.getItem("cosmos_saved_candidates");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);

  const portalSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem("cosmos_saved_jobs", JSON.stringify(savedJobs));
    } catch (e) {
      console.error(e);
    }
  }, [savedJobs]);

  useEffect(() => {
    try {
      localStorage.setItem("cosmos_saved_candidates", JSON.stringify(savedCandidates));
    } catch (e) {
      console.error(e);
    }
  }, [savedCandidates]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Unable to contact live placement api.");
      })
      .then((data) => {
        if (data.jobs && data.jobs.length > 0) {
          setJobs(data.jobs);
        }
      })
      .catch(() => {
      });
  }, []);

  const scrollToActiveRoles = () => {
    setTimeout(() => {
      document.getElementById("active-roles")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const toggleSaveJob = (job: Job) => {
    setSavedJobs((prev) => {
      const exists = prev.some((j) => j.id === job.id);
      if (exists) {
        return prev.filter((j) => j.id !== job.id);
      }
      return [...prev, job];
    });
  };

  const toggleSaveCandidate = (cand: CandidateCardData) => {
    setSavedCandidates((prev) => {
      const exists = prev.some((c) => c.id === cand.id);
      if (exists) {
        return prev.filter((c) => c.id !== cand.id);
      }
      return [...prev, cand];
    });
  };

  const totalSavedCount = savedJobs.length + savedCandidates.length;

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#18181b] flex flex-col relative antialiased selection:bg-brand-emerald selection:text-white">
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        savedCount={totalSavedCount}
        onOpenSaved={() => setSavedDrawerOpen(true)}
      />

      <SavedDrawer 
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedJobs={savedJobs}
        savedCandidates={savedCandidates}
        onRemoveJob={(id) => setSavedJobs((prev) => prev.filter((j) => j.id !== id))}
        onRemoveCandidate={(id) => setSavedCandidates((prev) => prev.filter((c) => c.id !== id))}
        onSelectJobForMatch={() => scrollToActiveRoles()}
      />

      <main className="flex-1 flex flex-col items-center w-full">
        <Hero 
          onExploreClick={scrollToActiveRoles} 
          savedCandidateIds={savedCandidates.map((c) => c.id)}
          onToggleSaveCandidate={toggleSaveCandidate}
        />

        <Specializations onSelectSpecialization={() => scrollToActiveRoles()} />

        <StaffingModels onSelectModel={() => scrollToActiveRoles()} />

        <ProcessWorkflow onActionClick={scrollToActiveRoles} />

        <SalaryCalculator />

        <ActivePositions 
          jobs={jobs} 
          onSelectJobForMatching={() => alert("Thank you for your interest! Please contact Rupa Employment Agency at (718) 555-0199 or visit our Elmhurst office at 75-32 Broadway, NY 11373 to apply directly.")} 
          savedJobIds={savedJobs.map((j) => j.id)}
          onToggleSaveJob={toggleSaveJob}
        />

        <Guarantees />

        <SocialProof />

        <section id="about-rupa" className="py-24 px-6 w-full bg-white relative border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-6">
              <span className="text-brand-emerald text-xs font-mono uppercase tracking-widest block mb-3 font-semibold">
                About Rupa Employment Agency
              </span>
              <h2 className="font-serif italic font-normal text-3xl sm:text-5xl text-zinc-900 tracking-tight leading-tight mb-6">
                Serving NYC with trusted job placements for over 15 years.
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                Rupa Employment Agency has been serving the residents of NYC with job placements for the last 15 years and earned the respect of the communities here. Finding a new job can easily drain your energy and motivation. Contrarily, the hunt for topnotch employees costs substantial time and money. What is the perfect way out of this conundrum? Rupa Employment Agency in NYC stands out as the best reliable partner in hiring and job searching.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="size-5 rounded-full bg-emerald-50 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ShieldCheck className="size-3" />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 text-xs font-semibold">15 Years Community Respect</h4>
                    <p className="text-zinc-500 text-[11px] font-light mt-0.5">Established in 2005, serving job seekers and businesses across Elmhurst and greater New York.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="size-5 rounded-full bg-emerald-50 text-brand-emerald flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <ShieldCheck className="size-3" />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 text-xs font-semibold">Reliable Hiring Partner</h4>
                    <p className="text-zinc-500 text-[11px] font-light mt-0.5">Every placement features a 90-day retention guarantee and dedicated candidate support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 cosmos-card p-6 rounded-2xl border border-zinc-200/80 text-left bg-zinc-50/50 shadow-xs space-y-5">
              <div className="flex justify-between items-start border-b border-zinc-200 pb-4">
                <div>
                  <h3 className="text-zinc-900 font-serif italic text-2xl font-normal">Rupa Employment Agency</h3>
                  <p className="text-zinc-500 text-xs font-mono mt-0.5">Public Company · Founded 2005</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-brand-emerald font-mono text-xs font-semibold">
                  Primary Location
                </span>
              </div>
              
              <div className="space-y-3 text-xs font-mono text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="size-4 text-brand-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-zinc-900">Headquarters Address</span>
                    <span className="text-zinc-600 font-sans">75-32 Broadway, Elmhurst, New York, NY 11373, US</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Building className="size-4 text-brand-slate shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-900">Industry:</span> <span className="text-zinc-600 font-sans">Staffing and Recruiting</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Users className="size-4 text-amber-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-900">Company Size:</span> <span className="text-zinc-600 font-sans">2-10 employees</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar className="size-4 text-purple-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-900">Established:</span> <span className="text-zinc-600 font-sans">2005 (15+ Years Active Service)</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => alert("Welcome to Rupa Employment Agency. Contact our primary office at 75-32 Broadway, Elmhurst, NY 11373 or email info@rupaagency.com")}
                type="button" 
                className="w-full mt-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white transition-all text-xs font-mono font-semibold"
              >
                Contact Rupa Agency NYC Office
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full bg-[#f4f4f6] border-t border-zinc-200/80 py-16 px-6 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-zinc-900 text-white font-serif text-sm font-bold select-none border border-zinc-800">
                R
              </div>
              <span className="font-serif italic font-semibold text-2xl tracking-tight text-zinc-900">
                RUPA AGENCY
              </span>
            </div>
            <p className="text-zinc-600 text-xs font-light max-w-sm leading-relaxed">
              Rupa Employment Agency has been serving residents & businesses in NYC with job placements for over 15 years.
            </p>
            <div className="text-zinc-500 text-[10px] font-mono mt-1 space-y-1">
              <p className="flex items-center gap-1.5 font-medium">
                <MapPin className="size-3 text-brand-emerald" />
                75-32 Broadway, Elmhurst New York, NY 11373, US
              </p>
              <p className="flex items-center gap-1.5 font-medium text-zinc-400">
                <Globe className="size-3 text-zinc-500" />
                Primary NYC Location · Staffing & Recruiting
              </p>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-zinc-900 text-xs font-mono uppercase tracking-wider font-semibold">
              Job Seekers
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-600 font-light">
              <a href="#active-roles" className="hover:text-zinc-900 transition-colors">Active Placements</a>
              <a href="#salary-calculator" className="hover:text-zinc-900 transition-colors">Executive Salaries</a>
              <a href="#testimonials" className="hover:text-zinc-900 transition-colors">Candidate Testimonials</a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-zinc-900 text-xs font-mono uppercase tracking-wider font-semibold">
              Contact Rupa Agency
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-600 font-light">
              <a href="#staffing-models" className="hover:text-zinc-900 transition-colors">Staffing Engagement Models</a>
              <a href="#stats" className="hover:text-zinc-900 transition-colors">Placement Guarantee Terms</a>
              <a href="mailto:info@rupaagency.com" className="hover:text-zinc-900 transition-colors text-left">NYC Office Inquiry (Elmhurst)</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Rupa Employment Agency. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-800">Privacy Protocol</a>
            <span>·</span>
            <a href="#" className="hover:text-zinc-800">Terms of Placement</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
