import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.subtitle.toLowerCase().includes(term) ||
        p.ingredients.toLowerCase().includes(term)
    );
  }, [searchTerm, products]);

  if (!isOpen) return null;

  const popularTags = ['Niacinamide', 'Salicylic Acid', 'Damask Rose', 'Moisturizer', 'SPF 50', 'Ayurvedic'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-start justify-center p-4 pt-16 sm:pt-24">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-[#F6D8D4] animate-in zoom-in-95 duration-200">
          
          {/* Search Header Input */}
          <div className="p-4 sm:p-5 border-b border-[#F6D8D4] flex items-center gap-3 bg-[#FAF5F2]">
            <Search className="w-5 h-5 text-[#A95367] shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products, actives, ingredients (e.g., Niacinamide, Rose)..."
              className="w-full text-sm sm:text-base bg-transparent text-[#201A18] placeholder:text-[#665C56]/70 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs text-[#665C56] hover:text-[#201A18] px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#665C56] hover:text-[#201A18] hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions when empty */}
          {!searchTerm && (
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#665C56]">
                <Sparkles className="w-3.5 h-3.5 text-[#C98A63]" />
                <span>Popular Botanical Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1.5 text-xs bg-[#FBF0EB] hover:bg-[#A95367] hover:text-white text-[#201A18] rounded-full transition-colors cursor-pointer border border-[#F6D8D4]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {searchTerm && (
            <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#F6D8D4]/60 p-4">
              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-[#665C56] space-y-2">
                  <p className="text-sm">No botanical rituals matched &ldquo;{searchTerm}&rdquo;</p>
                  <p className="text-xs text-[#665C56]/80">
                    Try searching for ingredients like Rose, Hyaluronic Acid, or Salicylic Acid.
                  </p>
                </div>
              ) : (
                filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="py-3 px-3 flex items-center justify-between gap-3 hover:bg-[#FAF5F2] rounded-lg transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-12 h-12 object-cover rounded border border-[#F6D8D4] shrink-0"
                      />
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-[#A95367] tracking-wider">
                          {p.category}
                        </span>
                        <h4
                          style={{ fontFamily: 'var(--font-serif)' }}
                          className="text-sm font-bold text-[#201A18] group-hover:text-[#A95367] transition-colors"
                        >
                          {p.name}
                        </h4>
                        <p className="text-xs text-[#665C56] line-clamp-1">{p.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#201A18] tabular-nums">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#665C56] group-hover:text-[#A95367] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
