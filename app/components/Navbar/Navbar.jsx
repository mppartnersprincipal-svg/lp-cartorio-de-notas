'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

const NAV_LINKS = [
  { href: '#services',      label: 'Serviços' },
  { href: '#about',         label: 'Sobre' },
  { href: '#differentials', label: 'Diferenciais' },
  { href: '#testimonials',  label: 'Depoimentos' },
  { href: '#contact',       label: 'Contato' },
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
      { threshold: 0.35, rootMargin: '-72px 0px -40% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo" aria-label="Ir para o início">
              <Image
                src="/logo.jpeg"
                alt="5º Tabelionato de Notas de Goiânia"
                width={165}
                height={66}
                style={{ objectFit: 'contain' }}
                priority
              />
            </a>

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
