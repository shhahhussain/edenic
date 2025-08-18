"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AwsEcsMicroservicesCaseStudy() {
  return (
    <div className="bg-background dark:bg-gray-950 text-foreground dark:text-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24 space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
            49+ Microservices on AWS ECS
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From 2-Hour Deploys to 10 Minutes
          </p>
        </motion.section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Executive Summary</h2>
          <p className="text-muted-foreground">
            A VC-backed SaaS startup hit scaling limits with a fragile monolith. Manual
            releases took two hours, new features stalled for weeks, costs were high,
            and there was no unified observability. Edenic containerized 49+ services
            and delivered a serverless ECS Fargate platform with one GitHub Actions
            pipeline per service. Deploy time dropped below ten minutes and releases
            now ship multiple times per day with zero downtime and roughly forty percent
            lower infrastructure spend.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">The Client & Their Pain</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>SaaS startup in rapid scale mode where technical drag cut revenue growth.</li>
            <li>Monolithic codebase caused tight coupling, risky manual releases and high EC2 bills.</li>
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Goals We Locked In</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Break the monolith into independent services so teams can ship autonomously.</li>
            <li>Full CI/CD automation with safe rollback.</li>
            <li>Observability baked in from day one.</li>
            <li>Cap infrastructure spend without limiting overnight scale.</li>
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Architecture at a Glance</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Compute – AWS ECS Fargate (serverless containers).</li>
            <li>Traffic – Single Application Load Balancer with host/path routing to 49 target groups.</li>
            <li>CI/CD – GitHub Actions → ECR → CodeDeploy, one pipeline per service.</li>
            <li>Service discovery via AWS Cloud Map and secrets in Secrets Manager.</li>
            <li>Security through IAM least privilege and WAF from day zero.</li>
            <li>Observability using CloudWatch Logs, X-Ray tracing and OpenSearch queries.</li>
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Delivery Phases</h2>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Baseline audit and Terraform scaffold.</li>
            <li>Containerization sprint – 49 services dockerized in parallel.</li>
            <li>GitHub Actions templates for build, scan, unit-test, push and deploy.</li>
            <li>Fargate cluster and ALB stood up as code with scripted blue/green hooks.</li>
            <li>Centralized logging and tracing with dashboards and alerts.</li>
            <li>Cut-over weekend: 10% traffic canary followed by full DNS swap after clean metrics.</li>
            <li>Knowledge transfer and runbooks – new services onboard in &lt;30 minutes.</li>
          </ol>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Before vs After</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">KPI</th>
                  <th className="py-2">Before</th>
                  <th className="py-2">After</th>
                  <th className="py-2">Delta</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-2">Deployment time</td>
                  <td className="py-2">~2 h</td>
                  <td className="py-2">&lt; 10 min</td>
                  <td className="py-2">12× faster</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Release frequency</td>
                  <td className="py-2">1–2 ×/week</td>
                  <td className="py-2">Multiple per day</td>
                  <td className="py-2">5–10× more releases</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Downtime per deploy</td>
                  <td className="py-2">5–10 min</td>
                  <td className="py-2">Zero (blue/green)</td>
                  <td className="py-2">Eliminated</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Spin-up new service</td>
                  <td className="py-2">~3 days</td>
                  <td className="py-2">&lt; 30 min</td>
                  <td className="py-2">100× faster</td>
                </tr>
                <tr>
                  <td className="py-2">Infra cost</td>
                  <td className="py-2">High EC2</td>
                  <td className="py-2">-40% with Fargate</td>
                  <td className="py-2">Major savings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Business Impact</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Features roll out the same day they&apos;re merged, slashing time-to-value.</li>
            <li>Engineering focus shifted from firefighting to product innovation.</li>
            <li>Infrastructure scales automatically with customer growth while holding budget steady.</li>
            <li>Founders report higher investor confidence thanks to visible delivery velocity.</li>
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Why Edenic</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Serverless-first mindset keeps OPEX lean.</li>
            <li>Reusable Terraform modules accelerate future projects.</li>
            <li>Certified team (CKA, AWS-SAP) ensures security and compliance from the first commit.</li>
            <li>Brutally honest scope control – no gold-plating, just measurable wins.</li>
          </ul>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gray-100 dark:bg-gray-900/50 p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to ditch deployment drama?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a 15‑minute audit and see where we can cut your release cycle to minutes.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Now
            </Button>
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

