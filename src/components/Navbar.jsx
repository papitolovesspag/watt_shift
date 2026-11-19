import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Zap, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Paradox', href: '#the-paradox' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Pricing & ROI', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
      scrolled 
        ? 'bg-zinc-950/90 dark:bg-zinc-950/90 light:bg-white/95 backdrop-blur-md border-zinc-800 dark:border-zinc-800 light:border-zinc-200 shadow-sm' 
        : 'bg-transparent border-transparent'
    }`}>
      {/* Top telemetry ticker strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 text-[11px] font-mono tracking-wider border-b border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-200/80 bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-zinc-100 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-semibold">GRID TELEMETRY ACTIVE</span>
            <span>• CAISO: -12.4% LME</span>
            <span>• ERCOT: 4.8 GW CURTAILED</span>
            <span>• NORD POOL: 0.012 €/kWh</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>K8s OPERATOR v2.4-STABLE</span>
          </span>
          <span>LATENCY OFFSET: &lt; 14ms</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 dark:border-zinc-700 light:border-zinc-300 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/50 transition-colors shadow-inner">
            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6L8 18L12 10L16 18L20 6" />
              <path d="M14 6L18 2M18 2H14M18 2V6" stroke="#00FF66" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-lg text-white dark:text-white light:text-zinc-900 flex items-center gap-1 font-mono">
              WATT<span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">SHIFT</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-500 light:text-zinc-500 -mt-1">
              Grid-Aware Compute
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-7 text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="p-2 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-900 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all duration-150 shadow-md shadow-emerald-950/20 active:scale-95"
          >
            <span>Deploy Pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Theme"
            className="p-2 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 text-zinc-400"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-white px-5 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-base text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-zinc-900 dark:hover:bg-zinc-900 light:hover:bg-zinc-100 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-emerald-500 font-mono text-xs font-semibold text-zinc-950 uppercase tracking-wider"
            >
              <span>Deploy Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
