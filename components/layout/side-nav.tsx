'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Code,
  FolderOpen,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Download,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Briefcase, label: 'Work', href: '#experience' },
  { icon: Code, label: 'Skills', href: '#skills' },
  { icon: FolderOpen, label: 'Projects', href: '#projects' },
  { icon: GraduationCap, label: 'Education', href: '#education' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Side Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='fixed left-0 top-0 h-full w-20 bg-background/95 backdrop-blur-xl border-r border-border/50 z-50 hidden lg:flex flex-col items-center py-8'
      >
        {/* Logo */}
        <Link href='/' className='mb-12 group'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='w-10 h-10 bg-foreground text-background rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300'
          >
            S
          </motion.div>
        </Link>

        {/* Navigation Items */}
        <div className='flex flex-col gap-4 flex-1'>
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleNavClick(item.href)}
                className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? 'bg-foreground text-background shadow-lg'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className='h-5 w-5' />

                {/* Tooltip */}
                <div className='absolute left-16 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg transform translate-x-2 group-hover:translate-x-0'>
                  {item.label}
                  <div className='absolute left-0 top-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-foreground transform -translate-x-1 -translate-y-1/2' />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className='flex flex-col gap-3'>
          {mounted ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className='w-12 h-12 rounded-xl hover:bg-muted transition-colors duration-300'
              >
                <AnimatePresence mode='wait'>
                  {theme === 'dark' ? (
                    <motion.div
                      key='sun'
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className='h-5 w-5' />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='moon'
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className='h-5 w-5' />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          ) : null}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => window.open('/resume.pdf', '_blank')}
              className='w-12 h-12 rounded-xl hover:bg-muted transition-colors duration-300'
            >
              <Download className='h-5 w-5' />
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className='lg:hidden'>
        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='fixed top-6 right-6 z-50 w-12 h-12 bg-foreground text-background rounded-xl flex items-center justify-center shadow-lg'
        >
          <AnimatePresence mode='wait'>
            {isMobileMenuOpen ? (
              <motion.div
                key='close'
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className='h-5 w-5' />
              </motion.div>
            ) : (
              <motion.div
                key='menu'
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className='h-5 w-5' />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='fixed inset-0 bg-background/80 backdrop-blur-sm z-40'
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className='fixed right-0 top-0 h-full w-80 bg-background border-l border-border/50 z-40 p-8'
              >
                <div className='flex flex-col h-full pt-16'>
                  {/* Navigation Items */}
                  <div className='space-y-2 flex-1'>
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeSection === item.href.substring(1)
                            ? 'bg-foreground text-background'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <item.icon className='h-5 w-5' />
                        <span className='font-medium'>{item.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div className='border-t border-border/50 pt-6 space-y-3'>
                    <Button
                      variant='outline'
                      onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                      }
                      className='w-full justify-start gap-3'
                    >
                      {theme === 'dark' ? (
                        <Sun className='h-5 w-5' />
                      ) : (
                        <Moon className='h-5 w-5' />
                      )}
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => window.open('/resume.pdf', '_blank')}
                      className='w-full justify-start gap-3'
                    >
                      <Download className='h-5 w-5' />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
