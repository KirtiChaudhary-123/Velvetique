import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onMoveToCart: (product: Product) => void;
  onRemoveFromWishlist: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onMoveToCart,
  onRemoveFromWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#F6D8D4] flex items-center justify-between bg-[#FAF5F2]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#A95367] fill-[#A95367]" />
              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-xl font-bold text-[#201A18] tracking-wide"
              >
                YOUR WISHLIST ({items.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white text-[#665C56] hover:text-[#201A18] transition-colors cursor-pointer"
              aria-label="Close Wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#F6D8D4]/50 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <Heart className="w-12 h-12 text-[#C98A63] mx-auto stroke-1" />
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-lg font-bold text-[#201A18]"
                >
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-[#665C56] max-w-xs mx-auto">
                  Click the heart icon on any product to save your favorite botanical rituals for later.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 bg-[#A95367] text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-[#8F3F52] transition-colors cursor-pointer"
                >
                  EXPLORE BEST SELLERS
                </button>
              </div>
            ) : (
              items.map((product) => (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md border border-[#F6D8D4] shrink-0 bg-[#FAF5F2]"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-sm font-bold text-[#201A18] leading-tight truncate"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveFromWishlist(product)}
                        className="text-[#665C56] hover:text-red-700 transition-colors p-1 cursor-pointer"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-xs text-[#A95367] font-semibold mt-0.5 block tabular-nums">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    
                    <button
                      onClick={() => onMoveToCart(product)}
                      className="mt-2.5 w-full py-1.5 px-3 bg-[#A95367] hover:bg-[#8F3F52] text-white text-[11px] font-bold tracking-[0.12em] uppercase rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>MOVE TO BAG</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-4 border-t border-[#F6D8D4] bg-[#FAF5F2]">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#4A1E2B] hover:bg-[#37141E] text-white text-xs font-bold tracking-[0.14em] uppercase rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CONTINUE BROWSING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
