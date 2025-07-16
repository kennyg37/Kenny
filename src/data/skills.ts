export interface Skill {
  id: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Mobile' | 'Design' | 'Other';
  proficiency: number; // 1-100
  icon: string;
  logo?: string; // Optional path to logo image
  color: string;
  description: string;
  yearsOfExperience: number;
}

export interface Tool {
  id: number;
  name: string;
  category: 'Development' | 'Design' | 'Productivity' | 'DevOps';
  icon: string;
  logo?: string; // Optional path to logo image
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    name: "HTML5",
    category: "Frontend",
    proficiency: 95,
    icon: "🌐",
    logo: "/assets/images/html5.png",
    color: "#E34F26",
    description: "Semantic HTML markup and accessibility best practices",
    yearsOfExperience: 2
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend",
    proficiency: 90,
    icon: "🎨",
    logo: "/assets/images/css3.png",
    color: "#1572B6",
    description: "Advanced CSS including Flexbox, Grid, and animations",
    yearsOfExperience: 2
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend",
    proficiency: 85,
    icon: "📜",
    logo: "/assets/images/javascript.png",
    color: "#F7DF1E",
    description: "ES6+ features, DOM manipulation, and modern JavaScript",
    yearsOfExperience: 2
  },
  {
    id: 4,
    name: "TypeScript",
    category: "Frontend",
    proficiency: 80,
    icon: "🔷",
    logo: "/assets/images/typescript.png",
    color: "#3178C6",
    description: "Type-safe JavaScript development with advanced types",
    yearsOfExperience: 1
  },
  {
    id: 5,
    name: "React",
    category: "Frontend",
    proficiency: 85,
    icon: "⚛️",
    logo: "/assets/images/react.png",
    color: "#61DAFB",
    description: "Modern React with hooks, context, and component architecture",
    yearsOfExperience: 2
  },
  {
    id: 6,
    name: "Vue.js",
    category: "Frontend",
    proficiency: 70,
    icon: "💚",
    logo: "/assets/images/vue.png",
    color: "#4FC08D",
    description: "Progressive framework with Vuex and Vue Router",
    yearsOfExperience: 1
  },
  {
    id: 7,
    name: "Angular",
    category: "Frontend",
    proficiency: 65,
    icon: "🅰️",
    logo: "/assets/images/angular.png",
    color: "#DD0031",
    description: "Full-featured framework with TypeScript integration",
    yearsOfExperience: 1
  },

  // Backend
  {
    id: 11,
    name: "Node.js",
    category: "Backend",
    proficiency: 80,
    icon: "🟢",
    logo: "/assets/images/nodejs.png",
    color: "#339933",
    description: "Server-side JavaScript with Express and modern frameworks",
    yearsOfExperience: 2
  },
  {
    id: 12,
    name: "Firebase",
    category: "Backend",
    proficiency: 70,
    icon: "🔥",
    logo: "/assets/images/firebase.png",
    color: "#FFCA28",
    description: "Backend-as-a-Service with real-time database",
    yearsOfExperience: 1
  },
  
  // Database
  {
    id: 13,
    name: "MongoDB",
    category: "Database",
    proficiency: 75,
    icon: "🍃",
    logo: "/assets/images/mongodb.png",
    color: "#47A248",
    description: "NoSQL database design and aggregation pipelines",
    yearsOfExperience: 2
  },
  
  // DevOps
  {
    id: 14,
    name: "Git",
    category: "DevOps",
    proficiency: 85,
    icon: "📝",
    logo: "/assets/images/git.png",
    color: "#F05032",
    description: "Version control, branching strategies, and collaboration",
    yearsOfExperience: 2
  },
  
 
  {
    id: 16,
    name: "Photoshop",
    category: "Design",
    proficiency: 65,
    icon: "🎨",
    logo: "/assets/images/photoshop.png",
    color: "#31A8FF",
    description: "Image editing and graphic design",
    yearsOfExperience: 1
  }
];

export const tools: Tool[] = [
  {
    id: 1,
    name: "VS Code",
    category: "Development",
    icon: "💻",
    logo: "/assets/images/vs-code.png",
    description: "Primary code editor with extensive customization"
  },
  {
    id: 2,
    name: "Git",
    category: "DevOps",
    icon: "📝",
    logo: "/assets/images/git.png",
    description: "Version control and collaboration"
  },
  {
    id: 3,
    name: "NPM",
    category: "Development",
    icon: "📦",
    logo: "/assets/images/npm.png",
    description: "Package management for Node.js"
  },
  {
    id: 4,
    name: "Webpack",
    category: "Development",
    icon: "📦",
    logo: "/assets/images/webpack.png",
    description: "Module bundler for JavaScript applications"
  },
  {
    id: 5,
    name: "Gulp",
    category: "Development",
    icon: "⚡",
    logo: "/assets/images/gulp.png",
    description: "Task automation and build tool"
  },
  {
    id: 6,
    name: "Command Line",
    category: "Development",
    icon: "💻",
    logo: "/assets/images/command.png",
    description: "Terminal and shell scripting"
  },
  {
    id: 7,
    name: "Trello",
    category: "Productivity",
    icon: "📋",
    logo: "/assets/images/trello.png",
    description: "Project management and task tracking"
  },
  {
    id: 8,
    name: "ClickUp",
    category: "Productivity",
    icon: "📋",
    logo: "/assets/images/clickup.png",
    description: "All-in-one project management platform"
  },
  {
    id: 9,
    name: "Slack",
    category: "Productivity",
    icon: "💬",
    logo: "/assets/images/slack.png",
    description: "Team communication and collaboration"
  },
  {
    id: 10,
    name: "Ajax",
    category: "Development",
    icon: "🔄",
    logo: "/assets/images/ajax.png",
    description: "Asynchronous JavaScript and XML"
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
];