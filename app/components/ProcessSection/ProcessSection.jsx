import { FaWhatsapp, FaFileAlt, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

const STEPS = [
  {
    icon: <FaWhatsapp />,
    number: '01',
    title: 'Fale Conosco',
    description: 'Entre em contato pelo WhatsApp ou telefone. Nossa equipe te orienta sobre quais documentos você precisa e como proceder.',
  },
  {
    icon: <FaFileAlt />,
    number: '02',
    title: 'Envie os Documentos',
    description: 'Encaminhe os documentos digitalmente para análise prévia. Aprovamos e orientamos tudo antes de você vir ao cartório.',
  },
  {
    icon: <FaCalendarCheck />,
    number: '03',
    title: 'Agende seu Horário',
    description: 'Escolha o melhor dia e horário para comparecer. Sem filas e sem esperas desnecessárias — respeitamos o seu tempo.',
  },
  {
    icon: <FaCheckCircle />,
    number: '04',
    title: 'Assine e Pronto',
    description: 'Compareça no horário marcado, assine o ato e saia com seu documento em mãos, com total segurança jurídica.',
  },
]

export default function ProcessSection() {
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`

  return (
    <section id="process">
      <div className="container">
        <div className="section-header centered">
          <div className="section-badge">
            <FaCalendarCheck />
            Passo a Passo
          </div>
          <h2 className="section-title">
            Como funciona o<br /><span>atendimento</span>
          </h2>
          <p className="section-subtitle">
            Simplificamos ao máximo o processo para que você resolva tudo com praticidade e segurança jurídica.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((step, i) => (
            <div key={step.number} className="process-step">
              <div className="process-connector" aria-hidden="true" />
              <div className="process-icon-wrap">
                <span className="process-step-num">{step.number}</span>
                <div className="process-icon">{step.icon}</div>
              </div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

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
