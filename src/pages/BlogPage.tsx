import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { Page, BlogPost } from '../types';
import { BLOG_POSTS_DATA } from '../data/mockData';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);

  const topics = ['All', 'Skincare Rituals', 'Ingredient Science', 'Brand Stories', 'Beauty Philosophy'];

  const filteredPosts = selectedTopic === 'All'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter((p) => p.category === selectedTopic);

  const featuredPost = BLOG_POSTS_DATA[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost.id);

  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setSidebarEmail('');
    }
  };

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
            <span className="text-[#A95367] font-semibold">The Glow Journal</span>
          </nav>

          <h1
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#201A18] tracking-tight"
          >
            The Glow Journal
          </h1>
          <p className="text-sm sm:text-base text-[#665C56] mt-2 max-w-xl mx-auto font-light leading-relaxed">
            Dermatological science, botanical wisdom, and mindful ritual guides. Curated by our clinical cosmetic chemists.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* 2. Featured Article Card (Large 2-column) */}
        {selectedTopic === 'All' && (
          <div
            onClick={() => setActiveArticle(featuredPost)}
            className="mb-14 bg-white rounded-2xl border border-[#F6D8D4] overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#4A1E2B] text-rose-100 rounded shadow-xs">
                Featured Editorial
              </span>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#665C56]">
                  <span className="text-[#A95367] font-bold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-2xl sm:text-3xl font-bold text-[#201A18] leading-tight group-hover:text-[#A95367] transition-colors"
                >
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#665C56] leading-relaxed font-light">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-[#F6D8D4]/60 mt-6">
                <div className="flex items-center gap-2.5">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#F6D8D4]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#201A18]">{featuredPost.author.name}</h4>
                    <p className="text-[10px] text-[#665C56]">{featuredPost.author.role}</p>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#A95367] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 3. Grid + Sidebar 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Article Cards Grid (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(selectedTopic === 'All' ? gridPosts : filteredPosts).map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="bg-white rounded-xl border border-[#F6D8D4] overflow-hidden shadow-xs hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF5F2]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-white/95 text-[#A95367] rounded shadow-xs">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#665C56] mb-2">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3
                        style={{ fontFamily: 'var(--font-serif)' }}
                        className="text-lg font-bold text-[#201A18] leading-snug group-hover:text-[#A95367] transition-colors line-clamp-2"
                      >
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#665C56] mt-2 line-clamp-2 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#F6D8D4]/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#201A18]">
                        By {post.author.name}
                      </span>
                      <span className="text-xs font-bold text-[#A95367] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Topic Filter Pills */}
            <div className="bg-[#FAF5F2] p-6 rounded-xl border border-[#F6D8D4] space-y-4">
              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-lg font-bold text-[#201A18] uppercase tracking-wider"
              >
                Topics &amp; Series
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTopic(t)}
                    className={`px-3.5 py-1.5 text-xs rounded-full font-medium transition-colors cursor-pointer border ${
                      selectedTopic === t
                        ? 'bg-[#A95367] text-white border-[#A95367]'
                        : 'bg-white text-[#201A18] border-[#F6D8D4] hover:bg-rose-50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription Box (Dark Maroon Style) */}
            <div className="bg-[#4A1E2B] text-[#E8D3D8] p-6 sm:p-7 rounded-xl border border-[#37141E] space-y-3.5 shadow-md">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-300">
                THE BEAUTY MEMO
              </span>
              <h3
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-2xl font-bold text-white leading-snug"
              >
                Join 50k+ Readers of The Glow Journal
              </h3>
              <p className="text-xs text-rose-100/80 font-light leading-relaxed">
                Bi-weekly dermatological analyses, ingredient breakdown sheets, and exclusive access to seasonal sample drops.
              </p>

              {sidebarSubscribed ? (
                <div className="p-3 bg-white/10 rounded border border-emerald-400/40 text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>You are subscribed! Watch your inbox on Mondays.</span>
                </div>
              ) : (
                <form onSubmit={handleSidebarSubscribe} className="space-y-2.5 pt-1">
                  <input
                    type="email"
                    required
                    value={sidebarEmail}
                    onChange={(e) => setSidebarEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs bg-white text-[#201A18] rounded focus:outline-none focus:ring-1 focus:ring-[#A95367]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#A95367] hover:bg-[#8F3F52] text-white text-xs font-bold tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>JOIN JOURNAL</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* 4. Reading Modal for Full Article */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
          />

          <div className="min-h-full flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-[#F6D8D4] animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
              
              {/* Modal Header Bar */}
              <div className="p-4 sm:p-5 border-b border-[#F6D8D4] flex items-center justify-between bg-[#FAF5F2]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A95367]">
                  {activeArticle.category}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 rounded-full text-[#665C56] hover:text-[#201A18] hover:bg-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Article Body */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-[#665C56]">
                  <span>{activeArticle.date}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h2
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#201A18] leading-tight"
                >
                  {activeArticle.title}
                </h2>

                {/* Author Card */}
                <div className="flex items-center gap-3 p-3 bg-[#FBF0EB] rounded-lg border border-[#F6D8D4]">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#F6D8D4]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#201A18]">{activeArticle.author.name}</h4>
                    <p className="text-[11px] text-[#665C56]">{activeArticle.author.role}</p>
                  </div>
                </div>

                {/* Article Paragraphs */}
                <div className="space-y-4 text-sm text-[#665C56] leading-relaxed font-light">
                  {activeArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#F6D8D4] flex justify-between items-center">
                  <span className="text-xs text-[#665C56]">Share this article with fellow skincare enthusiasts</span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-4 py-2 bg-[#A95367] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#8F3F52] transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
