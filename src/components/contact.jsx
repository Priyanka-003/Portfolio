import React from 'react'
import { FiCornerRightDown } from "react-icons/fi";
import { MdAddIcCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';
import 'aos/dist/aos.css'
const contact = () => {
  return (
    <>

    
    <div className="flex flex-col text-center" data-aos="fade-up">
        <h1 className="text-2xl mt-10 font-bold">Get in touch</h1>
        <h3 className="text-xl text-blue-200">
          Do you have a project in your mind? Contact me here
        </h3>
      </div>

      
      <div className="flex flex-col lg:flex-row justify-evenly items-center mt-10 space-y-10 lg:space-y-0 lg:space-x-10" data-aos="fade-up">
        
        <div className="bg-[#00c9ff] hover:bg-[#ededed] p-6 rounded-xl shadow-md text-white hover:text-black w-[90%] sm:w-[70%] lg:max-w-[500px] h-auto flex flex-col items-center text-center">
          <p className="mb-6 text-2xl flex items-center justify-center">
            Find Me <FiCornerRightDown className="ml-2" />
          </p>
          <Link href="mailto:priyankacse2003@gmail.com" className="flex items-center justify-center mb-4">
            <IoMail className="mr-2" /> priyankacse2003@gmail.com
          </Link>
          <Link href="tel:8807158031" className="flex items-center justify-center">
            <MdAddIcCall className="mr-2" /> 8807158031
          </Link>
        </div>

        
        <div className="w-[90%] sm:w-[70%] lg:w-[50%] space-y-4" data-aos="fade-up">
         
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-[#aaa] p-2 w-full rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-[#aaa] p-2 w-full rounded-lg"
            />
          </div>
          
          <textarea
            placeholder="Message"
            className="border-2 border-[#aaa] p-2 w-full h-[100px] rounded-lg"
          />
          
          <button className="rounded-lg p-2 w-full sm:w-auto flex justify-center items-center text-white bg-[#00c9ff]">
            Send <FaLocationArrow className="ml-2" />
          </button>
        </div>
      </div>


    </>
  )
}

export default contact
