export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface CandidateMatch {
  jobId: string;
  matchScore: number;
  whyYouMatch: string;
  interviewTips: string[];
}

export interface EmployerSpec {
  idealTitle: string;
  requiredSkills: string[];
  estimatedBaseSalary: string;
  screeningQuestions: string[];
  sourcingStrategy: string;
  marketInsights: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface ClientLogo {
  name: string;
  symbol: string;
}
