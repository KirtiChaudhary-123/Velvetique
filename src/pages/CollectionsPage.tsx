import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Page } from '../types';
import { COLLECTIONS_DATA } from '../data/mockData';

interface CollectionsPageProps {
  onNavigate: (page: Page, categoryFilter?: string) => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white pb-24">
      {/* Header Banner */}
      <section className="bg-[#FBF0EB] py-14 border-b border-[#F6D8D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-xs text-[#665C56] mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#A95367] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-[#A95367] font-semibold">Collections</span>
          </nav>

          <h1
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#201A18] tracking-tight"
          >
            Our Collections
          </h1>
          <p className="text-sm sm:text-base text-[#665C56] mt-2 max-w-xl mx-auto font-light leading-relaxed">
            Mindfully curated botanical rituals for every skin journey. Formulated with ethically harvested botanicals and clinical actives.
          </p>
        </div>
      </section>

      {/* 6 Large Editorial Collection Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS_DATA.map((col) => (
            <div
              key={col.id}
              onClick={() => onNavigate('shop', col.categorySlug)}
              className="group relative h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#F6D8D4] cursor-pointer"
            >
              {/* Full-bleed background photography */}
              <img
                src={col.image}
                alt={col.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Scrim for WCAG AA readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity group-hover:from-black/90" />

              {/* Collection Top Pill/Tag */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] uppercase font-bold tracking-widest border border-white/20">
                <Sparkles className="w-3 h-3 text-[#E3A62F]" />
                <span>{col.tagline}</span>
              </div>

              {/* Card Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white space-y-2 z-10">
                <span className="text-xs uppercase tracking-[0.16em] text-rose-200 font-semibold block">
                  {col.subtitle}
                </span>

                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-2xl sm:text-3xl font-bold leading-tight"
                >
                  {col.title}
                </h3>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed font-light">
                  {col.description}
                </p>

                {/* Ghost Outline Button */}
                <div className="pt-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-white text-white text-xs font-bold tracking-[0.14em] uppercase bg-white/10 backdrop-blur-xs group-hover:bg-[#A95367] group-hover:border-[#A95367] transition-all duration-300"
                  >
                    <span>SHOP COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
