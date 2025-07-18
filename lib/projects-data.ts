export interface TechStack {
  frontend: string[];
  backend: string[];
  devops: string[];
  database?: string[];
  tools?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: TechStack;
  featuredImage: string;
  images: string[];
  liveUrl: string;
  githubUrl?: string;
  status: 'ONGOING' | 'COMPLETED';
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  // Additional fields for better presentation
  category: string;
  year: string;
  duration?: string;
  role?: string;
  subtitle?: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'NeduAI - Career Planning Platform',
    subtitle: 'AI-Powered Career Guidance',
    description:
      'Revolutionary platform using artificial intelligence to help users discover their professional journey with personalized recommendations and interactive career path visualization. Built with cutting-edge AI algorithms to analyze user skills, market trends, and industry demands.',
    features: [
      'AI-powered career recommendations',
      'Interactive career path visualization',
      'Real-time market analysis',
      'Personalized learning paths',
      'Progress tracking dashboard',
      'Industry insights and trends',
    ],
    techStack: {
      frontend: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'Python'],
      devops: ['Docker', 'AWS', 'GitHub Actions'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Figma', 'Postman', 'VS Code'],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/a1676b8372b487861db7720c7b81bc01f5807af2-1280x769_1_fkclt6.webp',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/a1676b8372b487861db7720c7b81bc01f5807af2-1280x769_1_fkclt6.webp',
    ],
    liveUrl: 'https://neduai.com',
    status: 'ONGOING',
    categoryId: 'ai-platform',
    category: 'AI Platform',
    userId: 'user-1',
    year: '2024',
    duration: '8 months',
    role: 'Lead Frontend Developer',
    slug: 'neduai-career-planning',
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2024-11-01T00:00:00.000Z',
  },
  {
    id: '2',
    title: 'Pharmik E-commerce Platform',
    subtitle: 'Healthcare Commerce Solution',
    description:
      'Comprehensive pharmaceutical e-commerce platform with real-time chat, multi-vendor support, and advanced inventory management for seamless healthcare commerce. Features secure payment processing and telemedicine integration.',
    features: [
      'Multi-vendor marketplace',
      'Real-time customer support chat',
      'Advanced search and filtering',
      'Secure payment integration',
      'Inventory management system',
      'Order tracking and notifications',
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js'],
      devops: ['Docker', 'AWS', 'GitHub Actions'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Stripe API', 'WebSocket', 'Figma'],
    },
    featuredImage: '/placeholder.svg?height=600&width=1200',
    images: [
      '/placeholder.svg?height=600&width=1200',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    liveUrl: 'https://pharmik.com',
    githubUrl: 'https://github.com/sazzadhossain/pharmik',
    status: 'COMPLETED',
    categoryId: 'ecommerce',
    category: 'E-commerce',
    userId: 'user-1',
    year: '2023',
    duration: '6 months',
    role: 'Frontend Lead',
    slug: 'pharmik-ecommerce',
    createdAt: '2023-04-01T00:00:00.000Z',
    updatedAt: '2023-10-01T00:00:00.000Z',
  },
  {
    id: '3',
    title: 'Pro HR Dashboard',
    subtitle: 'Smart Recruitment Platform',
    description:
      'Intelligent HR management dashboard with automated CV parsing, candidate tracking, and recruitment analytics powered by machine learning. Streamlines the entire hiring process with data-driven insights.',
    features: [
      'Automated CV parsing and analysis',
      'Candidate tracking system',
      'Interview scheduling automation',
      'Performance analytics dashboard',
      'Team collaboration tools',
      'Custom reporting system',
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Chart.js'],
      backend: ['Node.js', 'Express.js', 'Python'],
      devops: ['Docker', 'GitHub Actions'],
      database: ['PostgreSQL'],
      tools: ['PDF.js', 'TensorFlow', 'Figma'],
    },
    featuredImage: '/placeholder.svg?height=600&width=1200',
    images: [
      '/placeholder.svg?height=600&width=1200',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
    liveUrl: 'https://prohr.com',
    githubUrl: 'https://github.com/sazzadhossain/pro-hr',
    status: 'ONGOING',
    categoryId: 'dashboard',
    category: 'Dashboard',
    userId: 'user-1',
    year: '2023',
    duration: '4 months',
    role: 'Full-Stack Developer',
    slug: 'pro-hr-dashboard',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-05-01T00:00:00.000Z',
  },
  {
    id: '4',
    title: 'TaskFlow Management App',
    subtitle: 'Team Productivity Platform',
    description:
      'Modern task management application with real-time collaboration, team coordination, and productivity analytics. Features drag-and-drop interface and comprehensive project tracking.',
    features: [
      'Real-time task collaboration',
      'Drag-and-drop interface',
      'Time tracking and reporting',
      'Project analytics dashboard',
      'Team management system',
      'Mobile responsive design',
    ],
    techStack: {
      frontend: ['React.js', 'JavaScript', 'Material-UI'],
      backend: ['Node.js', 'Express.js'],
      devops: ['Netlify', 'GitHub Actions'],
      database: ['MongoDB'],
      tools: ['Socket.io', 'JWT', 'Figma'],
    },
    featuredImage: '/placeholder.svg?height=600&width=1200',
    images: [
      '/placeholder.svg?height=600&width=1200',
      '/placeholder.svg?height=400&width=600',
    ],
    liveUrl: 'https://taskflow.app',
    githubUrl: 'https://github.com/sazzadhossain/taskflow',
    status: 'ONGOING',
    categoryId: 'productivity',
    category: 'Productivity',
    userId: 'user-1',
    year: '2023',
    duration: '3 months',
    role: 'Solo Developer',
    slug: 'taskflow-management',
    createdAt: '2023-09-01T00:00:00.000Z',
    updatedAt: '2023-12-01T00:00:00.000Z',
  },
  {
    id: '5',
    title: 'WeatherPro Dashboard',
    subtitle: 'Advanced Weather Analytics',
    description:
      'Beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts. Features comprehensive weather data visualization and historical analysis.',
    features: [
      '7-day weather forecasting',
      'Interactive weather maps',
      'Real-time weather alerts',
      'Location-based search',
      'Favorite locations management',
      'Historical weather data',
    ],
    techStack: {
      frontend: ['React.js', 'JavaScript', 'Chart.js'],
      backend: ['Node.js', 'Express.js'],
      devops: ['Vercel', 'GitHub Actions'],
      database: ['MongoDB'],
      tools: ['Weather APIs', 'Mapbox', 'PWA'],
    },
    featuredImage: '/placeholder.svg?height=600&width=1200',
    images: [
      '/placeholder.svg?height=600&width=1200',
      '/placeholder.svg?height=400&width=600',
    ],
    liveUrl: 'https://weatherpro.app',
    githubUrl: 'https://github.com/sazzadhossain/weather-dashboard',
    status: 'COMPLETED',
    categoryId: 'utility',
    category: 'Utility',
    userId: 'user-1',
    year: '2022',
    duration: '2 months',
    role: 'Solo Developer',
    slug: 'weatherpro-dashboard',
    createdAt: '2022-10-01T00:00:00.000Z',
    updatedAt: '2022-12-01T00:00:00.000Z',
  },
  {
    id: '6',
    title: 'Portfolio Website',
    subtitle: 'Modern Developer Showcase',
    description:
      'Modern, responsive portfolio website built with Next.js, featuring smooth animations and optimized performance. Showcases projects and skills with elegant design and user experience.',
    features: [
      'Responsive design system',
      'Smooth scroll animations',
      'Dark/light mode toggle',
      'SEO optimization',
      'Fast loading performance',
      'Contact form integration',
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Next.js API Routes'],
      devops: ['Vercel', 'GitHub Actions'],
      tools: ['Framer Motion', 'Figma', 'Lighthouse'],
    },
    featuredImage: '/placeholder.svg?height=600&width=1200',
    images: [
      '/placeholder.svg?height=600&width=1200',
      '/placeholder.svg?height=400&width=600',
    ],
    liveUrl: 'https://sazzadhossain.dev',
    githubUrl: 'https://github.com/sazzadhossain/portfolio',
    status: 'COMPLETED',
    categoryId: 'portfolio',
    category: 'Portfolio',
    userId: 'user-1',
    year: '2024',
    duration: '1 month',
    role: 'Designer & Developer',
    slug: 'portfolio-website',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-02-01T00:00:00.000Z',
  },
];

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'ai-platform', name: 'AI Platform' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'productivity', name: 'Productivity' },
  { id: 'utility', name: 'Utility' },
  { id: 'portfolio', name: 'Portfolio' },
];

