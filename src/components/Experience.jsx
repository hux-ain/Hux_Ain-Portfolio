import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Architecting Web Applications',
    company: 'Gerrys Information Technology',
    period: 'Aug 2025 – Present',
    description: 'Focus on architecting high-performance web applications and MySQL database management.',
    highlights: [
      'Built a Private Portal for Gerrys to save company-wide data securely.',
      'Optimized database queries for improved system performance.',
      'Collaborated with cross-functional teams to deliver scalable solutions.'
    ]
  },
  {
    title: 'UI/UX & Video Editing',
    company: 'Hastechsoft',
    period: 'Previous Experience',
    description: 'Developed skills in visual communication and user experience design.',
    highlights: [
      'Designed intuitive user interfaces for various web projects.',
      'Produced and edited high-quality video content for marketing.',
      'Enhanced brand identity through creative design solutions.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent/20"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_#00f2ff]"></div>

                {/* Content */}
                <div className="w-full md:w-5/12 ml-8 md:ml-0">
                  <div className="glass-morphism p-8 rounded-2xl hover:border-accent/30 transition-all duration-300">
                    <span className="text-accent font-bold text-sm mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                    <p className="text-gray-400 mb-6">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
