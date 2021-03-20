// 播放数量格式转换
const TEN_THOUSAND = 10000
export const formatCount = (count) => {
  if (count > TEN_THOUSAND * TEN_THOUSAND) {
    return Math.floor(count / TEN_THOUSAND / TEN_THOUSAND) + '亿'
  } else if (count > TEN_THOUSAND) {
    return Math.floor(count / TEN_THOUSAND) + '万'
  } else {
    return count
  }
}
