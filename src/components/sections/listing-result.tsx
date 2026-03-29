"use client"

import { useState, useEffect } from "react"
import { Star, ShoppingCart, Check, Truck, Shield, RotateCcw, Heart, Share2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

interface ListingResultProps {
  locale?: "en" | "ru"
}

const productFeatures = [
  {
    img: "https://cdn.shopify.com/s/files/1/0664/7418/0792/files/abb7fe28-7a92-41f8-adeb-405528217310.jpg",
    emoji: "\u{1F9F3}",
    headline: "SLIDES ONTO YOUR\nSUITCASE",
    sub: "Trolley Sleeve",
    accent: "#4ade80",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0664/7418/0792/files/e7f63ab8-f308-4fba-8f9c-30daf20d8849.jpg",
    emoji: "\u{1F327}\u{FE0F}",
    headline: "REPELS WATER.\nKEEPS MOVING.",
    sub: "Water-Repellent Nylon",
    accent: "#60a5fa",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0664/7418/0792/files/c8248aa3-c7d2-4c70-845f-b240a5bb94ad.jpg",
    emoji: "\u{1F4BC}",
    headline: "THE\nEVERYWHERE BAG",
    sub: "Interior Organization",
    accent: "#c084fc",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0664/7418/0792/files/b2800a62-760f-44ff-bdf8-6e5c246d51e0.jpg",
    emoji: "\u{1F4BB}",
    headline: '16.3" × 10.2" × 7.3"',
    sub: 'Fits 15" Laptop',
    accent: "#94a3b8",
  },
]

const bulletPoints = [
  "Water-repellent nylon exterior protects your gear",
  "Padded laptop sleeve fits up to 15\" devices",
  "Trolley sleeve slides onto any rolling suitcase",
  "Multiple interior pockets for easy organization",
  "Adjustable, removable crossbody strap",
]

function FeatureImage({ feature, isActive }: { feature: typeof productFeatures[0]; isActive: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: isActive ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <img
        src={feature.img}
        alt={feature.sub}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3
          className="font-bold text-xl sm:text-2xl whitespace-pre-line leading-tight"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
        >
          {feature.headline}
        </h3>
        <div className="mt-3 flex items-center gap-2">
          <div className="w-8 h-px" style={{ background: feature.accent }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: feature.accent }}>
            {feature.sub}
          </span>
          <div className="w-8 h-px" style={{ background: feature.accent }} />
        </div>
      </div>
    </div>
  )
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={14}
            className={i <= Math.floor(rating) ? "fill-[#ffc220] text-[#ffc220]" : "text-gray-300"}
          />
        ))}
      </div>
      <span className="text-sm text-[#2e2f32] font-medium">{rating}</span>
      <span className="text-sm text-[#6d6e71]">{count.toLocaleString()} reviews</span>
    </div>
  )
}

