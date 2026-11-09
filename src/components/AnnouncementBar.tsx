import React from 'react';
import { Truck, Instagram, Facebook, Youtube, Code2 } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenExporter?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenExporter }) => {
  return (
    <aside 
      aria-label="Promotional Announcement"
      className="bg-[#4A1E2B] text-white text-xs py-2 px-4 border-b border-[#37141E] z-40 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Quick Exporter Tag */}
        <div className="hidden md:flex items-center gap-2 text-rose-200/80">
          {onOpenExporter && (
            <button
              onClick={onOpenExporter}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[11px] tracking-wide text-rose-100 transition-colors cursor-pointer"
              title="View Elementor JSON Architecture & WordPress Customizer CSS"
            >
              <Code2 className="w-3 h-3 text-[#E3A62F]" />
              <span>Elementor &amp; CSS Export</span>
            </button>
          )}
          <span className="text-[11px] text-rose-200/60">100% Botanical Actives</span>
        </div>

        {/* Center: Offer & Code */}
        <div className="flex items-center justify-center gap-2 text-center font-medium tracking-wide">
          <Truck className="w-3.5 h-3.5 text-[#E3A62F] shrink-0" />
          <span>
            Free Shipping on orders over <strong className="font-semibold text-rose-100">₹999</strong> | Use code:{' '}
            <span className="inline-block px-1.5 py-0.2 bg-[#A95367] text-white font-semibold rounded tracking-wider text-[11px]">
              GLOW15
            </span>{' '}
            for 15% OFF
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3 shrink-0 text-rose-200/90">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
};
