'use client'
import {
  FaWhatsapp, FaUserTie, FaLaptopCode,
  FaCalendarCheck, FaParking, FaGlobeAmericas, FaStar,
} from 'react-icons/fa'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { DIFFERENTIALS } from '@/data/siteData'

const ICONS = {
  whatsapp: <FaWhatsapp />,
  userTie: <FaUserTie />,
  laptopCode: <FaLaptopCode />,
  calendarCheck: <FaCalendarCheck />,
  parking: <FaParking />,
  globeAmericas: <FaGlobeAmericas />,
}

function DiffCard({ item }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className="diff-card fade-up">
      <div className="diff-icon">{ICONS[item.icon]}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

export default function DifferentialsSection() {
  return (
    <section id="differentials">
      <div className="container">
        <div className="section-header centered">
          <div className="section-badge">
            <FaStar />
            Por que nos escolher
          </div>
          <h2 className="section-title">
            Diferenciais que fazem<br /><span>toda a diferença</span>
          </h2>
          <p className="section-subtitle">
            Modernidade e tradição juntas para oferecer a melhor experiência em serviços notariais de Goiânia.
          </p>
        </div>

        <div className="diff-grid">
          {DIFFERENTIALS.map(item => (
            <DiffCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
