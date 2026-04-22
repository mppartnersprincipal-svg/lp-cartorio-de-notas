'use client'
import { useState } from 'react'
import {
  FaHome, FaFileAlt, FaStamp, FaStar,
  FaFileSignature, FaCheck, FaInfoCircle, FaWhatsapp,
} from 'react-icons/fa'
import { SERVICES, CONTACT } from '@/data/siteData'

const TAB_ICONS = {
  home: <FaHome />,
  fileAlt: <FaFileAlt />,
  stamp: <FaStamp />,
  star: <FaStar />,
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id)
  const activeService = SERVICES.find(s => s.id === activeTab)

  return (
    <section id="services">
      <div className="container">
        <div className="section-header centered">
          <div className="section-badge">
            <FaFileSignature />
            Nossos Serviços
          </div>
          <h2 className="section-title">
            Tudo o que você precisa<br /><span>em um só lugar</span>
          </h2>
          <p className="section-subtitle">
            Oferecemos uma ampla gama de serviços notariais para atender todas as suas necessidades jurídicas, com segurança e agilidade.
          </p>
        </div>

        <div className="tabs-nav" role="tablist">
          {SERVICES.map(service => (
            <button
              key={service.id}
              className={`tab-btn${activeTab === service.id ? ' active' : ''}`}
              role="tab"
              aria-selected={activeTab === service.id}
              onClick={() => setActiveTab(service.id)}
            >
              {TAB_ICONS[service.icon]}
              {service.label}
            </button>
          ))}
        </div>

        {SERVICES.map(service => (
          <div
            key={service.id}
            className={`tab-panel${activeTab === service.id ? ' active' : ''}`}
            role="tabpanel"
          >
            <div className="services-panel-inner">
              <div className="services-panel-header">
                <div className="services-panel-title">
                  <div className="panel-icon">{TAB_ICONS[service.icon]}</div>
                  <div>
                    <h3>{service.panelTitle}</h3>
                    <p>{service.panelDesc}</p>
                  </div>
                </div>
              </div>

              <div className="services-list">
                {service.items.map(item => (
                  <div key={item} className="service-item">
                    <FaCheck />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="services-panel-footer">
                <p>
                  <FaInfoCircle />
                  {service.footerNote}
                </p>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(service.whatsappText)}`}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> Solicitar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
