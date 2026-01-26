import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { GlassButton } from './ui';

const Home = () => {
  return (
    <div name="home" className='w-full min-h-screen relative overflow-hidden'>
      {/* Animated Background Shapes */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className='absolute bottom-40 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl'
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl'
        />
      </div>

      {/* Floating Glass Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='hidden lg:block absolute top-32 right-32 w-20 h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl'
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className='hidden lg:block absolute bottom-40 right-60 w-14 h-14 bg-accent/10 backdrop-blur-md border border-accent/20 rounded-xl rotate-12'
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className='hidden lg:block absolute top-60 left-32 w-16 h-16 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-full'
      />

      {/* Content */}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-screen relative z-10'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-accent font-medium mb-4'
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-5xl sm:text-7xl font-bold text-text-primary mb-4'
        >
          Giordano Díaz
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-3xl sm:text-5xl font-bold mb-6'
        >
          <span className='bg-gradient-to-r from-text-secondary via-accent-light to-accent bg-clip-text text-transparent'>
            Full Stack Developer & AI Specialist
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-text-secondary text-lg max-w-[600px] mb-8 leading-relaxed'
        >
          I'm a full-stack developer and <span className='text-accent font-medium'>AI specialist</span> building
          exceptional digital experiences. I combine modern web technologies with cutting-edge AI solutions,
          specializing in LLMs and Claude integration.
          Currently developing healthcare applications at{' '}
          <span className='text-accent font-medium'>OfAshAndFire</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-wrap gap-4'
        >
          <Link to='work' smooth={true} duration={500}>
            <GlassButton variant='primary' icon={HiArrowNarrowRight}>
              View My Work
            </GlassButton>
          </Link>
          <Link to='contact' smooth={true} duration={500}>
            <GlassButton variant='outline'>
              Get In Touch
            </GlassButton>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='absolute bottom-10 left-1/2 -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='flex flex-col items-center text-text-secondary'
          >
            <span className='text-sm mb-2'>Scroll</span>
            <div className='w-6 h-10 rounded-full border-2 border-text-secondary/50 flex justify-center pt-2'>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className='w-1.5 h-3 bg-accent rounded-full'
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
