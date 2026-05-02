import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Wrench, 
  Palette, 
  Database, 
  Globe, 
  Cpu, 
  Video 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe className="text-accent" />,
    skills: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Three.js', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: <Server className="text-accent" />,
    skills: ['PHP Laravel', 'Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Tools & DB',
    icon: <Database className="text-accent" />,
    skills: ['MySQL', 'Git & GitHub', 'Linux', 'System Optimization']
  },
  {
    title: 'Design & Creative',
    icon: <Palette className="text-accent" />,
    skills: ['UI/UX Design', 'Video Editing', 'Creative Problem Solving']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent/50 rounded-full"></div>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {['Scalability', 'Performance', 'Security', 'User Experience', 'Innovation'].map((text, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="px-6 py-2 rounded-full border border-accent/20 text-accent text-sm font-medium hover:bg-accent/10 cursor-default"
            >
              {text}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
