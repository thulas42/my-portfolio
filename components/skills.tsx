'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaPalette, FaTools } from 'react-icons/fa';

const skillsData = [
  {
    category: "Frontend Development",
    icon: <FaCode />,
    skills: [
      "TypeScript",
      "Angular 13+",
      "ReactJS",
      "HTML 5",
      "CSS/SCSS"
    ]
  },
  {
    category: "Backend Development",
    icon: <FaDatabase />,
    skills: [
      "NodeJS",
      "GraphQL",
      "MongoDB",
      "SQL",
      "PostgreSQL"
    ]
  },
  {
    category: "Design & Tools",
    icon: <FaPalette />,
    skills: [
      "Figma",
      "Adobe XD",
      "Git",
      "CI/CD",
      "AWS/Google Cloud"
    ]
  }
];

export const Skills = () => (
  <section className="py-20 px-4 bg-dark-800">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="skill-card"
          >
            <div className="text-primary text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
); 