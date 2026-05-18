import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Code2, ShoppingCart, Smartphone, LayoutDashboard, Database, 
  Cpu, Megaphone, Share2, Search, Target, Mail, BarChart3, Cloud, Monitor
} from 'lucide-react';

const Services = () => {
  const webServices = [
    { title: 'Custom Website Dev', icon: Monitor, desc: 'Tailor-made websites engineered for high performance and scalability.' },
    { title: 'E-Commerce Dev', icon: ShoppingCart, desc: 'Conversion-optimized stores that drive sales and engage customers.' },
    { title: 'Web Applications', icon: Code2, desc: 'Complex, scalable SaaS and enterprise web applications.' },
    { title: 'Mobile App Dev', icon: Smartphone, desc: 'Native and cross-platform mobile experiences for iOS and Android.' },
    { title: 'Cloud Hosting', icon: Cloud, desc: 'Secure, high-availability infrastructure setup and management.' },
    { title: 'Business Automation', icon: LayoutDashboard, desc: 'Streamlining workflows with custom internal tools and CRM systems.' },
    { title: 'IoT & Embedded', icon: Cpu, desc: 'Connecting hardware with powerful cloud-based software.' },
    { title: 'Medical Product Dev', icon: Database, desc: 'HIPAA-compliant and secure systems for the healthcare industry.' },
  ];

  const marketingServices = [
    { title: 'Social Media Handling', icon: Share2, desc: 'Building brand presence across Instagram, LinkedIn, and more.' },
    { title: 'Facebook & Google Ads', icon: Target, desc: 'High-ROI targeted ad campaigns.' },
    { title: 'SEO Optimization', icon: Search, desc: 'Dominating search rankings to drive organic traffic.' },
    { title: 'Content Marketing', icon: Megaphone, desc: 'Compelling content strategies that build authority.' },
    { title: 'Email & WhatsApp', icon: Mail, desc: 'Direct-to-customer campaigns with high open rates.' },
    { title: 'Analytics & Tracking', icon: BarChart3, desc: 'Data-driven insights to measure and scale growth.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border-neon-cyan/30 text-neon-cyan text-sm font-medium mb-6"
          >
            Our Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Engineering <span className="text-gradient">Digital Success</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            From scalable software architecture to high-converting marketing campaigns, we provide end-to-end digital solutions.
          </motion.p>
        </div>

        {/* Web & Software Services */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-white font-heading">Web & Software Services</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {webServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.15} glareColor="#44BCFF" glarePosition="all" className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                  <div className="relative h-full glass-card rounded-2xl p-6 border-white/5 hover:border-neon-blue/50 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-neon-blue/50 transition-all duration-300 transform-gpu" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                      <service.icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-neon-blue transition-colors" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>{service.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(5px)' }}>{service.desc}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Digital Marketing Services */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-white font-heading">Digital Marketing Services</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-purple/50 to-transparent"></div>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {marketingServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.15} glareColor="#FF44EC" glarePosition="all" className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                  <div className="relative h-full glass-card rounded-2xl p-6 border-white/5 hover:border-neon-purple/50 transition-colors duration-300 flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-neon-purple/50 transition-all duration-300 transform-gpu" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                      <service.icon className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}>
                      <h4 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-neon-purple transition-colors">{service.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;
