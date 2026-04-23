'use client'
import { FaLandmark, FaMobileAlt, FaUsers } from 'react-icons/fa'
import { useCountUp } from '@/hooks/useCountUp'

function CountItem({ target, suffix = '', label, icon }) {
  const [value, ref] = useCountUp(target)
  return (
    <div className="credibility-item" ref={ref}>
      {icon}
      <strong>{value}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function CredibilityBar() {
  return (
    <section id="credibility">
      <div className="container">
        <div className="credibility-grid">
          <CountItem
            target={73}
            suffix="+"
            label="anos de experiência e tradição"
            icon={<FaLandmark />}
          />
          <CountItem
            target={100}
            suffix="%"
            label="atendimento digital e presencial"
            icon={<FaMobileAlt />}
          />
          <CountItem
            target={5}
            suffix="★"
            label="avaliação dos nossos clientes"
            icon={<FaUsers />}
          />
        </div>
      </div>
    </section>
  )
}
