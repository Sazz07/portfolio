'use client';

import { motion } from 'framer-motion';
import {
  Search,
  FolderOpen,
  Inbox,
  AlertCircle,
  Plus,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  variant?: 'search' | 'projects' | 'general' | 'error';
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  variant = 'general',
  title,
  description,
  action,
  className = '',
}: EmptyStateProps) {
  const variants = {
    search: {
      icon: Search,
      defaultTitle: 'No results found',
      defaultDescription:
        "Try adjusting your search terms or filters to find what you're looking for.",
      emoji: '🔍',
    },
    projects: {
      icon: FolderOpen,
      defaultTitle: 'No projects yet',
      defaultDescription:
        'Start building something amazing! Your projects will appear here once you create them.',
      emoji: '📁',
    },
    general: {
      icon: Inbox,
      defaultTitle: 'Nothing here yet',
      defaultDescription: 'This space is waiting for content to be added.',
      emoji: '📭',
    },
    error: {
      icon: AlertCircle,
      defaultTitle: 'Something went wrong',
      defaultDescription:
        'We encountered an error while loading the content. Please try again.',
      emoji: '⚠️',
    },
  };

  const config = variants[variant];
  // const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}
    >
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className='mb-6'
      >
        <div className='relative'>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className='absolute inset-0 bg-blue-500/10 rounded-full blur-xl'
          />
          {/* <div className="relative bg-muted/50 rounded-full p-6">
            <Icon className="w-12 h-12 text-muted-foreground" />
          </div> */}
        </div>
      </motion.div>

      {/* Emoji Animation */}
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        className='text-6xl mb-6'
      >
        {config.emoji}
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='text-2xl font-semibold mb-3'
      >
        {title || config.defaultTitle}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className='text-muted-foreground max-w-md leading-relaxed mb-8'
      >
        {description || config.defaultDescription}
      </motion.p>

      {/* Action Button */}
      {action && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button onClick={action.onClick} className='group'>
            {variant === 'error' ? (
              <RefreshCw className='w-4 h-4 mr-2 group-hover:animate-spin' />
            ) : (
              <Plus className='w-4 h-4 mr-2' />
            )}
            {action.label}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}

// Specialized empty states
export function SearchEmptyState({
  searchTerm,
  onClear,
}: {
  searchTerm: string;
  onClear: () => void;
}) {
  return (
    <EmptyState
      variant='search'
      title='No results found'
      description={`No results found for "${searchTerm}". Try adjusting your search terms or clearing filters.`}
      action={{
        label: 'Clear Search',
        onClick: onClear,
      }}
    />
  );
}

export function ProjectsEmptyState({
  onCreateProject,
}: {
  onCreateProject?: () => void;
}) {
  return (
    <EmptyState
      variant='projects'
      title='No projects found'
      description='Start building something amazing! Create your first project to get started.'
      action={
        onCreateProject
          ? {
              label: 'Create Project',
              onClick: onCreateProject,
            }
          : undefined
      }
    />
  );
}

export function ErrorEmptyState({ onRetry }: { onRetry: () => void }) {
  return (
    <EmptyState
      variant='error'
      title='Oops! Something went wrong'
      description='We encountered an error while loading the content. Please try refreshing the page.'
      action={{
        label: 'Try Again',
        onClick: onRetry,
      }}
    />
  );
}
