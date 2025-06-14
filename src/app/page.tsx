import Hero from "../components/hero"
// import PromoBanner from "../components/promo-banner"
import CloudFacts from "../components/cloud-facts"
import Services from "../components/services"
import Solutions from "../components/solutions"
import Certifications from "../components/certifications"
import Contact from "../components/contact"
import ServiceCard from "../components/ServiceCard"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <PromoBanner /> */}
      <CloudFacts />
      <Services />
      {/* <Solutions /> */}
      <Certifications />
      <Contact />
    </main>
  )
}

