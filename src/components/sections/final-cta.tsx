"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="sec relative overflow-hidden">
      <div className="hero-glow bg-wm-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.08]" />
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="pill-spark mx-auto mb-6 w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            Free for sellers
          </div>
          <h2 className="text-text mb-5 text-balance">Start your <span className="grad-blue">Walmart expansion</span></h2>
          <p className="text-lg text-muted2 mb-10 max-w-xl mx-auto leading-relaxed">Paste your product URL and get a Walmart-ready listing in minutes. No commitment. No credit card. Just results.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#try-it" className="btn btn-primary text-base px-8 py-4 gap-2">Create Listing for Free<ArrowRight className="w-5 h-5" /></a>
            <a href="#how-it-works" className="btn btn-secondary text-base px-8 py-4">Learn More</a>
          </div>
          <p className="text-xs text-muted mt-6">Free for sellers · No login required to try</p>
        </div>
      </div>
    </section>
  );
}
