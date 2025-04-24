'use client';

import { FaAngular, FaReact, FaNode, FaDatabase, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection = () => {
  const techIcons = [
    { icon: <FaAngular />, name: 'Angular' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNode />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'Database' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-[#1a1a2e] to-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Thulani Zondo
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4">Senior Full Stack Developer</h2>
            <p className="text-lg mb-8 text-light/80">
              Experienced developer with expertise in building enterprise applications for major banks and corporations. Specialized in PWAs, responsive designs, API integrations, and cloud technologies.
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a 
                href="mailto:thulanizondo42@gmail.com" 
                className="text-light hover:text-primary transition-colors"
              >
                <span className="sr-only">Email</span>
                <FaEnvelope className="w-8 h-8" />
              </a>
              <a href="tel:+27838433216" className="text-light hover:text-primary transition-colors">
                <span className="sr-only">Phone</span>
                <FaPhone className="w-8 h-8" />
              </a>
              <a href="https://bold.pro/my/thulani-zondo-230823095854/285" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
                <span className="sr-only">Portfolio</span>
                <FaGlobe className="w-8 h-8" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/company-logos/IMG_0561.JPG"
                alt="Thulani Zondo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 