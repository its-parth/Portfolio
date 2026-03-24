import React from 'react';
import { motion } from 'framer-motion';

const journeySteps = [
  {
    year: '2024 - Present',
    role: 'Senior Creative Developer',
    company: 'Studio X',
    description: 'Leading a team of developers focused on ultra-performant WebGL experiences and design systems for enterprise clients.',
  },
  {
    year: '2022 - 2024',
    role: 'Full Stack Engineer',
    company: 'TechFlow Innovations',
    description: 'Architected serverless microservices and built responsive, highly interactive React dashboards used by thousands daily.',
  },
  {
    year: '2020 - 2022',
    role: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Translated stunning Figma designs into pixel-perfect code, optimizing web core vitals and introducing modern CSS architectures.',
  },
  {
    year: '2019 - 2020',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    description: 'Started the journey building tailored WordPress and Shopify solutions for local businesses, establishing a strong foundation in web fundamentals.',
  }
];

export default function Journey() {
  return (
    <section id="journey" className="relative z-10 bg-[#121212] py-32 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-24 text-center"
        >
          <h3 className="text-5xl md:text-7xl font-medium tracking-tight">The Journey</h3>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A timeline of my professional growth, capturing the evolution from a curious freelancer to a seasoned creative engineer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Glowing Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] -translate-x-[7px] md:-translate-x-2 mt-1.5 md:mt-0 z-10"></div>
                  
                  {/* Content Box */}
                  <div className={`pl-10 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <span className="text-sm font-mono text-gray-500 mb-2 block">{step.year}</span>
                    <h4 className="text-2xl md:text-3xl font-medium text-white mb-2">{step.role}</h4>
                    <p className="text-gray-300 font-light text-lg mb-4">{step.company}</p>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
