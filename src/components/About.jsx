import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, GlassCard } from './ui';
import Yo from '../assets/yo.jpeg';

const About = () => {
  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '10+', label: 'Companies Worked' },
  ];

  return (
    <div name='about' className='w-full min-h-screen py-20 relative'>
      {/* Background Shape */}
      <div className='absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2' />

      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center w-full h-full relative z-10'>
        <SectionTitle
          title='About Me'
          subtitle='Get to know more about me and what I do'
          align='left'
        />

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative'
          >
            <div className='relative z-10'>
              <GlassCard className='p-2 w-fit mx-auto lg:mx-0' hover={false}>
                <img
                  src={Yo}
                  alt='Giordano Diaz'
                  className='w-72 h-80 object-cover rounded-xl'
                />
              </GlassCard>
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-xl -z-10'
            />
            <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10' />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className='text-2xl font-bold text-text-primary mb-4'>
              Hi, I'm Giordano!
            </h3>
            <p className='text-text-secondary mb-4 leading-relaxed'>
              I'm a passionate <span className='text-accent font-medium'>Full Stack Developer</span> and{' '}
              <span className='text-accent font-medium'>AI Specialist</span> with expertise in creating modern,
              scalable web applications enhanced with artificial intelligence. I specialize in
              integrating <span className='text-accent font-medium'>LLMs</span>, particularly{' '}
              <span className='text-accent font-medium'>Claude</span>, to build intelligent solutions.
            </p>
            <p className='text-text-secondary mb-6 leading-relaxed'>
              I combine traditional web development with cutting-edge AI technologies to create
              digital experiences that are not only visually stunning but also smart and efficient.
              From React frontends to AI-powered backends, I bring ideas to life with clean,
              maintainable code.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-4 mt-8'>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <GlassCard className='p-4 text-center' hover={false}>
                    <span className='text-3xl font-bold text-accent'>{stat.value}</span>
                    <p className='text-sm text-text-secondary mt-1'>{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
