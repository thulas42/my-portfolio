'use client';

import { Certification } from '@/types';
import { motion } from 'framer-motion';
import { SiUdacity } from 'react-icons/si';
import { FaFreeCodeCamp, FaCertificate } from 'react-icons/fa';

const certificationData: Certification[] = [
  {
    title: 'Mobile Web Specialist',
    issuer: 'Udacity & Google',
    date: '2018',
    details: [
      'Google Mobile Web Specialist Certification course',
      'Advanced web app development',
      'Building offline capable web applications',
      'Mastering mobile web development'
    ],
    certificate: '/certificates/Andela-certificate.pdf',
    icon: <SiUdacity className="text-4xl text-primary" />
  },
  {
    title: 'APIs and Microservices',
    issuer: 'freeCodeCamp',
    date: '2018',
    details: [
      'Backend development and API architecture',
      'Microservices design patterns',
      'Server-side development'
    ],
    certificate: 'https://www.freecodecamp.org/certification/tronman/back-end-development-and-apis',
    icon: <FaFreeCodeCamp className="text-4xl text-primary" />
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2018',
    details: [
      'Modern responsive design techniques',
      'CSS Grid and Flexbox mastery',
      'Mobile-first development approach'
    ],
    certificate: '/certificates/responsive_web_design_certificate.pdf',
    icon: <FaFreeCodeCamp className="text-4xl text-primary" />
  }
];

export const Certifications = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-800 p-6 rounded-lg border border-primary/20 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              {cert.icon}
              <div>
                <h3 className="text-xl font-bold text-primary">{cert.title}</h3>
                <p className="text-light/80">{cert.issuer}</p>
                <p className="text-secondary text-sm">{cert.date}</p>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-4">
              {cert.details.map((detail, i) => (
                <li key={i} className="text-light/80 mb-2">{detail}</li>
              ))}
            </ul>
            {cert.certificate && (
              <a
                href={cert.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <FaCertificate />
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
); 