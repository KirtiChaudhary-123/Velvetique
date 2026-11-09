import React, { useState } from 'react';
import { X, User, Package, Heart, Sparkles, MapPin, LogOut } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewWishlist: () => void;
  onViewShop: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onViewWishlist,
  onViewShop,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'rewards' | 'profile'>('orders');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden border border-[#F6D8D4] animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#F6D8D4] flex items-center justify-between bg-[#FAF5F2]">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#A95367]" />
              <div>
                <h2
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-lg font-bold text-[#201A18] tracking-wide"
                >
                  MY VELVETIQUE ACCOUNT
                </h2>
                <p className="text-[11px] text-[#665C56]">
                  Aditi Rao • Velvetique Gold Tier Member
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#665C56] hover:text-[#201A18] hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#F6D8D4] bg-[#FAF5F2] px-4 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('orders')}
              className={`py-3 px-3 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'orders'
                  ? 'border-[#A95367] text-[#A95367]'
                  : 'border-transparent text-[#665C56] hover:text-[#201A18]'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Past Orders</span>
            </button>
            <button
              onClick={() => setActiveTab('rewards')}
              className={`py-3 px-3 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'rewards'
                  ? 'border-[#A95367] text-[#A95367]'
                  : 'border-transparent text-[#665C56] hover:text-[#201A18]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Glow Rewards (1,250 pts)</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-3 px-3 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'profile'
                  ? 'border-[#A95367] text-[#A95367]'
                  : 'border-transparent text-[#665C56] hover:text-[#201A18]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Saved Address</span>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 text-xs">
            {activeTab === 'orders' && (
              <div className="space-y-3">
                <div className="p-4 bg-[#FAF5F2] rounded-lg border border-[#F6D8D4] space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F6D8D4]">
                    <div>
                      <span className="font-bold text-[#201A18]">Order #VB-88412</span>
                      <p className="text-[10px] text-[#665C56]">Placed today • Express Air Delivery</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px] uppercase">
                      Confirmed
                    </span>
                  </div>
                  <p className="text-xs text-[#201A18]">
                    10% Niacinamide Face Serum + Hydra Intense Gel Moisturizer
                  </p>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[#665C56]">Total: <strong className="text-[#A95367]">₹1,448</strong></span>
                    <span className="text-emerald-700 font-semibold">Arriving in 3-4 days</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-[#F6D8D4] space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F6D8D4]">
                    <div>
                      <span className="font-bold text-[#201A18]">Order #VB-76120</span>
                      <p className="text-[10px] text-[#665C56]">Delivered on Feb 12, 2026</p>
                    </div>
                    <span className="px-2.5 py-1 bg-zinc-100 text-zinc-700 font-bold rounded text-[10px] uppercase">
                      Delivered
                    </span>
                  </div>
                  <p className="text-xs text-[#201A18]">
                    Damask Rose Hydro-Distilled Mist (100ml)
                  </p>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[#665C56]">Total: <strong className="text-[#A95367]">₹549</strong></span>
                    <button
                      onClick={() => {
                        onClose();
                        onViewShop();
                      }}
                      className="text-[#A95367] font-semibold hover:underline"
                    >
                      Buy Again
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="space-y-4">
                <div className="bg-[#4A1E2B] text-white p-5 rounded-xl space-y-2 shadow-xs">
                  <span className="text-[10px] uppercase tracking-widest text-rose-300 font-bold">
                    AVAILABLE REWARD BALANCE
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">1,250</span>
                    <span className="text-rose-200">Glow Petals (= ₹250 instant discount)</span>
                  </div>
                  <p className="text-xs text-rose-100/80 font-light">
                    Redeemable on all botanical skincare and mineral makeup orders above ₹999.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#201A18] uppercase tracking-wider text-xs">
                    How to Earn More Petals:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#665C56]">
                    <li>• Earn 5 petals for every ₹100 spent on Velvetique Beauty</li>
                    <li>• +150 petals for writing a verified product review with photos</li>
                    <li>• +300 petals on your birthday month</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-3">
                <div className="p-4 bg-[#FAF5F2] rounded-lg border border-[#F6D8D4] space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-[#201A18]">Default Shipping Address</strong>
                    <span className="text-[10px] px-2 py-0.5 bg-[#A95367] text-white rounded">
                      Primary
                    </span>
                  </div>
                  <p className="text-[#665C56] leading-relaxed">
                    Aditi Rao • +91 98765 43210<br />
                    Flat 402, Lotus Bloom Apartments, Indiranagar<br />
                    Bengaluru, Karnataka 560038
                  </p>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onViewWishlist();
                  }}
                  className="w-full py-2.5 bg-white border border-[#F6D8D4] text-[#201A18] rounded text-xs font-semibold hover:bg-[#FAF5F2] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-[#A95367]" />
                  <span>View Saved Wishlist Items</span>
                </button>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[#F6D8D4] bg-[#FAF5F2] flex items-center justify-between">
            <span className="text-[11px] text-[#665C56]">Signed in as aditi.rao@example.com</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#A95367] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#8F3F52] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
