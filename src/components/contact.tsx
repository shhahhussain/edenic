// "use client"

// import { motion } from "framer-motion"
// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import { Textarea } from "./ui/textarea"

// const Contact = () => {
//   return (
//     <section id="contact" className="py-24 bg-secondary/50">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Get in Touch
//         </motion.h2>
//         <motion.div
//           className="max-w-md mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <form className="space-y-6">
//             <div>
//               <Input type="text" placeholder="Your Name" />
//             </div>
//             <div>
//               <Input type="email" placeholder="Your Email" />
//             </div>
//             <div>
//               <Textarea placeholder="Your Message" />
//             </div>
//             <Button type="submit" className="w-full">
//               Send Message
//             </Button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Contact

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const ContactForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", projectType: "", message: "" })
    setStep(1)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>Fill out the form below to start your project</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
              <div className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
              <div className="space-y-4">
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="projectType"
                  placeholder="Project Type"
                  value={formData.projectType}
                  onChange={handleInputChange}
                />
              </div>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </motion.div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={handlePrevStep}>
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button type="button" onClick={handleNextStep}>
            Next
          </Button>
        ) : (
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact

