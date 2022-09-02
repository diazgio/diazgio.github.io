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
          <p className='text-4xl font-bold inline border-b-4 border-[#75e44f] text-gray-300'>Contact</p>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-8'>
          <div>
            <p className='text-gray-300 py-4 mb-4'>
              Submit the form below or contact me through my social networks or by sending me an email:
            </p>
            <div className='flex flex-col lg:hidden '>
              <div className='flex mb-4'>
                <div className='flex items-center w-1/2'>
                  <a className='flex items-center justify-center text-gray-300 mr-3 bubble' href="https://www.linkedin.com/in/giordano-diaz/" target='_blank' rel="noreferrer">
                    <FaLinkedin size={30} />
                  </a>
                  <span className='text-gray-300'>LinkedIn</span>
                </div>

                <div className='flex items-center w-1/2'>
                  <a className='flex items-center justify-center text-gray-300 mr-3 bubble' href="https://github.com/diazgio" target='_blank' rel="noreferrer">
                    <FaGithub size={30} />
                  </a>
                  <span className='text-gray-300'>GitHub</span>
                </div>
              </div>

              <div className='flex'>
                <div className='flex items-center w-1/2'>
                  <a className='flex items-center justify-center text-gray-300 mr-3 bubble' href={mailer} target='_blank' rel="noreferrer">
                    <HiOutlineMail size={30} />
                  </a>
                  <span className='text-gray-300'>Email Me</span>
                </div>

                <div className='flex items-center w-1/2'>
                  <a className='flex items-center justify-center text-gray-300 mr-3 bubble' href="https://drive.google.com/file/d/1-JEXHwn9AN5Y2CP2xjZbnEhlBadd5arE/view?usp=sharing" target="_blank" rel="noreferrer">
                    <BsFillPersonLinesFill size={30} />
                  </a>
                  <span className='text-gray-300'>Resume</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${Yo})` }}
          className='hidden sm:flex sm:h-[250px] shadow-lg shadow-[#040c16] group container rounded-md mx-auto photo-content'>
          </div>
        </div>

        <div className="inputBox w-full">
          <input className='p-2' type="text" name='name' required="required" />
          <span>Full Name</span>
        </div>

        <div className="inputBox w-full my-4">
          <input className='p-2 bg-[#ccd6f6]' type="email" name='email' required="required" />
          <span>Email</span>
        </div>

        <div className="inputBox w-full">
          <textarea className='bg-[#323E55] p-2' name="message" rows="10" required="required"></textarea>
          <span>Message</span>
        </div>

        <button className='text-white hover:font-bold border-2 hover:bg-[#75e44f] hover:border-[#75e44f] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;