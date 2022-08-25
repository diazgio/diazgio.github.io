import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#D2D621]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Giordano Díaz
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m working in
          pimentaGroup company as a full-stack web applications.
        </p>
        <li>
          <Link to='about' className='text-white group w-40 hover:w-[162px] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#D2D621] hover:border-[#D2D621] hover:font-bold'>
            View Work
            <span className='group-hover:rotate-90 group-hover:translate-y-[-5px] duration-300 group-hover:text-white'>
              <BsFillArrowRightCircleFill className='ml-3'/>
            </span>
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Home;