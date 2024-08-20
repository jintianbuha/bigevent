import {
  m as u,
  t as f,
  v as i,
  x as m,
  o as n,
  B as c,
  H as o,
  e as s,
  G as r,
  f as h,
  al as p,
  a2 as y,
  g as t,
  C as v,
  _ as g,
  I as C,
  c as S,
  b as _
} from './main-b3449a42.js'
import { _ as w } from './_plugin-vue_export-helper-140fdfbe.js'
const $ = u({
    header: { type: String, default: '' },
    bodyStyle: { type: f([String, Object, Array]), default: '' },
    shadow: {
      type: String,
      values: ['always', 'hover', 'never'],
      default: 'always'
    }
  }),
  b = i({ name: 'ElCard' }),
  k = i({
    ...b,
    props: $,
    setup(l) {
      const a = m('card')
      return (e, d) => (
        n(),
        c(
          'div',
          { class: o([s(a).b(), s(a).is(`${e.shadow}-shadow`)]) },
          [
            e.$slots.header || e.header
              ? (n(),
                c(
                  'div',
                  { key: 0, class: o(s(a).e('header')) },
                  [r(e.$slots, 'header', {}, () => [h(p(e.header), 1)])],
                  2
                ))
              : y('v-if', !0),
            t(
              'div',
              { class: o(s(a).e('body')), style: v(e.bodyStyle) },
              [r(e.$slots, 'default')],
              6
            )
          ],
          2
        )
      )
    }
  })
var B = g(k, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue'
  ]
])
const P = C(B)
const N = { class: 'header' },
  E = { class: 'extra' },
  I = {
    __name: 'PageContainer',
    props: { title: { required: !0, type: String } },
    setup(l) {
      return (a, e) => {
        const d = P
        return (
          n(),
          S(
            d,
            { class: 'page-container' },
            {
              header: _(() => [
                t('div', N, [
                  t('span', null, p(l.title), 1),
                  t('div', E, [r(a.$slots, 'extra', {}, void 0, !0)])
                ])
              ]),
              default: _(() => [r(a.$slots, 'default', {}, void 0, !0)]),
              _: 3
            }
          )
        )
      }
    }
  },
  z = w(I, [['__scopeId', 'data-v-2f27c596']])
export { z as _ }
