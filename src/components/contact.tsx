"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Phone, Mail, MapPin, Loader2 } from "lucide-react"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return;

    setIsSubmitting(true)
    setIsSent(false)
    setError(null)

    try {
      const formData = new FormData(form.current);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSent(true);
        form.current?.reset();
      } else {
        const errorData = await response.json();
        setError("Failed to send the message. Please try again.");
        console.error("Submission failed:", errorData);
      }
    } catch (error) {
      setError("Failed to send the message. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              Let&apos;s Connect
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
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-xl border border-border dark:border-gray-700 bg-input dark:bg-gray-800 text-foreground dark:text-gray-100 placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent"
                      placeholder="Your name"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl border border-border dark:border-gray-700 bg-input dark:bg-gray-800 text-foreground dark:text-gray-100 placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-xl border border-border dark:border-gray-700 bg-input dark:bg-gray-800 text-foreground dark:text-gray-100 placeholder:text-muted-foreground dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent"
                      placeholder="Tell us about your project"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    disabled={isSubmitting || isSent}
                  >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                        </>
                    ) : isSent ? (
                        "Sent!"
                    ) : (
                        "Send Message"
                    )}
                  </Button>
                  {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
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
                  <div className="flex items-center space-x-4 p-4 bg-secondary dark:bg-gray-700/50 rounded-xl shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Phone</p>
                      <p className="text-foreground dark:text-gray-100 font-medium">+923110444411</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-secondary dark:bg-gray-700/50 rounded-xl shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Email</p>
                      
                      <p className="text-foreground dark:text-gray-100 font-medium">hello@edenic.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-secondary dark:bg-gray-700/50 rounded-xl shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">Address</p>
                      <p className="text-foreground dark:text-gray-100 font-medium">Saddar Road Peshawar Deans Plaza</p>
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

