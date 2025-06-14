"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform, useAnimation, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface BinaryParticleProps {
  path: string;
  delay?: number;
}

const BinaryParticle = ({ path, delay = 0 }: BinaryParticleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, pathOffset: 0 }}
      animate={{
        opacity: [0, 1, 0],
        pathOffset: 1,
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-1 h-1 bg-blue-400 rounded-full filter blur-[1px]"
      style={{
        offsetPath: `path("${path}")`,
        offsetDistance: "0%",
      }}
    />
  );
};

interface CloudSilhouetteProps {
  size: "large" | "small";
  position: string;
  scrollYProgress: MotionValue<number>;
  imageUrl: string;
}

const CloudSilhouette = ({ size, position, scrollYProgress, imageUrl }: CloudSilhouetteProps) => {
  const controls = useAnimation();
  const y = useTransform(scrollYProgress, [0, 1], [0, size === "large" ? 100 : 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, size === "large" ? 5 : -5]);

  useEffect(() => {
    controls.start({
      y: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={controls}
      style={{ y, rotate }}
      className={`absolute ${position} bg-gradient-to-br from-blue-900/90 to-blue-950/90 backdrop-blur-xl rounded-[100px] shadow-2xl overflow-hidden group`}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt="Earth at night"
          fill
          className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={size === "large"}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20" />
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlePaths = [
    "M 100,100 C 200,50 300,150 400,100",
    "M 200,200 C 300,150 400,250 500,200",
    "M 150,300 C 250,250 350,350 450,300",
  ];

  const earthImages = {
    large: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2070&auto=format&fit=crop",
    small1: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?q=80&w=2070&auto=format&fit=crop",
    small2: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2069&auto=format&fit=crop"
  };

  if (!isMounted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-950">
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:py-40 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:col-span-1">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Business with Cloud Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              We help businesses move their IT systems to the cloud, ensuring secure, flexible, and cost-efficient solutions tailored to your unique requirements.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-950">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.950),theme(colors.background))]" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:py-40 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:mx-0 lg:col-span-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Transform Your Business with Cloud Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-blue-100"
          >
            We help businesses move their IT systems to the cloud, ensuring secure, flexible, and cost-efficient solutions tailored to your unique requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
            <Link
              href="#services"
              className="group text-lg font-semibold leading-6 text-white hover:text-blue-300 transition-colors duration-300"
            >
              Learn more
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-1 mt-16 sm:mt-24 lg:mt-0 lg:flex lg:justify-end">
          <div className="relative w-full h-[600px]">
            <CloudSilhouette
              size="large"
              position="w-[400px] h-[500px] left-0 top-0"
              scrollYProgress={scrollYProgress}
              imageUrl={earthImages.large}
            />
            <CloudSilhouette
              size="small"
              position="w-[300px] h-[350px] right-0 top-0"
              scrollYProgress={scrollYProgress}
              imageUrl={earthImages.small1}
            />
            <CloudSilhouette
              size="small"
              position="w-[300px] h-[350px] right-0 bottom-0"
              scrollYProgress={scrollYProgress}
              imageUrl={earthImages.small2}
            />
            
            {particlePaths.map((path, index) => (
              <BinaryParticle key={index} path={path} delay={index * 0.5} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
