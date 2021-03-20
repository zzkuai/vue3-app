export const getBlock = (type, blocks) => {
  return blocks.find((block) => {
    return block.showType === type
  })
}

export const getSolidBlock = (type, blocks) => {
  const { uiElement = {}, creatives = [] } = getBlock(type, blocks) || {}
  const { button = {}, mainTitle = {}, subTitle = {} } = uiElement
  return {
    creatives,
    button: button.text,
    subTitle: subTitle.title,
    mainTitle: mainTitle.title,
  }
}

export const openPage = (url) => {
  if (!url) return
  location.href = url
}
