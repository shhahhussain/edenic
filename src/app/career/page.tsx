"use client"

import { jobs } from "@/lib/jobs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="bg-background dark:bg-gray-950 text-foreground dark:text-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            We&apos;re looking for passionate people to join us on our mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card dark:bg-gray-900/50 rounded-2xl shadow-lg border border-border/50 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase size={16} /> {job.department}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 line-clamp-3 flex-grow">
                    {job.description}
                  </p>
                  <div className="mt-6">
                    <Button asChild className="w-full">
                      <Link href={`/career/${job.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 