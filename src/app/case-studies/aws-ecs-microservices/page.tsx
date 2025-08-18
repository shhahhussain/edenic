"use client"

import { motion, animate, useInView, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { Fragment, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

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
    { metric: "Deploy time", before: "≈2 h", after: "<10 min", change: "12×", trend: "up" },
    { metric: "Ship frequency", before: "1–2 / week", after: "Daily", change: "7×", trend: "up" },
    { metric: "Downtime / deploy", before: "5–10 min", after: "0 min", change: "100 %", trend: "down" },
    { metric: "Service spin-up", before: "≈3 days", after: "<30 min", change: "144×", trend: "up" },
    { metric: "Cloud spend", before: "Heavy EC2", after: "-45 %", change: "45 %", trend: "down" },
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
    { id: "solution", title: "Solution" },
    { id: "objectives", title: "Objectives" },
    { id: "timeline", title: "Timeline" },
    { id: "metrics", title: "Metrics" },
    { id: "wins", title: "Wins" },
    { id: "savings", title: "Savings" },
  ]

  const [spend, setSpend] = useState(10000)
  const presets = [1000, 10000, 50000]
  const savings = Math.round(spend * 0.45)

  const [activeSection, setActiveSection] = useState("snapshot")
  const [openAll, setOpenAll] = useState(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: [0.25] }
    )
    Object.values(sectionRefs.current).forEach((sec) => sec && observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-50">
      <aside className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 space-y-4">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 text-sm">
            <span
              className={`w-2 h-2 rounded-full border ${
                activeSection === s.id ? "bg-blue-600 border-blue-600" : "border-gray-400"
              }`}
            />
            {s.title}
          </a>
        ))}
      </aside>

      <div className="container mx-auto px-4 py-16 space-y-20 max-w-5xl">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-extrabold tracking-tight">
            49 Micro-services. 10-Minute Deploys.
          </h1>
          <p className="text-2xl text-gray-800 dark:text-gray-300">
            -40 % AWS spend. Zero downtime.
          </p>
          <svg
            viewBox="0 0 100 100"
            className="mx-auto w-48 h-48 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <circle cx="50" cy="50" r="10" />
            <circle cx="20" cy="20" r="6" />
            <circle cx="80" cy="20" r="6" />
            <circle cx="20" cy="80" r="6" />
            <circle cx="80" cy="80" r="6" />
            <line x1="50" y1="40" x2="20" y2="26" />
            <line x1="50" y1="40" x2="80" y2="26" />
            <line x1="50" y1="60" x2="20" y2="74" />
            <line x1="50" y1="60" x2="80" y2="74" />
          </svg>
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book a 15-min Audit
            </Button>
          </Link>
        </motion.section>

        <section
          id="snapshot"
          ref={(el) => {
            sectionRefs.current["snapshot"] = el
          }}
          className="space-y-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition-transform">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
                <p className="text-sm text-gray-700 dark:text-gray-300">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="prose dark:prose-invert text-center mx-auto">
            <p>
              Venture-backed SaaS hit scale-wall. Edenic rebuilt the engine: containerized 49 services, rolled out serverless Fargate, and wired zero-touch CI/CD. Deploys now clock &lt;10 min and OpEx shrank 45 %.
            </p>
          </div>
        </section>

        <section
          className="grid sm:grid-cols-2 gap-6"
          id="pain"
          ref={(el) => {
            sectionRefs.current["pain"] = el
          }}
        >
          {pain.map((p) => (
            <div key={p} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <span className="h-3 w-3 mt-2 rounded-full bg-red-600" />
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{p}</p>
            </div>
          ))}
        </section>

        <section
          className="grid sm:grid-cols-2 gap-6"
          id="solution"
          ref={(el) => {
            sectionRefs.current["solution"] = el
          }}
        >
          {blueprint.map((b) => (
            <div key={b} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <span className="h-3 w-3 mt-2 rounded-full bg-green-600" />
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{b}</p>
            </div>
          ))}
        </section>

        <div className="flex justify-end">
          <Button variant="outline" onClick={() => setOpenAll((o) => !o)}>
            {openAll ? "Close all" : "Open all"}
          </Button>
        </div>

        <details
          id="objectives"
          ref={(el) => {
            sectionRefs.current["objectives"] = el
          }}
          open={openAll}
          className="space-y-6"
        >
          <summary className="cursor-pointer text-2xl font-bold">Objectives</summary>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            {objectives.map((o) => (
              <div key={o} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                <span className="h-3 w-3 mt-2 rounded-full bg-blue-600" />
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </details>

        <details
          id="timeline"
          ref={(el) => {
            sectionRefs.current["timeline"] = el
          }}
          open={openAll}
          className="space-y-6"
        >
          <summary className="cursor-pointer text-2xl font-bold">Timeline</summary>
          <ol className="border-l-2 border-blue-600 ml-4 space-y-4">
            {timeline.map((t, i) => (
              <li key={t} className="relative pl-6">
                <span className="absolute -left-3 top-0 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{t}</p>
              </li>
            ))}
          </ol>
        </details>

        <details
          id="metrics"
          ref={(el) => {
            sectionRefs.current["metrics"] = el
          }}
          open={openAll}
          className="space-y-6"
        >
          <summary className="cursor-pointer text-2xl font-bold">Metrics</summary>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <span className="font-semibold">Metric</span>
            <span className="font-semibold">Before</span>
            <span className="font-semibold">After</span>
            <span className="font-semibold">Δ Change</span>
            {metrics.map((m) => (
              <Fragment key={m.metric}>
                <span>{m.metric}</span>
                <span aria-label={`before ${m.before}`}>{m.before}</span>
                <span aria-label={`after ${m.after}`}>{m.after}</span>
                <span className="flex items-center gap-1 text-green-700 font-semibold">
                  {m.trend === "up" ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l6 8h-4v8h-4v-8H6z" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 20l-6-8h4V4h4v8h4z" />
                    </svg>
                  )}
                  {m.change}
                </span>
              </Fragment>
            ))}
          </div>
        </details>

        <details
          id="wins"
          ref={(el) => {
            sectionRefs.current["wins"] = el
          }}
          open={openAll}
          className="space-y-6"
        >
          <summary className="cursor-pointer text-2xl font-bold">Wins</summary>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            {wins.map((w) => (
              <div key={w} className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                <span className="h-3 w-3 mt-2 rounded-full bg-indigo-600" />
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </details>

        <details
          id="savings"
          ref={(el) => {
            sectionRefs.current["savings"] = el
          }}
          open={openAll}
          className="space-y-6 max-w-md mx-auto"
        >
          <summary className="cursor-pointer text-2xl font-bold text-center">Estimate Your Savings</summary>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 justify-center">
              {presets.map((p) => (
                <Button key={p} variant={p === spend ? "default" : "outline"} onClick={() => setSpend(p)}>
                  ${p.toLocaleString()}
                </Button>
              ))}
            </div>
            <input
              type="number"
              value={spend}
              onChange={(e) => setSpend(+e.target.value)}
              className="w-32 text-center border rounded"
            />
            <p className="text-sm">Monthly spend: ${spend.toLocaleString()}</p>
            <p className="text-xl font-bold text-blue-600 text-center">
              Estimated monthly savings: <AnimatedNumber value={savings} />
            </p>
          </div>
        </details>
      </div>
    </div>
  )
}

