import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Layers, Palette } from 'lucide-react';

interface ElementorExporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ElementorExporterModal: React.FC<ElementorExporterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'mapping' | 'css' | 'json'>('mapping');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const wordpressCustomizerCSS = `/* ==========================================================
   VELVETIQUE BEAUTY - WORDPRESS CUSTOMIZER ADDITIONAL CSS
   Paste into: WP Admin > Appearance > Customize > Additional CSS
   ========================================================== */

/* Brand Typography & Tokens */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

:root {
  --vb-mauve: #A95367;
  --vb-mauve-dark: #8F3F52;
  --vb-maroon: #4A1E2B;
  --vb-blush: #FBF0EB;
  --vb-prefooter: #F9E4DE;
  --vb-hairline: #F6D8D4;
  --vb-charcoal: #201A18;
  --vb-warm-gray: #665C56;
  --vb-gold: #E3A62F;
  --vb-rose-gold: #C98A63;
}

/* Base Headings */
h1, h2, h3, h4, .elementor-heading-title {
  font-family: 'Cormorant Garamond', Georgia, serif !important;
  color: var(--vb-charcoal);
  letter-spacing: 0.02em;
}

body, p, span, input, select, textarea {
  font-family: 'Montserrat', system-ui, sans-serif !important;
  color: var(--vb-charcoal);
}

/* Primary Button Styling (SHOP NOW, ADD TO CART) */
.elementor-button, .vb-primary-btn {
  background-color: var(--vb-mauve) !important;
  color: #FFFFFF !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  letter-spacing: 0.14em !important;
  border-radius: 4px !important;
  padding: 12px 28px !important;
  transition: all 0.25s ease-in-out !important;
  box-shadow: 0 2px 4px rgba(169, 83, 103, 0.2) !important;
}

.elementor-button:hover, .vb-primary-btn:hover {
  background-color: var(--vb-mauve-dark) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(169, 83, 103, 0.3) !important;
}

/* Secondary Ghost Button */
.vb-ghost-btn {
  background-color: transparent !important;
  border: 1px solid var(--vb-mauve) !important;
  color: var(--vb-mauve) !important;
  text-transform: uppercase !important;
  font-weight: 600 !important;
  font-size: 12px !important;
  letter-spacing: 0.14em !important;
  border-radius: 4px !important;
  padding: 10px 24px !important;
  transition: all 0.2s ease !important;
}
.vb-ghost-btn:hover {
  background-color: var(--vb-mauve) !important;
  color: #FFFFFF !important;
}

/* Product Card Container */
.vb-product-card {
  background: #FFFFFF;
  border: 1px solid var(--vb-hairline);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.vb-product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(74, 30, 43, 0.08);
}

/* Gold Stars Rating */
.elementor-star-rating, .vb-stars {
  color: var(--vb-gold) !important;
}

/* Category Circular Imagery */
.vb-category-circle img {
  border-radius: 50% !important;
  border: 3px solid var(--vb-prefooter);
  transition: transform 0.35s ease, border-color 0.35s ease;
}
.vb-category-circle:hover img {
  transform: scale(1.05);
  border-color: var(--vb-mauve);
}
`;

  const elementorJsonSnippet = `{
  "version": "0.4",
  "title": "Velvetique Beauty - Master Template",
  "type": "page",
  "content": [
    {
      "id": "hero_section",
      "elType": "container",
      "settings": {
        "content_width": "full",
        "background_background": "classic",
        "background_color": "#FBF0EB",
        "padding": { "unit": "px", "top": "60", "bottom": "80", "left": "24", "right": "24" }
      },
      "elements": [
        {
          "id": "hero_split_left",
          "elType": "container",
          "elements": [
            { "elType": "widget", "widgetType": "heading", "settings": { "title": "NEW IN", "header_size": "h6" } },
            { "elType": "widget", "widgetType": "heading", "settings": { "title": "Radiant Skin.\\nReal Confidence.", "header_size": "h1" } },
            { "elType": "widget", "widgetType": "text-editor", "settings": { "editor": "Clean beauty that nourishes, enhances and empowers you." } },
            { "elType": "widget", "widgetType": "button", "settings": { "text": "SHOP NOW", "link": { "url": "/shop" } } }
          ]
        },
        {
          "id": "hero_split_right",
          "elType": "container",
          "elements": [
            { "elType": "widget", "widgetType": "image", "settings": { "image": { "url": "hero_beauty_bottles.jpg" } } }
          ]
        }
      ]
    },
    {
      "id": "floating_trust_strip",
      "elType": "container",
      "settings": {
        "content_width": "boxed",
        "background_color": "#FFFFFF",
        "border_radius": { "unit": "px", "top": "12", "right": "12", "bottom": "12", "left": "12" },
        "box_shadow_box_shadow": { "horizontal": 0, "vertical": 4, "blur": 16, "color": "rgba(74,30,43,0.06)" }
      },
      "elements": [
        { "elType": "widget", "widgetType": "icon-box", "settings": { "title_text": "Clean Ingredients", "description_text": "Safe & toxin-free" } },
        { "elType": "widget", "widgetType": "icon-box", "settings": { "title_text": "Clinically Proven", "description_text": "Dermatologically tested" } },
        { "elType": "widget", "widgetType": "icon-box", "settings": { "title_text": "Cruelty Free", "description_text": "We never test on animals" } },
        { "elType": "widget", "widgetType": "icon-box", "settings": { "title_text": "Sustainable Beauty", "description_text": "Good for you & the planet" } }
      ]
    }
  ]
}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden border border-[#F6D8D4] animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#F6D8D4] flex items-center justify-between bg-[#FAF5F2]">
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-[#A95367]" />
              <div>
                <h2
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-xl font-bold text-[#201A18] tracking-wide"
                >
                  Elementor JSON &amp; WordPress Customizer Export
                </h2>
                <p className="text-xs text-[#665C56]">
                  100% Native Elementor widget mapping and clean Customizer CSS
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

          {/* Tab Selector */}
          <div className="flex border-b border-[#F6D8D4] bg-[#FAF5F2] px-6">
            <button
              onClick={() => setActiveTab('mapping')}
              className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'mapping'
                  ? 'border-[#A95367] text-[#A95367]'
                  : 'border-transparent text-[#665C56] hover:text-[#201A18]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Native Elementor Widgets</span>
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'css'
                  ? 'border-[#A95367] text-[#A95367]'
                  : 'border-transparent text-[#665C56] hover:text-[#201A18]'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>WordPress Customizer CSS</span>
            </button>
            <button
              onClick={() => setActiveTab('json')}
              className={`py-3 px-4 text-xs font-bold tracking-wider uppercase border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'json'
                  ? 'border-[#A95367] text-[#A95367]'
                  : 'border-transparent text-[#665C56] hover:text-[#201A18]'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Elementor Template JSON</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 max-h-[65vh] overflow-y-auto">
            {activeTab === 'mapping' && (
              <div className="space-y-4 text-xs text-[#201A18]">
                <p className="text-sm text-[#665C56] leading-relaxed">
                  Every section on this website maps directly to <strong>Native Elementor Elements</strong> without requiring 3rd party bloat plugins:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF5F2] rounded-lg border border-[#F6D8D4] space-y-2">
                    <h4 className="font-bold text-[#A95367] uppercase text-xs">
                      1. Containers &amp; Sections
                    </h4>
                    <ul className="space-y-1 text-[#665C56]">
                      <li>• <strong>Container (Flexbox/Grid)</strong>: Used for Hero 50/50 split, Product 4-col grid, and Pre-footer 4-col strip.</li>
                      <li>• <strong>Inner Card</strong>: White background, hairline border <code className="text-[#A95367]">#F6D8D4</code>, 8px radius.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#FAF5F2] rounded-lg border border-[#F6D8D4] space-y-2">
                    <h4 className="font-bold text-[#A95367] uppercase text-xs">
                      2. Headings &amp; Text Editor
                    </h4>
                    <ul className="space-y-1 text-[#665C56]">
                      <li>• <strong>Widget: Heading</strong>: Cormorant Garamond serif with uppercase letter-spacing <code className="text-[#A95367]">0.18em</code>.</li>
                      <li>• <strong>Widget: Text Editor</strong>: Montserrat font, 15px line height, warm charcoal tone.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#FAF5F2] rounded-lg border border-[#F6D8D4] space-y-2">
                    <h4 className="font-bold text-[#A95367] uppercase text-xs">
                      3. Buttons &amp; Interactive CTAs
                    </h4>
                    <ul className="space-y-1 text-[#665C56]">
                      <li>• <strong>Widget: Button</strong>: Solid mauve <code className="text-[#A95367]">#A95367</code>, 4px border radius, uppercase bold text.</li>
                      <li>• <strong>Secondary Ghost</strong>: Border 1px mauve, transparent background.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#FAF5F2] rounded-lg border border-[#F6D8D4] space-y-2">
                    <h4 className="font-bold text-[#A95367] uppercase text-xs">
                      4. Rating &amp; Trust Bars
                    </h4>
                    <ul className="space-y-1 text-[#665C56]">
                      <li>• <strong>Widget: Star Rating</strong>: 5 stars in Gold <code className="text-[#E3A62F]">#E3A62F</code>.</li>
                      <li>• <strong>Widget: Icon Box</strong>: Truck, Rotate, Shield, Headset icons with dual title/description.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'css' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#665C56]">
                    Copy and paste into WordPress Customizer &gt; Additional CSS:
                  </span>
                  <button
                    onClick={() => copyToClipboard(wordpressCustomizerCSS)}
                    className="flex items-center gap-1.5 px-3 py-1 bg-[#A95367] text-white text-xs font-semibold rounded hover:bg-[#8F3F52] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy CSS'}</span>
                  </button>
                </div>
                <pre className="p-4 bg-[#201A18] text-[#FBF0EB] text-[11px] font-mono rounded-lg overflow-x-auto leading-relaxed border border-[#37141E]">
                  {wordpressCustomizerCSS}
                </pre>
              </div>
            )}

            {activeTab === 'json' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#665C56]">
                    Native Elementor Template JSON schema excerpt:
                  </span>
                  <button
                    onClick={() => copyToClipboard(elementorJsonSnippet)}
                    className="flex items-center gap-1.5 px-3 py-1 bg-[#A95367] text-white text-xs font-semibold rounded hover:bg-[#8F3F52] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
                  </button>
                </div>
                <pre className="p-4 bg-[#201A18] text-rose-200 text-[11px] font-mono rounded-lg overflow-x-auto leading-relaxed border border-[#37141E]">
                  {elementorJsonSnippet}
                </pre>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[#F6D8D4] bg-[#FAF5F2] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#4A1E2B] text-white text-xs font-bold tracking-wider uppercase rounded hover:bg-[#37141E] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
