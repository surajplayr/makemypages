import Hero from '../sections/Hero';
import Trust from '../sections/Trust';
import Services from '../sections/Services';
import WhyWebsites from '../sections/WhyWebsites';
import Process from '../sections/Process';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="pt-16">
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
