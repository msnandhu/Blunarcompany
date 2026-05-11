import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Code2 } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Business Websites', 'E-Commerce', 'Web Applications'];

  const projects = [
    {
      id: 1,
      title: 'Innovative Decorator',
      category: 'Business Websites',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Tailwind', 'Vite'],
      url: 'https://innovativedecorator.com/',
    },
    {
      id: 2,
      title: 'Honeyfalls',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
      tech: ['Next.js', 'Shopify', 'Tailwind'],
      url: 'https://honeyfalls.in',
    },
    {
      id: 3,
      title: 'Metro Holidays',
      category: 'Business Websites',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'Framer Motion'],
      url: 'https://metroholidays.in/',
    },
    {
      id: 4,
      title: 'SK Architect',
      category: 'Business Websites',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      tech: ['Vue.js', 'Tailwind CSS'],
      url: 'https://skarchitect.in',
    },
    {
      id: 5,
      title: 'Udhaya Sappala Kadai',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'MongoDB'],
      url: 'https://udhayasappalakadai.com/',
    },
    {
      id: 6,
      title: 'Fantastic Narwhal App',
      category: 'Web Applications',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Netlify', 'APIs'],
      url: 'https://fantastic-narwhal-6bc641.netlify.app/',
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#03060c] relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Our <span className="text-gradient">Masterpieces</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-xl"
            >
              Explore our latest projects showcasing high-performance web applications, mobile solutions, and enterprise software.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-neon-cyan text-navy-900 shadow-glow-cyan' 
                    : 'glass text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} glareEnable={true} glareMaxOpacity={0.15} glareColor="#06b6d4" glarePosition="all" className="group relative rounded-2xl overflow-hidden glass-card h-full" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(15px)' }}>
                    <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex gap-3 mb-4">
                        <a href={project.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center hover:scale-110 transition-transform">
                          <ExternalLink size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full glass border-white/20 text-white flex items-center justify-center hover:scale-110 transition-transform hover:bg-white/10">
                          <Code2 size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-30 bg-navy-800/90 backdrop-blur-md" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(25px)' }}>
                    <div className="text-xs font-bold text-neon-cyan uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-neon-cyan font-medium hover:text-white transition-colors group">
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
