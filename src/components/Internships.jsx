import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Code2, Smartphone, ShieldAlert, Megaphone, ExternalLink } from 'lucide-react';

const Internships = () => {
  const domains = [
    { name: 'Full Stack Development', icon: Code2, color: 'text-neon-blue', border: 'hover:border-neon-blue/50' },
    { name: 'App Development', icon: Smartphone, color: 'text-neon-purple', border: 'hover:border-neon-purple/50' },
    { name: 'Cybersecurity', icon: ShieldAlert, color: 'text-red-400', border: 'hover:border-red-400/50' },
    { name: 'Digital Marketing', icon: Megaphone, color: 'text-neon-cyan', border: 'hover:border-neon-cyan/50' },
  ];

  return (
    <section id="internships" className="py-24 relative overflow-hidden bg-[#03060c]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border-neon-blue/30 text-neon-blue text-sm font-medium mb-6"
          >
            Launch Your Career
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Premium <span className="text-gradient">Internship Programs</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Gain hands-on experience working on real-world projects alongside industry experts. Build your portfolio and secure your future in tech.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.15} glareColor="#06b6d4" glarePosition="all" className={`glass-card p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border-white/5 ${domain.border} h-full`} style={{ transformStyle: 'preserve-3d' }}>
                <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center mb-6" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                  <domain.icon className={`w-8 h-8 ${domain.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white font-heading" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>{domain.name}</h3>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass rounded-3xl p-8 border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start your journey?</h3>
            <p className="text-slate-400 mb-8">Register now to secure your spot in our upcoming internship batches.</p>
            <a 
              href="https://forms.gle/XpjmV1EynW5Rft7A8" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-navy-900 bg-white hover:bg-slate-200 transition-colors duration-300 rounded-xl shadow-glow"
            >
              Apply via Google Forms
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Internships;
