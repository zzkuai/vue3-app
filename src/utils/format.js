export const formatCount = (count) => {
  if (count > 10 * 10000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}
