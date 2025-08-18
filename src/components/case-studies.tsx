"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const caseStudy = {
  title: "49+ Microservices on AWS ECS",
  description:
    "Serverless Fargate platform cut deploys from 2 hours to 10 minutes and dropped infrastructure costs by ~40%.",
  industry: "SaaS",
  link: "/case-studies/aws-ecs-microservices",
}

const CaseStudies = () => {
  const [expanded, setExpanded] = useState(false)

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
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card dark:bg-gray-800/50 border-border dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardHeader
                onClick={() => setExpanded(!expanded)}
                className="cursor-pointer flex items-center justify-between"
              >
                <div>
                  <CardTitle className="text-xl text-foreground dark:text-gray-100">
                    {caseStudy.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground dark:text-gray-400">
                    Industry: {caseStudy.industry}
                  </CardDescription>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </CardHeader>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base">
                        {caseStudy.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary/10 dark:hover:bg-blue-400/10"
                        asChild
                      >
                        <a href={caseStudy.link}>Read Full Case Study</a>
                      </Button>
                    </CardFooter>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
