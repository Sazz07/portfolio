'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Search,
  Grid,
  List,
  ExternalLink,
  Zap,
  Calendar,
  Code,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Loading } from '@/components/ui/loading';
import { SearchEmptyState } from '@/components/ui/empty-state';
import Image from 'next/image';
import Link from 'next/link';
import {
  projectsData,
  categories,
  statusLabels,
  statusColors,
} from '@/lib/projects-data';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'year' | 'title' | 'updated'>('updated');
  const [isLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    const filtered = projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.values(project.techStack).some(
          (techArray) =>
            Array.isArray(techArray) &&
            techArray.some((tech) =>
              tech.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

      const matchesCategory =
        selectedCategory === 'all' || project.categoryId === selectedCategory;

      const matchesStatus =
        selectedStatus === 'all' || project.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    // Sort projects
    filtered.sort((a, b) => {
      if (sortBy === 'year') {
        return Number.parseInt(b.year) - Number.parseInt(a.year);
      } else if (sortBy === 'updated') {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      }
      return a.title.localeCompare(b.title);
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedStatus, sortBy]);

  const getAllTechFromProject = (project: (typeof projectsData)[0]) => {
    return Object.values(project.techStack).flat().filter(Boolean);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedStatus('all');
  };

  if (isLoading) {
    return <Loading variant='pulse' size='lg' text='Loading projects...' />;
  }

  return (
    <main className='min-h-screen pt-20 lg:pt-0 lg:ml-20'>
      <div className='px-6 lg:px-12 py-12'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12'
        >
          <Link
            href='/'
            className='inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group transition-colors'
          >
            <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className='h-4 w-4 mr-2' />
            </motion.div>
            <span>Back to Home</span>
          </Link>

          <div className='space-y-4'>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-4xl lg:text-6xl font-bold'
            >
              All Projects
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='h-1 bg-gradient-to-r from-blue-500 to-purple-500'
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='text-muted-foreground text-lg max-w-2xl leading-relaxed'
            >
              A comprehensive collection of my work, showcasing various
              technologies and solutions I&apos;ve built over the years. Each
              project represents a unique challenge and learning experience.
            </motion.p>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mb-12 space-y-6'
        >
          {/* Search and View Controls */}
          <div className='flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between'>
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
              <Input
                placeholder='Search projects, technologies...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='pl-10 bg-background/50 backdrop-blur-sm border-border/50'
              />
            </div>
            <div className='flex items-center gap-2'>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size='sm'
                onClick={() => setViewMode('grid')}
                aria-label='Grid view'
                className={
                  viewMode === 'grid'
                    ? 'bg-primary text-background'
                    : 'bg-background/50 text-muted-foreground hover:text-foreground'
                }
                title='Grid view'
              >
                <Grid className='h-4 w-4' />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size='sm'
                onClick={() => setViewMode('list')}
                aria-label='List view'
                className={
                  viewMode === 'list'
                    ? 'bg-primary text-background'
                    : 'bg-background/50 text-muted-foreground hover:text-foreground'
                }
                title='List view'
              >
                <List className='h-4 w-4' />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className='space-y-3'>
            <h3 className='text-sm font-medium text-muted-foreground'>
              Categories
            </h3>
            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-foreground text-background shadow-lg'
                      : 'bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Status Filters */}
          <div className='space-y-3'>
            <h3 className='text-sm font-medium text-muted-foreground'>
              Status
            </h3>
            <div className='flex flex-wrap gap-2'>
              <motion.button
                onClick={() => setSelectedStatus('all')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedStatus === 'all'
                    ? 'bg-foreground text-background shadow-lg'
                    : 'bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                All Status
              </motion.button>
              {Object.entries(statusLabels).map(([status, label]) => (
                <motion.button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedStatus === status
                      ? 'bg-foreground text-background shadow-lg'
                      : 'bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count and Sort */}
          <div className='flex items-center justify-between text-sm text-muted-foreground'>
            <span>
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? 's' : ''} found
            </span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'year' | 'title' | 'updated')
              }
              className='bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1 text-sm'
            >
              <option value='updated'>Sort by Last Updated</option>
              <option value='year'>Sort by Year</option>
              <option value='title'>Sort by Title</option>
            </select>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode='wait'>
          {filteredProjects.length === 0 ? (
            <SearchEmptyState
              searchTerm={searchTerm || 'your filters'}
              onClear={clearFilters}
            />
          ) : (
            <motion.div
              key={`${viewMode}-${selectedCategory}-${selectedStatus}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={
                viewMode === 'grid'
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className='group h-full'
                >
                  {viewMode === 'grid' ? (
                    <Card className='h-full flex flex-col hover:shadow-xl transition-all duration-500 bg-background/50 backdrop-blur-sm border-border/50 overflow-hidden'>
                      <div className='relative overflow-hidden flex-shrink-0'>
                        <Link href={`/projects/${project.slug}`}>
                          <Image
                            src={project.featuredImage || '/placeholder.svg'}
                            alt={project.title}
                            width={600}
                            height={400}
                            className='w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500'
                          />
                          <motion.div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        </Link>
                        <div className='absolute top-4 right-4 flex gap-2'>
                          <Badge className={statusColors[project.status]}>
                            {statusLabels[project.status]}
                          </Badge>
                        </div>
                        <div className='absolute top-4 left-4'>
                          <Badge
                            variant='outline'
                            className='bg-background/80 backdrop-blur-sm shadow-lg'
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className='flex-shrink-0'>
                        <div className='flex items-start justify-between'>
                          <div className='min-w-0 flex-1'>
                            <CardTitle className='group-hover:text-blue-600 transition-colors line-clamp-2'>
                              <Link
                                href={`/projects/${project.slug}`}
                                className='md:text-2xl'
                              >
                                {project.title}
                              </Link>
                            </CardTitle>
                            {project.subtitle && (
                              <CardDescription className='mt-1 line-clamp-1'>
                                {project.subtitle}
                              </CardDescription>
                            )}
                          </div>
                          <Badge
                            variant='outline'
                            className='text-xs ml-2 flex-shrink-0'
                          >
                            <Calendar className='h-3 w-3 mr-1' />
                            {project.year}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className='space-y-4 flex-1 flex flex-col'>
                        <p className='text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1'>
                          {project.description}
                        </p>

                        {/* Tech Stack Preview */}
                        <div className='space-y-2'>
                          <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                            <Code className='h-3 w-3' />
                            <span>Tech Stack</span>
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            {getAllTechFromProject(project)
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
                            {getAllTechFromProject(project).length > 3 && (
                              <Badge variant='outline' className='text-xs'>
                                +{getAllTechFromProject(project).length - 3}
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
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='h-4 w-4 mr-2' />
                            Live
                          </Link>
                        </Button>
                        {project.githubUrl && (
                          <Button
                            variant='outline'
                            size='sm'
                            asChild
                            className='flex-1 bg-transparent'
                          >
                            <Link
                              href={project.githubUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <FaGithub className='h-4 w-4 mr-2' />
                              Code
                            </Link>
                          </Button>
                        )}
                        <Button size='sm' asChild className='flex-1'>
                          <Link href={`/projects/${project.slug}`}>
                            <Zap className='h-4 w-4 mr-2' />
                            Details
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ) : (
                    <Card className='hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm border-border/50'>
                      <CardContent className='p-6'>
                        <div className='flex gap-6'>
                          <Link
                            href={`/projects/${project.slug}`}
                            className='flex-shrink-0'
                          >
                            <Image
                              src={project.featuredImage || '/placeholder.svg'}
                              alt={project.title}
                              width={256}
                              height={144}
                              className='w-64 h-36 object-cover rounded-lg hover:scale-105 transition-transform duration-300'
                            />
                          </Link>
                          <div className='flex-1 space-y-3'>
                            <div className='flex items-start justify-between'>
                              <div className='min-w-0 flex-1'>
                                <h3 className='text-xl font-semibold hover:text-blue-600 transition-colors line-clamp-1'>
                                  <Link href={`/projects/${project.slug}`}>
                                    {project.title}
                                  </Link>
                                </h3>
                                {project.subtitle && (
                                  <p className='text-muted-foreground line-clamp-1'>
                                    {project.subtitle}
                                  </p>
                                )}
                              </div>
                              <div className='flex gap-2 ml-4'>
                                <Badge className={statusColors[project.status]}>
                                  {statusLabels[project.status]}
                                </Badge>
                                <Badge variant='outline'>{project.year}</Badge>
                              </div>
                            </div>
                            <p className='text-sm text-muted-foreground leading-relaxed line-clamp-2'>
                              {project.description}
                            </p>
                            <div className='flex flex-wrap gap-1'>
                              {getAllTechFromProject(project)
                                .slice(0, 6)
                                .map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant='outline'
                                    className='text-xs'
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                            </div>
                            <div className='flex items-center gap-4 pt-2'>
                              <Button variant='outline' size='sm' asChild>
                                <Link
                                  href={project.liveUrl}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  <ExternalLink className='h-4 w-4 mr-2' />
                                  Live Demo
                                </Link>
                              </Button>
                              {project.githubUrl && (
                                <Button variant='outline' size='sm' asChild>
                                  <Link
                                    href={project.githubUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                  >
                                    <FaGithub className='h-4 w-4 mr-2' />
                                    Source
                                  </Link>
                                </Button>
                              )}
                              <Button size='sm' asChild>
                                <Link href={`/projects/${project.slug}`}>
                                  View Details
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
