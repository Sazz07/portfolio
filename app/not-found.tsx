'use client';

import { motion } from 'framer-motion';
import {
  Home,
  ArrowLeft,
  Search,
  Mail,
  ExternalLink,
  Sparkles,
  Code,
  User,
  FolderOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function NotFound() {
  const router = useRouter();

  const suggestedPages = [
    {
      title: 'Home',
      description: 'Return to the main page',
      href: '/',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Projects',
      description: 'View my latest work',
      href: '/projects',
      icon: FolderOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'About',
      description: 'Learn more about me',
      href: '/#about',
      icon: User,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Contact',
      description: 'Get in touch',
      href: '/#contact',
      icon: Mail,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <main className='min-h-screen pt-20 lg:pt-0 lg:ml-20 relative overflow-hidden'>
      <div className='px-6 lg:px-12 py-12 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <motion.h1
              className='text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              404
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex items-center justify-center gap-2 mb-6'
            >
              <Sparkles className='h-6 w-6 text-yellow-500' />
              <h2 className='text-2xl lg:text-3xl font-semibold'>
                Oops! Page Not Found
              </h2>
              <Sparkles className='h-6 w-6 text-yellow-500' />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'
            >
              The page you&apos;re looking for seems to have wandered off into
              the digital void. Don&apos;t worry though, let&apos;s get you back
              on track!
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center mb-16'
          >
            <Button
              onClick={() => router.back()}
              size='lg'
              variant='outline'
              className='group bg-background/80 backdrop-blur-sm hover:bg-background'
            >
              <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
                <ArrowLeft className='h-5 w-5 mr-2' />
              </motion.div>
              Go Back
            </Button>

            <Button
              asChild
              size='lg'
              className='bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white border-0 shadow-lg group'
            >
              <Link href='/'>
                <Home className='h-5 w-5 mr-2 group-hover:scale-110 transition-transform' />
                Back to Home
                <motion.div
                  className='ml-2'
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <ExternalLink className='h-4 w-4' />
                </motion.div>
              </Link>
            </Button>
          </motion.div>

          {/* Suggested Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='mb-16'
          >
            <h3 className='text-xl font-semibold mb-8 flex items-center justify-center gap-2'>
              <Search className='h-5 w-5' />
              Where would you like to go?
            </h3>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {suggestedPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className='group h-full flex flex-col'
                >
                  <Card className='h-full flex flex-col hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20 border-border/50 hover:border-border overflow-hidden'>
                    <CardContent className='p-6 text-center flex flex-col flex-1'>
                      <motion.div
                        className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${page.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <page.icon className='h-6 w-6 text-white' />
                      </motion.div>

                      <h4 className='font-semibold mb-2 group-hover:text-blue-600 transition-colors'>
                        {page.title}
                      </h4>

                      <p className='text-sm text-muted-foreground mb-4'>
                        {page.description}
                      </p>

                      <div className='flex-1'></div>
                      <Button
                        asChild
                        variant='ghost'
                        size='sm'
                        className='group-hover:bg-muted/50 transition-colors mt-auto'
                      >
                        <Link href={page.href}>
                          Visit Page
                          <motion.div
                            className='ml-1'
                            animate={{ x: [0, 2, 0] }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            →
                          </motion.div>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='text-center'
          >
            <Card className='max-w-2xl mx-auto bg-gradient-to-br from-muted/30 to-muted/10 border-border/30'>
              <CardContent className='p-8'>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className='w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'
                >
                  <Code className='h-8 w-8 text-white' />
                </motion.div>

                <h3 className='text-xl font-semibold mb-4'>
                  Still can&apos;t find what you&apos;re looking for?
                </h3>

                <p className='text-muted-foreground mb-6'>
                  Feel free to reach out! I&apos;m always happy to help or
                  discuss potential opportunities.
                </p>

                <div className='flex justify-center gap-4'>
                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className='group bg-transparent'
                  >
                    <Link href='mailto:sazzad.hossain882@gmail.com'>
                      <Mail className='h-4 w-4 mr-2 group-hover:scale-110 transition-transform' />
                      Email Me
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className='group bg-transparent'
                  >
                    <Link href='https://github.com/sazz07' target='_blank'>
                      <FaGithub className='h-4 w-4 mr-2 group-hover:scale-110 transition-transform' />
                      GitHub
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className='group bg-transparent'
                  >
                    <Link
                      href='https://www.linkedin.com/in/md-sazzad-hossain-sazz'
                      target='_blank'
                    >
                      <FaLinkedin className='h-4 w-4 mr-2 group-hover:scale-110 transition-transform' />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
