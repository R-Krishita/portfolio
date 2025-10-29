'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlobeScene from '@/components/three/GlobeScene';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Navigation from '@/components/ui/Navigation';
import { personalInfo } from '@/lib/data';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Typewriter effect for tagline
    const tagline = "Full-Stack Developer | MERN Enthusiast | Innovation Leader";
    let index = 0;
    
    const typeWriter = () => {
      if (taglineRef.current && index < tagline.length) {
        taglineRef.current.textContent = tagline.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Globe Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <GlobeScene className="w-full h-full" />
      </div>
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-background/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 80%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(123, 47, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
            <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {personalInfo.name}
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <div 
            ref={taglineRef}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground-secondary font-medium min-h-[2em]"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToNext()}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 217, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent-gradient text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Explore My Work</span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 217, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass text-foreground rounded-full font-semibold transition-all duration-300 hover:border-accent-primary/50"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center text-foreground-secondary hover:text-accent-primary transition-colors duration-300 p-4 rounded-full hover:bg-accent-primary/10"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </section>
  );
}
