import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  breadcrumbs?: { name: string; item: string }[];
  serviceName?: string;
  serviceType?: string;
  price?: string;
  faqItems?: { question: string; answer: string }[];
  schema?: Record<string, any>;
}

const DOMAIN = 'https://makemypages.in';
const DEFAULT_TITLE = 'MakeMyPages - Website Development, SEO, Photography & Branding Agency India';
const DEFAULT_DESCRIPTION = 'MakeMyPages is India’s premier digital growth agency specializing in CMS website development (WordPress, Shopify, Webflow), SEO optimization, commercial photography, 4K videography, branding, and AI workflow automations.';
const DEFAULT_KEYWORDS = [
  'Website Design India',
  'Website Development India',
  'WordPress Development',
  'E-commerce Development',
  'SEO Services India',
  'Google Business Profile Optimization',
  'Digital Marketing India',
  'Branding Studio India',
  'Commercial Photography and Videography',
  'Hosting and Website Maintenance',
  'AI Product Photography',
  'MakeMyPages'
];

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = `${DOMAIN}/og-image.jpg`,
  url,
  type = 'website',
  breadcrumbs,
  serviceName,
  serviceType,
  price,
  faqItems,
  schema
}: SEOProps) {
  useEffect(() => {
    // 1. Dynamic Document Title
    const fullTitle = title 
      ? `${title} | MakeMyPages` 
      : DEFAULT_TITLE;
    document.title = fullTitle;

    // Helper to create or update meta tag
    const updateMetaTag = (selector: string, attrKey: 'name' | 'property', attrVal: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrKey, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    if (keywords && keywords.length > 0) {
      updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    }
    updateMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Open Graph
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'MakeMyPages');
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');
    if (image) {
      const fullImg = image.startsWith('http') ? image : `${DOMAIN}${image}`;
      updateMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImg);
    }
    
    let currentUrl = url || (typeof window !== 'undefined' ? window.location.href : DOMAIN);
    if (currentUrl.includes('localhost') || currentUrl.includes('run.app')) {
      // Normalize dev URL to production domain for canonicals
      const path = typeof window !== 'undefined' ? window.location.pathname : '';
      currentUrl = `${DOMAIN}${path}`;
    }
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);

    // 4. Twitter Cards
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    if (image) {
      const fullImg = image.startsWith('http') ? image : `${DOMAIN}${image}`;
      updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullImg);
    }

    // 5. Canonical Link
    if (currentUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', currentUrl);
    }

    // 6. JSON-LD Structured Data Generation
    const schemasToInject: any[] = [];

    // Organization Schema
    schemasToInject.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${DOMAIN}/#organization`,
      'name': 'MakeMyPages',
      'legalName': 'MakeMyPages Digital Agency',
      'url': DOMAIN,
      'logo': `${DOMAIN}/logo.png`,
      'description': DEFAULT_DESCRIPTION,
      'telephone': '+91-9709143253',
      'email': 'hello@makemypages.in',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'IN',
        'addressRegion': 'India'
      },
      'sameAs': [
        'https://wa.me/919709143253'
      ]
    });

    // LocalBusiness / ProfessionalService Schema
    schemasToInject.push({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${DOMAIN}/#localbusiness`,
      'name': 'MakeMyPages - Website Design & Digital Marketing Agency',
      'image': `${DOMAIN}/og-image.jpg`,
      'url': DOMAIN,
      'telephone': '+91-9709143253',
      'priceRange': '₹10,000 - ₹50,000',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'IN',
        'addressRegion': 'India'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '22.5726',
        'longitude': '88.3639'
      },
      'areaServed': [
        { '@type': 'Country', 'name': 'India' },
        { '@type': 'City', 'name': 'Kolkata' },
        { '@type': 'City', 'name': 'Delhi' },
        { '@type': 'City', 'name': 'Mumbai' },
        { '@type': 'City', 'name': 'Bangalore' },
        { '@type': 'City', 'name': 'Hyderabad' },
        { '@type': 'City', 'name': 'Chennai' },
        { '@type': 'City', 'name': 'Pune' }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Digital Growth Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Website Development' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Website Redesign' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'SEO Services & Google Business Profile' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'E-commerce Storefronts' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Commercial Photography & 4K Videography' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Branding & Social Media Marketing' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Hosting & Website Maintenance' } }
        ]
      }
    });

    // WebSite Schema
    schemasToInject.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${DOMAIN}/#website`,
      'url': DOMAIN,
      'name': 'MakeMyPages',
      'publisher': { '@id': `${DOMAIN}/#organization` }
    });

    // Breadcrumbs Schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': b.name,
          'item': b.item.startsWith('http') ? b.item : `${DOMAIN}${b.item}`
        }))
      });
    }

    // Service Schema if provided
    if (serviceName) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': serviceName,
        'serviceType': serviceType || serviceName,
        'provider': { '@id': `${DOMAIN}/#organization` },
        'areaServed': { '@type': 'Country', 'name': 'India' },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'INR',
          'price': price || '10000',
          'availability': 'https://schema.org/InStock'
        }
      });
    }

    // FAQ Schema if provided
    if (faqItems && faqItems.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      });
    }

    // Custom Schema if passed
    if (schema) {
      schemasToInject.push(schema);
    }

    // Inject into head
    let scriptTag = document.querySelector('script[id="json-ld-seo"]') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-seo';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemasToInject);

  }, [title, description, keywords, image, url, type, breadcrumbs, serviceName, serviceType, price, faqItems, schema]);

  return null;
}

