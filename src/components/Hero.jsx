import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Hero3D from './canvas/Hero3D';

const Hero = () => {
  const stats = [
    { label: 'Projects Delivered', value: '15+' },
    { label: 'Web Services', value: '10+' },
    { label: 'Marketing Services', value: '10+' },
    { label: 'Support', value: '24/7' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-neon-cyan/10 rounded-full blur-[100px] mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-neon-blue/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
              <span className="text-sm font-medium text-neon-blue">Build For Results Not Promises</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Building Digital <br className="hidden md:block" />
              <span className="text-gradient">Brands That Scale</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
            >
              We engineer premium web platforms, advanced software systems, and data-driven digital marketing strategies to accelerate your business growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto"
            >
              <a href="#contact" className="relative inline-flex group w-full sm:w-auto">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-navy-900 font-sans rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-900 border border-white/10">
                  Get Started <ArrowRight size={20} />
                </button>
              </a>
              <a href="#portfolio" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-300 rounded-xl glass hover:bg-white/5 border border-white/10 hover:border-white/20">
                <Play size={20} className="text-neon-cyan" fill="currentColor" />
                View Portfolio
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight font-heading">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Collaboration Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-4 px-6 py-3 mt-10 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span className="text-sm text-slate-400">In Strategic & project Collaboration with</span>
              <div className="hidden sm:block h-4 w-[1px] bg-white/20"></div>
              <a href="https://heviya.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 group bg-white/5 px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <img src="/heviya-logo.png" alt="Heviya" className="h-5 w-auto object-contain brightness-0 invert group-hover:invert-0 group-hover:brightness-100 transition-all duration-300" />
                <span className="text-lg font-heading font-bold tracking-widest text-white group-hover:text-neon-cyan transition-colors">HEVIYA</span>
              </a>
            </motion.div>
          </div>

          {/* Right Visual (3D Animation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative hidden md:block"
          >
            <Suspense fallback={
              <div className="w-full h-[500px] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Hero3D />
            </Suspense>

            {/* Floating Element 1 */}
            <div className="absolute -right-4 top-10 glass-card rounded-xl p-4 flex items-center gap-4 z-30 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                <CheckCircle2 className="text-neon-cyan w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-1">Web 3.0 Ready</div>
                <div className="text-xs text-slate-400">Next-gen systems</div>
              </div>
            </div>

            {/* Floating Element 2 */}
            <div className="absolute -left-4 bottom-10 glass-card rounded-xl p-4 flex items-center gap-4 z-30 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
              <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-neon-blue rounded-full border-t-transparent animate-spin"></div>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-1">Scale Instantly</div>
                <div className="text-xs text-slate-400">High-performance</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
