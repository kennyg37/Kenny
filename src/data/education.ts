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
    startDate: "2020",
    endDate: "2024",
    location: "Kigali, Rwanda",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Led the Software Engineering Club",
      "Winner of ALU Hackathon 2023",
      "Published research on AI applications in education",
      "Mentored 15+ junior students in programming"
    ],
    description: "Focused on modern software development practices, algorithms, data structures, and emerging technologies. Completed capstone project on machine learning applications.",
    logo: "/assets/images/alu-logo.png"
  },
  {
    id: 2,
    institution: "Rwanda Coding Academy",
    degree: "Certificate",
    field: "Advanced Web Development",
    startDate: "2019",
    endDate: "2020",
    location: "Kigali, Rwanda",
    achievements: [
      "Top 5% of graduating class",
      "Built 10+ full-stack applications",
      "Specialized in React and Node.js ecosystem"
    ],
    description: "Intensive program covering modern web technologies, best practices, and industry-standard development workflows.",
    logo: "/assets/images/rca-logo.png"
  }
];