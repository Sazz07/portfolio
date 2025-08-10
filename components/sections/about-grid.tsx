'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, Coffee } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '2+' },
  { icon: Users, label: 'Projects Completed', value: '20+' },
  { icon: Globe, label: 'Countries Worked', value: '2' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
];

export function AboutGrid() {
  return (
    <section id='about' className='py-16 lg:py-24 px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='grid lg:grid-cols-12 gap-8 lg:gap-16 items-start'
        >
          {/* Left Column - Title */}
          <div className='lg:col-span-4'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl lg:text-4xl font-light mb-6'>About Me</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='h-px bg-foreground mb-8'
              />
              <p className='text-muted-foreground leading-relaxed'>
                Passionate about creating digital experiences that make a
                difference.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className='lg:col-span-8 space-y-12'>
            {/* Main Content */}
            <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='space-y-6'
              >
                <p className='text-base lg:text-lg text-muted-foreground leading-relaxed'>
                  I&apos;m a full-stack developer with over 2 years of
                  experience building robust, scalable web applications. My
                  journey spans from local startups in Bangladesh to
                  international teams in Finland, where I&apos;ve contributed to
                  AI-powered platforms and enterprise solutions.
                </p>
                <p className='text-base lg:text-lg text-muted-foreground leading-relaxed'>
                  I believe in writing clean, maintainable code and creating
                  user experiences that are both functional and delightful.
                  Every project is an opportunity to learn something new and
                  push the boundaries of what&apos;s possible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='space-y-8'
              >
                <div className='space-y-6'>
                  <div>
                    <h3 className='font-medium mb-2 text-foreground'>
                      Currently
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      Exploring new opportunities in full-stack development
                      while building open-source projects and deepening my
                      expertise in modern web technologies and scalable
                      application design.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-medium mb-2 text-foreground'>
                      Location
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      Dhaka, Bangladesh (Remote-first)
                    </p>
                  </div>
                  <div>
                    <h3 className='font-medium mb-2 text-foreground'>
                      Interests
                    </h3>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      Open source contributions, exploring emerging
                      technologies, and building clean, scalable architectures.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border/50'
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className='text-center p-4 rounded-xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm group'
                >
                  <stat.icon className='h-6 w-6 mx-auto mb-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300' />
                  <div className='text-2xl font-light mb-1 text-foreground'>
                    {stat.value}
                  </div>
                  <div className='text-xs text-muted-foreground font-medium'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
