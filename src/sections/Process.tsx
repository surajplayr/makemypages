import { FadeIn, SectionHeading } from '../components/UI';
import { MessageSquare, Layout, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Discovery',
      desc: 'We map out your business goals, target audience, and brand requirements.',
      icon: MessageSquare,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      badge: 'Discovery Brief'
    },
    {
      num: '02',
      title: 'UI/UX & Web Design',
      desc: 'Our creative team designs custom wireframes and interactive prototypes.',
      icon: Layout,
      image: '/website_dev_visual_1784956545081.jpg',
      badge: 'Visual Design'
    },
    {
      num: '03',
      title: 'CMS & Code Development',
      desc: 'We engineer high-performance websites and automated workflows.',
      icon: Code2,
      image: '/ai_automation_visual_1784956611081.jpg',
      badge: 'Build & Automate'
    },
    {
      num: '04',
      title: 'Launch & 24/7 Support',
      desc: 'Your project goes live with full SEO setup and 3 months free maintenance.',
      icon: Rocket,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      badge: 'Go-Live Success'
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Proven Step-by-Step Process" 
          subtitle="How we turn your vision into a high-converting digital experience."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.num} delay={i * 0.1} className="h-full">
                <div className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    {/* Visual Card Image Header */}
                    <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Step Number Badge */}
                      <span className="absolute top-3 left-3 bg-brand-primary text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md border border-white/20">
                        STEP {step.num}
                      </span>

                      {/* Category Badge */}
                      <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-brand-text text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                        {step.badge}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-brand-text-secondary text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-3 border-t border-slate-100 flex items-center text-emerald-600 text-xs font-bold gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Guaranteed Quality Output</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
