import Navbar from '@/components/Navbar/Navbar'
import HeroSection from '@/components/HeroSection/HeroSection'
import CredibilityBar from '@/components/CredibilityBar/CredibilityBar'
import AboutSection from '@/components/AboutSection/AboutSection'
import ProcessSection from '@/components/ProcessSection/ProcessSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import DifferentialsSection from '@/components/DifferentialsSection/DifferentialsSection'
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection'
import FAQSection from '@/components/FAQSection/FAQSection'
import CTABanner from '@/components/CTABanner/CTABanner'
import ContactSection from '@/components/ContactSection/ContactSection'
import Footer from '@/components/Footer/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CredibilityBar />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
