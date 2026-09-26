export type PracticeArea =
  | 'Constitutional Law'
  | 'Corporate Law'
  | 'Criminal Law'
  | 'Arbitration'
  | 'Tax Law'
  | 'Insolvency & Bankruptcy'
  | 'Intellectual Property'
  | 'Civil Litigation'
  | 'Environmental Law'
  | 'Administrative Law'
  | 'Commercial Litigation'
  | 'Technology Law';

export type CaseType =
  | 'Civil Appeal'
  | 'Criminal Appeal'
  | 'Writ Petition'
  | 'Special Leave Petition'
  | 'Review Petition'
  | 'Constitutional Bench';

export interface Judgment {
  id: string;
  caseTitle: string;
  caseNumber: string;
  judgmentDate: string;
  bench: string;
  judges: string[];
  practiceArea: PracticeArea;
  caseType: CaseType;
  summary: string;
  keyIssues: string[];
  ratioDecidendi: string;
  keyHoldings: string[];
  relevantProvisions: string[];
  citation: string;
  fullTextPdfUrl?: string;
  isDemo: true;
  isConstitutional?: boolean;
}

export type NewsCategory =
  | 'Supreme Court'
  | 'Constitutional Law'
  | 'Corporate Law'
  | 'Criminal Law'
  | 'Arbitration'
  | 'Commercial Law'
  | 'Insolvency'
  | 'Technology Law';

export interface NewsArticle {
  id: string;
  headline: string;
  summary: string;
  fullContent: string;
  category: NewsCategory;
  publishedDate: string;
  readTime: string;
  author: string;
  source: string;
  imageUrl?: string;
  isDemo: true;
}

export type CounselDesignation = 'Advocate-on-Record' | 'Senior Advocate' | 'Advocate';

export interface Counsel {
  id: string;
  name: string;
  designation: CounselDesignation;
  isAoR: boolean;
  isSeniorAdvocate: boolean;
  verified: boolean;
  practiceAreas: PracticeArea[];
  experienceYears: number;
  location: string;
  barCouncilNo: string;
  bio: string;
  keyCases: string[];
  supremeCourtAppearances: number;
  contactEmail: string;
  contactPhone: string;
  languages: string[];
  avatarUrl?: string;
  isDemo: true;
}

export type UserRole =
  | 'Advocate'
  | 'Law Student'
  | 'Legal Researcher'
  | 'Litigant'
  | 'Corporate Legal';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  barNumber?: string;
  organization?: string;
  subscriptionTier: 'free' | 'pro' | 'counsel' | 'enterprise';
}

export interface Bookmark {
  id: string;
  type: 'judgment' | 'news' | 'counsel';
  itemId: string;
  createdAt: string;
}

export interface ConsultationRequest {
  counselId: string;
  counselName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  matterType: string;
  description: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  submittedAt: string;
}
