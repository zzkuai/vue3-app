const env = import.meta.env.VITE_ENV

const isDev = env === 'dev'
const isProd = env === 'prod'

export { isDev, isProd }
