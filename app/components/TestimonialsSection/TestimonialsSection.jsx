'use client'
import { useState, useEffect, useRef } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { TESTIMONIALS } from '@/data/siteData'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const total = TESTIMONIALS.length

  const goTo = (i) => setCurrent((i + total) % total)
  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const handleNav = (fn) => { fn(); resetTimer() }

  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-header centered">
          <div className="section-badge">
            <FaQuoteLeft />
            Depoimentos
          </div>
          <h2 className="section-title">
            O que nossos clientes<br /><span>têm a dizer</span>
          </h2>
          <p className="section-subtitle">
            A satisfação dos nossos clientes é o nosso maior reconhecimento. Veja o que dizem sobre a experiência no 5º Tabelionato.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="testimonials-grid testimonials-desktop">
          {TESTIMONIALS.map(t => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonials-slide">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          <div className="testimonials-controls">
            <button className="t-arrow" onClick={() => handleNav(prev)} aria-label="Anterior">
              <FaChevronLeft />
            </button>
            <div className="t-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`t-dot${current === i ? ' active' : ''}`}
                  onClick={() => handleNav(() => goTo(i))}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button className="t-arrow" onClick={() => handleNav(next)} aria-label="Próximo">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">&ldquo;</div>
      <div className="testimonial-stars">★★★★★</div>
      <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
      <div className="testimonial-author">
        <div className="t-avatar">{t.initials}</div>
        <div className="t-info">
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  )
}
