import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ShieldCheck, Clock, MapPin, Building2 } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    clusterSize: '64-256 H100s',
    workloadType: 'LLM Pretraining / Batch',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Enterprise Engagement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 font-mono uppercase">
              Contact WattShift
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-md font-sans">
            Connect with our engineering and deployment team to evaluate grid-aware workload orchestration on your clusters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Protocol (Strictly 1 Email & 1 Phone Placeholder) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-zinc-950 font-mono mb-4">
                Direct Communications
              </h3>
              <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed mb-6 font-sans">
                Our technical team supports inquiries regarding cluster compatibility, ISO market coverage, CRIU integration, and customized savings-share pilots.
              </p>

              {/* Verified Contact Details - Exactly 1 Email & 1 Phone */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* 1 Corporate Email */}
                <div className="p-4 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-400 block font-semibold">Corporate Email</span>
                    <a
                      href="mailto:david@wattshift.site"
                      className="text-sm font-bold text-white dark:text-white light:text-zinc-900 hover:text-emerald-400 transition-colors"
                    >
                      david@wattshift.site
                    </a>
                    <span className="block text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-0.5">
                      Direct Executive Inbox
                    </span>
                  </div>
                </div>

                {/* 1 Phone Number */}
                <div className="p-4 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-400 block font-semibold">Direct Telephone</span>
                    <a
                      href="tel:+2349150789240"
                      className="text-sm font-bold text-white dark:text-white light:text-zinc-900 hover:text-emerald-400 transition-colors font-mono"
                    >
                      +234 915 078 9240
                    </a>
                    <span className="block text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-0.5">
                      Global Direct Line
                    </span>
                  </div>
                </div>

              </div>

              {/* Protocol Note */}
              <div className="mt-8 pt-6 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 font-mono text-xs text-zinc-400 space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SLA Response: Under 4 business hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mutual NDA executed upon initial discovery call</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white backdrop-blur-xl">
              
              {submitted ? (
                <div className="py-12 text-center font-mono">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-zinc-950 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-600 max-w-md mx-auto mb-6 font-sans">
                    Thank you for contacting WattShift. An infrastructure engineer will review your cluster specifications and reply within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-xs text-zinc-200 hover:text-white"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-1.5 font-medium">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Jordan Hayes"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 text-white dark:text-white light:text-zinc-900 text-sm font-sans focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-1.5 font-medium">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="j.hayes@ailab.org"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 text-white dark:text-white light:text-zinc-900 text-sm font-sans focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-1.5 font-medium">
                        ORGANIZATION / AI LAB *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Apex Research Systems"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 text-white dark:text-white light:text-zinc-900 text-sm font-sans focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-1.5 font-medium">
                        ACTIVE GPU CLUSTER SIZE
                      </label>
                      <select
                        value={formData.clusterSize}
                        onChange={(e) => setFormData({ ...formData, clusterSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 text-white dark:text-white light:text-zinc-900 text-sm font-sans focus:outline-none focus:border-emerald-500"
                      >
                        <option>32 – 64 GPUs</option>
                        <option>64 – 256 GPUs</option>
                        <option>256 – 1,024 GPUs</option>
                        <option>1,024+ GPUs (Hyperscale)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-1.5 font-medium">
                      WORKLOAD TOLERANCE &amp; MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current distributed training framework (PyTorch / Megatron / Ray), primary cloud zones, and tolerance for checkpoint migrations..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 text-white dark:text-white light:text-zinc-900 text-sm font-sans focus:outline-none focus:border-emerald-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <span>Transmit Infrastructure Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
