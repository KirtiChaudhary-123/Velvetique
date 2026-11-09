import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, categoryFilter?: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shopCategories = [
    { name: 'All Products', category: undefined },
    { name: 'Skincare', category: 'Skincare' },
    { name: 'Makeup', category: 'Makeup' },
    { name: 'Haircare', category: 'Haircare' },
    { name: 'Bodycare', category: 'Bodycare' },
    { name: 'Sun Care', category: 'Sun Care' },
    { name: 'Gift Sets', category: 'Gift Sets' },
  ];

  const collectionsList = [
    'Glow Essentials',
    'Everyday Makeup',
    'Clean Hair Rituals',
    'Self-Care Gift Edits',
    'Botanical Sun Defense',
    'Ayurvedic Restorative Series',
  ];

  return (
    <header
      className={`sticky top-0 z-30 bg-white/95 backdrop-blur-md transition-shadow duration-300 border-b ${
        isScrolled ? 'border-[#F6D8D4] shadow-sm' : 'border-[#F6D8D4]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#201A18] hover:text-[#A95367] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Wordmark & Botanical Icon */}
          <div
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center justify-center cursor-pointer group py-2 shrink-0 select-none"
          >
            {/* Delicate Botanical Flower Motif SVG */}
            <svg
              className="w-5 h-5 text-[#C98A63] mb-0.5 group-hover:scale-105 transition-transform"
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
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#201A18] uppercase transition-colors group-hover:text-[#A95367]"
            >
              VELVETIQUE
            </span>
            <span className="text-[9px] font-medium tracking-[0.38em] text-[#665C56] uppercase -mt-0.5">
              BEAUTY
            </span>
          </div>

          {/* Desktop Center Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {/* HOME */}
            <button
              onClick={() => onNavigate('home')}
              className={`relative py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#A95367]'
                  : 'text-[#201A18] hover:text-[#A95367]'
              }`}
            >
              HOME
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A95367] rounded-full" />
              )}
            </button>

            {/* SHOP WITH DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('shop')}
                className={`flex items-center gap-1 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                  currentPage === 'shop'
                    ? 'text-[#A95367]'
                    : 'text-[#201A18] hover:text-[#A95367]'
                }`}
              >
                <span>SHOP</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#665C56]" />
                {currentPage === 'shop' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A95367] rounded-full" />
                )}
              </button>

              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-lg shadow-xl border border-[#F6D8D4] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {shopCategories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => {
                        onNavigate('shop', cat.category);
                        setShopDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-[#201A18] hover:bg-[#FBF0EB] hover:text-[#A95367] tracking-wider transition-colors flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* COLLECTIONS WITH DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setCollectionsDropdownOpen(true)}
              onMouseLeave={() => setCollectionsDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('collections')}
                className={`flex items-center gap-1 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                  currentPage === 'collections'
                    ? 'text-[#A95367]'
                    : 'text-[#201A18] hover:text-[#A95367]'
                }`}
              >
                <span>COLLECTIONS</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#665C56]" />
                {currentPage === 'collections' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A95367] rounded-full" />
                )}
              </button>

              {collectionsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-[#F6D8D4] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {collectionsList.map((col) => (
                    <button
                      key={col}
                      onClick={() => {
                        onNavigate('collections');
                        setCollectionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-[#201A18] hover:bg-[#FBF0EB] hover:text-[#A95367] tracking-wide transition-colors"
                    >
                      {col}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ABOUT US */}
            <button
              onClick={() => onNavigate('about')}
              className={`relative py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#A95367]'
                  : 'text-[#201A18] hover:text-[#A95367]'
              }`}
            >
              ABOUT US
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A95367] rounded-full" />
              )}
            </button>

            {/* BLOG */}
            <button
              onClick={() => onNavigate('blog')}
              className={`relative py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                currentPage === 'blog'
                  ? 'text-[#A95367]'
                  : 'text-[#201A18] hover:text-[#A95367]'
              }`}
            >
              BLOG
              {currentPage === 'blog' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A95367] rounded-full" />
              )}
            </button>

            {/* CONTACT */}
            <button
              onClick={() => onNavigate('contact')}
              className={`relative py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#A95367]'
                  : 'text-[#201A18] hover:text-[#A95367]'
              }`}
            >
              CONTACT
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A95367] rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#201A18] hover:text-[#A95367] transition-colors rounded-full hover:bg-[#FBF0EB] cursor-pointer"
              aria-label="Open Search"
              title="Search products and rituals"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Account Icon */}
            <button
              onClick={onOpenAccount}
              className="p-2 text-[#201A18] hover:text-[#A95367] transition-colors rounded-full hover:bg-[#FBF0EB] cursor-pointer"
              aria-label="Account Profile"
              title="My Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Wishlist Heart Icon with Count Badge */}
            <button
              onClick={onOpenWishlist}
              className="p-2 text-[#201A18] hover:text-[#A95367] transition-colors rounded-full hover:bg-[#FBF0EB] relative cursor-pointer"
              aria-label="View Wishlist"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#A95367] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon with Numeric Badge Counter */}
            <button
              onClick={onOpenCart}
              className="p-2 text-[#201A18] hover:text-[#A95367] transition-colors rounded-full hover:bg-[#FBF0EB] relative cursor-pointer"
              aria-label="View Shopping Cart"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#A95367] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#F6D8D4] bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-[#201A18] hover:text-[#A95367]"
          >
            Home
          </button>
          <div className="py-1 border-y border-[#F6D8D4]/50">
            <button
              onClick={() => {
                onNavigate('shop');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-1 text-sm font-semibold tracking-wider uppercase text-[#A95367]"
            >
              Shop All
            </button>
            <div className="grid grid-cols-2 gap-2 mt-2 pl-3">
              {shopCategories.slice(1).map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    onNavigate('shop', cat.category);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-xs text-[#665C56] hover:text-[#A95367] py-1"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              onNavigate('collections');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-[#201A18] hover:text-[#A95367]"
          >
            Collections
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-[#201A18] hover:text-[#A95367]"
          >
            About Us
          </button>
          <button
            onClick={() => {
              onNavigate('blog');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-[#201A18] hover:text-[#A95367]"
          >
            Blog (The Glow Journal)
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-[#201A18] hover:text-[#A95367]"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
