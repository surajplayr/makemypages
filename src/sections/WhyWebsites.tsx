import { FadeIn } from '../components/UI';
import { 
  ShieldCheck, 
  Eye, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Sparkles, 
  ZapOff, 
  Flame, 
  Activity, 
  Bell, 
  Clock, 
  CheckCircle, 
  Rocket, 
  Laptop, 
  ArrowUpRight, 
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const WhyWebsites = () => {
  const [activeSegment, setActiveSegment] = useState<'speed' | 'leads' | 'growth'>('speed');
  const [speedVal, setSpeedVal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSegment(prev => {
        if (prev === 'speed') return 'leads';
        if (prev === 'leads') return 'growth';
        return 'speed';
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Simulate Performance score counting up
  useEffect(() => {
    if (activeSegment === 'speed') {
      setSpeedVal(0);
      const interval = setInterval(() => {
        setSpeedVal(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 4;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [activeSegment]);

  const points = [
    {
      icon: ShieldCheck,
      title: 'Build Credibility',
      text: 'A professional website instantly establishes trust and authority in your industry.'
    },
    {
      icon: Eye,
      title: 'Increase Visibility',
      text: 'Show up where your customers are searching. Get found on Google and beyond.'
    },
    {
      icon: Zap,
      title: 'Generate Leads',
      text: 'Turn visitors into customers with optimized landing pages and clear call-to-actions.'
    },
    {
      icon: MessageSquare,
      title: 'Improve Trust',
      text: 'Provide a hub for reviews, case studies, and transparent communication.'
    },
    {
      icon: TrendingUp,
      title: 'Grow 24/7',
      text: 'Your website never sleeps. It works for your business around the clock, worldwide.'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center animate-fadeIn">
           <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-8 leading-tight">
                Why Businesses Need A <span className="text-brand-primary">Website Today</span>
              </h2>
              <p className="text-lg text-brand-text-secondary mb-12 leading-relaxed">
                In the digital age, your website is your most valuable employee. It's the first place customers look, and the last place they verify your credibility.
              </p>
              <div className="space-y-8">
                {points.map((point) => (
                  <div key={point.title} className="flex items-start space-x-4 group">
                    <div className="mt-1 bg-brand-primary/10 p-2 rounded-lg text-brand-primary group-hover:scale-110 transition-transform duration-300">
                      <point.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors duration-300">{point.title}</h4>
                      <p className="text-brand-text-secondary text-sm">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
           </FadeIn>

           {/* Interactive, premium animated right-side visualizer */}
           <FadeIn delay={0.2} className="relative">
              {/* Outer decorative backdrops */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-blue-300 rounded-[3.1rem] opacity-30 blur-2xl group-hover:opacity-45 transition-duration-700"></div>
              
              <div className="relative bg-brand-bg rounded-[3rem] p-6 sm:p-10 border border-brand-border shadow-2xl">
                 
                 {/* Top Navigation Tabs inside Visual Widget */}
                 <div className="flex bg-white/80 backdrop-blur-sm p-1.5 rounded-2xl border border-brand-border/40 gap-1.5 mb-8">
                    {[
                      { id: 'speed', label: '⚡ Performance', color: 'text-emerald-500' },
                      { id: 'leads', label: '🎯 Leads Flow', color: 'text-brand-primary' },
                      { id: 'growth', label: '📈 Analytics', color: 'text-indigo-500' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveSegment(tab.id as any)}
                        className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                          activeSegment === tab.id
                            ? 'bg-brand-text text-white shadow-lg'
                            : 'text-brand-text-secondary hover:text-brand-text hover:bg-white'
                        }`}
                      >
                         <span>{tab.label}</span>
                      </button>
                    ))}
                 </div>

                 {/* Segment Content panels wrapped with AnimatePresence */}
                 <div className="relative min-h-[350px] bg-white rounded-2xl border border-brand-border shadow-premium overflow-hidden p-6 sm:p-8 flex flex-col justify-between">
                    
                    <AnimatePresence mode="wait">
                       {activeSegment === 'speed' && (
                         <motion.div
                           key="speed-segment"
                           initial={{ opacity: 0, y: 15 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -15 }}
                           transition={{ duration: 0.4 }}
                           className="space-y-6 flex-1 flex flex-col justify-between"
                         >
                            <div className="flex justify-between items-center border-b border-brand-bg pb-4">
                               <div>
                                  <span className="text-[10px] font-bold tracking-wider text-emerald-500 uppercase bg-emerald-50 px-2.5 py-1 rounded-full">Core Web Vitals</span>
                                  <h3 className="text-xl font-display font-bold text-brand-text mt-1">Speed Optimization</h3>
                               </div>
                               <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                                  <Rocket className="animate-bounce" size={18} />
                               </div>
                            </div>

                            {/* Center Animated Score Ring */}
                            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-4">
                               <div className="relative w-36 h-36 flex items-center justify-center">
                                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                                     <circle 
                                       cx="72" 
                                       cy="72" 
                                       r="54" 
                                       className="stroke-brand-bg fill-transparent" 
                                       strokeWidth="8"
                                     />
                                     <motion.circle 
                                       cx="72" 
                                       cy="72" 
                                       r="54" 
                                       className="stroke-emerald-500 fill-transparent" 
                                       strokeWidth="8"
                                       strokeDasharray={2 * Math.PI * 54}
                                       strokeDashoffset={2 * Math.PI * 54 * (1 - speedVal / 100)}
                                       strokeLinecap="round"
                                     />
                                  </svg>
                                  <div className="text-center z-10">
                                     <span className="text-4xl font-extrabold text-brand-text tracking-tight">{speedVal}</span>
                                     <p className="text-[10px] uppercase tracking-wider text-brand-text-secondary font-bold">Lighthouse</p>
                                  </div>
                               </div>

                               {/* Pulse Metrics */}
                               <div className="space-y-3 flex-1 w-full">
                                  {[
                                    { label: 'Load Time (LCP)', val: '0.6s', desc: 'Superior Speed', prg: 98, color: 'bg-emerald-500' },
                                    { label: 'Time to Interactive', val: '0.1s', desc: 'Absolute Instant', prg: 100, color: 'bg-emerald-500' },
                                    { label: 'SEO Visibility Rating', val: 'Perfect', desc: 'Search Grade A+', prg: 95, color: 'bg-brand-primary' }
                                  ].map((m, idx) => (
                                    <div key={idx} className="bg-brand-bg p-2.5 rounded-xl border border-brand-border/40">
                                       <div className="flex justify-between items-center text-xs mb-1">
                                          <span className="text-brand-text-secondary font-medium">{m.label}</span>
                                          <strong className="text-brand-text">{m.val}</strong>
                                       </div>
                                       <div className="w-full h-1.5 bg-white rounded-full overflow-hidden border border-brand-border/30">
                                          <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${m.prg}%` }}
                                            transition={{ delay: 0.2 + idx * 0.1, duration: 1 }}
                                            className={`h-full ${m.color}`}
                                          />
                                       </div>
                                    </div>
                                  ))}
                               </div>
                            </div>
                         </motion.div>
                       )}

                       {activeSegment === 'leads' && (
                         <motion.div
                           key="leads-segment"
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.4 }}
                           className="space-y-6 flex-1 flex flex-col justify-between"
                         >
                            <div className="flex justify-between items-center border-b border-brand-bg pb-4">
                               <div>
                                  <span className="text-[10px] font-bold tracking-wider text-brand-primary uppercase bg-blue-50 px-2.5 py-1 rounded-full">Automated Funnel</span>
                                  <h3 className="text-xl font-display font-bold text-brand-text mt-1">Lead Capture Feed</h3>
                               </div>
                               <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-brand-primary">
                                  <Bell className="animate-swing" size={18} />
                               </div>
                            </div>

                            {/* Sliding/Fade In lead notification bubbles */}
                            <div className="space-y-3 flex-1 flex flex-col justify-center py-2">
                               {[
                                 { name: 'Aditya Sen', text: 'Inquired about Corporate Redesign', time: '1m ago', source: 'Kolkata - Organic', val: '₹1,50,000 Estimated' },
                                 { name: 'Rohan Sharma', text: 'Booked Discovery Consultation Calls', time: '12m ago', source: 'Mumbai - LinkedIn', val: 'Confirmed Slot' },
                                 { name: 'Kunal Verma', text: 'Purchased E-commerce Suite License', time: '40m ago', source: 'Google Ads Search', val: '₹85,000 Paid' }
                               ].map((lead, idx) => (
                                 <motion.div
                                   key={idx}
                                   initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                   animate={{ opacity: 1, x: 0, scale: 1 }}
                                   transition={{ delay: idx * 0.2, duration: 0.5 }}
                                   whileHover={{ scale: 1.02 }}
                                   className="p-3 bg-brand-bg rounded-xl border border-brand-border flex items-center justify-between gap-4 hover:border-brand-primary/40 transition-all shadow-sm"
                                 >
                                    <div className="flex items-center gap-3">
                                       <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center font-bold text-brand-primary text-xs shadow-sm">
                                         {lead.name.split(' ').map(n=>n[0]).join('')}
                                       </div>
                                       <div>
                                          <div className="flex items-center gap-2">
                                             <span className="text-xs font-bold text-brand-text">{lead.name}</span>
                                             <span className="text-[9px] text-brand-text-secondary uppercase">{lead.source}</span>
                                          </div>
                                          <p className="text-[10.5px] text-brand-text-secondary">{lead.text}</p>
                                       </div>
                                    </div>
                                    <div className="text-right">
                                       <span className="text-[10.5px] font-bold text-emerald-500 block">{lead.val}</span>
                                       <span className="text-[9px] text-brand-text-secondary flex items-center gap-1 justify-end">
                                          <Clock size={10} /> {lead.time}
                                       </span>
                                    </div>
                                 </motion.div>
                               ))}
                            </div>
                         </motion.div>
                       )}

                       {activeSegment === 'growth' && (
                         <motion.div
                           key="growth-segment"
                           initial={{ opacity: 0, y: 15 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -15 }}
                           transition={{ duration: 0.4 }}
                           className="space-y-6 flex-1 flex flex-col justify-between"
                         >
                            <div className="flex justify-between items-center border-b border-brand-bg pb-4">
                               <div>
                                  <span className="text-[10px] font-bold tracking-wider text-indigo-500 uppercase bg-indigo-50 px-2.5 py-1 rounded-full">Live Stats Analytics</span>
                                  <h3 className="text-xl font-display font-bold text-brand-text mt-1">Global Revenue Reach</h3>
                               </div>
                               <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500">
                                  <Activity className="animate-pulse" size={18} />
                               </div>
                            </div>

                            {/* Simulated Chart Wave */}
                            <div className="h-32 bg-brand-bg rounded-xl border border-brand-border p-4 relative overflow-hidden flex flex-col justify-between">
                               <div className="flex justify-between items-center relative z-10">
                                  <span className="text-[10px] uppercase font-bold text-indigo-600">Weekly Traffic + Volume</span>
                                  <span className="text-xs font-extrabold text-brand-text bg-white px-2 py-0.5 rounded-md border border-brand-border">↑ 412% Traffic</span>
                               </div>

                               <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
                                  <motion.path
                                    d="M0 35 Q 15 32, 30 15 T 60 25 T 90 5 L 100 2 L 100 40 L 0 40 Z"
                                    fill="url(#indigoGrad)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.15 }}
                                    transition={{ duration: 0.5 }}
                                  />
                                  <motion.path
                                    d="M0 35 Q 15 32, 30 15 T 60 25 T 90 5 L 100 2"
                                    fill="transparent"
                                    stroke="#6366f1"
                                    strokeWidth="2.5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                  />
                                  {/* Pulsing focal node indicator */}
                                  <motion.circle
                                    cx="90"
                                    cy="5"
                                    r="3"
                                    fill="#6366f1"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [1, 1.6, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                  />
                                  <defs>
                                     <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="transparent" />
                                     </linearGradient>
                                  </defs>
                               </svg>
                            </div>

                            {/* Stat counters breakdown row */}
                            <div className="grid grid-cols-3 gap-2 py-1">
                               {[
                                 { label: 'Unique Visits', val: '48.9k', glow: 'text-brand-text' },
                                 { label: 'Avg Session', val: '4m 32s', glow: 'text-brand-primary' },
                                 { label: 'Conversion Rate', val: '5.24%', glow: 'text-emerald-500' }
                               ].map((st, idx) => (
                                 <div key={idx} className="bg-brand-bg rounded-xl border border-brand-border/40 p-2.5 text-center">
                                    <span className="text-[9px] text-brand-text-secondary uppercase block mb-1 font-medium">{st.label}</span>
                                    <strong className={`text-sm sm:text-base font-bold ${st.glow}`}>{st.val}</strong>
                                 </div>
                               ))}
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>
                    
                    {/* Bottom Status Ticker */}
                    <div className="border-t border-brand-bg pt-3.5 mt-4 flex items-center justify-between text-[11px] text-brand-text-secondary">
                       <span className="flex items-center gap-1.5 font-bold">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                          System: Live Optimized Fully
                       </span>
                       <span className="text-[10px] tracking-wider uppercase bg-brand-bg px-2 py-0.5 rounded font-bold border border-brand-border/40 text-brand-text">
                         MakeMyPages UI®
                       </span>
                    </div>

                 </div>
              </div>
           </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsites;

