"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, Zap, Users, BarChart, Server } from "lucide-react"

const solutions = [
    {
        name: "Cloud Migration",
        description: "Seamlessly move your infrastructure to the cloud with minimal disruption.",
        icon: Cloud,
    },
    {
        name: "Security & Compliance",
        description: "Enterprise-grade security and compliance solutions for your cloud infrastructure.",
        icon: Shield,
    },
    {
        name: "Performance Optimization",
        description: "Optimize your cloud resources for maximum performance and cost efficiency.",
        icon: Zap,
    },
    {
        name: "Team Collaboration",
        description: "Enable seamless collaboration across your organization with cloud tools.",
        icon: Users,
    },
    {
        name: "Analytics & Insights",
        description: "Gain valuable insights from your cloud data with advanced analytics.",
        icon: BarChart,
    },
    {
        name: "Infrastructure Management",
        description: "Comprehensive management of your cloud infrastructure and resources.",
        icon: Server,
    },
]

const Solutions = () => {
    return (
        <div className="bg-background dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-white sm:text-4xl">
                        Comprehensive Cloud Solutions
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300">
                        We offer a wide range of cloud services to help your business thrive in the digital age.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {solutions.map((solution) => (
                            <div key={solution.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground dark:text-gray-100">
                                    <solution.icon className="h-5 w-5 flex-none text-primary dark:text-blue-400" aria-hidden="true" />
                                    {solution.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground dark:text-gray-300">
                                    <p className="flex-auto">{solution.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Solutions; 