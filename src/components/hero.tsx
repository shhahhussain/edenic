"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Cloud } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),theme(colors.white))]" />
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 lg:items-center lg:gap-x-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-8"
                    >
                        <Cloud className="h-4 w-4 mr-2" />
                        Cloud Solutions
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
                    >
                        Transform Your Business with Cloud Solutions
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 text-lg leading-8 text-gray-600"
                    >
                        We help businesses move their IT systems to the cloud, ensuring secure, flexible, and cost-efficient solutions tailored to your unique requirements.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-10 flex items-center gap-x-6"
                    >
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            Get Started
                        </Button>
                        <Link 
                            href="#services" 
                            className="group text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-300"
                        >
                            Learn more 
                            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
                >
                    <div className="relative max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <Image
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                            alt="Cloud Solutions"
                            width={1216}
                            height={684}
                            className="w-[76rem] rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10 hover:shadow-3xl transition-shadow duration-300"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent rounded-xl" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
