import { FaQuoteLeft } from 'react-icons/fa'
import { TESTIMONIALS } from '@/data/siteData'

export default function TestimonialsSection() {
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

        <div className="testimonials-grid">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="testimonial-card">
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
          ))}
        </div>
      </div>
    </section>
  )
}
