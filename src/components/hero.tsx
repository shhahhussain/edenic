"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform, useAnimation, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CloudSilhouette } from "./shared/CloudSilhouette";
import { VideoBackground } from "./VideoBackground";

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
      className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full filter blur-[1px]"
      style={{
        offsetPath: `path("${path}")`,
        offsetDistance: "0%",
      }}
    />
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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-950 dark:from-gray-950 dark:to-gray-800">
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:py-40 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:col-span-1">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white dark:text-gray-100 sm:text-6xl">
              Transform Your Business with Cloud Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 dark:text-gray-300">
              We help businesses move their IT systems to the cloud, ensuring secure, flexible, and cost-efficient solutions tailored to your unique requirements.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-950 dark:from-gray-950 dark:to-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.950),theme(colors.background))] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.900),theme(colors.gray.950))] z-0" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:py-40 lg:items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:mx-0 lg:col-span-1 relative z-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-300 to-white dark:from-blue-400 dark:to-gray-100 bg-clip-text text-transparent sm:text-6xl"
          >
            Transform Your Business with Cloud Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 font-bold bg-gradient-to-r from-blue-200 to-blue-500 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent"
          >
            We help businesses move their IT systems to the cloud, ensuring secure, flexible, and cost-efficient solutions tailored to your unique requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center gap-x-6"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white px-6 py-3 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
            <Link
              href="#services"
              className="group text-lg font-semibold leading-6 text-white hover:text-blue-300 dark:text-gray-200 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Learn more
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative lg:col-span-1 mt-16 sm:mt-24 lg:mt-0 lg:flex lg:justify-end z-20"
        >
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <VideoBackground 
              videoSrc="/videos/datacenter.mp4"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent z-10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
