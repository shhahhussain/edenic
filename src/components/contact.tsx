"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cloud solutions? Get in touch with us today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card dark:bg-gray-800/50 rounded-2xl shadow-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-border dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-gray-100 mb-1">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-border dark:border-gray-700 bg-input dark:bg-gray-800 text-foreground dark:text-gray-100 placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus:border-primary dark:focus:border-blue-400 focus:ring-primary dark:focus:ring-blue-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-gray-100 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-border dark:border-gray-700 bg-input dark:bg-gray-800 text-foreground dark:text-gray-100 placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus:border-primary dark:focus:border-blue-400 focus:ring-primary dark:focus:ring-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-gray-100 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-xl border border-border dark:border-gray-700 bg-input dark:bg-gray-800 text-foreground dark:text-gray-100 placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus:border-primary dark:focus:border-blue-400 focus:ring-primary dark:focus:ring-blue-400"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-card dark:bg-gray-800/50 rounded-2xl shadow-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-border dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-secondary dark:bg-gray-700/50 rounded-xl hover:bg-secondary/80 dark:hover:bg-gray-700/80 transition-colors duration-300">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Phone</p>
                      <p className="text-foreground dark:text-gray-100 font-medium">+1 (917) 732-2205</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-secondary dark:bg-gray-700/50 rounded-xl hover:bg-secondary/80 dark:hover:bg-gray-700/80 transition-colors duration-300">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Email</p>
                      <p className="text-foreground dark:text-gray-100 font-medium">contact@edenic.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-secondary dark:bg-gray-700/50 rounded-xl hover:bg-secondary/80 dark:hover:bg-gray-700/80 transition-colors duration-300">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Address</p>
                      <p className="text-foreground dark:text-gray-100 font-medium">8 The Green #21172 Dover, DE, 19901, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

