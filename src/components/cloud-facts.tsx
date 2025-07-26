"use client";

import { motion } from "framer-motion";
import { Code, Monitor, TrendingUp, Shield } from "lucide-react";
import CircularGauge from "./CircularGauge";

const CloudFacts = () => {
    const facts = [
        {
            icon: Monitor,
            value: 70,
            label: "of companies rely on React for new web projects."
        },
        {
            icon: Code,
            value: 65,
            label: "of developers prefer Node.js for building APIs."
        },
        {
            icon: TrendingUp,
            value: 90,
            label: "of startups choose JavaScript across the stack."
        },
        {
            icon: Shield,
            value: 80,
            label: "report faster delivery using the MERN stack."
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
                        Why Businesses Choose the MERN Stack
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Real-world stats on modern full stack development
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