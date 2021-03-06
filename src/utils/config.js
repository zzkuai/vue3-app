const env = import.meta.env.VITE_ENV

const isDev = env === 'dev'
const isStage = env === 'stage'
const isProd = env === 'prod'

export { isDev, isStage, isProd }
