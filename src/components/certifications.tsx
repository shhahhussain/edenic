"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const certifications = [
  {
    name: "Cloud Quest: Practitioner",
    issuer: "Amazon Web Services",
    logo: "/certificates/AWS Cloud Quest- Cloud Practitioner .png",
  },
  {
    name: "Cloud Practitioner",
    issuer: "Amazon Web Services",
    logo: "/certificates/AWS Certified Cloud Practitioner .png",
  },
  {
    name: "Solutions Architect Associate",
    issuer: "Amazon Web Services",
    logo: "/certificates/AWS Certified Solutions Architect – Associate .png",
  },
  {
    name: "Solutions Architect Professional",
    issuer: "Amazon Web Services",
    logo: "/certificates/AWS Certified Solutions Architect – Professional .png",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    logo: "/certificates/CKA- Certified Kubernetes Administrator .png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-600 dark:text-white mb-4">
            Our Certified Talent
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Our team&apos;s collective expertise is backed by top-tier industry
            certifications. We&apos;re committed to continuous learning to deliver
            cutting-edge solutions.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {certifications.map((cert, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1 h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group h-full flex"
                  >
                    <div className="bg-card dark:bg-gray-800/50 rounded-2xl shadow-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-border dark:border-gray-700 h-full flex flex-col justify-between w-full">
                      <div className="relative h-40 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600/5 to-blue-600/10 dark:from-blue-400/5 dark:to-blue-400/10">
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <Image
                            src={cert.logo}
                            alt={`${cert.issuer} logo`}
                            width={200}
                            height={120}
                            className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 sm:-left-4 md:-left-6" />
          <CarouselNext className="-right-2 sm:-right-4 md:-right-6" />
        </Carousel>
      </div>
    </section>
  );
}
