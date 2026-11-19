import React from 'react';
import { Target, Compass, Shield, User, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Corporate Purpose &amp; Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 font-mono uppercase">
              About WattShift
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
            Bridging planetary-scale artificial intelligence compute with modern electric transmission grids.
          </p>
        </div>

        {/* Mission Statement Block */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium mb-4">
              <Target className="w-3.5 h-3.5" />
              <span>OUR MISSION &amp; SERVICES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-zinc-950 font-mono mb-4 leading-snug">
              Synchronizing Planetary AI Compute with Renewable Energy Cycles
            </h3>

            <p className="text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mb-6 font-sans">
              WattShift provides spatio-temporal workload orchestration software for AI research labs, hyperscale cloud providers, and enterprise compute clusters. Our platform shifts batch model training, large-scale inference, and simulation pipelines across geographically distributed data centers to match real-time regional curtailment of wind and solar energy.
            </p>

            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans">
              Our overall objective is two-fold: solve the power bottleneck threatening the growth of artificial intelligence, while transforming compute clusters into flexible, grid-stabilizing assets that eliminate renewable energy waste.
            </p>
          </div>

          {/* Core Objectives 3-Col Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 font-mono text-xs">
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white dark:text-white light:text-zinc-900 block">Decarbonize FLOPs</span>
                <span className="text-zinc-400">Target zero Scope-2 emissions on non-realtime batch training.</span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white dark:text-white light:text-zinc-900 block">Wholesale Arbitrage</span>
                <span className="text-zinc-400">Capture sub-cent energy tariffs without infrastructure overbuild.</span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white dark:text-white light:text-zinc-900 block">Grid Resilience</span>
                <span className="text-zinc-400">Collaborate with utility operators to shave peak transmission strain.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section (Strictly ONE Founder) */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-1">
              Leadership
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-zinc-950 font-mono">
              Founder &amp; Executive Leadership
            </h3>
          </div>

          <div className="max-w-3xl p-6 sm:p-8 rounded-3xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Founder Picture */}
            <div className="shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-200 border-2 border-emerald-500/40 flex items-center justify-center relative overflow-hidden shadow-xl group">
                <img 
                  src="/david.jpeg" 
                  alt="David — Founder & CEO of WattShift" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Founder Details & Biography */}
            <div className="flex flex-col justify-between flex-1 text-center sm:text-left">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-semibold mb-2">
                  FOUNDER &amp; CHIEF EXECUTIVE OFFICER
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-950 font-mono">
                  David
                </h4>
                <div className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-4">
                  WattShift Inc.
                </div>

                <div className="p-4 rounded-xl border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed font-sans">
                  David is the Founder &amp; Chief Executive Officer of WattShift. Conceived at the nexus of high-performance distributed AI compute and modern electric transmission systems, David leads WattShift’s mission to decouple AI cluster growth from regional grid strain. With a deep background in distributed systems architecture, cloud infrastructure optimization, and energy economics, he guides the engineering of WattShift’s spatio-temporal workload orchestrator—enabling AI clusters worldwide to dynamically chase curtailed renewable generation while driving net-zero compute operations.
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 flex items-center justify-center sm:justify-start space-x-3 text-xs font-mono text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Executive Office • <a href="mailto:david@wattshift.site" className="text-emerald-400 hover:underline">david@wattshift.site</a></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
