# WattShift — Decarbonized Grid-Aware Compute Orchestrator

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4.svg)](https://tailwindcss.com/)

WattShift is a spatio-temporal workload orchestrator designed for AI research labs, cloud providers, and enterprise compute clusters. It dynamically shifts non-urgent, heavy AI training and batch inference workloads across multi-region clusters to capture zero-carbon or sub-cent per kWh electricity in zones with active renewable curtailment (wind and solar).

---

## ⚡ The Architecture

1. **Multi-Horizon Grid Forecasting**: Transformer-based time-series models predicting localized marginal emissions (LME), spot electricity pricing, and curtailment windows across 50+ energy markets 24–48 hours in advance.
2. **Workload Ingestion & Zero-Loss Checkpointing**: Kubernetes operator coordinating CRIU snapshots and NCCL distributed barrier synchronization with under 1.8% FLOP overhead.
3. **Autonomous Spatio-Temporal Migration**: Routes compute containers over multi-terabit optical fiber directly into data centers situated within curtailed grid pockets.
4. **Verifiable Scope-2 ESG & Cost Telemetry**: Hourly granular clean energy matching (24/7 CFE) issuing cryptographically signed audit certificates and real-time savings statements.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/papitolovesspag/watt_shift.git

# Navigate to directory
cd watt_shift

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 🌐 Supported Energy Markets

Monitors over 50 wholesale energy markets and ISOs:
- **CAISO** (California ISO)
- **ERCOT** (Electric Reliability Council of Texas)
- **PJM Interconnection** (Mid-Atlantic)
- **MISO** (Midcontinent ISO)
- **NYISO** (New York ISO)
- **Nord Pool** (Nordic & Baltic power exchange)
- **TenneT** (Netherlands & Germany)
- **EirGrid** (Ireland)

---

## 🏢 Leadership & Contact

- **Founder & CEO**: David
- **Direct Email**: [david@wattshift.site](mailto:david@wattshift.site)
- **Direct Phone**: [+234 915 078 9240](tel:+2349150789240)
- **Organization**: WattShift Inc.
