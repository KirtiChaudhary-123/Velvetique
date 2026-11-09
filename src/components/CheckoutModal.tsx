import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote, Sparkles, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: 'Aditi Rao',
    email: 'aditi.rao@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Lotus Bloom Apartments, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    paymentMethod: 'upi',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingFee = subtotal >= 999 || items.length === 0 ? 0 : 99;
  const grandTotal = subtotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleFinish = () => {
    onOrderSuccess();
    onClose();
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={step === 'form' ? onClose : undefined}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-[#F6D8D4] animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#F6D8D4] flex items-center justify-between bg-[#FAF5F2]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#A95367]" />
              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-xl font-bold text-[#201A18] tracking-wide"
              >
                {step === 'form' ? 'VELVETIQUE EXPRESS CHECKOUT' : 'ORDER CONFIRMATION'}
              </h2>
            </div>
            {step === 'form' && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#665C56] hover:text-[#201A18] hover:bg-white transition-colors cursor-pointer"
                aria-label="Close Checkout"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* Order quick summary bar */}
              <div className="p-3.5 bg-[#FBF0EB] rounded-lg border border-[#F6D8D4] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#665C56]">Total Order Amount:</span>
                  <span className="ml-2 font-bold text-base text-[#A95367] tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-[#4A1E2B] font-medium flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  {shippingFee === 0 ? 'Free Express Delivery' : 'Standard Delivery ₹99'}
                </span>
              </div>

              {/* Delivery Details */}
              <div className="space-y-4">
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-base font-bold text-[#201A18] uppercase tracking-wider"
                >
                  1. Shipping &amp; Contact Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#201A18] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#F6D8D4] rounded focus:ring-1 focus:ring-[#A95367] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#201A18] mb-1">
                      Mobile Number (for SMS Tracking)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#F6D8D4] rounded focus:ring-1 focus:ring-[#A95367] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#201A18] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#F6D8D4] rounded focus:ring-1 focus:ring-[#A95367] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#201A18] mb-1">
                    Flat / House No. &amp; Street Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#F6D8D4] rounded focus:ring-1 focus:ring-[#A95367] outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#201A18] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#F6D8D4] rounded focus:ring-1 focus:ring-[#A95367] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#201A18] mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#F6D8D4] rounded focus:ring-1 focus:ring-[#A95367] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#201A18] mb-1">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#F6D8D4] rounded focus:ring-1 focus:ring-[#A95367] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-4 border-t border-[#F6D8D4]">
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-base font-bold text-[#201A18] uppercase tracking-wider"
                >
                  2. Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`border rounded-lg p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      formData.paymentMethod === 'upi'
                        ? 'border-[#A95367] bg-[#FBF0EB] ring-1 ring-[#A95367]'
                        : 'border-[#F6D8D4] hover:bg-[#FAF5F2]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className="sr-only"
                    />
                    <Sparkles className="w-5 h-5 text-[#A95367] mb-1" />
                    <span className="text-xs font-bold text-[#201A18]">Instant UPI</span>
                    <span className="text-[10px] text-[#665C56]">GPay, PhonePe, Paytm</span>
                  </label>

                  <label
                    className={`border rounded-lg p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#A95367] bg-[#FBF0EB] ring-1 ring-[#A95367]'
                        : 'border-[#F6D8D4] hover:bg-[#FAF5F2]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="sr-only"
                    />
                    <CreditCard className="w-5 h-5 text-[#A95367] mb-1" />
                    <span className="text-xs font-bold text-[#201A18]">Cards / Netbanking</span>
                    <span className="text-[10px] text-[#665C56]">Visa, MC, RuPay</span>
                  </label>

                  <label
                    className={`border rounded-lg p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#A95367] bg-[#FBF0EB] ring-1 ring-[#A95367]'
                        : 'border-[#F6D8D4] hover:bg-[#FAF5F2]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="sr-only"
                    />
                    <Banknote className="w-5 h-5 text-[#A95367] mb-1" />
                    <span className="text-xs font-bold text-[#201A18]">Cash on Delivery</span>
                    <span className="text-[10px] text-[#665C56]">Pay at doorstep</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#F6D8D4]">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#A95367] hover:bg-[#8F3F52] text-white text-xs font-bold tracking-[0.14em] uppercase rounded transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>COMPLETE ORDER • ₹{grandTotal.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Order Success Receipt Screen */
            <div className="p-6 sm:p-8 space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 animate-in zoom-in duration-300">
                <CheckCircle className="w-10 h-10 stroke-[2]" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A95367]">
                  Payment Verified &amp; Confirmed
                </span>
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-2xl sm:text-3xl font-bold text-[#201A18] mt-1"
                >
                  Thank you for your order!
                </h3>
                <p className="text-xs text-[#665C56] mt-1">
                  Order ID: <strong className="text-[#201A18]">#VB-88412</strong>
                </p>
              </div>

              <div className="p-4 bg-[#FAF5F2] rounded-lg border border-[#F6D8D4] text-left text-xs space-y-2">
                <div className="flex justify-between pb-2 border-b border-[#F6D8D4]">
                  <span className="text-[#665C56]">Delivery Recipient:</span>
                  <strong className="text-[#201A18]">{formData.fullName}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#F6D8D4]">
                  <span className="text-[#665C56]">Shipping Address:</span>
                  <span className="text-[#201A18] text-right font-medium">
                    {formData.address}, {formData.city}, {formData.pincode}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#F6D8D4]">
                  <span className="text-[#665C56]">Estimated Arrival:</span>
                  <span className="text-emerald-800 font-semibold">3-4 Business Days (Express Air)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#665C56]">Total Paid:</span>
                  <strong className="text-[#A95367] text-sm tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </strong>
                </div>
              </div>

              <p className="text-xs text-[#665C56] max-w-md mx-auto">
                A confirmation receipt and live tracking link have been dispatched to{' '}
                <strong className="text-[#201A18]">{formData.email}</strong>.
              </p>

              <button
                onClick={handleFinish}
                className="w-full py-3 bg-[#4A1E2B] hover:bg-[#37141E] text-white text-xs font-bold tracking-[0.14em] uppercase rounded transition-colors cursor-pointer"
              >
                RETURN TO STORE &amp; EXPLORE RITUALS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
