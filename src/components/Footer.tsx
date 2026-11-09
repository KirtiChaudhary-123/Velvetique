import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Send, CheckCircle2, ShieldCheck, Code2 } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenExporter?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenExporter }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#4A1E2B] text-[#E8D3D8] pt-16 pb-12 border-t border-[#37141E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-rose-950/60">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex flex-col cursor-pointer group"
            >
              {/* Botanical SVG mark */}
              <svg
                className="w-6 h-6 text-[#C98A63] mb-1 group-hover:scale-105 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C12 2 15 6 15 9C15 12 12 14 12 14C12 14 9 12 9 9C9 6 12 2 12 2Z" />
                <path d="M12 14C12 14 16 11 19 11C22 11 22 15 19 16C16 17 12 14 12 14Z" />
                <path d="M12 14C12 14 14 18 13 21C12 24 8 22 8 19C8 16 12 14 12 14Z" />
                <path d="M12 14C12 14 8 11 5 11C2 11 2 15 5 16C8 17 12 14 12 14Z" />
                <circle cx="12" cy="14" r="1.5" fill="#C98A63" />
              </svg>
              <span
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-2xl font-bold tracking-[0.18em] text-white uppercase"
              >
                VELVETIQUE
              </span>
              <span className="text-[10px] font-medium tracking-[0.38em] text-rose-300 uppercase -mt-0.5">
                BEAUTY
              </span>
            </div>

            <p className="text-sm text-[#E8D3D8]/80 leading-relaxed font-light">
              Thoughtful beauty for every skin, every day. Mindfully formulated botanical skincare and mineral beauty rituals.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A95367] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A95367] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A95367] flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#E8D3D8]/60 pt-2">
              &copy; {new Date().getFullYear()} Velvetique Beauty Inc. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-lg font-semibold tracking-wider text-white uppercase mb-4"
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8D3D8]/85">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us &amp; Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Glow Journal (Blog)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-lg font-semibold tracking-wider text-white uppercase mb-4"
            >
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E8D3D8]/85">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Track Your Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shipping &amp; Delivery Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  15-Day Return &amp; Refund
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy &amp; Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3.5">
            <h4
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-lg font-semibold tracking-wider text-white uppercase"
            >
              NEWSLETTER
            </h4>
            <p className="text-xs text-[#E8D3D8]/80 leading-relaxed font-light">
              Subscribe to get special offers, beauty tips and invitations to exclusive botanical launches.
            </p>

            {subscribed ? (
              <div className="p-3 rounded bg-white/10 border border-emerald-400/40 text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-300" />
                <span>Welcome to the ritual! Use code <strong>GLOW15</strong> at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-3.5 py-2.5 text-xs bg-white text-[#201A18] rounded focus:outline-none focus:ring-2 focus:ring-[#A95367] placeholder:text-[#665C56]/70 shadow-xs"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#A95367] hover:bg-[#8F3F52] text-white text-xs font-bold tracking-[0.14em] uppercase rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>SUBSCRIBE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#E8D3D8]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C98A63]" />
              <span>We respect your inbox. Zero spam, unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Accepted Payment Badges & Elementor Export Link */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E8D3D8]/70">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium uppercase tracking-wider text-rose-200/60 mr-2">
              Guaranteed Safe Checkout:
            </span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-white tracking-wider text-[11px]">
              VISA
            </span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-white tracking-wider text-[11px]">
              MASTERCARD
            </span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-white tracking-wider text-[11px]">
              RUPAY
            </span>
            <span className="px-2.5 py-1 bg-white/10 rounded font-semibold text-white tracking-wider text-[11px]">
              UPI / GPAY
            </span>
          </div>

          {onOpenExporter && (
            <button
              onClick={onOpenExporter}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/15 text-rose-200 text-xs rounded transition-colors cursor-pointer border border-white/10"
            >
              <Code2 className="w-3.5 h-3.5 text-[#C98A63]" />
              <span>Elementor JSON &amp; Customizer CSS Inspector</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
