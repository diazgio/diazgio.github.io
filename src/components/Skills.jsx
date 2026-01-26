import React from 'react';
import { motion } from 'framer-motion';
import { SiOpenai, SiPython } from 'react-icons/si';
import { FaRobot, FaMicrochip } from 'react-icons/fa';
import { SectionTitle, GlassCard } from './ui';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import RubyonRails from '../assets/rubyonrails.png';
import Docker from '../assets/docker.png';
import GitHub from '../assets/github.png';
import Postgresql from '../assets/postgresql.png';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: HTML, level: 95, isImage: true },
    { name: 'CSS', icon: CSS, level: 90, isImage: true },
    { name: 'JavaScript', icon: JavaScript, level: 90, isImage: true },
    { name: 'React', icon: ReactImg, level: 85, isImage: true },
    { name: 'Ruby on Rails', icon: RubyonRails, level: 85, isImage: true },
    { name: 'PostgreSQL', icon: Postgresql, level: 80, isImage: true },
    { name: 'GitHub', icon: GitHub, level: 90, isImage: true },
    { name: 'Docker', icon: Docker, level: 75, isImage: true },
  ];

  const aiSkills = [
    { name: 'Claude AI', icon: FaRobot, level: 95, color: 'text-orange-400' },
    { name: 'Cursor IDE', icon: FaMicrochip, level: 95, color: 'text-cyan-400' },
    { name: 'Google Cloud Vision', icon: SiOpenai, level: 85, color: 'text-blue-400' },
    { name: 'LLM Integration', icon: SiPython, level: 90, color: 'text-purple-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div name='skills' className='w-full py-20 relative'>
      {/* Background Shape */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl' />

      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center w-full h-full relative z-10'>
        <SectionTitle
          title='Skills'
          subtitle='Technologies and tools I work with'
        />

        {/* AI & LLM Skills - Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <h3 className='text-xl font-semibold text-text-primary mb-6 flex items-center gap-2'>
            <FaRobot className='text-accent' />
            AI & LLM Expertise
          </h3>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {aiSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className='p-6 group border-accent/20 hover:border-accent/50'>
                  <div className='flex flex-col items-center'>
                    <div className='relative mb-4'>
                      <skill.icon
                        className={`w-14 h-14 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                      />
                      <motion.div
                        className='absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        style={{ transform: 'scale(1.5)' }}
                      />
                    </div>
                    <h3 className='text-text-primary font-semibold mb-3 text-center'>{skill.name}</h3>
                    <div className='w-full h-2 bg-white/5 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='h-full bg-gradient-to-r from-orange-500 to-purple-500 rounded-full'
                      />
                    </div>
                    <span className='text-sm text-text-secondary mt-2'>{skill.level}%</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Web Development Skills */}
        <h3 className='text-xl font-semibold text-text-primary mb-6'>Web Development</h3>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <GlassCard className='p-6 group'>
                <div className='flex flex-col items-center'>
                  <div className='relative mb-4'>
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className='w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110'
                    />
                    <motion.div
                      className='absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      style={{ transform: 'scale(1.5)' }}
                    />
                  </div>
                  <h3 className='text-text-primary font-semibold mb-3'>{skill.name}</h3>

                  {/* Progress Bar */}
                  <div className='w-full h-2 bg-white/5 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className='h-full bg-gradient-to-r from-accent to-accent-light rounded-full'
                    />
                  </div>
                  <span className='text-sm text-text-secondary mt-2'>{skill.level}%</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
