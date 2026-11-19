import React, { useState, useEffect } from 'react';
import { Server, Activity, Wind, Sun, AlertTriangle, ArrowRight, CheckCircle2, RefreshCw, Cpu, Database } from 'lucide-react';

export default function LiveTelemetryCard() {
  const [activeMarketIndex, setActiveMarketIndex] = useState(0);
  const [migrating, setMigrating] = useState(false);
  const [stats, setStats] = useState({
    totalCurtailedDispatched: 7.3,
    avgPriceSaved: 38.4,
    carbonOffsetToday: 412.8,
  });

  const markets = [
    {
      id: 'ercot',
      name: 'ERCOT (Texas Panhandle)',
      source: 'Wind Surplus',
      curtailment: '3,840 MW',
      price: '-$0.008/kWh',
      lme: '18 gCO2/kWh',
      status: 'CURTAILED - OPTIMAL',
      workload: '2,048 H100 SXM5',
      allocation: '88% Capacity',
      icon: Wind,
      color: 'emerald',
    },
    {
      id: 'caiso',
      name: 'CAISO (Desert Solar)',
      source: 'Solar Inundation',
      curtailment: '2,420 MW',
      price: '$0.004/kWh',
      lme: '32 gCO2/kWh',
      status: 'SURPLUS - ACTIVE',
      workload: '1,536 H100 SXM5',
      allocation: '74% Capacity',
      icon: Sun,
      color: 'emerald',
    },
    {
      id: 'nordpool',
      name: 'Nord Pool (NO-2 / SE-1)',
      source: 'Hydro / Offshore Wind',
      curtailment: '1,890 MW',
      price: '€0.012/kWh',
      lme: '14 gCO2/kWh',
      status: 'HYDRO BASE - ACTIVE',
      workload: '1,024 H100 SXM5',
      allocation: '65% Capacity',
      icon: Wind,
      color: 'emerald',
    },
    {
      id: 'pjm',
      name: 'PJM Interconnection (Mid-Atl)',
      source: 'Thermal / Gas Peaker',
      curtailment: '0 MW (Peak Strain)',
      price: '$0.114/kWh',
      lme: '520 gCO2/kWh',
      status: 'DIRTY PEAK - EVACUATED',
      workload: '0 Workloads',
      allocation: 'Workloads Migrated',
      icon: AlertTriangle,
      color: 'rose',
    },
  ];

  // Auto cycle or pulse simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        totalCurtailedDispatched: +(prev.totalCurtailedDispatched + 0.02).toFixed(2),
        avgPriceSaved: +(38.0 + Math.sin(Date.now() / 5000) * 1.5).toFixed(1),
        carbonOffsetToday: +(prev.carbonOffsetToday + 0.1).toFixed(1),
      }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const triggerMigrationPulse = () => {
    setMigrating(true);
    setTimeout(() => {
      setMigrating(false);
      setActiveMarketIndex((prev) => (prev + 1) % (markets.length - 1));
    }, 1200);
  };

  const currentMarket = markets[activeMarketIndex];

  return (
    <div className="rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950/90 dark:bg-zinc-950/90 light:bg-white shadow-2xl p-5 md:p-6 backdrop-blur-xl transition-all">
      {/* Console Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <span className="text-xs font-mono font-bold tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
            WATTSHIFT_ORCHESTRATOR // TELEMETRY CONSOLE
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={triggerMigrationPulse}
            disabled={migrating}
            className="flex items-center space-x-1.5 px-3 py-1 text-xs font-mono rounded bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:border-emerald-500 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3 h-3 ${migrating ? 'animate-spin text-emerald-400' : ''}`} />
            <span>{migrating ? 'MIGRATING CHECKPOINTS...' : 'TEST MIGRATION EVENT'}</span>
          </button>
        </div>
      </div>

      {/* Live Market Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-4 pb-4">
        {markets.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => setActiveMarketIndex(idx)}
            className={`text-left p-3 rounded-xl border transition-all ${
              activeMarketIndex === idx
                ? 'border-emerald-500/80 bg-emerald-950/20 dark:bg-emerald-950/20 light:bg-emerald-50'
                : 'border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                {m.id.toUpperCase()}
              </span>
              {m.color === 'emerald' ? (
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              )}
            </div>
            <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-900 truncate">
              {m.name.split(' ')[0]}
            </div>
            <div className="text-[11px] font-mono font-medium text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mt-0.5">
              {m.price}
            </div>
          </button>
        ))}
      </div>

      {/* Active Market Telemetry View */}
      <div className="p-4 rounded-xl border border-zinc-800/90 dark:border-zinc-800/90 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100/70 font-mono text-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-3 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 gap-2">
          <div>
            <div className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-[11px]">ACTIVE CLUSTER TARGET</div>
            <div className="text-base font-bold text-white dark:text-white light:text-zinc-950 flex items-center gap-2">
              <span>{currentMarket.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                currentMarket.color === 'emerald' 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
              }`}>
                {currentMarket.status}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600">ESTIMATED LME (SCOPE-2)</span>
            <div className="text-emerald-400 font-bold">{currentMarket.lme}</div>
          </div>
        </div>

        {/* Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3.5">
          <div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">GRID CURTAILMENT</span>
            <span className="text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">{currentMarket.curtailment}</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">SPOT PRICE</span>
            <span className="text-sm font-semibold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">{currentMarket.price}</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">GPU ALLOCATION</span>
            <span className="text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">{currentMarket.workload}</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">ENERGY SOURCE</span>
            <span className="text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">{currentMarket.source}</span>
          </div>
        </div>

        {/* Migration Stream Indicator */}
        {migrating && (
          <div className="mt-3.5 p-2 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center space-x-2 text-emerald-400 text-[11px]">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>CRITICAL: Initiating atomic CRIU checkpointing across 1,024 pods → Dynamic route re-established to clean curtailment node.</span>
          </div>
        )}
      </div>

      {/* Live System Counter Bottom Bar */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 pt-3 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 text-center font-mono">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">
            Grid Curtailed MWh
          </span>
          <span className="text-xs sm:text-sm font-bold text-emerald-400">
            {stats.totalCurtailedDispatched} GW / 24h
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">
            Avg Compute Power Saved
          </span>
          <span className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-zinc-900">
            {stats.avgPriceSaved}% Arbitraged
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">
            CO2e Abated Today
          </span>
          <span className="text-xs sm:text-sm font-bold text-emerald-400">
            {stats.carbonOffsetToday} MT
          </span>
        </div>
      </div>
    </div>
  );
}
