import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Framer Motion', 'Three.js / WebGL'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Design', items: ['Figma', 'Adobe Creative Suite', 'UI/UX Prototyping', 'Design Systems'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Webpack / Vite'] },
  ];

  return (
    <section id="resume" className="relative z-10 bg-[#121212] py-32 px-6 md:px-16 border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">Expertise</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              With a strong foundation in full-stack development and an eye for pixel-perfect design, I bring ideas to life from architecture to the final polished interface.
            </p>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span>Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              className="border-t border-white/10 pt-6"
            >
              <h4 className="text-xl text-white font-medium mb-4">{skillGroup.category}</h4>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
