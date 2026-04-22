import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: '5º Tabelionato de Notas de Goiânia | Cartório Oficial',
  description:
    'O 5º Tabelionato de Notas de Goiânia oferece escrituras, procurações, autenticações e muito mais. 73 anos de tradição, segurança jurídica e atendimento pelo WhatsApp.',
  keywords:
    'tabelionato, cartório, notas, goiânia, escritura, procuração, autenticação, reconhecimento de firma, inventário, divórcio',
  openGraph: {
    title: '5º Tabelionato de Notas de Goiânia',
    description:
      '73 anos de tradição em serviços notariais. Escrituras, procurações, autenticações e muito mais.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
