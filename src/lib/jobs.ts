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

export const jobs: Job[] = [
  {
    slug: 'business-development-officer',
    title: 'Business Development Officer',
    department: 'Sales & Business Development',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    description:
      'We\'re a fast-growing full stack development agency looking for a sharp and driven Business Development Officer to join our team. This role is all about spotting opportunities, building relationships, and helping businesses launch modern web applications. You\'ll work closely with both technical and non-technical teams to translate real business needs into valuable software solutions.',
    responsibilities: [
      'Identify and develop new business opportunities in the full stack development market.',
      'Build and maintain strong relationships with potential clients, partners, and stakeholders.',
      'Collaborate with internal teams to shape tailored web and application solutions.',
      'Present proposals and articulate the business value of modern web solutions to clients.',
      'Work with marketing to align campaigns with business development goals.',
      'Attend virtual and in-person industry events, networking with key players in the tech space.',
      'Stay informed on current trends in React, Node.js, and modern development practices.',
      'Manage and update sales pipelines, forecasts, and performance reports using CRM tools.',
    ],
    qualifications: [
      '2+ years of experience in business development, B2B sales, or client relations, preferably in tech or IT services.',
      'Understanding of modern web technologies and hosting platforms.',
      'Experience selling web development services or SaaS solutions is highly desirable.',
      'Strong communication skills — both technical and non-technical — with a consultative sales approach.',
      'Proven ability to manage the full sales cycle from lead generation to closing.',
      'Familiarity with CRM systems like HubSpot, Pipedrive, or Salesforce.',
      'Self-motivated, organized, and able to thrive in a fast-paced, remote-first team.',
      'Comfort discussing modern web technologies with clients; certifications are a plus but not required.',
      'Bachelor\'s degree in Business, Marketing, Computer Science, or a related field is preferred.',
    ],
  }
];
