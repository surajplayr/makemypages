import { FadeIn, SectionHeading } from '../components/UI';

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We start by understanding your business goals and current digital presence.'
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Our design team creates a unique, modern aesthetic tailored to your brand.'
    },
    {
      num: '03',
      title: 'Development',
      desc: 'We bring the designs to life using cutting-edge technologies and best practices.'
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Your project goes live, and we provide ongoing support to ensure success.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Our Seamless Process" 
          subtitle="How we take your project from initial concept to a successful digital launch."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-brand-border z-0"></div>
          
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white border border-brand-border rounded-full flex items-center justify-center mx-auto mb-8 shadow-soft">
                <span className="text-xl font-display font-bold text-brand-primary">{step.num}</span>
              </div>
              <h4 className="text-xl font-bold text-brand-text mb-4">{step.title}</h4>
              <p className="text-brand-text-secondary text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
