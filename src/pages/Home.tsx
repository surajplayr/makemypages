import Hero from '../sections/Hero';
import Trust from '../sections/Trust';
import Services from '../sections/Services';
import WhyWebsites from '../sections/WhyWebsites';
import Process from '../sections/Process';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="pt-16">
      <SEO 
        title="CMS Websites, Photography & Videography Agency" 
        description="MakeMyPages is a premium digital agency specializing in CMS Websites, high-definition photography, cinematic videography, SEO optimization, and brand identity."
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
