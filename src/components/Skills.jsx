"use client";

import Image from "next/image";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "react", level: "90%", experience: "2 years", desc: "JavaScript library" },
  { name: "NextJS", icon: "next", level: "90%", experience: "2 years", desc: "React framework" },
  { name: "NodeJS", icon: "nodejs", level: "85%", experience: "1.5 years", desc: "Runtime environment" },
  { name: "JavaScript", icon: "javascript", level: "90%", experience: "2 years", desc: "Scripting Programming" },
  { name: "Java", icon: "java", level: "85%", experience: "1 year", desc: "OOP" },
  { name: "Python", icon: "python", level: "80%", experience: "1 year", desc: "Interpreted Programming" },
  { name: "SQL", icon: "sql", level: "90%", experience: "1.5 years", desc: "Structured Query Language" },
  { name: "Tailwind CSS", icon: "tailwind", level: "95%", experience: "2 years", desc: "CSS Framework" },
  { name: "MongoDB", icon: "mongodb", level: "85%", experience: "1.5 years", desc: "NoSQL Database" },
  { name: "PHP", icon: "php", level: "95%", experience: "2.5 years", desc: "Server-side Scripting" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#141423] px-6 text-[#E0E0E0] py-36">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
        <p className="text-[#AAAAAA] max-w-xl mx-auto text-sm md:text-base">
          Hover a card to view proficiency and experience.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-xl overflow-hidden cursor-pointer 
                       bg-[#1e1e2f] border border-[#A259FF33] shadow-md
                       hover:shadow-[0_0_25px_#A259FF55] transition-all duration-300 ease-in-out"
          >
            {/* Front */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
              <Image
                src={`/tech/${skill.icon}.png`}
                alt={skill.name}
                width={50}
                height={50}
                className="mb-3"
              />
              <h4 className="text-[#A259FF] text-sm font-medium">{skill.name}</h4>
              <p className="text-[#AAAAAA] text-xs">{skill.desc}</p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center 
                            bg-transparent backdrop-blur-sm border border-[#A259FF33] rounded-xl 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h4 className="text-[#E0E0E0] text-sm font-semibold mb-2">{skill.name}</h4>
              <div className="w-16 h-16 mb-2 mx-auto">
                <CircularProgressbar
                  value={parseInt(skill.level)}
                  text={skill.level}
                  styles={buildStyles({
                    pathColor: "#A259FF",
                    textColor: "#E0E0E0",
                    trailColor: "#444",
                    textSize: "28px",
                  })}
                />
              </div>
              <p className="text-[#DDDDDD] text-xs">Experience: {skill.experience}</p>
            </div>

            {/* Spacer to maintain card height */}
            <div className="invisible h-[180px] w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
