import { FadeIn, SectionHeading } from '../components/UI';
import { Star, TrendingUp, Sparkles, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow Solutions',
      service: 'CMS Website & Redesign',
      metric: '+140% Conversions',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      content: 'The team at MakeMyPages transformed our online presence. Our CMS website is super easy to manage, lightning-fast, and our lead conversion rate shot up by 140% within weeks.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, EcoStores India',
      service: 'Ecommerce & Social Marketing',
      metric: '3.8x ROI on Paid Ads',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
      content: 'Professional, highly responsive, and truly masters of digital growth. Their social media campaigns and clean ecommerce UI turned our store into a revenue generator.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director, BrightFuture',
      service: 'YouTube SEO & Branding',
      metric: '+250K Channel Views',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      content: 'MakeMyPages designed our brand identity and handled our YouTube metadata SEO. Their custom thumbnails and strategy brought us 250,000 organic views in 2 months!'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Real results and feedback from businesses that have scaled with MakeMyPages."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-brand-bg p-8 rounded-3xl border border-brand-border relative h-full flex flex-col justify-between hover:shadow-premium transition-all duration-300">
                 <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex space-x-1 text-amber-400">
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-md border border-brand-primary/20 flex items-center gap-1">
                         <TrendingUp size={12} /> {t.metric}
                      </span>
                    </div>

                    <p className="text-sm text-brand-text leading-relaxed mb-8 italic">
                      "{t.content}"
                    </p>
                 </div>

                 <div className="pt-6 border-t border-brand-border/60 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                       <div className="w-11 h-11 bg-white rounded-full border border-brand-border overflow-hidden shadow-sm">
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                       </div>
                       <div>
                         <h4 className="font-bold text-sm text-brand-text">{t.name}</h4>
                         <p className="text-[11px] text-brand-text-secondary">{t.role}</p>
                       </div>
                    </div>
                    
                    <span className="text-[9px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {t.service}
                    </span>
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
