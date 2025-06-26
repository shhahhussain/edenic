"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react"

const footerNavs = [
    {
        label: "Pages",
        items: [
            { href: "#home", name: "Home" },
            { href: "#services", name: "Services" },
            { href: "#certifications", name: "About" },
            { href: "#contact", name: "Contact" },
        ],
    },
    {
        label: "Company",
        items: [
            { href: "#", name: "About us" },
            { href: "#", name: "Blog" },
            { href: "#", name: "Careers" },
        ],
    },
    {
        label: "Resources",
        items: [
            { href: "#", name: "Contact us" },
            { href: "#", name: "Support" },
            { href: "#", name: "Documentation" },
            { href: "#", name: "Sitemap" },
        ],
    },
]

const footerSocials = [
    {
        href: "https://www.linkedin.com/company/edenic-cloud",
        name: "LinkedIn",
        icon: <Linkedin size={20} />,
    },
    {
        href: "https://x.com/edeniccloud",
        name: "Twitter",
        icon: <Twitter size={20} />,
    },
    {
        href: "https://www.instagram.com/theedenic/",
        name: "Instagram",
        icon: <Instagram size={20} />,
    },
    {
        href: "https://www.facebook.com/people/Edenic/61573554717921/",
        name: "Facebook",
        icon: <Facebook size={20} />,
    },
]

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white"
        >
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <div className="w-40 h-10 relative">
                            <Image
                                src="/logo.png"
                                alt="Edenic"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                            Transforming businesses with cutting-edge cloud solutions and DevOps expertise.
                        </p>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
                            <form className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-100 border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg w-full sm:w-auto flex-grow"
                                />
                                <Button className="bg-blue-600 hover:bg-blue-700 rounded-lg w-full sm:w-auto">
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
                        {footerNavs.map((nav) => (
                            <div key={nav.label}>
                                <h3 className="font-semibold text-lg uppercase tracking-wider">{nav.label}</h3>
                                <ul className="mt-6 space-y-3">
                                    {nav.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Edenic Inc. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-5 mt-4 sm:mt-0">
                        {footerSocials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
