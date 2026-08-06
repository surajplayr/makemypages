import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FadeIn } from '../components/UI';
import { 
  Code, 
  Camera, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Zap, 
  Globe, 
  Headphones, 
  Layers, 
  Star,
  Check,
  MessageSquare
} from 'lucide-react';

export default function AboutUs() {
  const corePillars = [
    {
      icon: Code,
      title: 'High-Performance CMS & Web Engineering',
      badge: 'Speed & Scale',
      description: 'We build lightning-fast, secure, and mobile-responsive websites utilizing WordPress, Webflow, Shopify, and custom React Next.js architectures optimized for 99+ Core Web Vitals.',
      highlights: ['Custom CMS Dashboard', 'Mobile-First Responsive UI', 'Sub-second Page Loading', '3 Months Free Maintenance']
    },
    {
      icon: Camera,
      title: 'Cinematic Photography & Videography',
      badge: 'Visual Storytelling',
      description: 'Our in-house production studio captures high-definition product imagery, brand promo films, corporate headshots, and high-CTR video edits tailored for YouTube and social ad campaigns.',
      highlights: ['4K Studio & Drone Footage', 'AI Product Photography', 'High-CTR YouTube Editing', 'E-Commerce Catalog Shoots']
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven SEO & Organic Growth',
      badge: 'Rank #1 on Google',
      description: 'We execute comprehensive search engine optimization strategies, technical schema audits, keyword ranking roadmaps, and local Google Business Profile growth to drive qualified traffic.',
      highlights: ['Technical & On-Page SEO', 'Keyword Authority Audits', 'Local Map Pack SEO', 'Backlink & Content Strategy']
    },
    {
      icon: Sparkles,
      title: 'Brand Identity & AI Automations',
      badge: 'Future-Proof Tech',
      description: 'From vector logo design and brand voice guidelines to automated CRM pipelines, AI email dispatch, and Zapier workflows, we streamline operations and elevate brand positioning.',
      highlights: ['Bespoke Logo & Brand Kits', 'Zapier & CRM Workflows', 'AI Generative Content', 'Conversion Lead Capture']
    }
  ];

  const stats = [
    { value: '100+', label: 'Digital Projects Delivered', subtext: 'Global & regional brands' },
    { value: '99.8%', label: 'Client Satisfaction Rate', subtext: 'Based on post-launch reviews' },
    { value: '99/100', label: 'Average Speed Score', subtext: 'Google Core Web Vitals' },
    { value: '3 Months', label: 'Free Post-Launch Support', subtext: 'Included with every site' }
  ];

  const team = [
    {
      name: 'Creative & Tech Directors',
      role: 'Full-Stack & Brand Leadership',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      description: 'Combining over a decade of experience in software engineering, UI/UX architecture, and brand strategy to deliver exceptional digital experiences.'
    },
    {
      name: 'Media & Production Specialists',
      role: 'Photography, Video & Design',
      image: '/images/videography_gimbal_studio_1784958188066.jpg',
      description: 'Visual artists dedicated to capturing stunning 4K video, crisp product photography, and high-engagement social media visual assets.'
    },
    {
      name: 'Growth & Automation Engineers',
      role: 'SEO & Workflow Automation',
      image: '/images/ai_automation_visual_1784956611081.jpg',
      description: 'Data strategists focused on scaling search engine visibility, automating lead qualification, and engineering seamless CRM integrations.'
    }
  ];

  const faqs = [
    {
      question: 'What makes MakeMyPages different from standard web agencies?',
      answer: 'MakeMyPages is an all-in-one digital growth studio. Rather than forcing you to hire separate vendors for web development, photography, SEO, and social ads, we deliver an integrated, cohesive brand asset. Plus, every website includes 3 months of free maintenance, a 99+ speed guarantee, and complete CMS content ownership.'
    },
    {
      question: 'Do you specialize in CMS platforms like WordPress, Webflow, and Shopify?',
      answer: 'Yes! We build and customize CMS websites across WordPress, Webflow, Shopify, and custom React frameworks. We provide easy-to-use drag-and-drop admin dashboards so you can easily update text, products, blogs, and images without writing a single line of code.'
    },
    {
      question: 'What is included in the 3 months of free post-launch support?',
      answer: 'Our complimentary 3-month support package covers security patches, content updates, CMS plugin maintenance, regular database backups, uptime monitoring, and direct developer assistance on WhatsApp or email.'
    },
    {
      question: 'Can you handle local photography and videography for our products or brand?',
      answer: 'Absolutely. We offer full studio and on-location commercial photography, 4K video production, reel editing, and AI-powered product photography tailored for e-commerce storefronts.'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-bg">
      <SEO 
        title="About Us - Digital Agency, Web Development, SEO & Media Studio India" 
        description="Learn about MakeMyPages: India's premier digital growth agency specializing in CMS websites, commercial photography, 4K videography, SEO optimization & AI automations."
        keywords={[
          'About MakeMyPages', 
          'Digital Agency India', 
          'CMS Web Development Agency India', 
          'Photography and Videography Studio', 
          'SEO and Digital Growth Agency India', 
          'WordPress Webflow Shopify Experts India', 
          'AI Automation Studio'
        ]}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/about' }
        ]}
        faqItems={faqs}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-8 pb-20 border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              <Globe size={14} /> ABOUT MAKEMYPAGES AGENCY
            </span>

            <h1 className="text-4xl md:text-6xl font-display font-black text-brand-text tracking-tight leading-tight">
              Architecting <span className="text-brand-primary">Digital Assets</span> That Drive Growth & Authority
            </h1>

            <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed">
              MakeMyPages is a full-service digital growth agency. We bridge the gap between high-converting CMS web engineering, cinematic visual media, data-driven SEO rankings, and intelligent AI automations.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919709143253"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-brand-hover transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Talk With Our Team</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#pillars"
                className="bg-brand-bg text-brand-text px-7 py-3.5 rounded-full font-bold text-sm border border-brand-border hover:bg-white transition-all inline-flex items-center gap-2"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-primary/5 blur-3xl rounded-full pointer-events-none" />
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-brand-bg border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((st, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm text-center space-y-1 hover:border-brand-primary/30 transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-brand-primary font-display">
                    {st.value}
                  </div>
                  <div className="text-sm font-bold text-brand-text">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-brand-text-secondary">
                    {st.subtext}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Agency Narrative */}
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-premium group">
                <img 
                  src="/images/cms_website_dev_showcase_1784958542497.jpg" 
                  alt="MakeMyPages Digital Web Agency Studio" 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">100% Transparency & Speed Guarantee</h4>
                      <p className="text-xs text-slate-600">Sub-second loading times & seamless CMS editor handoff.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary">
                OUR MISSION & PHILOSOPHY
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-black text-brand-text leading-tight">
                Empowering Businesses With <span className="text-brand-primary">Full-Spectrum Digital Mastery</span>
              </h2>

              <p className="text-sm md:text-base text-brand-text-secondary leading-relaxed">
                Most agencies give you piece-meal solutions—a web designer who doesn’t understand SEO, or a videographer who doesn’t optimize for high-CTR conversions. At MakeMyPages, we took a radically different approach.
              </p>

              <p className="text-sm md:text-base text-brand-text-secondary leading-relaxed">
                We unified <strong>CMS Web Engineering</strong>, <strong>Commercial Photography & 4K Video</strong>, <strong>Search Engine Optimization</strong>, and <strong>Automated Workflows</strong> into a single agile studio. Whether you need a brand new website, a complete UI/UX overhaul, Google #1 organic rankings, or high-impact social video ads, we handle every detail with elite craftsmanship.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Custom Drag-and-Drop CMS Control (WordPress, Webflow, Shopify, React)',
                  'In-House Professional Photography & 4K Commercial Video Editing',
                  'Comprehensive On-Page SEO, Keyword Audits & Local Search Dominance',
                  '3 Months Complimentary Developer Support & Care Included'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-brand-text">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Pillars of Service */}
      <section id="pillars" className="py-20 bg-brand-bg border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Capabilities & Expertise</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-text">
              Four Core Pillars Of Our Agency
            </h2>
            <p className="text-sm text-brand-text-secondary">
              Everything your business requires to launch, scale, and outperform competitors online.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm hover:shadow-md transition-all space-y-6 h-full flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Icon size={24} />
                        </div>
                        <span className="text-[10px] uppercase font-mono font-bold bg-brand-bg px-3 py-1 rounded-full text-brand-text-secondary border border-brand-border">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-brand-text group-hover:text-brand-primary transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-bg grid grid-cols-2 gap-2">
                      {pillar.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-brand-text">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">The People Behind The Agency</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-text">
              Meet Our Specialist Team
            </h2>
            <p className="text-sm text-brand-text-secondary">
              A passionate collective of web architects, filmmakers, SEO strategists, and designers.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-brand-bg border border-brand-border rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase font-mono bg-brand-primary text-white px-2.5 py-1 rounded">
                      {member.role}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold font-display text-brand-text">
                      {member.name}
                    </h3>
                    <p className="text-xs text-brand-text-secondary leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="py-20 bg-brand-bg border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <FadeIn className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-brand-text">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-brand-text-secondary">
              Learn more about working with MakeMyPages digital studio.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-brand-border space-y-2 shadow-sm">
                  <h3 className="text-base font-bold text-brand-text flex items-center gap-2">
                    <MessageSquare size={18} className="text-brand-primary shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="bg-gradient-to-br from-brand-primary via-indigo-600 to-slate-900 rounded-3xl p-8 md:p-14 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/20 text-white backdrop-blur">
                GET A FREE CONSULTATION
              </span>

              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-tight">
                Ready To Build Your Next Big Digital Asset?
              </h2>

              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Partner with MakeMyPages for custom CMS web development, professional photography & videography, SEO rankings, and AI workflow automations.
              </p>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/919709143253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-primary px-8 py-4 rounded-full font-extrabold text-sm hover:bg-slate-100 transition-all shadow-lg inline-flex items-center gap-2"
                >
                  <span>WhatsApp +91 9709143253</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="mailto:hello@makemypages.in"
                  className="bg-white/10 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  <span>Email hello@makemypages.in</span>
                </a>
              </div>
            </div>

            {/* Decorative background overlay */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
