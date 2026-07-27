import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_TITLE = 'MakeMyPages - CMS Web Development, Photography, Videography & Digital Agency';
const DEFAULT_DESCRIPTION = 'MakeMyPages specializes in CMS websites, professional photography, cinematic videography, SEO optimization, brand identity, and AI workflow automation.';
const DEFAULT_KEYWORDS = [
  'CMS Websites',
  'Website Development',
  'Photography and Videography Studio',
  'SEO Optimization',
  'Branding and Design',
  'AI E-commerce Product Photography',
  'MakeMyPages'
];

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = '/src/assets/images/cms_website_dev_showcase_1784958542497.jpg',
  url,
  type = 'website'
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

    // 3. Open Graph (Facebook / LinkedIn)
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    if (image) {
      updateMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    }
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    if (currentUrl) {
      updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    }

    // 4. Twitter Cards
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    if (image) {
      updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    }

    // 5. Canonical URL Link
    if (currentUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', currentUrl);
    }

  }, [title, description, keywords, image, url, type]);

  return null;
}
