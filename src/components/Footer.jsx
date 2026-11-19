import React from 'react';
import { ShieldCheck, Activity, Terminal, ArrowUp, Zap } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 text-zinc-400 font-mono text-xs">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6L8 18L12 10L16 18L20 6" />
                  <path d="M14 6L18 2M18 2H14M18 2V6" stroke="#00FF66" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-bold tracking-tight text-base text-white dark:text-white light:text-zinc-900 font-mono">
                WATT<span className="text-emerald-400">SHIFT</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-sm font-sans leading-relaxed">
              Decarbonized spatio-temporal compute orchestrator. Synchronizing high-performance AI training and batch inference clusters with regional renewable energy curtailment.
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>54 ISO/RTO GRIDS MONITORED // ZERO LOSS PROTOCOL</span>
            </div>
          </div>

          {/* Direct Navigation */}
          <div>
            <div className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-bold uppercase tracking-wider mb-3 text-[11px]">
              Platform Architecture
            </div>
            <ul className="space-y-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              <li><a href="#the-paradox" className="hover:text-emerald-400 transition-colors">The Grid Paradox</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">4-Stage Pipeline</a></li>
              <li><a href="#architecture" className="hover:text-emerald-400 transition-colors">K8s CRD Operator</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing &amp; ROI Simulator</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Engineering</a></li>
            </ul>
          </div>

          {/* Compliance & Contact Summary */}
          <div>
            <div className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-bold uppercase tracking-wider mb-3 text-[11px]">
              Verification &amp; Inquiries
            </div>
            <ul className="space-y-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              <li>GHG Scope-2 Granular (24/7 CFE)</li>
              <li>ISO 14064 Compliance</li>
              <li>CRIU &amp; NCCL Certified</li>
              <li className="pt-2 text-white dark:text-white light:text-zinc-900 font-bold">david@wattshift.site</li>
              <li>+234 915 078 9240</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} WattShift Inc. All rights reserved. Enterprise Grid-Aware Compute Orchestration.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
