'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = {
    languages: { title: 'Languages', color: 'from-blue-500 to-cyan-500' },
    frameworks: { title: 'Frameworks', color: 'from-purple-500 to-pink-500' },
    databases: { title: 'Databases', color: 'from-green-500 to-emerald-500' },
    tools: { title: 'Tools', color: 'from-orange-500 to-red-500' },
    'soft-skills': { title: 'Soft Skills', color: 'from-indigo-500 to-purple-500' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-32 bg-background-secondary w-full">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-foreground-secondary mx-auto text-center">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {Object.entries(categories).map(([categoryKey, category]) => {
            const categorySkills = skills.filter(skill => skill.category === categoryKey);
            
            return (
              <motion.div key={categoryKey} variants={itemVariants} className="relative">
                <motion.h3 
                  className="text-3xl font-bold mb-8 text-center relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent relative`}>
                    {category.title}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 64 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </span>
                </motion.h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 sm:gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.15, 
                        rotateY: 10,
                        z: 50,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="glass p-6 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
                      style={{ perspective: "1000px" }}
                    >
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Skill icon with enhanced animation */}
                      <motion.div 
                        className="text-3xl mb-3 relative z-10"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      
                      {/* Skill name */}
                      <div className="text-sm font-semibold text-foreground group-hover:text-accent-primary transition-colors relative z-10 mb-3">
                        {skill.name}
                      </div>
                      
                      {/* Enhanced skill level indicators */}
                      <div className="flex justify-center space-x-1 relative z-10">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < skill.level 
                                ? `bg-gradient-to-r ${category.color}` 
                                : 'bg-foreground-secondary/30'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.2 }}
                          />
                        ))}
                      </div>
                      
                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-accent-primary rounded-full opacity-0"
                            whileHover={{
                              opacity: [0, 1, 0],
                              y: [0, -20, -40],
                              x: [0, (i - 1) * 10, (i - 1) * 20],
                            }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            style={{
                              left: "50%",
                              top: "50%",
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Summary */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Primary Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent-gradient text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
