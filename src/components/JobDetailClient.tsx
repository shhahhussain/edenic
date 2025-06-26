"use client"

import { Job } from "@/lib/jobs";
import CareerForm from "@/components/career-form";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, CheckCircle } from "lucide-react";

export default function JobDetailClient({ job }: { job: Job }) {
    return (
        <div className="bg-background dark:bg-gray-950 text-foreground dark:text-gray-50">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 tracking-tight">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground dark:text-gray-300">
                            <div className="flex items-center gap-2">
                                <Briefcase size={16} /> {job.department}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} /> {job.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} /> {job.type}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="lead">{job.description}</p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">Responsibilities</h2>
                            <ul className="space-y-2">
                                {job.responsibilities.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4">Qualifications</h2>
                            <ul className="space-y-2">
                                {job.qualifications.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="sticky top-24">
                            <CareerForm jobTitle={job.title} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 