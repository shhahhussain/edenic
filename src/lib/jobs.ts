export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobs: Job[] = [
  {
    slug: 'business-development-officer',
    title: 'Business Development Officer',
    department: 'Sales & Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking a motivated and results-driven Business Development Officer to join our growing team. The ideal candidate will be responsible for identifying new business opportunities, building and maintaining client relationships, and developing strategies to increase company revenue.',
    responsibilities: [
      'Identify new business opportunities, including new markets, growth areas, trends, customers, products, and services.',
      'Develop and maintain relationships with new and existing clients.',
      'Create and implement sales strategies and plans.',
      'Negotiate and close business deals.',
      'Collaborate with the marketing team to develop promotional materials.',
    ],
    qualifications: [
      'Proven working experience as a business development manager, sales executive, or a relevant role.',
      'Proven sales track record.',
      'Experience in customer support is a plus.',
      'Proficiency in CRM software (e.g., Salesforce).',
      'Excellent communication and negotiation skills.',
      'Ability to build rapport.',
      'Time management and planning skills.',
      'BSc/BA in business administration, sales, or relevant field.',
    ],
  },
]; 