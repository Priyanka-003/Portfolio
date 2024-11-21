import React, { useState } from 'react';
import Link from 'next/link';
import { TfiDownload } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi"; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[#efede6] px-4 md:px-10 py-4 fixed top-0 z-50 w-full">
        
    
        <div className="w-20 h-20 md:w-24 md:h-20 flex md:pt-6">
          <p className="text-5xl text-[#2bbcca]">Priya</p>
        </div>

     
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-950 fixed right-4 top-4 z-50">
            <FiMenu size={24} className={`${isOpen ? 'rotate-90 text-orange-400' : ''} transition-transform duration-300`} />
          </button>
        </div>


        <div className={`flex-col md:flex-row ${isOpen ? "flex" : "hidden"} md:flex items-center justify-center md:justify-center w-full`}>
          <ul className="flex flex-col md:flex-row text-blue-950 gap-y-4 md:gap-x-16 mt-4 md:mt-0 md:items-center md:fixed">
            <li className="hover:text-orange-400 text-lg">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:text-orange-400 text-lg">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-orange-400 text-lg">
              <Link href="#project">Project</Link>
            </li>
            <li className="hover:text-orange-400 text-lg">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

        
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 md:ml-auto">
            <button className="rounded-2xl border-2 bg-blue-950 text-white px-4 py-2 hover:text-orange-400">
              <Link href="/images/Priyanka S.resume.pdf" className="inline-flex items-center">
                Download CV <TfiDownload className="ml-2" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;