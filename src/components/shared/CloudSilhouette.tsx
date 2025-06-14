"use client"

import { motion, useAnimation, useTransform, MotionValue } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

interface CloudSilhouetteProps {
  size: "large" | "small"
  position: string
  scrollYProgress: MotionValue<number>
  imageUrl: string
}

export const CloudSilhouette = ({ size, position, scrollYProgress, imageUrl }: CloudSilhouetteProps) => {
  const controls = useAnimation()
  const y = useTransform(scrollYProgress, [0, 1], [0, size === "large" ? 100 : 50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, size === "large" ? 5 : -5])

  useEffect(() => {
    controls.start({
      y: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    })
  }, [controls])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={controls}
      style={{ y, rotate }}
      className={`absolute ${position} bg-gradient-to-br from-blue-900/90 to-blue-950/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-xl rounded-[100px] shadow-2xl overflow-hidden group`}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt="Earth at night"
          fill
          className="object-cover opacity-100 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={size === "large"}
        />
        <div className="absolute inset-0" />
      </div>
    </motion.div>
  )
} 