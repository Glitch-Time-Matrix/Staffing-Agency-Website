import React from "react";
import { X, Bookmark, Trash2, ArrowUpRight, Briefcase, UserCheck } from "lucide-react";
import { Job } from "../types";

export interface SavedCandidate {
  id: string;
  name: string;
  role: string;
  experience: string;
  location: string;
  skills: string[];
  avatar: string;
}

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedJobs: Job[];
  savedCandidates: SavedCandidate[];
  onRemoveJob: (jobId: string) => void;
  onRemoveCandidate: (candidateId: string) => void;
  onSelectJobForMatch: (jobTitle: string) => void;
}

export default function SavedDrawer({
  isOpen,
  onClose,
  savedJobs,
  savedCandidates,
  onRemoveJob,
  onRemoveCandidate,
  onSelectJobForMatch,
}: SavedDrawerProps) {
  if (!isOpen) return null;

  const totalSaved = savedJobs.length + savedCandidates.length;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="relative w-full max-w-md bg-white border-l border-zinc-200 text-zinc-900 h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        <div className="p-6 border-b border-zinc-200/80 flex justify-between items-center bg-[#fafafa]">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-brand-emerald">
              <Bookmark className="size-4" />
            </div>
            <div>
              <h3 className="font-serif italic text-xl text-zinc-900 font-medium">Curated Collection</h3>
              <p className="text-zinc-500 text-[11px] font-mono font-medium">
                {totalSaved} {totalSaved === 1 ? "item" : "items"} saved
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition-colors border border-zinc-200"
            aria-label="Close Saved Drawer"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {totalSaved === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-300 rounded-2xl bg-zinc-50">
              <Bookmark className="size-10 text-zinc-400 mb-3 stroke-1" />
              <p className="text-zinc-900 font-serif text-lg italic">Your collection is empty</p>
              <p className="text-zinc-500 text-xs mt-1 font-light max-w-xs leading-relaxed">
                Click the bookmark icon on candidate profiles or open placements to curate your custom collection.
              </p>
            </div>
          ) : (
            <>
              {savedCandidates.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-brand-emerald mb-3 flex items-center gap-1.5 font-semibold">
                    <UserCheck className="size-3.5" />
                    Curated Candidate Profiles ({savedCandidates.length})
                  </h4>
                  <div className="space-y-3">
                    {savedCandidates.map((cand) => (
                      <div
                        key={cand.id}
                        className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex items-start justify-between gap-3 group shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={cand.avatar}
                            alt={cand.name}
                            className="size-10 rounded-full object-cover border border-zinc-200"
                          />
                          <div>
                            <h5 className="text-zinc-900 font-semibold text-sm group-hover:text-brand-emerald transition-colors">
                              {cand.name}
                            </h5>
                            <p className="text-zinc-500 text-xs font-light">{cand.role}</p>
                            <span className="inline-block mt-1 text-[10px] font-mono text-zinc-600 bg-white px-2 py-0.5 rounded border border-zinc-200">
                              {cand.location} · {cand.experience}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveCandidate(cand.id)}
                          type="button"
                          className="p-1.5 rounded bg-zinc-100 text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Remove from saved"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {savedJobs.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-brand-slate mb-3 flex items-center gap-1.5 font-semibold">
                    <Briefcase className="size-3.5" />
                    Saved Open Placements ({savedJobs.length})
                  </h4>
                  <div className="space-y-3">
                    {savedJobs.map((job) => (
                      <div
                        key={job.id}
                        className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex items-start justify-between gap-3 group shadow-xs"
                      >
                        <div className="space-y-1">
                          <h5 className="text-zinc-900 font-semibold text-sm group-hover:text-brand-slate transition-colors">
                            {job.title}
                          </h5>
                          <p className="text-zinc-500 text-xs font-light">{job.department} · {job.location}</p>
                          <div className="text-[11px] font-mono text-brand-emerald font-semibold pt-1">
                            {job.salary}
                          </div>
                          <button
                            onClick={() => {
                              onClose();
                              onSelectJobForMatch(job.title);
                            }}
                            type="button"
                            className="mt-2 text-xs text-zinc-700 hover:text-zinc-900 flex items-center gap-1 font-mono font-medium hover:underline"
                          >
                            Match Talent CV <ArrowUpRight className="size-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveJob(job.id)}
                          type="button"
                          className="p-1.5 rounded bg-zinc-100 text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Remove from saved"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-4 border-t border-zinc-200/80 bg-[#fafafa] text-center">
          <p className="text-[11px] text-zinc-500 font-mono">
            Rupa Agency · Curated Collection
          </p>
        </div>
      </div>
    </div>
  );
}
