"use client"

import { motion, animate, useInView, useReducedMotion } from "framer-motion"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import shipAnimation from "@/lib/lottie/ship.json"

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (prefersReducedMotion || !inView) return
    const controls = animate(0, value, {
      duration: 1.2,
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, prefersReducedMotion, value])
  return (
    <span ref={ref} className="text-4xl font-bold text-blue-600">
      {display}
      {suffix}
    </span>
  )
}

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export default function AwsEcsMicroservicesCaseStudy() {
  const stats = [
    { label: "Deploy speed", value: 12, suffix: "× faster" },
    { label: "Ship frequency", value: 7, suffix: "× jump" },
    { label: "Downtime", value: 0, suffix: " min" },
    { label: "Cloud cost", value: 45, suffix: "% lower" },
  ]

  const timeline = [
    "Health-check of legacy infra",
    "Dockerize 49 services in parallel",
    "CI/CD templates rolled in 48 h",
    "Fargate + blue/green cut-over",
    "Logs, traces, alerts unified",
    "10 % canary → DNS flip",
    "Runbook: new service in <30 min",
  ]

  const metrics = [
    { metric: "Deploy speed", before: "≈2 h", after: "<10 min", change: "12× faster", tone: "green" },
    { metric: "Ship frequency", before: "1–2 / week", after: "Daily", change: "7×", tone: "green" },
    { metric: "Downtime / deploy", before: "5–10 min", after: "0 min", change: "-100 %", tone: "green" },
    { metric: "Service spin-up", before: "≈3 days", after: "<30 min", change: "144×", tone: "green" },
    { metric: "Cloud spend", before: "Heavy EC2", after: "-45 %", change: "-45 %", tone: "yellow" },
  ]

  const pain = [
    "Monolith throttled feature velocity & ballooned EC2 bills",
    "Manual, fragile playbooks burned two hours every deploy",
    "Logs & traces scattered—blind spots everywhere",
  ]

  const objectives = [
    "Carve the monolith into deploy-once, scale-independent services",
    "Wire bullet-proof CI/CD with one-click rollback",
    "Centralise observability—logs, metrics, traces in one pane",
    "Slash spend without capping growth",
  ]

  const blueprint = [
    "ECS Fargate clusters per stage",
    "ALB routes traffic across 49 target groups",
    "GitHub Actions → ECR → CodeDeploy on every merge",
    "Cloud Map for discovery, Secrets Manager for creds",
    "CloudWatch + X-Ray + OpenSearch for full-stack telemetry",
  ]

  const wins = [
    "Same-day feature flags unlock rapid A/B revenue tests",
    "Engineers ship—no more fire-drills or playbook roulette",
    "Autoscaling absorbs traffic spikes minus cost spikes",
    "Board & investors see velocity, bet bigger on roadmap",
  ]

  const sections = [
    { id: "snapshot", title: "Snapshot" },
    { id: "pain", title: "Pain" },
    { id: "objectives", title: "Objectives" },
    { id: "solution", title: "Solution" },
    { id: "timeline", title: "Timeline" },
    { id: "metrics", title: "Metrics" },
    { id: "wins", title: "Wins" },
  ]

  const [spend, setSpend] = useState(10000)
  const savings = Math.round(spend * 0.45)

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-50">
      <aside className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 space-y-4">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="block text-sm hover:text-blue-600">
            {s.title}
          </a>
        ))}
      </aside>

      <Link href="/contact" passHref>
        <Button size="lg" className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white">
          Book Call
        </Button>
      </Link>

      <div className="container mx-auto px-4 py-16 space-y-24 max-w-5xl">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 space-y-6 text-center md:text-left max-w-prose mx-auto md:mx-0">
            <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-400">
              49 Microservices. Zero Bottlenecks.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              2-hour deploys crushed to 10 min—cloud bill down 45 %.
            </p>
          </div>
          <div className="md:w-1/2">
            <Lottie animationData={shipAnimation} loop className="w-full h-full" aria-label="Deploy animation" />
          </div>
        </motion.section>

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6" id="snapshot">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition-transform">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
              <p className="text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="space-y-8 max-w-prose mx-auto" id="snapshot">
          <h2 className="text-3xl font-bold">
            <span className="bg-blue-600 text-white px-3 py-1 rounded">Snapshot</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Venture-backed SaaS hit scale-wall. Edenic rebuilt the engine: containerized 49 services, rolled out serverless Fargate, and wired zero-touch CI/CD. Deploys now clock &lt;10 min and OpEx shrank 45 %.
          </p>
        </section>

        <section className="grid sm:grid-cols-2 gap-6" id="pain">
          {pain.map((p) => (
            <div key={p} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <span className="h-3 w-3 mt-2 rounded-full bg-red-600" />
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{p}</p>
            </div>
          ))}
        </section>

        <section className="grid sm:grid-cols-2 gap-6" id="objectives">
          {objectives.map((o) => (
            <div key={o} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <span className="h-3 w-3 mt-2 rounded-full bg-blue-600" />
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{o}</p>
            </div>
          ))}
        </section>

        <section className="grid sm:grid-cols-2 gap-6" id="solution">
          {blueprint.map((b) => (
            <div key={b} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <span className="h-3 w-3 mt-2 rounded-full bg-green-600" />
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{b}</p>
            </div>
          ))}
        </section>

        <section id="timeline" className="space-y-6 overflow-x-auto">
          <h2 className="text-3xl font-bold">Rollout Timeline</h2>
          <div className="flex gap-6 min-w-max px-1">
            {timeline.map((t, i) => (
              <div key={t} className="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow w-64 flex-shrink-0">
                <span className="absolute -top-3 left-3 text-xs bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed pt-2">{t}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="metrics" className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Numbers That Matter</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {metrics.map((m) => (
              <div key={m.metric} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-2">
                <p className="font-semibold text-lg">{m.metric}</p>
                <div className="flex justify-between text-sm">
                  <span>{m.before}</span>
                  <span>{m.after}</span>
                </div>
                <p className={`text-sm font-bold ${m.tone === "green" ? "text-green-600" : "text-yellow-500"}`}>{m.change}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="wins" className="grid sm:grid-cols-2 gap-6">
          {wins.map((w) => (
            <div key={w} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <span className="h-3 w-3 mt-2 rounded-full bg-indigo-600" />
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{w}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center">Estimate Your Savings</h2>
          <input
            type="range"
            min={1000}
            max={100000}
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-center text-sm">Monthly spend: ${spend.toLocaleString()}</p>
          <p className="text-xl font-bold text-blue-600 text-center">Estimated monthly savings: ${savings.toLocaleString()}</p>
        </section>

        <section className="bg-white/60 dark:bg-gray-800/60 backdrop-blur p-12 rounded-2xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Ready to crush your deploy times?</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-prose mx-auto leading-relaxed">
            Grab a 15-minute infra audit—walk away with an action plan, no strings.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Now
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}

