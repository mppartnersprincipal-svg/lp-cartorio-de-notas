import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

export default function ProcessSection() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`

  return (
    <section id="process">
      <div className="container">
        <div className="process-cta">
          <a
            href={whatsappHref}
            className="btn btn-whatsapp btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Iniciar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
