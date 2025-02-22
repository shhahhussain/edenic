"use client"

import { useState } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useTheme } from "next-themes"

const Header = () => {
  const { setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">EDENIC</span>
            <img
              className="h-8 w-auto"
              src="/favicon.svg"
              alt="EDENIC Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#services" className="text-sm font-semibold leading-6">
            Services
          </Link>
          <Link href="#approach" className="text-sm font-semibold leading-6">
            Our Approach
          </Link>
          <Link href="#case-studies" className="text-sm font-semibold leading-6">
            Case Studies
          </Link>
          <Link href="#contact" className="text-sm font-semibold leading-6">
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">EDENIC</span>
                <img
                  className="h-8 w-auto"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edenicEnhance-Ad8b3nwFICJqqBTGmARMeQCjQwzMNB.png"
                  alt="EDENIC Logo"
                />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>X
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="#services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="#approach"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Approach
                  </Link>
                  <Link
                    href="#case-studies"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

