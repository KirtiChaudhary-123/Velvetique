import React, { useState, useMemo } from 'react';
import { RotateCcw, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product, Page } from '../types';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS_DATA } from '../data/mockData';

interface ShopPageProps {
  onNavigate: (page: Page) => void;
  initialCategory?: string;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onNavigate,
  initialCategory,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [maxPrice, setMaxPrice] = useState<number>(2500);
  const [selectedSkinType, setSelectedSkinType] = useState<string>('All');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = [
    { name: 'All', count: PRODUCTS_DATA.length },
    { name: 'Skincare', count: PRODUCTS_DATA.filter((p) => p.category === 'Skincare').length },
    { name: 'Makeup', count: PRODUCTS_DATA.filter((p) => p.category === 'Makeup').length },
    { name: 'Haircare', count: PRODUCTS_DATA.filter((p) => p.category === 'Haircare').length },
    { name: 'Bodycare', count: PRODUCTS_DATA.filter((p) => p.category === 'Bodycare').length },
    { name: 'Sun Care', count: PRODUCTS_DATA.filter((p) => p.category === 'Sun Care').length },
    { name: 'Gift Sets', count: PRODUCTS_DATA.filter((p) => p.category === 'Gift Sets').length },
  ];

  const skinTypes = ['All', 'Oily', 'Dry', 'Sensitive', 'Combination'];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      if (product.price > maxPrice) return false;
      if (selectedSkinType !== 'All' && product.skinType !== 'All' && product.skinType !== selectedSkinType) {
        return false;
      }
      if (minRating > 0 && product.rating < minRating) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // Popularity default
      return b.reviewsCount - a.reviewsCount;
    });
  }, [selectedCategory, maxPrice, selectedSkinType, minRating, sortBy]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPageNum - 1) * itemsPerPage,
    currentPageNum * itemsPerPage
  );

  const resetFilters = () => {
    setSelectedCategory('All');
    setMaxPrice(2500);
    setSelectedSkinType('All');
    setMinRating(0);
    setSortBy('popularity');
    setCurrentPageNum(1);
  };

  return (
    <div className="w-full bg-white pb-24">
      {/* 1. Header Banner with Breadcrumbs */}
      <section className="bg-[#FBF0EB] py-12 border-b border-[#F6D8D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-xs text-[#665C56] mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#A95367] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-[#A95367] font-semibold">Shop</span>
          </nav>

          <h1
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#201A18] tracking-tight"
          >
            Shop All Products
          </h1>
          <p className="text-sm text-[#665C56] mt-2 max-w-xl mx-auto">
            100% clean, vegan, dermatologically approved formulations honoring ancient herbal wisdom and high-potency actives.
          </p>
        </div>
      </section>

      {/* 2. Main Content (Sidebar + Product Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between pb-6 border-b border-[#F6D8D4] mb-6">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-[#F6D8D4] rounded text-xs font-semibold uppercase tracking-wider text-[#201A18]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#A95367]" />
            <span>{mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>

          <span className="text-xs text-[#665C56] tabular-nums">
            {filteredProducts.length} Products Found
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Left Sidebar Filters */}
          <aside
            className={`lg:col-span-1 space-y-7 bg-white p-6 rounded-xl border border-[#F6D8D4] ${
              mobileFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F6D8D4]">
              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-lg font-bold text-[#201A18] uppercase tracking-wider"
              >
                Filters
              </h3>
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-[11px] font-semibold text-[#A95367] hover:text-[#8F3F52] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            </div>

            {/* Category Filter */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A18]">
                Category
              </h4>
              <div className="space-y-1.5 text-xs text-[#665C56]">
                {categories.map((cat) => (
                  <label
                    key={cat.name}
                    className="flex items-center justify-between cursor-pointer hover:text-[#A95367] py-0.5 group"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.name}
                        onChange={() => {
                          setSelectedCategory(cat.name);
                          setCurrentPageNum(1);
                        }}
                        className="text-[#A95367] focus:ring-[#A95367] accent-[#A95367]"
                      />
                      <span className={selectedCategory === cat.name ? 'font-semibold text-[#A95367]' : ''}>
                        {cat.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#665C56]/70 tabular-nums">
                      ({cat.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2.5 pt-4 border-t border-[#F6D8D4]/60">
              <div className="flex items-center justify-between text-xs">
                <h4 className="font-bold uppercase tracking-wider text-[#201A18]">
                  Max Price
                </h4>
                <span className="font-bold text-[#A95367] tabular-nums">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="2500"
                step="50"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setCurrentPageNum(1);
                }}
                className="w-full accent-[#A95367] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#665C56]/80 tabular-nums">
                <span>₹300</span>
                <span>₹2,500</span>
              </div>
            </div>

            {/* Skin Type Filter */}
            <div className="space-y-2.5 pt-4 border-t border-[#F6D8D4]/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A18]">
                Skin Type
              </h4>
              <div className="space-y-1.5 text-xs text-[#665C56]">
                {skinTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer hover:text-[#A95367] py-0.5"
                  >
                    <input
                      type="radio"
                      name="skinType"
                      checked={selectedSkinType === type}
                      onChange={() => {
                        setSelectedSkinType(type);
                        setCurrentPageNum(1);
                      }}
                      className="text-[#A95367] focus:ring-[#A95367] accent-[#A95367]"
                    />
                    <span className={selectedSkinType === type ? 'font-semibold text-[#A95367]' : ''}>
                      {type} {type !== 'All' ? 'Skin' : 'Skin Types'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Customer Rating Filter */}
            <div className="space-y-2.5 pt-4 border-t border-[#F6D8D4]/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#201A18]">
                Customer Rating
              </h4>
              <div className="space-y-1.5 text-xs text-[#665C56]">
                {[
                  { label: 'All Ratings', value: 0 },
                  { label: '4.5★ & above', value: 4.5 },
                  { label: '4.0★ & above', value: 4.0 },
                ].map((rating) => (
                  <label
                    key={rating.label}
                    className="flex items-center gap-2 cursor-pointer hover:text-[#A95367] py-0.5"
                  >
                    <input
                      type="radio"
                      name="rating"
                      checked={minRating === rating.value}
                      onChange={() => {
                        setMinRating(rating.value);
                        setCurrentPageNum(1);
                      }}
                      className="text-[#A95367] focus:ring-[#A95367] accent-[#A95367]"
                    />
                    <span>{rating.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Product Grid Column */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Top Toolbar (Sort dropdown & Item Count) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-[#F6D8D4]">
              <span className="text-xs text-[#665C56] tabular-nums hidden sm:block">
                Showing {filteredProducts.length} luxury botanical formulations
              </span>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <label className="text-xs font-semibold text-[#201A18] whitespace-nowrap">
                  Sort By:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 bg-white border border-[#F6D8D4] rounded text-xs text-[#201A18] focus:outline-none focus:ring-1 focus:ring-[#A95367] cursor-pointer"
                >
                  <option value="popularity">Popularity (Most Loved)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* 3-Column Products Grid */}
            {paginatedProducts.length === 0 ? (
              <div className="py-20 text-center space-y-3 bg-[#FAF5F2] rounded-xl border border-[#F6D8D4] p-8">
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-xl font-bold text-[#201A18]"
                >
                  No formulations matched your filters
                </h3>
                <p className="text-xs text-[#665C56] max-w-sm mx-auto">
                  Try broadening your price range or clearing selected skin types to view more products.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-[#A95367] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#8F3F52] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
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
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                  disabled={currentPageNum === 1}
                  className="p-2 rounded border border-[#F6D8D4] text-[#665C56] hover:text-[#201A18] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF5F2] transition-colors cursor-pointer"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const pNum = i + 1;
                  return (
                    <button
                      key={pNum}
                      onClick={() => setCurrentPageNum(pNum)}
                      className={`w-9 h-9 rounded text-xs font-bold transition-all cursor-pointer ${
                        currentPageNum === pNum
                          ? 'bg-[#A95367] text-white shadow-xs'
                          : 'border border-[#F6D8D4] text-[#201A18] hover:bg-[#FAF5F2]'
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPageNum === totalPages}
                  className="p-2 rounded border border-[#F6D8D4] text-[#665C56] hover:text-[#201A18] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF5F2] transition-colors cursor-pointer"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
