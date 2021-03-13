/**
 * 首页接口
 */
import { httpGet } from '~src/service/fetch'

// 获取banner
export function getBanner(type = 1) {
  return httpGet('music-api/banner', { type })
}

// 获取首页信息
export function getHomeInfo() {
  return httpGet('music-api/homepage/block/page')
}

// 获取推荐入口
export function getEntry() {
  return httpGet('music-api/homepage/dragon/ball')
}
