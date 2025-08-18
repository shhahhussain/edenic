export default function MicroservicesOverhaulCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="prose dark:prose-invert mx-auto">
        <h1>18‑Service Microservices Overhaul</h1>
        <p>
          Edenic’s deep‑dive transformation of a ride‑hailing platform from a
          single Express monolith into a resilient microservice ecosystem.
        </p>

        <h2>Snapshot</h2>
        <ul>
          <li>
            Scope – 18 autonomous services, 320+ Kubernetes objects, 400+ Git
            commits
          </li>
          <li>
            Scale – 89 white‑label companies, 2.4 M annual trips, 48 K
            drivers online at peak
          </li>
          <li>
            Velocity – 12 prod releases per day with &lt;10 min rollback window
          </li>
          <li>
            Reliability – 99.985 % uptime, zero critical incidents since
            go‑live
          </li>
        </ul>

        <h2>1. Engagement Overview</h2>
        <ul>
          <li>Duration – 4 weeks from audit to cut‑over</li>
          <li>
            Team – 3 DevOps engineers, 2 backend specialists, 1 SRE, 1 project
            lead
          </li>
          <li>
            Deliverables – full architecture, IaC, CI/CD, service code,
            observability stack, 350‑page documentation bundle
          </li>
        </ul>

        <h2>2. Starting Point &amp; Pain</h2>
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
            Infra cost climbing because the only scaling lever was duplicating the
            whole container
          </li>
          <li>
            No granular metrics; a spike in location updates hid payment failures
            until users complained
          </li>
        </ul>

        <h2>3. Objectives We Locked In</h2>
        <ul>
          <li>
            Break critical domains (Trips, Location, Payment) into independent,
            horizontally scalable services
          </li>
          <li>
            Slash deploy time to &lt;10 min and remove maintenance windows
            completely
          </li>
          <li>
            Reduce AWS bill by at least 25 % through right‑sizing and HPA
          </li>
          <li>
            Enable data‑science team to ship Random‑Forest ETA without blocking
            feature work
          </li>
        </ul>

        <h2>4. Transformation Roadmap</h2>
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
        <h3>Phase 2 – Identity &amp; Core Services (Days 4‑8)</h3>
        <ul>
          <li>
            Auth, User, Driver, and Fleet services bootstrapped with separate
            Postgres schemas and JWT/OIDC boundary
          </li>
          <li>Seeded 50 K users and 48 K drivers using data migration runners</li>
        </ul>
        <h3>Phase 3 – Business Logic Services (Days 9‑14)</h3>
        <ul>
          <li>
            Trip Service re‑implemented with event sourcing and outbox pattern
            into Kafka
          </li>
          <li>
            Pricing Service moved to rule‑engine in Rust (20 x faster vs original
            JS)
          </li>
          <li>
            Location Service built in Go with PostGIS + Redis geo‑index; handles
            8 K updates/sec
          </li>
        </ul>
        <h3>Phase 4 – Support &amp; Analytics (Days 15‑18)</h3>
        <ul>
          <li>
            Notification, Import, Export, Analytics services deployed with Celery
            &amp; ClickHouse
          </li>
          <li>Implemented GraphQL gateway for BI dashboards</li>
        </ul>
        <h3>Phase 5 – Hardening &amp; Handover (Days 19‑24)</h3>
        <ul>
          <li>
            Chaos engineering runs (Pumba) proved system survives 3 node failures
            without SLO breach
          </li>
          <li>
            Blue‑green cut‑over executed—zero downtime, DNS flip in 90 s
          </li>
          <li>
            Delivered runbooks, Terraform modules, Quick‑start scripts, and
            350‑page doc set
          </li>
        </ul>

        <h2>5. Architecture Deep Dive</h2>
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
            Comms – gRPC for real‑time, REST for external, WebSocket hub for live
            driver tracking
          </li>
          <li>
            Infra‑As‑Code – Terraform + Helmfile (413 resources across
            dev/stage/prod)
          </li>
        </ul>

        <h2>6. Data &amp; ML Pipeline</h2>
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

        <h2>7. DevSecOps &amp; Governance</h2>
        <ul>
          <li>
            GitHub Actions → Trivy + SBOM scan, OPA policies at admission
            controller
          </li>
          <li>Secrets encrypted with SOPS; rotation automated via Renovate PRs</li>
          <li>
            Audit logs streamed to ClickHouse; retention 18 months; search
            latency &lt;200 ms
          </li>
        </ul>

        <h2>8. Observability &amp; SRE Metrics</h2>
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

        <h2>9. Business Impact (90 d Post‑Launch)</h2>
        <ul>
          <li>Deploy frequency jumped from 2/week to 12/day (6×)</li>
          <li>Mean time to recovery dropped from 40 min to 7 min</li>
          <li>AWS bill down 30 % (spot usage + HPA)</li>
          <li>Driver app crash reports down 45 %</li>
          <li>
            Customer NPS up 12 pts thanks to real‑time ETA accuracy
          </li>
        </ul>

        <h2>10. Post‑Launch Enhancements</h2>
        <ul>
          <li>
            Added automated A/B rollout for pricing algorithms using Flagger
          </li>
          <li>
            Introduced canary releases on Location Service with 1 % traffic slice
          </li>
          <li>
            Data‑science notebooks now pull live Kafka topic via Materialize for
            instant BI
          </li>
        </ul>

        <h2>11. Key Takeaways</h2>
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

        <p>
          <strong>Ready to Unshackle Your Monolith?</strong>
          <br />
          Ping <a href="mailto:hello@edenic.cloud">hello@edenic.cloud</a> – we’ll
          map domains, size the effort, and quote a fixed fee in 48 h.
        </p>

        <p className="text-sm text-gray-500">
          © 2025 Edenic DevOps – confidential client metrics shared with
          permission
        </p>
      </article>
    </div>
  )
}

