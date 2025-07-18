'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Tutors Finland Oy',
    location: 'Helsinki, Finland',
    period: 'March 2024 – Present',
    type: 'Remote',
    description:
      'An AI-powered career planning platform serving 10,000+ users.',
    achievements: [
      'Architected scalable React.js components with TypeScript, reducing bugs by 60%',
      'Optimized SSR performance and implemented caching strategies, improving load times by 60%',
      'Built accessible UI components for inclusive design',
      'Collaborated with international team across 4 time zones using agile methodologies',
      'Integrated AI APIs and implemented real-time data synchronization features',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'REST APIs',
      'SSR',
      'AI Integration',
    ],
    companyUrl: 'https://www.tutors.fi/en',
  },
  {
    title: 'Frontend Developer',
    company: 'Repliq Limited',
    location: 'Dhaka, Bangladesh',
    period: 'April 2023 – March 2024',
    type: 'Full-time',
    description:
      'Developed high-impact frontend solutions for pharmaceutical e-commerce and HR management platforms.',
    achievements: [
      'Built Pharmik e-commerce platform handling 1000+ daily transactions with 99.9% uptime',
      'Engineered real-time chat system supporting concurrent users',
      'Created Pro HR dashboard that reduced recruitment time by 50% through automation',
      'Implemented automated CV parsing system, saving 20+ hours of manual work weekly',
      'Delivered pixel-perfect responsive designs matching Figma specifications',
    ],
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Tanstack Query',
      'Dashboard Development',
      'E-commerce',
    ],
    companyUrl: 'https://repliq.co',
  },
];

export function ExperienceCards() {
  return (
    <section
      id='experience'
      className='py-16 lg:py-24 px-6 lg:px-12 bg-muted/20'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='grid lg:grid-cols-12 gap-8 lg:gap-16'
        >
          {/* Left Column - Title */}
          <div className='lg:col-span-4'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl lg:text-4xl font-light mb-6'>
                Experience
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='h-px bg-foreground mb-8'
              />
              <p className='text-muted-foreground leading-relaxed'>
                2+ years building scalable applications and collaborating with
                international teams to deliver impactful solutions.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Experience Cards */}
          <div className='lg:col-span-8 space-y-8 lg:space-y-12'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -4 }}
                className='group'
              >
                <div className='bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-border transition-all duration-500'>
                  <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6'>
                    <div className='space-y-2'>
                      <h3 className='text-xl lg:text-2xl font-medium group-hover:text-foreground transition-colors duration-300'>
                        {exp.title}
                      </h3>
                      <div className='flex items-center gap-2'>
                        <p className='text-lg text-muted-foreground font-medium'>
                          {exp.company}
                        </p>
                        <motion.a
                          href={exp.companyUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className='text-muted-foreground hover:text-foreground transition-colors duration-300'
                        >
                          <ExternalLink className='h-4 w-4' />
                        </motion.a>
                      </div>
                    </div>
                    <Badge variant='secondary' className='w-fit mt-2 lg:mt-0'>
                      {exp.type}
                    </Badge>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-6'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='h-4 w-4' />
                      <span>{exp.period}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MapPin className='h-4 w-4' />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    {exp.description}
                  </p>

                  <ul className='space-y-3 mb-8'>
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className='flex items-start gap-3 text-sm leading-relaxed'
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                          className='w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0'
                        />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant='outline'
                          className='text-xs hover:bg-muted transition-colors duration-300'
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
