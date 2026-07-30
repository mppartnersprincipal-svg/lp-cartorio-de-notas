import { FaEnvelope, FaBriefcase, FaPaperclip } from 'react-icons/fa'
import { CAREERS } from '@/data/siteData'

export default function CareersSection() {
  const mailtoHref = `mailto:${CAREERS.email}?subject=${encodeURIComponent(CAREERS.emailSubject)}&body=${encodeURIComponent(CAREERS.emailBody)}`

  return (
    <section id="careers">
      <div className="container">
        <div className="careers-inner">
          <div className="section-badge">
            <FaBriefcase />
            Trabalhe Conosco
          </div>
          <h2 className="section-title">
            Faça parte da nossa <span>equipe</span>
          </h2>
          <p className="section-subtitle">
            Buscamos profissionais comprometidos com a excelência no atendimento e a segurança jurídica. Envie seu currículo e venha construir sua carreira no 5º Tabelionato de Notas de Goiânia.
          </p>
          <a href={mailtoHref} className="btn btn-primary btn-lg">
            <FaEnvelope /> Enviar currículo por e-mail
          </a>
          <p className="careers-note">
            <FaPaperclip /> Envie seu currículo em PDF para <strong>{CAREERS.email}</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
