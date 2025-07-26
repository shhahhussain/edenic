"use client"
import { motion } from "framer-motion"
import { Cloud, Server, Code, RefreshCw, Users, TrendingUp } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import ServiceConnectors from "./ServiceConnectors"
import { useRef, useEffect, useState } from "react"

const services = [
  {
    slug: "web-app-development",
    name: "Web App Development",
    description: "Responsive websites and apps using React and Tailwind CSS.",
    icon: Code,
  },
  {
    slug: "api-integration",
    name: "API Integration & Backend",
    description: "Node.js/Express APIs with MongoDB for seamless data flow.",
    icon: Server,
  },
  {
    slug: "database-design",
    name: "Database Design & Optimization",
    description: "Efficient MongoDB and SQL schemas for performance.",
    icon: Code,
  },
  {
    slug: "mvp-development",
    name: "MVP & SaaS Development",
    description: "Rapid product iterations with dashboards and auth.",
    icon: Cloud,
  },
  {
    slug: "full-stack-architecture",
    name: "Full Stack Architecture",
    description: "End-to-end solutions from frontend to deployment.",
    icon: RefreshCw,
  },
  {
    slug: "business-development",
    name: "Business Development Consulting",
    description: "Accelerate your business growth with strategic consulting. We help technology companies expand their market reach and optimize sales for web products.",
    icon: TrendingUp,
  },
  {
    slug: "offshore-teams",
    name: "Offshore Teams",
    description: "Access skilled full stack developers to scale your projects quickly and cost effectively.",
    icon: Users,
  },
]

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [iconPositions, setIconPositions] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateIconPositions = () => {
      if (!containerRef.current) return;

      const newPositions: { x: number; y: number }[] = [];
      const containerRect = containerRef.current.getBoundingClientRect();

      cardRefs.current.forEach((ref) => {
        if (ref) {
          const iconDiv = ref.querySelector(".service-icon-container");
          if (iconDiv) {
            const iconRect = iconDiv.getBoundingClientRect();
            newPositions.push({
              x: iconRect.left + iconRect.width / 2 - containerRect.left,
              y: iconRect.top + iconRect.height / 2 - containerRect.top,
            });
          }
        }
      });
      setIconPositions(newPositions);
    };

    calculateIconPositions();

    const resizeObserver = new ResizeObserver(() => {
      calculateIconPositions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section id="services" className="py-24 bg-background dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-blue-600 dark:text-white mb-4">Solutions & Services</h2>
          </motion.div>

          <div className="relative" ref={containerRef}>
            <ServiceConnectors iconPositions={iconPositions} totalItems={services.length} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card dark:bg-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border dark:border-gray-700"
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 dark:group-hover:from-blue-400/5 dark:group-hover:to-blue-400/10 transition-all duration-300" />
                  <div className="p-8 relative">
                    <div className="w-16 h-16 bg-blue-600 dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:bg-blue-500 dark:group-hover:bg-blue-600 transition-all duration-300 service-icon-container">
                      <service.icon className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors duration-300">{service.name}</h3>
                    <p className="text-muted-foreground dark:text-gray-300 mb-8 flex-grow">{service.description}</p>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg">
                      <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                        Explore More
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

