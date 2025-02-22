"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ParticleAnimation from "./particle-animation";

const Hero = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen flex items-center">
            <ParticleAnimation />
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Elevate Your Digital Ecosystem with EDENIC
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg leading-8 text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Harness the power of cutting-edge development and DevOps
                        solutions to transform your business. We craft bespoke
                        digital experiences that drive growth and innovation.
                    </motion.p>
                    <motion.div
                        className="mt-10 flex items-center justify-center gap-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            Get started
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn more <span aria-hidden="true">→</span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
