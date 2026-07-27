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
  pricing?: { price: string }[] | { price: string },
  visualImage?: string,
  visualBadge?: string,
  categoryGroup?: string,
  delay?: number,
  key?: React.Key
}) => (
  <FadeIn delay={delay}>
    <Link 
      to={`/services/${slug}`} 
      className="block h-full bg-white rounded-2xl border border-brand-border transition-all duration-300 hover:shadow-premium hover:-translate-y-1.5 group relative overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Visual Thumbnail Header */}
        {visualImage && (
          <div className="relative h-44 w-full overflow-hidden bg-slate-100 border-b border-brand-border">
            <img 
              src={visualImage} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            
            {visualBadge && (
              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-white/20">
                {visualBadge}
              </span>
            )}

            {pricing && (
              <span className="absolute bottom-3 right-3 text-xs font-bold text-white bg-brand-primary px-3 py-1 rounded-lg shadow-md border border-white/20">
                {Array.isArray(pricing) 
                  ? (pricing.length > 1 ? `From ${pricing[0].price}` : pricing[0].price)
                  : (pricing as any).price
                }
              </span>
            )}
          </div>
        )}

        <div className="p-7">
          <div className="flex justify-between items-center mb-4">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Icon size={20} />
            </div>
            {!visualImage && pricing && (
              <span className="text-xs font-bold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-lg border border-brand-primary/20">
                {Array.isArray(pricing) 
                  ? (pricing.length > 1 ? `From ${pricing[0].price}` : pricing[0].price)
                  : (pricing as any).price
                }
              </span>
            )}
          </div>
          <h3 className="text-xl font-display font-semibold text-brand-text mb-2 transition-colors group-hover:text-brand-primary">
            {title}
          </h3>
          <p className="text-brand-text-secondary text-sm leading-relaxed mb-2 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="px-7 pb-6 pt-3 flex items-center justify-between text-sm font-semibold text-brand-primary group-hover:underline border-t border-slate-100 mt-auto">
        <span>Explore Package Details</span>
        <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  </FadeIn>
);
