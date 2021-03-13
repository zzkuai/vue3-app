export const getBlock = (type, blocks) => {
  return blocks.find((block) => {
    return block.showType === type
  })
}

export const getSolidBlock = (type, blocks) => {
  const { uiElement = {}, creatives = [] } = getBlock(type, blocks) || {}
  const { button = {}, mainTitle = {}, subTitle = {} } = uiElement
  return {
    list: creatives.map((item) => {
      const { creativeId, uiElement, resources } = item
      const { mainTitle, image } = uiElement
      const [resource] = resources
      return {
        id: creativeId,
        name: mainTitle.title,
        image: image.imageUrl,
        info: resource.resourceExtInfo,
      }
    }),
    button: button.text,
    subTitle: subTitle.title,
    mainTitle: mainTitle.title,
  }
}

export const openPage = (url) => {
  if (!url) return
  location.href = url
}
