import Link from 'next/link';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/sazzadhossain',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/sazzadhossain',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    href: 'mailto:sazzad.hossain882@gmail.com',
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className='bg-muted/30 border-t'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div>
            <Link href='/' className='text-2xl font-bold'>
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Sazzad Hossain
              </span>
            </Link>
            <p className='text-muted-foreground mt-2 max-w-xs'>
              Full-Stack Developer crafting scalable solutions with passion and
              precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className='font-semibold mb-4'>Navigation</h3>
            <ul className='space-y-2'>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='font-semibold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all hover:scale-110'
                >
                  <item.icon className='h-5 w-5' />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-muted-foreground text-sm'>
            © {new Date().getFullYear()} Sazzad Hossain. All rights reserved.
          </p>
          <p className='text-muted-foreground text-sm flex items-center gap-1 mt-2 sm:mt-0'>
            Built with <Heart className='h-4 w-4 text-red-500' /> using Next.js
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
