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
  delay = 0
}: { 
  icon: any, 
  title: string, 
  description: string,
  slug: string,
  pricing?: { price: string }[] | { price: string },
  delay?: number,
  key?: React.Key
}) => (
  <FadeIn delay={delay}>
    <Link to={`/services/${slug}`} className="block h-full bg-brand-white p-8 rounded-2xl border border-brand-border transition-all duration-300 hover:shadow-premium hover:-translate-y-1 group relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-brand-primary/5 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        {pricing && (
          <span className="text-xs font-bold text-brand-primary bg-brand-primary/5 px-3 py-1.5 rounded-lg border border-brand-primary/10">
            {Array.isArray(pricing) 
              ? (pricing.length > 1 ? `From ${pricing[0].price}` : pricing[0].price)
              : (pricing as any).price
            }
          </span>
        )}
      </div>
      <h3 className="text-xl font-display font-semibold text-brand-text mb-4 transition-colors group-hover:text-brand-primary">{title}</h3>
      <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="text-sm font-semibold text-brand-primary flex items-center group-hover:underline">
        Learn More <span className="ml-2">→</span>
      </div>
    </Link>
  </FadeIn>
);
