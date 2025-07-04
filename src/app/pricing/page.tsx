"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "@/components/ui/CheckCircle"

export default function Pricing() {
  return (
    <main>
      <section className="py-24 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-blue-600 dark:text-white mb-4">Full Pricing & Plans</h1>
            <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto mb-8">Transparent, flexible pricing for every business size. Choose the model that fits your needs or contact us for a custom solution.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border dark:border-gray-700 md:col-span-1 lg:col-span-2"
            >
              <div className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">Project-Based Pricing</h2>
                <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Defined Scope & Deliverables</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Full Project Lifecycle</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Ideal for Transformations</li>
                </ul>
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">$1,000 – $10,000+</div>
                <div className="text-sm text-muted-foreground dark:text-gray-400 mb-6">Scope-based, tailored to project complexity.</div>
                <Button>Get a Quote</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border dark:border-gray-700 md:col-span-1 lg:col-span-2"
            >
              <div className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">Monthly Retainer</h2>
                 <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Ongoing DevOps Support</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Monitoring & Optimization</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Continuous Improvement</li>
                </ul>
                <div className="mb-2">
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">Starter: $500/mo</div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400">Basic monitoring & support</div>
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-2">Growth: $1,200/mo</div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400">Proactive management</div>
                  <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-2">Scale: $2,500+/mo</div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400 mb-6">Full-stack DevOps & 24/7</div>
                </div>
                 <Button>Choose Plan</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border dark:border-gray-700 md:col-span-1 lg:col-span-2"
            >
              <div className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">Hourly / On-Demand</h2>
                <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Pay-as-you-go model</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Emergency & Ad-hoc Support</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> No Long-term Commitment</li>
                </ul>
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">$50 – $120/hr</div>
                <div className="text-sm text-muted-foreground dark:text-gray-400 mb-6">Pay only for what you use.</div>
                 <Button>Get Support</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border dark:border-gray-700 md:col-span-1 lg:col-span-3"
            >
              <div className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">Add-On Services</h2>
                <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Modular & Scalable</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Logging & Monitoring</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Security & Compliance</li>
                </ul>
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">$100 – $1,000+/mo</div>
                <div className="text-sm text-muted-foreground dark:text-gray-400 mb-6">Choose only what you need.</div>
                 <Button>Customize</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border dark:border-gray-700 md:col-span-1 lg:col-span-3"
            >
              <div className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">Custom & Enterprise</h2>
                <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Dedicated Team & 24/7 Support</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Advanced Compliance (SOC2, HIPAA)</li>
                  <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Bespoke Solutions</li>
                </ul>
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Contact for Quote</div>
                <div className="text-sm text-muted-foreground dark:text-gray-400 mb-6">Tailored to your business scale.</div>
                 <Button>Contact Sales</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 