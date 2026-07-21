import React from "react";
import { Sparkles, Bookmark, Layers, Grid, Briefcase } from "lucide-react";

interface HeaderProps {
  currentTab: "candidate" | "employer";
  setCurrentTab: (tab: "candidate" | "employer") => void;
  savedCount?: number;
  onOpenSaved?: () => void;
}

export default function Header({ 
  currentTab, 
  setCurrentTab,
  savedCount = 0,
  onOpenSaved
}: HeaderProps) {
  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto cosmos-dock rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 sm:gap-8 max-w-4xl w-full border border-zinc-200/80 shadow-lg shadow-black/5 transition-all duration-300">
        
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="size-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-serif text-sm font-bold group-hover:bg-brand-emerald transition-colors">
            R
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-serif italic font-semibold text-xl text-zinc-900 tracking-tight">
              RUPA
            </span>
            <span className="hidden sm:inline-block size-1 rounded-full bg-brand-emerald"></span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-medium">
              Employment Agency
            </span>
          </div>
        </a>

        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-xs font-mono text-zinc-600 font-medium">
          <a href="#active-roles" className="hover:text-zinc-900 transition-colors flex items-center gap-1">
            <Grid className="size-3 text-zinc-400" />
            Placements
          </a>
          <a href="#specializations" className="hover:text-zinc-900 transition-colors flex items-center gap-1">
            <Layers className="size-3 text-zinc-400" />
            Sectors
          </a>
          <a href="#staffing-models" className="hover:text-zinc-900 transition-colors">
            Engagements
          </a>
          <a href="#salary-calculator" className="hover:text-zinc-900 transition-colors">
            Salaries
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#active-roles"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-zinc-900 text-white shadow-xs hover:bg-zinc-800 transition-all pointer-events-auto"
          >
            <Sparkles className="size-3 text-brand-emerald" aria-hidden="true" />
            <span>NYC Placements</span>
          </a>

          {onOpenSaved && (
            <button
              onClick={onOpenSaved}
              type="button"
              className="relative p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-zinc-700 hover:text-zinc-900 transition-all flex items-center justify-center pointer-events-auto"
              title="Open Saved Collection"
              aria-label="Saved Items"
            >
              <Bookmark className="size-3.5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 size-4 rounded-full bg-brand-emerald text-white text-[9px] font-mono font-bold flex items-center justify-center shadow-sm">
                  {savedCount}
                </span>
              )}
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
