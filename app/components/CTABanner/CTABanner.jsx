import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

export default function CTABanner() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de iniciar um atendimento no 5º Tabelionato de Notas de Goiânia.')}`

  return (
    <section id="cta-banner">
      <div className="container">
        <div className="cta-banner-inner">
          <div className="section-badge">
            <FaWhatsapp />
            Atendimento Imediato
          </div>
          <h2 className="section-title" style={{ color: 'var(--white)', maxWidth: '680px', margin: '0 auto 16px' }}>
            Precisou de cartório?<br />A solução está no WhatsApp
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', margin: '0 auto 40px' }}>
            Nossa equipe está pronta para te atender, orientar sobre a documentação necessária e agendar seu horário de forma rápida e descomplicada.
          </p>
          <div className="cta-actions">
            <a
              href={whatsappHref}
              className="btn btn-whatsapp btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Iniciar atendimento pelo WhatsApp
            </a>
            <a href={CONTACT.phone1Href} className="btn btn-outline-white btn-lg">
              <FaPhone /> {CONTACT.phone1}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
