"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const awardsAndPartnerships = [
  {
    type: "award",
    image: "https://images.unsplash.com/photo-1606159068539-43f36b99d1b3?q=80&w=2070&auto=format&fit=crop",
    description: "Growing faster than Amazon, Google, and ServiceNow",
    title: "Fastest Growing Tech Company"
  },
  {
    type: "award",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    description: "Recognized for reliability, trustworthiness, and excellence in delivering value",
    title: "Most Reliable Company"
  },
  {
    type: "partner",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    title: "Kubernetes Certified"
  },
  {
    type: "partner",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    title: "AWS Advanced Consulting Partner"
  },
  {
    type: "partner",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    title: "Microsoft Gold Partner"
  },
  {
    type: "partner",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    title: "Google Cloud Partner"
  },
  {
    type: "partner",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "ISO 9001 Certified"
  },
  {
    type: "partner",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "ISO 27001 Certified"
  },
];

export default function Certifications() {
  return (
    <section className="py-16 sm:py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 dark:text-white mb-4">
            Our Awards and Partnerships
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Recognized for excellence in cloud solutions and trusted by industry leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {awardsAndPartnerships
            .filter((item) => item.type === "award")
            .map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card dark:bg-gray-800/50 rounded-2xl shadow-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-border dark:border-gray-700">
                  <div className="relative h-40 sm:h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-gray-100 mb-3">{award.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base">{award.description}</p>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 items-center justify-center">
          {awardsAndPartnerships
            .filter((item) => item.type === "partner")
            .map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-border dark:border-gray-700">
                  <div className="relative h-24 sm:h-32 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-foreground dark:text-gray-100 text-center">{partner.title}</h3>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
} 