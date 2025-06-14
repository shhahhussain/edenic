import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import FooterBackground from "./FooterBackground";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2023); // Default to a recent year

  useEffect(() => {
    // This will only run on the client side
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-background dark:bg-gray-900 text-foreground dark:text-gray-100 py-12 sm:py-16 overflow-hidden">
      <FooterBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-white">
              About Edenic
            </h3>
            <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Edenic is a leading provider of innovative cloud and DevOps
              solutions, dedicated to helping businesses thrive in the dynamic
              digital landscape. We empower your growth with cutting-edge
              technology and expert support.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 flex items-center text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#approach"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 flex items-center text-sm sm:text-base"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="#case-studies"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 flex items-center text-sm sm:text-base"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 flex items-center text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-white">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-muted-foreground dark:text-gray-300 flex items-start text-sm sm:text-base">
                <MapPin className="h-5 w-5 mr-3 text-primary dark:text-blue-400 flex-shrink-0" />
                <span>Peshawar saddar , Pakistan</span>
              </p>
              <p className="text-muted-foreground dark:text-gray-300 flex items-center text-sm sm:text-base">
                <Phone className="h-5 w-5 mr-3 text-primary dark:text-blue-400" />
                <span>+92 (311) 0444411</span>
              </p>
              <p className="text-muted-foreground dark:text-gray-300 flex items-center text-sm sm:text-base">
                <Mail className="h-5 w-5 mr-3 text-primary dark:text-blue-400" />
                <span>contact@edenic.cloud</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-white">
              Follow Us
            </h3>
            <div className="flex space-x-4 sm:space-x-6">
              <motion.a
                href="https://www.facebook.com/people/Edenic/61573554717921/"
                className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, x: 2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 border-t border-border dark:border-gray-700 pt-8 text-center">
          <p className="text-muted-foreground dark:text-gray-300 text-sm">
            &copy; {currentYear} Edenic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
