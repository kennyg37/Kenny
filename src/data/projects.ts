export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'Web App' | 'Mobile App' | 'API' | 'Desktop App' | 'Other';
  status: 'Completed' | 'In Progress' | 'Planned';
  featured: boolean;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  achievements: string[];
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and secure payments",
    longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, secure payment processing with Stripe, and admin dashboard. Includes real-time notifications and inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Web App",
    status: "Completed",
    featured: true,
    links: {
      live: "https://ecommerce-demo.com",
      github: "https://github.com/yourusername/ecommerce-platform"
    },
    achievements: [
      "Handles 10K+ concurrent users",
      "99.9% uptime",
      "Integrated with 5+ payment gateways",
      "Mobile-responsive design"
    ],
    startDate: "2023-01",
    endDate: "2023-06"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription: "A modern task management application similar to Trello/Asana, featuring drag-and-drop functionality, real-time collaboration, team management, file attachments, and detailed analytics. Built with React and Socket.io for real-time features.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
    category: "Web App",
    status: "Completed",
    featured: true,
    links: {
      live: "https://taskmanager-demo.com",
      github: "https://github.com/yourusername/task-manager"
    },
    achievements: [
      "Real-time collaboration for 100+ users",
      "Drag-and-drop interface",
      "File upload and sharing",
      "Advanced filtering and search"
    ],
    startDate: "2022-08",
    endDate: "2022-12"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Beautiful weather app with location-based forecasts",
    longDescription: "A sleek weather application providing accurate forecasts, weather maps, and location-based services. Features include hourly and weekly forecasts, weather alerts, and beautiful animations. Built with React Native for cross-platform compatibility.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "TypeScript", "Weather API", "Maps API"],
    category: "Mobile App",
    status: "Completed",
    featured: false,
    links: {
      github: "https://github.com/yourusername/weather-app"
    },
    achievements: [
      "10K+ downloads",
      "4.8/5 app store rating",
      "Supports 50+ languages",
      "Offline functionality"
    ],
    startDate: "2022-03",
    endDate: "2022-05"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    longDescription: "A comprehensive social media management dashboard that aggregates data from multiple platforms, provides analytics insights, scheduling capabilities, and performance tracking. Built with modern web technologies and data visualization libraries.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "D3.js", "Laravel", "MySQL", "Chart.js"],
    category: "Web App",
    status: "In Progress",
    featured: true,
    links: {
      demo: "https://dashboard-demo.com"
    },
    achievements: [
      "Integrates with 10+ social platforms",
      "Real-time analytics",
      "Automated reporting",
      "Custom dashboard widgets"
    ],
    startDate: "2023-09"
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description: "Real-time crypto portfolio tracking and analysis",
    longDescription: "A sophisticated cryptocurrency tracking application with portfolio management, price alerts, market analysis, and trading insights. Features real-time data updates, advanced charting, and portfolio performance analytics.",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "GraphQL", "Python", "WebSocket", "TradingView"],
    category: "Web App",
    status: "Completed",
    featured: false,
    links: {
      live: "https://crypto-tracker-demo.com",
      github: "https://github.com/yourusername/crypto-tracker"
    },
    achievements: [
      "Tracks 1000+ cryptocurrencies",
      "Real-time price updates",
      "Portfolio performance analytics",
      "Price alert notifications"
    ],
    startDate: "2023-03",
    endDate: "2023-07"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform for online courses and assessments",
    longDescription: "A complete learning management system for educational institutions, featuring course creation, student enrollment, assignment submission, grading system, and progress tracking. Includes video streaming and interactive content support.",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
    category: "Web App",
    status: "Completed",
    featured: true,
    links: {
      live: "https://lms-demo.com",
      github: "https://github.com/yourusername/lms-platform"
    },
    achievements: [
      "Serves 5000+ students",
      "Video streaming capability",
      "Automated grading system",
      "Mobile-responsive design"
    ],
    startDate: "2022-01",
    endDate: "2022-08"
  }
];

export const projectCategories = [
  'All',
  'Web App',
  'Mobile App',
  'API',
  'Desktop App',
  'Other'
] as const;