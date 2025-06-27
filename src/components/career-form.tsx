"use client"

import { useState, useRef, ChangeEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function CareerForm({ jobTitle }: { jobTitle: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedResume, setSelectedResume] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return;

    setIsSubmitting(true)
    setIsSent(false)
    setError(null)

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSent(true);
          form.current?.reset();
        },
        (error) => {
          setError("Failed to send the application. Please try again.");
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <Card className="bg-card dark:bg-gray-800/50 rounded-2xl shadow-xl border border-border dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-white">
          Apply for this position
        </CardTitle>
        <CardDescription>
          Submit your application for {jobTitle}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="position" value={jobTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                First Name
              </label>
              <Input id="first_name" name="first_name" placeholder="John" disabled={isSubmitting} required />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                Last Name
              </label>
              <Input id="last_name" name="last_name" placeholder="Doe" disabled={isSubmitting} required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Email
            </label>
            <Input type="email" id="email" name="user_email" placeholder="your.email@example.com" disabled={isSubmitting} required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Phone Number
            </label>
            <Input type="tel" id="phone" name="user_phone" placeholder="+1 (555) 123-4567" disabled={isSubmitting} />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Resume/CV
            </label>
            <div className="flex items-center">
              <label htmlFor="resume" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-l-md border border-blue-700 hover:bg-blue-700 transition text-sm font-semibold">
                Choose file
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                required
                disabled={isSubmitting}
                className="hidden"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files && e.target.files[0]) {
                    setSelectedResume(e.target.files[0].name)
                  } else {
                    setSelectedResume("")
                  }
                }}
              />
              <span className="bg-blue-900 text-white px-4 py-2 rounded-r-md border-t border-b border-r border-blue-700 text-sm min-w-[120px] truncate">
                {selectedResume || "No file chosen"}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="cover_letter" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Cover Letter
            </label>
            <Textarea
              id="cover_letter"
              name="cover_letter"
              rows={5}
              placeholder="Tell us why you are a great fit for this role..."
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
                    Submitting...
                </>
            ) : isSent ? (
                "Application Sent!"
            ) : (
                "Submit Application"
            )}
          </Button>
          {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        </form>
      </CardContent>
    </Card>
  )
} 