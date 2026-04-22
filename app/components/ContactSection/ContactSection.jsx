import {
  FaMapMarkerAlt, FaPhone, FaWhatsapp,
  FaEnvelope, FaClock, FaMapMarkedAlt,
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
          <div>
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
          </div>

          <div>
            <div className="contact-map">
              <div className="map-placeholder">
                <FaMapMarkedAlt />
                <p>
                  <strong style={{ color: 'var(--black)', display: 'block', marginBottom: '6px' }}>
                    R. 115, 1498 — Setor Sul, Goiânia - GO
                  </strong>
                  Clique abaixo para ver a localização no Google Maps e traçar sua rota com facilidade.
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: '12px' }}
                >
                  <FaMapMarkerAlt /> Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
