import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { SectionTitle, GlassCard } from './ui';

const Timeline = () => {
  const experiences = [
    {
      year: 'May 2025 - Present',
      title: 'Full-Stack Developer',
      company: 'OfAshAndFire',
      location: 'USA, Remote',
      description: 'Developing healthcare applications for the medical industry in the US. Working with Ruby on Rails 8, React, TypeScript, and deploying to AWS using Kamal. Implementing TDD methodology and strict API protocols for patient data management.',
      icon: FaBriefcase,
      type: 'work',
      featured: true,
    },
    {
      year: 'Dec 2024 - May 2025',
      title: 'Full-Stack Developer',
      company: 'OutCode',
      location: 'USA, Remote',
      description: 'Developed scalable applications with best practices for various clients. Contributed quality code across different work teams with efficient and disciplined work methodology.',
      icon: FaBriefcase,
      type: 'work',
    },
    {
      year: 'July - Oct 2024',
      title: 'Full-Stack Developer',
      company: 'The Flock',
      location: 'Argentina, Remote',
      description: 'Built a hybrid monolithic and API application for diversity training through trivia-based video games. Implemented admin flows, company dashboards, and user profiles with React frontend.',
      icon: FaBriefcase,
      type: 'work',
    },
    {
      year: 'Aug 2022 - Mar 2024',
      title: 'Tech Lead Full-Stack Developer',
      company: 'Picap',
      location: 'Colombia, Remote',
      description: 'Led a team of 8 developers (4 frontend, 4 backend) building features for transport platform using Ruby on Rails and React. Managed code with Bitbucket Pipeline and created new endpoints for data management.',
      icon: FaUsers,
      type: 'work',
    },
    {
      year: 'May 2021 - Aug 2022',
      title: 'Full-Stack Developer',
      company: 'PimentaGroup',
      location: 'Germany, Remote',
      description: 'Created data management systems, improved user experience through layout modifications, and optimized performance by updating libraries and creating new API endpoints.',
      icon: FaBriefcase,
      type: 'work',
    },
    {
      year: '2020',
      title: 'Full Stack Web Development',
      company: 'Microverse',
      location: 'Remote',
      description: 'Completed 1300+ hours mastering algorithms, data structures, and full-stack development. Built 30+ projects with Ruby, Rails, JavaScript, React, and Redux. Also served as a mentor for junior developers.',
      icon: FaGraduationCap,
      type: 'education',
    },
  ];

  return (
    <div name='timeline' className='w-full py-20 relative'>
      {/* Background Shapes */}
      <div className='absolute top-40 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl' />
      <div className='absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl' />

      <div className='max-w-[1000px] mx-auto px-8 relative z-10'>
        <SectionTitle
          title='Experience'
          subtitle='My professional journey and key milestones'
        />

        <div className='relative'>
          {/* Vertical Line */}
          <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-accent-light to-purple-500' />

          {/* Timeline Items */}
          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Node */}
                <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10'>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 bg-primary border-4 ${exp.featured ? 'border-orange-500' : 'border-accent'} rounded-full flex items-center justify-center shadow-glow`}
                  >
                    <exp.icon className={exp.featured ? 'text-orange-500' : 'text-accent'} size={18} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 pl-16 md:pl-0' : 'md:pl-16 pl-16'}`}>
                  <GlassCard className={`p-6 ${exp.featured ? 'border-orange-500/30' : ''}`}>
                    <div className='flex flex-wrap items-center gap-2 mb-3'>
                      <span className={`inline-block px-3 py-1 text-xs ${exp.featured ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 'bg-accent/10 text-accent border-accent/20'} rounded-full border`}>
                        {exp.year}
                      </span>
                      {exp.featured && (
                        <span className='px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-full'>
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className='text-xl font-bold text-text-primary mb-1'>
                      {exp.title}
                    </h3>
                    <p className='text-accent font-medium mb-1'>{exp.company}</p>
                    <p className='text-text-secondary/60 text-sm mb-3'>{exp.location}</p>
                    <p className='text-text-secondary text-sm leading-relaxed'>
                      {exp.description}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
