"use client";

import {
  Layers, GitBranch, Search, Image, TrendingUp, CheckCircle2, Bot, Tag, FileText, BarChart3,
} from "lucide-react";

const specRequirements = [
  { icon: Layers, title: "70+ category-specific attributes", description: "Each product category requires dozens of structured fields for completeness." },
  { icon: GitBranch, title: "Granular product taxonomy", description: "Precise categorization using Walmart's detailed category tree for accurate placement." },
  { icon: Search, title: "Structured attributes for search", description: "Navigation-ready data that improves discoverability and search accuracy." },
  { icon: Image, title: "High-quality images & content", description: "Complete product content with proper image specs and detailed descriptions." },
  { icon: TrendingUp, title: "Full attributes = higher ranking", description: "Listings with complete attributes rank significantly higher in Walmart search results." },
];

const howWeHelp = [
  { icon: Bot, text: "Automatically fills required and recommended attributes" },
  { icon: Tag, text: "Maps product data to correct Walmart taxonomy" },
  { icon: FileText, text: "Generates compliant titles and descriptions" },
  { icon: BarChart3, text: "Prepares listings for better visibility and performance" },
];

export function ItemSpec() {
  return (
    <section id="item-spec" className="sec relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <div className="sec-tag justify-center"><span>Walmart Item Spec 5.0</span></div>
          <h2 className="text-text mb-4 text-balance">Built for Walmart&apos;s <span className="grad-blue">latest listing standard</span></h2>
          <p className="sec-sub mx-auto text-center">Walmart Item Spec 5.0 requires structured, complete, and accurate product data to ensure visibility and performance on the marketplace.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
          {specRequirements.map((req, i) => (
            <div key={i} className="card p-5 group">
              <div className="w-10 h-10 rounded-lg bg-wm-spark-dim flex items-center justify-center mb-4 group-hover:bg-wm-spark/20 transition-colors">
                <req.icon className="w-5 h-5 text-wm-spark" />
              </div>
              <h3 className="text-text text-base font-semibold mb-2">{req.title}</h3>
              <p className="text-sm text-muted2 leading-relaxed">{req.description}</p>
            </div>
          ))}
          <div className="card p-5 border-wm-blue/30 bg-gradient-to-br from-wm-blue-dim to-bg-card flex flex-col justify-center">
            <CheckCircle2 className="w-8 h-8 text-wm-blue-light mb-3" />
            <h3 className="text-text text-base font-semibold mb-2">24.online handles all of this</h3>
            <p className="text-sm text-muted2 leading-relaxed">Automatically. From a single product link.</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-text text-center text-xl mb-8">How <span className="grad-blue">24.online</span> handles compliance</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {howWeHelp.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-card bg-bg-surface border border-border hover:border-wm-blue/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-wm-blue-dim flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-wm-blue-light" />
                </div>
                <p className="text-sm text-text font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
