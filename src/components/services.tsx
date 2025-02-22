"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Code, Cloud, Cog, Smartphone, Palette, BarChart } from "lucide-react"

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs",
    icon: Code,
    details:
      "Our expert team crafts bespoke software solutions tailored to your unique business requirements. We use cutting-edge technologies and best practices to deliver high-quality, scalable, and maintainable software that drives your business forward.",
  },
  {
    title: "DevOps Consulting",
    description: "Streamline your development and operations processes",
    icon: Cog,
    details:
      "Our DevOps consulting services help organizations streamline their development and operations processes. We work with you to implement best practices, automate workflows, and foster a culture of collaboration and continuous improvement.",
  },
  {
    title: "Cloud Migration & Management",
    description: "Seamless transition and optimization of cloud infrastructure",
    icon: Cloud,
    details:
      "We guide businesses through their cloud journey, from initial migration to ongoing optimization. Our cloud experts ensure a smooth transition to the cloud while maximizing performance, security, and cost-efficiency.",
  },
  {
    title: "Mobile App Development",
    description: "Create powerful, user-friendly mobile applications",
    icon: Smartphone,
    details:
      "Our mobile development team creates powerful, user-friendly applications for iOS and Android platforms. We focus on delivering seamless user experiences and robust functionality to meet your mobile strategy needs.",
  },
  {
    title: "UI/UX Design",
    description: "Craft intuitive and engaging user experiences",
    icon: Palette,
    details:
      "Our UI/UX design services focus on creating intuitive, engaging, and visually appealing interfaces for web and mobile applications. We combine aesthetics with functionality to deliver exceptional user experiences.",
  },
  {
    title: "Data Analytics & Visualization",
    description: "Turn your data into actionable insights",
    icon: BarChart,
    details:
      "We help you harness the power of your data through advanced analytics and visualization techniques. Our solutions enable you to make data-driven decisions and gain valuable insights into your business operations.",
  },
]

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-6 h-6 mr-2 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                  <AnimatePresence>
                    {selectedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-sm"
                      >
                        {service.details}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

