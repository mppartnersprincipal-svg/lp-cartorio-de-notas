import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'
import CredibilityBar from '@/components/CredibilityBar/CredibilityBar'
import AboutSection from '@/components/AboutSection/AboutSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import DifferentialsSection from '@/components/DifferentialsSection/DifferentialsSection'
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection'
import CTABanner from '@/components/CTABanner/CTABanner'
import ContactSection from '@/components/ContactSection/ContactSection'
import Footer from '@/components/Footer/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CredibilityBar />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
