import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import { TrustBar } from '../components/TrustBar';
import { ABOUT_ROSE_IMAGE, HERO_IMAGE, FOUNDERS_DATA } from '../data/mockData';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white pb-24">
      {/* 1. Hero Section with Maroon Gradient Backdrop */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center text-center text-white px-4 sm:px-6 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Velvetique Heritage Beauty"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A1E2B]/95 via-[#4A1E2B]/85 to-[#37141E]/95" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-rose-300">
            OUR PHILOSOPHY &amp; CRAFTSMANSHIP
          </span>
          <h1
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Thoughtful Beauty for Every Skin, Every Day.
          </h1>
          <p className="text-sm sm:text-base text-rose-100 max-w-xl mx-auto font-light leading-relaxed">
            Bridging 5,000 years of time-tested Ayurvedic herbal intelligence with contemporary Swiss dermatological clinical actives.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section: Two-Column Split */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#A95367]">
                THE ORIGIN
              </span>
              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-3xl sm:text-4xl font-bold text-[#201A18] leading-tight"
              >
                Where Pure Earth Meets Clinical Precision
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#665C56] leading-relaxed font-light">
              Velvetique was born from a singular, uncompromising question: Why should women have to choose between gentle, clean natural skincare and clinical efficacy that actually repairs the skin barrier?
            </p>

            <p className="text-sm sm:text-base text-[#665C56] leading-relaxed font-light">
              We travel directly to wild botanical farms in the valleys of Kannauj, Kashmir, and Kerala to hydro-distill fresh Damask roses at sunrise and cold-press adaptogenic roots in traditional copper kettles. We then blend these rare herbal infusions with dermatological powerhouses like 10% Niacinamide, Hyaluronic Acid, and Non-Nano Zinc.
            </p>

            {/* Key Verification Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#F6D8D4]">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[#A95367] tabular-nums block">
                  100%
                </span>
                <span className="text-xs text-[#665C56] font-medium">Cruelty-Free &amp; Vegan</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[#A95367] tabular-nums block">
                  0%
                </span>
                <span className="text-xs text-[#665C56] font-medium">Parabens &amp; Toxins</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[#A95367] tabular-nums block">
                  94%
                </span>
                <span className="text-xs text-[#665C56] font-medium">Barrier Repair Rate</span>
              </div>
            </div>
          </div>

          {/* Right High-Res Flat-Lay Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#F6D8D4]">
              <img
                src={ABOUT_ROSE_IMAGE}
                alt="Damask Rose Hydro-distillation Harvest"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#F6D8D4] text-xs text-[#201A18] flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#C98A63] shrink-0" />
                <span>
                  <strong>Batch No. 34:</strong> Steam hydro-distilled wild Damask Rose floral water with zero synthetic perfume or stabilizing preservatives.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values Row (Reusing Trust Card format) */}
      <section className="bg-[#FAF5F2] py-16 border-y border-[#F6D8D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-2xl sm:text-3xl font-bold text-[#201A18] uppercase tracking-wider"
            >
              Our Core Standards
            </h3>
            <div className="w-12 h-0.5 bg-[#A95367] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Clean Ingredients',
                desc: 'Every active is screened against 1,400 banned substances to protect sensitive skin and endocrine wellness.',
              },
              {
                title: 'Clinically Proven',
                desc: 'Rigorous third-party patch testing and clinical trials verify visible improvements in skin radiance and hydration.',
              },
              {
                title: 'Cruelty Free',
                desc: 'PETA-certified cruelty-free. We never test on animals, nor do our raw agricultural suppliers.',
              },
              {
                title: 'Sustainable Packaging',
                desc: 'Housed in 100% recyclable amber glass, FSC-certified unbleached cartons, and soy-based vegetable inks.',
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-[#F6D8D4] shadow-xs space-y-2 hover:-translate-y-1 transition-transform"
              >
                <div className="w-8 h-8 rounded-full bg-[#FBF0EB] flex items-center justify-center text-[#A95367]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-base font-bold text-[#201A18]"
                >
                  {v.title}
                </h4>
                <p className="text-xs text-[#665C56] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Formulator Team Section: 3 Circular Portrait Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#A95367]">
            THE MINDS BEHIND THE MAGIC
          </span>
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.14em] text-[#201A18] mt-1"
          >
            Meet Our Formulators
          </h2>
          <div className="w-12 h-0.5 bg-[#A95367] mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {FOUNDERS_DATA.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-[#F6D8D4] hover:shadow-lg transition-all"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-[#F6D8D4] p-1 mb-4 shadow-sm">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h4
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-xl font-bold text-[#201A18]"
              >
                {member.name}
              </h4>
              <span className="text-xs font-semibold text-[#A95367] tracking-wider uppercase mt-0.5">
                {member.role}
              </span>
              <p className="text-xs text-[#665C56] mt-3 leading-relaxed font-light">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Closing CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B05A6F] text-white rounded-2xl p-8 sm:p-14 text-center space-y-4 shadow-xl">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200">
            EMPOWER YOUR DAILY RITUAL
          </span>
          <h2
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl mx-auto"
          >
            Ready for Your Healthiest Glow?
          </h2>
          <p className="text-sm sm:text-base text-rose-100 max-w-lg mx-auto font-light leading-relaxed">
            Discover our curated skincare essentials and join over 40,000 customers who chose barrier wellness over quick fixes.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-3.5 bg-white text-[#B05A6F] hover:bg-rose-50 text-xs font-bold tracking-[0.16em] uppercase rounded transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
            >
              <span>SHOP ALL FORMULATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
