import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const featuredProject = {
  title: "StudyNotion",
  subtitle: "Full Stack EdTech Platform",
  year: "2025",
  description:
    "A production-ready EdTech platform featuring secure authentication, role-based access, course management, Razorpay payment integration, Cloudinary media uploads, and student progress tracking.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux",
    "Razorpay",
  ],

  image: "/projects/studynotion-placeholder.png",

  live: "#",
  github: "#",
};

const projects = [
  
  {
    title: "DivyaTemple",
    subtitle: "Temple Discovery Platform",
    year: "2024",

    description:
      "Temple discovery platform with authentication, admin dashboard, image upload and search.",

    tech: ["React", "Node.js", "MongoDB"],

    image: "/projects/divya-placeholder.png",

    live: "#",
    github: "#",
  },
  {
    title: "ShareProgress",
    subtitle: "Productivity Platform",
    year: "2025",

    description:
      "A productivity application with goals, Pomodoro timer, task management and analytics dashboard.",

    tech: ["React", "Express", "MongoDB"],

    image: "/projects/shareprogress-placeholder.png",

    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#121212] py-25 px-6 md:px-16 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-3xl leading-relaxed">
            Full-stack applications built using modern web technologies,
            focused on performance, scalability and solving real-world
            problems.
          </p>
        </motion.div>

        {/* ===================== FEATURED ===================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="group rounded-3xl border border-white/10 overflow-hidden bg-[#1A1A1A] mb-12 hover:border-white/20 transition-all"
        >
          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="aspect-video lg:aspect-auto bg-neutral-900 overflow-hidden">

              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            {/* Content */}

            <div className="p-6 sm:p-8 lg:p-14 flex flex-col">

              <span className="text-xs tracking-[0.4em] uppercase text-gray-500">
                Featured Project • {featuredProject.year}
              </span>

              <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">                {featuredProject.title}
              </h3>

              <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-300">
                {featuredProject.subtitle}
              </p>

              <p className="mt-8 text-gray-400 leading-8">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {featuredProject.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">

                <a
                  href={featuredProject.live}
                  className="flex justify-center items-center gap-2 bg-white text-black px-5 py-3 rounded-full"
                >
                  Live Demo
                  <ExternalLink size={18} />
                </a>

                <a
                  href={featuredProject.github}
                  className="flex justify-center items-center gap-2 bg-white text-black px-5 py-3 rounded-full"
                >
                  GitHub
                  <Github size={18} />
                </a>

              </div>

            </div>

          </div>
        </motion.div>

        {/* ===================== OTHER PROJECTS ===================== */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              className="group rounded-3xl border border-white/10 bg-[#1A1A1A] overflow-hidden hover:border-white/20 transition-all"
            >

              <div className="aspect-video bg-neutral-900 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  {project.year}
                </span>

                <h3 className="text-3xl font-semibold mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {project.subtitle}
                </p>

                <p className="mt-6 text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition"
                  >
                    Live
                    <ExternalLink size={17} />
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition"
                  >
                    GitHub
                    <Github size={17} />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}