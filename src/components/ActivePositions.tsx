import React, { useState } from "react";
import { Search, MapPin, DollarSign, ChevronDown, ChevronUp, Sparkles, Filter, CheckCircle2, Bookmark, LayoutGrid, List } from "lucide-react";
import { Job } from "../types";

interface ActivePositionsProps {
  jobs: Job[];
  onSelectJobForMatching: (jobTitle: string) => void;
  savedJobIds?: string[];
  onToggleSaveJob?: (job: Job) => void;
}

export default function ActivePositions({ 
  jobs, 
  onSelectJobForMatching,
  savedJobIds = [],
  onToggleSaveJob
}: ActivePositionsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const DEPARTMENTS = ["All", "Engineering", "Creative & Design", "Executive & Creative", "Executive & Engineering", "Marketing", "Finance & Accounting", "Healthcare"];
  const TYPES = ["All", "Full-Time", "Contract-to-Hire", "Contract Staffing"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requirements.some(r => r.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesType = selectedType === "All" || job.type === selectedType;

    return matchesSearch && matchesDept && matchesType;
  });

  const toggleExpandJob = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <section id="active-roles" className="py-24 border-b border-zinc-200/80 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 text-left">
          <div>
            <span className="text-brand-emerald font-semibold text-xs tracking-widest uppercase block mb-2 font-mono">
              Live Placements Directory
            </span>
            <h2 className="font-serif italic font-normal text-5xl text-zinc-900 tracking-tight">
              Active Agency Placements
            </h2>
            <p className="text-zinc-600 text-sm font-light mt-2 max-w-xl">
              Explore open placement criteria, benchmark executive compensation, and bookmark target roles to your custom collection.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === "grid" ? "bg-zinc-100 text-zinc-900 font-semibold" : "text-zinc-500 hover:text-zinc-800"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === "list" ? "bg-zinc-100 text-zinc-900 font-semibold" : "text-zinc-500 hover:text-zinc-800"
                }`}
                title="List View"
              >
                <List className="size-4" />
              </button>
            </div>
            
            <div className="px-3.5 py-1.5 rounded-xl bg-white border border-zinc-200/80 text-xs font-mono text-zinc-600 shadow-xs">
              Active Roles: <span className="text-zinc-900 font-bold">{filteredJobs.length}</span> / {jobs.length}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
          <div className="md:col-span-6 relative flex items-center">
            <label htmlFor="search-placements-input" className="sr-only">Search placements</label>
            <Search className="absolute left-4 size-4 text-zinc-400" aria-hidden="true" />
            <input
              id="search-placements-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by technical stack, executive title, or skills..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 text-xs placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1 focus:ring-brand-emerald focus:outline-none transition-colors shadow-xs"
            />
          </div>

          <div className="md:col-span-3 relative flex items-center">
            <label htmlFor="department-filter-select" className="sr-only">Filter by department</label>
            <Filter className="absolute left-4 size-4 text-zinc-400" aria-hidden="true" />
            <select
              id="department-filter-select"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 text-xs focus:border-zinc-400 focus:ring-1 focus:ring-brand-emerald focus:outline-none appearance-none cursor-pointer shadow-xs"
            >
              {DEPARTMENTS.map((dept, idx) => (
                <option key={idx} value={dept}>{dept === "All" ? "All Sectors" : dept}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="type-filter-select" className="sr-only">Filter by placement type</label>
            <select
              id="type-filter-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 text-xs focus:border-zinc-400 focus:ring-1 focus:ring-brand-emerald focus:outline-none appearance-none cursor-pointer shadow-xs"
            >
              {TYPES.map((type, idx) => (
                <option key={idx} value={type}>{type === "All" ? "All Placement Types" : type}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "grid grid-cols-1 gap-4"}>
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              const isSaved = savedJobIds.includes(job.id);

              return (
                <div 
                  key={job.id}
                  className={`cosmos-card p-6 rounded-2xl flex flex-col justify-between text-left relative group ${
                    isExpanded ? "border-zinc-300 shadow-lg" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-brand-emerald font-mono text-[10px] uppercase font-semibold">
                          {job.department}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 font-mono text-[10px] uppercase">
                          {job.type}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => onToggleSaveJob && onToggleSaveJob(job)}
                        type="button"
                        className={`p-2 rounded-xl border transition-all ${
                          isSaved 
                            ? "bg-emerald-50 border-brand-emerald text-brand-emerald" 
                            : "bg-zinc-50 border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300"
                        }`}
                        title={isSaved ? "Remove bookmark" : "Bookmark Position"}
                      >
                        <Bookmark className="size-4" />
                      </button>
                    </div>
                    
                    <h3 className="text-zinc-900 font-semibold text-xl mb-2 group-hover:text-brand-emerald transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-zinc-600 text-xs font-light leading-relaxed mb-6 line-clamp-3">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-zinc-600 text-xs font-mono mb-6">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-zinc-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-emerald font-semibold">
                        <DollarSign className="size-3.5 text-brand-emerald" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleExpandJob(job.id)}
                      className="text-xs font-mono text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors"
                    >
                      {isExpanded ? "Hide Requirements" : "View Requirements"}
                      {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectJobForMatching(job.title)}
                      className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs font-semibold tracking-tight transition-all duration-200 flex items-center gap-1.5 shadow-xs"
                    >
                      Match CV
                      <Sparkles className="size-3.5" />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-zinc-100 text-left">
                      <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider mb-3">
                        Required Core Competencies
                      </span>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-zinc-700 text-xs font-light">
                            <span className="p-0.5 rounded-full bg-emerald-50 text-brand-emerald shrink-0 mt-0.5">
                              <CheckCircle2 className="size-3" />
                            </span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 rounded-2xl bg-white border border-zinc-200/80 text-center shadow-xs">
            <p className="text-zinc-900 text-sm font-semibold mb-1">No Placements Found</p>
            <p className="text-zinc-500 text-xs font-light mb-4">Try adjusting your filters or search keywords.</p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedDept("All"); setSelectedType("All"); }}
              className="px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-900 text-xs font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
