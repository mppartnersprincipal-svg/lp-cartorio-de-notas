import { FaLandmark, FaMobileAlt, FaUsers } from 'react-icons/fa'

export default function CredibilityBar() {
  return (
    <section id="credibility">
      <div className="container">
        <div className="credibility-grid">
          <div className="credibility-item">
            <FaLandmark />
            <strong>73 Anos</strong>
            <span>de experiência e tradição</span>
          </div>
          <div className="credibility-item">
            <FaMobileAlt />
            <strong>Digital</strong>
            <span>atendimento moderno via WhatsApp</span>
          </div>
          <div className="credibility-item">
            <FaUsers />
            <strong>Especializado</strong>
            <span>equipe treinada e dedicada</span>
          </div>
        </div>
      </div>
    </section>
  )
}
