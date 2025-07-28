export interface TechStack {
  frontend: string[];
  backend: string[];
  devops: string[];
  database?: string[];
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
    title: 'Pro HR Dashboard',
    subtitle: 'Smart Recruitment Platform',
    description:
      'Intelligent HR management dashboard with automated CV parsing, candidate tracking, and recruitment analytics. Streamlines the entire hiring process with data-driven insights.',
    features: [
      'Candidate tracking system',
      'Interview scheduling automation',
      'Performance analytics dashboard',
      'Team collaboration tools',
      'Custom reporting system',
    ],
    techStack: {
      frontend: ['Next.js', 'Tanstack query', 'Formik', 'Yup', 'Tailwind CSS'],
      backend: ['Python', 'Django'],
      devops: ['Docker', 'GitHub Actions'],
      database: ['PostgreSQL'],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753032004/pro_1_bjoker.png',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753032004/pro_1_bjoker.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753032005/pro_2_wll2vb.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753032005/pro_3_llb5cr.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753030435/phr_1_bmiaoi.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753030433/phr_2_ixfomv.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753030432/phr_3_pvdijs.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753030431/phr_4_s5gcwm.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753030452/phr_5_ddsmyf.png',
    ],
    liveUrl: 'https://prohr.com',
    status: 'ONGOING',
    categoryId: 'dashboard',
    category: 'Dashboard',
    userId: 'user-1',
    year: '2023',
    duration: '4 months',
    role: 'Frontend Developer',
    slug: 'pro-hr-dashboard',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-05-01T00:00:00.000Z',
  },
  {
    id: '3',
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
      frontend: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Tanstack query',
        'Formik',
        'Yup',
      ],
      backend: ['Python', 'Django'],
      devops: ['Docker', 'AWS', 'GitHub Actions'],
      database: ['PostgreSQL'],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/6ef3ea16dbb60b3fee3813b2472ebef66463e2da-1280x769_slvnjq.webp',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/71b66b0e57b4261c9416de0efbcfa5753a757e76-1280x1000_r4v6st.jpg',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/53114525bdc613a555e3508819efb08c61b0d1f6-1280x1000_bmq7rx.jpg',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/5d85d650709295046b46363bc6e08f13a5744cc9-1280x1000_axpz8n.jpg',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/36b6c5455d92625b60e36a78865a8abccd07f5bb-1280x1000_ohop9b.jpg',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1752698537/8cbbcaa64c75afb9a3a7df59f82e8d31e1079b21-1280x1000_fsxme0.jpg',
    ],
    liveUrl: 'https://pharmik.com',
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
    id: '4',
    title: 'Young Sprouts Therapy Website',
    subtitle: 'Child, Teen, and Family Therapy Platform',
    description:
      'A modern, accessible website for Young Sprouts Therapy, a leading child, teen, and family therapy clinic in Vaughan and Thornhill. The site provides information about services, therapists, and mental health resources, and enables families to easily book consultations and access support. Built with a focus on accessibility, SEO, and user experience for families seeking evidence-based psychotherapy and counselling.',
    features: [
      'Service listings for child, teen, and family therapy',
      'Therapist team profiles and bios',
      'Online appointment booking and free consult requests',
      'Detailed descriptions of therapy modalities (CBT, Play Therapy, etc.)',
      'Blog for mental health resources and clinic updates',
      'Insurance and coverage information',
      'Contact forms and location details',
      'Responsive design for mobile and desktop',
      'Accessibility and SEO best practices',
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Sanity'],
      devops: ['Vercel'],
      database: ['Sanity'],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753028179/yst_1_luowou.png',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753028179/yst_1_luowou.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753028181/yst_2_xt9ody.png',

      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753028589/yst_4_hcvp5m.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753028726/yst_5_wqi1gv.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753028176/yst_6_pmtbgj.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753028180/yst_7_xarftg.png',
    ],
    liveUrl: 'https://www.youngsproutstherapy.com/',
    githubUrl: 'https://github.com/Asraful-code235/youngsproutstherapy',
    status: 'COMPLETED',
    categoryId: 'client-project',
    category: 'Client-Project',
    userId: 'user-1',
    year: '2025',
    duration: '2 months',
    role: 'Frontend Developer',
    slug: 'youngsprouts-therapy-website',
    createdAt: '2025-05-01T00:00:00.000Z',
    updatedAt: '2025-07-01T00:00:00.000Z',
  },
  {
    id: '5',
    title: 'SI3 (Solar Intelligence) Website',
    subtitle: 'Space Intelligence Ecosystem Platform',
    description:
      "A modern, branded website for Solar Intelligence, Inc. (SI3), designed to showcase their mission, ecosystem, and brand identity in the space intelligence sector. The site features a clean, futuristic design, easy navigation, and resources for users to learn about SI3's mission, policies, and brand kit. It also integrates newsletter signup and social media links for community engagement.",
    features: [
      'Mission and ecosystem overview',
      'Brand kit and policy resources',
      'Newsletter signup integration',
      'Social media links (Twitter, LinkedIn)',
      'Responsive, modern design',
      'Accessible navigation and layout',
      'SEO best practices',
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: [],
      devops: ['Vercel'],
      database: [],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753001413/FireShot_Capture_011_-_SI_3_Ecosystem_-_www.si3.space_dtg2fm.png',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753001413/FireShot_Capture_011_-_SI_3_Ecosystem_-_www.si3.space_dtg2fm.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753001416/FireShot_Capture_012_-_SI_3_Ecosystem_-_www.si3.space_t7qrf3.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753001417/FireShot_Capture_014_-_SI_3_Ecosystem_-_www.si3.space_meqtdx.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753001415/FireShot_Capture_018_-_Our_Mission_-_www.si3.space_cas3ln.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753026611/FireShot_Capture_021_-_Our_Mission_-_www.si3.space_rqx1nb.png',
    ],
    liveUrl: 'https://www.si3.space',
    githubUrl: 'https://github.com/Asraful-code235/karameleon-website',
    status: 'COMPLETED',
    categoryId: 'client-project',
    category: 'Client-Project',
    userId: 'user-1',
    year: '2024',
    duration: '1 month',
    role: 'Frontend Developer',
    slug: 'si3-website',
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2024-07-01T00:00:00.000Z',
  },
  {
    id: '6',
    title: 'Ecodure Flooring Website',
    subtitle: 'Innovative Flooring Products Platform',
    description:
      'A modern, user-friendly website for Ecodure Flooring, a New Zealand-based company specializing in innovative, sustainable flooring solutions. The site showcases a wide range of flooring categories, brands, and technologies, and provides resources for customers to order samples, book consultations, and learn about sustainable flooring options.',
    features: [
      'Product catalog for wood, rigid/hybrid, acoustic, laminate, and carpet flooring',
      'Brand and technology highlights (Duracore, BJELIN, COREtec, etc.)',
      'Online sample ordering and consultation booking',
      'Customer reviews and testimonials',
      'Showroom and contact information',
      'Sustainability and certification details',
      'Responsive design for mobile and desktop',
      'SEO and accessibility best practices',
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Sanity'],
      devops: ['Vercel'],
      database: ['Sanity'],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753090507/eco_1_dyywgk.png',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753090507/eco_1_dyywgk.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753090507/eco_2_m3svc0.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753090511/eco_4_cqrhfb.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753090504/eco_5_vea7nj.png',
    ],
    liveUrl: 'https://www.ecodureflooring.co.nz',
    githubUrl: 'https://github.com/Asraful-code235/ecodure',
    status: 'COMPLETED',
    categoryId: 'client-project',
    category: 'Client-Project',
    userId: 'user-1',
    year: '2023',
    duration: '2 months',
    role: 'Frontend Developer',
    slug: 'ecodure-flooring-website',
    createdAt: '2023-07-01T00:00:00.000Z',
    updatedAt: '2023-09-01T00:00:00.000Z',
  },
  {
    id: '7',
    title: 'CardiCheck - Telehealth Platform',
    subtitle: 'Remote Cardiology Care',
    description:
      'A comprehensive telehealth platform connecting patients with cardiologists for remote cardiac care. The platform features secure video consultations, appointment booking, prescription management, and personal health record tracking, making cardiac healthcare accessible from home.',
    features: [
      'Secure authentication for patients and doctors',
      'Appointment booking and management',
      'Real-time video consultations via Twilio',
      'E-prescription generation and management',
      'Personal health records tracking',
      'Real-time chat functionality',
      'Dashboards for patients, doctors and organization',
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Tanstack Query'],
      backend: ['Python', 'Django'],
      devops: ['Vercel', 'Docker'],
      database: ['PostgreSQL'],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753110500/cardi_1_geyysi.png',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753110500/cardi_1_geyysi.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753110498/cardi_2_pmmkqi.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753110496/cardi_3_ozfya9.png',
    ],
    liveUrl: 'https://telehealth-nextjs.vercel.app/en',
    status: 'COMPLETED',
    categoryId: 'dashboard',
    category: 'Dashboard',
    userId: 'user-1',
    year: '2024',
    duration: '6 months',
    role: 'Full-Stack Developer',
    slug: 'cardi-check-telehealth',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-07-01T00:00:00.000Z',
  },
  {
    id: '8',
    title: 'Bookoria - Online Bookstore',
    subtitle: 'E-commerce Platform for Book Lovers',
    description:
      'A full-stack e-commerce application designed for book enthusiasts. The platform allows users to browse, search, and purchase books from a wide catalog. It features a modern, responsive interface and secure payment processing through the ShurjoPay gateway.',
    features: [
      'Extensive book catalog with search and filtering',
      'User authentication and personal profiles',
      'Shopping cart and wishlist functionality',
      'Secure checkout with ShurjoPay integration',
      'Order history and tracking for users',
      'State management with Redux Toolkit and RTK Query',
      'Robust form validation with React Hook Form and Zod',
    ],
    techStack: {
      frontend: [
        'React',
        'Redux Toolkit',
        'RTK Query',
        'Tailwind CSS',
        'React Hook Form',
        'Zod',
      ],
      backend: ['Node.js', 'Express.js', 'Mongoose'],
      devops: ['Vercel'],
      database: ['MongoDB'],
    },
    featuredImage:
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753111462/bookoria_1_myjxuk.png',
    images: [
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753111462/bookoria_1_myjxuk.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753111449/bookoria_2_gxgxnc.png',
      'https://res.cloudinary.com/duxjoty1l/image/upload/v1753111428/FireShot_Capture_061_-_Bookoria_-_bookoria.vercel.app_ehyl4t.png',
    ],
    liveUrl: 'https://bookoria.vercel.app/',
    githubUrl: 'https://github.com/Sazz07/bookoria-client',
    status: 'COMPLETED',
    categoryId: 'ecommerce',
    category: 'E-commerce',
    userId: 'user-1',
    year: '2023',
    duration: '4 months',
    role: 'Full-Stack Developer',
    slug: 'bookoria-online-bookstore',
    createdAt: '2023-08-01T00:00:00.000Z',
    updatedAt: '2023-12-01T00:00:00.000Z',
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
  { id: 'client-project', name: 'Client-Project' },
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
