import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Truck, Check, ArrowRight, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const FREE_SHIPPING_THRESHOLD = 999;
  const progressPercent = Math.min(100, Math.round((rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - rawSubtotal);

  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const shippingFee = rawSubtotal >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : 99;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'GLOW15') {
      setDiscountPercent(15);
      setPromoSuccess('15% discount applied successfully!');
    } else if (code === 'VELVET20') {
      setDiscountPercent(20);
      setPromoSuccess('20% VIP discount applied!');
    } else {
      setPromoError('Invalid coupon code. Try GLOW15 for 15% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#F6D8D4] flex items-center justify-between bg-[#FAF5F2]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#A95367]" />
              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-xl font-bold text-[#201A18] tracking-wide"
              >
                YOUR SHOPPING BAG ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white text-[#665C56] hover:text-[#201A18] transition-colors cursor-pointer"
              aria-label="Close Shopping Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dynamic Free Shipping Progress Bar */}
          <div className="bg-[#FBF0EB] px-5 py-3 border-b border-[#F6D8D4]">
            <div className="flex items-center gap-2 text-xs text-[#201A18] mb-1.5 font-medium">
              <Truck className="w-4 h-4 text-[#A95367] shrink-0" />
              {remainingForFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-[#A95367]">₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> more for <strong className="text-[#4A1E2B]">FREE Express Shipping</strong>
                </span>
              ) : (
                <span className="text-emerald-800 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Congratulations! You unlocked FREE Express Shipping
                </span>
              )}
            </div>
            <div className="w-full bg-[#F6D8D4] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#A95367] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-[#F6D8D4]/50 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#C98A63] mx-auto stroke-1" />
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-lg font-bold text-[#201A18]"
                >
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#665C56] max-w-xs mx-auto">
                  Explore our clean skincare rituals and botanical elixirs to fill your bag.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 bg-[#A95367] text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-[#8F3F52] transition-colors cursor-pointer"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-3 sm:gap-4 items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-md border border-[#F6D8D4] shrink-0 bg-[#FAF5F2]"
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
                        onClick={() => onRemoveItem(product.id)}
                        className="text-[#665C56] hover:text-red-700 transition-colors p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#665C56] mt-0.5">{product.volume}</p>
                    
                    <div className="flex items-center justify-between mt-2.5">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#F6D8D4] rounded bg-white">
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="px-2 py-1 text-[#665C56] hover:text-[#A95367] hover:bg-[#FBF0EB] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums text-[#201A18]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="px-2 py-1 text-[#665C56] hover:text-[#A95367] hover:bg-[#FBF0EB] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#A95367] tabular-nums">
                        ₹{(product.price * quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#F6D8D4] bg-[#FAF5F2] space-y-3">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#665C56] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon code (e.g. GLOW15)"
                    className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-[#F6D8D4] rounded uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#A95367]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#4A1E2B] text-white text-xs font-semibold tracking-wider rounded hover:bg-[#37141E] transition-colors cursor-pointer uppercase"
                >
                  Apply
                </button>
              </form>

              {promoSuccess && (
                <p className="text-[11px] text-emerald-700 font-medium">{promoSuccess}</p>
              )}
              {promoError && (
                <p className="text-[11px] text-red-600 font-medium">{promoError}</p>
              )}

              {/* Price Calculation Lines */}
              <div className="space-y-1.5 text-xs text-[#665C56] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#201A18] tabular-nums">
                    ₹{rawSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="tabular-nums">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-semibold uppercase text-[11px]">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#201A18] pt-2 border-t border-[#F6D8D4]">
                  <span>Total</span>
                  <span className="text-[#A95367] tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-3 bg-[#A95367] hover:bg-[#8F3F52] text-white text-xs font-bold tracking-[0.14em] uppercase rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5 cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#665C56]/80">
                🔒 100% Encrypted SSL Checkout • 15-Day Hassle-Free Returns
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
