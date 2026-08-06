import { useState } from 'react';
import { FadeIn, SectionHeading, ServiceCard } from '../components/UI';
import { servicesData } from '../data/services';
import { LayoutGrid, Code, Palette, TrendingUp, Sparkles, Server } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Services', icon: LayoutGrid },
  { id: 'web-cms', label: 'Web & CMS', icon: Code },
  { id: 'branding-design', label: 'Branding & Design', icon: Palette },
  { id: 'growth-marketing', label: 'Growth & SMM', icon: TrendingUp },
  { id: 'ai-automation', label: 'AI & Automation', icon: Sparkles },
  { id: 'operations-tech', label: 'Ops & Cloud', icon: Server },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.categoryGroup === activeCategory);

  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Comprehensive Digital Services" 
          subtitle="Everything you need to build, grow, and manage your digital presence in one place."
          centered
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = cat.id === 'all' 
              ? servicesData.length 
              : servicesData.filter(s => s.categoryGroup === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-brand-primary text-white border-brand-primary shadow-md scale-105'
                    : 'bg-white text-brand-text-secondary border-brand-border hover:border-brand-primary/40 hover:text-brand-text'
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.slug} 
              {...service}
              startingPrice={service.startingPrice}
              description={service.shortDescription}
              visualImage={service.visualImage}
              visualBadge={service.visualBadge}
              categoryGroup={service.categoryGroup}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Pricing Disclaimer Note */}
        <p className="text-center text-xs sm:text-sm text-brand-text-secondary mt-10 font-medium italic">
          *Final pricing depends on project scope, requirements, and customization.
        </p>
      </div>
    </section>
  );
};

export default Services;
