"use client";

import { Globe, Bot, Workflow } from "lucide-react";

const trustPoints = [
  { icon: Globe, title: "Used by global brands and marketplace teams", description: "Enterprise clients across 30+ countries trust 24.online for their e-commerce automation." },
  { icon: Bot, title: "Powered by AI agents trained on marketplace data", description: "Purpose-built AI models — not generic LLMs. Trained on millions of real e-commerce listings." },
  { icon: Workflow, title: "Designed for real-world listing workflows", description: "18 years of e-commerce operations experience built into every feature and workflow." },
];

export function Trust() {
  return (
    <section className="sec relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <div className="sec-tag justify-center"><span>About 24.online</span></div>
          <h2 className="text-text mb-4 text-balance">Built by <span className="grad-gold">e-commerce operators</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustPoints.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-gold-dim border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:border-gold/40 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-text text-base font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted2 leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-card overflow-hidden max-w-4xl mx-auto">
          {[{ number: "18+", label: "Years in e-commerce" }, { number: "100+", label: "Marketplace integrations" }, { number: "300K+", label: "SKUs processed daily" }, { number: "30+", label: "Countries served" }].map((stat, i) => (
            <div key={i} className="bg-bg-card p-6 text-center">
              <p className="text-2xl md:text-3xl font-grotesk font-bold grad-blue">{stat.number}</p>
              <p className="text-xs text-muted mt-1 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
