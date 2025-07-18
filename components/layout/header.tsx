'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b'
          : 'bg-transparent'
      }`}
    >
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Link href='/' className='text-2xl font-bold'>
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Sazzad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-muted-foreground hover:text-foreground transition-colors relative group'
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300' />
              </Link>
            ))}
            <Button
              variant='outline'
              size='sm'
              onClick={() => window.open('/resume.pdf', '_blank')}
              className='gap-2'
            >
              <Download className='h-4 w-4' />
              Resume
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center gap-2'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden py-4 border-t'
          >
            <div className='flex flex-col space-y-4'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant='outline'
                size='sm'
                onClick={() => window.open('/resume.pdf', '_blank')}
                className='gap-2 w-fit'
              >
                <Download className='h-4 w-4' />
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
