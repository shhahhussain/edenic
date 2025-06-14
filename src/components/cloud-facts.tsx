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
        <section id="cloud-facts" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Why Businesses Move to the Cloud & Kubernetes
                    </motion.h2>
                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Real-world stats on cloud migration and Kubernetes adoption
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facts.map((fact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-card rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-border">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    <fact.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent mb-4">
                                    {fact.value}
                                </h3>
                                <p className="text-muted-foreground">
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