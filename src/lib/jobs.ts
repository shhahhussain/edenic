export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  responsibilities: string[];
  qualifications: string[];
  experience?: string;
}

export const jobs: Job[] = [];
