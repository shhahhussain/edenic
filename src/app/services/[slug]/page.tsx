import { notFound } from "next/navigation"
import { Cloud, Server, Code, RefreshCw, Users } from "lucide-react"
import { Button } from "../../../components/ui/button"
import Image from "next/image"

const services = [
  {
    slug: "cloud-migration",
    name: "Cloud Migration, Data Recovery & Backups",
    description: "We ensure seamlessly cloud migration data security, simplified management, and compliance standards. Achieve uninterrupted business continuity with our seamless Data Recovery & Backup solutions.",
    icon: Cloud,
    details: "Our cloud migration service includes comprehensive planning, execution, and post-migration support. We ensure zero downtime during migration and provide robust backup solutions to protect your data.",
    features: [
      "Zero-downtime migration",
      "Comprehensive backup solutions",
      "Data security and compliance",
      "Post-migration support",
      "Disaster recovery planning"
    ],
    benefits: [
      "Reduced operational costs",
      "Enhanced data security",
      "Improved scalability",
      "Better disaster recovery",
      "Increased business continuity"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Cloud migration visualization showing data transfer to cloud"
  },
  {
    slug: "kubernetes",
    name: "Managed or Un-managed Kubernetes",
    description: "Orchestrate containerized applications across AWS, Azure, and on-premises environments. Deploy, scale, and seamlessly upgrade containerized apps using Kubernetes clusters for optimal performance and flexibility.",
    icon: Server,
    details: "We offer both managed and unmanaged Kubernetes solutions, allowing you to choose the level of control that suits your needs. Our team handles cluster management, monitoring, and optimization.",
    features: [
      "Cluster management",
      "Automated scaling",
      "Load balancing",
      "Container orchestration",
      "Monitoring and logging"
    ],
    benefits: [
      "Improved resource utilization",
      "Enhanced scalability",
      "Better application availability",
      "Simplified deployment",
      "Cost optimization"
    ],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    imageAlt: "Kubernetes cluster visualization"
  },
  {
    slug: "terraform",
    name: "Infrastructure as Code using Terraform",
    description: "Establish an orchestration system through well-structured infrastructure, utilizing AWS and Azure, and the implementation of declarative code. Automate infrastructure deployment to ensure scalability and efficiency.",
    icon: Code,
    details: "Our Terraform implementation enables you to manage your infrastructure as code, making it version-controlled, reusable, and easily maintainable. We help you automate your infrastructure deployment process.",
    features: [
      "Infrastructure as Code",
      "Version control",
      "Automated deployment",
      "Multi-cloud support",
      "State management"
    ],
    benefits: [
      "Consistent deployments",
      "Reduced human error",
      "Faster provisioning",
      "Better collaboration",
      "Cost savings"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Code editor showing infrastructure as code"
  },
  {
    slug: "web-app-cloud",
    name: "Web App Cloud Infra",
    description: "Rearchitect and repurpose your old legacy data and custom applications and seamlessly move them to the cloud using our specialized, scalable Web Application Cloud Infrastructure solutions for all business types.",
    icon: Cloud,
    details: "We specialize in modernizing legacy applications and moving them to the cloud. Our solutions ensure your web applications are scalable, secure, and performant.",
    features: [
      "Legacy application modernization",
      "Cloud-native architecture",
      "Scalable infrastructure",
      "Security implementation",
      "Performance optimization"
    ],
    benefits: [
      "Modern application architecture",
      "Improved performance",
      "Enhanced security",
      "Better scalability",
      "Reduced maintenance"
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Web application cloud infrastructure"
  },
  {
    slug: "devops",
    name: "DevOps & Automation",
    description: "DevOps and automation are now the standard for seamlessly deploying applications across development and production environments. Adopting Agile methodology gives companies the edge in delivering new products to market.",
    icon: RefreshCw,
    details: "Our DevOps services help you implement CI/CD pipelines, automate testing, and streamline your development process. We help you adopt Agile methodologies for faster delivery.",
    features: [
      "CI/CD pipeline implementation",
      "Automated testing",
      "Agile methodology",
      "Infrastructure automation",
      "Monitoring and alerting"
    ],
    benefits: [
      "Faster time to market",
      "Improved quality",
      "Better collaboration",
      "Reduced deployment risks",
      "Increased efficiency"
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "DevOps automation workflow"
  },
  {
    slug: "offshore-teams",
    name: "Offshore Teams",
    description: "Reduced costs, gain access to a pool of expert and certified engineers. Use latest technology, start new projects, hire full-time employees and focus on your business growth with Edenic's offshore team services.",
    icon: Users,
    details: "Our offshore team services provide you with access to skilled professionals at competitive rates. We handle recruitment, training, and management of your offshore team.",
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

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

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
              <p className="mb-6 opacity-90 dark:text-gray-200">Transform your business with our expert cloud solutions</p>
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