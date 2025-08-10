import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTelephoneInboundFill } from 'react-icons/bs';

function Contact() {
  return (
    <div className="bg-[#ede5d9] min-h-screen flex items-center justify-center px-4 py-8 md:py-16">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Mobile Layout (Stack vertically) */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          {/* Phone Icon with Text */}
          <div className="relative flex flex-col items-center text-center">
            <BsTelephoneInboundFill className="text-black text-[80px] sm:text-[100px] drop-shadow-[0_0_25px_rgba(128,128,128,0.8)] mb-4" />
            <span className="text-black font-mono text-lg sm:text-xl font-bold">Contact Me @</span>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-6 font-mono w-full max-w-lg">
            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <FaLinkedin className="text-black font-bold text-2xl sm:text-3xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)] flex-shrink-0" />
              <a
                href="https://www.linkedin.com/in/ashley-nivedha-johnson"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-800 hover:underline text-sm sm:text-base break-all"
              >
                www.linkedin.com/in/ashley-nivedha-johnson
              </a>
            </div>

            {/* Gmail */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <SiGmail className="text-black font-bold text-2xl sm:text-3xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)] flex-shrink-0" />
              <span className="font-bold text-gray-800 text-sm sm:text-base break-all">ashleynivedha@gmail.com</span>
            </div>

            {/* GitHub */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <FaGithub className="text-black font-bold text-2xl sm:text-3xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)] flex-shrink-0" />
              <a
                href="https://github.com/ashniv07"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-800 hover:underline text-sm sm:text-base break-all"
              >
                github.com/ashniv07
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Side by side) */}
        <div className="hidden md:flex items-center justify-center gap-16 lg:gap-24">
          
          {/* Left - Phone Icon with Text */}
          <div className="relative flex items-center justify-center flex-1">
            <div className="flex flex-col items-center">
              <BsTelephoneInboundFill className="text-black text-[160px] lg:text-[200px] xl:text-[220px] drop-shadow-[0_0_25px_rgba(128,128,128,0.8)] mb-4" />
              <span className="text-black font-mono text-2xl lg:text-3xl font-bold text-center">Contact Me @</span>
            </div>
          </div>

          {/* Right - Contact Links */}
          <div className="flex flex-col gap-8 lg:gap-10 font-mono flex-1 max-w-lg">
            {/* LinkedIn */}
            <div className="flex items-center gap-4 lg:gap-6">
              <FaLinkedin className="text-black font-bold text-3xl lg:text-4xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)] flex-shrink-0" />
              <a
                href="https://www.linkedin.com/in/ashley-nivedha-johnson"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-800 hover:underline text-base lg:text-lg break-all hover:text-[#0077b5] transition-colors"
              >
                www.linkedin.com/in/ashley-nivedha-johnson
              </a>
            </div>

            {/* Gmail */}
            <div className="flex items-center gap-4 lg:gap-6">
              <SiGmail className="text-black font-bold text-3xl lg:text-4xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)] flex-shrink-0" />
              <span className="font-bold text-gray-800 text-base lg:text-lg break-all">ashleynivedha@gmail.com</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 lg:gap-6">
              <FaGithub className="text-black font-bold text-3xl lg:text-4xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)] flex-shrink-0" />
              <a
                href="https://github.com/ashniv07"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-800 hover:underline text-base lg:text-lg break-all hover:text-[#333] transition-colors"
              >
                github.com/ashniv07
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;