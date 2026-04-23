'use client'
import { useState } from 'react'
import { FaQuestionCircle, FaChevronDown, FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/data/siteData'

const FAQS = [
  {
    q: 'Preciso de agendamento para ser atendido?',
    a: 'Recomendamos o agendamento prévio via WhatsApp para garantir um atendimento rápido e personalizado, sem filas. Também atendemos presencialmente conforme disponibilidade no dia.',
  },
  {
    q: 'Quais documentos preciso levar para uma escritura?',
    a: 'Em geral, são necessários RG, CPF, comprovante de estado civil e os documentos específicos do ato (como a matrícula do imóvel, para escrituras imobiliárias). Nossa equipe orienta você com antecedência pelo WhatsApp.',
  },
  {
    q: 'Posso resolver tudo pelo WhatsApp?',
    a: 'Boa parte do processo pode ser iniciada digitalmente: envio de documentos, orientações, orçamentos e agendamentos. A assinatura final de alguns atos requer presença física no cartório, mas facilitamos ao máximo o que pode ser feito remotamente.',
  },
  {
    q: 'Como é calculado o valor dos serviços?',
    a: 'Os emolumentos (taxas) são tabelados pelo Estado de Goiás e publicados pelo Tribunal de Justiça de Goiás (TJGO), sendo iguais em todos os cartórios do estado. Podemos gerar um orçamento específico para o seu caso — basta entrar em contato.',
  },
  {
    q: 'Vocês atendem clientes de outros estados?',
    a: 'Sim! Atendemos clientes de todo o Brasil. Muitos serviços podem ser realizados de forma remota, como procurações, escrituras e outros atos. Fale conosco para verificar as possibilidades do seu caso específico.',
  },
  {
    q: 'O que é o reconhecimento de firma?',
    a: 'É a certificação pelo tabelião de que uma assinatura aposta em um documento é autêntica. Existem dois tipos: por semelhança (comparando com a assinatura arquivada no cartório) e em aberto (o signatário assina na presença do tabelião ou escrevente autorizado).',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <FaChevronDown className="faq-chevron" aria-hidden="true" />
      </button>
      <div className="faq-answer" aria-hidden={!isOpen}>
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os serviços do 5º Tabelionato de Notas de Goiânia.')}`

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-inner">
          <div className="section-header">
            <div className="section-badge">
              <FaQuestionCircle />
              Dúvidas Frequentes
            </div>
            <h2 className="section-title">
              Perguntas que nossos<br /><span>clientes fazem</span>
            </h2>
            <p className="section-subtitle">
              Respondemos as principais dúvidas sobre nossos serviços. Não encontrou o que procura? Fale diretamente conosco.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="faq-footer">
            <p>Ainda tem dúvidas? Nossa equipe responde rapidamente.</p>
            <a
              href={whatsappHref}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Perguntar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
