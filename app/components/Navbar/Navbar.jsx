'use client'
import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo" aria-label="Ir para o início">
              <span className="logo-num">5º</span>
              <span className="logo-name">Tabelionato de Notas</span>
              <span className="logo-sub">Goiânia — GO</span>
            </a>

            <div className="nav-links">
              <a href="#services">Serviços</a>
              <a href="#about">Sobre</a>
              <a href="#differentials">Diferenciais</a>
              <a href="#testimonials">Depoimentos</a>
              <a href="#contact">Contato</a>
            </div>

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
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <a href="#services" onClick={closeMenu}>Serviços</a>
        <a href="#about" onClick={closeMenu}>Sobre</a>
        <a href="#differentials" onClick={closeMenu}>Diferenciais</a>
        <a href="#testimonials" onClick={closeMenu}>Depoimentos</a>
        <a href="#contact" onClick={closeMenu}>Contato</a>
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
