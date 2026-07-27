import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-brand-footer text-brand-footer-text pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo light showTagline />
            </Link>
            <p className="text-brand-footer-text/70 text-sm leading-relaxed">
              We build modern websites, branding systems, and digital experiences that help businesses stand out online.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61589966250456" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/make.mypages/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-footer-text/70">
              <li><a href="/#home" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
              <li><Link to="/admin" className="hover:text-brand-primary transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-brand-footer-text/70">
              <li><Link to="/services/website-development" className="hover:text-brand-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services/branding" className="hover:text-brand-primary transition-colors">Branding</Link></li>
              <li><Link to="/services/seo-optimization" className="hover:text-brand-primary transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services/business-automation" className="hover:text-brand-primary transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
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
                <span>Park Street, Kolkata, West Bengal</span>
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
