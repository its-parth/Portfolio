import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiRazorpay,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiPostman,
  SiVercel,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";

export const technologies = [
  {
    name: "React",
    icon: FaReact,
    duration: 8,
    delay: 0,
  },

  {
    name: "Next.js",
    icon: SiNextdotjs,
    duration: 7,
    delay: .5,
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    duration: 9,
    delay: 1,
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
    duration: 10,
    delay: 1.5,
  },

  {
    name: "Tailwind",
    icon: SiTailwindcss,
    duration: 8.5,
    delay: 2,
  },

  {
    name: "Express",
    icon: SiExpress,
    duration: 7.5,
    delay: 2.5,
  },

  {
    name: "Redux",
    icon: SiRedux,
    duration: 9.5,
    delay: 3,
  },

  {
    name: "Razorpay",
    icon: SiRazorpay,
    duration: 8,
    delay: 3.5,
  },

  {
    name: "Cloudinary",
    icon: SiCloudinary,
    duration: 10,
    delay: 4,
  },

  {
    name: "Git",
    icon: FaGitAlt,
    duration: 7,
    delay: 4.5,
  },

  {
    name: "GitHub",
    icon: FaGithub,
    duration: 8,
    delay: 5,
  },

  {
    name: "Postman",
    icon: SiPostman,
    duration: 9,
    delay: 5.5,
  },

  {
    name: "Vercel",
    icon: SiVercel,
    duration: 10,
    delay: 6,
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    duration: 8.5,
    delay: 6.5,
  },

  {
    name: "C++",
    icon: SiCplusplus,
    duration: 7.5,
    delay: 7,
  },
];

export const techCategories = [
  {
    title: "Frontend",
    items: [
      technologies.find(t => t.name === "React"),
      technologies.find(t => t.name === "Next.js"),
      technologies.find(t => t.name === "Tailwind"),
      technologies.find(t => t.name === "Redux"),
    ],
  },

  {
    title: "Backend",
    items: [
      technologies.find(t => t.name === "Node.js"),
      technologies.find(t => t.name === "Express"),
      technologies.find(t => t.name === "MongoDB"),
      technologies.find(t => t.name === "Cloudinary"),
      technologies.find(t => t.name === "Razorpay")
    ],
  },

  {
    title: "Programming",
    items: [
      technologies.find(t => t.name === "JavaScript"),
      technologies.find(t => t.name === "C++"),
    ],
  },

  {
    title: "Tools",
    items: [
      technologies.find(t => t.name === "Git"),
      technologies.find(t => t.name === "GitHub"),
      technologies.find(t => t.name === "Postman"),
      technologies.find(t => t.name === "Vercel"),
    ],
  },
];