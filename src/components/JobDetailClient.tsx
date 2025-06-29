"use client"

import { Job } from "@/lib/jobs";
import CareerForm from "@/components/career-form";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, CheckCircle, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function JobDetailClient({ job }: { job: Job }) {
    return (
        <div className="bg-background dark:bg-gray-950 text-foreground dark:text-gray-50">
            <div className="container mx-auto px-4 py-8 sm:py-16 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-6 sm:mb-8">
                        <Button asChild variant="ghost" className="mb-4 text-muted-foreground hover:text-foreground">
                            <Link href="/career" className="flex items-center gap-2">
                                <ArrowLeft size={16} />
                                Back to Careers
                            </Link>
                        </Button>
                        
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 tracking-tight">
                            {job.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base text-muted-foreground dark:text-gray-300 mb-4">
                            <div className="flex items-center gap-2">
                                <Briefcase size={16} /> {job.department}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} /> {job.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} /> {job.type}
                            </div>
                            {job.experience && (
                                <div className="flex items-center gap-2">
                                    <Star size={16} /> {job.experience} experience
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <motion.div
                        className="lg:col-span-2 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
                            <p className="lead text-base sm:text-lg">{job.description}</p>

                            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Responsibilities</h2>
                            <ul className="space-y-2">
                                {job.responsibilities.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">Qualifications</h2>
                            <ul className="space-y-2">
                                {job.qualifications.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="lg:sticky lg:top-24 space-y-6">
                            <CareerForm jobTitle={job.title} />
                            
                            <Card className="bg-card dark:bg-gray-800/50 border border-border dark:border-gray-700">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-foreground">
                                        Job Summary
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Department:</span>
                                        <span className="font-medium">{job.department}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Location:</span>
                                        <span className="font-medium">{job.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Type:</span>
                                        <span className="font-medium">{job.type}</span>
                                    </div>
                                    {job.experience && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Experience:</span>
                                            <span className="font-medium">{job.experience}</span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 