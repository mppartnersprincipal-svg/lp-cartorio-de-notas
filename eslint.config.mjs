// ESLint 9 (flat config). O "next lint" foi removido no Next 16.
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextVitals,
  { ignores: ['.next/**', 'node_modules/**', 'index.html'] },
]

export default eslintConfig
