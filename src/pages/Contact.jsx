import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTelephoneInboundFill } from 'react-icons/bs';

function Contact() {
  return (
    <div className="bg-[#ede5d9] p-30 flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-5xl">

        {/* Left - Phone Icon */}
        <div className="relative flex items-center justify-center md:justify-start w-full md:w-1/2">
          <BsTelephoneInboundFill className="text-black text-[220px] drop-shadow-[0_0_25px_rgba(128,128,128,0.8)]" />
          <span className="absolute text-black font-mono text-3xl ml-50 font-bold">Contact Me @</span>
        </div>

        {/* Right - Icons with Links */}
        <div className="flex flex-col gap-10 font-mono w-full md:w-1/2 ml-10">
          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-black font-bold text-4xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]" />
            <a
              href="https://www.linkedin.com/in/ashley-nivedha-johnson"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-800 hover:underline"
            >
              www.linkedin.com/in/ashley-nivedha-johnson
            </a>
          </div>

          {/* Gmail */}
          <div className="flex items-center gap-4">
            <SiGmail className="text-black font-bold text-4xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]" />
            <span className="font-bold text-gray-800">ashleynivedha@gmail.com</span>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <FaGithub className="text-black font-bold text-4xl drop-shadow-[0_0_15px_rgba(0,0,0,0.6)]" />
            <a
              href="https://github.com/ashniv07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-800 hover:underline"
            >
              github.com/ashniv07
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
