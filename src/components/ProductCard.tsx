import React, { useState } from 'react';
import { Heart, Star, Eye, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onQuickView,
}) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <article
      className="bg-white rounded-lg border border-[#F6D8D4] overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
    >
      {/* Top Wishlist Heart Icon */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleWishlist(product);
        }}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center transition-transform hover:scale-110 shadow-xs cursor-pointer ${
          isWishlisted ? 'text-[#A95367]' : 'text-[#665C56] hover:text-[#A95367]'
        }`}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isWishlisted ? 'fill-[#A95367]' : 'stroke-current'
          }`}
        />
      </button>

      {/* Badge if Best Seller or New */}
      {product.isBestSeller && (
        <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#4A1E2B] text-rose-100 shadow-xs">
          Best Seller
        </span>
      )}
      {!product.isBestSeller && product.isNew && (
        <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#A95367] text-white shadow-xs">
          New
        </span>
      )}

      {/* Product Image Area */}
      <div
        onClick={() => onQuickView(product)}
        className="relative pt-[90%] bg-[#FAF5F2] overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Quick View Hover Overlay Button */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-3.5 py-1.5 bg-white/95 text-[#201A18] text-xs font-semibold tracking-wider uppercase rounded shadow-sm flex items-center gap-1.5 hover:bg-white transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#A95367]" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Volume */}
          <div className="flex items-center justify-between text-xs text-[#665C56] mb-1.5">
            <span className="uppercase tracking-[0.14em] font-medium text-[11px] text-[#A95367]">
              {product.category}
            </span>
            <span className="text-[11px] text-[#665C56]/80">{product.volume}</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-base sm:text-lg font-bold text-[#201A18] leading-snug cursor-pointer group-hover:text-[#A95367] transition-colors line-clamp-2"
          >
            {product.name}
          </h3>

          {/* Subtitle / Key Claim */}
          <p className="text-xs text-[#665C56] mt-1 line-clamp-1 leading-relaxed">
            {product.subtitle}
          </p>

          {/* 5 Gold Stars & Review Count */}
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="flex items-center text-[#E3A62F]" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-[#665C56] tabular-nums font-medium">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart Container */}
        <div className="mt-4 pt-3 border-t border-[#F6D8D4]/60">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg sm:text-xl font-bold text-[#A95367] tabular-nums tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#665C56]/70 line-through tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Pinned Mauve ADD TO CART Button */}
          <button
            type="button"
            onClick={handleAdd}
            className={`w-full py-2.5 px-4 rounded text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
              justAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-[#A95367] hover:bg-[#8F3F52] text-white hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <span>ADD TO CART</span>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
