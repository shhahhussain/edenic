"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Loader2, Clock, Shield, HelpCircle, Building, User } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DetailedContactPage() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    setIsSubmitting(true)
    setIsSent(false)
    setError(null)

    // Replace with your EmailJS credentials
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSent(true)
          form.current?.reset()
        },
        (error) => {
          setError("Failed to send the message. Please try again.")
          console.log("FAILED...", error.text)
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="bg-background dark:bg-gray-950 text-foreground dark:text-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
            Let&apos;s Transform Your Infrastructure
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Ready to revolutionize your cloud strategy? Our experts are here to help you navigate the future of infrastructure with AI-powered solutions.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <InfoCard icon={<Phone />} title="Call Us" details="+923110444411" subtext="24/7 Enterprise Support" href="tel:+923110444411"/>
            <InfoCard icon={<Mail />} title="Email Us" details="hello@edenic.com" subtext="Response within 2 hours" href="mailto:hello@edenic.com"/>
            <InfoCard icon={<MapPin />} title="Visit Us" details="Saddar Road Peshawar Deans Plaza" subtext="" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <Card className="bg-card dark:bg-gray-900/50 rounded-2xl shadow-2xl border border-border/50">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we&apos;ll get back to you within 2 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <InputWithLabel id="first_name" name="first_name" label="First Name" placeholder="John" disabled={isSubmitting} required />
                        <InputWithLabel id="last_name" name="last_name" label="Last Name" placeholder="Doe" disabled={isSubmitting} required />
                    </div>
                    <InputWithLabel id="email" name="user_email" type="email" label="Email" placeholder="john@company.com" disabled={isSubmitting} required />
                    <InputWithLabel id="company" name="company" label="Company" placeholder="Your Company" disabled={isSubmitting} />
                    <InputWithLabel id="phone" name="phone" type="tel" label="Phone" placeholder="+923110444411" disabled={isSubmitting} />
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-gray-100 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-xl border-border bg-input dark:bg-gray-800 focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your cloud infrastructure needs..."
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    disabled={isSubmitting || isSent}
                  >
                    {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : isSent ? (
                        "Sent!"
                    ) : (
                        "Send Message"
                    )}
                  </Button>
                  {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Schedule a Consultation */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Schedule a Consultation</h3>
              <div className="space-y-6">
                <ConsultationCard title="Enterprise Consultation" description="Strategic planning for large-scale cloud transformation" duration="60 minutes" price="Free" />
                <ConsultationCard title="Technical Deep Dive" description="Architecture review and optimization recommendations" duration="90 minutes" price="$299" />
                <ConsultationCard title="Quick Assessment" description="Rapid evaluation of your current infrastructure" duration="30 minutes" price="Free" />
              </div>
            </div>

            {/* Emergency Support */}
            <Card className="bg-red-500/10 dark:bg-red-900/20 border-red-500/30 rounded-2xl shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-red-500 dark:text-red-400">
                        <Shield size={28} />
                        Emergency Support
                    </CardTitle>
                    <CardDescription className="text-red-500/80 dark:text-red-400/70">
                        Critical infrastructure issues? Our emergency response team is available 24/7.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <a href="tel:+923110444411" className="text-xl font-bold text-center block text-foreground hover:text-primary transition">
                      Call Emergency Line: +923110444411
                    </a>
                </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-center text-4xl font-bold mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">How quickly can you respond to inquiries?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                    We respond to all inquiries within 2 hours during business hours and within 4 hours outside business hours. Emergency issues receive immediate attention 24/7.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-semibold">Do you offer free consultations?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                    Yes! We offer free 30-minute quick assessments and 60-minute enterprise consultations to understand your needs and demonstrate how we can help.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">What industries do you serve?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                    We serve all industries including healthcare, finance, e-commerce, manufacturing, government, and startups. Our solutions are tailored to meet industry-specific compliance and security requirements.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

      </div>
    </div>
  )
}


const InfoCard = ({ icon, title, details, subtext, href }: { icon: React.ReactNode, title: string, details: string, subtext: string, href?: string }) => {
    const content = (
        <div className="bg-card dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg h-full flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 border border-border/30">
            <div className="mb-4 text-blue-500 dark:text-blue-400">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-lg font-medium text-foreground">{details}</p>
            <p className="text-sm text-muted-foreground mt-1">{subtext}</p>
        </div>
    );

    if (href) {
        return <a href={href} className="focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl">{content}</a>;
    }
    return content;
}

const InputWithLabel = ({ id, name, label, type = "text", placeholder, disabled, required }: { id: string, name: string, label: string, type?: string, placeholder: string, disabled: boolean, required?: boolean }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-foreground dark:text-gray-100 mb-2">
            {label}
        </label>
        <Input
            type={type}
            id={id}
            name={name}
            className="w-full rounded-xl border-border bg-input dark:bg-gray-800 focus:ring-2 focus:ring-primary"
            placeholder={placeholder}
            disabled={disabled}
            required={required}
        />
    </div>
)

const ConsultationCard = ({ title, description, duration, price }: { title: string, description: string, duration: string, price: string }) => (
    <Card className="bg-card dark:bg-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-border/50">
        <CardHeader>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={16} />
                <span>{duration}</span>
            </div>
            <span className="font-bold text-lg text-primary">{price}</span>
        </CardContent>
        <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">Book Now</Button>
        </CardFooter>
    </Card>
)

const ui = {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger
}