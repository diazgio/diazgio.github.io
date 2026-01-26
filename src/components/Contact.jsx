import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SectionTitle, GlassCard, GlassButton } from './ui';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const mailer = 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&fs=1&to=diazgiordano@gmail.com';

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/giordano-diaz/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/diazgio', label: 'GitHub' },
    { icon: HiOutlineMail, href: mailer, label: 'Email' },
    { icon: BsFillPersonLinesFill, href: '/resume.pdf', label: 'Resume', download: 'Giordano_Diaz_Resume.pdf' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/ab426fe5-1e0f-4e35-b9a1-dc493b121b93', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div name='contact' className='w-full min-h-screen py-20 relative'>
      {/* Background Shapes */}
      <div className='absolute top-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl' />

      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center w-full h-full relative z-10'>
        <SectionTitle
          title='Get In Touch'
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold text-text-primary mb-4'>
              Let's Connect
            </h3>
            <p className='text-text-secondary mb-8 leading-relaxed'>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through the form or connect with me on social media.
            </p>

            {/* Social Links */}
            <div className='grid grid-cols-2 gap-4'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.download ? '_self' : '_blank'}
                  rel='noreferrer'
                  download={social.download || undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='group'
                >
                  <GlassCard className='p-4 flex items-center gap-4'>
                    <div className='p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors'>
                      <social.icon className='text-accent' size={24} />
                    </div>
                    <span className='text-text-primary font-medium group-hover:text-accent transition-colors'>
                      {social.label}
                    </span>
                  </GlassCard>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className='p-8'>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='text-center py-12'
                >
                  <div className='w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <FaPaperPlane className='text-accent' size={24} />
                  </div>
                  <h3 className='text-2xl font-bold text-text-primary mb-2'>
                    Message Sent!
                  </h3>
                  <p className='text-text-secondary'>
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label htmlFor='name' className='block text-text-secondary text-sm mb-2'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className='glass-input'
                      placeholder='John Doe'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-text-secondary text-sm mb-2'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className='glass-input'
                      placeholder='john@example.com'
                    />
                  </div>

                  <div>
                    <label htmlFor='message' className='block text-text-secondary text-sm mb-2'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows='5'
                      className='glass-input resize-none'
                      placeholder='Tell me about your project...'
                    />
                  </div>

                  <GlassButton
                    type='submit'
                    variant='primary'
                    className='w-full'
                    disabled={isSubmitting}
                    icon={FaPaperPlane}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </GlassButton>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
