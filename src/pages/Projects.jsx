import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GiSpades } from "react-icons/gi";

const projects = [
  { id: 1, img: "https://via.placeholder.com/300x200", title: "Project One", description: "This is a description of Project One." },
  { id: 2, img: "https://via.placeholder.com/300x200", title: "Project Two", description: "This is a description of Project Two." },
  { id: 3, img: "https://via.placeholder.com/300x200", title: "Project Three", description: "This is a description of Project Three." },
  { id: 4, img: "https://via.placeholder.com/300x200", title: "Project Four", description: "This is a description of Project Four." },
];

function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { triggerOnce: false, amount: 0.3 });

  const [scrollX, setScrollX] = useState(0);
  const cardWidth = 320;
  const totalWidth = projects.length * cardWidth;
  const visibleWidth = typeof window !== "undefined" ? window.innerWidth - 80 : 0;
  const maxScroll = Math.max(totalWidth - visibleWidth, 0);

  // Auto-slide only when in view
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setScrollX(prev => {
        const next = prev + cardWidth;
        return next > maxScroll ? 0 : next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isInView, maxScroll]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#ede5d9] min-h-screen overflow-hidden flex flex-col items-center justify-center"
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
        className="mt-8 flex gap-8 px-10 cursor-grab active:cursor-grabbing"
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: -scrollX, opacity: 1 } : { x: 200, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        drag="x"
        dragConstraints={{ left: -maxScroll, right: 0 }}
        dragElastic={0.2}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative mt-10 w-[300px] h-[400px] cursor-pointer perspective"
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group hover:rotate-y-180">
              {/* Front */}
              <div className="absolute border-black border-2 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Back */}
              <div className="absolute w-full h-full bg-[#282120] text-white flex flex-col justify-center items-center text-center p-4 rounded-xl rotate-y-180 backface-hidden">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <style>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .group:hover .hover\\:rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}

export default Projects;
