'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-16 bg-background w-full">
        <div className="section-container">
          <motion.div
            ref={ref}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center  mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              About Me
            </h2>
            <p className="text-lg text-foreground-secondary leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed mb-8">
              {personalInfo.currentRole}
            </p>
            <div className="glass p-8 rounded-xl">
              <p className="text-foreground-secondary italic text-base leading-relaxed">
                &quot;{personalInfo.funFact}&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-background-secondary w-full">
        <div className="section-container">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            className="text-center mx-auto"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 p-8 gradient-text">
              Education
            </h3>
            <div className="glass space-y-3 text-foreground-secondary text-base">
              <p className="font-medium">BTech in Computer Engineering</p>
              <p>SAKEC, Mumbai • 2022-2026</p>
              <p>CGPA: 8.47</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
