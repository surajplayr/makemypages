import { FadeIn, SectionHeading, ServiceCard } from '../components/UI';
import { servicesData } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Comprehensive Digital Services" 
          subtitle="Everything you need to build, grow, and manage your digital presence in one place."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.slug} 
              {...service}
              description={service.shortDescription}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
