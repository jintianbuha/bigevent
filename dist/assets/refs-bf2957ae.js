import { aA as c } from './main-b3449a42.js'
const e =
  (...a) =>
  (s) => {
    a.forEach((o) => {
      c(o) ? o(s) : (o.value = s)
    })
  }
export { e as c }
