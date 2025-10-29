'use client';

import { motion } from 'framer-motion';
import { certificates } from '@/lib/data';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import Image from 'next/image';

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certificates" className="py-32 bg-background w-full">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-foreground-secondary mx-auto">
            Professional certifications and academic achievements that showcase continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent-primary transition-colors leading-tight">
                  {certificate.name}
                </h3>
                
                <div className="space-y-3">
                  <p className="text-foreground-secondary font-medium text-base">
                    {certificate.organization}
                  </p>
                  <p className="text-sm text-foreground-secondary">
                    {certificate.date}
                  </p>
                </div>

                {certificate.url && (
                  <motion.a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors pt-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass p-10 rounded-2xl">
            <h3 className="text-3xl font-semibold mb-6 gradient-text">
              Continuous Learning Journey
            </h3>
            <p className="text-foreground-secondary mx-auto leading-relaxed mb-10 text-lg">
              I believe in the power of continuous learning and professional development. 
              These certifications represent my commitment to staying current with industry 
              trends and expanding my technical expertise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-3">
                  {certificates.length}+
                </div>
                <div className="text-base text-foreground-secondary">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-3">3+</div>
                <div className="text-base text-foreground-secondary">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-3">10+</div>
                <div className="text-base text-foreground-secondary">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-3">100%</div>
                <div className="text-base text-foreground-secondary">Dedication</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
