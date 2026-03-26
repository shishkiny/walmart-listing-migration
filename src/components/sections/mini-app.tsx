"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Loader2, CheckCircle2, Image as ImageIcon, Tag, FileText, Layers, ShieldCheck, Copy, ExternalLink, Sparkles, Globe,
} from "lucide-react";

const mockListing = {
  title: "Sony WH-1000XM5 Wireless Noise Canceling Over-Ear Headphones — 30-Hour Battery, Multipoint Connection, Alexa Built-In — Black",
  category: "Electronics > Audio > Headphones > Over-Ear Headphones",
  brand: "Sony", price: "$348.00",
  attributes: [
    { key: "Brand", value: "Sony" }, { key: "Model", value: "WH-1000XM5" },
    { key: "Color", value: "Black" }, { key: "Connectivity", value: "Bluetooth 5.2, 3.5mm" },
    { key: "Battery Life", value: "30 hours" }, { key: "Noise Canceling", value: "Active (ANC)" },
    { key: "Weight", value: "250g" }, { key: "Microphone", value: "Built-in, Beamforming" },
    { key: "Foldable", value: "Yes" }, { key: "Warranty", value: "1 Year Manufacturer" },
  ],
  images: 4,
  description: "Experience industry-leading noise cancellation with the Sony WH-1000XM5. Featuring Auto NC Optimizer, 30-hour battery life, and crystal-clear hands-free calling with advanced beamforming microphones.",
  bulletPoints: [
    "Industry-leading noise cancellation with Auto NC Optimizer",
    "30 hours battery life with quick charge (3 min = 3 hours)",
    "Multipoint connection — switch between two devices seamlessly",
    "Speak-to-Chat automatically pauses music when you talk",
  ],
  complianceScore: 94,
};

type Phase = "idle" | "extracting" | "mapping" | "generating" | "done";
const phases: { key: Phase; label: string; duration: number }[] = [
  { key: "extracting", label: "Extracting product data...", duration: 1800 },
  { key: "mapping", label: "Mapping to Walmart taxonomy...", duration: 1500 },
  { key: "generating", label: "Generating compliant listing...", duration: 2000 },
];

