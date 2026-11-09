import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, Instagram, Facebook, Youtube } from 'lucide-react';
import { Page } from '../types';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Skin Consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: 'Skin Consultation', message: '' });
      }, 500);
    }
  };

  const faqs = [
    {
      q: 'How long does domestic shipping take across India?',
      a: 'All orders are dispatched within 24 business hours from our temperature-controlled facility. Metro deliveries arrive in 2-3 business days, while non-metro locations take 3-5 business days via BlueDart Air / Delhivery Express.',
    },
    {
      q: 'Are your botanical actives safe for highly sensitive or rosacea-prone skin?',
      a: 'Yes. All Velvetique formulations are strictly fragrance-free or scented exclusively with cold-distilled floral hydrosols. Every product undergoes independent dermatologist patch testing on sensitive skin subjects, with zero synthetic irritants or sulfates.',
    },
    {
      q: 'What is your 15-Day Return & Replacement policy?',
      a: 'If a product does not agree with your skin or arrived damaged, simply email concierge@velvetiquebeauty.com within 15 days of receiving your parcel. We arrange a doorstep courier pickup and issue a 100% full refund or replacement product.',
    },
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* 1. Header Banner */}
      <section className="bg-[#FBF0EB] py-14 border-b border-[#F6D8D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-xs text-[#665C56] mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#A95367] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="mx-2">/</span>
            <span className="text-[#A95367] font-semibold">Contact</span>
          </nav>

          <h1
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#201A18] tracking-tight"
          >
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-[#665C56] mt-2 max-w-xl mx-auto font-light leading-relaxed">
            Our beauty concierges and licensed formulation chemists are here to help customize your daily ritual.
          </p>
        </div>
      </section>

      {/* 2. Two-Column Split Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#F6D8D4] shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A95367]">
                SEND A MESSAGE
              </span>
              <h2
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-2xl sm:text-3xl font-bold text-[#201A18]"
              >
                We Would Love to Hear From You
              </h2>
              <p className="text-xs text-[#665C56]">
                Expect a personalized response from our skin team within 4 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#FAF5F2] rounded-xl border border-emerald-300 text-center space-y-3 animate-in zoom-in-95">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-xl font-bold text-[#201A18]"
                >
                  Message Received with Gratitude!
                </h3>
                <p className="text-xs text-[#665C56] max-w-sm mx-auto">
                  Our Senior Botanical Concierge is reviewing your note and will reply shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#A95367] text-white text-xs font-semibold uppercase tracking-wider rounded cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#201A18] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Sharma"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F2] border border-[#F6D8D4] rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#A95367]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#201A18] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. radhika@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F2] border border-[#F6D8D4] rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#A95367]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#201A18] mb-1">
                    Subject / Inquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F2] border border-[#F6D8D4] rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#A95367] cursor-pointer"
                  >
                    <option value="Skin Consultation">Complimentary Skin Consultation</option>
                    <option value="Order Tracking">Order Tracking &amp; Delivery</option>
                    <option value="Returns">Returns &amp; Exchanges</option>
                    <option value="Wholesale">Press &amp; Wholesale Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#201A18] mb-1">
                    Your Message / Skin Concerns *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your skin goals, questions, or order details..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF5F2] border border-[#F6D8D4] rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#A95367]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#A95367] hover:bg-[#8F3F52] text-white text-xs font-bold tracking-[0.14em] uppercase rounded transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Social, Stylized Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Atelier Contact Details Card */}
            <div className="bg-[#FAF5F2] p-6 sm:p-8 rounded-2xl border border-[#F6D8D4] space-y-5">
              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-xl font-bold text-[#201A18] uppercase tracking-wider"
              >
                Flagship Atelier &amp; Concierge
              </h3>

              <div className="space-y-4 text-xs text-[#665C56]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A95367] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#201A18] block">Velvetique Flagship Boutique</strong>
                    <span>14/2 Lavelle Road, Shanthala Nagar, Bengaluru, Karnataka 560001</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A95367] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#201A18] block">Phone &amp; WhatsApp Concierge</strong>
                    <span>+91 80 4123 8899 / +91 98450 12345</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#A95367] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#201A18] block">Direct Concierge Email</strong>
                    <span>concierge@velvetiquebeauty.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#A95367] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#201A18] block">Consultation Hours</strong>
                    <span>Monday – Saturday: 10:00 AM – 7:30 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-4 border-t border-[#F6D8D4] flex items-center gap-3">
                <span className="text-xs font-semibold text-[#201A18]">Follow Rituals:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-[#F6D8D4] text-[#A95367] hover:bg-[#A95367] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-[#F6D8D4] text-[#A95367] hover:bg-[#A95367] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white border border-[#F6D8D4] text-[#A95367] hover:bg-[#A95367] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Stylized Map Card */}
            <div className="bg-[#FAF5F2] rounded-2xl overflow-hidden border border-[#F6D8D4] p-4 text-center">
              <div className="aspect-[16/9] w-full rounded-xl bg-[#F0E4DE] flex flex-col items-center justify-center p-4 relative overflow-hidden border border-[#F6D8D4]">
                {/* Visual stylized street grid lines */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A95367_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-1">
                  <div className="w-10 h-10 rounded-full bg-[#A95367] text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4
                    style={{ fontFamily: 'var(--font-serif)' }}
                    className="text-base font-bold text-[#201A18]"
                  >
                    Bengaluru Flagship Atelier
                  </h4>
                  <p className="text-[11px] text-[#665C56]">
                    Lavelle Road • Walk-ins &amp; Skin Consultations Welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FAQ Accordion Section */}
      <section className="bg-[#FAF5F2] py-16 border-t border-[#F6D8D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A95367]">
              COMMON QUESTIONS
            </span>
            <h2
              style={{ fontFamily: 'var(--font-serif)' }}
              className="text-2xl sm:text-3xl font-bold text-[#201A18] uppercase tracking-wider mt-1"
            >
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-[#A95367] mx-auto mt-2 rounded-full" />
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#F6D8D4] overflow-hidden transition-shadow shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-sm font-bold text-[#201A18] hover:text-[#A95367] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#A95367] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#665C56] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#665C56] leading-relaxed border-t border-[#F6D8D4]/50 pt-3 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
