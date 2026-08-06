import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from '../components/UI';
import { Layout, BarChart, Users, MousePointer2, CheckCircle, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 20, y: 20 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorPos({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      });
      setActiveTab((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32 bg-slate-950 text-white">
      {/* High-Tech Background Image Layer with Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/tech_hero_bg_1785171907309.jpg" 
          alt="Digital Tech Network Background" 
          className="w-full h-full object-cover opacity-35 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Darkening & Radial Glow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-primary/20 text-sky-300 text-xs font-bold uppercase tracking-widest rounded-full border border-sky-500/30 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Premium Digital Agency & Studio
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Digital Solutions That Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">Businesses Grow</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              We build modern websites, branding systems, SEO strategies, and digital experiences that help businesses stand out online.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919709143253"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-brand-hover transition-all text-center shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              Start Project
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-white/20 transition-all text-center"
            >
              View Services
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="relative">
          {/* Main Visual Frame */}
          <div className="relative z-10 bg-white p-3 md:p-4 rounded-3xl shadow-premium border border-brand-border group">
             <div className="aspect-[16/11] bg-brand-bg rounded-2xl overflow-hidden border border-brand-border relative">
                {/* Browser Header */}
                <div className="absolute top-0 left-0 right-0 h-9 bg-white/90 backdrop-blur-md border-b border-brand-border flex items-center justify-between px-4 z-30">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-5 px-3 bg-slate-100 rounded-full border border-slate-200 text-[10px] font-medium text-slate-500 flex items-center">
                    https://makemypages.in
                  </div>
                  <div className="w-4 h-4 rounded-full bg-brand-primary/10"></div>
                </div>

                {/* Real Visual Asset Image */}
                <img 
                  src="/images/hero_digital_agency_1784956531972.jpg" 
                  alt="MakeMyPages - Website Development, SEO & Commercial Photography Studio Agency India" 
                  className="w-full h-full object-cover pt-9 transition-transform duration-700 group-hover:scale-105"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Gradient & Quick Info Chip */}
                <div className="absolute inset-0 pt-9 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6">
                  <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg max-w-xs flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-xs">
                      ⚡ 99
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">CMS & High Performance</p>
                      <p className="text-[10px] text-slate-500">Fast, SEO-Optimized & Custom Built</p>
                    </div>
                  </div>
                </div>

                {/* Animated Cursor */}
                <motion.div 
                  className="absolute z-50 text-brand-primary pointer-events-none"
                  animate={{ x: cursorPos.x + '%', y: cursorPos.y + '%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <MousePointer2 size={20} fill="currentColor" />
                  <motion.div 
                    className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-brand-primary/20"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
             </div>
          </div>

          {/* Floating Accents */}
          <motion.div 
            className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-2xl shadow-premium border border-brand-border flex items-center gap-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-brand-text-secondary tracking-wider">Status</p>
              <p className="text-xs font-bold text-brand-text">Site Optimized</p>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-6 -right-6 z-20 bg-white p-3 rounded-2xl shadow-premium border border-brand-border flex items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary">
              <Smartphone size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-brand-text-secondary tracking-wider">Mobile</p>
              <p className="text-xs font-bold text-brand-text">Fully Responsive</p>
            </div>
          </motion.div>

          {/* Mobile Preview (Simplified) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-10 -left-12 z-20 w-36 bg-[#111111] p-2 rounded-[2rem] shadow-2xl border-4 border-[#222] hidden md:block"
          >
             <div className="aspect-[9/19] bg-white rounded-[1.6rem] overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-4 bg-white flex justify-center py-1 z-10">
                   <div className="w-8 h-1 bg-brand-border rounded-full"></div>
                </div>
                <div className="pt-8 p-3 space-y-3">
                   <div className="h-2 w-1/2 bg-brand-primary/20 rounded-sm"></div>
                   {[1, 2, 3].map((i) => (
                     <div 
                       key={i}
                       className="h-10 bg-brand-bg rounded-lg border border-brand-border p-1.5 flex items-center space-x-2"
                     >
                       <div className="w-3 h-3 rounded-full bg-brand-primary/10"></div>
                       <div className="flex-1 space-y-1">
                          <div className="h-1 w-full bg-white rounded"></div>
                          <div className="h-1 w-1/2 bg-white rounded"></div>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;

