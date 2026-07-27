import { FadeIn, SectionHeading } from '../components/UI';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              title="Let's Start Your Project" 
              subtitle="Ready to transform your digital presence? Fill out the form and our team will get back to you within 24 hours."
            />
            <div className="space-y-10 mt-12">
               <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl border border-brand-border flex items-center justify-center text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest mb-1">Email Us</h4>
                    <a href="mailto:hello@makemypages.in" className="text-lg text-brand-text-secondary hover:text-brand-primary transition-colors">hello@makemypages.in</a>
                  </div>
               </div>
               <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl border border-brand-border flex items-center justify-center text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest mb-1">Call Us</h4>
                    <p className="text-lg text-brand-text-secondary">+91 9709143253</p>
                    <a href="https://wa.me/919709143253" target="_blank" className="text-brand-primary font-bold text-sm mt-1 flex items-center hover:underline">
                       Chat On WhatsApp →
                    </a>
                  </div>
               </div>
               <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl border border-brand-border flex items-center justify-center text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text uppercase tracking-widest mb-1">Registered Office</h4>
                    <p className="text-lg text-brand-text-secondary">Park Street, Kolkata, West Bengal</p>
                  </div>
               </div>
            </div>
          </div>

          <FadeIn delay={0.2} className="bg-white p-10 md:p-16 rounded-[3rem] shadow-premium border border-brand-border relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Enter your email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address (e.g. user@domain.com)."
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="Optional"
                    pattern="^\+?[0-9]{10,15}$"
                    title="Please enter a valid phone number with 10 to 15 digits (e.g. 9876543210 or +919876543210)."
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text">Service Required</label>
                  <select 
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                    value={formState.service}
                    onChange={(e) => setFormState({...formState, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    <option value="web-dev">Web Development</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-text">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your project"
                  className="w-full bg-brand-bg border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-brand-hover transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
              {status === 'success' && <p className="text-green-600 font-medium text-center">Inquiry sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 font-medium text-center">Something went wrong. Please try again.</p>}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
