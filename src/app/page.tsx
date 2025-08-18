import Hero from "../components/hero"
// import PromoBanner from "../components/promo-banner"
import CloudFacts from "../components/cloud-facts"
import Services from "../components/services"
import Certifications from "../components/certifications"
import Contact from "../components/contact"
import PricingPreview from "../components/PricingPreview"
import CaseStudies from "../components/case-studies"
import Testimonials from "../components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <PromoBanner /> */}
      <CloudFacts />
      <Services />
      <CaseStudies />
      <Testimonials />
      {/* <Solutions /> */}
      <Certifications />
      <PricingPreview />
      <Contact />
    </main>
  )
}

