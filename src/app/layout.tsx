"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Footer from "../components/footer"
import Header from "../components/header"
import { CloudSilhouette } from "../components/shared/CloudSilhouette"
import { useScroll } from "framer-motion"
import { useRef } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const earthImages = {
    large: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2070&auto=format&fit=crop",
    small1: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?q=80&w=2070&auto=format&fit=crop",
    small2: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2069&auto=format&fit=crop"
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
        >
          <Header />
          <div ref={containerRef} className="relative z-0 min-h-screen">
            <CloudSilhouette
              size="large"
              position="fixed w-[400px] h-[500px] left-0 top-0 opacity-40 z-20"
              scrollYProgress={scrollYProgress}
              imageUrl={earthImages.large}
            />
            <CloudSilhouette
              size="small"
              position="fixed w-[300px] h-[350px] right-0 top-1/4 opacity-40 z-20"
              scrollYProgress={scrollYProgress}
              imageUrl={earthImages.small1}
            />
            <CloudSilhouette
              size="small"
              position="fixed w-[300px] h-[350px] left-1/4 bottom-0 opacity-40 z-20"
              scrollYProgress={scrollYProgress}
              imageUrl={earthImages.small2}
            />
            <main className="relative z-5">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
