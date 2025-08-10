import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GiSpades } from "react-icons/gi";
import Bus from "../assets/images/bus.png";
import Vehicle from "../assets/images/vsm.png";
import Book from "../assets/images/bookhub.png";

const projects = [
  { 
    id: 1, 
    img: Bus, 
    title: "BusConnect", 
    description: "Developed Bus Connect – Smart Transit System for Chennai’s MTC buses, integrating AI, GPS, and YOLO-based crowd detection to enable real-time tracking, smart ticketing, route suggestions, and AI-powered violence detection, enhancing commuter safety, efficiency, and overall service reliability.",
    github: "https://github.com/YourUsername/BusConnect"
  },
  { 
    id: 2, 
    img: Book, 
    title: "BookHub", 
    description: "Developed a Library Management System to streamline e-book borrowing and management. Key features include automated borrowing and returns, a comprehensive history of borrowed books, and premium book purchasing. The system ensures efficient management and accessibility of digital reading materials.",
    github: "https://github.com/ashniv07/bookHub.git"
  },
  { 
    id: 3, 
    img: Vehicle, 
    title: "VehicleServiceManagement", 
    description: "Developed a Vehicle Service Management System enabling seamless service booking, progress tracking, and feedback for vehicle owners and mechanics.",
    github: "https://github.com/Port-Hub/vehicle-service-be.git"
  }
];

function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { triggerOnce: false, amount: 0.3 });

  const [scrollX, setScrollX] = useState(0);
  const cardWidth = 320;
  const totalWidth = projects.length * cardWidth;
  const visibleWidth = typeof window !== "undefined" ? window.innerWidth - 80 : 0;
  const maxScroll = Math.max(totalWidth - visibleWidth, 0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setScrollX((prev) => {
        const next = prev + cardWidth;
        return next > maxScroll ? 0 : next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView, maxScroll]);

  return (
    <div
      ref={containerRef}
      className="relative font-mono bg-[#ede5d9] min-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Animated Title */}
      <motion.div
        className="flex items-center gap-4 mt-10"
        initial={{ y: -100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <GiSpades size={50} className="text-black" />
        <h1 className="font-bold text-5xl">My Projects</h1>
        <GiSpades size={50} className="text-black" />
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="mt-8 flex gap-30 px-10 cursor-grab active:cursor-grabbing"
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: -scrollX, opacity: 1 } : { x: 200, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        drag="x"
        dragConstraints={{ left: -maxScroll, right: 0 }}
        dragElastic={0.2}
      >
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="relative mt-10 w-[350px] h-[450px] cursor-pointer perspective rounded-xl transition-transform duration-300 hover:scale-105 animate-black-glow">
              <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group hover:rotate-y-180">
                
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white flex flex-col">
                  <div className="h-[100%] ml-4 mt-7 overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-80 h-80 object-fit" />
                  </div>
                  <div className="flex-1 flex items-center justify-center p-5 bg-white">
                    <h2 className="text-lg font-bold text-black text-center">{project.title}</h2>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full bg-[#282120] text-white flex flex-col justify-center items-center text-center p-4 rounded-xl rotate-y-180 backface-hidden">
                  <h2 className="text-[25px] font-bold">{project.title}</h2>
                  <p className="text-[15px] mt-2">{project.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </motion.div>

      <style>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .group:hover .hover\\:rotate-y-180 { transform: rotateY(180deg); }

        @keyframes blackGlow {
          0%, 100% {
            box-shadow: 0 0 10px #000000, 0 0 20px #000000, 0 0 10px #000000;
          }
          50% {
            box-shadow: 0 0 15px #000000, 0 0 25px #000000, 0 0 15px #000000;
          }
        }
        .animate-black-glow {
          animation: blackGlow 2s infinite alternate;
          border: 4px solid transparent;
          border-radius: 1rem;
        }
      `}</style>
    </div>
  );
}

export default Projects;
