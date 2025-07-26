"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { VideoBackground } from "./VideoBackground";

export default function Hero() {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-950 dark:from-gray-950 dark:to-gray-800">
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:py-40 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:col-span-1">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white dark:text-gray-100 sm:text-6xl">
              Build Modern Web Apps with the MERN Stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 dark:text-gray-300">
              We craft responsive interfaces and robust APIs using React, Node.js and MongoDB.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-950 dark:from-gray-950 dark:to-gray-800">
      <div className="absolute inset-0 z-0">
        <VideoBackground 
          videoSrc="/videos/datacenter.mp4"
          className="w-full h-full absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.950),theme(colors.background))] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.900),theme(colors.gray.950))] opacity-50" />
      </div>
      
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] sm:text-6xl"
          >
            Build Modern Web Apps with the MERN Stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
          >
            We craft responsive interfaces and robust APIs using React, Node.js and MongoDB.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center gap-x-6 justify-center"
          >
            <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white px-6 py-3 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="#contact">Get Started</Link>
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
      </div>
    </div>
  );
}
