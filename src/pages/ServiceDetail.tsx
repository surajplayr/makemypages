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
  ArrowRight,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  Check,
  Share2,
  Plus,
  Minus,
  HelpCircle,
  TrendingUp,
  Camera,
  Video,
  Sparkles,
  Maximize2,
  Award,
  ShieldCheck,
  Zap,
  Clock,
  Home,
  ExternalLink
} from 'lucide-react';

// Hero background image router for photorealistic industry photography
const getHeroBgImage = (slug: string) => {
  switch (slug) {
    case 'website-development':
      return '/images/web_dev_workspace_1785949121199.jpg';
    case 'website-redesign':
      return 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1920&q=80';
    case 'seo-optimization':
      return '/images/seo_analytics_hero_1785949140799.jpg';
    case 'ecommerce-solutions':
      return '/images/ecommerce_visual_1784956578620.jpg';
    case 'social-media-marketing':
    case 'social-media-management':
    case 'youtube-management-support':
      return '/images/social_youtube_dashboard_1784958773445.jpg';
    case 'photography-videography':
      return '/images/studio_camera_lighting_1784958171859.jpg';
    case 'ai-product-photography':
      return '/images/studio_camera_lighting_1784958171859.jpg';
    case 'graphic-design':
      return '/images/brand_identity_design_1784958760146.jpg';
    case 'content-writing':
      return '/images/content_writing_hero_1785949155818.jpg';
    case 'influencer-marketing':
      return '/images/influencer_creator_studio_1785948181073.jpg';
    case 'google-ads-management':
      return '/images/google_ads_dashboard_1785948808522.jpg';
    case 'meta-ads-management':
      return '/images/meta_ads_dashboard_1785948827578.jpg';
    case 'google-business-profile-management':
      return '/images/google_business_profile_1785948845822.jpg';
    case 'legal-services':
      return 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1920&q=80';
    case 'hosting-maintenance':
      return 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80';
    default:
      return '/images/web_dev_workspace_1785949121199.jpg';
  }
};
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

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
    case 'influencer-marketing':
      return [
        {
          question: "What is Influencer Marketing and how can it grow my brand?",
          answer: "Influencer marketing connects your business with trusted social media creators on Instagram, YouTube, and Facebook who already have active engagement with your target buyers. By partnering with authentic influencers, your brand gains instant social proof, brand awareness, and measurable referral sales."
        },
        {
          question: "How do you select and vet influencers for our campaign?",
          answer: "We conduct in-depth audience analytics verifying engagement rates, audience demographics, authentic follower ratios, and brand alignment. We work with Nano, Micro, Macro, and Celebrity influencers across India to maximize ROI for your specific campaign budget."
        },
        {
          question: "What social media platforms do you cover for influencer campaigns?",
          answer: "We manage end-to-end influencer campaigns across Instagram (Reels, Stories, Posts), YouTube (Dedicated Reviews, Shorts, Integrations), Facebook, and emerging regional video platforms."
        },
        {
          question: "How do you track and measure the ROI of our influencer marketing campaigns?",
          answer: "We monitor live campaign metrics including reach, impressions, engagement rates, click-through rates (CTR), trackable promo code sales, website referral traffic, and direct lead conversions through comprehensive bi-weekly and monthly reports."
        },
        {
          question: "Can small businesses or startups with a ₹10,000/month budget benefit?",
          answer: "Yes! Our Starter Campaign package starts at ₹10,000/month, focusing on high-converting Nano and Micro-influencers who offer hyper-targeted local reach and authentic product reviews at cost-effective rates."
        }
      ];
    case 'google-ads-management':
      return [
        {
          question: "How quickly can Google Ads start generating leads for my business?",
          answer: "Google Ads can begin generating traffic and leads almost immediately once your campaign and conversion tracking are live. Usually within 24 to 48 hours of launch, your ads appear for high-intent search queries."
        },
        {
          question: "What is included in your ₹8,000/month Google Ads Management package?",
          answer: "Our Starter package includes complete campaign setup (Search/Local), keyword research, negative keyword list, compelling ad copywriting, conversion tracking integration, bid optimization, and transparent monthly performance reporting."
        },
        {
          question: "Do you manage ad spend directly or do we pay Google separately?",
          answer: "You pay your ad spend directly to Google using your credit card/account for complete transparency, while our management fee covers our strategy, setup, copywriting, and continuous campaign optimization."
        },
        {
          question: "Which Google Ad campaign types do you handle?",
          answer: "We manage Google Search Ads, Display Network Ads, Google Shopping Ads, Performance Max (PMax) campaigns, Local Map Ads, and YouTube Video Ads tailored to your budget."
        },
        {
          question: "How do you track conversions and ROI from Google Ads?",
          answer: "We set up Google Analytics 4 (GA4) and Google Tag Manager (GTM) to track form submissions, WhatsApp clicks, direct phone calls, and e-commerce purchases in real time."
        }
      ];
    case 'meta-ads-management':
      return [
        {
          question: "What is Meta Ads Management and how does it help my business?",
          answer: "Meta Ads Management involves creating and running targeted advertising campaigns across Facebook and Instagram. It helps your business reach specific customer demographics, generate qualified lead forms, and drive direct online sales."
        },
        {
          question: "What is the starting price for Meta Ads Management with MakeMyPages?",
          answer: "Our Meta Ads Management services start from ₹8,000/month, which includes campaign setup, custom audience research, ad creative copy, lead form integration, and monthly ROI reports."
        },
        {
          question: "Can you create Instagram Reels and visual ad graphics for us?",
          answer: "Yes! Our creative team designs high-converting static visual ads, carousel graphics, and edited Instagram Reels video formats designed specifically to stop the scroll and drive conversions."
        },
        {
          question: "Do you handle retargeting campaigns for website visitors?",
          answer: "Absolutely. We install the Meta Pixel and Conversions API (CAPI) on your website to build custom retargeting funnels that re-engage past visitors and abandoned cart shoppers."
        },
        {
          question: "How do Meta Lead Ads work for B2B and service businesses?",
          answer: "Meta Instant Lead Forms allow prospective customers to submit their contact information directly inside Facebook or Instagram with pre-filled details, producing high submission rates and instant CRM leads."
        }
      ];
    case 'google-business-profile-management':
      return [
        {
          question: "Why is Google Business Profile Management essential for local SEO?",
          answer: "Optimizing and managing your Google Business Profile (GBP) helps your business rank in the Google Maps '3-Pack' when customers search for local services nearby, driving phone calls, map directions, and website visits."
        },
        {
          question: "What is included in your ₹5,000/month Google Business Profile plan?",
          answer: "Our ₹5,000/month plan includes full profile optimization, category tuning, 4 weekly promotional Google Posts, review monitoring & responses, photo updates, and monthly local call & ranking reports."
        },
        {
          question: "How long does it take to see rankings improve on Google Maps?",
          answer: "Initial local profile optimizations and citation updates usually show ranking improvements and increased phone call activity within 2 to 4 weeks of consistent management."
        },
        {
          question: "Do you handle negative or fake Google reviews?",
          answer: "We monitor your reviews daily, draft professional customer responses, and report/flag policy-violating or fake reviews directly to Google Support for removal."
        },
        {
          question: "Can you manage Google Business Profiles for multiple locations?",
          answer: "Yes! We offer multi-location local SEO packages for franchises, healthcare chains, and multi-branch businesses with centralized reporting and bulk citation sync."
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
  const [activeModalImage, setActiveModalImage] = useState<{ title: string; image: string; desc: string } | null>(null);

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
  const pageFaqs = [...getServiceSpecificFaqs(service.slug, service.title), ...commonFaqs];

  return (
    <div className="pt-16">
      <SEO 
        title={`${service.title} Services India`} 
        description={`${service.shortDescription} Premier ${service.title} services by MakeMyPages in India. 100% responsive, fast loading, and conversion focused.`}
        image={service.visualImage}
        keywords={[service.title, ...service.features, 'MakeMyPages India', `${service.title} Agency`]}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/#services' },
          { name: service.title, item: `/services/${service.slug}` }
        ]}
        serviceName={service.title}
        serviceType={service.visualBadge || service.title}
        price={service.pricing?.[0]?.price ? service.pricing[0].price.replace(/[^0-9]/g, '') : '10000'}
        faqItems={pageFaqs}
      />
      {/* Redesigned Premium Photorealistic Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[680px] bg-slate-950 text-white overflow-hidden flex items-center py-16 lg:py-24 border-b border-slate-800">
        {/* Full-Width Realistic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={getHeroBgImage(service.slug)} 
            alt={`${service.title} - MakeMyPages Agency Visual Workspace`}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Dark Overlay (45-50% gradient mask for 100% WCAG contrast) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={14} className="text-brand-primary" />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-500" />
            <Link to="/#services" className="hover:text-white transition-colors">
              <span>Services</span>
            </Link>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-brand-primary font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Title, Badges, Copy, CTAs & Trust Badges */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/40 rounded-xl flex items-center justify-center text-brand-primary shadow-lg">
                    <Icon size={24} />
                  </div>
                  {service.startingPrice && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold backdrop-blur-md shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{service.startingPrice}</span>
                    </span>
                  )}
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-200 px-3 py-1 rounded-full border border-white/15">
                    {service.visualBadge || 'Verified Agency Service'}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mt-4 font-normal">
                  {service.fullDescription}
                </p>

                {/* CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a 
                    href={`https://wa.me/919709143253?text=${encodeURIComponent(`Hi MakeMyPages team, I would like to get a free consultation for ${service.title}.`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-primary text-white hover:bg-brand-hover px-7 py-4 rounded-xl font-bold text-sm shadow-xl shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                  >
                    <MessageSquare size={18} />
                    <span>Get Free Consultation</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <Link 
                    to="/#portfolio" 
                    className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-7 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md active:scale-[0.98]"
                  >
                    <span>View Portfolio</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-8 border-t border-slate-800/80 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2.5">
                    <Award className="text-amber-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-xs font-extrabold text-white leading-tight">100+ Projects</p>
                      <p className="text-[10px] text-slate-400">Delivered in India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="text-emerald-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-xs font-extrabold text-white leading-tight">Expert Team</p>
                      <p className="text-[10px] text-slate-400">In-House Pros</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Zap className="text-sky-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-xs font-extrabold text-white leading-tight">Affordable</p>
                      <p className="text-[10px] text-slate-400">Zero Hidden Costs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="text-purple-400 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-xs font-extrabold text-white leading-tight">Fast Delivery</p>
                      <p className="text-[10px] text-slate-400">Strict Milestones</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Interactive Service Visualizer */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-5 shadow-2xl backdrop-blur-md space-y-6">
                  <ServiceVisualizer slug={service.slug} title={service.title} />

                  <div className="border-t border-slate-800 pt-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                      <span>Core Deliverables</span>
                      <span className="text-emerald-400">{service.features.length} Features Included</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800 text-xs text-slate-200">
                          <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="font-medium leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
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

      {/* Studio Photography & Videography Showcase Gallery */}
      {service.studioGallery && service.studioGallery.length > 0 && (
        <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/20 px-4 py-2 rounded-full inline-flex items-center gap-1.5 mb-3 border border-brand-primary/30">
                    <Camera size={14} /> Production Studio Showcase
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    Studio Photography & Videography Samples
                  </h2>
                  <p className="text-slate-400 mt-2 text-sm max-w-xl">
                    Explore real production gear, camera setups, studio lighting, and post-production outputs crafted by our team.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700">
                  <Sparkles size={16} className="text-brand-primary" />
                  <span>4K Cinema Sensors & Softbox Lighting Equipment</span>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.studioGallery.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg group flex flex-col justify-between cursor-pointer"
                    onClick={() => setActiveModalImage({ title: item.title, image: item.image, desc: item.description })}
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                        
                        {/* Category Badge */}
                        <span className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                          {item.category}
                        </span>

                        {/* Zoom Icon Button */}
                        <button className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-primary">
                          <Maximize2 size={16} />
                        </button>
                      </div>

                      {/* Content Details */}
                      <div className="p-5">
                        <h3 className="font-bold text-base text-white mb-2 group-hover:text-brand-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-4 pt-2 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 font-mono text-emerald-400">
                        ✓ Studio Standard
                      </span>
                      <span className="text-brand-primary font-semibold hover:underline">Click to Expand</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Lightbox Modal for Studio Images */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img 
                src={activeModalImage.image} 
                alt={activeModalImage.title} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold hover:bg-brand-primary transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-6 bg-slate-900 text-white">
              <h3 className="text-xl font-bold mb-2">{activeModalImage.title}</h3>
              <p className="text-sm text-slate-300">{activeModalImage.desc}</p>
            </div>
          </div>
        </div>
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

                 {/* Frequently Asked Questions */}
                 <div className="pt-8 border-t border-brand-border">
                    <div className="flex items-center gap-3 mb-8">
                       <HelpCircle className="text-brand-primary" size={28} />
                       <h2 className="text-3xl font-display font-bold">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                       {pageFaqs.map((faq, idx) => {
                          const isOpen = openFaqIndex === idx;
                          return (
                             <div 
                                key={idx} 
                                className="border border-brand-border rounded-2xl bg-white overflow-hidden transition-all duration-200"
                             >
                                <button
                                   onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                   className="w-full text-left p-6 font-bold text-lg text-brand-text flex items-center justify-between gap-4 hover:text-brand-primary transition-colors"
                                >
                                   <span>{faq.question}</span>
                                   <div className="p-1.5 rounded-full bg-brand-bg text-brand-text shrink-0">
                                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                   </div>
                                </button>
                                {isOpen && (
                                   <div className="px-6 pb-6 text-brand-text-secondary leading-relaxed text-sm border-t border-brand-bg pt-4">
                                      {faq.answer}
                                   </div>
                                )}
                             </div>
                          );
                       })}
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

                    {/* Internal Links: Related Growth Services */}
                    <div className="bg-white p-8 rounded-[2rem] border border-brand-border shadow-sm space-y-4">
                       <h4 className="font-bold text-brand-text text-base flex items-center gap-2">
                         <TrendingUp size={18} className="text-brand-primary" />
                         Related Digital Services
                       </h4>
                       <ul className="space-y-2 text-xs text-brand-text-secondary font-medium">
                         <li>
                           <Link to="/services/influencer-marketing" className="hover:text-brand-primary transition-colors flex items-center justify-between group py-1 border-b border-slate-100">
                             <span>Influencer Marketing</span>
                             <ChevronRight size={14} className="text-slate-400 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all" />
                           </Link>
                         </li>
                         <li>
                           <Link to="/services/social-media-marketing" className="hover:text-brand-primary transition-colors flex items-center justify-between group py-1 border-b border-slate-100">
                             <span>Social Media Marketing</span>
                             <ChevronRight size={14} className="text-slate-400 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all" />
                           </Link>
                         </li>
                         <li>
                           <Link to="/services/seo-optimization" className="hover:text-brand-primary transition-colors flex items-center justify-between group py-1 border-b border-slate-100">
                             <span>SEO & Ranking Optimization</span>
                             <ChevronRight size={14} className="text-slate-400 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all" />
                           </Link>
                         </li>
                         <li>
                           <Link to="/services/website-development" className="hover:text-brand-primary transition-colors flex items-center justify-between group py-1 border-b border-slate-100">
                             <span>CMS Website Development</span>
                             <ChevronRight size={14} className="text-slate-400 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all" />
                           </Link>
                         </li>
                         <li>
                           <Link to="/services/ai-content-creation" className="hover:text-brand-primary transition-colors flex items-center justify-between group py-1">
                             <span>AI Content & Copywriting</span>
                             <ChevronRight size={14} className="text-slate-400 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all" />
                           </Link>
                         </li>
                       </ul>
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

      {/* Core & Related Services Internal Links */}
      <section className="py-20 bg-brand-bg border-t border-brand-border">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-4 py-2 rounded-full inline-block mb-4">
              INTERNAL SERVICE NETWORK
            </span>
            <h2 className="text-3xl font-display font-extrabold text-brand-text mb-4">Explore Our Core Growth & Development Services</h2>
            <p className="text-brand-text-secondary max-w-2xl mx-auto mb-10 text-sm">
              Combine your campaign with our top-rated website development, search engine optimization (SEO), and digital marketing services for maximum ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               {[
                 { slug: 'website-development', title: 'Website Development' },
                 { slug: 'seo-optimization', title: 'SEO Optimization' },
                 { slug: 'social-media-marketing', title: 'Digital & Social Marketing' },
                 { slug: 'google-ads-management', title: 'Google Ads Management' },
                 { slug: 'meta-ads-management', title: 'Meta Ads Management' },
                 { slug: 'google-business-profile-management', title: 'Google Business Profile' },
                 ...servicesData.filter(s => 
                   s.slug !== slug && 
                   !['website-development', 'seo-optimization', 'social-media-marketing', 'google-ads-management', 'meta-ads-management', 'google-business-profile-management'].includes(s.slug)
                 )
               ].filter(s => s.slug !== slug).slice(0, 8).map(other => {
                 const matched = servicesData.find(item => item.slug === other.slug);
                 const OtherIcon = matched?.icon || CheckCircle2;
                 return (
                   <Link 
                     key={other.slug} 
                     to={`/services/${other.slug}`}
                     className="bg-white px-5 py-3.5 rounded-xl border border-brand-border flex items-center hover:border-brand-primary hover:shadow-premium hover:-translate-y-0.5 transition-all group"
                   >
                     <OtherIcon size={18} className="mr-2.5 text-brand-primary" />
                     <span className="font-bold text-sm text-brand-text group-hover:text-brand-primary transition-colors">{other.title}</span>
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
