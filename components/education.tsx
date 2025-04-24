'use client';

import { Education as EducationType } from '@/types';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaUniversity } from 'react-icons/fa';
import { SiUdacity } from 'react-icons/si';

const educationData: EducationType[] = [
  {
    institution: 'University of Pretoria',
    qualification: 'Bachelor of Science: BEng Computer Engineering (incomplete)',
    logo: <FaUniversity className="text-4xl text-primary" />,
  },
  {
    institution: 'Udacity',
    qualification: 'Certificate: Software Engineering - Mobile Web Specialist',
    logo: <SiUdacity className="text-4xl text-primary" />,
  },
  {
    institution: 'FreeCodeCamp',
    qualification: 'Responsive Web Design: Software Engineering',
    details: [
      'Back-end development course with JavaScript',
      'Server-side scripting using JavaScript',
      'Responsive web development principles'
    ],
    logo: <FaCode className="text-4xl text-primary" />,
  },
  {
    institution: 'Udacity',
    qualification: 'APIs And Microservices: Software Engineering',
    logo: <SiUdacity className="text-4xl text-primary" />,
  },
  {
    institution: 'Amazulu High School',
    qualification: 'High School Diploma',
    details: [
      'Received Matric',
      'Best Student in science class with an Average of 80% in maths and physics'
    ],
    logo: <FaGraduationCap className="text-4xl text-primary" />,
  }
];

export default function Education() {
  return (
    <section className="py-20 px-4 bg-dark-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 bg-dark rounded-lg shadow-xl border border-primary/20"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.logo}
                <div>
                  <h3 className="text-xl font-bold text-primary">{item.institution}</h3>
                  <p className="text-light/80">{item.qualification}</p>
                </div>
              </div>
              
              {item.details && (
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-light/70 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 