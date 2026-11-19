import React, { useState, useId } from 'react';
import { Check, ArrowRight, Calculator, Sparkles, Shield, DollarSign, Zap, TrendingUp } from 'lucide-react';

export default function Pricing() {
  // Slider state: number of H100 GPUs (default 256)
  const [gpuCount, setGpuCount] = useState(256);
  const sliderId = useId();

  // Calculations based on industry physics:
  // 1x H100 SXM5 node + cooling ~ 1.0 kW continuous = 720 kWh / month (~0.72 MWh)
  const powerPerGpuKw = 0.95; // kW
  const hoursPerMonth = 720;
  const monthlyMWh = (gpuCount * powerPerGpuKw * hoursPerMonth) / 1000;
  
  // Standard grid tariff vs WattShift curtailed tariff
  const standardGridRatePerMWh = 110; // $110/MWh ($0.11/kWh)
  const wattShiftRatePerMWh = 22;   // $22/MWh ($0.022/kWh)
  
  const standardMonthlyCost = monthlyMWh * standardGridRatePerMWh;
  const wattShiftMonthlyCost = monthlyMWh * wattShiftRatePerMWh;
  const grossMonthlySavings = standardMonthlyCost - wattShiftMonthlyCost;
  
  // 25% average gain-share fee
  const netMonthlyClientSavings = grossMonthlySavings * 0.75;
  const netAnnualClientSavings = netMonthlyClientSavings * 12;

  // Carbon abatement: average grid 420 gCO2/kWh vs WattShift clean curtailment 25 gCO2/kWh = 395 gCO2/kWh saved
  const annualCo2TonsSaved = (monthlyMWh * 12 * 395 * 1000) / 1000000;

  const tiers = [
    {
      name: 'Developer / Pilot',
      badge: 'SELF-SERVE & EVALUATION',
      price: '$0',
      period: 'base fee',
      savingsShare: '+ 25% realized energy savings-share',
      description: 'Ideal for AI startups and research labs evaluating grid-aware compute on pilot clusters.',
      highlight: false,
      features: [
        'Up to 64 GPU / TPU instances',
        '2 regional grid markets (ERCOT, CAISO)',
        'Standard Kubernetes CRIU operator',
        'Hourly checkpointing schedules',
        'Community Discord & API documentation',
        'Automated Scope-2 CSV export',
      ],
      ctaText: 'Deploy Developer Pilot',
      ctaHref: '#contact',
    },
    {
      name: 'Scale / Multi-Cluster',
      badge: 'MOST POPULAR FOR AI TEAMS',
      price: '$1,490',
      period: 'per month',
      savingsShare: '+ 20% realized energy savings-share',
      description: 'Engineered for scaling AI labs and SaaS providers running continuous distributed model training.',
      highlight: true,
      features: [
        'Up to 512 GPU instances',
        'All 50+ wholesale grid markets unlocked',
        '24–48h Predictive Transformer LME model',
        'Sub-second barrier sync checkpointing',
        '99.9% Checkpoint SLA guarantee',
        'Datadog, Prometheus & Grafana plugins',
        'Dedicated Slack support channel with SREs',
      ],
      ctaText: 'Start Scale Cluster',
      ctaHref: '#contact',
    },
    {
      name: 'Enterprise Grid',
      badge: 'HYPERSCALERS & ENTERPRISES',
      price: 'Custom',
      period: 'annual license',
      savingsShare: 'Volume-negotiated gain-share',
      description: 'For hyperscalers, cloud operators, and sovereign AI clusters requiring custom utility interconnection.',
      highlight: false,
      features: [
        'Unlimited GPU / TPU clusters',
        'On-prem, bare-metal & hybrid private cloud',
        'Direct utility interconnection telemetry API',
        'Custom multi-terabit optical transit routing',
        'Audit-grade cryptographic ESG ledger',
        'Custom SLA with dedicated 24/7 mission control',
        'Bespoke ML framework adapters (Slurm, Ray)',
      ],
      ctaText: 'Inquire for Enterprise',
      ctaHref: '#contact',
    },
  ];

  return (
    <section id="pricing" className="py-24 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium mb-3">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>VALUE-ALIGNED PRICING MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 font-mono uppercase">
            Transparent Pricing &amp; ROI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 dark:text-zinc-300 light:text-zinc-600">
            We win only when you save. Choose a plan tailored to your cluster scale, backed by our performance-based savings-share model.
          </p>
        </div>

        {/* Interactive Savings & ROI Calculator */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold mb-1">
                <Calculator className="w-4 h-4" />
                <span>INTERACTIVE ROI SIMULATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-950 font-mono">
                Estimate Your Projected Grid Arbitrage
              </h3>
            </div>
            <div className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              *Model assumes 720h/mo utilization @ standard $0.11/kWh vs $0.022/kWh curtailed.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Slider Control (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={sliderId} className="text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                    Active GPU Cluster Capacity:
                  </label>
                  <span className="text-lg font-bold font-mono text-emerald-400">
                    {gpuCount} GPUs
                  </span>
                </div>
                <input
                  id={sliderId}
                  type="range"
                  min="32"
                  max="2048"
                  step="32"
                  value={gpuCount}
                  onChange={(e) => setGpuCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-2">
                  <span>32 GPUs</span>
                  <span>512 GPUs</span>
                  <span>1,024 GPUs</span>
                  <span>2,048 GPUs</span>
                </div>
              </div>

              {/* Cluster Energy Footprint */}
              <div className="p-4 rounded-xl border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-zinc-50 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Monthly Power Draw:</span>
                  <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-900 font-bold">{Math.round(monthlyMWh).toLocaleString()} MWh / mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Standard Grid Spend:</span>
                  <span className="text-rose-400 font-bold">${Math.round(standardMonthlyCost).toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between border-t border-zinc-800/60 pt-2">
                  <span className="text-zinc-400">WattShift Grid Cost:</span>
                  <span className="text-emerald-400 font-bold">${Math.round(wattShiftMonthlyCost).toLocaleString()} / mo</span>
                </div>
              </div>
            </div>

            {/* Calculated Results Outputs (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dollar Savings */}
              <div className="p-5 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 dark:bg-emerald-950/20 light:bg-emerald-50 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-bold block mb-1">
                    NET ANNUAL COST SAVINGS
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white dark:text-white light:text-zinc-950">
                    ${Math.round(netAnnualClientSavings).toLocaleString()}
                  </div>
                  <span className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 block">
                    Net savings after gain-share fee
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500/30 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700">Effective Bill Reduction:</span>
                  <span className="text-emerald-400 font-bold">~60.0%</span>
                </div>
              </div>

              {/* Carbon Mitigation */}
              <div className="p-5 rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold block mb-1">
                    ANNUAL SCOPE-2 CO2 ABATED
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                    {Math.round(annualCo2TonsSaved).toLocaleString()} <span className="text-lg">MT</span>
                  </div>
                  <span className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 block">
                    Verified clean energy matching
                  </span>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Equiv Passenger Vehicles:</span>
                  <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-900 font-bold">{Math.round(annualCo2TonsSaved / 4.6).toLocaleString()} cars/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Tiers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between relative transition-all ${
                tier.highlight
                  ? 'border-emerald-500/80 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white shadow-2xl shadow-emerald-950/30'
                  : 'border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-white'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 text-[10px] font-mono font-bold tracking-wider uppercase">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.highlight && (
                  <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 uppercase tracking-wider mb-2 font-semibold">
                    {tier.badge}
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-950 font-mono mb-2">
                  {tier.name}
                </h3>

                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 min-h-[36px] mb-6">
                  {tier.description}
                </p>

                <div className="pb-6 mb-6 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 font-mono">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-zinc-950">
                      {tier.price}
                    </span>
                    <span className="text-xs text-zinc-400">{tier.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 mt-1">
                    {tier.savingsShare}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 font-mono text-xs">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2.5 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200">
                <a
                  href={tier.ctaHref}
                  className={`flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                    tier.highlight
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/20 active:scale-95'
                      : 'border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-white dark:text-white light:text-zinc-900 hover:border-emerald-500/50'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
