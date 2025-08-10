import React, { useRef } from 'react';
import Img from '../assets/images/main-img.png';
import Header from '../components/Header';
import { motion, useInView } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Skill from './Skill';
import Contact from './Contact';

const letters = [
  { char: 'P', style: "absolute -rotate-[20deg] top-18 right-0 font-bold font-sans text-[167px]" },
  { char: 'O', style: "absolute top-[3.75rem] -rotate-[-2.6deg] left-0 font-sans text-[85px]" },
  { char: 'R', style: "absolute top-0 left-[4.5rem] font-bold font-comic text-[112px]" },
  { char: 't', style: "absolute top-[1.25rem] font-bold rotate-[25deg] left-[10rem] font-sans text-8xl" },
  { char: 'f', style: "absolute top-[3.75rem] left-[13.75rem] rotate-[20deg] font-sans text-[88px]" },
  { char: 'o', style: "absolute top-[7.5rem] left-[16.25rem] font-comic text-[70px]" },
  { char: 'l', style: "absolute top-[7.5rem] left-[20rem] font-comic text-[70px]" },
  { char: 'i', style: "absolute top-[7.5rem] left-[22.25rem] font-comic text-[70px]" },
  { char: 'O', style: "absolute top-[2.5rem] left-[23.75rem] font-comic text-[164px]" },
];

function Home() {
  const homeRef = useRef(null);
  const isInView = useInView(homeRef, { triggerOnce: false, amount: 0.3 });

  return (
    <div>
      <Header />

      {/* Home Section */}
      <div
        id="home-section"
        ref={homeRef}
        className="bg-[#ede5d9] flex justify-center items-center p-12"
      >
        <div className="relative h-screen">
          {/* Image with bounce */}
          <motion.img
            className="relative mt-30 z-20"
            src={Img}
            alt="Ashley Johnson"
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 1 }}
          />

          {/* Letters container */}
          <div className="absolute top-10 left-10 z-10">
            {letters.map((letter, index) => (
              <motion.p
                key={index}
                className={letter.style}
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: isInView ? 0.8 + index * 0.15 : 0
                }}
              >
                {letter.char}
              </motion.p>
            ))}
          </div>

          {/* Name text */}
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: isInView ? 0.8 + letters.length * 0.15 + 0.3 : 0
            }}
            className="absolute  left-[23.75rem] top-[20.75rem] font-bold text-[20px] font-serif text-[#D9A299] whitespace-nowrap"
          >
            Ashley Nivedha Johnson
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <div id="about-section" className="bg-[#282120] h-screen">
        <About />
      </div>

      <div id="projects-section" className=" h-screen">
        <Projects />
        </div>

        <div id="skills-section" className=" h-screen">
          <Skill />
          </div>

          <div id="contact-section" className="bg-[#ede5d9] ">
          <Contact />
          </div>
    </div>
  );
}

export default Home;
