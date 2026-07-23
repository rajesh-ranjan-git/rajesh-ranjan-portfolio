export type LocationType = {
  city: string;
  state: string;
  country: string;
};

export type AboutTextRowType = {
  id: string;
  label: string;
  value: string;
};

export type RainItem = {
  id: number;
  src: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  opacity: number;
};

export type GradingSystemType = "percent" | "cgpa" | "gpa";

export type EducationTextDetailsType = {
  name?: string;
  location?: LocationType;
  degree?: string;
  stream?: string;
  gradingSystem?: GradingSystemType;
  score?: number;
  startYear?: number;
  endYear?: number;
  imageSrc?: string;
};

export type ExperienceDetailsType = { title: string; description?: string };

export type ExperienceType = {
  designation: string;
  isCurrent?: boolean;
  startMonth: string;
  startYear: number;
  endMonth?: string;
  endYear?: number;
  company: string;
  companyImage?: string;
  details?: readonly ExperienceDetailsType[];
};

export type PortfolioItemTechType = {
  type: string;
  tech: string[];
};

export type PortfolioItemFeatureType = {
  title: string;
  description: string;
};

export type PortfolioItemUsageType = {
  title: string;
  description: string;
};

export type PortfolioItemType = {
  id: number;
  title: string;
  description?: string;
  overview?: string;
  thumbnail?: string;
  category?: string;
  techStack?: PortfolioItemTechType[];
  liveUrl?: string;
  githubUrl: string;
  screens?: readonly string[];
  features?: PortfolioItemFeatureType[];
  usage?: PortfolioItemUsageType[];
};
