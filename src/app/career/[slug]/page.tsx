import { jobs } from "@/lib/jobs";
import { notFound } from "next/navigation";
import JobDetailClient from "@/components/JobDetailClient";

export const generateStaticParams = async () => {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
};

type JobDetailPageProps = {
  params: Promise<{ slug:string }>;
};

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const resolvedParams = await params;
  const job = jobs.find((j) => j.slug === resolvedParams.slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
} 