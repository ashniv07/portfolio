import React, { useRef } from 'react';
import Img from '../assets/images/main-img.png';
import Header from '../components/Header';
import { motion, useInView } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Skill from './Skill';
import Contact from './Contact';

const letters = [
  { char: 'P', style: "absolute -rotate-[20deg] top-18 right-0 font-bold font-sans text-[167px] max-lg:text-[120px] max-md:text-[80px] max-sm:text-[60px] max-xs:text-[40px]" },
  { char: 'O', style: "absolute top-[3.75rem] -rotate-[-2.6deg] left-0 font-sans text-[85px] max-lg:text-[60px] max-md:text-[40px] max-sm:text-[30px] max-xs:text-[20px]" },
  { char: 'R', style: "absolute top-0 left-[4.5rem] font-bold font-comic text-[112px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[45px] max-xs:text-[30px]" },
  { char: 't', style: "absolute top-[1.25rem] font-bold rotate-[25deg] left-[10rem] font-sans text-8xl max-lg:text-6xl max-md:text-4xl max-sm:text-3xl max-xs:text-2xl" },
  { char: 'f', style: "absolute top-[3.75rem] left-[13.75rem] rotate-[20deg] font-sans text-[88px] max-lg:text-[60px] max-md:text-[40px] max-sm:text-[30px] max-xs:text-[20px]" },
  { char: 'o', style: "absolute top-[7.5rem] left-[16.25rem] font-comic text-[70px] max-lg:text-[50px] max-md:text-[35px] max-sm:text-[25px] max-xs:text-[15px]" },
  { char: 'l', style: "absolute top-[7.5rem] left-[20rem] font-comic text-[70px] max-lg:text-[50px] max-md:text-[35px] max-sm:text-[25px] max-xs:text-[15px]" },
  { char: 'i', style: "absolute top-[7.5rem] left-[22.25rem] font-comic text-[70px] max-lg:text-[50px] max-md:text-[35px] max-sm:text-[25px] max-xs:text-[15px]" },
  { char: 'O', style: "absolute top-[2.5rem] left-[23.75rem] font-comic text-[164px] max-lg:text-[120px] max-md:text-[80px] max-sm:text-[60px] max-xs:text-[40px]" },
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
        className="bg-[#ede5d9] flex justify-center items-center p-12 min-h-screen max-lg:p-8 max-md:p-4 max-sm:p-2"
      >
        <div className="relative h-screen max-lg:h-auto max-lg:pt-20 max-md:pt-16 max-sm:pt-12">
          {/* Image with bounce */}
          <motion.img
            className="relative mt-30 z-20 max-lg:mt-20 max-lg:w-64 max-lg:h-64 max-md:mt-16 max-md:w-48 max-md:h-48 max-sm:mt-12 max-sm:w-32 max-sm:h-32 max-xs:w-24 max-xs:h-24"
            src={Img}
            alt="Ashley Johnson"
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 1 }}
          />

          {/* Letters container */}
          <div className="absolute top-10 left-10 z-10 max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:mt-8 max-md:mt-6 max-sm:mt-4">
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
            className="absolute left-[23.75rem] top-[20.75rem] font-bold text-[20px] font-serif text-[#D9A299] whitespace-nowrap max-lg:relative max-lg:left-0 max-lg:top-0 max-lg:text-center max-lg:mt-6 max-md:mt-4 max-sm:mt-3 max-sm:text-base max-xs:text-sm"
          >
            Ashley Nivedha Johnson
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <div id="about-section" className="bg-[#282120] h-screen max-lg:min-h-screen">
        <About />
      </div>

      <div id="projects-section" className="h-screen max-lg:min-h-screen">
        <Projects />
        </div>

        <div id="skills-section" className="h-screen max-lg:min-h-screen">
          <Skill />
          </div>

          <div id="contact-section" className="bg-[#ede5d9] max-lg:min-h-screen">
          <Contact />
          </div>
    </div>
  );
}

export default Home;
