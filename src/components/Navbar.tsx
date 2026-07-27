import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { servicesData } from '../data/services';

const shortNames: Record<string, string> = {
  'website-development': 'Web Dev',
  'website-redesign': 'Web Redesign',
  'seo-optimization': 'SEO Integration',
  'branding': 'Brand Identity',
  'ecommerce-solutions': 'Affordable E-Commerce',
  'social-media-marketing': 'Social Ads',
  'social-media-management': 'SMM Services',
  'legal-services': 'Legal Docs',
  'business-automation': 'Workflows',
  'hosting-maintenance': 'Cloud Hosting',
  'youtube-management-support': 'YouTube Growth',
  'photography-videography': 'Photo & Video',
  'ai-content-creation': 'AI Content',
  'ai-product-photography': 'AI Product Photo',
  'graphic-design': 'Graphic Design',
  'content-writing': 'Content Writing'
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-brand-white/80 backdrop-blur-md border-brand-border py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-full">
        <div className="flex-1 flex items-center">
          <Link to="/" className="hover:opacity-90 transition-opacity shrink-0">
            <Logo />
          </Link>
        </div>
 
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <motion.a
            href="/#home"
            whileHover={{ y: -1 }}
            className="relative text-sm font-medium text-brand-text-secondary hover:text-brand-primary transition-colors group"
          >
            Home
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"
            />
          </motion.a>

          {/* Interactive Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-sm font-medium text-brand-text-secondary hover:text-brand-primary transition-colors cursor-pointer py-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Services</span>
              <ChevronDown size={14} className={cn("transition-transform duration-200", isDropdownOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white border border-brand-border rounded-2xl shadow-xl p-5 z-50 grid grid-cols-2 gap-2"
                >
                  <div className="col-span-2 text-[10px] uppercase font-bold tracking-wider text-brand-text-secondary border-b border-brand-bg pb-2 mb-2 flex items-center justify-between">
                    <span>Our Capabilities</span>
                    <span className="text-brand-primary">16 Dedicated Services</span>
                  </div>
                  {servicesData.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-primary/5 group transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Icon size={16} />
                        </div>
                        <span className="text-xs font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                          {shortNames[service.slug] || service.title}
                        </span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>


        </div>
 
        {/* CTA Button */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <motion.a
            href="https://wa.me/919709143253"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-hover transition-all shadow-sm"
          >
            Get Free Consultation
          </motion.a>
        </div>
 
        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-text ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
 
      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-white border-b border-brand-border p-6 md:hidden flex flex-col space-y-4 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <a
              href="/#home"
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-brand-text-secondary hover:text-brand-primary"
            >
              Home
            </a>

            <div className="border-t border-brand-bg pt-2">
              <button 
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center justify-between text-lg font-bold text-brand-text hover:text-brand-primary w-full text-left py-2"
              >
                <span>Services</span>
                <ChevronDown size={20} className={cn("transition-transform duration-200", mobileDropdownOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-2 pr-2 grid grid-cols-2 gap-2.5 mt-2 pb-2"
                  >
                    {servicesData.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className="flex items-center gap-2 p-2 rounded-xl bg-brand-bg hover:bg-brand-primary/5 group"
                        >
                          <div className="text-brand-primary flex-shrink-0">
                            <Icon size={14} />
                          </div>
                          <span className="text-xs font-semibold text-brand-text break-words">
                            {shortNames[service.slug] || service.title}
                          </span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            <a
              href="https://wa.me/919709143253"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="bg-brand-primary text-white px-5 py-3 rounded-xl text-center font-semibold hover:bg-brand-hover transition-all shadow-soft inline-block"
            >
              Get Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
