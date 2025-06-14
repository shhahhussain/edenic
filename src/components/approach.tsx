"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import ServiceCard from "./ServiceCard"

const steps = [
  {
    title: "Understand",
    description: "We begin by deeply understanding your business goals and challenges.",
  },
  {
    title: "Strategize",
    description: "Our experts craft a tailored strategy to address your specific needs.",
  },
  {
    title: "Implement",
    description: "We leverage best practices and cutting-edge tools to bring the strategy to life.",
  },
  {
    title: "Optimize",
    description: "Continuous improvement is at our core, ensuring your systems evolve with your business.",
  },
  {
    title: "Support",
    description: "Our team provides ongoing support and guidance to ensure long-term success.",
  },
]

const Approach = () => {
  return (
    <section id="approach" className="py-16 sm:py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-blue-600 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </span>
                }
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach

