import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import rocketAnimation from "@/public/lotties/rocket.json"
import statsAnimation from "@/public/lotties/stats.json"
import timelineAnimation from "@/public/lotties/timeline.json"
import diagramAnimation from "@/public/lotties/diagram.json"
import impactAnimation from "@/public/lotties/impact.json"
import emailAnimation from "@/public/lotties/email.json"
import {
  Layers,
  Users,
  Zap,
  ShieldCheck,
  CalendarClock,
  UserCog,
  FileText,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const snapshot = [
  {
    icon: Layers,
    title: "Scope",
    description:
      "18 autonomous services, 320+ Kubernetes objects, 400+ Git commits",
  },
  {
    icon: Users,
    title: "Scale",
    description:
      "89 white‑label companies, 2.4 M annual trips, 48 K drivers online at peak",
  },
  {
    icon: Zap,
    title: "Velocity",
    description:
      "12 prod releases per day with <10 min rollback window",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "99.985 % uptime, zero critical incidents since go‑live",
  },
]

const overview = [
  {
    icon: CalendarClock,
    title: "Duration",
    description: "4 weeks from audit to cut‑over",
  },
  {
    icon: UserCog,
    title: "Team",
    description:
      "3 DevOps engineers, 2 backend specialists, 1 SRE, 1 project lead",
  },
  {
    icon: FileText,
    title: "Deliverables",
    description:
      "Full architecture, IaC, CI/CD, service code, observability stack, 350‑page documentation bundle",
  },
]

const tech = [
  "Node.js",
  "Go",
  "Rust",
  "Python",
  "PostgreSQL",
  "PostGIS",
  "Redis",
  "ClickHouse",
  "Kafka",
  "S3",
]

const toc = [
  { id: "snapshot", label: "Snapshot" },
  { id: "overview", label: "Engagement Overview" },
  { id: "starting-point", label: "Starting Point & Pain" },
  { id: "objectives", label: "Objectives" },
  { id: "roadmap", label: "Transformation Roadmap" },
  { id: "architecture", label: "Architecture Deep Dive" },
  { id: "data-ml", label: "Data & ML Pipeline" },
  { id: "devsecops", label: "DevSecOps & Governance" },
  { id: "observability", label: "Observability & SRE Metrics" },
  { id: "impact", label: "Business Impact" },
  { id: "enhancements", label: "Post‑Launch Enhancements" },
  { id: "takeaways", label: "Key Takeaways" },
  { id: "cta", label: "Contact" },
]

export default function MicroservicesOverhaulCaseStudy() {
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      const trigger = document.body.scrollHeight * 0.75
      setShowCTA(scrollPos > trigger)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const sections = [
    {
      id: "snapshot",
      title: "Snapshot",
      content: (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            {snapshot.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-3 rounded-lg border p-4"
              >
                <s.icon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="m-0">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Lottie
            animationData={statsAnimation}
            className="mx-auto mt-4 h-24 w-24"
          />
        </>
      ),
    },
    {
      id: "overview",
      title: "1. Engagement Overview",
      content: (
        <div className="grid gap-4 sm:grid-cols-3">
          {overview.map((o) => (
            <div
              key={o.title}
              className="flex items-start gap-3 rounded-lg border p-4"
            >
              <o.icon className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">{o.title}</h3>
                <p className="m-0">{o.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "starting-point",
      title: "2. Starting Point & Pain",
      content: (
        <ul>
          <li>
            One Express monolith on port 5000 carrying every API route,
            WebSocket, and cron job
          </li>
          <li>
            Monolithic deploys took 30‑40 min, forced maintenance windows, and
            risked full‑site outages
          </li>
          <li>
            Infra cost climbing because the only scaling lever was duplicating
            the whole container
          </li>
          <li>
            No granular metrics; a spike in location updates hid payment
            failures until users complained
          </li>
        </ul>
      ),
    },
    {
      id: "objectives",
      title: "3. Objectives We Locked In",
      content: (
        <ul>
          <li>
            Break critical domains (Trips, Location, Payment) into independent,
            horizontally scalable services
          </li>
          <li>
            Slash deploy time to &lt;10 min and remove maintenance windows
            completely
          </li>
          <li>Reduce AWS bill by at least 25 % through right‑sizing and HPA</li>
          <li>
            Enable data‑science team to ship Random‑Forest ETA without blocking
            feature work
          </li>
        </ul>
      ),
    },
    {
      id: "roadmap",
      title: "4. Transformation Roadmap",
      content: (
        <>
          <Lottie
            animationData={timelineAnimation}
            className="mx-auto mb-8 h-32 w-full max-w-lg"
          />
          <div className="mb-8 hidden justify-between text-sm md:flex">
            {["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"].map(
              (p) => (
                <span key={p} className="flex-1 text-center">
                  {p}
                </span>
              )
            )}
          </div>
          <ol className="space-y-6">
            <li>
              <h3>Phase 1 – Core Foundation (Days 1‑3)</h3>
              <ul>
                <li>
                  Set up EKS cluster with managed node groups and spot‑fallback
                  autoscaling
                </li>
                <li>
                  Deployed API Gateway, Linkerd service mesh, Kafka (MSK), and
                  Loki/Grafana stack
                </li>
              </ul>
            </li>
            <li>
              <h3>Phase 2 – Identity &amp; Core Services (Days 4‑8)</h3>
              <ul>
                <li>
                  Auth, User, Driver, and Fleet services bootstrapped with
                  separate Postgres schemas and JWT/OIDC boundary
                </li>
                <li>
                  Seeded 50 K users and 48 K drivers using data migration
                  runners
                </li>
              </ul>
            </li>
            <li>
              <h3>Phase 3 – Business Logic Services (Days 9‑14)</h3>
              <ul>
                <li>
                  Trip Service re‑implemented with event sourcing and outbox
                  pattern into Kafka
                </li>
                <li>
                  Pricing Service moved to rule‑engine in Rust (20 x faster vs
                  original JS)
                </li>
                <li>
                  Location Service built in Go with PostGIS + Redis geo‑index;
                  handles 8 K updates/sec
                </li>
              </ul>
            </li>
            <li>
              <h3>Phase 4 – Support &amp; Analytics (Days 15‑18)</h3>
              <ul>
                <li>
                  Notification, Import, Export, Analytics services deployed with
                  Celery &amp; ClickHouse
                </li>
                <li>Implemented GraphQL gateway for BI dashboards</li>
              </ul>
            </li>
            <li>
              <h3>Phase 5 – Hardening &amp; Handover (Days 19‑24)</h3>
              <ul>
                <li>
                  Chaos engineering runs (Pumba) proved system survives 3 node
                  failures without SLO breach
                </li>
                <li>
                  Blue‑green cut‑over executed—zero downtime, DNS flip in 90 s
                </li>
                <li>
                  Delivered runbooks, Terraform modules, Quick‑start scripts,
                  and 350‑page doc set
                </li>
              </ul>
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "architecture",
      title: "5. Architecture Deep Dive",
      content: (
        <>
          <ul>
            <li>
              Languages – Node.js (12 services) for business logic, Go (6) for
              low‑latency paths, Rust for geospatial, Python for analytics
            </li>
            <li>
              Data Stores – PostgreSQL + PostGIS, Redis, ClickHouse, S3,
              Redpanda‑compatible Kafka
            </li>
            <li>
              Comms – gRPC for real‑time, REST for external, WebSocket hub for
              live driver tracking
            </li>
            <li>
              Infra‑As‑Code – Terraform + Helmfile (413 resources across
              dev/stage/prod)
            </li>
          </ul>
          <div className="my-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
          <Lottie
            animationData={diagramAnimation}
            className="mx-auto mt-4 h-40 w-full max-w-md"
          />
        </>
      ),
    },
    {
      id: "data-ml",
      title: "6. Data & ML Pipeline",
      content: (
        <ul>
          <li>
            Random‑Forest ETA job runs on K8s CronJob every 4 h, training on 2 GB
            historical trips
          </li>
          <li>
            Inference served via Route Service; P95 latency 42 ms, 98 % accurate
            within ±2 min
          </li>
        </ul>
      ),
    },
    {
      id: "devsecops",
      title: "7. DevSecOps & Governance",
      content: (
        <ul>
          <li>
            GitHub Actions → Trivy + SBOM scan, OPA policies at admission
            controller
          </li>
          <li>
            Secrets encrypted with SOPS; rotation automated via Renovate PRs
          </li>
          <li>
            Audit logs streamed to ClickHouse; retention 18 months; search
            latency &lt;200 ms
          </li>
        </ul>
      ),
    },
    {
      id: "observability",
      title: "8. Observability & SRE Metrics",
      content: (
        <ul>
          <li>Prometheus scrapes 52 K series; Grafana dashboards per service</li>
          <li>
            SLOs – 99.9 % availability Trip API, 1 s p95 Location latency; all
            met 90 d running
          </li>
          <li>
            Alerting routed through PagerDuty with auto‑silence during
            maintenance windows (now near‑zero)
          </li>
        </ul>
      ),
    },
    {
      id: "impact",
      title: "9. Business Impact (90 d Post‑Launch)",
      content: (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr>
                  <th className="p-2 text-left">Metric</th>
                  <th className="p-2 text-left">Before</th>
                  <th className="p-2 text-left">After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Deploy frequency</td>
                  <td className="p-2">2/week</td>
                  <td className="p-2">12/day</td>
                </tr>
                <tr>
                  <td className="p-2">Mean time to recovery</td>
                  <td className="p-2">40 min</td>
                  <td className="p-2">7 min</td>
                </tr>
                <tr>
                  <td className="p-2">AWS bill</td>
                  <td className="p-2">—</td>
                  <td className="p-2">-30 %</td>
                </tr>
                <tr>
                  <td className="p-2">Driver app crashes</td>
                  <td className="p-2">Baseline</td>
                  <td className="p-2">-45 %</td>
                </tr>
                <tr>
                  <td className="p-2">Customer NPS</td>
                  <td className="p-2">Baseline</td>
                  <td className="p-2">+12 pts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Lottie
            animationData={impactAnimation}
            className="mx-auto mt-4 h-24 w-24"
          />
        </>
      ),
    },
    {
      id: "enhancements",
      title: "10. Post‑Launch Enhancements",
      content: (
        <ul>
          <li>
            Added automated A/B rollout for pricing algorithms using Flagger
          </li>
          <li>
            Introduced canary releases on Location Service with 1 % traffic
            slice
          </li>
          <li>
            Data‑science notebooks now pull live Kafka topic via Materialize for
            instant BI
          </li>
        </ul>
      ),
    },
    {
      id: "takeaways",
      title: "11. Key Takeaways",
      content: (
        <ul>
          <li>
            Break domains first, not tables—clear ownership is half the battle
          </li>
          <li>
            Service templates and generator CLI cut new‑service boot time to
            &lt;30 min
          </li>
          <li>
            Observability before refactor prevented blind spots when traffic
            doubled
          </li>
        </ul>
      ),
    },
    {
      id: "cta",
      title: "Contact",
      content: (
        <>
          <Lottie
            animationData={emailAnimation}
            className="mx-auto mb-4 h-32 w-32"
          />
          <p className="text-center">
            <strong>Ready to Unshackle Your Monolith?</strong>
            <br />
            Ping <a href="mailto:hello@edenic.cloud">hello@edenic.cloud</a> –
            we’ll map domains, size the effort, and quote a fixed fee in 48 h.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 leading-relaxed">
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[200px_1fr] lg:gap-8">
        <nav className="sticky top-24 self-start">
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <article className="prose dark:prose-invert max-w-none">
          <header className="mb-8 flex items-center gap-4">
            <h1 className="text-4xl font-bold">18‑Service Microservices Overhaul</h1>
            <Lottie animationData={rocketAnimation} className="h-20 w-20" />
          </header>
          <p>
            Edenic’s deep‑dive transformation of a ride‑hailing platform from a
            single Express monolith into a resilient microservice ecosystem.
          </p>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mt-8 scroll-mt-24"
            >
              <h2 className="sticky top-0 bg-background py-2 text-3xl font-semibold">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        <header className="mb-8 flex items-center gap-4">
          <h1 className="flex-1 text-3xl font-bold">
            18‑Service Microservices Overhaul
          </h1>
          <Lottie animationData={rocketAnimation} className="h-16 w-16" />
        </header>
        <p className="mb-4">
          Edenic’s deep‑dive transformation of a ride‑hailing platform from a
          single Express monolith into a resilient microservice ecosystem.
        </p>
        <Accordion type="single" collapsible>
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger>{section.title}</AccordionTrigger>
              <AccordionContent>{section.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {showCTA && (
        <div className="fixed inset-x-0 bottom-4 flex justify-center">
          <div className="flex items-center gap-4 rounded-lg border bg-background/90 p-4 shadow-lg backdrop-blur">
            <Lottie animationData={emailAnimation} className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Ready to Unshackle Your Monolith?</p>
              <Button>Get a Quote in 48h</Button>
            </div>
          </div>
        </div>
      )}

      <p className="mt-16 text-center text-sm text-muted-foreground">
        © 2025 Edenic DevOps – confidential client metrics shared with
        permission
      </p>
    </div>
  )
}

