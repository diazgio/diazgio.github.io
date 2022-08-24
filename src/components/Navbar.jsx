import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const mailer = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&fs=1&to=diazgiordano@gmail.com'
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='logo' style={{width: '80px'}} />
      </div>

      {/* menu */}
      
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={toggle} className='md:hidden z-10'>
        {!isOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!isOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={toggle} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={toggle} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={toggle} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={toggle} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={toggle} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0966C2]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/giordano-diaz/" target='_blank' rel="noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24292F]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/diazgio" target='_blank' rel="noreferrer">
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc1b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href={mailer} target='_blank' rel="noreferrer">
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1-JEXHwn9AN5Y2CP2xjZbnEhlBadd5arE/view?usp=sharing" target="_blank" rel="noreferrer">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar;