import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GridParadox from './components/GridParadox';
import HowItWorks from './components/HowItWorks';
import ArchitectureSpecs from './components/ArchitectureSpecs';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 text-zinc-100 dark:text-zinc-100 light:text-zinc-900 transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <GridParadox />
          <HowItWorks />
          <ArchitectureSpecs />
          <Pricing />
          <AboutUs />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