export function MiniApp() {
  const [url, setUrl] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const isProcessing = phase !== "idle" && phase !== "done";

  const handleGenerate = async () => {
    if (!url.trim() || isProcessing) return;
    setPhase("extracting"); setProgress(0);
    for (let i = 0; i < phases.length; i++) {
      const p = phases[i]; setPhase(p.key);
      const startProgress = (i / phases.length) * 100;
      const endProgress = ((i + 1) / phases.length) * 100;
      const steps = 20; const stepTime = p.duration / steps;
      for (let s = 0; s <= steps; s++) {
        await new Promise((r) => setTimeout(r, stepTime));
        setProgress(startProgress + ((endProgress - startProgress) * s) / steps);
      }
    }
    setPhase("done"); setProgress(100);
    setTimeout(() => { resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 300);
  };

  const handleCopy = () => {
    const text = `Title: ${mockListing.title}\nCategory: ${mockListing.category}\nBrand: ${mockListing.brand}\nPrice: ${mockListing.price}\n\nAttributes:\n${mockListing.attributes.map((a) => `${a.key}: ${a.value}`).join("\n")}\n\nDescription:\n${mockListing.description}\n\nKey Features:\n${mockListing.bulletPoints.map((b) => `• ${b}`).join("\n")}`;
    navigator.clipboard.writeText(text); setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="try-it" className="sec relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="hero-glow bg-wm-blue bottom-0 left-1/4 opacity-10" />
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <div className="sec-tag justify-center"><span>Try It Now</span></div>
          <h2 className="text-text mb-4 text-balance">See it in <span className="grad-blue">action</span></h2>
          <p className="sec-sub mx-auto text-center">Paste any product URL. Our AI will generate a Walmart-ready listing in seconds.</p>
        </div>
        <div className="max-w-3xl mx-auto mb-8">
          <div className="card p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative group">
                <div className="relative flex items-center bg-bg border border-border-bright rounded-button overflow-hidden transition-all focus-within:border-wm-blue focus-within:shadow-[0_0_24px_rgba(0,113,220,0.12)]">
                  <Globe className="w-5 h-5 text-muted ml-4 flex-shrink-0" />
                  <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://amazon.com/dp/B0BX2L8PBS" className="w-full bg-transparent text-text px-4 py-4 text-sm placeholder:text-muted outline-none font-mono" disabled={isProcessing} onKeyDown={(e) => e.key === "Enter" && handleGenerate()} />
                </div>
              </div>
              <button onClick={handleGenerate} disabled={isProcessing || !url.trim()} className="btn btn-primary whitespace-nowrap gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                {isProcessing ? (<><Loader2 className="w-4 h-4 animate-spin" />Processing...</>) : (<><Sparkles className="w-4 h-4" />Generate Listing</>)}
              </button>
            </div>
            <p className="text-xs text-muted mt-3 text-center">No login required to try</p>
            {isProcessing && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-wm-blue-light font-medium">{phases.find((p) => p.key === phase)?.label}</span>
                  <span className="text-xs text-muted font-mono">{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-wm-blue to-wm-blue-light rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}
          </div>
        </div>
        {phase === "done" && (
          <div ref={resultRef} className="max-w-4xl mx-auto animate-fade-up">
            <div className="card overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-border bg-bg-surface">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success-dim flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-success" /></div>
                  <div><p className="text-sm font-semibold text-text">Listing Generated Successfully</p><p className="text-xs text-muted">Walmart Item Spec 5.0 Compliant</p></div>
                </div>
                <button onClick={handleCopy} className="btn btn-secondary text-xs py-2 px-3 gap-1.5">
                  {copied ? (<><CheckCircle2 className="w-3.5 h-3.5 text-success" />Copied</>) : (<><Copy className="w-3.5 h-3.5" />Copy</>)}
                </button>
              </div>
              <div className="p-5 md:p-8 space-y-8">
                <div><div className="flex items-center gap-2 mb-2"><FileText className="w-4 h-4 text-wm-blue-light" /><span className="text-xs font-semibold text-wm-blue-light uppercase tracking-wider">Product Title</span></div><p className="text-text text-base font-medium leading-relaxed">{mockListing.title}</p></div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div><div className="flex items-center gap-2 mb-2"><Tag className="w-4 h-4 text-wm-spark" /><span className="text-xs font-semibold text-wm-spark uppercase tracking-wider">Category Mapping</span></div><p className="text-sm text-muted2 font-mono">{mockListing.category}</p></div>
                  <div><div className="flex items-center gap-2 mb-2"><Layers className="w-4 h-4 text-wm-spark" /><span className="text-xs font-semibold text-wm-spark uppercase tracking-wider">Price</span></div><p className="text-2xl font-grotesk font-bold text-text">{mockListing.price}</p></div>
                </div>
                <div><div className="flex items-center gap-2 mb-3"><Layers className="w-4 h-4 text-wm-blue-light" /><span className="text-xs font-semibold text-wm-blue-light uppercase tracking-wider">Key Attributes</span><span className="text-xs text-muted ml-auto">{mockListing.attributes.length} of 70+ filled</span></div>
                  <div className="grid grid-cols-2 gap-px bg-border rounded-card overflow-hidden">{mockListing.attributes.map((attr, i) => (<div key={i} className="bg-bg-card px-4 py-3 flex flex-col"><span className="text-[11px] text-muted uppercase tracking-wider font-semibold">{attr.key}</span><span className="text-sm text-text mt-0.5">{attr.value}</span></div>))}</div>
                </div>
                <div><div className="flex items-center gap-2 mb-3"><ImageIcon className="w-4 h-4 text-wm-blue-light" /><span className="text-xs font-semibold text-wm-blue-light uppercase tracking-wider">Image Set</span></div>
                  <div className="flex gap-3">{Array.from({ length: mockListing.images }).map((_, i) => (<div key={i} className="w-20 h-20 rounded-lg bg-bg-surface border border-border flex items-center justify-center"><ImageIcon className="w-6 h-6 text-border-bright" /></div>))}<div className="w-20 h-20 rounded-lg border border-dashed border-border-bright flex items-center justify-center text-xs text-muted">+more</div></div>
                </div>
                <div><div className="flex items-center gap-2 mb-2"><FileText className="w-4 h-4 text-wm-blue-light" /><span className="text-xs font-semibold text-wm-blue-light uppercase tracking-wider">Description</span></div><p className="text-sm text-muted2 leading-relaxed">{mockListing.description}</p></div>
                <div><div className="flex items-center gap-2 mb-3"><FileText className="w-4 h-4 text-wm-blue-light" /><span className="text-xs font-semibold text-wm-blue-light uppercase tracking-wider">Key Features</span></div>
                  <ul className="space-y-2">{mockListing.bulletPoints.map((point, i) => (<li key={i} className="flex items-start gap-3 text-sm text-muted2"><CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" /><span>{point}</span></li>))}</ul>
                </div>
                <div className="flex items-center justify-between p-5 rounded-card bg-bg-surface border border-border">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16"><svg className="score-ring w-16 h-16" viewBox="0 0 100 100"><circle className="track" cx="50" cy="50" r="45" /><circle className="fill" cx="50" cy="50" r="45" style={{ strokeDashoffset: 283 - (283 * mockListing.complianceScore) / 100 }} /></svg><div className="absolute inset-0 flex items-center justify-center"><span className="text-lg font-grotesk font-bold text-success">{mockListing.complianceScore}</span></div></div>
                    <div><p className="text-text font-semibold">Compliance Score</p><p className="text-xs text-muted">Item Spec 5.0 — Ready to publish</p></div>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-success/50" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