export const statusLabels = {
  ONGOING: 'Ongoing',
  COMPLETED: 'Completed',
};

export const statusColors = {
  ONGOING: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  COMPLETED:
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
};

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getRelatedProjects(
  currentProjectId: string,
  limit = 3
): Project[] {
  return projectsData
    .filter((project) => project.id !== currentProjectId)
    .slice(0, limit);
}

export function getAllTechnologies(): string[] {
  const allTech = new Set<string>();

  projectsData.forEach((project) => {
    Object.values(project.techStack).forEach((techArray) => {
      if (Array.isArray(techArray)) {
        techArray.forEach((tech) => allTech.add(tech));
      }
    });
  });

  return Array.from(allTech).sort();
}

export function getProjectsByCategory(categoryId: string): Project[] {
  if (categoryId === 'all') return projectsData;
  return projectsData.filter((project) => project.categoryId === categoryId);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projectsData.filter((project) => project.status === status);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getProjectStats() {
  const totalProjects = projectsData.length;
  const ongoingProjects = projectsData.filter(
    (p) => p.status === 'ONGOING'
  ).length;
  const completedProjects = projectsData.filter(
    (p) => p.status === 'COMPLETED'
  ).length;

  return {
    total: totalProjects,
    ongoing: ongoingProjects,
    completed: completedProjects,
  };
}
