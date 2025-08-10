import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='bg-[#ede5d9] fixed top-0 left-0 right-0 z-30 '>
      <ul className="flex ml-[100px] gap-[250px] list-none p-5 mt-5 ">
        <li><button onClick={() => scrollToSection('home-section')} className="font-bold cursor-pointer hover:text-[#D9A299] z-50 transition-colors">Home</button></li>
        <li><button onClick={() => scrollToSection('about-section')} className="font-bold text-[#D9A299] cursor-pointer hover:text-black transition-colors">About</button></li>
        <li><button onClick={() => scrollToSection('projects-section')} className="font-bold cursor-pointer hover:text-[#D9A299] transition-colors">Projects</button></li>
        <li><button onClick={() => scrollToSection('skills-section')} className="font-bold text-[#D9A299] cursor-pointer hover:text-black transition-colors">Skills</button></li>
        <li><button onClick={() => scrollToSection('contact-section')} className="font-bold cursor-pointer hover:text-[#D9A299] transition-colors">Contact</button></li>
      </ul>
    </div>
  )
}
export default Header;
