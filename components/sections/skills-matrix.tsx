'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Styling & Design',
    skills: ['Tailwind CSS', 'ShadCN UI', 'SCSS', 'Ant Design', 'Material UI'],
  },
  {
    title: 'Backend Development',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'Prisma',
      'Mongoose',
    ],
  },
  {
    title: 'State Management & Data Fetching',
    skills: [
      'Redux Toolkit',
      'RTK Query',
      'Context API',
      'TanStack Query',
      'TanStack Router',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git',
      'Docker',
      'VS Code',
      'Figma',
      'Vercel',
      'Netlify',
      'Postman',
      'Jira',
      'Slack',
      'ClickUp',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Problem Solving',
      'Teamwork',
      'Communication',
      'Mentoring',
      'Time Management',
      'Adaptability',
      'Critical Thinking',
      'Calm Under Pressure',
    ],
  },
];

export function SkillsMatrix() {
  return (
    <section id='skills' className='py-16 lg:py-24 px-6 lg:px-12'>
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
                Skills & Technologies
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='h-px bg-foreground mb-8'
              />
              <p className='text-muted-foreground leading-relaxed'>
                A comprehensive toolkit of technologies and methodologies I use
                to build modern, scalable web applications that deliver
                exceptional user experiences.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className='lg:col-span-8'>
            <div className='grid gap-8'>
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className='space-y-4'
                >
                  <h3 className='font-medium text-lg text-foreground'>
                    {category.title}
                  </h3>
                  <div className='flex flex-wrap gap-3'>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className='px-4 py-2 bg-muted/50 hover:bg-muted border border-border/50 hover:border-border rounded-xl text-sm font-medium text-foreground transition-all duration-300 hover:shadow-sm'
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
