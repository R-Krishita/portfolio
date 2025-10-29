export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  image: string;
  url?: string;
}

export interface Leadership {
  id: string;
  title: string;
  organization: string;
  duration: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'soft-skills';
  icon: string;
  level: number; // 1-5 scale
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  funFact: string;
  currentRole: string;
  githubUsername: string;
  linkedinUrl: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "KRISHITA HARESH RAVAT",
  title: "Full-Stack Developer | MERN Enthusiast | Innovation Leader",
  email: "krishita1829.work@gmail.com",
  phone: "+91 9372288406",
  location: "Mumbai, India",
  bio: "Passionate web developer exploring MERN stack. Growth mindset and proactive learner committed to continuous improvement and knowledge sharing. Open to collaboration and innovation in the tech landscape.",
  funFact: "I read like Mike Ross from Suits — not because I have a photographic memory, but because I love diving deep into topics until I can explain them better than the documentation itself.",
  currentRole: "General Secretary at AICTE IDEALab SAKEC, leading a 24-member cross-functional team",
  githubUsername: "R-Krishita",
  linkedinUrl: "https://www.linkedin.com/in/krishita-haresh-ravat-16535025b/"
};

// Projects
export const projects: Project[] = [
  {
    id: "happylife",
    title: "HappyLife",
    description: "Engineered a robust online doctor appointment management system with distinct administrative, doctor, and patient modules. Implemented efficient scheduling, data validation, and user access controls to enhance overall system reliability and user experience.",
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    image: "/projects/happylife.jpg",
    githubUrl: "https://github.com/R-Krishita",
    featured: true
  },
  {
    id: "workout-generator",
    title: "Workout Routine Generator",
    description: "Developed workout routine generator using the MERN stack, enabling users to personalize routines based on preferences and difficulty. Integrated MongoDB for data fetching and retrieval enhancing my expertise in full-stack development, database integration, and seamless frontend-backend coordination.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "/projects/workout-generator.jpg",
    githubUrl: "https://github.com/R-Krishita",
    featured: true
  },
  {
    id: "lead-generation",
    title: "Lead Generation Website",
    description: "Built a lead collection platform by implementing responsive forms, real-time input validation, and seamless backend integration.",
    techStack: ["React", "Node.js", "MySQL"],
    image: "/projects/lead-generation.jpg",
    githubUrl: "https://github.com/R-Krishita",
    featured: true
  }
];

// Certificates
export const certificates: Certificate[] = [
  {
    id: "deloitte-cyber",
    name: "Deloitte Australia Cyber Job Simulation",
    organization: "Deloitte Australia",
    date: "July 2025",
    image: "/certificates/deloitte-cyber.jpg",
    url: "#"
  },
  {
    id: "physics-competition",
    name: "Fun with Physics Video Competition",
    organization: "SAKEC",
    date: "2022",
    image: "/certificates/physics-competition.jpg",
    url: "#"
  },
  {
    id: "mern-certificate",
    name: "MERN Stack Development",
    organization: "Online Platform",
    date: "2023",
    image: "/certificates/mern-certificate.jpg",
    url: "#"
  },
  {
    id: "react-certificate",
    name: "React.js Advanced Concepts",
    organization: "Online Platform",
    date: "2023",
    image: "/certificates/react-certificate.jpg",
    url: "#"
  },
  {
    id: "nodejs-certificate",
    name: "Node.js Backend Development",
    organization: "Online Platform",
    date: "2023",
    image: "/certificates/nodejs-certificate.jpg",
    url: "#"
  },
  {
    id: "mongodb-certificate",
    name: "MongoDB Database Design",
    organization: "Online Platform",
    date: "2023",
    image: "/certificates/mongodb-certificate.jpg",
    url: "#"
  }
];

// Leadership Positions
export const leadership: Leadership[] = [
  {
    id: "idealab-secretary",
    title: "General Secretary",
    organization: "AICTE IDEALab SAKEC",
    duration: "May 2025 - Present",
    description: "Directing a 24 member cross-functional team to ensure seamless event execution while cultivating an environment that transforms proposed concepts into viable product-oriented solutions.",
    icon: "👥"
  },
  {
    id: "csi-cohead",
    title: "Website Team Co-Head",
    organization: "Computer Society of India - SAKEC",
    duration: "September 2023 - June 2024",
    description: "Collaborated with senior leads and a skilled team to ensure website maintenance, perform testing and debugging, and deliver a seamless user experience.",
    icon: "🌐"
  }
];

// Skills
export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "languages", icon: "🟨", level: 5 },
  { name: "Python", category: "languages", icon: "🐍", level: 4 },
  { name: "C", category: "languages", icon: "⚙️", level: 4 },
  { name: "C++", category: "languages", icon: "⚙️", level: 3 },
  { name: "PHP", category: "languages", icon: "🐘", level: 4 },
  { name: "Java", category: "languages", icon: "☕", level: 3 },
  { name: "HTML5", category: "languages", icon: "🌐", level: 5 },
  { name: "CSS3", category: "languages", icon: "🎨", level: 5 },
  
  // Frameworks
  { name: "React", category: "frameworks", icon: "⚛️", level: 5 },
  { name: "Next.js", category: "frameworks", icon: "▲", level: 4 },
  { name: "Node.js", category: "frameworks", icon: "🟢", level: 4 },
  { name: "Express.js", category: "frameworks", icon: "🚀", level: 4 },
  { name: "React Native", category: "frameworks", icon: "📱", level: 3 },
  { name: "FastAPI", category: "frameworks", icon: "⚡", level: 3 },
  
  // Databases
  { name: "MongoDB", category: "databases", icon: "🍃", level: 4 },
  { name: "MySQL", category: "databases", icon: "🐬", level: 4 },
  { name: "SQLite", category: "databases", icon: "🗃️", level: 3 },
  { name: "Supabase", category: "databases", icon: "🟢", level: 3 },
  
  // Tools
  { name: "Git", category: "tools", icon: "📝", level: 5 },
  { name: "GitHub", category: "tools", icon: "🐙", level: 5 },
  { name: "Docker", category: "tools", icon: "🐳", level: 3 },
  { name: "AWS", category: "tools", icon: "☁️", level: 3 },
  { name: "Firebase", category: "tools", icon: "🔥", level: 4 },
  { name: "Vercel", category: "tools", icon: "▲", level: 4 },
  { name: "Figma", category: "tools", icon: "🎨", level: 4 },
  { name: "Postman", category: "tools", icon: "📮", level: 4 },
  
  // Soft Skills
  { name: "Leadership", category: "soft-skills", icon: "👑", level: 5 },
  { name: "Team Management", category: "soft-skills", icon: "👥", level: 5 },
  { name: "Problem Solving", category: "soft-skills", icon: "🧩", level: 5 },
  { name: "Communication", category: "soft-skills", icon: "💬", level: 5 },
  { name: "Time Management", category: "soft-skills", icon: "⏰", level: 5 },
  { name: "Goal-Oriented", category: "soft-skills", icon: "🎯", level: 5 }
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: `https://github.com/${personalInfo.githubUsername}`,
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedinUrl,
    icon: "linkedin"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "mail"
  }
];

// Education
export const education = {
  degree: "Bachelor of Engineering in Computer Engineering",
  university: "SAKEC, Mumbai",
  duration: "2022-2026",
  cgpa: "8.47",
  school: "D.A.V. International School, Kharghar",
  schoolPercentage: "87.2%"
};

// GitHub Stats (placeholder - would be fetched from API)
export const githubStats = {
  totalCommits: 1200,
  totalRepos: 25,
  totalStars: 150,
  streak: 45
};
