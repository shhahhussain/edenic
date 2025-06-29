"use client"

import { useState, useRef, ChangeEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Loader2, Upload, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function CareerForm({ jobTitle }: { jobTitle: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedResume, setSelectedResume] = useState<string>("")
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!form.current) return errors;

    const formData = new FormData(form.current);
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const coverLetter = formData.get('cover_letter') as string;
    const resume = formData.get('resume') as File;

    if (!firstName?.trim()) errors.first_name = 'First name is required';
    if (!lastName?.trim()) errors.last_name = 'Last name is required';
    if (!email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (phone && !/^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!coverLetter?.trim()) errors.cover_letter = 'Cover letter is required';
    if (!resume || resume.size === 0) errors.resume = 'Resume is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return;

    if (!validateForm()) {
      setError("Please fix the errors above");
      return;
    }

    setIsSubmitting(true)
    setIsSent(false)
    setError(null)

    try {
      const formData = new FormData(form.current);
      
      const response = await fetch('/api/career', {
        method: 'POST',
        body: formData,
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error('Failed to parse API response:', parseError);
        setError("Network error. Please try again.");
        return;
      }

      if (response.ok) {
        setIsSent(true);
        form.current?.reset();
        setSelectedResume("");
        setFormErrors({});
        
        if (result.message) {
          setError(null);
          setTimeout(() => {
            alert(result.message);
          }, 100);
        }
      } else {
        if (result.error) {
          if (result.error.includes('File too large')) {
            setError("File size exceeds 50MB limit. Please choose a smaller file.");
          } else if (result.error.includes('File uploads are not supported')) {
            setError("File upload is currently unavailable. Please try again later.");
          } else if (result.error.includes('Invalid file type')) {
            setError("Please upload PDF, DOC, or DOCX files only.");
          } else {
            setError(result.error || "Submission failed. Please try again.");
          }
        } else {
          setError("Submission failed. Please try again.");
        }
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Network or other error:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 50 * 1024 * 1024; // 50MB
      
      if (file.size > maxSize) {
        setError("File size exceeds 50MB limit. Please choose a smaller file.");
        e.target.value = '';
        setSelectedResume("");
        setFormErrors(prev => ({ ...prev, resume: 'File too large' }));
      } else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setError("Please upload PDF, DOC, or DOCX files only.");
        e.target.value = '';
        setSelectedResume("");
        setFormErrors(prev => ({ ...prev, resume: 'Invalid file type' }));
      } else {
        setSelectedResume(file.name);
        setError(null);
        setFormErrors(prev => ({ ...prev, resume: '' }));
      }
    } else {
      setSelectedResume("");
      setFormErrors(prev => ({ ...prev, resume: 'Resume is required' }));
    }
  }

  const clearFile = () => {
    setSelectedResume("");
    setError(null);
    setFormErrors(prev => ({ ...prev, resume: 'Resume is required' }));
    if (form.current) {
      const fileInput = form.current.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }

  return (
    <Card className="bg-card dark:bg-gray-800/50 rounded-2xl shadow-xl border border-border dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-white">
          Apply for this position
        </CardTitle>
        <CardDescription>
          Submit your application for {jobTitle}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="position" value={jobTitle} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                First Name *
              </label>
              <Input 
                id="first_name" 
                name="first_name" 
                placeholder="John" 
                disabled={isSubmitting} 
                required 
                className={formErrors.first_name ? 'border-red-500' : ''}
              />
              {formErrors.first_name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.first_name}</p>
              )}
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                Last Name *
              </label>
              <Input 
                id="last_name" 
                name="last_name" 
                placeholder="Doe" 
                disabled={isSubmitting} 
                required 
                className={formErrors.last_name ? 'border-red-500' : ''}
              />
              {formErrors.last_name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.last_name}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Email *
            </label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="your.email@example.com" 
              disabled={isSubmitting} 
              required 
              className={formErrors.email ? 'border-red-500' : ''}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Phone Number
            </label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="+1 (555) 123-4567" 
              disabled={isSubmitting}
              className={formErrors.phone ? 'border-red-500' : ''}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Resume/CV *
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <label htmlFor="resume" className="cursor-pointer bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-l-md border border-blue-700 hover:bg-blue-700 transition text-sm font-semibold flex items-center gap-2">
                  <Upload size={16} />
                  <span className="hidden sm:inline">Choose file</span>
                  <span className="sm:hidden">Browse</span>
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  disabled={isSubmitting}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <div className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-r-md border-t border-b border-r border-gray-300 dark:border-gray-600 text-sm min-h-[40px] flex items-center justify-between">
                  <span className="truncate flex-1">
                    {selectedResume || "No file chosen"}
                  </span>
                  {selectedResume && (
                    <button
                      type="button"
                      onClick={clearFile}
                      className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Maximum file size: 50MB • Accepted formats: PDF, DOC, DOCX</p>
              {formErrors.resume && (
                <p className="text-red-500 text-xs">{formErrors.resume}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="cover_letter" className="block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Cover Letter *
            </label>
            <Textarea
              id="cover_letter"
              name="cover_letter"
              rows={5}
              placeholder="Tell us why you are a great fit for this role..."
              disabled={isSubmitting}
              required
              className={formErrors.cover_letter ? 'border-red-500' : ''}
            />
            {formErrors.cover_letter && (
              <p className="text-red-500 text-xs mt-1">{formErrors.cover_letter}</p>
            )}
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
          
          {error && (
            <div className="text-red-500 text-sm mt-4 text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              {error}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
} 