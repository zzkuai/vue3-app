const env = import.meta.env.VITE_ENV
const musicUrl = import.meta.env.VITE_MUSIC_API_BASE_URL

const isDev = env === 'dev'
const isProd = env === 'prod'

export { isDev, isProd, musicUrl }
