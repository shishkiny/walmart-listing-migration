"use client";

import { Link2, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Paste your product link",
    description:
      "Works with Amazon, Shopify, Etsy, and more. Just paste the URL — we handle the rest.",
    detail: "Any public product URL",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI extracts and structures your data",
    description:
      "Titles, attributes, images, descriptions — automatically mapped to Walmart's taxonomy and requirements.",
    detail: "70+ attributes filled",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Get a Walmart-ready listing",
    description:
      "Structured, compliant with Item Spec 5.0, and ready to publish. Review, adjust, and go live.",
    detail: "Spec 5.0 compliant",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="sec relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <div className="sec-tag justify-center">
            <span>How It Works</span>
          </div>
          <h2 className="text-text mb-4 text-balance">
            Three steps. <span className="grad-blue">One listing.</span>
          </h2>
          <p className="sec-sub mx-auto text-center">
            No spreadsheets. No manual mapping. No compliance guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%+0px)] w-6 h-px border-t border-dashed border-border-bright z-0" />
              )}
              <div className="card p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-grotesk font-bold text-border-bright group-hover:text-wm-blue/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-wm-blue-dim flex items-center justify-center group-hover:bg-wm-blue/20 transition-colors">
                    <step.icon className="w-5 h-5 text-wm-blue-light" />
                  </div>
                </div>
                <h3 className="text-text text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted2 leading-relaxed flex-1">{step.description}</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <span className="text-xs font-semibold text-wm-blue-light tracking-wide">{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#try-it" className="btn btn-secondary inline-flex items-center gap-2">
            Try It Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
