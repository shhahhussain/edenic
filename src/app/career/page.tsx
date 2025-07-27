"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CareerPage() {
  return (
    <div className="bg-background dark:bg-gray-950 text-foreground dark:text-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto px-4">
            We&apos;re looking for passionate people to join us on our mission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-8 border border-border dark:border-gray-700">
            <h2 className="text-2xl font-bold text-foreground mb-4">Don&apos;t See a Perfect Fit?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Send Your Resume</Link>
            </Button>
          </div>
        </motion.div>

        {/* {jobs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-8 border border-border dark:border-gray-700">
              <h2 className="text-2xl font-bold text-foreground mb-4">Don&apos;t See a Perfect Fit?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Send Your Resume</Link>
              </Button>
            </div>
          </motion.div>
        )} */}
      </div>
    </div>
  );
} 