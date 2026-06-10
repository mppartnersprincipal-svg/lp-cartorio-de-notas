import Image from 'next/image'

/**
 * Logo horizontal "por extenso": ícone da árvore + nome.
 * theme="dark"  → texto escuro (sobre fundo claro, ex.: header branca)
 * theme="light" → texto claro  (sobre fundo escuro, ex.: rodapé)
 */
export default function Logo({ theme = 'dark', href = '#hero', priority = false }) {
  return (
    <a
      href={href}
      className={`brand-logo brand-logo--${theme}`}
      aria-label="5º Tabelionato de Notas de Goiânia — ir para o início"
    >
      <span className="brand-logo-icon">
        <Image
          src="/logo-tree.png"
          alt=""
          fill
          sizes="58px"
          style={{ objectFit: 'contain' }}
          priority={priority}
        />
      </span>
      <span className="brand-logo-text">
        <span className="brand-logo-line1">5º Tabelionato</span>
        <span className="brand-logo-line2">de Notas</span>
      </span>
    </a>
  )
}
