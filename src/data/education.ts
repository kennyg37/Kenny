export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  gpa?: string;
  achievements: string[];
  description: string;
  logo?: string;
}

export const education: Education[] = [
  {
    id: 1,
    institution: "African Leadership University (ALU)",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    startDate: "Sep 2022",
    endDate: "Feb 2025",
    location: "Kigali, Rwanda",
    achievements: [
      "Specialized in machine learning",
      "Studied software engineering fundamentals",
      "Participated in various coding projects",
      "Learned modern development practices",
      "Gained hands-on experience with real-world applications"
    ],
    description: "Studied software engineering at the African Leadership University with a specialization in machine learning. Focused on developing clean web and mobile applications with intuitive functionalities and robust machine learning models and systems.",
    logo: "/assets/images/alu.png"
  }
];