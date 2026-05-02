import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const getPath = (name) => import.meta.env.PROD ? '/Hux_Ain-Portfolio/' + name : '/' + name;

const Contact = () => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: <FontAwesomeIcon icon={faLinkedin} size="xl" />,
      link: 'https://linkedin.com/in/muhammad-ul-hussain-6323a8209',
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'Instagram',
      icon: <FontAwesomeIcon icon={faInstagram} size="xl" />,
      link: 'https://www.instagram.com/hux._.ain/',
      color: 'hover:text-[#e4405f]'
    },
    {
      name: 'Facebook',
      icon: <FontAwesomeIcon icon={faFacebook} size="xl" />,
      link: 'https://www.facebook.com/hux.ain.2025',
      color: 'hover:text-[#1877f2]'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to bring your next big idea to life? Let's connect and discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:muhammad.65324@iqra.edu.pk" 
                  className="flex items-center space-x-4 p-6 glass-morphism rounded-2xl group hover:border-accent/30 transition-all"
                >
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-primary transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Me</p>
                    <p className="font-medium text-white group-hover:text-accent transition-colors">muhammad.65324@iqra.edu.pk</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Follow My Journey</h3>
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass-morphism rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 flex items-center justify-center w-14 h-14`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <a 
                href={getPath('Muhammad-ul-Hussain-CV.pdf')}
                download="Muhammad-ul-Hussain-CV.pdf"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-accent transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Muhammad-ul-Hussain"
                    className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="huxain@example.com"
                    className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Collaboration"
                  className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell me about your project..."
                  className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-white transition-all duration-300">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 Muhammad-ul-Hussain (Hux-Ain). All rights reserved.</p>
        <p className="mt-2">Built with Vite, React, Three.js & Tailwind CSS</p>
      </div>
    </section>
  );
};

export default Contact;
