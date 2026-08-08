import { useState } from 'react';
import { FadeIn, SectionHeading, ServiceCard } from '../components/UI';
import { servicesData } from '../data/services';
import { LayoutGrid, Code, Palette, TrendingUp, Sparkles, Server, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'all', label: 'All Services', icon: LayoutGrid },
  { id: 'web-cms', label: 'Web & CMS', icon: Code },
  { id: 'branding-design', label: 'Branding & Design', icon: Palette },
  { id: 'growth-marketing', label: 'Growth & SMM', icon: TrendingUp },
  { id: 'ai-automation', label: 'AI & Automation', icon: Sparkles },
  { id: 'operations-tech', label: 'Ops & Cloud', icon: Server },
];

// Top 4 maximum clickable services requested for homepage default view
const FEATURED_SLUGS = [
  'website-development',
  'social-media-marketing',
  'influencer-marketing',
  'ecommerce-solutions'
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter 4 featured services for the initial homepage view
  const featuredServices = FEATURED_SLUGS
    .map(slug => servicesData.find(s => s.slug === slug))
    .filter((s): s is typeof servicesData[0] => Boolean(s));

  // If showAll is true, filter by category or show all
  const displayServices = showAll
    ? (activeCategory === 'all' 
        ? servicesData 
        : servicesData.filter(service => service.categoryGroup === activeCategory))
    : featuredServices;

  return (
    <section id="services" className="py-20 lg:py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="High-Impact Digital Services" 
          subtitle="Discover our top performance-driven solutions crafted to scale your online presence, leads, and revenue."
          centered
        />

        {/* Category Filters (Only shown when user clicks "Explore All Services") */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="overflow-hidden mb-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 py-2">
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Services Grid (4 Featured Services by Default - Icon-Driven for Homepage) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => (
            <ServiceCard 
              key={service.slug} 
              {...service}
              startingPrice={service.startingPrice}
              description={service.shortDescription}
              visualImage={service.visualImage}
              visualBadge={service.visualBadge}
              categoryGroup={service.categoryGroup}
              hideVisualImage={true}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Explore All Services Action Bar */}
        <div className="mt-12 text-center flex flex-col items-center justify-center gap-4">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-hover text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
            >
              <span>Explore All Services ({servicesData.length} Solutions)</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              onClick={() => {
                setShowAll(false);
                setActiveCategory('all');
              }}
              className="inline-flex items-center justify-center gap-2 bg-white border border-brand-border hover:border-brand-primary/40 text-brand-text px-6 py-3 rounded-2xl font-bold text-sm shadow-xs transition-all hover:bg-slate-50 cursor-pointer"
            >
              <span>Show Top 4 Featured Services Only</span>
              <ChevronUp size={16} />
            </button>
          )}

          <p className="text-center text-xs sm:text-sm text-brand-text-secondary font-medium italic">
            *Final pricing depends on project scope, requirements, and customization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

