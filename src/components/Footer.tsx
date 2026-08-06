import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-brand-footer-text pt-20 pb-10 mt-20">
      {/* Tech Background Image Layer with Dark Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/tech_hero_bg_1785171907309.jpg" 
          alt="MakeMyPages Digital Agency India Tech Background" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity" aria-label="MakeMyPages Homepage">
              <Logo light showTagline />
            </Link>
            <p className="text-brand-footer-text/70 text-sm leading-relaxed">
              India's premier agency for custom CMS website development, SEO ranking growth, commercial photography, and AI workflow automations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61589966250456" target="_blank" rel="noopener noreferrer" aria-label="MakeMyPages Facebook Page" className="hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/make.mypages/" target="_blank" rel="noopener noreferrer" aria-label="MakeMyPages Instagram Profile" className="hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-footer-text/70">
              <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><a href="/#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
              <li><Link to="/admin" className="hover:text-brand-primary transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-brand-footer-text/70">
              <li><Link to="/services/website-development" className="hover:text-brand-primary transition-colors">Website Development</Link></li>
              <li><Link to="/services/ecommerce-solutions" className="hover:text-brand-primary transition-colors">E-commerce Stores</Link></li>
              <li><Link to="/services/influencer-marketing" className="hover:text-brand-primary transition-colors">Influencer Marketing</Link></li>
              <li><Link to="/services/seo-optimization" className="hover:text-brand-primary transition-colors">SEO Services India</Link></li>
              <li><Link to="/services/photography-videography" className="hover:text-brand-primary transition-colors">Photography & Videography</Link></li>
              <li><Link to="/services/branding" className="hover:text-brand-primary transition-colors">Branding & Identity</Link></li>
              <li><Link to="/services/hosting-maintenance" className="hover:text-brand-primary transition-colors">Hosting & Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us (India)</h4>
            <ul className="space-y-4 text-sm text-brand-footer-text/70">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-primary" />
                <a href="mailto:hello@makemypages.in" className="hover:text-brand-primary transition-colors">hello@makemypages.in</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-primary" />
                <span>+91 9709143253</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-brand-primary" />
                <span>Park Street, Kolkata, West Bengal, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-footer-text/50">
            © {new Date().getFullYear()} MakeMyPages. All rights reserved.
          </p>
          <span className="font-bold uppercase tracking-widest text-[10px]">
            #createimpact
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