export function ListingResult({ locale = "en" }: ListingResultProps) {
  const [active, setActive] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % productFeatures.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goTo = (idx: number) => {
    setActive(idx)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prev = () => goTo((active - 1 + productFeatures.length) % productFeatures.length)
  const next = () => goTo((active + 1) % productFeatures.length)

  return (
    <section className="sec relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0071DC]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="container-wide">
          {/* Section header */}
          <div className="sec-tag up">
            {locale === "en" ? "AI-Generated Listing" : "AI-сгенерированный листинг"}
          </div>
          <h2 className="up d1 max-w-4xl">
            {locale === "en"
              ? "Your Product, Live on Walmart"
              : "Ваш продукт на Walmart"}
          </h2>
          <p className="sec-sub up d2 max-w-3xl">
            {locale === "en"
              ? "See what AI-optimized listings look like. Every image, title, and bullet point — crafted to convert on Walmart's marketplace."
              : "Посмотрите, как выглядят AI-оптимизированные листинги. Каждое изображение, заголовок и буллет — созданы для конверсии на маркетплейсе Walmart."}
          </p>

          {/* Walmart PDP Mockup */}
          <div className="mt-14 up d3">
            <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

              {/* Walmart top bar */}
              <div className="bg-[#0071DC] px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Walmart spark logo */}
                  <svg viewBox="0 0 28 28" className="w-7 h-7 flex-shrink-0" fill="none">
                    <circle cx="14" cy="14" r="14" fill="#FFC220" />
                    <path d="M14 5l1.5 5.5h5.5l-4.5 3.5 1.5 5.5L14 16l-4 3.5 1.5-5.5-4.5-3.5h5.5z" fill="#0071DC" />
                  </svg>
                  <span className="text-white font-bold text-lg hidden sm:inline">walmart</span>
                </div>
                <div className="flex-1 max-w-md mx-4 hidden sm:block">
                  <div className="bg-white rounded-full px-4 py-1.5 text-sm text-gray-400 flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search everything at Walmart
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Heart size={18} />
                  <ShoppingCart size={18} />
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="bg-[#f2f8fd] px-4 sm:px-6 py-2 text-xs text-[#6d6e71] border-b border-gray-200">
                Bags & Accessories &gt; Travel Bags &gt; Weekender Bags
              </div>

              {/* Product Content */}
              <div className="flex flex-col lg:flex-row">
                {/* Left: Image Gallery */}
                <div className="lg:w-[55%] p-4 sm:p-6">
                  {/* Main image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group">
                    {productFeatures.map((feat, i) => (
                      <FeatureImage key={i} feature={feat} isActive={i === active} />
                    ))}

                    {/* Nav arrows */}
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    >
                      <ChevronLeft size={18} className="text-gray-700" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    >
                      <ChevronRight size={18} className="text-gray-700" />
                    </button>

                    {/* AI badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <Sparkles size={11} className="text-accent" />
                      AI Generated
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="mt-3 flex gap-2">
                    {productFeatures.map((feat, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          i === active ? "border-[#0071DC] shadow-md" : "border-transparent opacity-60 hover:opacity-90"
                        }`}
                      >
                        <img src={feat.img} alt={feat.sub} className="w-full h-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Product Info */}
                <div className="lg:w-[45%] p-4 sm:p-6 lg:border-l border-gray-200">
                  {/* Brand */}
                  <a href="#" className="text-sm text-[#0071DC] hover:underline font-medium">Away Travel</a>

                  {/* Title */}
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#2e2f32] leading-tight">
                    The Everywhere Bag — Water-Repellent Nylon Weekender with Trolley Sleeve & Laptop Compartment
                  </h3>

                  {/* Rating */}
                  <div className="mt-3">
                    <StarRating rating={4.8} count={2847} />
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-[#2e2f32]">$89.99</span>
                    <span className="text-lg text-[#6d6e71] line-through">$128.00</span>
                    <span className="text-sm font-bold text-[#1aad1a] bg-[#e6f5e6] px-2 py-0.5 rounded">Save $38</span>
                  </div>

                  {/* Shipping */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#2e2f32]">
                    <Truck size={16} className="text-[#0071DC]" />
                    <span>Free delivery <strong>Tomorrow, Mar 29</strong></span>
                  </div>

                  {/* Bullets */}
                  <div className="mt-5 space-y-2">
                    {bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[#46474a]">
                        <Check size={14} className="text-[#1aad1a] mt-0.5 flex-shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Color selector mock */}
                  <div className="mt-5">
                    <span className="text-sm font-semibold text-[#2e2f32]">Color: <span className="font-normal">Green</span></span>
                    <div className="mt-2 flex gap-2">
                      {["#2d5a3d", "#1a365d", "#2d2d44", "#c2956b", "#8b2252"].map((c, i) => (
                        <button
                          key={i}
                          className={`w-8 h-8 rounded-full border-2 ${i === 0 ? "border-[#0071DC] ring-2 ring-[#0071DC]/20" : "border-gray-200"}`}
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button className="mt-6 w-full py-3.5 bg-[#0071DC] hover:bg-[#004f9a] text-white font-bold rounded-full text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#0071DC]/20">
                    <ShoppingCart size={20} />
                    Add to cart
                  </button>

                  {/* Trust badges */}
                  <div className="mt-4 flex items-center justify-center gap-5 text-xs text-[#6d6e71]">
                    <div className="flex items-center gap-1.5">
                      <Shield size={13} />
                      <span>Walmart Protection</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RotateCcw size={13} />
                      <span>Free 90-Day Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom badge */}
            <div className="mt-8 flex items-center justify-center gap-3 up d4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/30" />
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
                  {locale === "en"
                    ? "Every element — AI-optimized for Walmart"
                    : "Каждый элемент — AI-оптимизирован для Walmart"}
                </span>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
