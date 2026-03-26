"use client";

import {
  Clock,
  FileWarning,
  ListChecks,
  Eye,
  ArrowRight,
  Link2,
  Table2,
  MapPin,
  HelpCircle,
} from "lucide-react";

const problems = [
  { icon: Clock, text: "Manual listing creation takes hours per SKU" },
  { icon: FileWarning, text: "Strict compliance requirements (Item Spec 5.0)" },
  { icon: ListChecks, text: "Dozens of required attributes per product" },
  { icon: Eye, text: "Incomplete listings lead to low visibility and poor search rank" },
];

const solutions = [
  { icon: Link2, text: "From 1 link to a full listing" },
  { icon: Table2, text: "No spreadsheets" },
  { icon: MapPin, text: "No manual attribute mapping" },
  { icon: HelpCircle, text: "No compliance guesswork" },
];

export function WhyThisMatters() {
  return (
    <section className="sec relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="sec-tag"><span>The Challenge</span></div>
            <h2 className="text-text mb-6">Why sellers struggle <span className="grad-spark">with Walmart</span></h2>
            <p className="text-muted2 mb-8 max-w-lg">Walmart Marketplace is one of the fastest-growing e-commerce channels — but listing requirements are demanding. Most sellers get stuck here.</p>
            <div className="space-y-4">
              {problems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-card bg-bg-surface border border-border group hover:border-border-bright transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-sm text-muted2 leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="sec-tag"><span>The Solution</span></div>
            <h2 className="text-text mb-6">What changes <span className="grad-blue">with 24.online</span></h2>
            <p className="text-muted2 mb-8 max-w-lg">We replace the entire manual workflow with a single AI-powered pipeline. One link in — one listing out.</p>
            <div className="space-y-4">
              {solutions.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-card bg-bg-surface border border-border group hover:border-wm-blue/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-wm-blue-dim flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-wm-blue-light" />
                  </div>
                  <p className="text-sm text-text leading-relaxed pt-2 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <a href="#try-it" className="btn btn-primary mt-8 inline-flex items-center gap-2">
              Try It Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
