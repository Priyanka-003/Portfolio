import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import Image from 'next/image';
import logo from'../../public/images/photo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {
  
    useEffect(() => {
    
      gsap.to(".photo", {
        y: 10, 
        duration: 2, 
        yoyo: true, 
        repeat: -1, 
        ease: "power1.inOut", 
      });
  
    
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        offset: 50, 
      });
  
    }, []);
  return (
    <>
       
    
       <div className="flex flex-col-reverse md:flex-row bg-slate-100 items-center">
      
      <div className="flex flex-col items-center md:items-start m-8 md:m-32 space-y-5" data-aos="fade-up">
        <p className="max-w-64 rounded-sm text-xl text-white text-center md:text-left p-2 bg-[#c0a631]">
          Priyanka Saravanan
        </p>
        <div className="flex space-x-2 items-center">
          <h3 className="text-3xl md:text-4xl">I &aops;s m</h3>
          <h3 className="text-3xl md:text-4xl text-sky-300">Developer</h3>
        </div>
        <p className="text-center md:text-left text-lg max-w-[300px] md:max-w-[630px]">
          Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.
        </p>
        <div className="text-2xl my-3 flex space-x-3">
          <Link href="https://www.linkedin.com/in/priyanka-saravanan-9643a2283">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/Priyanka-003">
            <FaSquareGithub />
          </Link>
          <Link href="tel:8807158031">
            <MdAddIcCall />
          </Link>
          <Link href="mailto:priyankacse2003@gmail.com">
            <IoMail />
          </Link>
        </div>
      </div>

      
      <div className="m-8 md:m-32" data-aos="fade-up">
        <Image src={logo} width={200} height={200} className="rounded-full w-48 h-48 photo" alt="Profile Picture" />
      </div>
    </div>
           
    </>
  )
}

export default Home
