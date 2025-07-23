'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  Zap,
  Target,
  Code,
  Layers,
  CheckCircle,
  Play,
  Star,
  Award,
  Globe,
  X,
  Maximize2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loading } from '@/components/ui/loading';
import { EmptyState } from '@/components/ui/empty-state';
import Image from 'next/image';
import Link from 'next/link';
import {
  getProjectBySlug,
  getRelatedProjects,
  statusLabels,
  statusColors,
  formatDate,
  type Project,
} from '@/lib/projects-data';
import { notFound, useParams } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

export default function ProjectDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const { slug } = useParams();

  const project = getProjectBySlug(slug as string);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.id);
  const allImages = [
    project.featuredImage,
    ...project.images.filter((img) => img !== project.featuredImage),
  ];

  const nextImage = useCallback(() => {
    setImageLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const prevImage = useCallback(() => {
    setImageLoading(true);
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  }, [allImages.length]);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) {
        if (e.key === 'Escape') closeFullscreen();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, nextImage, prevImage, closeFullscreen]);

  const getAllTechFromProject = (project: Project) => {
    return Object.values(project.techStack).flat().filter(Boolean);
  };

  if (isLoading) {
    return (
      <Loading variant='pulse' size='lg' text='Loading project details...' />
    );
  }

  return (
    <>
      <main className='min-h-screen pt-20 lg:pt-0 lg:ml-20'>
        <div className='px-6 lg:px-12 py-12'>
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mb-12'
          >
            <Link
              href='/projects'
              className='inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group transition-colors'
            >
              <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
                <ArrowLeft className='h-4 w-4 mr-2' />
              </motion.div>
              <span>Back to Projects</span>
            </Link>

            {/* Hero Section */}
            <div className='grid lg:grid-cols-12 gap-8 lg:gap-12'>
              {/* Project Info */}
              <div className='lg:col-span-7'>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='space-y-6'
                >
                  {/* Badges */}
                  <div className='flex flex-wrap items-center gap-3'>
                    <Badge
                      variant='outline'
                      className='bg-background/80 backdrop-blur-sm border-border/50 hover:border-border transition-colors'
                    >
                      <Globe className='h-3 w-3 mr-1' />
                      {project.category}
                    </Badge>
                    <Badge
                      className={`${
                        statusColors[project.status]
                      } hover:opacity-90 transition-opacity`}
                    >
                      {statusLabels[project.status]}
                    </Badge>
                    <Badge
                      variant='outline'
                      className='hover:border-border transition-colors'
                    >
                      <Calendar className='h-3 w-3 mr-1' />
                      {project.year}
                    </Badge>
                    <Badge className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 hover:from-yellow-600 hover:to-orange-600 transition-all'>
                      <Star className='h-3 w-3 mr-1' />
                      Featured
                    </Badge>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h1 className='text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text'>
                      {project.title}
                    </h1>
                    {project.subtitle && (
                      <p className='text-xl text-muted-foreground mb-6 leading-relaxed'>
                        {project.subtitle}
                      </p>
                    )}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className='h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full'
                    />
                    <p className='text-lg text-muted-foreground leading-relaxed'>
                      {project.description}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    {project.duration && (
                      <motion.div
                        whileHover={{ y: -2, scale: 1.02 }}
                        className='text-center p-4 bg-muted/30 rounded-xl border border-border/30 hover:border-border/60 hover:bg-muted/40 transition-all duration-300 cursor-default'
                      >
                        <Clock className='h-5 w-5 mx-auto mb-2 text-blue-600' />
                        <div className='font-semibold text-sm'>
                          {project.duration}
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          Duration
                        </div>
                      </motion.div>
                    )}
                    {project.role && (
                      <motion.div
                        whileHover={{ y: -2, scale: 1.02 }}
                        className='text-center p-4 bg-muted/30 rounded-xl border border-border/30 hover:border-border/60 hover:bg-muted/40 transition-all duration-300 cursor-default'
                      >
                        <Users className='h-5 w-5 mx-auto mb-2 text-green-600' />
                        <div className='font-semibold text-sm'>
                          {project.role}
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          My Role
                        </div>
                      </motion.div>
                    )}
                    <motion.div
                      whileHover={{ y: -2, scale: 1.02 }}
                      className='text-center p-4 bg-muted/30 rounded-xl border border-border/30 hover:border-border/60 hover:bg-muted/40 transition-all duration-300 cursor-default'
                    >
                      <Code className='h-5 w-5 mx-auto mb-2 text-purple-600' />
                      <div className='font-semibold text-sm'>
                        {getAllTechFromProject(project).length}
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Technologies
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -2, scale: 1.02 }}
                      className='text-center p-4 bg-muted/30 rounded-xl border border-border/30 hover:border-border/60 hover:bg-muted/40 transition-all duration-300 cursor-default'
                    >
                      <Layers className='h-5 w-5 mx-auto mb-2 text-orange-600' />
                      <div className='font-semibold text-sm'>
                        {project.features.length}
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Features
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons & Preview */}
              <div className='lg:col-span-5'>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-6'
                >
                  {/* Action Buttons */}
                  <div className='space-y-3'>
                    <Button
                      asChild
                      size='lg'
                      className='w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl group transition-all duration-300'
                    >
                      <Link
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Play className='h-5 w-5 mr-2 group-hover:scale-110 transition-transform' />
                        View Live Project
                        <ExternalLink className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button
                        variant='outline'
                        size='lg'
                        asChild
                        className='w-full bg-transparent hover:bg-muted/50 group transition-all duration-300 hover:border-border'
                      >
                        <Link
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <FaGithub className='h-5 w-5 mr-2 group-hover:scale-110 transition-transform' />
                          View Source Code
                        </Link>
                      </Button>
                    )}
                  </div>

                  {/* Project Preview Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className='overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg'>
                      <CardContent className='p-0'>
                        <div className='relative group'>
                          <Image
                            src={project.featuredImage || '/placeholder.svg'}
                            alt={project.title}
                            width={500}
                            height={300}
                            className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                          <div className='absolute top-3 right-3'>
                            <Badge className='bg-white/90 text-black shadow-lg backdrop-blur-sm'>
                              Preview
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='mb-16'
          >
            <h3 className='text-2xl font-bold mb-6 flex items-center gap-2'>
              <Zap className='h-6 w-6 text-blue-600' />
              Project Gallery
            </h3>

            <div className='grid lg:grid-cols-3 gap-6'>
              {/* Main Image */}
              <div className='lg:col-span-2'>
                <div className='relative group overflow-hidden rounded-2xl bg-muted/20 border border-border/30 hover:border-border/60 transition-all duration-300'>
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className='aspect-video bg-muted/10 flex items-center justify-center relative'
                    >
                      {imageLoading && (
                        <div className='absolute inset-0 flex items-center justify-center bg-muted/20'>
                          <div className='w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin' />
                        </div>
                      )}
                      <Image
                        src={allImages[currentImageIndex] || '/placeholder.svg'}
                        alt={`${project.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        width={1200}
                        height={675}
                        className='w-full h-full object-cover hover:object-contain transition-all duration-500 cursor-zoom-in'
                        priority
                        onLoad={() => setImageLoading(false)}
                        onClick={openFullscreen}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevImage}
                        className='absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-xl z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                        aria-label='Previous image'
                      >
                        <ChevronLeft className='h-6 w-6 text-black' />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextImage}
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 size-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-xl z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                        aria-label='Next image'
                      >
                        <ChevronRight className='h-6 w-6 text-black' />
                      </motion.button>
                    </>
                  )}

                  {/* Fullscreen button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openFullscreen}
                    className='absolute top-4 left-4 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/90 text-white z-10 focus:outline-none focus:ring-2 focus:ring-white'
                    aria-label='View fullscreen'
                  >
                    <Maximize2 className='h-5 w-5' />
                  </motion.button>

                  {/* Image Counter */}
                  <div className='absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm'>
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                </div>

                {/* Image Thumbnails */}
                {allImages.length > 1 && (
                  <div className='flex gap-3 mt-6 overflow-x-auto pb-2'>
                    {allImages.map((image, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setImageLoading(true);
                          setCurrentImageIndex(index);
                        }}
                        className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          index === currentImageIndex
                            ? 'border-blue-500 shadow-lg scale-105'
                            : 'border-border/30 hover:border-border'
                        }`}
                      >
                        <Image
                          src={image || '/placeholder.svg'}
                          alt={`Thumbnail ${index + 1}`}
                          width={96}
                          height={64}
                          className='w-full h-full object-cover'
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info Sidebar */}
              <div className='space-y-4'>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className='bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-border/50 hover:border-border transition-all duration-300 hover:shadow-md'>
                    <CardHeader className='pb-3'>
                      <CardTitle className='text-lg flex items-center gap-2'>
                        <Award className='h-5 w-5 text-blue-600' />
                        Project Highlights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-3'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-muted-foreground'>
                          Status
                        </span>
                        <Badge className={statusColors[project.status]}>
                          {statusLabels[project.status]}
                        </Badge>
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-muted-foreground'>
                          Year
                        </span>
                        <span className='font-medium'>{project.year}</span>
                      </div>
                      {project.duration && (
                        <div className='flex items-center justify-between'>
                          <span className='text-sm text-muted-foreground'>
                            Duration
                          </span>
                          <span className='font-medium'>
                            {project.duration}
                          </span>
                        </div>
                      )}
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-muted-foreground'>
                          Category
                        </span>
                        <span className='font-medium'>{project.category}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className='bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-border/50 hover:border-border transition-all duration-300 hover:shadow-md'>
                    <CardHeader className='pb-3'>
                      <CardTitle className='text-lg flex items-center gap-2'>
                        <Target className='h-5 w-5 text-green-600' />
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-3'>
                      <Button
                        variant='outline'
                        size='sm'
                        asChild
                        className='w-full justify-start bg-transparent hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-300'
                      >
                        <Link href={project.liveUrl} target='_blank'>
                          <ExternalLink className='h-4 w-4 mr-2' />
                          Visit Website
                        </Link>
                      </Button>
                      {project.githubUrl && (
                        <Button
                          variant='outline'
                          size='sm'
                          asChild
                          className='w-full justify-start bg-transparent hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-300'
                        >
                          <Link href={project.githubUrl} target='_blank'>
                            <FaGithub className='h-4 w-4 mr-2' />
                            View Code
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='mb-16'
          >
            <Tabs defaultValue='overview' className='w-full'>
              <TabsList className='grid w-full grid-cols-3 bg-muted/50 p-1 rounded-xl'>
                <TabsTrigger
                  value='overview'
                  className='rounded-lg transition-all duration-300'
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value='technical'
                  className='rounded-lg transition-all duration-300'
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger
                  value='details'
                  className='rounded-lg transition-all duration-300'
                >
                  Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value='overview' className='space-y-6 mt-8'>
                {/* Features Grid */}
                <Card className='overflow-hidden hover:shadow-md transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <CheckCircle className='h-5 w-5 text-green-600' />
                      Key Features
                    </CardTitle>
                    <CardDescription>
                      Core functionality and capabilities of this project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='grid md:grid-cols-2 gap-4'>
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ x: 4, scale: 1.02 }}
                          className='flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 group cursor-default'
                        >
                          <div className='w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 group-hover:scale-150 transition-transform' />
                          <span className='leading-relaxed'>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value='technical' className='space-y-6 mt-8'>
                <Card className='hover:shadow-md transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Code className='h-5 w-5 text-purple-600' />
                      Technology Stack
                    </CardTitle>
                    <CardDescription>
                      Technologies and tools used to build this project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-8'>
                      {Object.entries(project.techStack)
                        .filter(([_, technologies]) => technologies.length > 0)
                        .map(([category, technologies]) => (
                          <div key={category} className='space-y-4'>
                            <h4 className='font-semibold text-lg capitalize flex items-center gap-2'>
                              <div className='w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500' />
                              {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                              {technologies.map(
                                (tech: string, index: number) => (
                                  <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: index * 0.05,
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className='group'
                                  >
                                    <div className='p-3 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/30 hover:border-border/60 hover:shadow-sm transition-all duration-300 text-center cursor-default'>
                                      <span className='font-medium text-sm group-hover:text-blue-600 transition-colors'>
                                        {tech}
                                      </span>
                                    </div>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      {Object.values(project.techStack).every(
                        (arr) => arr.length === 0
                      ) && (
                        <div className='text-center py-8 text-muted-foreground'>
                          <Code className='h-12 w-12 mx-auto mb-4 opacity-50' />
                          <p>No technology stack information available</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value='details' className='space-y-6 mt-8'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className='hover:shadow-md transition-all duration-300'>
                      <CardHeader>
                        <CardTitle>Project Information</CardTitle>
                        <CardDescription>
                          Additional details about this project
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='space-y-4'>
                        <div className='grid grid-cols-2 gap-4'>
                          <div className='space-y-2'>
                            <h4 className='font-semibold text-sm text-muted-foreground'>
                              Status
                            </h4>
                            <Badge className={statusColors[project.status]}>
                              {statusLabels[project.status]}
                            </Badge>
                          </div>
                          <div className='space-y-2'>
                            <h4 className='font-semibold text-sm text-muted-foreground'>
                              Year
                            </h4>
                            <p className='font-medium'>{project.year}</p>
                          </div>
                          {project.duration && (
                            <div className='space-y-2'>
                              <h4 className='font-semibold text-sm text-muted-foreground'>
                                Duration
                              </h4>
                              <p className='font-medium'>{project.duration}</p>
                            </div>
                          )}
                          {project.role && (
                            <div className='space-y-2'>
                              <h4 className='font-semibold text-sm text-muted-foreground'>
                                My Role
                              </h4>
                              <p className='font-medium'>{project.role}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className='hover:shadow-md transition-all duration-300'>
                      <CardHeader>
                        <CardTitle>Timeline</CardTitle>
                        <CardDescription>
                          Project development timeline
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='space-y-4'>
                        <div className='space-y-2'>
                          <h4 className='font-semibold text-sm text-muted-foreground'>
                            Created
                          </h4>
                          <p className='font-medium'>
                            {formatDate(project.createdAt)}
                          </p>
                        </div>
                        <div className='space-y-2'>
                          <h4 className='font-semibold text-sm text-muted-foreground'>
                            Last Updated
                          </h4>
                          <p className='font-medium'>
                            {formatDate(project.updatedAt)}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Enhanced Related Projects */}
          {relatedProjects.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold mb-4'>You Might Also Like</h2>
                <p className='text-muted-foreground'>
                  Other projects that showcase similar technologies and concepts
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className='group h-full'
                  >
                    <Card className='h-full flex flex-col hover:shadow-xl transition-all duration-500 bg-background/50 backdrop-blur-sm border-border/50 overflow-hidden'>
                      <div className='relative overflow-hidden flex-shrink-0'>
                        <Link href={`/projects/${relatedProject.slug}`}>
                          <Image
                            src={
                              relatedProject.featuredImage || '/placeholder.svg'
                            }
                            alt={relatedProject.title}
                            width={600}
                            height={400}
                            className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
                          />
                          <motion.div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        </Link>
                        <div className='absolute top-4 right-4 flex gap-2'>
                          <Badge
                            className={statusColors[relatedProject.status]}
                          >
                            {statusLabels[relatedProject.status]}
                          </Badge>
                        </div>
                        <div className='absolute top-4 left-4'>
                          <Badge
                            variant='outline'
                            className='bg-background/80 backdrop-blur-sm shadow-lg'
                          >
                            {relatedProject.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className='flex-shrink-0'>
                        <div className='flex items-start justify-between'>
                          <div className='min-w-0 flex-1'>
                            <CardTitle className='group-hover:text-blue-600 transition-colors line-clamp-2'>
                              <Link
                                href={`/projects/${relatedProject.slug}`}
                                className='md:text-2xl'
                              >
                                {relatedProject.title}
                              </Link>
                            </CardTitle>
                            {relatedProject.subtitle && (
                              <CardDescription className='mt-1 line-clamp-1'>
                                {relatedProject.subtitle}
                              </CardDescription>
                            )}
                          </div>
                          <Badge
                            variant='outline'
                            className='text-xs ml-2 flex-shrink-0'
                          >
                            <Calendar className='h-3 w-3 mr-1' />
                            {relatedProject.year}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className='space-y-4 flex-1 flex flex-col'>
                        <p className='text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1'>
                          {relatedProject.description}
                        </p>

                        {/* Tech Stack Preview */}
                        <div className='space-y-2'>
                          <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                            <Code className='h-3 w-3' />
                            <span>Tech Stack</span>
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            {getAllTechFromProject(relatedProject)
                              .slice(0, 3)
                              .map((tech) => (
                                <Badge
                                  key={tech}
                                  variant='outline'
                                  className='text-xs'
                                >
                                  {tech}
                                </Badge>
                              ))}
                            {getAllTechFromProject(relatedProject).length >
                              3 && (
                              <Badge variant='outline' className='text-xs'>
                                +
                                {getAllTechFromProject(relatedProject).length -
                                  3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className='flex gap-2 flex-shrink-0'>
                        <Button
                          variant='outline'
                          size='sm'
                          asChild
                          className='flex-1 bg-transparent'
                        >
                          <Link
                            href={relatedProject.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='h-4 w-4 mr-2' />
                            Live
                          </Link>
                        </Button>
                        {relatedProject.githubUrl && (
                          <Button
                            variant='outline'
                            size='sm'
                            asChild
                            className='flex-1 bg-transparent'
                          >
                            <Link
                              href={relatedProject.githubUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <FaGithub className='h-4 w-4 mr-2' />
                              Code
                            </Link>
                          </Button>
                        )}
                        <Button size='sm' asChild className='flex-1'>
                          <Link href={`/projects/${relatedProject.slug}`}>
                            <Zap className='h-4 w-4 mr-2' />
                            Details
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <EmptyState
              variant='projects'
              title='No related projects'
              description="This project doesn't have any related projects at the moment."
            />
          )}
        </div>
      </main>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center'
            onClick={closeFullscreen}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeFullscreen}
              className='absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10'
              aria-label='Close fullscreen'
            >
              <X className='h-6 w-6' />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4'
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[currentImageIndex] || '/placeholder.svg'}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                width={1920}
                height={1080}
                className='max-w-full max-h-full object-contain'
                priority
              />

              {/* Fullscreen Navigation */}
              {allImages.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1, x: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevImage}
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white'
                    aria-label='Previous image'
                  >
                    <ChevronLeft className='h-8 w-8' />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextImage}
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 size-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 text-white'
                    aria-label='Next image'
                  >
                    <ChevronRight className='h-8 w-8' />
                  </motion.button>
                </>
              )}

              {/* Fullscreen Counter */}
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm'>
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
