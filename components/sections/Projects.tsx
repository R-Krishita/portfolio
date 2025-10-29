'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-background w-full">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground-secondary mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div className="relative w-full">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />
          </div>
          
          {/* Projects */}
          <div className="space-y-0 w-full">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Enhanced Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent-gradient rounded-full z-10 hidden lg:block shadow-lg"
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Pulsing ring effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent-primary/30 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Project Card */}
                <ProjectCard 
                  project={project} 
                  index={index} 
                  isInView={isInView} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Interested in my work?
            </h3>
            <p className="text-foreground-secondary mb-6">
              Check out more projects on my GitHub or get in touch to discuss collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`https://github.com/${projects[0]?.githubUrl?.split('/').pop() || 'R-Krishita'}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-accent-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View All Projects
              </motion.a>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass text-foreground rounded-lg font-semibold hover:bg-accent-primary/20 transition-colors"
              >
                Let&apos;s Collaborate
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
