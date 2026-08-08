import { FadeIn } from '../components/UI';
import { Code, Share2, Sparkles, TrendingUp, ShieldCheck, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <FadeIn className="relative">
              <div className="aspect-[4/3] bg-white rounded-[2.5rem] p-2 shadow-premium relative z-10 overflow-hidden border border-brand-border group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" 
                  alt="MakeMyPages Digital Web Development Agency Team India" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-[2.2rem] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-[2.2rem]" />
                
                {/* Floating Capability Badges on Image */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                   {[
                     { label: 'CMS Websites', icon: Code },
                     { label: 'Social Marketing', icon: Share2 },
                     { label: 'Generative AI', icon: Sparkles },
                     { label: 'SEO & Youtube Growth', icon: TrendingUp }
                   ].map((item, idx) => {
                     const Icon = item.icon;
                     return (
                       <span key={idx} className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center gap-1.5">
                         <Icon size={14} className="text-brand-primary" />
                         {item.label}
                       </span>
                     );
                   })}
                </div>
              </div>

              {/* Decorative backdrops */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl z-0"></div>
           </FadeIn>

           <div>
              <FadeIn>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">Our Digital Studio</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6 leading-tight">
                  Building High-Impact <span className="text-brand-primary">Digital Assets</span>
                </h2>
                <p className="text-base text-brand-text-secondary mb-8 leading-relaxed">
                  MakeMyPages is a full-service agency empowering businesses with CMS websites, social media marketing, SEO, personal branding, and custom AI automations under one roof.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-brand-border">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck size={18} className="text-brand-primary" />
                      <strong className="text-lg font-bold text-brand-text">100+</strong>
                    </div>
                    <p className="text-xs text-brand-text-secondary">Projects Successfully Launched</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-brand-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={18} className="text-emerald-500" />
                      <strong className="text-lg font-bold text-brand-text">99.8%</strong>
                    </div>
                    <p className="text-xs text-brand-text-secondary">Client Satisfaction Score</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                   <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2"></div>
                      <p className="text-xs text-brand-text-secondary"><strong className="text-brand-text">Web & CMS Mastery:</strong> WordPress, Webflow, Shopify, and custom React Next.js apps.</p>
                   </div>
                   <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2"></div>
                      <p className="text-xs text-brand-text-secondary"><strong className="text-brand-text">Social Media & YouTube:</strong> Targeted ad campaigns, content management, and metadata SEO.</p>
                   </div>
                   <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2"></div>
                      <p className="text-xs text-brand-text-secondary"><strong className="text-brand-text">Post-Launch Support:</strong> 3 months free maintenance with every website project.</p>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center p-5 bg-white rounded-2xl border border-brand-border">
                   <div className="flex -space-x-3">
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Team member" />
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" alt="Team member" />
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" alt="Team member" />
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-primary text-white flex items-center justify-center text-[10px] font-bold">+15</div>
                   </div>
                   <p className="text-xs font-medium text-brand-text-secondary italic">"Empowering brands with design, speed, and real revenue results."</p>
                </div>
              </FadeIn>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
