import { motion } from 'framer-motion';
import { Rocket, Layers, Code, ShieldCheck } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Rocket, title: 'Startup-Focused', desc: 'Agile methodologies tailored for rapid scaling.' },
    { icon: Layers, title: 'Scalable Systems', desc: 'Architectures designed to handle millions of users.' },
    { icon: Code, title: 'Full-Stack Eng.', desc: 'End-to-end development from database to UI/UX.' },
    { icon: ShieldCheck, title: 'Business-Oriented', desc: 'Solutions built to maximize your ROI and growth.' },
  ];

  return (
    <section id="about" className="py-24 bg-[#050b14] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Images/Visuals */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-blue/10 rounded-full blur-[100px] z-0"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 15, rotateY: -25 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="relative z-10 grid grid-cols-2 gap-4"
              style={{ perspective: 1000 }}
            >
              <div className="space-y-4 mt-12">
                <div className="rounded-2xl overflow-hidden glass-card p-2 border-white/10">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team collaborating" className="w-full h-48 object-cover rounded-xl" />
                </div>
                <div className="rounded-2xl overflow-hidden glass-card p-6 border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 flex flex-col justify-center items-center text-center h-48">
                  <span className="text-4xl font-bold text-white font-heading mb-2">5+</span>
                  <span className="text-slate-400 text-sm">Years of Engineering Excellence</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden glass-card p-6 border-white/10 bg-gradient-to-br from-neon-blue/20 to-transparent border-neon-blue/30 flex flex-col justify-center items-center text-center h-48">
                  <span className="text-4xl font-bold text-white font-heading mb-2">100%</span>
                  <span className="text-slate-400 text-sm">In-house Development</span>
                </div>
                <div className="rounded-2xl overflow-hidden glass-card p-2 border-white/10">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" alt="Code on screen" className="w-full h-48 object-cover rounded-xl" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-slate-300 text-sm font-medium mb-6"
            >
              Who We Are
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ transformOrigin: "top", perspective: 1000 }}
            >
              A Product Engineering <span className="text-gradient">Powerhouse</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 40, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="text-slate-400 text-lg mb-10"
              style={{ transformOrigin: "top", perspective: 1000 }}
            >
              We are not just another development agency. We are a startup-focused technology partner. Our product engineering approach ensures that every line of code we write and every pixel we design contributes directly to your business scalability.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/5 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
