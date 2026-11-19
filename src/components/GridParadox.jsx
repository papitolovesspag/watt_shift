import React, { useState } from 'react';
import { Flame, Wind, ArrowRight, CheckCircle2, XCircle, Sliders, Server, ZapOff, Zap } from 'lucide-react';

export default function GridParadox() {
  const [activeTab, setActiveTab] = useState('paradox');

  return (
    <section id="the-paradox" className="py-20 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>The Structural Bottleneck</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-zinc-950 font-mono">
              The AI Energy Paradox
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
            AI compute demand is outstripping transmission grids, while clean energy generation is simultaneously being thrown away.
          </p>
        </div>

        {/* 2-Column Comparison: The Legacy Approach vs The WattShift Orchestration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: The Problem (Legacy Static Compute) */}
          <div className="p-6 md:p-8 rounded-2xl border border-rose-900/40 dark:border-rose-900/40 light:border-rose-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ZapOff className="w-24 h-24 text-rose-500" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-medium mb-4">
                <XCircle className="w-3.5 h-3.5" />
                <span>LEGACY STATIC COMPUTE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-900 mb-4 font-mono">
                Pinned Clusters on Strained Grids
              </h3>

              <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-600 text-sm leading-relaxed mb-6">
                AI training jobs and batch processing run continuously in fixed data center zones. When local grids hit peak demand, utilities fire up carbon-heavy peaker plants and power prices spike to over $0.15–$0.25/kWh.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-rose-50/50 border border-zinc-800 dark:border-zinc-800 light:border-rose-100 flex items-start space-x-3">
                  <Flame className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-rose-300 dark:text-rose-300 light:text-rose-700 block">Severe Scope-2 Carbon Footprint</span>
                    <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">400–600 gCO2/kWh average intensity during thermal dispatch windows.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-rose-50/50 border border-zinc-800 dark:border-zinc-800 light:border-rose-100 flex items-start space-x-3">
                  <ZapOff className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-rose-300 dark:text-rose-300 light:text-rose-700 block">Massive Renewable Curtailment</span>
                    <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">Gigawatts of wind and solar curtailed (dumped) because power lines cannot transport the surge.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>RESULTING POWER TARIFF</span>
              <span className="text-rose-400 font-bold">$0.09 – $0.18 / kWh</span>
            </div>
          </div>

          {/* Column 2: The Solution (WattShift Grid-Aware Orchestration) */}
          <div className="p-6 md:p-8 rounded-2xl border border-emerald-500/40 dark:border-emerald-500/40 light:border-emerald-300 bg-emerald-950/10 dark:bg-emerald-950/10 light:bg-white relative overflow-hidden flex flex-col justify-between shadow-lg shadow-emerald-950/10">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap className="w-24 h-24 text-emerald-500" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>WATTSHIFT SPATIO-TEMPORAL DISPATCH</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-900 mb-4 font-mono">
                Compute Follows The Electron
              </h3>

              <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-600 text-sm leading-relaxed mb-6">
                Instead of building multi-billion dollar physical transmission lines to transport electricity, WattShift moves the compute containers across high-speed optical fiber directly to where clean power is being curtailed.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-emerald-50/50 border border-emerald-900/40 dark:border-emerald-900/40 light:border-emerald-200 flex items-start space-x-3">
                  <Wind className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-300 dark:text-emerald-300 light:text-emerald-800 block">Near-Zero Scope-2 Carbon</span>
                    <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">&lt; 25 gCO2/kWh verified marginal carbon intensity via automated matching.</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-emerald-50/50 border border-emerald-900/40 dark:border-emerald-900/40 light:border-emerald-200 flex items-start space-x-3">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-300 dark:text-emerald-300 light:text-emerald-800 block">Curtailment Arbitrage</span>
                    <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">Captures wholesale electricity at sub-cent or negative pricing when generators pay to offload.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-900/40 dark:border-emerald-900/40 light:border-emerald-200 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>WATTSHIFT EFFECTIVE TARIFF</span>
              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold">$0.008 – $0.024 / kWh</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
