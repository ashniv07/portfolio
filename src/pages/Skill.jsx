import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Js from "../assets/images/js.png";
import Css from "../assets/images/css.png";
import Html from "../assets/images/html.png";
import Re from "../assets/images/react.png";
import Docker from "../assets/images/docker.png";
import Sp from "../assets/images/sp.png";
import Github from "../assets/images/github.png";
import Java from "../assets/images/java.png";
import Lang from "../assets/images/lang.png"; // new
import Figma from "../assets/images/figma.png";     // new

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
      className="bg-[#282120] min-h-screen flex items-center justify-center px-20 relative overflow-hidden"
    >
      <div className="flex items-center mt-15 gap-30">
        {/* Title */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
        >
          <h1 className="text-white font-mono font-bold text-9xl tracking-widest -rotate-90 origin-center">
            SKILLS
          </h1>
        </motion.div>

        {/* Glowing skill icons */}
        <div className="grid grid-cols-4 gap-15">
          {skillImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl w-35 h-35 overflow-hidden border-4 border-transparent animate-glow"
              style={{ borderRadius: "1rem" }}
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

      {/* Glow effect */}
      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px #D9A299, 0 0 20px #D9A299, 0 0 10px #D9A299;
          }
          50% {
            box-shadow: 0 0 10px #D9A299, 0 0 30px #D9A299, 0 0 10px #D9A299;
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
