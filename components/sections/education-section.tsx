'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = {
  degree: 'Bachelor of Science in Computer Science & Engineering',
  university: 'Northern University Bangladesh',
  location: 'Dhaka, Bangladesh',
  duration: '2017 – 2022',
  gpa: '3.75/4.00',
  description:
    'Comprehensive study of computer science fundamentals with focus on software engineering, algorithms, and modern web technologies. Developed strong analytical thinking and problem-solving skills through hands-on projects and collaborative learning.',
};

// const academicHighlights = [
//   {
//     icon: Trophy,
//     title: 'Academic Excellence',
//     description:
//       'Maintained consistent high performance throughout the program',
//     color: 'text-yellow-600',
//   },
//   {
//     icon: Users,
//     title: 'Team Projects',
//     description: 'Led multiple group projects and collaborative assignments',
//     color: 'text-blue-600',
//   },
//   {
//     icon: BookOpen,
//     title: 'Research Focus',
//     description: 'Specialized in web development and software architecture',
//     color: 'text-green-600',
//   },
// ];

// const coreSubjects = [
//   'Data Structures & Algorithms',
//   'Software Engineering Principles',
//   'Database Management Systems',
//   'Computer Networks & Security',
//   'Object-Oriented Programming',
//   //   'Web Technologies & Frameworks',
//   //   'System Analysis & Design',
//   //   'Mobile Application Development',
// ];

// const skills = [
//   'Problem Solving',
//   'Critical Thinking',
//   'Team Leadership',
//   'Project Management',
//   //   'Technical Writing',
//   'Research & Analysis',
// ];

export function EducationSection() {
  return (
    <section
      id='educations'
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
                Education
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='h-px bg-foreground mb-8'
              />
              <p className='text-muted-foreground leading-relaxed mb-8'>
                My academic foundation in computer science that provided the
                theoretical knowledge and practical skills for my development
                career.
              </p>

              {/* Academic Highlights */}
              {/* <div className='space-y-4'>
                {academicHighlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className='flex items-start gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors duration-300'
                    >
                      <IconComponent
                        className={`h-5 w-5 mt-0.5 ${highlight.color}`}
                      />
                      <div>
                        <h4 className='font-medium text-sm mb-1'>
                          {highlight.title}
                        </h4>
                        <p className='text-xs text-muted-foreground leading-relaxed'>
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div> */}
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className='lg:col-span-8'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              {/* Main Education Card */}
              <div className='bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group'>
                <div className='flex items-start gap-6'>
                  {/* University Icon */}
                  <div className='flex-shrink-0'>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'
                    >
                      <GraduationCap className='h-8 w-8 text-white' />
                    </motion.div>
                  </div>

                  {/* Main Content */}
                  <div className='flex-1 space-y-6'>
                    {/* Header */}
                    <div>
                      <h3 className='text-2xl font-semibold mb-2 leading-tight'>
                        {education.degree}
                      </h3>
                      <p className='text-lg font-medium text-blue-600 mb-4'>
                        {education.university}
                      </p>

                      <div className='flex flex-wrap gap-6 text-sm text-muted-foreground mb-4'>
                        <div className='flex items-center gap-2'>
                          <Calendar className='h-4 w-4' />
                          <span>{education.duration}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <MapPin className='h-4 w-4' />
                          <span>{education.location}</span>
                        </div>
                        {/* <div className='flex items-center gap-2'>
                          <Award className='h-4 w-4' />
                          <span>GPA: {education.gpa}</span>
                        </div> */}
                      </div>

                      {/* <Badge
                        variant='outline'
                        className='bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
                      >
                        Graduated with Distinction
                      </Badge> */}
                    </div>

                    {/* Description */}
                    <p className='text-muted-foreground leading-relaxed'>
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Coursework & Skills Grid */}
              <div className='grid md:grid-cols-2 gap-8'>
                {/* Core Subjects */}
                {/* <div className='bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6'>
                  <h4 className='font-semibold mb-4 flex items-center gap-2'>
                    <BookOpen className='h-5 w-5 text-blue-600' />
                    Core Coursework
                  </h4>
                  <div className='space-y-3'>
                    {coreSubjects.map((subject, index) => (
                      <motion.div
                        key={subject}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className='flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors duration-200'
                      >
                        <div className='w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0' />
                        <span className='text-sm text-muted-foreground'>
                          {subject}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}

                {/* Skills Developed */}
                {/* <div className='bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6'>
                  <h4 className='font-semibold mb-4 flex items-center gap-2'>
                    <Award className='h-5 w-5 text-purple-600' />
                    Skills Developed
                  </h4>
                  <div className='space-y-3'>
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className='flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors duration-200'
                      >
                        <div className='w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0' />
                        <span className='text-sm text-muted-foreground'>
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}
              </div>

              {/* Additional Info */}
              {/* <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-border/30 rounded-xl p-6'>
                <h4 className='font-semibold mb-3 text-foreground'>
                  Academic Journey
                </h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  During my time at Northern University Bangladesh, I not only
                  excelled academically but also actively participated in coding
                  competitions, hackathons, and tech workshops. This experience
                  helped me bridge the gap between theoretical knowledge and
                  practical application, preparing me for real-world software
                  development challenges.
                </p>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
