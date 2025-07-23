'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Calendar,
  Code,
  Layers,
  Zap,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, statusLabels, statusColors } from '@/lib/projects-data';
import { FaGithub } from 'react-icons/fa';

export function ProjectsModern() {
  const [selectedProject, setSelectedProject] = useState(0);

  // Get featured projects (first 3)
  const featuredProjects = projectsData.slice(0, 3);

  const getAllTechFromProject = (project: (typeof projectsData)[0]) => {
    return Object.values(project.techStack).flat();
  };

  return (
    <section id='projects' className='py-16 lg:py-24 px-6 lg:px-12'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-6'
          >
            <Star className='h-4 w-4 text-yellow-500' />
            <span className='text-sm font-medium'>Featured Work</span>
          </motion.div>

          <h2 className='text-4xl lg:text-6xl font-bold mb-6'>
            Featured
            <br />
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Projects
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6'
          />

          <p className='text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed'>
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-start'>
          {/* Project Navigation (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='lg:col-span-4 space-y-4'
          >
            {featuredProjects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(index)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                  selectedProject === index
                    ? 'bg-background border border-border shadow-lg'
                    : 'hover:bg-muted/50 border border-transparent'
                }`}
              >
                <div className='flex items-start justify-between mb-3'>
                  <div className='flex-1'>
                    <h3
                      className={`font-semibold mb-1 transition-colors ${
                        selectedProject === index
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      } `}
                    >
                      {project.title}
                    </h3>
                    <div>
                      {project.subtitle && (
                        <p className='text-sm text-muted-foreground'>
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <Badge variant='outline' className='text-xs ml-2'>
                    {project.year}
                  </Badge>
                </div>

                <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
                  {project.description}
                </p>

                <div className='flex items-center justify-between'>
                  <div className='flex gap-1'>
                    {getAllTechFromProject(project)
                      .slice(0, 3)
                      .map((tech) => (
                        <Badge key={tech} variant='outline' className='text-xs'>
                          {tech}
                        </Badge>
                      ))}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className='mt-4 h-1 bg-muted rounded-full overflow-hidden'>
                  <motion.div
                    className='h-full bg-gradient-to-r from-blue-600 to-purple-600'
                    initial={{ width: 0 }}
                    animate={{
                      width: selectedProject === index ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Project Display (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='lg:col-span-8'
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className='space-y-6'
              >
                {/* Project Image */}
                <div className='relative group overflow-hidden rounded-2xl bg-muted/20'>
                  <Image
                    src={
                      featuredProjects[selectedProject].featuredImage ||
                      '/placeholder.svg'
                    }
                    alt={featuredProjects[selectedProject].title}
                    width={800}
                    height={500}
                    className='w-full h-auto transition-transform duration-500 group-hover:scale-105'
                  />

                  {/* Overlay with actions */}
                  <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    <Button
                      asChild
                      size='sm'
                      className='bg-white/90 text-black hover:bg-white'
                    >
                      <Link
                        href={featuredProjects[selectedProject].liveUrl}
                        target='_blank'
                      >
                        <ExternalLink className='h-4 w-4 mr-2' />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      asChild
                      className='bg-white/90 border-white/90 text-black hover:bg-white'
                    >
                      {featuredProjects[selectedProject].githubUrl && (
                        <Link
                          href={featuredProjects[selectedProject].githubUrl}
                          target='_blank'
                        >
                          <FaGithub className='size-4 mr-2' />
                          Code
                        </Link>
                      )}
                    </Button>
                  </div>

                  {/* Status badge */}
                  <div className='absolute top-4 right-4'>
                    <Badge
                      className={
                        statusColors[featuredProjects[selectedProject].status]
                      }
                    >
                      {statusLabels[featuredProjects[selectedProject].status]}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <Card className='bg-background/50 backdrop-blur-sm border-border/50'>
                  <CardContent className='p-6 space-y-6'>
                    {/* Title and description */}
                    <div>
                      <div className='flex items-start justify-between mb-4'>
                        <div>
                          <Link
                            href={featuredProjects[selectedProject].slug}
                            className='text-2xl font-bold mb-2 hover:text-blue-600 transition-colors'
                          >
                            {featuredProjects[selectedProject].title}
                          </Link>
                          {featuredProjects[selectedProject].subtitle && (
                            <p className='text-muted-foreground'>
                              {featuredProjects[selectedProject].subtitle}
                            </p>
                          )}
                        </div>
                        <div className='flex items-center gap-2'>
                          <Calendar className='h-4 w-4 text-muted-foreground' />
                          <span className='text-sm text-muted-foreground'>
                            {featuredProjects[selectedProject].year}
                          </span>
                        </div>
                      </div>

                      <p className='text-muted-foreground leading-relaxed'>
                        {featuredProjects[selectedProject].description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className='font-semibold mb-3 flex items-center gap-2'>
                        <Layers className='h-4 w-4' />
                        Key Features
                      </h4>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {featuredProjects[selectedProject].features
                          .slice(0, 4)
                          .map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className='flex items-center gap-2 text-sm'
                            >
                              <div className='w-1.5 h-1.5 bg-blue-600 rounded-full' />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className='font-semibold mb-3 flex items-center gap-2'>
                        <Code className='h-4 w-4' />
                        Technologies Used
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {getAllTechFromProject(
                          featuredProjects[selectedProject]
                        ).map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Badge
                              variant='outline'
                              className='hover:bg-muted transition-colors'
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-4 pt-4 border-t border-border/50'>
                      <Button asChild className='flex-1'>
                        <Link
                          href={featuredProjects[selectedProject].liveUrl}
                          target='_blank'
                        >
                          <ExternalLink className='h-4 w-4 mr-2' />
                          View Live
                        </Link>
                      </Button>
                      {featuredProjects[selectedProject].githubUrl && (
                        <Button
                          variant='outline'
                          asChild
                          className='flex-1 bg-transparent'
                        >
                          <Link
                            href={featuredProjects[selectedProject].githubUrl}
                            target='_blank'
                          >
                            <FaGithub className='h-4 w-4 mr-2' />
                            Source Code
                          </Link>
                        </Button>
                      )}

                      <Button variant='outline' asChild>
                        <Link
                          href={`/projects/${featuredProjects[selectedProject].slug}`}
                        >
                          <Zap className='h-4 w-4 mr-2' />
                          Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <Button
            variant='outline'
            size='lg'
            asChild
            className='group bg-transparent'
          >
            <Link href='/projects'>
              <span>Explore All Projects</span>
              <ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
