export interface Skill {
  id: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Mobile' | 'Design' | 'Other';
  proficiency: number; // 1-100
  icon: string;
  color: string;
  description: string;
  yearsOfExperience: number;
}

export interface Tool {
  id: number;
  name: string;
  category: 'Development' | 'Design' | 'Productivity' | 'DevOps';
  icon: string;
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    name: "React",
    category: "Frontend",
    proficiency: 95,
    icon: "⚛️",
    color: "#61DAFB",
    description: "Advanced React development with hooks, context, and modern patterns",
    yearsOfExperience: 4
  },
  {
    id: 2,
    name: "TypeScript",
    category: "Frontend",
    proficiency: 90,
    icon: "🔷",
    color: "#3178C6",
    description: "Strong typing, advanced types, and enterprise-level TypeScript",
    yearsOfExperience: 3
  },
  {
    id: 3,
    name: "Next.js",
    category: "Frontend",
    proficiency: 85,
    icon: "▲",
    color: "#000000",
    description: "Full-stack React framework with SSR and API routes",
    yearsOfExperience: 2
  },
  {
    id: 4,
    name: "Vue.js",
    category: "Frontend",
    proficiency: 80,
    icon: "💚",
    color: "#4FC08D",
    description: "Progressive framework with Vuex and Vue Router",
    yearsOfExperience: 2
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: 90,
    icon: "🎨",
    color: "#06B6D4",
    description: "Utility-first CSS framework for rapid UI development",
    yearsOfExperience: 3
  },
  
  // Backend
  {
    id: 6,
    name: "Node.js",
    category: "Backend",
    proficiency: 90,
    icon: "🟢",
    color: "#339933",
    description: "Server-side JavaScript with Express and modern frameworks",
    yearsOfExperience: 4
  },
  {
    id: 7,
    name: "Python",
    category: "Backend",
    proficiency: 85,
    icon: "🐍",
    color: "#3776AB",
    description: "Django, Flask, and data science applications",
    yearsOfExperience: 3
  },
  {
    id: 8,
    name: "PHP",
    category: "Backend",
    proficiency: 75,
    icon: "🐘",
    color: "#777BB4",
    description: "Laravel framework and modern PHP development",
    yearsOfExperience: 2
  },
  {
    id: 9,
    name: "GraphQL",
    category: "Backend",
    proficiency: 80,
    icon: "🔗",
    color: "#E10098",
    description: "API design and implementation with Apollo",
    yearsOfExperience: 2
  },
  
  // Database
  {
    id: 10,
    name: "PostgreSQL",
    category: "Database",
    proficiency: 85,
    icon: "🐘",
    color: "#336791",
    description: "Advanced SQL, optimization, and database design",
    yearsOfExperience: 3
  },
  {
    id: 11,
    name: "MongoDB",
    category: "Database",
    proficiency: 80,
    icon: "🍃",
    color: "#47A248",
    description: "NoSQL database design and aggregation pipelines",
    yearsOfExperience: 3
  },
  {
    id: 12,
    name: "Redis",
    category: "Database",
    proficiency: 75,
    icon: "🔴",
    color: "#DC382D",
    description: "Caching, session management, and pub/sub",
    yearsOfExperience: 2
  },
  
  // DevOps
  {
    id: 13,
    name: "AWS",
    category: "DevOps",
    proficiency: 80,
    icon: "☁️",
    color: "#FF9900",
    description: "EC2, S3, Lambda, RDS, and cloud architecture",
    yearsOfExperience: 2
  },
  {
    id: 14,
    name: "Docker",
    category: "DevOps",
    proficiency: 85,
    icon: "🐳",
    color: "#2496ED",
    description: "Containerization and orchestration",
    yearsOfExperience: 3
  },
  {
    id: 15,
    name: "Git",
    category: "DevOps",
    proficiency: 90,
    icon: "📝",
    color: "#F05032",
    description: "Version control, branching strategies, and collaboration",
    yearsOfExperience: 5
  },
  
  // Mobile
  {
    id: 16,
    name: "React Native",
    category: "Mobile",
    proficiency: 75,
    icon: "📱",
    color: "#61DAFB",
    description: "Cross-platform mobile app development",
    yearsOfExperience: 2
  },
  
  // Design
  {
    id: 17,
    name: "Figma",
    category: "Design",
    proficiency: 70,
    icon: "🎨",
    color: "#F24E1E",
    description: "UI/UX design and prototyping",
    yearsOfExperience: 2
  }
];

export const tools: Tool[] = [
  {
    id: 1,
    name: "VS Code",
    category: "Development",
    icon: "💻",
    description: "Primary code editor with extensive customization"
  },
  {
    id: 2,
    name: "Postman",
    category: "Development",
    icon: "📮",
    description: "API testing and documentation"
  },
  {
    id: 3,
    name: "Figma",
    category: "Design",
    icon: "🎨",
    description: "Design collaboration and prototyping"
  },
  {
    id: 4,
    name: "Notion",
    category: "Productivity",
    icon: "📝",
    description: "Project management and documentation"
  },
  {
    id: 5,
    name: "Slack",
    category: "Productivity",
    icon: "💬",
    description: "Team communication and collaboration"
  },
  {
    id: 6,
    name: "GitHub",
    category: "DevOps",
    icon: "🐙",
    description: "Code hosting and CI/CD pipelines"
  }
];

export const skillCategories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Mobile',
  'Design',
  'Other'
] as const;