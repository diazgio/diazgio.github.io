import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionTitle, GlassCard, GlassButton } from './ui';
import DashBoard from '../assets/dashboard_customers.png';
import CosplayProject from '../assets/cosplay-project.png';
import PokemonProject from '../assets/pokemon-project.png';
import ButacaProject from '../assets/butaca-project.png';
import ConsultlyProject from '../assets/consultly-project.png';

const Work = () => {
  const projects = [
    {
      title: 'Admin Dashboard',
      description: 'A modern admin dashboard built with React featuring real-time data visualization, user management, and responsive design.',
      image: DashBoard,
      tags: ['React', 'Material UI', 'Charts'],
      demo: 'https://gio-admin-dashboard.vercel.app/',
      code: 'https://github.com/diazgio/Dashboard',
      featured: true,
    },
    {
      title: 'Cosplay Shop',
      description: 'E-commerce platform for cosplay enthusiasts with product catalog, shopping cart, and responsive design.',
      image: CosplayProject,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://diazgio.github.io/Cosplay-shop-capstone/',
      code: 'https://github.com/diazgio/Cosplay-shop-capstone',
    },
    {
      title: 'Pokedex Project',
      description: 'Interactive Pokedex application using the PokeAPI to display Pokemon information with search and filter functionality.',
      image: PokemonProject,
      tags: ['React', 'API', 'Redux'],
      demo: 'https://pure-chamber-86282.herokuapp.com/',
      code: 'https://github.com/diazgio/React-Capstone-Catalogue',
    },
    {
      title: 'Butaca VIP',
      description: 'Cinema ticket booking system with seat selection, movie listings, and payment integration.',
      image: ButacaProject,
      tags: ['Ruby on Rails', 'PostgreSQL', 'Stripe'],
      code: 'https://github.com/diazgio/ButacaVip/tree/development',
    },
    {
      title: 'Consultly',
      description: 'Professional consulting platform connecting experts with clients, featuring scheduling and video calls.',
      image: ConsultlyProject,
      tags: ['Ruby on Rails', 'WebRTC', 'PostgreSQL'],
      code: 'https://github.com/diazgio/Consultly',
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
          subtitle='Check out some of my recent projects'
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <GlassCard className='h-full overflow-hidden group'>
                {/* Image Container */}
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    loading='lazy'
                  />
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
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-text-primary mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-text-secondary text-sm mb-4 line-clamp-2'>
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
