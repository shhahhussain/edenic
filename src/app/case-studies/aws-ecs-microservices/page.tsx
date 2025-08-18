"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AwsEcsMicroservicesCaseStudy() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-50">
      <div className="container mx-auto px-4 py-20 sm:py-28 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-400 mb-4">
            49+ Microservices, One Seamless Platform
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting deploys from 2 hours to 10 minutes for a hyper-growth SaaS
          </p>
        </motion.section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Snapshot</h2>
          <p className="text-gray-700 dark:text-gray-400">
            A venture-backed SaaS hit the wall with a bloated monolith: slow releases, ballooning
            EC2 costs, and zero visibility. Edenic shattered the bottleneck by containerizing
            49+ services and launching a serverless Fargate stack. Deploys now roll out in
            under 10 minutes, releases ship daily, and infra spend dropped 40%.
          </p>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Pain Points</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-400">
            <li>Monolith gridlocked feature velocity and spiked EC2 bills.</li>
            <li>Manual release playbooks stole two hours per deploy.</li>
            <li>No single pane: logs and traces scattered across instances.</li>
          </ul>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Objectives</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-400">
            <li>Decouple into independently deployable services.</li>
            <li>Wire full CI/CD with instant rollback.</li>
            <li>Embed end-to-end observability.</li>
            <li>Slash operating cost without capping scale.</li>
          </ul>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Solution Blueprint</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-400">
            <li>ECS Fargate clusters per environment, no servers to patch.</li>
            <li>Application Load Balancer routes traffic to 49 target groups.</li>
            <li>GitHub Actions → ECR → CodeDeploy, pipeline per service.</li>
            <li>AWS Cloud Map for discovery, Secrets Manager for creds.</li>
            <li>CloudWatch Logs, X-Ray, and OpenSearch for unified telemetry.</li>
          </ul>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Rollout Timeline</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-400">
            <li>Infra audit and Terraform backbone.</li>
            <li>Parallel dockerization of 49 services.</li>
            <li>Reusable CI/CD templates for build, scan, test, deploy.</li>
            <li>Fargate + ALB stood up with blue/green hooks.</li>
            <li>Logging, tracing, alerting dashboards.</li>
            <li>10% canary, then DNS flip after clean metrics.</li>
            <li>Runbooks and onboarding pack for new services in &lt;30 min.</li>
          </ol>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Numbers That Matter</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Metric</th>
                  <th className="py-3">Before</th>
                  <th className="py-3">After</th>
                  <th className="py-3">Change</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-400">
                <tr className="border-b">
                  <td className="py-3">Deploy time</td>
                  <td className="py-3">≈2 h</td>
                  <td className="py-3">&lt;10 min</td>
                  <td className="py-3">12× faster</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Release cadence</td>
                  <td className="py-3">1–2 / week</td>
                  <td className="py-3">Daily</td>
                  <td className="py-3">5–10× jump</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Downtime per deploy</td>
                  <td className="py-3">5–10 min</td>
                  <td className="py-3">0 min</td>
                  <td className="py-3">Eliminated</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">New service spin-up</td>
                  <td className="py-3">≈3 days</td>
                  <td className="py-3">&lt;30 min</td>
                  <td className="py-3">100× faster</td>
                </tr>
                <tr>
                  <td className="py-3">Infra spend</td>
                  <td className="py-3">High EC2</td>
                  <td className="py-3">-40%</td>
                  <td className="py-3">Major save</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Business Wins</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-400">
            <li>Same-day feature rollouts accelerate revenue experiments.</li>
            <li>Engineers focus on shipping, not firefighting.</li>
            <li>Auto-scaling absorbs traffic spikes without cost shocks.</li>
            <li>Investor confidence boosted by visible delivery velocity.</li>
          </ul>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-bold">Why Edenic</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-400">
            <li>Serverless-first ethos keeps OPEX lean.</li>
            <li>Modular Terraform library speeds future projects.</li>
            <li>Certified pros (CKA, AWS-SAP) lock down security.</li>
            <li>No fluff—only quantifiable wins.</li>
          </ul>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-5">Ready to slash your deploy times?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Book a 15-minute audit and uncover the fastest path to continuous delivery.
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
