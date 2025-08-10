import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home-section', label: 'Home', color: 'text-black hover:text-[#D9A299]' },
    { id: 'about-section', label: 'About', color: 'text-[#D9A299] hover:text-black' },
    { id: 'projects-section', label: 'Projects', color: 'text-black hover:text-[#D9A299]' },
    { id: 'skills-section', label: 'Skills', color: 'text-[#D9A299] hover:text-black' },
    { id: 'contact-section', label: 'Contact', color: 'text-black hover:text-[#D9A299]' }
  ];

  return (
    <div className='bg-[#ede5d9] font-mono font-bold fixed top-0 left-0 right-0 z-30 shadow-md'>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center items-center gap-8 lg:gap-16 xl:gap-24 list-none py-6 px-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button 
              onClick={() => scrollToSection(item.id)} 
              className={`font-bold cursor-pointer transition-colors duration-300 text-sm lg:text-base xl:text-lg ${item.color}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Header */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div className="text-lg sm:text-xl font-bold text-[#D9A299]">Portfolio</div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none p-2 hover:bg-[#D9A299] hover:text-white rounded-lg transition-colors duration-300"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#ede5d9] border-t border-[#D9A299] px-4 py-2">
          <ul className="list-none space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)} 
                  className={`w-full text-left font-bold cursor-pointer transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-[#D9A299] hover:text-white ${item.color}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-[-1] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default Header;