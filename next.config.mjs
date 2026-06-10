import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixa a raiz do workspace nesta pasta — evita que o Turbopack escolha
  // o package-lock.json de C:\Users\User e procure node_modules no lugar errado.
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
