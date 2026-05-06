import { FaBalanceScale, FaShieldAlt, FaLaptop, FaMapMarkerAlt, FaGraduationCap, FaAward } from 'react-icons/fa'

const TRAJECTORY = [
  { Icon: FaGraduationCap, title: 'Bacharel em Direito',             institution: 'PUC Rio de Janeiro',              year: '1961', award: false },
  { Icon: FaGraduationCap, title: 'Especialista em Direito Civil',    institution: 'UFG',                             year: '1970', award: false },
  { Icon: FaGraduationCap, title: 'Especialista em Direito Agrário',  institution: 'UFG',                             year: null,   award: false },
  { Icon: FaGraduationCap, title: 'Mestre em Direito Agrário',        institution: 'UFG',                             year: null,   award: false },
  { Icon: FaGraduationCap, title: 'Doutor em Direito Constitucional', institution: 'USP',                             year: null,   award: false },
  { Icon: FaAward,         title: 'Benemérito da Justiça',            institution: 'Cartório do Ofício',              year: '1955', award: true  },
  { Icon: FaGraduationCap, title: 'Pós-Doutor',                       institution: 'Universidade de Princeton (EUA)', year: '1986', award: false },
]

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">

          <div>
            <div className="section-badge">
              <FaBalanceScale />
              Quem somos
            </div>
            <h2 className="section-title">
              Fé pública a serviço de<br /><span>quem mais precisa</span>
            </h2>
            <p style={{ color: 'var(--gray-mid)', fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '8px' }}>
              Fundado há mais de sete décadas, o 5º Tabelionato de Notas de Goiânia é referência em serviços notariais na capital goiana. Nosso compromisso é oferecer segurança jurídica, legalidade e fé pública em cada ato praticado.
            </p>
            <p style={{ color: 'var(--gray-mid)', fontSize: '0.97rem', lineHeight: 1.75 }}>
              Atendemos pessoas físicas, advogados, imobiliárias, empresas e estrangeiros — com a mesma dedicação e profissionalismo que nos acompanha há décadas.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feat-icon"><FaShieldAlt /></div>
                <div className="feat-text">
                  <strong>Segurança Jurídica</strong>
                  <p>Todos os atos praticados com rigor legal e plena validade em todo o território nacional.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feat-icon"><FaLaptop /></div>
                <div className="feat-text">
                  <strong>Cartório Digital</strong>
                  <p>Modernidade e praticidade: utilize nossos serviços de forma remota, com total segurança.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feat-icon"><FaMapMarkerAlt /></div>
                <div className="feat-text">
                  <strong>Atendimento Nacional</strong>
                  <p>Embora localizados em Goiânia, nossos serviços atendem demandas de todo o Brasil.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-aside">
            <div className="about-quote">&ldquo;</div>
            <p className="about-quote-text">
              Nossa missão é oferecer serviços notariais pautados na legalidade, na segurança jurídica e na fé pública — servindo à sociedade com excelência e respeito a cada cliente.
            </p>
            <div className="about-author">
              <div className="author-avatar">JO</div>
              <div className="author-info">
                <strong>Joveny Sebastião Candido de Oliveira</strong>
                <span>Tabelião — 5º Tabelionato de Notas de Goiânia</span>
              </div>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <strong>+73</strong>
                <span>anos de tradição</span>
              </div>
              <div className="about-stat">
                <strong>100%</strong>
                <span>comprometimento legal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Trajetória */}
        <div className="about-trajectory">
          <div className="trajectory-header">
            <div className="section-badge">
              <FaGraduationCap />
              Formação &amp; Trajetória
            </div>
            <h3 className="trajectory-title">
              Dr. Joveny Sebastião Candido de Oliveira
            </h3>
          </div>

          <div className="trajectory-grid">
            {TRAJECTORY.map(({ Icon, title, institution, year, award }, i) => (
              <div key={i} className={`trajectory-card${award ? ' trajectory-card--award' : ''}`}>
                <div className="traj-icon">
                  <Icon />
                </div>
                <div className="traj-content">
                  <strong>{title}</strong>
                  <span>{institution}</span>
                  {year && <span className="traj-year">{year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
