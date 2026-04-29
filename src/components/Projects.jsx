"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Map tech names to logo images (update paths as needed)
const techIcons = {
    "React": "/tech/react.png",
    "Next.js": "/tech/next.png",
    "Node.js": "/tech/nodejs.png",
    "PostgreSQL": "/tech/postgresql.png",
    "TailwindCSS": "/tech/tailwind.png",
    "Framer Motion": "/tech/framer-motion.svg",
    "Redux": "/tech/redux.png",
    "Firebase": "/tech/firebase.png",
    "mongodb": "/tech/mongodb.png",
    "express": "/tech/express.png",
    "pwa": "/tech/pwa.png",
    "html": "/tech/html.png",
    "css": "/tech/css.png",
    "php": "/tech/php.png",
    "MySQL": "/tech/mysql.png",
    "js": "/tech/js.png",
};

const projectList = [
    {
        title: "Nexadine - Restaurant SaaS App",
        image: "/projects/qrar.png",
        description:
            "A QR-based Progressive Web App for restaurant dine-in ordering with dynamic menus and dashboard.",
        tech: ["pwa", "mongodb", "express", "React", "Node.js", "TailwindCSS"],
        liveLink: "https://qrar-front-jet.vercel.app/home?restaurantId=67f4bfc6848659b1dd0c327d",
        codeLink: "https://github.com/Mahato-Rambabu/qrar",
    },
    {
        title: "Nexadine - Restaurant Dashboard",
        image: "/projects/qrar-dashboard.png",
        description:
            "A powerful dashboard that enables restaurant owners to manage menus, orders, and offers in real time with a seamless and intuitive interface.",
        tech: ["pwa", "mongodb", "express", "React", "Node.js", "TailwindCSS"],
        liveLink: "https://qrar-lyart.vercel.app/",
        codeLink: "https://github.com/Mahato-Rambabu/qrar",
    },

    {
        title: "Gym-trainer - Fitness App",
        image: "/projects/gym.png",
        description:
             "Developed a custom fitness web application for Iron Gym as a freelance project. Implemented a QR-based system where users can scan gym machine codes to access exercise videos and instructions.",
        tech: ["html", "css", "php"],
        liveLink: "https://fitplay.web.app/",
        codeLink: "https://github.com/Anuj-010/gym-trainer-app",
    },
    {
        title: "Bhajiwala - Online Fruits and Vegetables",
        image: "/projects/bhajiwala.jpg",
        description:
            "Developed a PHP & MySQL-based web application for a local vegetable shop to manage products, users, and online orders.",
        tech: ["php", "MySQL", "html", "css", "js"],
        liveLink: "https://bhajiwala.infinityfreeapp.com",
        codeLink: "https://github.com/Mahato-Rambabu/Bhajiwala---Fruits-And-Vegetales"
    },
    {
        title: "Portfolio Website",
        image: "/projects/pic2.png",
        description:
            "My personal developer portfolio built with Next.js and Tailwind. to showcase my works, projects and skills with a modern, responsive design.",
        tech: ["Next.js", "TailwindCSS"],
        liveLink: "https://personal-portfolio-ten-psi-52.vercel.app",
        codeLink: "https://github.com/Mahato-Rambabu/Personal-portfolio",
    },
];

const Projects = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projectList.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % projectList.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? projectList.length - 1 : prev - 1));

    return (
        <section
            id="projects"
            className="relative px-4  py-20 text-[#E0E0E0] bg-[#171724]"
        >
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
                    <span className="relative z-10">Projects</span>
                </h2>
                <p className="text-[#AAAAAA] max-w-xl my-4 mx-auto">
                    Explore a portfolio of real-world apps showcasing innovative solutions
                    and modern full-stack practices.
                </p>
            </div>

            <div className="relative w-full h-[420px] sm:h-[480px] max-w-6xl mx-auto flex items-center justify-center overflow-hidden">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-[40%] sm:top-1/2 -translate-y-1/2 z-50 text-white bg-[#3A3A3D] p-3 rounded-full shadow-lg hover:bg-[#555] transition"

                >
                    <FaArrowLeft />
                </button>

                <div className="relative w-full h-full">
                    {projectList.map((project, index) => {
                        const isActive = index === current;
                        const isLeft = index === (current - 1 + projectList.length) % projectList.length;
                        const isRight = index === (current + 1) % projectList.length;

                        // 🧠 Only render active, left, and right cards
                        if (!isActive && !isLeft && !isRight) return null;

                        let baseStyle = "transition-all duration-700 ease-in-out transform absolute";
                        let positionStyle = "";
                        let transformStyle = "";
                        let zIndex = "z-0";

                        if (isActive) {
                            positionStyle = "left-1/2 -translate-x-1/2";
                            transformStyle = "scale-100 rotate-0 opacity-100";
                            zIndex = "z-20";
                        } else if (isLeft) {
                            positionStyle = "left-1/4 -translate-x-1/2";
                            transformStyle = "scale-95 -rotate-6 opacity-60";
                            zIndex = "z-10";
                        } else if (isRight) {
                            positionStyle = "left-3/4 -translate-x-1/2";
                            transformStyle = "scale-95 rotate-6 opacity-60";
                            zIndex = "z-10";
                        }

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`${baseStyle} ${positionStyle} ${transformStyle} ${zIndex}
  bg-[#A259FF]/10 backdrop-blur-lg border border-[#FFFFFF1A] 
  text-white rounded-3xl w-full max-w-[90%] sm:w-[260px] md:w-[300px] lg:w-[320px]
  overflow-hidden shadow-xl`}

                            >
                                <div className="relative w-full">
                                    <img src={project.image} className="w-full h-44 object-cover rounded-t-3xl" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-sm sm:text-md font-bold mb-2">{project.title}</h3>
                                    <p className="text-[11px] sm:text-xs text-[#DDDDDD] mb-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <img
                                                key={i}
                                                src={techIcons[tech]}
                                                alt={tech}
                                                title={tech}
                                                className="h-5 w-5 object-contain"
                                            />
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            className="px-3 py-1.5 bg-[#A259FF] text-white rounded-md hover:bg-[#6C63FF] transition text-xs"
                                        >
                                            Live Demo
                                        </a>
                                        {project.codeLink && (
                                            <a
                                                href={project.codeLink}
                                                target="_blank"
                                                className="px-3 py-1.5 border border-[#A259FF] text-[#A259FF] hover:bg-[#6C63FF]/10 hover:text-white rounded transition text-xs"
                                            >
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-[40%] sm:top-1/2 -translate-y-1/2 z-20 text-white bg-[#3A3A3D] p-3 rounded-full shadow-lg hover:bg-[#555] transition"
                >
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
};

export default Projects;
