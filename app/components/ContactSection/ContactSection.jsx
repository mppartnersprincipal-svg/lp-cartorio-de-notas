import {
  FaMapMarkerAlt, FaPhone, FaWhatsapp,
  FaEnvelope, FaClock,
} from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

export default function ContactSection() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de atendimento no 5º Tabelionato de Notas de Goiânia.')}`

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FaMapMarkerAlt />
            Onde estamos
          </div>
          <h2 className="section-title">Venha nos <span>visitar</span></h2>
          <p className="section-subtitle">
            Estamos no coração do Setor Sul de Goiânia, com fácil acesso e bom estacionamento.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-items">
            <div className="contact-item">
              <div className="c-icon"><FaMapMarkerAlt /></div>
              <div className="c-info">
                <strong>Endereço</strong>
                <p>R. 115, 1498 — Setor Sul<br />Goiânia — GO, CEP 74085-325</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon"><FaPhone /></div>
              <div className="c-info">
                <strong>Telefones</strong>
                <p>
                  <a href={CONTACT.phone1Href}>{CONTACT.phone1}</a><br />
                  <a href={CONTACT.phone2Href}>{CONTACT.phone2}</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon"><FaWhatsapp /></div>
              <div className="c-info">
                <strong>WhatsApp</strong>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Clique para iniciar conversa
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon"><FaEnvelope /></div>
              <div className="c-info">
                <strong>E-mail</strong>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="c-icon"><FaClock /></div>
              <div className="c-info">
                <strong>Horário de Funcionamento</strong>
                <p>
                  Segunda a Sexta — 8h às 17h<br />
                  <span style={{ fontSize: '0.82rem', color: 'var(--gray-mid)' }}>
                    Sábados, domingos e feriados: fechado
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://maps.google.com/maps?q=Rua+115,+1498,+Setor+Sul,+Goiânia,+GO&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do 5º Tabelionato de Notas de Goiânia"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
