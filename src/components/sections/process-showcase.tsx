  "use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "../logo";

const productImages = [
  { title: "Away Everywhere Bag", desc: "Padded Laptop Sleeve, Removable Shoulder Strap", price: "$198.00", color: "#8FBC8F" },
  { title: "Product Dimensions", desc: '16.3" Ã 10.2" Ã 7.3" â Personal Item Size', price: "Carry-On Approved", color: "#B8D4E3" },
  { title: "Trolley Sleeve Feature", desc: "Slides onto any Away luggage â no juggling", price: "One-Hand Travel", color: "#D4C5A9" },
  { title: "Water-Repellent Nylon", desc: "Bead-off technology, durable shell, spot-clean easy", price: "Premium Material", color: "#A8C5B8" },
];

export function ProcessShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sec relative overflow-hidden" id="process">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="sec-tag justify-center">
            <span>The Process</span>
          </div>
          <h2 className="text-text mb-4 text-balance">
            From any marketplace â <span className="grad-blue">straight to Walmart</span>
          </h2>
          <p className="sec-sub mx-auto text-center">
            One URL in, a fully compliant Walmart listing out. Watch the magic happen.
          </p>
        </div>

        {/* Process Flow Illustration */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Amazon Browser Card */}
            <div className="w-full md:w-[280px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-2xl shadow-black/40">
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#232F3E]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 mx-2 px-2 py-0.5 rounded text-[10px] text-gray-400 bg-[#1A2332] truncate">
                    amazon.com/Away-Everywhere-Duffle...
                  </div>
                </div>
                {/* Product Preview */}
                <div className="p-3 bg-white">
                  <div className="flex gap-2">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: productImages[activeSlide].color }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="#555" strokeWidth="1.5" /><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#555" strokeWidth="1.5" /></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-[#0F1111] font-bold leading-tight truncate">{productImages[activeSlide].title}</p>
                      <p className="text-[8px] text-[#565959] leading-tight mt-0.5 line-clamp-2">{productImages[activeSlide].desc}</p>
                      <p className="text-[11px] text-[#0F1111] font-bold mt-1">{productImages[activeSlide].price}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-muted mt-3 font-medium">Source Listing</p>
            </div>

            {/* Arrow 1 */}
            <div className="flex-shrink-0 my-2 md:my-0">
              <div className="w-10 h-10 rounded-full bg-wm-blue-dim border border-wm-blue/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-wm-blue-light rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* 24.online Center Card */}
            <div className="w-full md:w-[300px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden border-2 border-gold/30 bg-gradient-to-b from-[#FFD700] to-[#FFC107] shadow-2xl shadow-gold/20 relative">
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#E6C200]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                </div>
                {/* 24.online Interface */}
                <div className="p-5 flex flex-col items-center text-center">
                  <Logo className="h-10 w-auto mb-4" />
                  <div className="w-full bg-white/90 rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#666" strokeWidth="2" strokeLinecap="round"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#666" strokeWidth="2" strokeLinecap="round"/></svg>
                    <span className="text-xs text-gray-500">Enter URL to migrate</span>
                  </div>
                  {/* Processing animation */}
                   <div className="mt-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#333] animate-bounce" style={{ animationDelay: "0s" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#333] animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#333] animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </div>
                    <span className="text-[10px] text-[#333] font-semibold">AI Processing</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gold mt-3 font-semibold">AI Migration Engine</p>
            </div>

            {/* Arrow 2 */}
            <div className="flex-shrink-0 my-2 md:my-0">
              <div className="w-10 h-10 rounded-full bg-wm-blue-dim border border-wm-blue/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-wm-blue-light rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* Walmart Browser Card */}
            <div className="w-full md:w-[280px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-2xl shadow-black/40">
                {/* Browser Chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0071DC]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 mx-2 px-2 py-0.5 rounded text-[10px] text-white/60 bg-[#005BB5] truncate">
                    walmart.com/ip/Away-Everywhere...
                  </div>
                </div>
                {/* Product Preview */}
                <div className="p-3 bg-white">
                  <div className="flex gap-2">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: productImages[activeSlide].color }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="#555" strokeWidth="1.5" /><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#555" strokeWidth="1.5" /></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-[#0F1111] font-bold leading-tight truncate">{productImages[activeSlide].title}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[8px] text-white bg-[#0071DC] px-1 py-0.5 rounded font-bold">Walmart</span>
                        <span className="text-[8px] text-[#2E7D32] font-bold">Spec 5.0</span>
                      </div>
                      <p className="text-[11px] text-[#0F1111] font-bold mt-1">{productImages[activeSlide].price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2 pt-2 border-t border-gray-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    <span className="text-[8px] text-[#2E7D32] font-semibold">Ready to Publish</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-muted mt-3 font-medium">Walmart-Ready Listing</p>
            </div>
          </div>

          {/* Product Image Gallery */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-sm text-muted2 font-medium">Generated listing images cycle automatically</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  className={`card p-4 text-center transition-all duration-500 ${
                    i === activeSlide
                      ? "border-wm-blue/50 shadow-lg shadow-wm-blue/10 scale-105"
                      : "opacity-60"
                  }`}
                >
                  <div
                    className="w-full aspect-square rounded-xl mb-3 flex items-center justify-center transition-colors duration-500"
                    style={{ backgroundColor: img.color + "33" }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="opacity-40">
                      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-semibold text-text truncate">{img.title}</h4>
                  <p className="text-[10px] text-muted mt-1 line-clamp-1">{img.desc}</p>
                </div>
              ))}
            </div>
            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
              {productImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeSlide ? "bg-wm-blue w-6" : "bg-border-bright"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
