import { FadeIn } from '../components/UI';
import { CheckCircle2 } from 'lucide-react';

const Trust = () => {
  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Core Services', value: '5+' },
    { label: 'Success Rate', value: '99%' },
  ];

  return (
    <section className="py-12 border-y border-brand-border bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-brand-text-secondary uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
