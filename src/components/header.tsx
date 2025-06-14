"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { CloudTrail } from './CloudTrail'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
]

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-400 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="relative">
        <CloudTrail />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative w-40 h-10">
                  <Image
                    src="/logo.png"
                    alt="CloudFlow"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-700 hover:text-gray-900 group"
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="relative px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </nav>

            <button
              className="md:hidden relative w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="absolute inset-0"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="block w-6 h-0.5 bg-gray-700 absolute top-4 left-2"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="block w-6 h-0.5 bg-gray-700 absolute top-5 left-2"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="block w-6 h-0.5 bg-gray-700 absolute top-6 left-2"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-y-0 right-0 w-64 bg-white/80 backdrop-blur-md md:hidden"
          >
            <div className="relative h-full">
              <CloudTrail />
              <div className="relative flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

