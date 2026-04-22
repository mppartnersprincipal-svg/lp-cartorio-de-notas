import { CONTACT } from '@/data/siteData'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div>
              <span className="logo-num">5º</span>
              <span className="logo-name"> Tabelionato de Notas de Goiânia</span>
            </div>
            <p>
              Há mais de 73 anos prestando serviços notariais com excelência, segurança jurídica e fé pública em Goiânia e para todo o Brasil.
            </p>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#services">Escrituras</a></li>
              <li><a href="#services">Procurações</a></li>
              <li><a href="#services">Reconhecimento de Firma</a></li>
              <li><a href="#services">Autenticação</a></li>
              <li><a href="#services">Testamentos</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li><a href={CONTACT.phone1Href}>{CONTACT.phone1}</a></li>
              <li><a href={CONTACT.phone2Href}>{CONTACT.phone2}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 5º Tabelionato de Notas de Goiânia. Todos os direitos reservados.</p>
          <p>R. 115, 1498 — Setor Sul, Goiânia — GO | Seg–Sex: 8h–17h</p>
        </div>
      </div>
    </footer>
  )
}
