import React from 'react';
import LiveTelemetryCard from './LiveTelemetryCard';
import { ArrowUpRight, Zap, Shield, Cpu, Activity, Gauge } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Grid Pattern & Radial glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>ENTERPRISE SPATIO-TEMPORAL COMPUTE ORCHESTRATION</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 uppercase leading-none font-mono">
            Orchestrate AI Compute <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              Where Clean Power Peaks
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 dark:text-zinc-300 light:text-zinc-700 max-w-3xl leading-relaxed font-normal">
            WattShift autonomously shifts non-urgent, heavy AI training and batch workloads 
            to data center regions with imminent renewable curtailment and near-zero marginal energy prices.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#how-it-works"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center space-x-2"
            >
              <span>See How It Works</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#pricing"
              className="px-6 py-3.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 hover:border-zinc-700 dark:hover:border-zinc-600 font-mono text-xs sm:text-sm font-medium transition-colors"
            >
              Calculate Grid ROI
            </a>
          </div>

          {/* Core Telemetry Strip Indicators */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-8 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
            <div className="p-3 text-left border-l-2 border-emerald-500 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 rounded-r">
              <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">PREDICTIVE HORIZON</span>
              <span className="text-sm sm:text-base font-bold font-mono text-white dark:text-white light:text-zinc-900">24 – 48 Hours</span>
              <span className="block text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500">Transformer LME Models</span>
            </div>
            <div className="p-3 text-left border-l-2 border-emerald-500 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 rounded-r">
              <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">MARKETS MONITORED</span>
              <span className="text-sm sm:text-base font-bold font-mono text-white dark:text-white light:text-zinc-900">50+ Global ISOs</span>
              <span className="block text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500">CAISO, ERCOT, Nord Pool</span>
            </div>
            <div className="p-3 text-left border-l-2 border-emerald-500 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 rounded-r">
              <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">POWER BILL REDUCTION</span>
              <span className="text-sm sm:text-base font-bold font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-600">20% – 35%</span>
              <span className="block text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500">Realized Cost Arbitrage</span>
            </div>
            <div className="p-3 text-left border-l-2 border-emerald-500 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50 rounded-r">
              <span className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">MIGRATION OVERHEAD</span>
              <span className="text-sm sm:text-base font-bold font-mono text-white dark:text-white light:text-zinc-900">&lt; 1.8% Lost FLOPs</span>
              <span className="block text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500">Zero-Loss Checkpointing</span>
            </div>
          </div>
        </div>

        {/* Live Telemetry Console Component */}
        <div className="mt-4">
          <LiveTelemetryCard />
        </div>
      </div>
    </section>
  );
}
