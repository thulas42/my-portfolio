'use client';

import { HeroSection } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import Education from '@/components/education';
import { Certifications } from '@/components/certifications';
import { Contact } from '@/components/contact';
import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light">
      <div className="fixed top-4 right-4 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-800/90 backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-xl"
        >
          <p className="text-sm text-light/80 mb-2">In a rush? Jump to:</p>
          <a 
            href="#experience" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View Experience</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
      <HeroSection />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <ContactForm />
    </main>
  );
} 