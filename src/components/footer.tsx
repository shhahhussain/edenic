import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Github, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              About Edenic
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Edenic is a leading provider of innovative cloud and DevOps solutions, dedicated to helping businesses thrive
              in the dynamic digital landscape. We empower your growth with cutting-edge technology and expert support.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  Contact
                </Link>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-300 flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <span>8 The Green #21172 Dover, DE, 19901, USA</span>
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+1 (917) 732-2205</span>
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@edenic.cloud</span>
              </p>
            </div>
          
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/people/Edenic/61573554717921/" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110" aria-label="Facebook">
                <Facebook className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110" aria-label="Twitter">
                <Twitter className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110" aria-label="GitHub">
                <Github className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
        </div>
        <div className="mt-16 border-t border-blue-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Edenic. All rights reserved.</p>
        </div>
      </div>
  )
}

export default Footer

