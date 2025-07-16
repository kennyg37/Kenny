export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'Web App' | 'Mobile App' | 'API' | 'Design' | 'Full Stack';
  status: 'Completed' | 'In Progress' | 'Planning';
  year: number;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: string;
  role: string;
  teamSize?: number;
  duration: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Shelfswap",
    description: "A modern e-commerce platform for swapping and trading items",
    longDescription: "Developed a comprehensive e-commerce solution that allows users to swap and trade items. The platform features user authentication, item management, and a sophisticated matching system for trades.",
    image: "/assets/images/project-1.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Vercel"],
    category: "Full Stack",
    status: "Completed",
    year: 2024,
    liveUrl: "https://shelfswap-six.vercel.app",
    features: [
      "User authentication and profiles",
      "Item listing and management",
      "Advanced search and filtering",
      "Trade matching system",
      "Real-time notifications",
      "Responsive design for all devices"
    ],
    challenges: [
      "Implementing secure user authentication",
      "Creating an efficient matching algorithm",
      "Handling real-time updates",
      "Optimizing database queries"
    ],
    solutions: [
      "Used JWT for secure authentication",
      "Implemented Redis for caching",
      "Used WebSocket for real-time features",
      "Optimized database with proper indexing"
    ],
    impact: "Successfully launched with positive user feedback and active trading community",
    role: "Full Stack Developer",
    teamSize: 3,
    duration: "3 months"
  },
  {
    id: 2,
    title: "Veresa Umuganda",
    description: "Community service tracking and management platform",
    longDescription: "Built a platform for tracking and managing community service activities. The system helps communities organize and track their contributions to local development projects.",
    image: "/assets/images/project-2.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Google Drive API"],
    category: "Web App",
    status: "Completed",
    year: 2022,
    liveUrl: "https://drive.google.com/file/d/14DOUXVasdkEdlC-nv5hfZP5_DQSWJjUo/view?usp=sharing",
    features: [
      "Community service tracking",
      "Project management tools",
      "Reporting and analytics",
      "User role management",
      "Document storage and sharing",
      "Mobile-responsive design"
    ],
    challenges: [
      "Managing complex user permissions",
      "Integrating with Google Drive API",
      "Handling large datasets",
      "Ensuring data privacy"
    ],
    solutions: [
      "Implemented role-based access control",
      "Used Google Drive API for document storage",
      "Implemented efficient data pagination",
      "Added comprehensive data encryption"
    ],
    impact: "Helped communities better organize and track their development projects",
    role: "Full Stack Developer",
    teamSize: 1,
    duration: "2 months"
  },
  {
    id: 3,
    title: "Virtulearn",
    description: "Virtual learning platform with interactive features",
    longDescription: "Created an innovative virtual learning platform that provides interactive educational experiences. The platform includes video conferencing, course management, and collaborative learning tools.",
    image: "/assets/images/project-3.png",
    technologies: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB", "Vercel"],
    category: "Web App",
    status: "Completed",
    year: 2023,
    liveUrl: "https://virtulearn-fn.vercel.app/",
    features: [
      "Real-time video conferencing",
      "Course creation and management",
      "Interactive whiteboard",
      "File sharing and collaboration",
      "Progress tracking",
      "Multi-language support"
    ],
    challenges: [
      "Implementing real-time video streaming",
      "Managing concurrent users",
      "Handling large file uploads",
      "Ensuring low-latency communication"
    ],
    solutions: [
      "Used WebRTC for peer-to-peer video",
      "Implemented Socket.io for real-time features",
      "Used cloud storage for file management",
      "Optimized for low-latency connections"
    ],
    impact: "Enabled remote learning for hundreds of students during the pandemic",
    role: "Full Stack Developer",
    teamSize: 1,
    duration: "6 months"
  },
  {
    id: 4,
    title: "KEMO Initiative",
    description: "Non-profit organization website and management system",
    longDescription: "Developed a comprehensive website and management system for the KEMO Initiative, a non-profit organization. The platform includes donation management, event tracking, and volunteer coordination.",
    image: "/assets/images/project-5.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
    category: "Full Stack",
    status: "Completed",
    year: 2024,
    liveUrl: "https://kemo-initiative.vercel.app/",
    features: [
      "Donation management system",
      "Event organization and tracking",
      "Volunteer coordination",
      "Impact reporting",
      "Secure payment processing",
      "Admin dashboard"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing sensitive donor information",
      "Creating intuitive admin interfaces",
      "Ensuring accessibility compliance"
    ],
    solutions: [
      "Integrated Stripe for secure payments",
      "Implemented comprehensive data encryption",
      "Created role-based admin system",
      "Added WCAG accessibility features"
    ],
    impact: "Increased donations by 40% and improved volunteer engagement",
    role: "Full Stack Developer",
    teamSize: 3,
    duration: "5 months"
  },
  {
    id: 5,
    title: "Project 06",
    description: "Advanced web application with modern technologies",
    longDescription: "Developed a sophisticated web application showcasing modern development practices and cutting-edge technologies. The project demonstrates advanced UI/UX design and robust backend architecture.",
    image: "/assets/images/project-6.png",
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "Docker", "AWS"],
    category: "Full Stack",
    status: "Completed",
    year: 2024,
    features: [
      "Modern responsive design",
      "Advanced state management",
      "Real-time data synchronization",
      "Progressive Web App features",
      "Comprehensive testing suite",
      "CI/CD pipeline"
    ],
    challenges: [
      "Implementing complex state management",
      "Optimizing for performance",
      "Ensuring cross-browser compatibility",
      "Setting up automated testing"
    ],
    solutions: [
      "Used Redux Toolkit for state management",
      "Implemented code splitting and lazy loading",
      "Added comprehensive browser testing",
      "Set up Jest and Cypress for testing"
    ],
    impact: "Demonstrated advanced development skills and modern best practices",
    role: "Full Stack Developer",
    teamSize: 1,
    duration: "2 months"
  }
];

export const projectCategories = ['All', 'Web App', 'Mobile App', 'API', 'Design', 'Full Stack'];
export const projectStatuses = ['All', 'Completed', 'In Progress', 'Planning'];