import { motion } from 'framer-motion';
import { PhoneCall, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050b14]">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon-blue/20 blur-[150px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-5xl mx-auto glass-card rounded-3xl p-10 md:p-16 border-white/10 text-center relative overflow-hidden"
          style={{ transformOrigin: "bottom", perspective: 1000 }}
        >
          {/* Inner Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-white leading-tight">
              Your Business Shouldn’t Look <br className="hidden md:block" />
              <span className="text-gradient">Average.</span>
            </h2>
            
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Stop losing customers to outdated design and slow systems. Partner with us to engineer a premium digital presence that scales.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/916374169846" target="_blank" rel="noreferrer" className="w-full sm:w-auto relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-navy-900 font-sans rounded-xl focus:outline-none border border-white/10 hover:border-white/20">
                  <Calendar size={20} />
                  Book Consultation
                </button>
              </a>
              
              <a href="mailto:blnar.company@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-300 rounded-xl glass hover:bg-white/5 border border-white/10 hover:border-white/20">
                <PhoneCall size={20} className="text-neon-cyan" />
                Contact Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
