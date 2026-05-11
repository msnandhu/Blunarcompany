import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Cpu, BookOpen, Presentation, CheckCircle, Lightbulb, Zap, Activity } from 'lucide-react';

const AcademicProjects = () => {
  const domains = [
    { name: 'ECE / EEE', icon: Zap, color: 'text-yellow-400', glow: 'shadow-[0_0_15px_rgba(250,204,21,0.3)]' },
    { name: 'Bio-Medical', icon: Activity, color: 'text-red-400', glow: 'shadow-[0_0_15px_rgba(248,113,113,0.3)]' },
    { name: 'CSE / IT', icon: Cpu, color: 'text-neon-blue', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.3)]' },
    { name: 'AI & DS', icon: Lightbulb, color: 'text-neon-purple', glow: 'shadow-[0_0_15px_rgba(139,92,246,0.3)]' },
    { name: 'MBA / Business', icon: Presentation, color: 'text-emerald-400', glow: 'shadow-[0_0_15px_rgba(52,211,153,0.3)]' },
  ];

  const features = [
    'IEEE Base Papers & Research Guidance',
    'Complete Hardware & Software Integration',
    'Detailed Documentation & Reports',
    'Professional PPT Preparation',
    'Working Prototype Development',
    'Real-time Project Explanation'
  ];

  return (
    <section id="academic" className="py-24 relative overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 bg-gradient-royal opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-navy-900/50 backdrop-blur-[100px] rounded-full mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-neon-purple/30 mb-6"
            >
              <BookOpen className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium text-neon-purple">Academic Excellence</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Advanced <span className="text-gradient">College Projects</span> <br /> & Research
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-8"
            >
              We provide state-of-the-art project development and research guidance for engineering and business students. From idea to execution, we ensure top-tier academic performance.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3 text-neon-purple" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-navy-900 bg-neon-purple rounded-xl shadow-glow-purple hover:bg-white transition-colors duration-300">
                Discuss Your Project
              </a>
            </motion.div>
          </div>

          {/* Right Side: Futuristic Domains Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-neon-purple/10 blur-[100px] rounded-full"></div>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {domains.map((domain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={`h-full ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.15} glareColor="#8b5cf6" glarePosition="all" className="glass-card p-6 rounded-2xl border-white/5 hover:border-white/20 transition-all duration-300 h-full" style={{ transformStyle: 'preserve-3d' }}>
                    <div className={`w-12 h-12 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center mb-4 ${domain.glow}`} style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                      <domain.icon className={`w-6 h-6 ${domain.color}`} />
                    </div>
                    <h4 className="text-white font-bold font-heading" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>{domain.name}</h4>
                    <p className="text-xs text-slate-500 mt-1" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(5px)' }}>Projects & Research</p>
                  </Tilt>
                </motion.div>
              ))}
              
              {/* Decorative Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="hidden sm:block h-full"
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.15} glareColor="#3b82f6" glarePosition="all" className="h-full glass-card p-6 rounded-2xl border-neon-blue/30 bg-gradient-to-br from-neon-blue/10 to-transparent flex items-center justify-center flex-col gap-2" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="text-3xl font-bold text-white font-heading" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>100%</div>
                  <div className="text-xs text-neon-blue uppercase tracking-widest font-bold text-center" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>Success Rate</div>
                </Tilt>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;
