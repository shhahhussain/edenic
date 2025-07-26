import { notFound } from "next/navigation"
import { Cloud, Server, Code, RefreshCw, Users, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import Image from "next/image"

const services = [
  {
    slug: "web-app-development",
    name: "Web App Development",
    description: "Responsive websites and apps using React and Tailwind CSS.",
    icon: Code,
    details: "We build modern interfaces with React and Tailwind CSS backed by Node.js services for a complete experience.",
    features: [
      "React component architecture",
      "Tailwind CSS styling",
      "State management",
      "Testing setup",
      "Automated deployments"
    ],
    benefits: [
      "Fast performance",
      "Mobile-friendly design",
      "Scalable codebase",
      "Easy maintenance",
      "Great user experience"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Web development code editor"
  },
  {
    slug: "api-integration",
    name: "API Integration & Backend",
    description: "Node.js/Express APIs with MongoDB for seamless data flow.",
    icon: Server,
    details: "We craft secure REST APIs and handle authentication, database connections and third-party integrations.",
    features: [
      "REST/GraphQL endpoints",
      "Authentication & authorization",
      "Database integration",
      "API documentation",
      "Error handling"
    ],
    benefits: [
      "Reliable data flow",
      "Secure access",
      "Easily extendable",
      "Smooth integration",
      "Scalable services"
    ],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    imageAlt: "Node.js server code"
  },
  {
    slug: "database-design",
    name: "Database Design & Optimization",
    description: "Efficient MongoDB and SQL schemas for performance.",
    icon: Code,
    details: "We design reliable data models and tune queries for high performance and scalability.",
    features: [
      "Schema design",
      "Index optimization",
      "Data migrations",
      "Backup strategies",
      "Monitoring"
    ],
    benefits: [
      "Fast queries",
      "Reliable storage",
      "Reduced costs",
      "Scalable data models",
      "Peace of mind"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Database schema diagram"
  },
  {
    slug: "mvp-development",
    name: "MVP & SaaS Development",
    description: "Rapid product iterations with dashboards and auth.",
    icon: Cloud,
    details: "Launch your product quickly with secure authentication, billing integration and cloud deployment.",
    features: [
      "User authentication",
      "Admin dashboard",
      "Subscription payments",
      "Cloud deployment",
      "Analytics integration"
    ],
    benefits: [
      "Rapid go-to-market",
      "Revenue ready",
      "Flexible architecture",
      "Secure users",
      "Scalable infrastructure"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "SaaS dashboard screenshot"
  },
  {
    slug: "full-stack-architecture",
    name: "Full Stack Architecture",
    description: "End-to-end solutions from frontend to deployment.",
    icon: RefreshCw,
    details: "We design scalable architectures, build REST APIs and ensure smooth deployments with best practices.",
    features: [
      "Architecture planning",
      "Continuous deployment",
      "Code reviews",
      "Testing automation",
      "Performance monitoring"
    ],
    benefits: [
      "Stable releases",
      "Optimized performance",
      "Developer productivity",
      "Reduced bugs",
      "Future-proof stack"
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Full stack workflow"
  },
  {
    slug: "business-development",
    name: "Business Development Consulting",
    description: "Accelerate your business growth with strategic consulting. We help technology companies expand market reach and optimize sales for web products.",
    icon: TrendingUp,
    details: "Our consulting services help tech companies grow through strategic market expansion, sales optimization and lasting client relationships in the web development industry.",
    features: [
      "Market analysis and strategy",
      "Sales process optimization",
      "Client relationship management",
      "Partnership development",
      "Revenue growth planning"
    ],
    benefits: [
      "Increased market reach",
      "Improved sales efficiency",
      "Stronger client relationships",
      "Strategic partnerships",
      "Sustainable revenue growth"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Business development strategy meeting"
  },
  {
    slug: "offshore-teams",
    name: "Offshore Teams",
    description: "Access skilled full stack developers to scale your projects quickly and cost effectively.",
    icon: Users,
    details: "We recruit and manage remote engineers so you can focus on building great products.",
    features: [
      "Skilled professional recruitment",
      "Team management",
      "Training and development",
      "Quality assurance",
      "Cost-effective solutions"
    ],
    benefits: [
      "Cost savings",
      "Access to global talent",
      "Scalable team size",
      "24/7 operations",
      "Focus on core business"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Global team collaboration"
  }
]

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-20 h-20 bg-blue-600 dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-blue-600 dark:text-white mb-4">{service.name}</h1>
              <p className="text-xl text-muted-foreground dark:text-gray-300">{service.description}</p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 ring-1 ring-border dark:ring-gray-700">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-border dark:border-gray-700">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">Overview</h2>
              <p className="text-muted-foreground dark:text-gray-300">{service.details}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-transform duration-300 border border-border dark:border-gray-700">
                <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-primary dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-gray-700 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card dark:bg-gray-800/50 rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-transform duration-300 border border-border dark:border-gray-700">
                <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-primary dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-muted-foreground dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-gray-700 rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-600 dark:bg-gray-800 rounded-2xl p-8 text-center text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90 dark:text-gray-200">Build your next web solution with our full stack experts</p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-200">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 