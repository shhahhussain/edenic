"use client";

import { motion } from "framer-motion";
import { Cloud, Server, TrendingUp, Shield } from "lucide-react";
import CircularGauge from "./CircularGauge";

const CloudFacts = () => {
    const facts = [
        {
            icon: Server,
            value: 81,
            label: "report optimized resource usage and reduced IT costs with container orchestration, including Kubernetes."
        },
        {
            icon: Cloud,
            value: 94,
            label: "of enterprises leverage cloud services, with 67% of their infrastructure now cloud-based."
        },
        {
            icon: TrendingUp,
            value: 60,
            label: "reduction in IT costs achieved by companies post-cloud migration."
        },
        {
            icon: Shield,
            value: 85,
            label: "of organizations experience enhanced security after transitioning to cloud platforms."
        }
    ];

    return (
        <section id="cloud-facts" className="py-16 sm:py-24 bg-background dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2
                        className="text-2xl sm:text-4xl font-bold text-blue-600 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Why Businesses Move to the Cloud & Kubernetes
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Real-world stats on cloud migration and Kubernetes adoption
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {facts.map((fact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group ${index % 2 === 0 ? 'bg-blue-950/5 dark:bg-blue-950/20' : 'bg-blue-950/10 dark:bg-blue-950/30'} rounded-2xl p-6 sm:p-8`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <CircularGauge
                                    value={fact.value}
                                    icon={<fact.icon className="w-8 h-8" />}
                                />
                                <p className="mt-6 text-muted-foreground dark:text-gray-300 text-sm sm:text-base">
                                    {fact.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CloudFacts; 