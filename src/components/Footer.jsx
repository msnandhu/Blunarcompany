import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#03060c] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px] shadow-glow-purple group-hover:shadow-glow-lg transition-all duration-300">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src="/logo.jpg" alt="Blunar Logo" className="w-full h-full object-contain scale-150" />
                </div>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Blunar<span className="text-neon-blue">. Co</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Building Digital Brands That Scale. We engineer premium, scalable, and conversion-focused software solutions for modern businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-blue transition-all duration-300 hover:shadow-glow-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-blue transition-all duration-300 hover:shadow-glow-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-blue transition-all duration-300 hover:shadow-glow-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-blue transition-all duration-300 hover:shadow-glow-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Portfolio', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-neon-blue transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/0 group-hover:bg-neon-blue transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Custom Web Development', 'SaaS Applications', 'E-Commerce Solutions', 'Digital Marketing', 'Academic Projects'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-neon-cyan transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/0 group-hover:bg-neon-cyan transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-blue shrink-0 mt-1" />
                <span className="text-slate-400">Shop No:3, BSK Complex, Near Kifa Residency, Pattinamkathan Bus Stand, Ramanathapuram - 623501</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neon-purple shrink-0" />
                <a href="https://wa.me/916374169846" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-purple transition-colors">+91 63741 69846</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                <span className="text-slate-400">blnar.company@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Blunar. Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
