import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, Cpu, Wind, Sun, 
  ArrowRight, ShieldCheck, Database, RefreshCw, BarChart3, 
  CheckCircle, Radio, Terminal, Zap, Layers, Network
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animProgress, setAnimProgress] = useState(0);

  const stages = [
    {
      id: '01',
      title: 'Predictive Grid & Curtailment Forecasting',
      badge: 'STAGE 01 // INFERENCE',
      shortDesc: 'Transformer models anticipate clean energy curtailment windows 24–48 hours ahead.',
      description: 'WattShift’s predictive engine continuously models localized marginal emissions (LME), transmission line congestion, and wind/solar generation across 50+ energy markets. When renewable generation exceeds local grid transmission capacity, the system flags the imminent curtailment window.',
      specs: [
        { label: 'Model Architecture', value: 'Temporal Spatio-Transformer' },
        { label: 'Forecast Horizon', value: '24–48 Hours (5m resolution)' },
        { label: 'Grid Interconnections', value: 'CAISO, ERCOT, PJM, Nord Pool' },
        { label: 'Forecast Accuracy', value: '96.4% Curtailment Precision' },
      ],
      terminalLogs: [
        '[LME_FORECAST] ERCOT_WEST: High wind generation peak detected @ 02:00 UTC',
        '[LME_FORECAST] CAISO_SOUTH: Sub-transmission congestion confirmed (+3.2 GW)',
        '[ARBITRAGE_ENGINE] Projected Spot Electricity: -$0.006/kWh in 4h 20m',
        '[DISPATCH_READY] Preparing target cluster: us-west-datacenter-04',
      ],
      nodes: {
        sourceRegion: 'CAISO Zone (Solar)',
        targetRegion: 'ERCOT Panhandle (Wind)',
        powerStatus: 'Curtailed Wind (4,200 MW)',
        action: 'Forecast Signal Generated',
      }
    },
    {
      id: '02',
      title: 'Workload Ingestion & Zero-Loss Checkpointing',
      badge: 'STAGE 02 // CHECKPOINT',
      shortDesc: 'Workload containers serialize memory state without losing progress.',
      description: 'The Kubernetes operator identifies eligible batch workloads—such as LLM pre-training, fine-tuning, or offline batch inference. It initiates coordinated CRIU snapshots and NCCL distributed barrier synchronization, flushing GPU VRAM state to high-throughput NVMe caching layers with under 1.8% FLOP overhead.',
      specs: [
        { label: 'Checkpoint Protocol', value: 'CRIU + Distributed NCCL Barrier' },
        { label: 'VRAM Snapshot Latency', value: '< 3.8s for 8x H100 Node' },
        { label: 'Storage Layer', value: 'Decoupled NVMe over Fabrics (NVMe-oF)' },
        { label: 'Workload Compatibility', value: 'PyTorch, DeepSpeed, Ray, Slurm' },
      ],
      terminalLogs: [
        '[K8S_OPERATOR] Intercepting BatchJob: llama3-70b-finetune-shard-12',
        '[CHECKPOINT_MGR] Initiating barrier sync across 64 distributed ranks',
        '[VRAM_SERIALIZER] Snapshotting 640 GB VRAM to NVMe-oF tier... Done (3.2s)',
        '[POD_STATE] Container state paused cleanly. Ready for transit.',
      ],
      nodes: {
        sourceRegion: 'Active Cluster (Node 1-64)',
        targetRegion: 'Checkpoint Buffer (NVMe-oF)',
        powerStatus: 'Serializing Memory Blocks',
        action: 'State Snapshotted',
      }
    },
    {
      id: '03',
      title: 'Autonomous Spatio-Temporal Migration',
      badge: 'STAGE 03 // DISPATCH',
      shortDesc: 'Pods migrate across fiber lines into data centers inside the green energy zone.',
      description: 'Rather than trying to transmit excess electricity across congested physical copper power lines, WattShift routes the compute containers over multi-terabit optical fiber directly into data centers situated within the curtailed grid pocket. Workloads resume execution instantly on zero-carbon power.',
      specs: [
        { label: 'Network Transit', value: 'Dedicated Multi-Cloud Fiber' },
        { label: 'Warm Cache Priming', value: 'Pre-warmed GPU Weight Mirrors' },
        { label: 'Container Rehydration', value: '< 18 seconds to full compute FLOPs' },
        { label: 'Cost Basis During Run', value: 'Near-Zero / Negative Power Tariff' },
      ],
      terminalLogs: [
        '[NETWORK_FABRIC] Routing 640 GB state payload via low-latency optical pipe',
        '[TARGET_NODE] Rehydrating container pods on ERCOT-Green cluster',
        '[NCCL_SYNC] GPU ranks re-established. All 512 Tensor Cores active',
        '[COMPUTE_ACTIVE] Workload running on 100% curtailed wind energy @ $0.002/kWh',
      ],
      nodes: {
        sourceRegion: 'High-Carbon Grid Zone',
        targetRegion: 'Green Curtailment Zone',
        powerStatus: 'Running on Zero-Carbon Wind',
        action: 'Workload Transferred',
      }
    },
    {
      id: '04',
      title: 'Verifiable Scope-2 ESG & Cost Telemetry',
      badge: 'STAGE 04 // AUDIT & SAVINGS',
      shortDesc: 'Real-time cryptographically verified carbon savings and energy cost arbitrage.',
      description: 'Every compute hour consumed is matched hourly with localized grid telemetry. WattShift issues cryptographically verifiable carbon mitigation certificates conforming to GHG Protocol Scope-2 standards and automatically calculates realized energy cost savings.',
      specs: [
        { label: 'Carbon Accounting', value: 'Hourly Granular Matching (24/7 CFE)' },
        { label: 'Compliance Standards', value: 'GHG Protocol Scope 2, ISO 14064' },
        { label: 'Savings Share Ledger', value: 'Automated 20–30% Realized Share' },
        { label: 'Telemetry Export', value: 'Prometheus / Grafana / Datadog API' },
      ],
      terminalLogs: [
        '[AUDIT_ENGINE] Cryptographic proof signed for 8,420 kWh consumed',
        '[CARBON_LEDGER] Scope-2 Emissions Displaced: 4.21 MT CO2e',
        '[SAVINGS_LEDGER] Standard Grid Cost: $1,140 | WattShift Cost: $184',
        '[BILLING_REPORT] Net Client Savings: $956 (83.8% reduction this window)',
      ],
      nodes: {
        sourceRegion: 'Telemetry Ingest',
        targetRegion: 'Client Dashboard & ESG Ledger',
        powerStatus: 'Audit-Grade Certificate Issued',
        action: 'Savings & Clean Proof Sealed',
      }
    },
  ];

  // Auto-play timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % stages.length);
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, stages.length]);

  const current = stages[activeStage];

  const handleNext = () => {
    setActiveStage((prev) => (prev + 1) % stages.length);
  };

  const handlePrev = () => {
    setActiveStage((prev) => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <section id="how-it-works" className="py-24 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>THE 4-STAGE ORCHESTRATION PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 font-mono uppercase">
            How WattShift Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-600">
            A synchronized closed-loop architecture: forecasting renewable curtailment, checkpointing distributed VRAM, 
            and migrating batch compute across multi-cloud regions in real time.
          </p>
        </div>

        {/* Interactive Controls & Progress Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 p-3 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-white backdrop-blur-md">
          {/* Stage Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
            {stages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-mono text-xs transition-all ${
                  activeStage === idx
                    ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-100 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white hover:bg-zinc-800'
                }`}
              >
                <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] ${
                  activeStage === idx ? 'bg-zinc-950 text-emerald-400' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {stage.id}
                </span>
                <span className="truncate">{stage.title.split(' ')[0]} {stage.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Play/Pause & Step Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause automated step-through" : "Play automated step-through"}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-xs font-mono hover:border-emerald-500 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? 'PAUSE' : 'AUTO-STEP'}</span>
            </button>
            <button
              onClick={handlePrev}
              aria-label="Previous pipeline stage"
              className="p-1.5 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white transition-colors"
            >
              <SkipBack className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next pipeline stage"
              className="p-1.5 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white transition-colors"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Visual Animation & Telemetry Panel (Heavy Animation Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Dynamic Animated Visual Simulator (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-white p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Ambient Animated Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

            {/* Stage Title & Badge */}
            <div className="relative z-10 flex items-center justify-between border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                  TELEMETRY SIMULATOR
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-mono text-emerald-400">SYNCED</span>
              </div>
            </div>

            {/* Dynamic Diagram Canvas / SVG Schematics */}
            <div className="relative z-10 py-8 my-auto">
              
              {/* STAGE 01: Multi-Horizon Forecasting Diagram */}
              {activeStage === 0 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-center relative overflow-hidden">
                      <Wind className="w-6 h-6 text-emerald-400 mx-auto mb-2 animate-bounce" />
                      <span className="text-[11px] font-mono font-semibold block text-white dark:text-white light:text-zinc-900">Wind Curtailment</span>
                      <span className="text-xs font-mono text-emerald-400 font-bold">+4,200 MW</span>
                      <span className="text-[10px] text-zinc-400 block mt-1">ERCOT Panhandle</span>
                    </div>

                    <div className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
                      <Radio className="w-6 h-6 text-emerald-400 mx-auto mb-2 animate-pulse" />
                      <span className="text-[11px] font-mono font-semibold block text-white dark:text-white light:text-zinc-900">LME Transformer</span>
                      <span className="text-xs font-mono text-emerald-300 font-bold">24h - 48h Scan</span>
                      <span className="text-[10px] text-emerald-400 block mt-1">Predicting Dip</span>
                    </div>

                    <div className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-center relative overflow-hidden">
                      <Sun className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                      <span className="text-[11px] font-mono font-semibold block text-white dark:text-white light:text-zinc-900">Solar Inundation</span>
                      <span className="text-xs font-mono text-amber-400 font-bold">+2,850 MW</span>
                      <span className="text-[10px] text-zinc-400 block mt-1">CAISO Imperial</span>
                    </div>
                  </div>

                  {/* Animated Prediction Curve */}
                  <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 font-mono text-xs">
                    <div className="flex justify-between text-[11px] text-zinc-400 mb-2">
                      <span>48-HOUR PROJECTED LOCATIONAL MARGINAL EMISSIONS (gCO2/kWh)</span>
                      <span className="text-emerald-400 font-bold">Optimal Window: T+14h</span>
                    </div>
                    {/* SVG Curve */}
                    <div className="w-full h-24 relative flex items-end">
                      <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="forecastGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* High carbon area */}
                        <path d="M0,20 Q120,30 200,85 T380,80 T500,15" fill="none" stroke="#10B981" strokeWidth="2.5" />
                        <path d="M0,20 Q120,30 200,85 T380,80 T500,15 L500,100 L0,100 Z" fill="url(#forecastGrad)" />
                        {/* Target Curtailment Window Box */}
                        <rect x="180" y="55" width="160" height="40" fill="#047857" fillOpacity="0.25" stroke="#10B981" strokeDasharray="3 3" />
                      </svg>
                      <div className="absolute left-[40%] bottom-3 text-[10px] font-bold text-emerald-300 bg-zinc-950 px-2 py-0.5 rounded border border-emerald-500/40">
                        SURPLUS CURTAILMENT: -$0.008/kWh
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 02: Ingestion & Checkpointing Diagram */}
              {activeStage === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Active Pods */}
                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 flex-1 w-full text-center">
                      <Cpu className="w-8 h-8 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mx-auto mb-2 animate-pulse" />
                      <span className="text-xs font-mono font-bold block text-white dark:text-white light:text-zinc-900">Active AI Pods</span>
                      <span className="text-[11px] font-mono text-zinc-400">64x H100 SXM5 Ranks</span>
                      <div className="mt-2 text-[10px] font-mono bg-zinc-950 px-2 py-1 rounded text-emerald-400">
                        NCCL Barrier Synchronized
                      </div>
                    </div>

                    {/* Animated Serialization Stream */}
                    <div className="flex flex-col items-center justify-center text-emerald-400 px-2">
                      <RefreshCw className="w-6 h-6 animate-spin mb-1" />
                      <span className="text-[10px] font-mono">CRIU Snapshot</span>
                      <span className="text-[9px] font-mono text-zinc-400">640 GB / 3.2s</span>
                    </div>

                    {/* Checkpoint Buffer */}
                    <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20 flex-1 w-full text-center">
                      <Database className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <span className="text-xs font-mono font-bold block text-white dark:text-white light:text-zinc-900">NVMe-oF Buffer</span>
                      <span className="text-[11px] font-mono text-emerald-300">Decoupled VRAM Layer</span>
                      <div className="mt-2 text-[10px] font-mono bg-zinc-950 px-2 py-1 rounded text-emerald-400">
                        State Preserved (0 FLOPs Lost)
                      </div>
                    </div>
                  </div>

                  {/* Progress Serialization Bar */}
                  <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 font-mono text-xs">
                    <div className="flex justify-between text-[11px] text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-1.5">
                      <span>VRAM CHECKPOINT STATUS</span>
                      <span className="text-emerald-400 font-bold">100% COMPLETE</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 03: Spatio-Temporal Migration Diagram */}
              {activeStage === 2 && (
                <div className="space-y-6">
                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-50">
                    
                    {/* Region A (Origin: Strained/Expensive) */}
                    <div className="p-4 rounded-xl border border-rose-900/50 bg-rose-950/10 text-center flex-1 w-full">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        ORIGIN: PJM REGION
                      </span>
                      <h4 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 mt-2 font-mono">Thermal Peak Grid</h4>
                      <div className="mt-2 text-xs font-mono text-rose-400">
                        <div>Tariff: $0.114/kWh</div>
                        <div>Intensity: 520 gCO2</div>
                      </div>
                      <div className="mt-3 text-[10px] font-mono text-zinc-400 bg-zinc-950 p-1 rounded">
                        PODS EVACUATED
                      </div>
                    </div>

                    {/* Animated Optical Fiber Transit */}
                    <div className="flex flex-col items-center justify-center shrink-0">
                      <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                        <span>400G Optical Transit</span>
                        <ArrowRight className="w-4 h-4 animate-pulse" />
                      </div>
                      <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-emerald-400 w-1/2 rounded-full animate-[ping_1.5s_infinite]"></div>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 mt-1">&lt; 14ms Transit Latency</span>
                    </div>

                    {/* Region B (Destination: Zero-Carbon Curtailment) */}
                    <div className="p-4 rounded-xl border border-emerald-500/60 bg-emerald-950/20 text-center flex-1 w-full">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        TARGET: ERCOT HUB
                      </span>
                      <h4 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 mt-2 font-mono">Curtailed Wind Zone</h4>
                      <div className="mt-2 text-xs font-mono text-emerald-400 font-bold">
                        <div>Tariff: -$0.006/kWh</div>
                        <div>Intensity: 18 gCO2</div>
                      </div>
                      <div className="mt-3 text-[10px] font-mono text-emerald-300 bg-zinc-950 p-1 rounded border border-emerald-500/30">
                        PODS HYDRATED &amp; RUNNING
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* STAGE 04: ESG & Cost Telemetry Diagram */}
              {activeStage === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-center">
                      <span className="text-[10px] font-mono text-zinc-400 block mb-1">POWER BILL REDUCTION</span>
                      <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">83.8%</span>
                      <span className="text-[10px] font-mono text-zinc-400 block mt-1">$956 saved on window</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-center">
                      <span className="text-[10px] font-mono text-zinc-400 block mb-1">SCOPE-2 AVOIDED</span>
                      <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">4.21 MT</span>
                      <span className="text-[10px] font-mono text-zinc-400 block mt-1">Verified CO2e Abated</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-center col-span-2 sm:col-span-1">
                      <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
                      <span className="text-[10px] font-mono text-zinc-300 block">AUDIT CERTIFICATE</span>
                      <span className="text-xs font-mono text-emerald-300 font-bold">GHG Scope 2 Proof</span>
                      <span className="text-[9px] font-mono text-zinc-400 block mt-1">Cryptographically Signed</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-50 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800">Clean Energy Matching: 100% Granular (24/7 CFE)</span>
                    </div>
                    <span className="text-emerald-400 font-bold">LEDGER VERIFIED</span>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Status Ticker */}
            <div className="relative z-10 pt-4 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 gap-2">
              <span className="flex items-center space-x-1.5">
                <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">ORCHESTRATOR STATUS:</span>
                <span className="text-emerald-400 font-semibold">{current.nodes.action}</span>
              </span>
              <span>STATE TRANSIT: OPTIMAL</span>
            </div>
          </div>

          {/* Right: Technical Explanation & Terminal Logs (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Stage Description Card */}
            <div className="p-6 rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-white backdrop-blur-md">
              <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
                STAGE {current.id} / 04
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-950 font-mono mb-3">
                {current.title}
              </h3>
              <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed mb-6 font-sans">
                {current.description}
              </p>

              {/* Specs Table */}
              <div className="space-y-2 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pt-4 font-mono text-xs">
                {current.specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between py-1 border-b border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-100">
                    <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">{spec.label}</span>
                    <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Terminal Log Readout */}
            <div className="p-4 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-900 font-mono text-[11px] shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-zinc-400">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold text-zinc-300">LIVE_SYSTEM_STREAM</span>
                </div>
                <span className="text-[10px] text-emerald-400">LOGS OK</span>
              </div>
              <div className="space-y-1.5 text-zinc-300">
                {current.terminalLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-500 font-bold select-none">&gt;</span>
                    <span className="text-zinc-300 leading-tight">{log}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
