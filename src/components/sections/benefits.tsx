"use client";

import { Clock, Rocket, Star, Search, ShieldCheck, Repeat } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save hours per product", description: "What used to take hours of manual work now takes minutes. Focus on selling, not listing." },
  { icon: Rocket, title: "Launch faster on Walmart", description: "Go from product idea to live Walmart listing in a fraction of the time." },
  { icon: Star, title: "Improve listing quality", description: "AI-generated content with complete attributes, proper taxonomy, and structured data." },
  { icon: Search, title: "Increase discoverability", description: "Complete, spec-compliant listings rank higher in Walmart search results." },
  { icon: ShieldCheck, title: "Reduce errors and rework", description: "Automated compliance checks catch issues before they become problems." },
  { icon: Repeat, title: "Scale without limits", description: "One product or ten thousand — the process stays the same. No extra headcount needed." },
];

export function Benefits() {
  return (
    <section id="benefits" className="sec relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <div className="sec-tag justify-center"><span>Benefits</span></div>
          <h2 className="text-text mb-4 text-balance">Designed for <span className="grad-blue">scale</span></h2>
          <p className="sec-sub mx-auto text-center">Whether you have 10 products or 10,000 — the workflow stays simple.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((item, i) => (
            <div key={i} className="card p-6 group">
              <div className="w-11 h-11 rounded-xl bg-wm-blue-dim flex items-center justify-center mb-5 group-hover:bg-wm-blue/20 transition-colors">
                <item.icon className="w-5 h-5 text-wm-blue-light" />
              </div>
              <h3 className="text-text text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
