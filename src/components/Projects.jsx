import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Awwwards Portfolio',
    role: 'Creative Developer',
    year: '2024',
    description: 'High-performance interactive scrollytelling experience blending design and motion.',
    link: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Premium',
    role: 'Frontend Engineer',
    year: '2023',
    description: 'Next-gen shopping experience with 3D product visualization.',
    link: '#',
  },
  {
    id: 3,
    title: 'Generative AI Dashboard',
    role: 'Fullstack Dev',
    year: '2023',
    description: 'Analytics dashboard with custom GLSL shaders and real-time data.',
    link: '#',
  },
  {
    id: 4,
    title: 'Web3 Platform',
    role: 'Design Engineer',
    year: '2022',
    description: 'Decentralized application with immersive micro-interactions.',
    link: '#',
  }
];

export default function Projects() {
  return (
    <div className="relative z-10 bg-[#121212] min-h-screen py-32 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <h3 className="text-5xl md:text-7xl font-medium tracking-tight">Selected Work</h3>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl">
            A curated list of projects focusing on design engineering, high-end interactions, and performant web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.a
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              className="group relative block overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg aspect-[4/3] md:aspect-square lg:aspect-[4/3] p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 select-none cursor-pointer"
            >
              {/* Light reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-xs font-mono text-gray-300 border border-white/10 group-hover:border-white/30 transition-colors">
                      {project.year}
                    </span>
                    <span className="text-sm font-light text-gray-400">{project.role}</span>
                  </div>
                  
                  {/* Subtle Glow on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full"></div>
                </div>

                <div className="mt-auto transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-3xl md:text-4xl font-medium mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
