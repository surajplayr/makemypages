import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../data/services';
import { FadeIn, SectionHeading } from '../components/UI';
import { ServiceVisualizer } from '../components/ServiceVisualizer';
import { 
  CheckCircle2, 
  ChevronRight, 
  MessageSquare, 
  ArrowLeft,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  Check,
  Share2,
  Plus,
  Minus,
  HelpCircle
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Common website creation & after-support FAQ items
const commonFaqs = [
  {
    question: "Do you specialize in CMS website creation?",
    answer: "Yes, we specialize in professional CMS websites using platforms like WordPress, Webflow, and Shopify, in addition to our hand-coded high-performance custom React/Next.js builds."
  },
  {
    question: "What kind of support is provided after the website goes live?",
    answer: "We provide 3 months of free post-launch support with every website creation project. This ensures you are fully covered for technical bugs, general performance tweaks, CMS updates, and minor text/image adjustments during your initial launch phase."
  },
  {
    question: "Will my website be search engine optimized (SEO) and mobile-responsive?",
    answer: "Absolutely! Every site we build is strictly mobile-first responsive and technically structured for fast performance, which is exactly what Google ranks highly."
  },
  {
     question: "How do we get started with a new service?",
     answer: "Simply reach out via our 'Discuss Your Project' WhatsApp connection (+91 9709143253), call us directly, or fill out our contact section. We'll set up an initial consultation and map out your requirements."
  }
];

// Service-specific FAQ helper
const getServiceSpecificFaqs = (slug: string, title: string) => {
  switch (slug) {
    case 'website-development':
      return [
        {
          question: `What technologies do you use for ${title}?`,
          answer: "We specialize in CMS websites (WordPress, Webflow, Shopify) as well as modern custom systems utilizing React, Next.js, and Tailwind CSS depending on your specific scale and performance needs."
        },
        {
          question: "Can you assist with migrating our existing domain to a new host?",
          answer: "Yes. We secure and handle complete migrations with zero index loss or downtime, transferring all your media assets, old URLs, database files, and domain configs perfectly."
        }
      ];
    case 'website-redesign':
      return [
        {
          question: "Will a Website Redesign affect our current search keyword ranks?",
          answer: "We plan redesigns with SEO integrity in mind. We map out 301 redirects, maintain optimal URL paths, speed up loading scores, and update underlying technical metadata so search engines reward your premium visual update."
        },
        {
          question: "How do we determine what parts of our website need to be modified?",
          answer: "We perform a thorough UX/UI audit to analyze user heatmaps, slow response metrics, navigation friction, and modern trend styling before starting any visual layout drafting."
        }
      ];
    case 'seo-optimization':
      return [
        {
          question: "How long does it take for SEO fixes to display organic traffic improvement?",
          answer: "Standard index updates from Google take around 4 to 8 weeks, while full competitive optimization trends yield solid visible momentum within 3 to 6 months."
        },
        {
          question: "Do you perform content strategy updates regularly?",
          answer: "Yes, our strategy audits identify fresh search volumes, competitor high-performing keywords, and target pages to steadily build authoritative organic traffic."
        }
      ];
    case 'ai-product-photography':
      return [
        {
          question: "What photos or source files do we need to trigger AI rendering?",
          answer: "You only need to supply basic, flat-lit product snapshots taken even with a smartphone. Our background masking models handle isolating the item and blending realistic custom shadows seamlessly."
        },
        {
          question: "How fast can we generate a massive batch of lifestyle images?",
          answer: "With our automated AI workflows, we can scale, process, and render hundreds of high-quality themed lifestyle graphics within 24 to 48 hours."
        }
      ];
    default:
      return [
        {
          question: `What makes your approach to ${title} standout?`,
          answer: "We merge clean analytics tracking with modern styling components. We ensure that our solutions map exactly to real conversion results rather than simple visual fillers."
        }
      ];
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // Default open first item

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-32 px-6">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-brand-text-secondary mb-8">The service you are looking for does not exist.</p>
        <Link to="/" className="text-brand-primary font-bold flex items-center">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-16">
      {/* Hero Header */}
      <section className="bg-brand-bg pt-8 pb-16 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/#services" className="text-brand-primary text-sm font-bold flex items-center mb-6 hover:translate-x-[-4px] transition-transform">
             <ArrowLeft size={16} className="mr-2" /> ALL SERVICES
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8">
                <Icon size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-text mb-6 tracking-tight leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-xl text-brand-text-secondary leading-relaxed max-w-xl">
                {service.fullDescription}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/919709143253" 
                  target="_blank" 
                  className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-primary/20 transition-all flex items-center"
                >
                  <MessageSquare size={20} className="mr-2" /> Discuss Your Project
                </a>
              </div>
            </FadeIn>
            
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <ServiceVisualizer slug={service.slug} title={service.title} />
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {service.features.map((feature, idx) => (
                   <FadeIn key={idx} delay={0.1 * idx}>
                     <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm h-full flex flex-col">
                        <CheckCircle2 size={24} className="text-brand-primary mb-4" />
                        <p className="font-bold text-brand-text leading-tight">{feature}</p>
                     </div>
                   </FadeIn>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {service.pricing && service.pricing.length > 0 && (
        <section className="py-20 bg-white border-b border-brand-border">
          <div className={`mx-auto px-6 ${service.pricing.length > 1 ? 'max-w-7xl' : 'max-w-4xl'}`}>
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full inline-block mb-4">
                  Transparent Investment
                </span>
                <h2 className="text-4xl font-display font-extrabold text-brand-text">
                  Pricing & All-Inclusive Packages
                </h2>
                <p className="text-brand-text-secondary mt-2 max-w-xl mx-auto">
                  Get high-performing premium results with standardized transparent rates and absolute zero hidden fees.
                </p>
              </div>

              <div className={`grid grid-cols-1 ${service.pricing.length > 1 ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-10`}>
                {service.pricing.map((pack, pkIdx) => {
                  const isMulti = service.pricing && service.pricing.length > 1;
                  return (
                    <motion.div 
                      key={pkIdx} 
                      whileHover={{ y: -10, scale: 1.012, rotate: pack.popular ? 0.4 : -0.4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className={`bg-[#fafafa] rounded-[2.5rem] border ${
                        pack.popular 
                          ? 'border-brand-primary/45 shadow-premium bg-gradient-to-b from-white to-[#fafafa]' 
                          : 'border-brand-border'
                      } p-8 md:p-12 shadow-sm relative overflow-hidden transition-colors duration-500 hover:shadow-premium hover:border-brand-primary/35 group/pricing flex flex-col justify-between`}
                    >
                      {/* Decorative subtle element */}
                      <div className="absolute top-0 right-0 w-34 h-34 bg-brand-primary/5 rounded-full blur-2xl group-hover/pricing:scale-150 transition-all duration-700"></div>
                      
                      {pack.popular && (
                        <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-bl-2xl shadow-sm">
                          Most Popular
                        </div>
                      )}

                      <div>
                        {/* Upper Header */}
                        <div className="pb-8 border-b border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                          <div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg ${
                              pack.popular 
                                ? 'text-brand-primary bg-brand-primary/10' 
                                : 'text-brand-text-secondary bg-brand-text/5'
                            }`}>
                              {pack.popular ? 'Recommended Solution' : 'Starter Solution'}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-text mt-3">{pack.packageName}</h3>
                          </div>
                          <div className="text-left sm:text-right flex-shrink-0 bg-white p-5 rounded-2xl border border-brand-border shadow-sm min-w-[170px] transition-all duration-300 hover:shadow-md hover:border-brand-primary/25 hover:-translate-y-1">
                            <p className="text-[10px] font-bold text-brand-text-secondary tracking-wider uppercase">Investment</p>
                            <p className="text-3xl sm:text-4xl font-extrabold text-brand-primary mt-0.5">{pack.price}</p>
                            <p className="text-[10px] text-brand-text-secondary mt-0.5 font-medium">All-inclusive payment</p>
                          </div>
                        </div>

                        {/* Mid Description */}
                        <p className="text-brand-text-secondary mt-6 text-sm leading-relaxed">
                          {pack.description}
                        </p>

                        {/* Layout split or stack based on count */}
                        <div className={`grid grid-cols-1 ${isMulti ? '' : 'md:grid-cols-2'} gap-8 md:gap-10 py-8`}>
                          <div>
                            <h4 className="text-sm font-bold text-brand-text mb-5">Package Includes</h4>
                            <ul className="space-y-3.5">
                              {pack.includes.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-text-secondary transition-all duration-200 hover:translate-x-1 hover:text-brand-text group/item">
                                  <Check className="text-green-600 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-120" size={15} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-sm font-bold text-brand-text mb-4">Delivery Timeline</h4>
                              <div className="bg-white p-4.5 rounded-xl border border-brand-border flex items-center gap-4 transition-all duration-300 hover:shadow-sm hover:border-brand-primary/20 hover:-translate-y-0.5">
                                <div className="bg-brand-primary/5 p-2.5 rounded-lg text-brand-primary flex-shrink-0">
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-[10px] text-brand-text-secondary font-medium uppercase tracking-wider">Estimated Turnaround</p>
                                  <p className="text-base font-bold text-brand-text mt-0.5">{pack.delivery}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-bold text-brand-text mb-3.5">Perfect For</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {pack.perfectFor.map((item, idx) => (
                                  <span key={idx} className="text-[11px] font-semibold px-3 py-1.5 bg-white text-brand-text-secondary border border-brand-border rounded-full transition-all duration-200 hover:bg-brand-primary/5 hover:border-brand-primary/20 hover:text-brand-primary hover:scale-[1.03] cursor-default">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {pack.footerNote && (
                              <div className="p-4.5 bg-white border border-brand-border rounded-xl transition-all duration-300 hover:border-brand-primary/10 hover:shadow-sm">
                                <p className="text-xs text-brand-text-secondary leading-relaxed italic whitespace-pre-line">
                                  {pack.footerNote}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* CTA Action Bar */}
                      <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                        <p className="text-xs text-brand-text-secondary max-w-sm">
                          Ready to launch? Reach out directly via WhatsApp to initiate setup, review parameters, or request customization.
                        </p>
                        <a 
                          href={`https://wa.me/919709143253?text=${encodeURIComponent(`Hi, I am interested in the ${pack.packageName} (${pack.price}) for ${service.title}. I'd love to discuss our project details!`)}`}
                          target="_blank"
                          className="bg-brand-primary text-white hover:bg-brand-hover px-6 py-3.5 rounded-xl text-xs font-bold flex items-center justify-center transition-all shadow-md group whitespace-nowrap active:scale-[0.98] w-full sm:w-auto"
                        >
                          Get This Package <ChevronRight size={14} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Benefits & Process */}
              <div className="lg:col-span-7 space-y-24">
                 <div>
                    <h2 className="text-3xl font-display font-bold mb-10">Why Choose This Service?</h2>
                    <div className="space-y-6">
                       {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-6 bg-brand-bg rounded-2xl border border-brand-border">
                             <div className="bg-white p-2 rounded-lg shadow-sm">
                                <ChevronRight size={20} className="text-brand-primary" />
                             </div>
                             <p className="text-brand-text-secondary leading-relaxed pt-1">
                                {benefit}
                             </p>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div>
                    <h2 className="text-3xl font-display font-bold mb-10">Our Workflow</h2>
                    <div className="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-border">
                       {service.process.map((step, idx) => (
                          <div key={idx} className="relative pl-12">
                             <div className="absolute left-0 top-0 w-10 h-10 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center z-10">
                                <span className="font-bold text-brand-primary text-sm">{idx + 1}</span>
                             </div>
                             <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                             <p className="text-brand-text-secondary leading-relaxed">{step.description}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Right Column: CTA Sidebar */}
              <div className="lg:col-span-5">
                 <div className="sticky top-32 space-y-8">
                    <div className="bg-brand-text text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                       <div className="relative z-10">
                          <h3 className="text-3xl font-display font-bold mb-6">Ready to scale your business?</h3>
                          <p className="text-white/70 mb-8 leading-relaxed">
                            Let's talk about how our {service.title.toLowerCase()} service can help you achieve your goals this year.
                          </p>
                          <a 
                            href="https://wa.me/919709143253" 
                            target="_blank"
                            className="w-full bg-white text-brand-text py-4 rounded-2xl font-bold hover:bg-brand-bg transition-colors flex items-center justify-center"
                          >
                            Get Started Now <ChevronRight size={20} className="ml-2" />
                          </a>
                       </div>
                       
                       {/* Abstract Background elements */}
                       <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl"></div>
                       <div className="absolute top-10 right-10 w-20 h-20 bg-brand-primary/30 rounded-full blur-2xl"></div>
                    </div>

                    <div className="bg-brand-primary/5 p-8 rounded-[2rem] border border-brand-primary/10">
                       <h4 className="font-bold mb-4">Questions?</h4>
                       <p className="text-brand-text-secondary text-sm mb-6">
                         Give us a call or chat with us on WhatsApp to learn more about our processes.
                       </p>
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-brand-primary">
                                <MessageSquare size={18} />
                             </div>
                             <span className="font-bold">+91 9709143253</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Premium Social Media Sharing Row */}
      <section className="pb-24 pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.2}>
            <div className="pt-10 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-xl font-display font-bold text-brand-text mb-1 flex items-center gap-2">
                  <Share2 size={20} className="text-brand-primary animate-pulse" /> Share this service
                </h4>
                <p className="text-sm text-brand-text-secondary">
                  Recommend our {service.title} capabilities to your professional network.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {/* LinkedIn */}
                <motion.a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-semibold hover:border-[#0077b5] hover:text-[#0077b5] hover:bg-[#0077b5]/5 transition-colors shadow-sm cursor-pointer"
                >
                  <Linkedin size={16} fill="currentColor" className="text-current" />
                  <span>LinkedIn</span>
                </motion.a>

                {/* Twitter / X */}
                <motion.a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`Check out their outstanding ${service.title} capabilities detailed on MakeMyPages:`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-semibold hover:border-black hover:text-black hover:bg-black/5 transition-colors shadow-sm cursor-pointer"
                >
                  <Twitter size={16} fill="currentColor" className="text-current" />
                  <span>Twitter</span>
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-semibold hover:border-[#1877f2] hover:text-[#1877f2] hover:bg-[#1877f2]/5 transition-colors shadow-sm cursor-pointer"
                >
                  <Facebook size={16} fill="currentColor" className="text-current" />
                  <span>Facebook</span>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this amazing service: ${service.title} by MakeMyPages - ${shareUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border bg-white text-sm font-semibold hover:border-[#25d366] hover:text-[#25d366] hover:bg-[#25d366]/5 transition-colors shadow-sm cursor-pointer"
                >
                  <MessageSquare size={16} className="text-current" />
                  <span>WhatsApp</span>
                </motion.a>

                {/* Copy Link */}
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl || window.location.href);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold cursor-pointer shadow-sm transition-all ${
                    copied
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-brand-primary bg-brand-primary/5 text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Link</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Accordion Section with JSON-LD SEO Schema */}
      <section className="py-24 border-t border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [...getServiceSpecificFaqs(service.slug, service.title), ...commonFaqs].map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left FAQ Info column */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full inline-block">
                FAQ & SUPPORT
              </span>
              <h2 className="text-4xl font-display font-extrabold text-brand-text leading-tight">
                Quick Answers & After-Support
              </h2>
              <p className="text-brand-text-secondary leading-relaxed">
                Learn more about our design pipelines, content updates, and post-launch guarantees. We build to help your brand grow sustainably.
              </p>

              {/* Highlight Card: 3 Months Support */}
              <div className="p-6 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 relative overflow-hidden group">
                <div className="absolute right-3 top-3 text-brand-primary/20 group-hover:scale-110 group-hover:text-brand-primary/30 transition-transform duration-300">
                  <HelpCircle size={48} />
                </div>
                <h4 className="font-bold text-brand-text mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary inline-block"></span>
                  3 Months Free Support
                </h4>
                <p className="text-xs text-brand-text-secondary leading-relaxed mb-4">
                  Our website creation service comes with 3 months of free post-launch support. This covers bug testing, performance checks, general CMS updates, and adjustments.
                </p>
                <a
                  href="https://wa.me/919709143253"
                  target="_blank"
                  className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
                >
                  Message support team <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Accordion column */}
            <div className="lg:col-span-8 space-y-4">
              {[...getServiceSpecificFaqs(service.slug, service.title), ...commonFaqs].map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-2xl p-6 transition-all duration-300 ${
                      isOpen
                        ? 'border-brand-primary/30 bg-brand-primary/[0.01] shadow-sm'
                        : 'border-brand-border bg-white hover:border-brand-text/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    >
                      <span className="font-bold text-brand-text pr-4 hover:text-brand-primary transition-colors duration-150">
                        {faq.question}
                      </span>
                      <span className={`p-1.5 rounded-lg border flex-shrink-0 transition-transform duration-300 ${
                        isOpen 
                          ? 'border-brand-primary/30 text-brand-primary bg-brand-primary/5 rotate-180' 
                          : 'border-brand-border text-brand-text-secondary'
                      }`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen 
                          ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-brand-border' 
                          : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-brand-text-secondary leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-brand-bg">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold mb-12">Other Services We Offer</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {servicesData.filter(s => s.slug !== slug).slice(0, 5).map(other => {
                 const OtherIcon = other.icon;
                 return (
                   <Link 
                     key={other.slug} 
                     to={`/services/${other.slug}`}
                     className="bg-white px-6 py-4 rounded-2xl border border-brand-border flex items-center hover:border-brand-primary hover:shadow-premium transition-all group"
                   >
                     <OtherIcon size={20} className="mr-3 text-brand-primary" />
                     <span className="font-bold text-brand-text group-hover:text-brand-primary transition-colors">{other.title}</span>
                   </Link>
                 );
               })}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
