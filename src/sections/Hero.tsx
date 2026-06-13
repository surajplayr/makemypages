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
    <section id="home" className="relative overflow-hidden pt-10 pb-24 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <span className="inline-block px-3 py-1 bg-blue-50 text-brand-primary text-xs font-bold uppercase tracking-widest rounded-full border border-blue-100 mb-6">
              Premium Digital Agency
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-text mb-8 leading-[1.1] tracking-tight">
              Digital Solutions That Help <span className="text-brand-primary">Businesses Grow</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-brand-text-secondary mb-10 leading-relaxed max-w-lg">
              We build modern websites, branding systems, SEO strategies, and digital experiences that help businesses stand out online.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919709143253"
              target="_blank"
              className="bg-brand-text text-white px-8 py-3.5 rounded-lg text-sm font-bold hover:shadow-lg transition-all text-center"
            >
              Start Project
            </a>
            <a
              href="#services"
              className="bg-transparent text-brand-text border border-brand-border px-8 py-3.5 rounded-lg text-sm font-bold hover:bg-white transition-all text-center"
            >
              View Services
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="relative">
          {/* Main Tool Window */}
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-premium border border-brand-border group">
             <div className="aspect-[16/10] bg-brand-bg rounded-2xl overflow-hidden border border-brand-border relative">
                {/* Browser Header */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-white border-b border-brand-border flex items-center justify-between px-4 z-30">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-4 w-40 bg-brand-bg rounded-full border border-brand-border"></div>
                  <div className="w-4 h-4 rounded-full bg-brand-bg"></div>
                </div>

                {/* Sidebar */}
                <div className="absolute top-8 left-0 bottom-0 w-12 bg-white border-r border-brand-border flex flex-col items-center py-4 space-y-4 z-20">
                   {[Layout, BarChart, Users].map((Icon, i) => (
                     <div key={i} className={cn(
                       "p-2 rounded-lg transition-colors",
                       activeTab === i ? "bg-brand-primary/10 text-brand-primary" : "text-brand-text-secondary"
                     )}>
                        <Icon size={18} />
                     </div>
                   ))}
                </div>

                {/* Content Area */}
                <div className="pt-12 pl-16 pr-6 pb-6 h-full space-y-4">
                  <div className="flex justify-between items-center">
                    <motion.div 
                      className="h-6 w-1/3 bg-brand-primary/20 rounded-md"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <div className="flex -space-x-2">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-brand-primary/30 flex items-center justify-center text-[10px] font-bold">
                           U{i}
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="h-28 bg-white rounded-xl border border-brand-border p-4 shadow-sm relative overflow-hidden"
                      >
                         <div className="flex items-center gap-2 mb-2">
                           <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                           <div className="h-2 w-12 bg-brand-bg rounded"></div>
                         </div>
                         <div className="h-4 w-2/3 bg-brand-bg rounded mb-4"></div>
                         <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary/20">
                            <motion.div 
                              className="h-full bg-brand-primary"
                              animate={{ width: ["0%", "70%", "70%", "100%", "0%"] }}
                              transition={{ duration: 5, repeat: Infinity }}
                            />
                         </div>
                      </motion.div>
                      <div className="h-28 bg-white rounded-xl border border-brand-border p-4 shadow-sm">
                         <div className="h-2 w-1/2 bg-brand-bg rounded mb-2"></div>
                         <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-brand-text">98.2%</span>
                            <span className="text-[10px] text-green-500 font-bold">↑ 12%</span>
                         </div>
                         <div className="mt-4 space-y-1.5">
                            <div className="h-1 w-full bg-brand-bg rounded"></div>
                            <div className="h-1 w-full bg-brand-bg rounded"></div>
                         </div>
                      </div>
                  </div>

                  <div className="h-32 bg-white rounded-xl border border-brand-border p-4 relative overflow-hidden">
                     <div className="flex justify-between items-center mb-2">
                        <div className="h-3 w-24 bg-brand-bg rounded"></div>
                        <div className="h-3 w-12 bg-brand-bg rounded"></div>
                     </div>
                     <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 100 60" preserveAspectRatio="none">
                        <motion.path
                          d="M0 50 Q 15 45, 30 20 T 60 30 T 100 10"
                          fill="transparent"
                          stroke="#2563eb"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.path
                          d="M0 50 Q 15 45, 30 20 T 60 30 T 100 10 L 100 60 L 0 60 Z"
                          fill="url(#grad)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.1 }}
                          transition={{ duration: 1 }}
                        />
                        <defs>
                          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                     </svg>
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

