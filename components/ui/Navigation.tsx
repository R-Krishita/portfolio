'use client';

import { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/utils';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'leadership', 'certificates', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`block w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section.id
              ? 'bg-accent-primary scale-125 shadow-lg shadow-accent-primary/50'
              : 'bg-foreground-secondary hover:bg-accent-primary hover:scale-110'
          }`}
          aria-label={`Go to ${section.label} section`}
        >
          <span className="sr-only">{section.label}</span>
        </button>
      ))}
    </nav>
  );
}
