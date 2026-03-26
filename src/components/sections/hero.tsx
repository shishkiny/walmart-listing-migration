"use client";

import { useState } from "react";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

export function Hero() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("try-it");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const input = el.querySelector("input") as HTMLInputElement;
      if (input && url) {
        input.value = url;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="hero-glow bg-wm-blue top-1/4 -left-40" />
      <div className="hero-glow bg-wm-spark top-1/3 right-[-200px] opacity-[0.08]" />
      <div className="absolute inset-0 grid-bg" />

      <div className="container-wide relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 pill mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Zap className="w-3.5 h-3.5" />
            <span>AI-Powered Listing Migration</span>
          </div>

          <h1 className="text-text mb-6 animate-fade-up text-balance" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Expand to Walmart — <span className="grad-blue">without rebuilding</span> your listings
          </h1>

          <p className="text-lg md:text-xl text-muted2 max-w-2xl mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            Paste your product link. Get a Walmart-ready listing in minutes. Structured, compliant, ready to publish.
          </p>

          <form onSubmit={handleSubmit} className="animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <div className="flex-1 relative group">
                <div className="absolute inset-0 rounded-button bg-gradient-to-r from-wm-blue/20 to-wm-spark/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative flex items-center bg-bg-card border border-border-bright rounded-button overflow-hidden transition-all group-focus-within:border-wm-blue group-focus-within:shadow-[0_0_20px_rgba(0,113,220,0.15)]">
                  <Globe className="w-5 h-5 text-muted ml-4 flex-shrink-0" />
                  <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste your Amazon, Shopify, or Etsy product URL" className="w-full bg-transparent text-text px-4 py-4 text-sm placeholder:text-muted outline-none" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary whitespace-nowrap gap-2">
                Create My Listing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-6 mt-8 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
            <div className="flex items-center gap-2 text-sm text-muted">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Built on Walmart Item Spec 5.0</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Zap className="w-4 h-4 text-wm-spark" />
              <span>Free for sellers</span>
            </div>
          </div>

          <a href="#how-it-works" className="inline-flex items-center gap-2 mt-6 text-sm text-muted2 hover:text-wm-blue-light transition-colors no-underline group animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            See How It Works
          </a>
        </div>

        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[340px]">
          <div className="card p-5 animate-float">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-wm-blue-dim flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--wm-blue-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Generated Listing</p>
                <p className="text-sm text-text font-medium">Walmart-Ready</p>
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="h-2.5 bg-border rounded-full w-full shimmer-bg" />
              <div className="h-2.5 bg-border rounded-full w-4/5 shimmer-bg" style={{ animationDelay: "0.3s" }} />
              <div className="h-2.5 bg-border rounded-full w-3/5 shimmer-bg" style={{ animationDelay: "0.6s" }} />
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-success font-medium">Spec 5.0 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
