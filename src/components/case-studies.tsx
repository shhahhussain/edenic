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
    title: "Cloud Migration for Financial Services",
    description:
      "Seamlessly migrated a financial services firm to a hybrid cloud environment, enhancing security and reducing operational costs by 30%.",
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
    <section id="case-studies" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Case Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>Industry: {study.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{study.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
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

