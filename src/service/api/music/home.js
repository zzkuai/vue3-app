/**
 * 首页接口
 */
import { httpGet } from '~src/service/http/music'

// 获取banner
export function getBanner(type = 1) {
  return httpGet('/banner', { type })
}

// 获取首页信息
export function getHomeInfo() {
  return httpGet('/homepage/block/page')
}

// 获取推荐入口
export function getEntry() {
  return httpGet('/homepage/dragon/ball')
}
