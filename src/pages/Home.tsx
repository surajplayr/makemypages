import Hero from '../sections/Hero';
import Trust from '../sections/Trust';
import Services from '../sections/Services';
import WhyWebsites from '../sections/WhyWebsites';
import Process from '../sections/Process';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';

const homeFaqs = [
  {
    question: "What services does MakeMyPages offer in India?",
    answer: "MakeMyPages provides end-to-end digital growth services including CMS website development (WordPress, Webflow, Shopify), SEO optimization, Google Business Profile management, commercial 4K photography & videography, branding design, web hosting, and AI workflow automations."
  },
  {
    question: "Do you build CMS websites with drag-and-drop editors?",
    answer: "Yes, we specialize in easy-to-manage CMS websites on WordPress, Webflow, and Shopify that allow you to update text, upload media, post blogs, and manage products without writing any code."
  },
  {
    question: "What is included with the 3 months of free post-launch support?",
    answer: "Every website developed by MakeMyPages includes 3 months of free post-launch technical support covering bug fixes, security updates, speed monitoring, and content assistance."
  },
  {
    question: "How quickly can my web development project launch?",
    answer: "Most website development projects launch within 7 to 14 days after initial requirements gathering. We start execution immediately upon project agreement."
  }
];

const Home = () => {
  return (
    <div className="pt-16">
      <SEO 
        title="Website Development, SEO, Photography & Branding Agency India" 
        description="MakeMyPages is India's leading digital agency for CMS website development (WordPress, Shopify, Webflow), SEO optimization, 4K video, photography & AI automations."
        breadcrumbs={[
          { name: 'Home', item: '/' }
        ]}
        faqItems={homeFaqs}
      />
      <Hero />
      <Trust />
      <Services />
      <WhyWebsites />
      <Process />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

