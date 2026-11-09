import React, { useState } from 'react';
import { X, Star, Heart, Plus, Minus, Check, Sparkles, Shield, Droplets } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden border border-[#F6D8D4] animate-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-[#665C56] hover:text-[#201A18] hover:bg-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image Column */}
            <div className="bg-[#FAF5F2] p-6 sm:p-8 flex items-center justify-center relative">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-80 sm:max-h-96 w-auto object-contain rounded-lg shadow-sm"
              />
              <button
                onClick={() => onToggleWishlist(product)}
                className={`absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 shadow-xs flex items-center justify-center transition-colors cursor-pointer ${
                  isWishlisted ? 'text-[#A95367]' : 'text-[#665C56] hover:text-[#A95367]'
                }`}
                title="Save to wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#A95367]' : ''}`} />
              </button>
            </div>

            {/* Details Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              <div className="space-y-4">
                {/* Category & Skin Type */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="uppercase tracking-[0.16em] font-semibold text-[#A95367]">
                    {product.category}
                  </span>
                  <span className="text-[#665C56]">·</span>
                  <span className="text-[#665C56] font-medium">{product.skinType} Skin</span>
                  <span className="text-[#665C56]">·</span>
                  <span className="text-[#665C56]">{product.volume}</span>
                </div>

                {/* Name */}
                <h2
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-2xl font-bold text-[#201A18] leading-tight"
                >
                  {product.name}
                </h2>

                {/* Ratings */}
                <div className="flex items-center gap-2">
                  <div className="flex text-[#E3A62F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#665C56] font-semibold">
                    5.0 ({product.reviewsCount} verified reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[#A95367] tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#665C56]/70 line-through tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    In Stock &amp; Ready to Ship
                  </span>
                </div>

                {/* Benefits List */}
                <div className="space-y-1.5 pt-2 border-t border-[#F6D8D4]/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A18]">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-1 text-xs text-[#665C56]">
                    {product.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C98A63] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application Ritual */}
                <div className="pt-2 border-t border-[#F6D8D4]/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A18] flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#A95367]" />
                    <span>Application Ritual:</span>
                  </h4>
                  <p className="text-xs text-[#665C56] mt-1 leading-relaxed">
                    {product.ritual}
                  </p>
                </div>

                {/* Full Ingredients */}
                <div className="pt-2 border-t border-[#F6D8D4]/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A18] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#C98A63]" />
                    <span>Key Ingredients:</span>
                  </h4>
                  <p className="text-[11px] text-[#665C56] mt-1 italic leading-relaxed">
                    {product.ingredients}
                  </p>
                </div>
              </div>

              {/* Purchase Controls */}
              <div className="pt-5 border-t border-[#F6D8D4] mt-5 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Stepper */}
                  <div className="flex items-center border border-[#F6D8D4] rounded bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-[#665C56] hover:text-[#A95367] hover:bg-[#FBF0EB] transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-sm font-bold tabular-nums text-[#201A18]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-[#665C56] hover:text-[#A95367] hover:bg-[#FBF0EB] transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`flex-1 py-3 px-4 rounded text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      added
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#A95367] hover:bg-[#8F3F52] text-white hover:-translate-y-0.5'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>ADDED TO BAG</span>
                      </>
                    ) : (
                      <span>ADD TO BAG • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
