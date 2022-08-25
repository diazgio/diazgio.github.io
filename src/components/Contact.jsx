import React from 'react';
import Yo from '../assets/yo.jpeg';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  const mailer = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&fs=1&to=diazgiordano@gmail.com'

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/ab426fe5-1e0f-4e35-b9a1-dc493b121b93" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#D2D621] text-gray-300'>Contact</p>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-8'>
          <div>
            <p className='text-gray-300 py-4 mb-4'>
              Submit the form below or contact me through my social networks or by sending me an email:
            </p>
            <div className='flex flex-col lg:hidden '>
              <div className='flex mb-4'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/giordano-diaz/" target='_blank' rel="noreferrer">
                  <FaLinkedin size={30} />
                </a>

                <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/diazgio" target='_blank' rel="noreferrer">
                  <FaGithub size={30} />
                </a>
              </div>

              <div className='flex'>
                <a className='flex items-center w-full text-gray-300' href={mailer} target='_blank' rel="noreferrer">
                  <HiOutlineMail className='mr-3' size={30} /> Email Me
                </a>

                <a className='flex items-center w-full text-gray-300' href="https://drive.google.com/file/d/1-JEXHwn9AN5Y2CP2xjZbnEhlBadd5arE/view?usp=sharing" target="_blank" rel="noreferrer">
                  <BsFillPersonLinesFill className='mr-3' size={30} /> Resume
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${Yo})` }}
          className='hidden sm:flex sm:h-[250px] shadow-lg shadow-[#040c16] group container rounded-md mx-auto photo-content'>
          </div>
        </div>

        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />

        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>

        <button className='text-white hover:font-bold border-2 hover:bg-[#D2D621] hover:border-[#D2D621] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;