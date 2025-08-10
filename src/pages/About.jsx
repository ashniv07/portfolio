import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  return (
    <div ref={ref} className="relative bg-[#282120] h-screen">
      
      {/* "About" */}
      <motion.h1
        className="absolute text-[160px] pt-40 font-mono font-bold left-230 text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 62,
          bounce: 1,
        }}
      >
        About
      </motion.h1>

      {/* "Me" */}
      <motion.h3
        className="absolute text-[120px] pt-90 font-bold font-mono left-300 text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 12,
          bounce: 0.4,
          delay: 0.25 // small delay so "Me" comes after "About"
        }}
      >
        Me
      </motion.h3>

      {/* Glowing Box */}
      <div
        className="relative box-content w-[500px] h-[550px] left-50 top-20 p-6 border-4 border-transparent animate-pink-glow rounded-xl"
      >
        <p className="text-justify font-mono font-bold text-white text-[35px] ">
          Hi, This is Ashley.<br/> Welcome to my space.<br /></p>
          <p className="text-justify font-mono mt-10 text-white text-[20px] ">
          I’m just a <b>developer</b> who loves blending code with design to create things that are both functional and visually engaging. <b>Design</b> isn’t just a skill for me; it’s a way to make technology more meaningful and enjoyable.
          <br/><br/>
Right now, I’m exploring <b>AI</b> and all its possibilities, always curious about how technology can be used in new and exciting ways. Learning is a big part of my journey, and I’m passionate about growing my skills while enjoying the process.
         
        </p>
      </div>

      {/* Pink Glow Animation */}
      <style>{`
        @keyframes pinkGlow {
          0%, 100% {
            box-shadow: 0 0 10px #D9A299, 0 0 20px #D9A299, 0 0 10px #D9A299;
          }
          50% {
            box-shadow: 0 0 10px #D9A299, 0 0 10px #D9A299, 0 0 10px #D9A299;
          }
        }
        .animate-pink-glow {
          animation: pinkGlow 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default About;
