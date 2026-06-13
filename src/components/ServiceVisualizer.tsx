import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Rocket, 
  TrendingUp, 
  Award, 
  Search, 
  Eye, 
  Layers, 
  Sparkles,
  Palette,
  ShoppingCart,
  Check,
  Facebook,
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  Lock,
  FileText,
  Workflow,
  Cpu,
  Mail,
  Zap,
  Server,
  Shield,
  Activity,
  Video,
  Camera,
  RotateCcw,
  Sliders,
  Type,
  FileCheck
} from 'lucide-react';

interface VisualizerProps {
  slug: string;
  title: string;
}

export const ServiceVisualizer: React.FC<VisualizerProps> = ({ slug, title }) => {
  // Website Dev & Redesign State
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [speedProgress, setSpeedProgress] = useState(0);

  // SEO State
  const [seoKeyword, setSeoKeyword] = useState('best branding agency near me');
  const [seoRank, setSeoRank] = useState(25);
  const [seoLogs, setSeoLogs] = useState<string[]>([]);

  // Branding / Graphic Design State
  const [activeBrandTheme, setActiveBrandTheme] = useState<'minimal' | 'modern' | 'retro' | 'royal'>('minimal');

  // E-commerce State
  const [cartCount, setCartCount] = useState(0);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');

  // Social / SMM / YouTube State
  const [reactions, setReactions] = useState({ likes: 342, comments: 45, shares: 12 });
  const [glowParticle, setGlowParticle] = useState(false);

  // Legal Services State
  const [signed, setSigned] = useState(false);
  const [selectedClauses, setSelectedClauses] = useState<string[]>(['No liability', 'IP transfer']);

  // Business Automation State
  const [activeNode, setActiveNode] = useState(0);

  // Hosting State
  const [activeRegion, setActiveRegion] = useState('Mumbai');
  const [ping, setPing] = useState(12);

  // Photography State
  const [viewfinderFilter, setViewfinderFilter] = useState<'studio' | 'outdoor' | 'neon'>('studio');
  const [focusLevel, setFocusLevel] = useState(85);

  // Content Writing / AI State
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const fullText = "We help modern enterprises realize unmatched digital growth using high-performance search rank strategies...".split(" ");

  // Interval triggers for dynamic loop visualizers
  useEffect(() => {
    // Website Dev speed load counting
    let timer: NodeJS.Timeout;
    if (slug === 'website-development' || slug === 'website-redesign') {
      setSpeedProgress(0);
      timer = setInterval(() => {
        setSpeedProgress(p => (p >= 100 ? 100 : p + 5));
      }, 80);
    }

    // SEO ranking countdown
    let seoTimer: NodeJS.Timeout;
    if (slug === 'seo-optimization') {
      setSeoRank(28);
      setSeoLogs(['Initiating content audit...', 'Optimizing meta headers...']);
      seoTimer = setInterval(() => {
        setSeoRank(r => {
          if (r <= 1) return 1;
          return r - 3;
        });
        setSeoLogs(logs => {
          const updates = [
            'Alt tags updated securely.',
            'XML layout sitemaps pushed.',
            'Speed metrics approved.',
            'Keyword density balanced.',
            'Crawl score: 100%'
          ];
          const nextLog = updates[Math.floor(Math.random() * updates.length)];
          return [nextLog, ...logs.slice(0, 2)];
        });
      }, 2000);
    }

    // Business Automation active node highlight cycle
    let autoTimer: NodeJS.Timeout;
    if (slug === 'business-automation') {
      autoTimer = setInterval(() => {
        setActiveNode(node => (node + 1) % 4);
      }, 2500);
    }

    // Content writing typed word flow
    let typeTimer: NodeJS.Timeout;
    if (slug === 'content-writing' || slug === 'ai-content-creation') {
      setTypedWords([]);
      let idx = 0;
      typeTimer = setInterval(() => {
        if (idx < fullText.length) {
          setTypedWords(w => [...w, fullText[idx]]);
          idx++;
        } else {
          setTypedWords([]);
          idx = 0;
        }
      }, 400);
    }

    // Hosting ping simulator
    let pingTimer: NodeJS.Timeout;
    if (slug === 'hosting-maintenance') {
      pingTimer = setInterval(() => {
        setPing(p => Math.max(4, p + Math.floor(Math.random() * 5) - 2));
      }, 1500);
    }

    return () => {
      clearInterval(timer);
      clearInterval(seoTimer);
      clearInterval(autoTimer);
      clearInterval(typeTimer);
      clearInterval(pingTimer);
    };
  }, [slug]);

  // Handle reactions trigger
  const triggerReaction = (type: 'likes' | 'comments' | 'shares') => {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
    setGlowParticle(true);
    setTimeout(() => setGlowParticle(false), 500);
  };

  // Branding themes colors configuration
  const themesConfig = {
    minimal: { bg: 'bg-stone-50', primary: 'bg-stone-950', border: 'border-stone-200', text: 'text-stone-900', label: 'Classic Onyx' },
    modern: { bg: 'bg-[#0f172a]', primary: 'bg-[#3b82f6]', border: 'border-[#1e293b]', text: 'text-white', label: 'Electric Ocean' },
    retro: { bg: 'bg-[#fefcbf]', primary: 'bg-[#d69e2e]', border: 'border-[#ecc94b]', text: 'text-[#5d4037]', label: 'Vintage Gold' },
    royal: { bg: 'bg-[#faf5ff]', primary: 'bg-[#805ad5]', border: 'border-[#e9d8fd]', text: 'text-[#44337a]', label: 'Imperial Purple' }
  };

  // Render logic switch matching slug
  return (
    <div className="relative w-full aspect-[4/3] bg-brand-bg rounded-[2.5rem] border border-brand-border p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Decorative blurry background node */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>

      {/* Interactive Title Tag */}
      <div className="flex items-center justify-between border-b border-brand-border pb-3.5 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-ping"></span>
          <span className="text-[10px] tracking-wider font-extrabold uppercase text-brand-text-secondary font-mono">
            LIVE PREVIEW SIMULATOR
          </span>
        </div>
        <span className="text-[10px] bg-white border border-brand-border text-brand-text px-2.5 py-1 rounded-full font-bold">
          {title}
        </span>
      </div>

      {/* Main Core Simulation Interface Grid */}
      <div className="flex-1 flex flex-col justify-center py-4 z-10 relative">
        <AnimatePresence mode="wait">
          
          {/* 1 & 2: WEB DEVELOPMENT & REDESIGN */}
          {(slug === 'website-development' || slug === 'website-redesign') && (
            <motion.div 
              key="web"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4 w-full"
            >
              {/* Device Selector Controls */}
              <div className="flex justify-center gap-2 mb-2">
                {(['desktop', 'tablet', 'mobile'] as const).map(d => (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={`p-2 rounded-xl border transition-all cursor-pointer ${
                      device === d 
                        ? 'bg-brand-text text-white border-brand-text shadow' 
                        : 'bg-white text-brand-text-secondary border-brand-border hover:text-brand-text hover:bg-brand-bg'
                    }`}
                  >
                    {d === 'desktop' && <Laptop size={14} />}
                    {d === 'tablet' && <Tablet size={14} />}
                    {d === 'mobile' && <Smartphone size={14} />}
                  </button>
                ))}
              </div>

              {/* Dynamic Simulated Window */}
              <div className="flex justify-center">
                <motion.div 
                  layout
                  className={`bg-white border border-brand-border rounded-xl shadow-premium overflow-hidden transition-all duration-300 ${
                    device === 'desktop' ? 'w-full h-40' : device === 'tablet' ? 'w-64 h-40' : 'w-40 h-40'
                  }`}
                >
                  {/* Browser Bar */}
                  <div className="bg-brand-bg px-3 py-1.5 border-b border-brand-border flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="text-[9px] text-brand-text-secondary font-mono border bg-white rounded px-2 w-32 truncate ml-2">
                      makemypages.com
                    </div>
                  </div>
                  {/* Website Mock Contents */}
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="h-3 w-1/3 bg-brand-primary/20 rounded"></div>
                      <div className="h-2 w-1/4 bg-brand-bg rounded"></div>
                    </div>
                    <div className="h-4 w-4/5 bg-brand-text/10 rounded"></div>
                    <div className="h-2.5 w-full bg-brand-bg rounded"></div>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="h-10 bg-brand-primary/5 rounded border border-brand-primary/20 flex flex-col items-center justify-center text-[10px] font-bold text-brand-primary">
                        <span>Speed</span><span>{speedProgress}%</span>
                      </div>
                      <div className="h-10 bg-emerald-50 rounded border border-emerald-200 flex flex-col items-center justify-center text-[10px] font-bold text-emerald-500">
                        <span>SEO</span><span>99</span>
                      </div>
                      <div className="h-10 bg-indigo-50 rounded border border-indigo-200 flex flex-col items-center justify-center text-[10px] font-bold text-indigo-500">
                        <span>CMS</span><span>Live</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* 3: SEO OPTIMIZATION */}
          {slug === 'seo-optimization' && (
            <motion.div 
              key="seo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-white border border-brand-border rounded-xl p-4 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-brand-bg pb-2 mb-2">
                  <Search size={14} className="text-brand-primary" />
                  <span className="text-xs font-mono font-bold text-brand-text">{seoKeyword}</span>
                </div>
                
                {/* Ranking tracker */}
                <div className="flex items-center justify-between bg-brand-bg p-3 rounded-lg border border-brand-border">
                  <div>
                    <span className="text-[10px] uppercase text-brand-text-secondary font-bold select-none block">Google Rank</span>
                    <strong className="text-2xl font-extrabold text-brand-primary">
                      {seoRank === 1 ? '🥇 #1' : `#${seoRank}`}
                    </strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold text-xs">↑ 300% Organic Visits</span>
                    <TrendingUp size={16} className="text-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* Simulated Crawl updates */}
                <div className="text-[10px] font-mono text-brand-text bg-brand-text text-white p-2.5 rounded-lg space-y-1 sm:h-16 overflow-hidden">
                  {seoLogs.map((log, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 4 & 13: BRANDING & GRAPHIC DESIGN */}
          {(slug === 'branding' || slug === 'graphic-design') && (
            <motion.div 
              key="brand"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              {/* Color themes picker */}
              <div className="flex justify-around gap-2 bg-white/60 p-1.5 rounded-xl border border-brand-border">
                {(['minimal', 'modern', 'retro', 'royal'] as const).map(thm => (
                  <button
                    key={thm}
                    onClick={() => setActiveBrandTheme(thm)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      activeBrandTheme === thm 
                        ? 'bg-brand-text text-white font-extrabold shadow' 
                        : 'text-brand-text-secondary hover:text-brand-text hover:bg-white'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border border-black/10 ${themesConfig[thm].primary}`}></span>
                    <span className="hidden sm:inline text-[10px]">{themesConfig[thm].label}</span>
                  </button>
                ))}
              </div>

              {/* Responsive adaptive visualizer frame */}
              <motion.div 
                layout
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${themesConfig[activeBrandTheme].bg} ${themesConfig[activeBrandTheme].border}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1.5">
                    <Palette size={16} className={themesConfig[activeBrandTheme].text} />
                    <span className={`text-xs font-extrabold font-display ${themesConfig[activeBrandTheme].text}`}>Brand Ecosystem</span>
                  </div>
                  <span className={`text-[9px] font-mono uppercase bg-black/5 px-2 py-0.5 rounded ${themesConfig[activeBrandTheme].text}`}>
                    Custom Assets
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Dynamic Logo Element Mock */}
                  <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-black/5 shadow-sm">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${themesConfig[activeBrandTheme].primary}`}>
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-brand-text font-display">DESIGN CORE</h4>
                      <p className="text-[9px] text-brand-text-secondary">Fully Tailored Vector Guidelines</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="bg-white/40 p-2 rounded-xl text-center border border-black/5 text-[9px] font-bold text-brand-text">
                      Poster & Print Template
                    </div>
                    <div className="bg-white/40 p-2 rounded-xl text-center border border-black/5 text-[9px] font-bold text-brand-text">
                      Vector Logo Source (SVG)
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* 5: AFFORDABLE ECOMMERCE SOLUTIONS */}
          {slug === 'ecommerce-solutions' && (
            <motion.div 
              key="ecommerce"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-4"
            >
              {/* Product Store Container */}
              <div className="bg-white border border-brand-border rounded-xl p-4 shadow-sm space-y-3 max-w-sm mx-auto">
                <div className="flex justify-between items-center border-b border-brand-bg pb-2 select-none">
                  <span className="text-xs font-bold text-brand-text">CMS Shop: Unlimited Items</span>
                  <div className="relative">
                    <ShoppingCart size={16} className="text-brand-primary" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2.5 -right-2 bg-emerald-500 text-white rounded-full w-4 h-4 text-[8px] flex items-center justify-center font-bold">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {checkoutStep === 'cart' && (
                    <motion.div 
                      key="cartstep"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center gap-3 bg-brand-bg p-2.5 rounded-lg border border-brand-border">
                        <div className="w-10 h-10 rounded bg-white border border-brand-border flex items-center justify-center font-bold text-brand-primary text-xs">
                          📦
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-bold text-brand-text">Premium Commerce Product</h4>
                          <span className="text-[10px] text-brand-text-secondary">Shopify / WooCommerce Driven</span>
                        </div>
                        <span className="text-xs font-bold text-brand-text">₹2,499</span>
                      </div>

                      <button
                        onClick={() => {
                          setCartCount(1);
                          setCheckoutStep('shipping');
                        }}
                        className="w-full bg-brand-text hover:bg-brand-primary text-white py-2 rounded-lg text-xs font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        Add Product to Cart & Checkout
                      </button>
                    </motion.div>
                  )}

                  {checkoutStep === 'shipping' && (
                    <motion.div 
                      key="shipstep"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2.5"
                    >
                      <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg text-center">
                        <span className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold block mb-1">Easy to Manage Page</span>
                        <p className="text-xs text-brand-text-secondary">Secure SSL Gateway checkout activated</p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setCheckoutStep('cart')}
                          className="flex-1 border border-brand-border bg-white text-brand-text-secondary rounded-lg py-2 text-xs font-bold hover:bg-brand-bg cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setCheckoutStep('success')}
                          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2 text-xs font-bold hover:shadow-lg transition-all cursor-pointer"
                        >
                          Confirm Order
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {checkoutStep === 'success' && (
                    <motion.div 
                      key="successstep"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-4 space-y-2"
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                        <Check size={20} />
                      </div>
                      <h4 className="text-xs font-bold text-brand-text">Order Processed Successfully!</h4>
                      <p className="text-[10px] text-brand-text-secondary">CMS dashboard updated. Admin SMS alert sent.</p>
                      <button
                        onClick={() => {
                          setCartCount(0);
                          setCheckoutStep('cart');
                        }}
                        className="text-[10px] text-brand-primary font-bold underline cursor-pointer"
                      >
                        Reset Demo Flow
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* 6, 7 & 10: SOCIAL MEDIA DESIGN, SMM & YOUTUBE MANAGEMENT */}
          {(slug === 'social-media-marketing' || slug === 'social-media-management' || slug === 'youtube-management-support') && (
            <motion.div 
              key="social"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              {/* Simulated Social Grid Card */}
              <div className="bg-white border border-brand-border rounded-xl p-4 shadow-sm max-w-xs mx-auto space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    M
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-text leading-none">MakeMyPages Social</h4>
                    <span className="text-[9px] text-brand-text-secondary">Published via Automated scheduler</span>
                  </div>
                </div>

                {/* Simulated Post Banner Image Graphic */}
                <div className="aspect-[16/9] bg-gradient-to-tr from-brand-primary to-indigo-600 rounded-lg p-3 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="top-0 right-0 z-10 flex gap-2">
                     <span className="text-[8px] bg-white/20 backdrop-blur px-2 py-0.5 rounded uppercase font-bold text-white">Video SEO</span>
                  </div>
                  <div className="z-10 text-left pt-6">
                    <strong className="text-[11px] font-black tracking-tight leading-none block uppercase">Scale Your CTR Today!</strong>
                    <span className="text-[8px] text-white/80">3x Engagement Boost In Weeks</span>
                  </div>
                </div>

                {/* Live Social Interactions */}
                <div className="flex justify-between items-center pt-1 border-t border-brand-bg text-[10px] text-brand-text-secondary">
                  <button 
                    onClick={() => triggerReaction('likes')}
                    className="flex items-center gap-1 hover:text-red-500 cursor-pointer"
                  >
                    <Heart size={12} className="text-red-500" fill="currentColor" />
                    <span>{reactions.likes}</span>
                  </button>
                  <button 
                    onClick={() => triggerReaction('comments')}
                    className="flex items-center gap-1 hover:text-blue-500 cursor-pointer"
                  >
                    <MessageCircle size={12} />
                    <span>{reactions.comments}</span>
                  </button>
                  <button 
                    onClick={() => triggerReaction('shares')}
                    className="flex items-center gap-1 hover:text-green-500 cursor-pointer"
                  >
                    <Share2 size={12} />
                    <span>{reactions.shares}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 8: LEGAL SERVICES */}
          {slug === 'legal-services' && (
            <motion.div 
              key="legal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              {/* Document Contract Builder Wrapper */}
              <div className="bg-white border border-brand-border rounded-xl p-4 shadow-sm max-w-sm mx-auto space-y-3">
                <div className="flex justify-between items-center border-b border-brand-bg pb-2 select-none">
                  <span className="text-xs font-mono font-bold text-brand-text">SECURE DOCUMENT TEMPLATE</span>
                  <Lock size={12} className="text-brand-primary" />
                </div>

                <div className="space-y-1.5 p-2 bg-brand-bg rounded-lg border border-brand-border">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-brand-text flex items-center gap-1">
                      <FileText size={10} className="text-brand-primary" /> Core Service Agreement
                    </span>
                    <span className="text-[8px] font-mono text-emerald-500">Drafted</span>
                  </div>
                  <div className="h-1.5 bg-brand-text/10 rounded w-full"></div>
                  <div className="h-1.5 bg-brand-text/10 rounded w-4/5"></div>
                </div>

                {/* Checkbox settings */}
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  {['No liability clauses', 'IP transfer assets', '3-Months Support set', 'Non-disclosure (NDA)'].map((cl, i) => (
                    <label key={i} className="flex items-center gap-1.5 p-1.5 bg-brand-bg border border-brand-border rounded cursor-pointer hover:border-brand-primary/20">
                      <input type="checkbox" defaultChecked className="rounded text-brand-primary" />
                      <span className="text-[9px] text-brand-text-secondary truncate">{cl}</span>
                    </label>
                  ))}
                </div>

                {/* Active Stamp indicator */}
                <button
                  onClick={() => setSigned(!signed)}
                  className={`w-full py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    signed 
                      ? 'bg-emerald-500 text-white shadow-lg' 
                      : 'bg-brand-primary/10 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  {signed ? '✓ SIGNED & ENCRYPTED' : 'CLICK TO STAMP DIGITAL SIGNATURE'}
                </button>
              </div>
            </motion.div>
          )}

          {/* 9: BUSINESS AUTOMATION */}
          {slug === 'business-automation' && (
            <motion.div 
              key="automation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              <div className="bg-white border border-brand-border rounded-xl p-4 shadow-sm max-w-sm mx-auto space-y-3">
                <span className="text-[10px] font-mono font-bold tracking-wider text-brand-text-secondary block border-b border-brand-bg pb-2 select-none">
                  INTEGRATION NODE FLOW
                </span>

                {/* Directed Steps representation */}
                <div className="space-y-2">
                  {[
                    { title: 'Inbound Contact Lead Form', label: 'Trigger Event', icon: Mail, ready: true },
                    { title: 'AI Sentiment Review', label: 'Processing', icon: Cpu, ready: activeNode >= 1 },
                    { title: 'Confirm Calendar Booking', label: 'Action Node', icon: Workflow, ready: activeNode >= 2 },
                    { title: 'Automated WhatsApp Message Sent', label: 'Zap Outlet', icon: Zap, ready: activeNode >= 3 }
                  ].map((node, i) => {
                    const active = activeNode === i;
                    const IconComp = node.icon;
                    return (
                      <div 
                        key={i} 
                        className={`p-2 rounded-xl transition-all border flex items-center justify-between ${
                          active 
                            ? 'bg-brand-primary text-white border-brand-primary shadow-md scale-[1.02]' 
                            : node.ready 
                              ? 'bg-emerald-50/50 border-emerald-100 text-brand-text' 
                              : 'bg-brand-bg/50 border-transparent text-brand-text-secondary'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${active ? 'bg-white text-brand-primary' : 'bg-white border border-brand-border text-brand-text-secondary'}`}>
                             <IconComp size={12} />
                          </div>
                          <div>
                            <h4 className="text-[10.5px] font-bold truncate leading-tight w-44">{node.title}</h4>
                            <span className={`text-[8px] uppercase font-mono ${active ? 'text-white/80' : 'text-brand-text-secondary'}`}>
                              {node.label}
                            </span>
                          </div>
                        </div>
                        {node.ready && !active && (
                          <span className="text-[9px] text-emerald-500 font-bold">✓ Active</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* 11: HOSTING MAINTENANCE */}
          {slug === 'hosting-maintenance' && (
            <motion.div 
              key="hosting"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              <div className="bg-white border border-brand-border rounded-xl p-4 shadow-sm max-w-sm mx-auto space-y-3">
                <div className="flex justify-between items-center border-b border-brand-bg pb-2 select-none">
                  <span className="text-xs font-mono font-bold text-brand-text">CLOUD INFRASTRUCTURE STATUS</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                </div>

                <div className="grid grid-cols-2 gap-3 pb-1">
                  <div className="bg-brand-bg p-2.5 rounded-lg border border-brand-border text-center">
                    <span className="text-[9px] uppercase tracking-wider text-brand-text-secondary block mb-1">Server Latency</span>
                    <strong className="text-sm font-bold text-brand-primary">{ping}ms response</strong>
                  </div>
                  <div className="bg-brand-bg p-2.5 rounded-lg border border-brand-border text-center">
                    <span className="text-[9px] uppercase tracking-wider text-brand-text-secondary block mb-1">Backup Timeline</span>
                    <strong className="text-sm font-bold text-emerald-500">Every 4 hrs</strong>
                  </div>
                </div>

                {/* Cloud storage list */}
                <div className="space-y-2">
                  {[
                    { label: 'Primary Load Balancer', region: 'Mumbai (Asia-South)', up: true },
                    { label: 'Hot Cache Database', region: 'Redis Replication active', up: true }
                  ].map((node, i) => (
                    <div key={i} className="flex justify-between items-center p-2 bg-brand-bg rounded-lg border border-brand-border text-xs">
                      <div className="flex items-center gap-2">
                        <Server size={12} className="text-brand-text-secondary" />
                        <div>
                          <strong className="text-[10px] text-brand-text block font-bold leading-none">{node.label}</strong>
                          <span className="text-[8.5px] text-brand-text-secondary font-mono">{node.region}</span>
                        </div>
                      </div>
                      <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold">
                        99.99% UP
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 12 & 14: PHOTOGRAPHY & VIDEOGRAPHY / AI PRODUCT PHOTOGRAPHY */}
          {(slug === 'photography-videography' || slug === 'ai-product-photography') && (
            <motion.div 
              key="photo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              {/* Studio Backdrop controls */}
              <div className="flex justify-center gap-2 bg-white/60 p-1 rounded-xl border border-brand-border">
                {(['studio', 'outdoor', 'neon'] as const).map(flt => (
                  <button
                    key={flt}
                    onClick={() => setViewfinderFilter(flt)}
                    className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                      viewfinderFilter === flt 
                        ? 'bg-brand-text text-white shadow' 
                        : 'text-brand-text-secondary hover:text-brand-text hover:bg-white'
                    }`}
                  >
                    {flt.toUpperCase()} MODE
                  </button>
                ))}
              </div>

              {/* Camera Lens simulator viewport */}
              <div className="relative aspect-[16/9] bg-stone-900 rounded-2xl border border-brand-border overflow-hidden flex items-center justify-center p-3">
                {/* Viewfinder crosshairs overlays */}
                <div className="absolute top-2 left-2 border-t-2 border-l-2 border-white/40 w-4 h-4 rounded-tl"></div>
                <div className="absolute top-2 right-2 border-t-2 border-r-2 border-white/40 w-4 h-4 rounded-tr"></div>
                <div className="absolute bottom-2 left-2 border-b-2 border-l-2 border-white/40 w-4 h-4 rounded-bl"></div>
                <div className="absolute bottom-2 right-2 border-b-2 border-r-2 border-white/40 w-4 h-4 rounded-br"></div>

                {/* Simulated product photo change based on backdrop selected */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-tr overflow-hidden flex flex-col justify-between p-3 select-none">
                  {viewfinderFilter === 'studio' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/80 to-blue-600/80 transition-all duration-500"></div>
                  )}
                  {viewfinderFilter === 'outdoor' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e0a96d] to-[#1a1c20] transition-all duration-500"></div>
                  )}
                  {viewfinderFilter === 'neon' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-800 transition-all duration-500"></div>
                  )}

                  <div className="z-10 flex justify-between text-[8px] font-mono text-white/80">
                    <span>FOCAL: HIGH</span>
                    <span>1/250s ISO 100</span>
                  </div>

                  {/* SVG Mock Product */}
                  <div className="z-10 text-center space-y-1">
                    <div className="w-10 h-10 border-2 border-white/40 bg-white/20 backdrop-blur rounded-xl mx-auto flex items-center justify-center text-white scale-110">
                      🧴
                    </div>
                    <span className="text-[10px] font-bold text-white block">AI Studio Placement</span>
                  </div>

                  <div className="z-10 text-center text-[9px] font-mono text-emerald-400">
                    ◎ FOCUS LOCKED: {focusLevel}%
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 15 & 16: CONTENT WRITING & AI CONTENT */}
          {(slug === 'content-writing' || slug === 'ai-content-creation') && (
            <motion.div 
              key="content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              {/* Type stream simulator container */}
              <div className="bg-white border border-brand-border rounded-xl p-4 shadow-sm w-full space-y-3">
                <div className="flex justify-between items-center border-b border-brand-bg pb-2 select-none text-[10px] font-mono font-bold text-brand-text-secondary">
                  <span>TYPOGRAPHIC ENGINE STREAM</span>
                  <span className="text-emerald-500">SEO Optimized Draft</span>
                </div>

                {/* Simulated typed stream text */}
                <div className="bg-brand-bg border border-brand-border/40 p-3 rounded-lg min-h-[90px] text-xs font-serif leading-relaxed text-brand-text text-left relative overflow-hidden select-none">
                  <p>
                    {typedWords.join(" ")}
                    <span className="w-1.5 h-3.5 bg-brand-primary ml-1 inline-block animate-pulse align-middle"></span>
                  </p>
                </div>

                <div className="flex justify-between items-center text-[10.5px] pt-1">
                  <div className="flex items-center gap-1.5 text-brand-text">
                    <FileCheck size={12} className="text-emerald-500" />
                    <span>Readability: <strong>Excellent</strong></span>
                  </div>
                  <span className="text-[9px] bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 rounded font-bold">
                    PLAGIARISM CHECK: 0%
                  </span>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom Status metadata indicators */}
      <div className="border-t border-brand-border pt-3 mt-1 flex justify-between items-center text-[10px] text-brand-text-secondary">
         <span className="flex items-center gap-1 select-none">
            <Zap className="text-brand-primary animate-pulse w-3 h-3" /> Interactive Playground
         </span>
         <span className="font-mono">Ver v3.4</span>
      </div>
    </div>
  );
};
