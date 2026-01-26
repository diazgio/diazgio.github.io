import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionTitle, GlassCard, GlassButton } from './ui';
import DashBoard from '../assets/dashboard_customers.png';
import CosplayProject from '../assets/cosplay-project.png';

const Work = () => {
  const projects = [
    {
      title: 'Admin Dashboard',
      description: 'Modern admin panel built with React and Syncfusion UI components. Features interactive data visualization with charts and graphs, customer management interface, and responsive multi-page layout with Tailwind CSS styling.',
      image: DashBoard,
      tags: ['React', 'Tailwind CSS', 'Syncfusion', 'Vercel'],
      demo: 'https://gio-admin-dashboard.vercel.app/',
      code: 'https://github.com/diazgio/Dashboard',
      featured: true,
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce application built from scratch with Ruby on Rails. Includes product catalog, shopping cart, user authentication, and payment integration. Containerized with Docker for easy deployment.',
      image: null,
      tags: ['Ruby on Rails', 'PostgreSQL', 'Docker', 'Stimulus'],
      code: 'https://github.com/diazgio/Ecommerce',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Peque in Candy World',
      description: 'Platform video game built with Phaser 3 engine. Players collect stars, climb platforms, and defeat enemies. Features leaderboard integration via external API, retro-style graphics, and engaging sound effects.',
      image: null,
      tags: ['JavaScript', 'Phaser 3', 'Webpack', 'REST API'],
      demo: 'https://sharp-clarke-b3b6a5.netlify.app/',
      code: 'https://github.com/diazgio/JS-Capstone',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cosplay Shop',
      description: 'Responsive e-commerce mockup showcasing modern CSS techniques. Built with HTML5, Sass preprocessor, and Flexbox layouts. Implements UX-focused design principles and code quality standards with StyleLint.',
      image: CosplayProject,
      tags: ['HTML5', 'CSS3', 'Sass', 'Responsive'],
      demo: 'https://diazgio.github.io/Cosplay-shop-capstone/',
      code: 'https://github.com/diazgio/Cosplay-shop-capstone',
    },
    {
      title: 'PetSpa Booking',
      description: 'Pet grooming appointment scheduling application. Features user authentication, appointment management, service catalog, and admin dashboard. Built with Ruby on Rails and containerized with Docker.',
      image: null,
      tags: ['Ruby on Rails', 'PostgreSQL', 'Docker', 'RSpec'],
      code: 'https://github.com/diazgio/Petspa',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Weather & Score App',
      description: 'Real-time application displaying weather forecasts and football match data. Integrates multiple external APIs to fetch and display live information with a clean, user-friendly interface.',
      image: null,
      tags: ['Ruby on Rails', 'REST APIs', 'JavaScript'],
      code: 'https://github.com/diazgio/weather_and_score_app',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div name='work' className='w-full min-h-screen py-20 relative'>
      {/* Background Shapes */}
      <div className='absolute top-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl' />
      <div className='absolute bottom-40 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl' />

      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center w-full h-full relative z-10'>
        <SectionTitle
          title='My Work'
          subtitle='A selection of projects showcasing my skills in full-stack development'
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <GlassCard className='h-full overflow-hidden group'>
                {/* Image Container */}
                <div className='relative h-48 overflow-hidden'>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                      loading='lazy'
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className='text-4xl font-bold text-white/30'>
                        {project.title.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60' />

                  {/* Links on hover */}
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 backdrop-blur-sm'>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noreferrer'
                        className='p-3 bg-accent rounded-full text-white hover:bg-accent-dark transition-colors'
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                    <a
                      href={project.code}
                      target='_blank'
                      rel='noreferrer'
                      className='p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors border border-white/20'
                      aria-label={`View ${project.title} code`}
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className='absolute top-3 right-3 px-2 py-1 bg-accent/90 text-white text-xs font-medium rounded-full'>
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-text-primary mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-text-secondary text-sm mb-4 line-clamp-3'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className='flex justify-center mt-12'
        >
          <GlassButton
            variant='outline'
            href='https://github.com/diazgio?tab=repositories'
            icon={FaGithub}
            iconPosition='left'
          >
            View More on GitHub
          </GlassButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
