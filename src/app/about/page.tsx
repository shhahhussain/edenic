"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Briefcase, BarChart, Users, Award, Target, Rocket, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"

const stats = [
  { value: "10+", label: "Satisfied Clients", icon: <Briefcase className="w-8 h-8" /> },
  { value: "3", label: "Countries Served", icon: <BarChart className="w-8 h-8" /> },
  { value: "99.9%", label: "Uptime SLA", icon: <Users className="w-8 h-8" /> },
  { value: "5+", label: "Cloud Certifications", icon: <Award className="w-8 h-8" /> },
]

const values = [
  { title: "Innovation First", description: "We pioneer cutting-edge technologies like quantum-safe encryption and AI-driven automation to stay ahead of the curve.", icon: <Rocket className="w-8 h-8" /> },
  { title: "Excellence Always", description: "Our commitment to excellence drives us to deliver solutions that exceed expectations and set industry standards.", icon: <Award className="w-8 h-8" /> },
  { title: "Client Success", description: "Your success is our mission. We build lasting partnerships focused on achieving your business objectives.", icon: <Target className="w-8 h-8" /> },
  { title: "Results Driven", description: "We measure our success by the tangible results we deliver - cost savings, efficiency gains, and business growth.", icon: <TrendingUp className="w-8 h-8" /> },
]

const leadership = [
  {
    name: "Shah Hussain",
    role: "Co-Founder & CEO",
    bio: "Business strategist with a strong track record in scaling technology ventures, building partnerships, and driving organizational growth.",
    skills: ["Business Strategy", "Partnership Development", "Growth Leadership"],
    image: "/leader-shah.jpg",
  },
  {
    name: "Hamza Khan",
    role: "Co-Founder & CTO",
    bio: "Technical visionary specializing in cloud architecture, automation, and delivering robust, scalable solutions for diverse industries.",
    skills: ["Cloud Architecture", "Infrastructure Automation", "Technical Leadership"],
    image: "/leader-hamza.jpg",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background dark:bg-gray-950 text-foreground dark:text-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
            About Edenic
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Pioneering the Future of Cloud. Founded by industry veterans, we&apos;re on a mission to revolutionize cloud infrastructure with AI-powered solutions that adapt, learn, and evolve with your business needs.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-500 dark:text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
              <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.section>

        {/* Mission and Vision Section */}
        <section className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center"><Target className="mr-3 text-blue-500"/> Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To democratize enterprise-grade cloud infrastructure by making advanced AI-powered solutions accessible, affordable, and intuitive for organizations of all sizes. We believe every business deserves the power of quantum-safe, self-healing, and intelligent cloud systems.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center"><Lightbulb className="mr-3 text-blue-500"/> Our Vision</h2>
            <p className="text-muted-foreground text-lg">
              A world where cloud infrastructure is completely autonomous, self-optimizing, and quantum-secure by default. We envision a future where businesses can focus entirely on innovation while their infrastructure intelligently adapts to meet any challenge.
            </p>
          </motion.div>
        </section>

        {/* Core Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card dark:bg-gray-900/50 text-center p-6 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-blue-500 dark:text-blue-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Leadership Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="flex justify-center gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="bg-card dark:bg-gray-900/50 overflow-hidden text-center">
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-500 dark:text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground mb-4 text-sm">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-gray-100 dark:bg-gray-900/50 p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s build the future of cloud infrastructure together.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get in Touch</Button>
            </Link>
            <Link href="/services" passHref>
              <Button size="lg" variant="outline">Explore Services</Button>
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  )
} 