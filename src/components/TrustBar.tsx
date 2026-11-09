import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones, Sparkles, Award, Heart, Leaf } from 'lucide-react';

interface TrustBarProps {
  variant?: 'floating-hero' | 'pre-footer';
}

export const TrustBar: React.FC<TrustBarProps> = ({ variant = 'pre-footer' }) => {
  if (variant === 'floating-hero') {
    const heroTrustItems = [
      {
        icon: Leaf,
        title: 'Clean Ingredients',
        desc: 'Safe & toxin-free formulas',
      },
      {
        icon: Award,
        title: 'Clinically Proven',
        desc: 'Dermatologically tested actives',
      },
      {
        icon: Heart,
        title: 'Cruelty Free',
        desc: 'We never test on animals',
      },
      {
        icon: Sparkles,
        title: 'Sustainable Beauty',
        desc: 'Good for you & the planet',
      },
    ];

    return (
      <section 
        aria-label="Core Brand Commitments"
        className="max-w-6xl mx-auto px-4 -mt-8 relative z-20"
      >
        <div className="bg-white rounded-xl shadow-md border border-[#F6D8D4] p-5 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {heroTrustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 group hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-[#FBF0EB] border border-[#F6D8D4] flex items-center justify-center shrink-0 text-[#C98A63] group-hover:bg-[#A95367] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#201A18] tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#665C56] mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // Pre-Footer Trust Bar Variant (Pink strip #F9E4DE)
  const preFooterItems = [
    {
      icon: Truck,
      title: 'FREE SHIPPING',
      desc: 'On orders over ₹999',
    },
    {
      icon: RotateCcw,
      title: 'EASY RETURNS',
      desc: '15 days return policy',
    },
    {
      icon: ShieldCheck,
      title: 'SECURE PAYMENT',
      desc: '100% secure checkout',
    },
    {
      icon: Headphones,
      title: '24/7 SUPPORT',
      desc: "We're here to help",
    },
  ];

  return (
    <section 
      aria-label="Customer Guarantees and Shipping"
      className="bg-[#F9E4DE] py-9 border-t border-[#F6D8D4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {preFooterItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 sm:gap-4 justify-start md:justify-center"
              >
                <div className="w-11 h-11 rounded-full bg-white border border-[#F6D8D4] flex items-center justify-center shrink-0 text-[#A95367] shadow-xs">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-[0.1em] text-[#201A18] uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#665C56] mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
