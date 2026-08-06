import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const FadeIn = ({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false 
}: { 
  title: string, 
  subtitle?: string, 
  centered?: boolean 
}) => (
  <FadeIn className={cn("mb-16", centered && "text-center mx-auto max-w-2xl")}>
    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-text mb-6 tracking-tight leading-[1.1]">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-brand-text-secondary leading-relaxed">
        {subtitle}
      </p>
    )}
  </FadeIn>
);

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  slug,
  startingPrice,
  pricing,
  visualImage,
  visualBadge,
  categoryGroup,
  delay = 0
}: { 
  icon: any, 
  title: string, 
  description: string,
  slug: string,
  startingPrice?: string,
  pricing?: { price: string }[] | { price: string },
  visualImage?: string,
  visualBadge?: string,
  categoryGroup?: string,
  delay?: number,
  key?: React.Key
}) => {
  const priceBadgeText = startingPrice || (
    pricing 
      ? (Array.isArray(pricing) ? (pricing.length > 0 ? `Starting From ${pricing[0].price}` : '') : (pricing as any).price)
      : ''
  );

  return (
    <FadeIn delay={delay}>
      <div 
        className="h-full bg-white rounded-2xl border border-brand-border transition-all duration-300 hover:shadow-premium hover:-translate-y-1.5 group relative overflow-hidden flex flex-col justify-between"
      >
        <div>
          {/* Visual Thumbnail Header */}
          {visualImage && (
            <Link to={`/services/${slug}`} className="block relative h-44 w-full overflow-hidden bg-slate-100 border-b border-brand-border">
              <img 
                src={visualImage} 
                alt={`${title} - MakeMyPages India`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              {visualBadge && (
                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-white/20">
                  {visualBadge}
                </span>
              )}
            </Link>
          )}

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <Link to={`/services/${slug}`} className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Icon size={20} />
              </Link>
            </div>

            <Link to={`/services/${slug}`} className="block">
              <h3 className="text-lg font-display font-bold text-brand-text mb-2 transition-colors group-hover:text-brand-primary leading-snug">
                {title}
              </h3>
            </Link>

            {/* Starting Price Badge below service title */}
            {priceBadgeText && (
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{priceBadgeText}</span>
                </span>
              </div>
            )}

            <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-2 line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Action CTAs: Learn More & Get Free Consultation */}
        <div className="p-6 pt-3 border-t border-slate-100 mt-auto flex flex-col sm:flex-row items-center gap-2">
          <Link 
            to={`/services/${slug}`} 
            className="w-full sm:w-1/2 py-2 px-2.5 text-center text-xs font-bold rounded-xl border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200 flex items-center justify-center gap-1"
          >
            <span>Learn More</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-1/2 py-2 px-2.5 text-center text-xs font-bold rounded-xl bg-brand-primary text-white hover:bg-brand-primary-hover shadow-xs transition-all duration-200 flex items-center justify-center whitespace-nowrap"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </FadeIn>
  );
};
