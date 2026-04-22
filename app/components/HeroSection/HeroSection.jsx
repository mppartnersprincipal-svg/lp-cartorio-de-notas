import Image from 'next/image'
import { FaMedal, FaWhatsapp, FaArrowDown, FaCheckCircle, FaStar } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

export default function HeroSection() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-content">
            <div className="hero-badge">
              <FaMedal />
              73 anos de tradição em Goiânia
            </div>

            <h1 className="hero-title">
              Segurança jurídica que<br />
              <span>você pode confiar</span>
            </h1>

            <p className="hero-subtitle">
              O 5º Tabelionato de Notas de Goiânia oferece escrituras, procurações, autenticações e muito mais — com atendimento especializado, agilidade e a tecnologia de um cartório digital.
            </p>

            <div className="hero-actions">
              <a
                href={whatsappHref}
                className="btn btn-whatsapp btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Iniciar atendimento
              </a>
              <a href="#services" className="btn btn-outline btn-lg">
                Ver serviços <FaArrowDown />
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <FaCheckCircle />
                <span>Equipe especializada</span>
              </div>
              <div className="trust-item">
                <FaCheckCircle />
                <span>Atendimento digital</span>
              </div>
              <div className="trust-item">
                <FaCheckCircle />
                <span>Agendamento online</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              <Image
                src="/foto-01.webp"
                alt="5º Tabelionato de Notas de Goiânia"
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className="hero-image-badge">
              <div className="badge-icon">
                <FaStar />
              </div>
              <div className="badge-text">
                <strong>+73 anos</strong>
                <span>de experiência em Goiânia</span>
              </div>
            </div>
            <div className="hero-decor"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
