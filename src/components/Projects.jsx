import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layout, Users } from 'lucide-react';

const projects = [
  {
    title: 'HRMS (Freelance)',
    category: 'Full-Stack Development',
    description: 'A complete Human Resource Management System built for a private company to streamline employee management, attendance, and payroll.',
    icon: <Users className="text-accent" size={32} />,
    tags: ['React', 'Node.js', 'MySQL', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Gerrys Private Data Portal',
    category: 'System Architecture',
    description: 'A secure organizational system for managing company-wide data, ensuring high performance and data integrity.',
    icon: <Database className="text-accent" size={32} />,
    tags: ['Laravel', 'PHP', 'MySQL', 'Security'],
    link: '#'
  },
  {
    title: 'Cargo Engines',
    category: 'Frontend Development',
    description: 'Developed interactive and high-performance user interfaces for cargo logistics management systems.',
    icon: <Layout className="text-accent" size={32} />,
    tags: ['React', 'GSAP', 'Framer Motion'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-morphism rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="p-8">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    {project.icon}
                  </div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-accent transition-colors" />
                </div>
                
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="h-1 w-0 group-hover:w-full bg-accent transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
