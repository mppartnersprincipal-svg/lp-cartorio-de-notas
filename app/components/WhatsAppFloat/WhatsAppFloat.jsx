import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

export default function WhatsAppFloat() {
  const href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`
  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
