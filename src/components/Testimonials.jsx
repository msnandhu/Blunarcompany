import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO, TechFlow',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      text: 'Blunar. Co completely transformed our SaaS platform. The UI is stunning, and the performance upgrades allowed us to scale to 10k users seamlessly.',
      glow: 'shadow-glow-cyan',
      border: 'hover:border-neon-cyan/50'
    },
    {
      name: 'David Chen',
      role: 'Founder, UrbanCart',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      text: 'Their e-commerce expertise is unmatched. Since launching our new custom-built store, our conversion rate has doubled. Truly a premium agency.',
      glow: 'shadow-glow',
      border: 'hover:border-neon-blue/50'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director, Nexus',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      text: 'The digital marketing strategy they executed was brilliant. Our customer acquisition costs dropped by 40% while lead quality improved significantly.',
      glow: 'shadow-glow-purple',
      border: 'hover:border-neon-purple/50'
    }
  ];

  return (
    <section className="py-24 bg-[#03060c] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800/50 via-[#03060c] to-[#03060c]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Trusted by <span className="text-gradient">Visionaries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Don't just take our word for it. Here's what founders and industry leaders have to say about our work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.15} glareColor="#fff" glarePosition="all" className={`glass-card p-8 rounded-2xl relative group transition-all duration-500 border-white/5 ${testimonial.border} h-full flex flex-col`} style={{ transformStyle: 'preserve-3d' }}>
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }} />
                
                <div className="flex gap-1 mb-6" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(15px)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-8 leading-relaxed relative z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(25px)' }}>
                  <div className={`w-12 h-12 rounded-full p-1 bg-gradient-to-tr from-neon-blue to-neon-purple ${testimonial.glow} transition-shadow duration-300`}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full rounded-full object-cover border-2 border-navy-900"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
