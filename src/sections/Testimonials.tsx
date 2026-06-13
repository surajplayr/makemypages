import { FadeIn, SectionHeading } from '../components/UI';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechFlow',
      content: 'The team at MakeMyPages transformed our online presence. Our conversion rates have increased by 40% since the new site launch.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, EcoStores',
      content: 'Professional, responsive, and truly understanding of our brand identity. They were more like partners than traditional service providers.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director, BrightFuture',
      content: 'Minimal design that speaks volumes. Their attention to detail in the UI/UX phase was exceptional.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Real feedback from businesses that have grown with MakeMyPages."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-brand-bg p-10 rounded-3xl border border-brand-border relative">
                 <div className="flex space-x-1 mb-6 text-brand-primary">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                 </div>
                 <p className="text-lg text-brand-text leading-relaxed mb-10 italic">
                   "{t.content}"
                 </p>
                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full border border-brand-border overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text">{t.name}</h4>
                      <p className="text-sm text-brand-text-secondary">{t.role}</p>
                    </div>
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
