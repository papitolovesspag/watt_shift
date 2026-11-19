import React from 'react';
import { Cpu, Network, Layers, ShieldCheck, Database, HardDrive, Zap, Compass, GitMerge } from 'lucide-react';

export default function ArchitectureSpecs() {
  const architecturalPillars = [
    {
      icon: Compass,
      title: 'LME Spatio-Temporal Forecaster',
      category: 'FORECASTING ENGINE',
      description: 'Temporal Transformer network trained on localized grid signals, weather satellite feeds, and ISO dispatch curves. Predicts marginal carbon intensity and curtailment probabilities across 50+ transmission nodes with 96.4% precision.',
      bullets: ['24–48 Hour Lookahead', 'ISO/RTO API Feeds (5m resolution)', 'Congestion & Curtailment Classifier'],
    },
    {
      icon: Layers,
      title: 'Kubernetes CRD & Custom Operator',
      category: 'CONTAINER ORCHESTRATION',
      description: 'Extends standard Kubernetes control planes via custom `WattJob` and `GridCluster` Custom Resource Definitions (CRDs). Intercepts batch jobs, watches node-level power tariffs, and injects dynamic affinity schedules.',
      bullets: ['Native K8s Custom Operator', 'Tolerations & Priority Queues', 'Zero Changes to PyTorch Code'],
    },
    {
      icon: HardDrive,
      title: 'Zero-Loss CRIU & VRAM Checkpointing',
      category: 'STATE RETENTION',
      description: 'Distributed barrier coordination across multi-GPU/TPU pods. Employs user-space checkpointing (CRIU) coupled with high-throughput NVMe-oF memory streaming, avoiding loss of training steps or degraded convergence.',
      bullets: ['Delta Memory Compression', '< 1.8% Lost FLOPs Overhead', 'Slurm & Ray Cluster Bridges'],
    },
    {
      icon: Network,
      title: 'BGP & Multi-Cloud Optical Transit',
      category: 'NETWORK FABRIC',
      description: 'Encrypted cross-region optical transport coordinating multi-cloud endpoints across Google Cloud, AWS, Azure, and regional bare-metal colocation facilities located directly adjacent to renewable generation assets.',
      bullets: ['Cross-Cloud VPC Peering', 'Multi-Terabit Encrypted Transit', 'Automatic Warm-Cache Weight Sync'],
    },
  ];

  const marketNodes = [
    'ERCOT (Texas)', 'CAISO (California)', 'PJM (Mid-Atlantic)', 'MISO (Midwest)',
    'NYISO (New York)', 'Nord Pool (Nordics)', 'TenneT (Germany/Netherlands)', 'EirGrid (Ireland)'
  ];

  return (
    <section id="architecture" className="py-24 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>System Specifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 font-mono uppercase">
              AI Infrastructure Architecture
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
            Engineered as an enterprise-grade drop-in layer for existing AI clusters, requiring zero changes to ML application code.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {architecturalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-800/90 dark:border-zinc-800/90 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 hover:border-emerald-500/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                      {pillar.category}
                    </span>
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-zinc-900 font-mono mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed mb-6 font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 font-mono text-xs">
                  {pillar.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center space-x-2 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Supported Energy Markets / Grid Interconnections */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-100 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="text-xs font-bold text-zinc-300 dark:text-zinc-300 light:text-zinc-800 tracking-wider">
              SUPPORTED WHOLESALE ENERGY GRIDS &amp; ISOS
            </span>
            <span className="text-xs text-emerald-400 font-medium">50+ MARKET INTEGRATIONS LIVE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {marketNodes.map((market, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-300 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white text-xs flex items-center justify-between"
              >
                <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-800 truncate">{market}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 ml-2"></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
