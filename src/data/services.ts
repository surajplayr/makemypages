import { 
  Code, 
  Palette, 
  Search, 
  Tag, 
  ShoppingCart, 
  Share2, 
  Users, 
  Gavel, 
  Settings, 
  Cloud,
  Youtube,
  Video,
  Sparkles,
  Image,
  Brush,
  PenTool,
  LucideIcon
} from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  pricing?: {
    packageName: string;
    price: string;
    description: string;
    includes: string[];
    delivery: string;
    perfectFor: string[];
    footerNote?: string;
    popular?: boolean;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'website-development',
    icon: Code,
    title: 'Website Development',
    shortDescription: 'We specialize in CMS WEBSITES, along with custom high-performance applications.',
    fullDescription: 'We specialize in CMS WEBSITES as well as building high-performance, scalable web applications using the latest technologies. Our development process ensures your site is fast, secure, and provides an exceptional user experience on all devices.',
    features: [
      'CMS Website Specialization (WordPress, Webflow, Shopify)',
      'Custom React/Next.js Development',
      'Progressive Web Apps (PWA)',
      'API Integration & Development',
      'Responsive Mobile-First Architecture',
      'Performance Optimization'
    ],
    benefits: [
      'Blazing fast load times with optimized CMS setup',
      'Scalable architecture for future growth',
      'Improved SEO rankings through performance',
      'Secure and reliable code structure'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your goals and technical requirements.' },
      { title: 'Architecture', description: 'Planning the technical structure and data flow.' },
      { title: 'Development', description: 'Writing clean, efficient, and documented code.' },
      { title: 'Testing', description: 'Rigorous QA to ensure cross-browser compatibility.' }
    ],
    pricing: [
      {
        packageName: 'Business Website Package',
        price: '₹10,000',
        description: 'Launch your business online with a professionally designed website that builds credibility, attracts customers, and helps grow your brand. Perfect for startups, local businesses, consultants, and service providers looking for a modern digital presence.',
        includes: [
          'Up to 5 Custom Designed Pages',
          '1 Year FREE Domain & Hosting Included',
          'Fully Mobile Responsive Design',
          'WordPress CMS Setup',
          'Easy-to-Manage Website Dashboard',
          'Contact Form & WhatsApp Integration',
          'Social Media Integration',
          'Basic SEO Optimization',
          'Speed & Performance Optimization',
          'Google Maps Integration',
          'Security & Backup Setup',
          '2 Revision Rounds',
          '7 Days Post-Launch Support'
        ],
        delivery: '7–10 Business Days',
        perfectFor: [
          'Small Businesses',
          'Startups',
          'Consultants',
          'Coaches',
          'Agencies',
          'Local Service Providers'
        ],
        footerNote: 'Get a professional website that not only looks great but also helps your business establish trust, generate leads, and grow online.'
      },
      {
        packageName: 'Professional Business Website Package',
        price: '₹15,000',
        description: 'Take your online presence to the next level with a professionally designed website built for growth, credibility, and customer engagement. Ideal for growing businesses, agencies, consultants, healthcare providers, educational institutes, and service-based companies.',
        includes: [
          'Up to 10 Custom Designed Pages',
          '1 Year FREE Domain & Hosting Included',
          'Premium Responsive Design',
          'WordPress CMS Setup',
          'Easy Content Management System',
          'Contact Forms & WhatsApp Integration',
          'Social Media Integration',
          'Google Maps Integration',
          'Blog Setup',
          'Basic On-Page SEO Optimization',
          'Website Speed Optimization',
          'Security & Backup Configuration',
          'Image Optimization',
          'Lead Generation Forms',
          '3 Revision Rounds',
          'Website Training & Handover Guide',
          '15 Days Post-Launch Support'
        ],
        delivery: '10–15 Business Days',
        perfectFor: [
          'Growing Businesses',
          'Coaching Institutes',
          'Healthcare Clinics',
          'Real Estate Companies',
          'Agencies',
          'Corporate Websites',
          'Service Providers'
        ],
        footerNote: 'Why Choose This Package? A complete business website solution designed to showcase your services professionally, improve customer trust, generate leads, and provide an easy-to-manage platform that grows with your business.',
        popular: true
      }
    ]
  },
  {
    slug: 'website-redesign',
    icon: Palette,
    title: 'Website Redesign',
    shortDescription: 'Modern, minimal UI/UX revamps focused on user engagement and conversion.',
    fullDescription: 'Our design and redesign philosophy combines aesthetics with functionality. We modernize outdated interfaces, optimizing pages to tell your brand story and guide users toward conversion with absolute clarity.',
    features: [
      'Full Site UI/UX Audits',
      'Modern, Interactive Prototypes',
      'Responsive Mobile & Desktop Balancing',
      'Conversion Rate Optimization (CRO)',
      'Brand Alignment Refinements'
    ],
    benefits: [
      'Dramatically increased user engagement',
      'Higher conversion rates and less friction',
      'Polished, highly professional brand image',
      'Significantly reduced bounce rates'
    ],
    process: [
      { title: 'UI/UX Audit', description: 'Analyzing drop-off zones and outdated UI structures.' },
      { title: 'Wireframing', description: 'Mapping out a optimized, modern user journey.' },
      { title: 'Visual Redesign', description: 'Creating high-fidelity graphics and layouts.' },
      { title: 'Handoff & Build', description: 'Smooth design handoff to realize the revamped vision.' }
    ]
  },
  {
    slug: 'seo-optimization',
    icon: Search,
    title: 'SEO Optimization',
    shortDescription: 'Data-driven SEO strategies to boost your organic visibility and traffic.',
    fullDescription: 'Get found by the right audience. We employ advanced SEO techniques to improve your search engine rankings, drive qualified traffic, and ensure long-term organic growth.',
    features: [
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Content Strategy Development',
      'Local SEO Management'
    ],
    benefits: [
      'Higher ranking for key terms',
      'Sustainable organic traffic',
      'Better user experience',
      'measurable ROI through analytics'
    ],
    process: [
      { title: 'Audit', description: 'Comprehensive review of current performance.' },
      { title: 'Strategy', description: 'Defining target keywords and content gaps.' },
      { title: 'Execution', description: 'Implementing on-page and technical fixes.' },
      { title: 'Monitoring', description: 'Tracking progress and refining adjustments.' }
    ]
  },
  {
    slug: 'branding',
    icon: Tag,
    title: 'Branding',
    shortDescription: 'Comprehensive brand identities that resonate with your target audience.',
    fullDescription: 'We build brands that people remember. From logo design to brand voice development, we create a cohesive identity that effectively communicates your values and differentiates you from the competition.',
    features: [
      'Logo & Visual Identity Design',
      'Brand Voice & Strategy',
      'Style Guides & Brand Book',
      'Social Media Branding',
      'Marketing Asset Creation'
    ],
    benefits: [
      'Memorable market presence',
      'Consistent customer experience',
      'Increased brand equity',
      'Stronger emotional connection'
    ],
    process: [
      { title: 'Identity Exploration', description: 'Defining your brand DNA and values.' },
      { title: 'Visual Creation', description: 'Designing logos, palettes, and typography.' },
      { title: 'Refinement', description: 'Iterating based on feedback and market fit.' },
      { title: 'Asset Rollout', description: 'Finalizing all brand touchpoints.' }
    ],
    pricing: [
      {
        packageName: 'Personal Branding Package',
        price: '₹20,000',
        description: 'Stand out in your industry. This high-impact branding suite establishes you as an authority and makes you memorable.',
        includes: [
          'Personal Portfolio Website',
          'LinkedIn Optimization',
          'Social Media Branding',
          'Professional Bio Writing',
          'About Page Copywriting',
          'Contact Setup',
          'SEO Setup',
          '30 Days Consultation'
        ],
        delivery: '14 Business Days',
        perfectFor: [
          'Coaches',
          'Consultants',
          'Influencers',
          'Doctors',
          'Real Estate Agents'
        ],
        footerNote: 'This is becoming very popular.',
        popular: true
      },
      {
        packageName: 'Social Media Growth Package',
        price: '₹8,000/month',
        description: 'Grow your digital footprint and engage your target audience with highly tailored, professional social media assets and insights.',
        includes: [
          '12 Posts Per Month',
          'Content Calendar',
          'Caption Writing',
          'Hashtag Research',
          'Profile Optimization',
          'Monthly Report'
        ],
        delivery: 'Ongoing Monthly Service',
        perfectFor: [
          'Small Businesses',
          'Local Brands',
          'Creators',
          'Personal Brands'
        ],
        footerNote: 'Keep your social media active and professional.'
      },
      {
        packageName: 'Complete Digital Presence Package',
        price: '₹50,000',
        description: 'The ultimate package to establish an unbeatable, cohesive online presence. We build, write, and optimize everything for you across websites, search, and social platforms.',
        includes: [
          'Professional Website',
          'Social Media Setup',
          'Personal Branding',
          'Content Writing',
          'Google Business Profile Setup',
          'YouTube Channel Optimization',
          'SEO Setup',
          '3 Months Support'
        ],
        delivery: '15–20 Business Days',
        perfectFor: [
          'Doctors',
          'Clinics',
          'Schools',
          'Coaching Centers',
          'Real Estate Companies',
          'Local Brands'
        ],
        footerNote: 'This is the package we recommend and push the hardest for maximum digital growth.'
      }
    ]
  },
  {
    slug: 'ecommerce-solutions',
    icon: ShoppingCart,
    title: 'Affordable Ecommerce Solutions for You',
    shortDescription: 'Affordable, fully CMS-driven online stores with unlimited products and easy-to-manage dashboards.',
    fullDescription: 'Launch your digital storefront with our affordable, high-converting ecommerce solutions. Built on leading platforms like Shopify, WooCommerce, and Webflow, our systems are complete CMS-driven, enabling you to add unlimited products, process transactions securely, and enjoy an easy-to-manage administrator backend with absolutely zero coding required.',
    features: [
      'CMS-Driven Storefronts (Shopify, WooCommerce, Webflow)',
      'Unlimited Product & Multi-category Support',
      'Easy-to-Manage Control Panels',
      'Secure Payment Gateway Integrations (Stripe, PayPal, UPI)',
      'Automated Order Notifications & Receipts',
      'Optimized Mini-cart & Fast Checkout UX'
    ],
    benefits: [
      'Extremely affordable initial setup and upkeep costs',
      'CMS-driven setups make updates effortless',
      'No caps or hidden fees on hosting unlimited products',
      'Highly secure transactions protecting customer details'
    ],
    process: [
      { title: 'Store Planning', description: 'Choosing the right CMS platform tailored to your budget.' },
      { title: 'Catalog Setup', description: 'Structuring your products, categories, variants, and configurations.' },
      { title: 'Visual Theme', description: 'Creating clean custom product layout pages styled for conversions.' },
      { title: 'Checkout & Launch', description: 'Simulating payments, verifying tax receipts, and launching live.' }
    ],
    pricing: [
      {
        packageName: 'Professional E-Commerce Business Website',
        price: '₹30,000',
        description: 'Build a powerful online store designed to showcase your products, streamline order management, and maximize sales. Perfect for businesses looking to sell products online with a professional, secure, and scalable e-commerce solution.',
        includes: [
          'Up to 25 Custom Designed Pages',
          '1 Year FREE Domain & Hosting Included',
          'Premium Custom Store Design',
          'Fully Mobile Responsive Design',
          'WordPress + WooCommerce Setup',
          'Product Catalog Setup',
          'Up to 100 Products Upload',
          'Category & Inventory Management',
          'Secure Payment Gateway Integration (Razorpay, Stripe, PayPal, etc.)',
          'Shopping Cart & Checkout System',
          'Customer Account Registration',
          'Order Management Dashboard',
          'Coupon & Discount System',
          'Shipping & Tax Configuration',
          'WhatsApp Integration',
          'Social Media Integration',
          'Blog Setup',
          'Advanced Contact Forms',
          'Basic On-Page SEO Setup',
          'Website Speed Optimization',
          'Security & Backup Setup',
          'Google Analytics Integration',
          'Google Search Console Setup',
          '3 Revision Rounds',
          'Website Training & Handover Guide',
          '30 Days Post-Launch Support'
        ],
        delivery: '15–25 Business Days',
        perfectFor: [
          'Fashion Stores',
          'Electronics Stores',
          'Beauty & Cosmetic Brands',
          'Grocery Stores',
          'Home Decor Businesses',
          'Health & Wellness Brands',
          'Multi-Product Online Stores'
        ],
        footerNote: 'Why Choose This Package?\nLaunch a professional online store with everything needed to sell products, manage orders, accept secure payments, and scale your business. Built on a user-friendly CMS, allowing you to easily manage products, inventory, customers, and content without technical expertise.\n\n🎁 Bonus Included:\n• Store Management Training\n• Basic SEO Setup\n• Product Upload Assistance\n• Website Backup Configuration\n• 30 Days Free Technical Support',
        popular: true
      }
    ]
  },
  {
    slug: 'social-media-marketing',
    icon: Share2,
    title: 'Social Media Marketing',
    shortDescription: 'Targeted campaigns designed to grow your brand across social channels.',
    fullDescription: 'We help you reach your audience where they hang out. Our social media marketing strategies are calculated to increase your reach, engagement, and direct sales through targeted content and ads.',
    features: [
      'Paid Social Ad Campaigns',
      'Audience Targeting & Growth',
      'Influencer Coordination',
      'Performance Reporting',
      'Campaign Creative Design'
    ],
    benefits: [
      'Expanded brand reach',
      'Higher engagement rates',
      'Direct conversion tracking',
      'Targeted demographic reach'
    ],
    process: [
      { title: 'Planning', description: 'Defining campaign goals and budget.' },
      { title: 'Creative', description: 'Designing high-impact social ads.' },
      { title: 'Execution', description: 'Launching and monitoring campaigns.' },
      { title: 'Optimization', description: 'A/B testing for maximum efficiency.' }
    ],
    pricing: [
      {
        packageName: 'Social Media Growth Package',
        price: '₹8,000/month',
        description: 'Grow your digital footprint and engage your target audience with highly tailored, professional social media assets and insights.',
        includes: [
          '12 Posts Per Month',
          'Content Calendar',
          'Caption Writing',
          'Hashtag Research',
          'Profile Optimization',
          'Monthly Report'
        ],
        delivery: 'Ongoing Monthly Service',
        perfectFor: [
          'Small Businesses',
          'Local Brands',
          'Creators',
          'Personal Brands'
        ],
        footerNote: 'Keep your social media active and professional.'
      },
      {
        packageName: 'Complete Digital Presence Package',
        price: '₹50,000',
        description: 'The ultimate package to establish an unbeatable, cohesive online presence. We build, write, and optimize everything for you across websites, search, and social platforms.',
        includes: [
          'Professional Website',
          'Social Media Setup',
          'Personal Branding',
          'Content Writing',
          'Google Business Profile Setup',
          'YouTube Channel Optimization',
          'SEO Setup',
          '3 Months Support'
        ],
        delivery: '15–20 Business Days',
        perfectFor: [
          'Doctors',
          'Clinics',
          'Schools',
          'Coaching Centers',
          'Real Estate Companies',
          'Local Brands'
        ],
        footerNote: 'This is the package we recommend and push the hardest for maximum digital growth.',
        popular: true
      }
    ]
  },
  {
    slug: 'social-media-management',
    icon: Users,
    title: 'Social Media Management',
    shortDescription: 'Full-service management including content creation and community engagement.',
    fullDescription: 'Your social presence, handled. We manage your accounts daily, creating engaging content and building a vibrant community around your brand while you focus on running your business.',
    features: [
      'Daily Content Scheduling',
      'Community Management',
      'Trend Monitoring',
      'Profile Optimization',
      'Content Calendar Creation'
    ],
    benefits: [
      'Consistent brand presence',
      'Improved customer loyalty',
      'Reduced management overhead',
      'Real-time brand engagement'
    ],
    process: [
      { title: 'Setup', description: 'Connecting accounts and auditing profiles.' },
      { title: 'Calendar', description: 'Planning upcoming posts and themes.' },
      { title: 'Activity', description: 'Posting and engaging with followers.' },
      { title: 'Review', description: 'Monthly report on growth and stats.' }
    ],
    pricing: [
      {
        packageName: 'Social Media Growth Package',
        price: '₹8,000/month',
        description: 'Grow your digital footprint and engage your target audience with highly tailored, professional social media assets and insights.',
        includes: [
          '12 Posts Per Month',
          'Content Calendar',
          'Caption Writing',
          'Hashtag Research',
          'Profile Optimization',
          'Monthly Report'
        ],
        delivery: 'Ongoing Monthly Service',
        perfectFor: [
          'Small Businesses',
          'Local Brands',
          'Creators',
          'Personal Brands'
        ],
        footerNote: 'Keep your social media active and professional.'
      },
      {
        packageName: 'Complete Digital Presence Package',
        price: '₹50,000',
        description: 'The ultimate package to establish an unbeatable, cohesive online presence. We build, write, and optimize everything for you across websites, search, and social platforms.',
        includes: [
          'Professional Website',
          'Social Media Setup',
          'Personal Branding',
          'Content Writing',
          'Google Business Profile Setup',
          'YouTube Channel Optimization',
          'SEO Setup',
          '3 Months Support'
        ],
        delivery: '15–20 Business Days',
        perfectFor: [
          'Doctors',
          'Clinics',
          'Schools',
          'Coaching Centers',
          'Real Estate Companies',
          'Local Brands'
        ],
        footerNote: 'This is the package we recommend and push the hardest for maximum digital growth.',
        popular: true
      }
    ]
  },
  {
    slug: 'legal-services',
    icon: Gavel,
    title: 'Legal Services',
    shortDescription: 'Essential legal documentation and compliance for digital businesses.',
    fullDescription: 'Protect your digital assets. We provide standard legal templates and guidance for Terms of Service, Privacy Policies, and GDPR compliance, ensuring your online operations are professionally shielded.',
    features: [
      'Terms of Service Drafting',
      'Privacy Policy Templates',
      'GDPR Compliance Audit',
      'Copyright Protection Tips',
      'Contract Templates'
    ],
    benefits: [
      'Legal peace of mind',
      'Professional trust badges',
      'Data protection compliance',
      'Asset security'
    ],
    process: [
      { title: 'Consultation', description: 'Identifying your legal requirements.' },
      { title: 'Drafting', description: 'Creating essential legal docs.' },
      { title: 'Review', description: 'Final check for compliance.' },
      { title: 'Implementation', description: 'Placing docs on your web platform.' }
    ]
  },
  {
    slug: 'business-automation',
    icon: Settings,
    title: 'Business Automation',
    shortDescription: 'Streamline your operations with custom workflows and tool integrations.',
    fullDescription: 'Save time by automating repetitive tasks. We integrate your favorite tools like Zapier, CRMs, and email marketing platforms to create efficient workflows that grow with your business.',
    features: [
      'Custom Workflow Automation',
      'CRM Integration',
      'Email Marketing Setup',
      'Data Syncing & Reporting',
      'Internal Tool Training'
    ],
    benefits: [
      'Dramatic time savings',
      'Eliminated manual errors',
      'Increased productivity',
      'Scalable processes'
    ],
    process: [
      { title: 'Analysis', description: 'Mapping your current manual tasks.' },
      { title: 'Integration', description: 'Connecting software and tools.' },
      { title: 'Testing', description: 'Ensuring workflows run smoothly.' },
      { title: 'Handover', description: 'Training your team on the new tools.' }
    ]
  },
  {
    slug: 'hosting-maintenance',
    icon: Cloud,
    title: 'Hosting & Maintenance',
    shortDescription: 'Reliable cloud hosting and 24/7 technical support.',
    fullDescription: 'We keep the lights on. Our premium hosting packages include regular backups, security patches, and 24/7 technical monitoring so your website stays up and running without interruption.',
    features: [
      'High-Performance Cloud Hosting',
      'SSL Certificate Management',
      'Daily Backups & Recovery',
      'Security Patching',
      'Uptime Monitoring'
    ],
    benefits: [
      'Guaranteed high uptime',
      'Daily site backups',
      'Zero maintenance stress',
      'Premium technical support'
    ],
    process: [
      { title: 'Migration', description: 'Moving your site to our servers.' },
      { title: 'Config', description: 'Setting up SSL and caching.' },
      { title: 'Backup', description: 'Establishing daily backup routines.' },
      { title: 'Support', description: 'Ongoing monitoring and updates.' }
    ]
  },
  {
    slug: 'youtube-management-support',
    icon: Youtube,
    title: 'YouTube Management & Support',
    shortDescription: 'Complete channel growth, optimized video SEO, custom design, and analytics support.',
    fullDescription: 'Expand your reach with professional YouTube management. From video optimization, metadata SEO, custom thumbnail designs to competitor insights and strategy, we ensure your channel stands out.',
    features: [
      'Video SEO & Upload Optimization',
      'Custom High-CTR Thumbnail Design',
      'Full Scriptwriting & Strategy Guidance',
      'Competitor & Audience Analytics',
      'Comment Moderation & Community Growth'
    ],
    benefits: [
      'Accelerate subscriber and viewer growth',
      'Higher Click-Through Rate (CTR) on videos',
      'Save dozens of production hours weekly',
      'Maximize monetization and sales potential'
    ],
    process: [
      { title: 'Channel Audit', description: 'Analyzing competitors and content gap discovery.' },
      { title: 'Design Layouts', description: 'Crafting custom template thumb styles and optimization checklists.' },
      { title: 'Targeted Uploads', description: 'Optimizing titles, descriptions, metadata tags, and end cards.' },
      { title: 'Performance Review', description: 'Monthly deep dive on stats and audience retention graphs.' }
    ],
    pricing: [
      {
        packageName: 'YouTube Growth Package',
        price: '₹10,000/month',
        description: 'Supercharge your video visibility, rank higher on search engines, and establish a high-impact content strategy that drives viewer retention and conversion.',
        includes: [
          'Channel Setup',
          'SEO Optimization',
          'Titles & Descriptions',
          'Thumbnail Guidance',
          'Content Strategy',
          'Analytics Review'
        ],
        delivery: 'Ongoing Monthly Service',
        perfectFor: [
          'Creators',
          'Brands & E-Commerce',
          'Coaches & Consultants',
          'Educators'
        ],
        footerNote: 'This package leverages real, battle-tested strategy and direct channel-scaling experience to optimize your channel for performance.',
        popular: true
      }
    ]
  },
  {
    slug: 'photography-videography',
    icon: Video,
    title: 'Photography & Videography',
    shortDescription: 'Stunning visual storytelling including brand shoots and professional video creation.',
    fullDescription: 'Bring your brand story and products to life through high-definition photography and sleek, highly-engaging videography tailored specifically for social channels, ads, and web usage.',
    features: [
      'High-Resolution Product Photography',
      'Corporate Events & Brand Headshots',
      'Cinematic Promotional Videos',
      'Social Media Ads Production (Reels/TikTok)',
      'Full Post-Production & Color Grading'
    ],
    benefits: [
      'Dramatically improve brand credibility',
      'Highly shareable social-first video assets',
      'Professional look across all digital mediums',
      'Increased customer trust and visual appeal'
    ],
    process: [
      { title: 'Concept Boarding', description: 'Brainstorming scenes, lighting styles, styles, and shots.' },
      { title: 'Production Day', description: 'Directing high-quality raw footage and photo captures.' },
      { title: 'Editing & Sound', description: 'Splicing clips, adding soundtracks, sound effects, and subtitles.' },
      { title: 'Final Polish', description: 'Color grading and rendering ready-for-web visual formats.' }
    ]
  },
  {
    slug: 'ai-content-creation',
    icon: Sparkles,
    title: 'AI Content Creation',
    shortDescription: 'Supercharge your content stream with advanced generative writing and visuals combined with expert editing.',
    fullDescription: 'Harness the efficiency of modern AI tools tuned by expert editors to write high-ranking blog posts, creative social copies, and compelling product guides at unprecedented speeds.',
    features: [
      'AI-Powered Long-Form Blog Articles',
      'Automated Social Media Copywriting',
      'AI Scriptwriting & Ad Copy Sequences',
      'Semantic Content Strategy Tuning',
      'Human-in-the-Loop Proofreading & Fact-Checking'
    ],
    benefits: [
      'Dramatically reduce content bottlenecks',
      'Consistently scale writing volumes',
      'Optimized for search engines (SEO)',
      'Maintain professional brand tone constraints'
    ],
    process: [
      { title: 'Voice Persona Setup', description: 'Training model directions on your exact style guidelines.' },
      { title: 'Batch Page Prompting', description: 'Creating specific prompts to render high-intent drafts.' },
      { title: 'Human Refinement', description: 'Fact-checking, stylistic edits, and SEO optimizing.' },
      { title: 'Scheduled distribution', description: 'Distributing clean articles across channels steadily.' }
    ]
  },
  {
    slug: 'ai-product-photography',
    icon: Image,
    title: 'AI Ecommerce Product Photography',
    shortDescription: 'Stunning, studio-grade product backdrops generated instantly using state-of-the-art AI.',
    fullDescription: 'Transform basic product shots into gorgeous lifestyle photos instantly. We leverage custom generative AI pipelines to place your items in premium studio environments, saving thousands in location costs.',
    features: [
      'Generative Studio Mockups & Contexts',
      'Basic Silhouette and Asset Masking',
      'Batch AI Lifestyle Generation',
      'High-Fidelity Rendering & Texture Matching',
      'Platform-Ready Compressed Outputs'
    ],
    benefits: [
      '90% cost savings compared to physical studios',
      'Instant variations for seasonal themes',
      'Drastically faster go-to-market speed',
      'High-converting studio-standard graphics'
    ],
    process: [
      { title: 'Basic Product Scans', description: 'Sourcing clean, flat-lit images of your product inventories.' },
      { title: 'Scene Prompting', description: 'Selecting beautiful context settings (e.g., marble desk, sunrise glow).' },
      { title: 'AI Generation', description: 'Creating realistic, shadowed variations using advanced rendering tools.' },
      { title: 'Final Optimization', description: 'Upscaling images and centering subjects to make websites load instantly.' }
    ]
  },
  {
    slug: 'graphic-design',
    icon: Brush,
    title: 'Graphic Design',
    shortDescription: 'Bespoke posters, social graphics, logos, and digital brand collaterals created from scratch.',
    fullDescription: 'Establish your visual dominance over your competition with high-end, custom graphic design. From crisp vector logos to highly specific marketing materials, posters, and pitch decks, we design beautiful assets that speak to your targets.',
    features: [
      'Logo & Vector Icon Design',
      'Social Media Ads & Banner Templates',
      'Business Card & Pitch Deck Design',
      'Custom Illustration & Vector Art',
      'Marketing Collaterals (Posters, Flyers, Brochures)'
    ],
    benefits: [
      'Stunning and memorable brand visual cues',
      'Consistent design system across channels',
      'Source files and vectors included standard',
      '100% bespoke graphics that fit your vibe'
    ],
    process: [
      { title: 'Inspiration Board', description: 'Brainstorming colors, moods, layout directions, and typography sets.' },
      { title: 'Drafting Concepts', description: 'Forming multiple distinct digital concept options for selection.' },
      { title: 'Revisions & Tweaks', description: 'Fine-tuning details, alignments, and custom colors.' },
      { title: 'Print & Digital Delivery', description: 'Providing optimized print-ready files and fast web SVG/PNG/PDF outputs.' }
    ]
  },
  {
    slug: 'content-writing',
    icon: PenTool,
    title: 'Content Writing',
    shortDescription: 'Engaging, human-written copy, articles, and landing page content.',
    fullDescription: 'Connect with your audience through powerful, persuasive prose. We write compelling copy that aligns with your brand voice, including web pages, SEO-infused blogs, email newsletters, and sales letters designed to spark immediate interest.',
    features: [
      'Conversion-Optimized Landing Page Copy',
      'In-Depth SEO Blog Posts & Newsletters',
      'Engaging Professional Press Releases',
      'Email Marketing Campaigns & Cold Sequences',
      'Brand Tone-of-Voice Guideline Setups'
    ],
    benefits: [
      'Dramatically improve copy-to-conversion rates',
      'Establish domain authority with deeply researched blogs',
      'Consistent, pristine spelling and stylistic flow',
      'Denser organic keyword density targeting'
    ],
    process: [
      { title: 'Brand Interview', description: 'Learning about your specific USP, tone constraints, and competitors.' },
      { title: 'SEO Keyword Mapping', description: 'Auditing highest-volume questions your target clients search for.' },
      { title: 'Crafting Drafts', description: 'Drafting high-intent copy structured around verified visual layout guides.' },
      { title: 'Polishing & QA', description: 'Enhancing stylistic reading flow, optimizing headings, and fact-checking.' }
    ]
  }
];
