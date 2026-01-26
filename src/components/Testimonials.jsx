import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SectionTitle, GlassCard } from './ui';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Project Manager',
      company: 'Tech Solutions Inc.',
      content: "Giordano is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any team.",
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'StartUp Labs',
      content: "Working with Giordano was a fantastic experience. He understood our vision perfectly and delivered a product that exceeded our expectations. Highly recommended!",
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      name: 'Michael Chen',
      role: 'Tech Lead',
      company: 'Digital Agency',
      content: "Giordano's technical skills are impressive, but what sets him apart is his communication and ability to work collaboratively. He's a true professional.",
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div name='testimonials' className='w-full py-20 relative overflow-hidden'>
      {/* Background Shapes */}
      <div className='absolute top-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl' />

      <div className='max-w-[900px] mx-auto px-8 relative z-10'>
        <SectionTitle
          title='Testimonials'
          subtitle='What people say about working with me'
        />

        <div className='relative'>
          {/* Quote Icon */}
          <div className='absolute -top-4 left-8 z-10'>
            <div className='w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center'>
              <FaQuoteLeft className='text-accent' size={24} />
            </div>
          </div>

          {/* Carousel */}
          <GlassCard className='p-8 pt-16 min-h-[300px] relative overflow-hidden'>
            <AnimatePresence mode='wait' custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.4 }}
                className='text-center'
              >
                {/* Avatar */}
                <div className='w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/30'>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Content */}
                <p className='text-text-secondary text-lg leading-relaxed mb-6 italic'>
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <h4 className='text-text-primary font-bold text-lg'>
                  {testimonials[currentIndex].name}
                </h4>
                <p className='text-accent'>
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigate(-1)}
              className='absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full border border-white/10 text-text-secondary hover:text-accent hover:border-accent transition-all'
              aria-label='Previous testimonial'
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={() => navigate(1)}
              className='absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full border border-white/10 text-text-secondary hover:text-accent hover:border-accent transition-all'
              aria-label='Next testimonial'
            >
              <FaChevronRight size={16} />
            </button>
          </GlassCard>

          {/* Dots */}
          <div className='flex justify-center gap-2 mt-6'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
