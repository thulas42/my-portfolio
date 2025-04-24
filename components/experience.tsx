'use client';

import { TimelineItem } from '@/types';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaFreeCodeCamp, 
  FaAngular, 
  FaReact, 
  FaCode,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb,
  SiFirebase
} from 'react-icons/si';

const experienceData: TimelineItem[] = [
  {
    company: 'Standard Bank',
    role: 'Senior Software Engineer',
    date: 'March 2024 - Current',
    description: `Standard Bank Group is the largest banking group in Africa by assets. Founded in 1862, the bank provides a full range of financial services including retail, corporate, and investment banking. They are at the forefront of digital banking innovation in Africa, serving millions of customers across the continent.`,
    logo: <img 
           src="/company-logos/standard_bank_south_africa_logo.jpg" 
           className="w-12 h-12 rounded-full object-contain"
           alt="Standard Bank logo"
         />,
    responsibilities: [
      'Building service to enable various FE (STD Banking app, and internet banking)',
      'SRE to meet various SLAs and to provide better service delivery to the customer',
      'Building contract compliance between various integration points and ensuring seamless communication between incompatible systems',
      'Building and supporting front end applications for SnI(Savings and Investments Internet banking)'
    ],
  },
  {
    company: 'Freelance',
    role: 'Full Stack Dev',
    date: 'July 2023 - March 2024',
    description: `Independent software development consulting, specializing in full-stack web development. Providing custom solutions and technical expertise to various clients while managing end-to-end project delivery.`,
    logo: <FaCode className="text-4xl text-primary" />,
    responsibilities: [
      'Various small projects',
      'Full stack development services',
      'Client consultations and project delivery'
    ],
  },
  {
    company: 'IQBusiness',
    role: 'Technical Lead',
    date: 'April 2023 - July 2023',
    description: `IQbusiness is South Africa's leading independent management consulting firm. They specialize in helping organizations navigate digital transformation, improve operational efficiency, and implement innovative solutions. The company combines strategy, technology, and industry expertise to deliver sustainable business improvements.`,
    logo: <img
           src="/company-logos/iq_business_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="IQBusiness logo"
         />,
    responsibilities: [
      'Provide technical expertise and guidance to the development team',
      'Lead and mentor a team of developers, ensuring their growth and productivity',
      'Collaborate with project managers and stakeholders to define technical requirements and project scope',
      'Stay updated on emerging technologies and industry trends to recommend innovative solutions',
      'Collaborate with architects to design and develop robust and scalable software solutions',
      'Define the overall system architecture, including components, modules, and integrations',
      'Create and maintain technical documentation, including system design, requirements, and specifications',
      'Tech Used: TypeScript, GraphQL, NodeJS (ExpressJS, Apollo), React, Redis, MongoDB, CSS3, Antd'
    ],
  },
  {
    company: 'BMW, iSanqa',
    role: 'Senior Front End Developer',
    date: 'September 2022 - April 2023',
    description: `BMW Group is a global luxury automotive and motorcycle manufacturer. Their digital transformation initiative, including iSanqa, focuses on developing innovative digital solutions for vehicle management, customer experience, and dealership operations. The company is leading the automotive industry in technological advancement and sustainability.`,
    logo: <img
           src="/company-logos/bmw_group_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="BMW logo"
         />,
    responsibilities: [
      'Coordination between development and support',
      'Assisting with business case development and business model implementation',
      'Requirements organisation and analysis',
      'Translating and simplifying requirements into living app components',
      'Requirements management and communication',
      'Document requirements in appropriate format depending on methodology followed',
      'Assist with identification and management of risks',
      'Tech Used: TypeScript, GraphQL, NodeJS, React, Vue, MongoDB, CSS3, Antd'
    ],
  },
  {
    company: 'DVT',
    role: 'Senior Front End Engineer',
    date: 'September 2021 - September 2022',
    description: `DVT is a software development and testing company that operates across South Africa, the UK, and the Netherlands. They specialize in custom software solutions, agile consulting, and digital transformation services. The company is known for delivering high-quality software solutions to various industries including finance, healthcare, and gaming.`,
    logo: <img
           src="/company-logos/dvt_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="DVT logo"
         />,
    responsibilities: [
      'Designing, maintaining and implementing website coding architecture for international online gaming casinos',
      'Collaborate with Product Owners and Test Analysts in developing, testing and deploying systems',
      'Research and develop new technologies',
      'Provide second/third line support and resolve complex production issues',
      'Monitor systems performance and ensure all SLAs are met',
      'Part take in code reviews',
      'Follow intellectual property guidelines for various brands'
    ],
  },
  {
    company: 'DigiOutsource',
    role: 'Senior Front End Developer',
    date: 'May 2021 - September 2021',
    description: `DigiOutsource is a technology solutions provider specializing in the online gaming industry. They deliver cutting-edge digital solutions for some of the world's largest gaming brands. The company focuses on developing innovative gaming platforms, customer engagement tools, and responsible gaming solutions.`,
    logo: <img
           src="/company-logos/digioutsource_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="DigiOutsource logo"
         />,
    responsibilities: [
      'Designing and implementing website architecture for online gaming casinos',
      'Collaborate with Product Owners and Test Analysts',
      'Provide second/third line support and resolve production issues',
      'Monitor systems performance and ensure SLA compliance',
      'Tech Used: Angular, Material, Bootstrap, Adobe XD, SCSS, jQuery, Git'
    ],
  },
  {
    company: 'Dimension Data',
    role: 'Independent Contractor – Web Developer',
    date: 'February 2021 - April 2021',
    description: `Dimension Data, now part of NTT Ltd, is a global technology integrator and managed services provider. They help organizations accelerate their digital transformation journey through intelligent technology solutions. The company specializes in cybersecurity, customer experience, hybrid cloud, and digital infrastructure.`,
    logo: <img
           src="/company-logos/dimension_data_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="Dimension Data logo"
         />,
    responsibilities: [
      'Building and maintaining SharePoint web applications',
      'SharePoint branding for the South African National Treasury',
      'Addition of content to various SP webparts',
      'Tech Used: MS SharePoint (online and on-prem), ReactJS, jQuery, SCSS'
    ],
  },
  {
    company: 'SuperTron Group',
    role: 'Independent Contractor – Mobile & Web Developer',
    date: 'February 2021 - April 2021',
    description: `SuperTron Group is a technology solutions provider focusing on mobile and web applications. They specialize in Google Cloud integrations and location-based services for businesses across South Africa.`,
    logo: <SiFirebase className="text-4xl text-primary" />,
    responsibilities: [
      'Translation of designs to web pages',
      'Application of various business rules',
      'Integration of FE to Google cloud services (Firebase, Maps APIs)',
      'Tech Used: Google Cloud, Firebase, Maps APIs, Bootstrap, jQuery, HTML5, SCSS'
    ],
  },
  {
    company: 'ZYBERFOX / ABSA',
    role: 'Senior Front End Engineer',
    date: 'July 2020 - January 2021',
    description: `ZYBERFOX, working with ABSA (one of Africa's largest financial services groups), specializes in digital insurance solutions. They focus on transforming traditional insurance processes into streamlined digital experiences. The company combines insurtech innovation with enterprise-scale banking requirements.`,
    logo: <img
           src="/company-logos/zyberfox.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="ZYBERFOX / ABSA logo"
         />,
    responsibilities: [
      'Assessing insurance business flows for web platforms',
      'Streamlining digital flows with focus on UI development framework',
      'Building front end web business flows for Absa Insurance',
      'Integrating various services to the client portal',
      'Tech Used: Angular 9+, Material Design, AkitaJS, Figma, SCSS, Bootstrap 4'
    ],
  },
  {
    company: 'FOUNDERS FACTORY',
    role: 'Front End Engineer',
    date: 'March 2020 - May 2020',
    description: `Founders Factory is a leading startup accelerator and incubator operating across Africa. They partner with corporate investors to build and scale technology startups. The organization focuses on supporting innovative startups that address Africa's biggest challenges through technology and entrepreneurship.`,
    logo: <img
           src="/company-logos/tripplo_software_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="FOUNDERS FACTORY logo"
         />,
    responsibilities: [
      'Building logistics dashboard systems for operations teams',
      'Developing reusable components and front-end libraries',
      'Translating designs into high-quality code',
      'Optimizing components for cross-browser compatibility',
      'Collaboration with Backend developers for API integration',
      'Tech Used: React.js, HTML, SCSS, State Management'
    ],
  },
  {
    company: 'MBG MEDIA',
    role: 'Independent Contractor, Full Stack Node Web Developer',
    date: 'July 2019 - February 2020',
    description: `MBG MEDIA is a digital media company that provides comprehensive web development solutions. They focus on creating scalable applications using modern technologies and cloud-based architectures.`,
    logo: <img src="/company-logos/1631304664777.jpg" className="w-12 h-12 rounded-full object-contain" alt="MBG MEDIA logo" />,
    responsibilities: [
      'Full stack development with Firebase deployment',
      'Building UX and front-end using React with Redux',
      'Back-end development and API creation',
      'Building microservices using NestJS on Node'
    ],
  },
  {
    company: 'BLACKLIGHT DESIGN',
    role: 'Web Developer',
    date: 'June 2018 - July 2019',
    description: `Blacklight Design is a creative digital agency based in Johannesburg. They specialize in web development, digital marketing, and SharePoint solutions for corporate clients. The company focuses on delivering innovative digital experiences that help businesses achieve their strategic objectives.`,
    logo: <img
           src="/company-logos/blacklight_design_pty_ltd_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="BLACKLIGHT DESIGN logo"
         />,
    responsibilities: [
      'Full stack development for digital solutions',
      'Engaging target audiences in multimedia environments',
      'Designing and developing SharePoint web parts',
      'Tech Used: Vanilla JS, jQuery, HTML5, CSS3, ReactJS, SharePoint'
    ],
  },
  {
    company: 'Wethinkcode',
    role: 'Software Engineer',
    date: 'February 2017 - June 2018',
    description: `WeThinkCode_ is a revolutionary software development academy in South Africa. They offer a unique peer-to-peer learning environment that transforms youth into world-class software engineers. The program focuses on practical coding skills, problem-solving, and preparing students for real-world software development.`,
    logo: <img
           src="/company-logos/wethinkcode_logo.jpg"
           className="w-12 h-12 rounded-full object-contain"
           alt="Wethinkcode logo"
         />,
    responsibilities: [
      'Peer to peer learning model software engineering',
      'C programming bootcamp completion',
      'Building software applications for clients',
      'Front-end and backend services orchestration',
      'Tech Used: C/C++, C#, Web Technologies'
    ],
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Journey</h2>
        
        <div className="relative">

          <div className="absolute w-1 justify-center bg-primary h-full" />
          
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 flex justify-start"
            >
              <div className="w-full pl-8">
                <div className="p-8 bg-dark-800 rounded-lg shadow-xl border border-primary/20 relative">
                  <div className="absolute left-0 top-8 -ml-8 w-8 h-1 bg-primary" />
                  <div className="flex items-center gap-4 mb-4">
                    {item.logo || <FaBuilding className="text-4xl text-primary" />}
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{item.company}</h3>
                      <p className="text-lg text-light">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-secondary mb-4">{item.date}</p>
                  <p className="text-light/80 mb-4 italic">{item.description}</p>
                  <ul className="list-disc pl-6">
                    {item.responsibilities.map((responsibility, i) => (
                      <li key={i} className="text-light/80 mb-2">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 