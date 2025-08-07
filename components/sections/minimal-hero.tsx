'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function MinimalHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-6 pt-2 md:pt-0 lg:px-12 relative overflow-hidden'
    >
      {/* Very subtle cursor effect - only render after mount */}
      {mounted && (
        <motion.div
          className='absolute w-64 h-64 bg-gradient-to-r from-foreground/[0.01] to-transparent rounded-full blur-2xl pointer-events-none hidden lg:block'
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: 'spring', damping: 80, stiffness: 100 }}
        />
      )}

      <div className='max-w-5xl w-full relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='space-y-8 lg:space-y-12'
        >
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='flex items-center gap-2 text-sm text-muted-foreground font-mono'
          >
            <MapPin className='h-4 w-4' />
            <span>Based in Dhaka, Bangladesh</span>
          </motion.div>

          {/* Main Content */}
          <div className='space-y-6 lg:space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='text-sm font-mono text-muted-foreground tracking-wider'
            >
              Hello, I&apos;m
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight leading-none'
            >
              <span className='block'>Md. Sazzad</span>
              <span className='block text-muted-foreground'>Hossain</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='space-y-4'
            >
              <div className='text-xl lg:text-3xl text-muted-foreground font-light'>
                Full-Stack Developer
              </div>
              <div className='w-16 h-px bg-foreground' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed space-y-4'
            >
              <p>
                I craft scalable web applications with clean code and thoughtful
                design. Currently building AI-powered solutions and helping
                businesses grow through technology.
              </p>
              <p className='text-sm'>
                2+ years of experience • React, Next.js, TypeScript • Remote
                collaboration specialist
              </p>
            </motion.div>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className='flex flex-col sm:flex-row gap-4 lg:gap-6'
          >
            <Button
              onClick={handleScrollToProjects}
              size='lg'
              className='bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group'
            >
              <span>View Work</span>
              <motion.div
                className='ml-2'
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                →
              </motion.div>
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={handleScrollToContact}
              className='border-2 hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105 bg-transparent'
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className='flex gap-6 lg:gap-8 pt-8'
          >
            {[
              {
                icon: FaGithub,
                href: 'https://github.com/sazz07',
                label: 'GitHub',
              },
              {
                icon: FaLinkedin,
                href: 'https://www.linkedin.com/in/md-sazzad-hossain-996b84347',
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: 'mailto:sazzad.hossain882@gmail.com',
                label: 'Email',
              },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-12 h-12 rounded-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all duration-300 hover:shadow-lg group'
                >
                  <social.icon className='h-5 w-5 group-hover:scale-110 transition-transform duration-300' />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block'
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className='flex flex-col items-center gap-3 text-muted-foreground'
          >
            <span className='text-xs font-mono tracking-wider'>
              Scroll to explore
            </span>
            <div className='w-px h-8 bg-gradient-to-b from-transparent via-muted-foreground to-transparent' />
            <ArrowDown className='h-4 w-4' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
