import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Product, Page } from '../types';
import { ProductCard } from '../components/ProductCard';
import { TrustBar } from '../components/TrustBar';
import {
  HERO_IMAGE,
  PROMO_IMAGE,
  CATEGORIES_DATA,
  PRODUCTS_DATA,
  ABOUT_ROSE_IMAGE,
} from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: Page, categoryFilter?: string) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      eyebrow: 'NEW IN',
      headlinePart1: 'Radiant Skin.',
      headlinePart2: 'Real Confidence.',
      subtitle: 'Clean beauty that nourishes, enhances and empowers you.',
      image: HERO_IMAGE,
      ctaText: 'SHOP NOW',
      targetCategory: undefined,
    },
    {
      eyebrow: 'LIMITED HARVEST',
      headlinePart1: 'Pure Damask Rose.',
      headlinePart2: 'Hydro-Distilled.',
      subtitle: 'Hand-picked at dawn in the Himalayan foothills for unparalleled skin barrier glow.',
      image: ABOUT_ROSE_IMAGE,
      ctaText: 'DISCOVER RITUAL',
      targetCategory: 'Skincare',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = heroSlides[currentSlide];
  const bestSellers = PRODUCTS_DATA.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION & CAROUSEL */}
      <section className="relative bg-[#FBF0EB] overflow-hidden pt-10 sm:pt-16 pb-18 sm:pb-24 border-b border-[#F6D8D4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (5-6 columns) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 backdrop-blur-xs rounded-full border border-[#F6D8D4] text-[#A95367] text-xs font-bold tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C98A63]" />
                <span>{activeSlide.eyebrow}</span>
              </div>

              <h1
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#201A18] tracking-tight leading-[1.1]"
              >
                {activeSlide.headlinePart1}
                <br />
                <span className="text-[#A95367]">{activeSlide.headlinePart2}</span>
              </h1>

              <p className="text-base sm:text-lg text-[#665C56] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                {activeSlide.subtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('shop', activeSlide.targetCategory)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#A95367] hover:bg-[#8F3F52] text-white text-xs font-bold tracking-[0.16em] uppercase rounded transition-all duration-200 shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{activeSlide.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('collections')}
                  className="w-full sm:w-auto px-7 py-3.5 border border-[#A95367] text-[#A95367] hover:bg-white text-xs font-bold tracking-[0.16em] uppercase rounded transition-all cursor-pointer"
                >
                  VIEW COLLECTIONS
                </button>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 transition-all rounded-full cursor-pointer ${
                      currentSlide === idx ? 'w-8 bg-[#A95367]' : 'w-2 bg-[#F6D8D4]'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Editorial Image (6 columns) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90">
                <img
                  src={activeSlide.image}
                  alt="Velvetique Luxury Botanical Skincare Heroes"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Slider Arrow Controls */}
              <button
                onClick={handlePrevSlide}
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-[#F6D8D4] shadow-md flex items-center justify-center text-[#201A18] hover:text-[#A95367] hover:scale-105 transition-all cursor-pointer z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-[#F6D8D4] shadow-md flex items-center justify-center text-[#201A18] hover:text-[#A95367] hover:scale-105 transition-all cursor-pointer z-20"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING TRUST STRIP CARD (DIRECTLY BENEATH HERO) */}
      <TrustBar variant="floating-hero" />

      {/* 3. SHOP BY CATEGORY (6 CIRCULAR IMAGES) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.14em] text-[#201A18]"
          >
            SHOP BY CATEGORY
          </h2>
          <div className="w-12 h-0.5 bg-[#A95367] mx-auto mt-2.5 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('shop', cat.name)}
              className="flex flex-col items-center group cursor-pointer text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-[#F9E4DE] group-hover:border-[#A95367] transition-all duration-300 shadow-sm bg-white overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-3.5 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#201A18] group-hover:text-[#A95367] transition-colors">
                {cat.name}
              </h3>
              <p className="text-[11px] text-[#665C56] mt-0.5 line-clamp-1">
                {cat.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROMOTIONAL SPLIT BANNER (50/50 TWO COLUMNS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-[#F6D8D4]">
          {/* Left Mauve Column */}
          <div className="bg-[#B05A6F] p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start text-white space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-200">
              LIMITED TIME OFFER
            </span>
            <h2
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              Up to 30% Off on Best Sellers
            </h2>
            <p className="text-sm sm:text-base text-rose-100 max-w-md leading-relaxed font-light">
              Glow more, spend less. Treat your skin to dermatologist-verified botanical actives formulated for deep repair.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('shop')}
                className="px-8 py-3.5 bg-white text-[#B05A6F] hover:bg-rose-50 text-xs font-bold tracking-[0.16em] uppercase rounded transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                SHOP THE SALE
              </button>
            </div>
          </div>

          {/* Right Styled Flat-Lay Photography */}
          <div className="relative min-h-[320px] md:min-h-[420px] bg-[#FAF5F2]">
            <img
              src={PROMO_IMAGE}
              alt="Velvetique Botanical Skincare Flat-lay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. BEST SELLERS SECTION (4 PRODUCT CARDS) */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="text-center sm:text-left">
            <h2
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.14em] text-[#201A18]"
            >
              BEST SELLERS
            </h2>
            <div className="w-12 h-0.5 bg-[#A95367] mt-2 rounded-full mx-auto sm:mx-0" />
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-bold tracking-[0.14em] uppercase text-[#A95367] hover:text-[#8F3F52] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
