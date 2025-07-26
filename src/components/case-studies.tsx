"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const caseStudies = [
  {
    title: "E-commerce Platform Overhaul",
    description:
      "Redesigned and optimized a major e-commerce platform, resulting in a 40% increase in conversion rates and 25% improvement in page load times.",
    industry: "Retail",
    link: "#",
  },
  {
    title: "SaaS Dashboard for Fintech",
    description:
      "Built a full-stack dashboard with React and Node.js, enabling real-time analytics and secure payments.",
    industry: "Finance",
    link: "#",
  },
  {
    title: "IoT Integration for Smart Manufacturing",
    description:
      "Developed an IoT solution for a manufacturing plant, increasing production efficiency by 20% and reducing downtime by 15%.",
    industry: "Manufacturing",
    link: "#",
  },
]

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-blue-600 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Case Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card dark:bg-gray-800/50 border-border dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground dark:text-gray-100">{study.title}</CardTitle>
                  <CardDescription className="text-muted-foreground dark:text-gray-400">Industry: {study.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base">{study.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary/10 dark:hover:bg-blue-400/10"
                    asChild
                  >
                    <a href={study.link}>Read More</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

