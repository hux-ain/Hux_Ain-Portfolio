import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-accent">Bridging the Gap</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a Software Engineering student at <span className="text-white font-medium">Iqra University</span>, dedicated to mastering the art of building scalable and efficient web applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My focus is on <span className="text-white font-medium italic">"Bridging the gap between technical requirements and business growth."</span> I believe that code is not just about functionality, but about creating value and solving real-world problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 glass-morphism rounded-xl">
                <GraduationCap className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="font-bold">Education</h4>
                  <p className="text-sm text-gray-400">BS Software Engineering, Iqra University</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 glass-morphism rounded-xl">
                <Code2 className="text-accent shrink-0" size={24} />
                <div>
                  <h4 className="font-bold">Passion</h4>
                  <p className="text-sm text-gray-400">Full-Stack Development & Architecture</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-morphism p-2">
               {/* Placeholder for an image or 3D element */}
               <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                  <Briefcase size={120} className="text-accent/30" />
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-dark/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
