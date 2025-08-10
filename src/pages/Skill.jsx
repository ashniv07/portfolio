import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import skill images
import Js from "../assets/images/js.png";
import Css from "../assets/images/css.png";
import Html from "../assets/images/html.png";
import Re from "../assets/images/react.png";
import Docker from "../assets/images/docker.png";
import Sp from "../assets/images/sp.png";
import Github from "../assets/images/github.png";
import Java from "../assets/images/java.png";
import Lang from "../assets/images/lang.png";
import Figma from "../assets/images/figma.png";

function Skill() {
  const skillImages = [
    Js,
    Css,
    Html,
    Re,
    Docker,
    Sp,
    Github,
    Java,
    Lang,
    Figma
  ];

  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { triggerOnce: false, amount: 0.3 });

  const blinkAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: [0, 1, 0.7, 1],
      transition: {
        delay: i * 0.2,
        duration: 1,
        repeat: 2,
      },
    }),
  };

  return (
    <div
      ref={skillRef}
      className="bg-[#282120] min-h-screen flex items-center justify-center px-4 py-8 md:py-16 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Mobile Layout (Stacked) */}
        <div className="flex flex-col items-center gap-12 md:hidden">
          {/* Title */}
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
          >
            <h1 className="text-white font-mono font-bold text-4xl sm:text-5xl md:text-6xl tracking-widest text-center">
              SKILLS
            </h1>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-md mx-auto">
            {skillImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl w-20 h-20 sm:w-24 sm:h-24 overflow-hidden border-4 border-transparent animate-glow mx-auto"
                custom={index}
                variants={blinkAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <img
                  src={img}
                  alt={`skill-${index}`}
                  className="w-full h-full object-fit rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (Side by side) */}
        <div className="hidden md:flex items-center justify-center gap-16 lg:gap-24 xl:gap-32">
          {/* Title */}
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            className="flex-shrink-0"
          >
            <h1 className="text-white font-mono font-bold text-7xl lg:text-8xl xl:text-9xl tracking-widest -rotate-90 origin-center whitespace-nowrap">
              SKILLS
            </h1>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {skillImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl w-24 h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 overflow-hidden border-4 border-transparent animate-glow"
                custom={index}
                variants={blinkAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <img
                  src={img}
                  alt={`skill-${index}`}
                  className="w-full h-full object-fit rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px #D9A299, 0 0 20px #D9A299, 0 0 10px #D9A299;
          }
          50% {
            box-shadow: 0 0 15px #D9A299, 0 0 30px #D9A299, 0 0 15px #D9A299;
          }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default Skill;