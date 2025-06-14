"use client"
import { Cloud, Server, Code, RefreshCw, Users } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const services = [
  {
    slug: "cloud-migration",
    name: "Cloud Migration, Data Recovery & Backups",
    description: "We ensure seamlessly cloud migration data security, simplified management, and compliance standards. Achieve uninterrupted business continuity with our seamless Data Recovery & Backup solutions.",
    icon: Cloud,
  },
  {
    slug: "kubernetes",
    name: "Managed or Un-managed Kubernetes",
    description: "Orchestrate containerized applications across AWS, Azure, and on-premises environments. Deploy, scale, and seamlessly upgrade containerized apps using Kubernetes clusters for optimal performance and flexibility.",
    icon: Server,
  },
  {
    slug: "terraform",
    name: "Infrastructure as Code using Terraform",
    description: "Establish an orchestration system through well-structured infrastructure, utilizing AWS and Azure, and the implementation of declarative code. Automate infrastructure deployment to ensure scalability and efficiency.",
    icon: Code,
  },
  {
    slug: "web-app-cloud",
    name: "Web App Cloud Infra",
    description: "Rearchitect and repurpose your old legacy data and custom applications and seamlessly move them to the cloud using our specialized, scalable Web Application Cloud Infrastructure solutions for all business types.",
    icon: Cloud,
  },
  {
    slug: "devops",
    name: "DevOps & Automation",
    description: "DevOps and automation are now the standard for seamlessly deploying applications across development and production environments. Adopting Agile methodology gives companies the edge in delivering new products to market.",
    icon: RefreshCw,
  },
  {
    slug: "offshore-teams",
    name: "Offshore Teams",
    description: "Reduced costs, gain access to a pool of expert and certified engineers. Use latest technology, start new projects, hire full-time employees and focus on your business growth with Edenic's offshore team services.",
    icon: Users,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions & Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Edenic, we help businesses move all their IT systems , (web servers, databases, Microsoft enterprise applications), critical IT functions (disaster, backup, logging) hosting development tools, Kubernetes, and CI/CD pipelines to the cloud. We offer secure, flexible, cost-efficient, and scalable cloud solutions tailored to your unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-8 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.name}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                  <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                    Explore More
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

