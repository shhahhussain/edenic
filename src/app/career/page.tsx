"use client"

import { jobs } from "@/lib/jobs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, AlertCircle } from "lucide-react";

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto px-4">
            We&apos;re looking for passionate people to join us on our mission.
          </p>
        </motion.div>

        {jobs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">No Open Positions</h2>
              <p className="text-muted-foreground mb-6">
                We don&apos;t have any open positions at the moment, but we&apos;re always looking for great talent.
              </p>
              <Button asChild>
                <Link href="/contact">Send Us Your Resume</Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card dark:bg-gray-900/50 rounded-2xl shadow-lg border border-border/50 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 line-clamp-2">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Briefcase size={14} /> {job.department}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col pt-0">
                    <div className="space-y-2 text-xs sm:text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 line-clamp-3 flex-grow mb-4">
                      {job.description}
                    </p>
                    <div className="mt-auto">
                      <Button asChild className="w-full text-sm">
                        <Link href={`/career/${job.slug}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {jobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-8 border border-border dark:border-gray-700">
              <h2 className="text-2xl font-bold text-foreground mb-4">Don&apos;t See a Perfect Fit?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Send Your Resume</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 