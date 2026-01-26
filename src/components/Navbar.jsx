import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const mailer = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&fs=1&to=diazgiordano@gmail.com';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'timeline' },
    { name: 'Skills', to: 'skills' },
    { name: 'Work', to: 'work' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/giordano-diaz/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: 'https://github.com/diazgio', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: HiOutlineMail, href: mailer, label: 'Email', color: 'hover:text-green-400' },
    { icon: BsFillPersonLinesFill, href: '/resume.pdf', label: 'Resume', color: 'hover:text-purple-400' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full h-[90px] flex justify-between items-center px-6 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/80 backdrop-blur-xl border-b border-white/10 shadow-glass'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex items-center justify-center'
        >
          <img src='/gio.png' alt='Giordano Diaz' className='h-28 w-auto object-contain drop-shadow-lg mt-2' />
        </motion.div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-1'>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-accent"
                className='px-4 py-2 text-text-secondary hover:text-accent transition-colors duration-300 cursor-pointer font-medium'
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggle}
          className='md:hidden z-50 p-2 text-text-primary hover:text-accent transition-colors'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-0 right-0 w-full h-screen bg-primary/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden'
            >
              <ul className='flex flex-col items-center gap-8'>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='text-3xl font-semibold'
                  >
                    <Link
                      onClick={toggle}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className='text-text-primary hover:text-accent transition-colors duration-300 cursor-pointer'
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='flex gap-6 mt-12'
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.download ? '_self' : '_blank'}
                    rel='noreferrer'
                    download={social.download || undefined}
                    className={`p-3 bg-white/5 rounded-full border border-white/10 text-text-secondary ${social.color} transition-all duration-300 hover:scale-110 hover:border-accent`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Social Icons Sidebar (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className='hidden lg:flex fixed flex-col top-[35%] left-0 z-40'
      >
        <ul className='flex flex-col gap-2'>
          {socialLinks.map((social, index) => (
            <motion.li
              key={social.label}
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <a
                href={social.href}
                target={social.download ? '_self' : '_blank'}
                rel='noreferrer'
                download={social.download || undefined}
                className='group flex items-center w-[160px] h-[50px] pl-4 ml-[-110px] hover:ml-0 transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent rounded-r-xl'
              >
                <span className='text-text-secondary group-hover:text-accent transition-colors text-sm font-medium'>
                  {social.label}
                </span>
                <social.icon
                  size={24}
                  className='ml-auto mr-4 text-text-secondary group-hover:text-accent transition-colors'
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
