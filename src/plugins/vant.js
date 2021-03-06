import { Button, Swipe, SwipeItem } from 'vant'

export default function (app) {
  ;[Button, Swipe, SwipeItem].forEach((el) => {
    app.use(el)
  })
}
