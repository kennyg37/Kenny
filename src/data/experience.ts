export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "Andela",
    position: "Senior Software Engineer",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Remote",
    type: "Full-time",
    description: "Leading development of scalable web applications and mentoring junior developers in a fast-paced agile environment.",
    achievements: [
      "Led a team of 5 developers on a critical client project",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 10+ junior developers across multiple projects",
      "Architected microservices handling 1M+ daily requests"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL", "GraphQL"],
    logo: "/assets/images/andela-logo.png"
  },
  {
    id: 2,
    company: "BSC (Business Service Centre)",
    position: "Full Stack Developer",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description: "Developed and maintained enterprise applications for government services, focusing on user experience and system reliability.",
    achievements: [
      "Built citizen portal serving 100K+ users monthly",
      "Reduced system downtime by 80% through monitoring improvements",
      "Implemented automated testing increasing code coverage to 90%",
      "Led migration from legacy systems to modern tech stack",
      "Collaborated with UX team to improve user satisfaction by 35%"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Linux", "Git"],
    logo: "/assets/images/bsc-logo.png"
  },
  {
    id: 3,
    company: "GIC (Government Innovation Center)",
    position: "Software Developer Intern",
    startDate: "Jan 2021",
    endDate: "May 2021",
    location: "Kigali, Rwanda",
    type: "Internship",
    description: "Contributed to digital transformation initiatives and learned enterprise development practices in government technology projects.",
    achievements: [
      "Developed mobile app prototype for citizen services",
      "Participated in agile development processes",
      "Created technical documentation for 5+ projects",
      "Collaborated with cross-functional teams",
      "Presented solutions to senior management"
    ],
    technologies: ["React Native", "Firebase", "JavaScript", "Git", "Figma"],
    logo: "/assets/images/gic-logo.png"
  }
];