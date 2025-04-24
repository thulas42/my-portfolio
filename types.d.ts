export type TimelineItem = {
  company: string;
  role: string;
  date: string;
  description: string;
  responsibilities: string[];
  logo?: React.ReactNode;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  details: string[];
  certificate?: string;
  icon: React.ReactNode;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Education = {
  institution: string;
  qualification: string;
  period?: string;
  details?: string[];
  logo?: React.ReactNode;
}; 