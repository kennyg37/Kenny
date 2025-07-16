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
    position: "Fullstack Engineering Trainee",
    startDate: "Feb 2024",
    endDate: "Nov 2024",
    location: "Remote",
    type: "Full-time",
    description: "Worked on different projects with Andela and gained a variety of skills in fullstack engineering. Developed mobile apps for internal projects as part of the Andela apprenticeship.",
    achievements: [
      "Developed mobile apps for internal projects as part of the Andela apprenticeship",
      "Gained comprehensive fullstack engineering skills",
      "Worked on various projects with Andela",
      "Participated in daily stand-ups and communications",
      "Used source control and project management tools"
    ],
    technologies: ["React", "Node.js", "JavaScript", "TypeScript", "Mobile Development"],
    logo: "/assets/images/logo_andela.svg"
  },
  {
    id: 2,
    company: "Broadband Systems Corporation (BSC)",
    position: "Cloud Engineering Intern",
    startDate: "Jan 2024",
    endDate: "April 2024",
    location: "Kigali, Rwanda",
    type: "Internship",
    description: "Developed cloud solutions for the company and dealt with the company's ticketing system. Worked on the company's cloud web platform.",
    achievements: [
      "Developed cloud solutions for the company",
      "Managed the company's ticketing system",
      "Worked on the company's cloud web platform",
      "Gained experience in cloud infrastructure",
      "Collaborated with IT teams on system improvements"
    ],
    technologies: ["Cloud Computing", "Web Development", "System Administration", "Ticketing Systems"],
    logo: "/assets/images/bsc.png"
  },
  {
    id: 3,
    company: "Gasabo Investment Company (GIC)",
    position: "Software and Systems Engineer",
    startDate: "Jun 2023",
    endDate: "Jan 2025",
    location: "Kigali, Rwanda",
    type: "Part-time",
    description: "Worked on the internal investment tracking system for the company, developing software solutions for investment management.",
    achievements: [
      "Developed internal investment tracking system",
      "Created software solutions for investment management",
      "Maintained and improved existing systems",
      "Provided technical support for investment operations",
      "Collaborated with investment teams on system requirements"
    ],
    technologies: ["Software Development", "System Engineering", "Investment Systems", "Database Management"],
    logo: "/assets/images/GIC.jpg"
  }
];