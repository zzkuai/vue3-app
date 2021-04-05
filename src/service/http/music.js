import 'whatwg-fetch'

const API_BASE_URL = import.meta.env.VITE_MUSIC_API_BASE_URL

async function http(url, options) {
  const res = await window.fetch(API_BASE_URL + url, options)

  if (res.status >= 200 && res.status < 300) {
    const { code, ...data } = await res.json()
    if (code === 200) return data
  } else {
    var error = new Error(res.statusText)
    error.res = res
    Promise.reject(error)
  }
}

export function httpGet(url, params) {
  let queryStr = ''
  if (params) {
    Object.keys(params).forEach((key, index) => {
      queryStr += `${index === 0 ? '?' : '&'}${key}=${params[key]}`
    })
  }

  return http(url + queryStr, {
    method: 'GET',
  })
}

export function httpPost(url, params) {
  return http(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })
}
