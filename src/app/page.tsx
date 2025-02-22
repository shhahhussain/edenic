import Hero from "../components/hero"
import Services from "../components/services"
import Approach from "../components/approach"
import Testimonials from "../components/testimonials"
import CaseStudies from "../components/case-studies"
import Contact from "../components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <Approach />
      <Testimonials />
      <CaseStudies />
      <Contact />
    </main>
  )
}

