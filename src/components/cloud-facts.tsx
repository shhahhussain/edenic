"use client";

import { motion } from "framer-motion";
import { Cloud, Server, TrendingUp, Shield } from "lucide-react";

const CloudFacts = () => {
    const facts = [
        {
            icon: Server,
            value: "81%",
            label: "say container orchestration (like Kubernetes) helped optimize resource usage and reduce IT costs."
        },
        {
            icon: Cloud,
            value: "94%",
            label: "of enterprises use cloud services, with 67% of enterprise infrastructure now cloud-based."
        },
        {
            icon: TrendingUp,
            value: "60%",
            label: "reduction in IT costs reported by companies after migrating to cloud infrastructure."
        },
        {
            icon: Shield,
            value: "85%",
            label: "of organizations report improved security after moving to cloud platforms."
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
                            className="group"
                        >
                            <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-border dark:border-gray-700">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    <fact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-white mb-4">
                                    {fact.value}
                                </h3>
                                <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base">
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