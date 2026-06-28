import { motion } from "framer-motion";
import TechPill from "./TechPill";
import { technologies, techCategories } from "../data/techData.js";
import { useMotionValue, useSpring } from "framer-motion";
const rows = [
    technologies.slice(0, 2),
    technologies.slice(2, 3),
    technologies.slice(3, 5),
    technologies.slice(5, 7),
    technologies.slice(7, 8),
    technologies.slice(8, 10),
    technologies.slice(10, 12),
    technologies.slice(12),
];

const rowClasses = [
  "justify-center",
  "justify-start lg:ml-[8%]",
  "justify-end lg:mr-[6%]",
  "justify-center",
  "justify-start lg:ml-[22%]",
  "justify-end lg:mr-[18%]",
  "justify-center",
  "justify-start lg:ml-[12%]",
];

export default function EngineeringToolkit() {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springRotateX = useSpring(rotateX);
    const springRotateY = useSpring(rotateY);
    return (
        <section
            id="toolkit"
            className="select-none relative overflow-hidden bg-[#121212] py-20 border-t border-white/5"
        >
            {/* Ambient Glow */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] rounded-full bg-white/[0.03] blur-[180px] -translate-x-1/2 -translate-y-1/2" />

            </div>

            <div className="relative w-full px-10 xl:px-24 2xl:px-40">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center mb-24"
                >
                    <p className="uppercase tracking-[0.45em] text-neutral-500 text-sm mb-4">
                        ENGINEERING
                    </p>

                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
                        Toolkit
                    </h2>

                    <p className="mt-8 text-lg text-neutral-400 max-w-3xl mx-auto leading-8">
                        The technologies I use to design, build and deploy
                        high-performance web applications.
                    </p>

                </motion.div>

                {/* Mobile */}
                {/* ================= MOBILE ================= */}

                <div className="md:hidden space-y-10">

                    {techCategories.map((category) => (

                        <div key={category.title}>

                            <h3 className="uppercase tracking-[0.35em] text-neutral-500 text-sm mb-5">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {category.items.map((tech) => {

                                    const Icon = tech.icon;

                                    return (
                                        <div
                                            className="
                                            group
                                            flex items-center gap-2
                                            rounded-full
                                            border border-white/10
                                            bg-white/[0.04]
                                            px-4 py-3
                                            transition-all
                                            duration-300
                                            hover:bg-white
                                            hover:border-white
                                            "
                                        >
                                            <Icon
                                                size={18}
                                                className="text-neutral-300 group-hover:text-black transition-colors"
                                            />

                                            <span className="text-sm text-white group-hover:text-black transition-colors">
                                                {tech.name}
                                            </span>
                                        </div>
                                    );

                                })}

                            </div>

                        </div>

                    ))}

                </div>

                {/* Floating Pills */}
                <motion.div
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();

                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    rotateY.set((x / rect.width - 0.5) * 4);
                    rotateX.set(-(y / rect.height - 0.5) * 4);
                }}
                onMouseLeave={() => {
                    rotateX.set(0);
                    rotateY.set(0);
                }}
                >
                {/* Floating pills */}
                <div className="hidden md:block">
                    <div className="relative" style={{
                        perspective: 1000,
                    }}>
                        <div className="space-y-7">

                        {rows.map((row, rowIndex) => (

                            <motion.div
                                key={rowIndex}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    staggerChildren: 0.08,
                                }}
                                className={`flex flex-wrap gap-10 ${rowClasses[rowIndex]}`}
                            >
                                {row.map((tech) => (

                                    <motion.div
                                        key={tech.name}
                                        initial={{
                                            opacity: 0,
                                            y: 25,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: .6,
                                        }}
                                    >
                                        <TechPill
                                            {...tech}
                                        />
                                    </motion.div>

                                ))}

                            </motion.div>

                        ))}

                    </div>
                    </div>
                </div>
                </motion.div>

            </div>
        </section>
    );
}