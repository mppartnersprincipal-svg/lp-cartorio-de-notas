'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaWhatsapp, FaClock, FaPhone } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

const NAV_LINKS = [
  { href: '#services',     label: 'Serviços' },
  { href: '#about',        label: 'Sobre nós' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact',      label: 'Contato' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.35, rootMargin: '-140px 0px -40% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>

        {/* BARRA SUPERIOR: fundo verde escuro — logo + info de contato */}
        <div className="header-top">
          <div className="container">
            <div className="header-top-inner">

              <a href="#hero" className="nav-logo" aria-label="Ir para o início">
                <Image
                  src="/logo.png"
                  alt="5º Tabelionato de Notas de Goiânia"
                  width={210}
                  height={84}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </a>

              <div className="header-top-info">
                <div className="header-info-item">
                  <FaClock />
                  <div className="header-info-text">
                    <strong>8:00 – 17:00</strong>
                    <span>Segunda – Sexta</span>
                  </div>
                </div>

                <span className="header-info-sep" />

                <div className="header-info-item">
                  <FaPhone />
                  <strong>{CONTACT.phone1}</strong>
                </div>

                <span className="header-info-sep" />

                <div className="header-info-item">
                  <FaWhatsapp />
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <strong>{CONTACT.phone2}</strong>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BARRA DE NAVEGAÇÃO: branca com links + CTA */}
        <div className="header-nav">
          <div className="container">
            <div className="nav-inner">

              <div className="nav-links">
                {NAV_LINKS.map(({ href, label }) => {
                  const id = href.replace('#', '')
                  return (
                    <a
                      key={href}
                      href={href}
                      className={activeSection === id ? 'active' : ''}
                    >
                      {label}
                    </a>
                  )
                })}
              </div>

              <div className="nav-right">
                <a
                  href={whatsappHref}
                  className="btn btn-primary nav-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> Fale pelo WhatsApp
                </a>

                <button
                  className="hamburger"
                  aria-label="Abrir menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen(prev => !prev)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </nav>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a
          href={whatsappHref}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <FaWhatsapp /> Fale pelo WhatsApp
        </a>
      </div>
    </>
  )
}
