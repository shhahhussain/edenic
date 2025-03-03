"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

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
    <section id="approach" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Approach
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach

