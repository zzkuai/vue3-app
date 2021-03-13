import { Button, Swipe, SwipeItem, Toast } from 'vant'

export default function (app) {
  ;[Button, Swipe, SwipeItem, Toast].forEach((el) => {
    app.use(el)
  })
}
