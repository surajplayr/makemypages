import { FadeIn } from '../components/UI';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <FadeIn className="relative">
              <div className="aspect-square bg-white rounded-[3rem] p-1 shadow-premium relative z-10 overflow-hidden border border-brand-border">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover rounded-[2.8rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl z-0"></div>
           </FadeIn>

           <div>
              <FadeIn>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-4">Our Agency</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-8 leading-tight">
                  Passionate About Building <span className="text-brand-primary">Digital Impact</span>
                </h2>
                <p className="text-lg text-brand-text-secondary mb-8 leading-relaxed">
                  MakeMyPages is a full-service digital agency dedicated to helping businesses navigate the complexities of the online world. We believe that a great website isn't just about code—it's about results.
                </p>
                <div className="space-y-6 mb-12">
                   <div className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5"></div>
                      <p className="text-brand-text-secondary"><strong className="text-brand-text">Our Mission:</strong> To provide premium digital solutions accessible to businesses of all sizes.</p>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5"></div>
                      <p className="text-brand-text-secondary"><strong className="text-brand-text">Who We Help:</strong> From local startups to established corporations looking for a digital edge.</p>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5"></div>
                      <p className="text-brand-text-secondary"><strong className="text-brand-text">Our Philosophy:</strong> Clean design, robust technology, and human-centric service.</p>
                   </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 items-center p-6 bg-white rounded-2xl border border-brand-border">
                   <div className="flex -space-x-4">
                      <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/150?u=1" alt="Team member" />
                      <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/150?u=2" alt="Team member" />
                      <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/150?u=3" alt="Team member" />
                      <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-primary text-white flex items-center justify-center text-xs font-bold">+12</div>
                   </div>
                   <p className="text-sm font-medium text-brand-text-secondary italic">"Helping you grow one pixel at a time."</p>
                </div>
              </FadeIn>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
