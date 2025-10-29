'use client';

import { motion } from 'framer-motion';
import { leadership } from '@/lib/data';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="leadership" className="py-32 bg-background-secondary w-full">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Leadership & Positions
          </h2>
          <p className="text-lg text-foreground-secondary mx-auto">
            Leading teams and driving innovation in academic and professional settings
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {leadership.map((position) => (
            <motion.div
              key={position.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl">{position.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold gradient-text mb-2 sm:mb-0">
                      {position.title}
                    </h3>
                    <span className="text-sm text-foreground-secondary bg-accent-primary/20 px-3 py-1 rounded-full">
                      {position.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {position.organization}
                  </h4>
                  
                  <p className="text-foreground-secondary leading-relaxed">
                    {position.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Leadership Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="items-center glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Leadership Philosophy
            </h3>
              <p className="text-foreground-secondary text-center mx-auto leading-relaxed">
              &ldquo;I believe in fostering collaborative environments where innovative ideas can flourish. 
              My approach focuses on empowering team members, encouraging creative problem-solving, 
              and transforming abstract concepts into tangible solutions that drive real-world impact.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
