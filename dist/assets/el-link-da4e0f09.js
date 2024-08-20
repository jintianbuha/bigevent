import {
  m,
  s as y,
  v as u,
  x as h,
  y as v,
  o as a,
  B as i,
  c as r,
  b,
  D as C,
  e as o,
  F as E,
  a2 as t,
  H as c,
  G as d,
  _,
  I as B
} from './main-b3449a42.js'
const g = m({
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
      default: 'default'
    },
    underline: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    href: { type: String, default: '' },
    icon: { type: y }
  }),
  w = { click: (l) => l instanceof MouseEvent },
  L = ['href'],
  $ = u({ name: 'ElLink' }),
  I = u({
    ...$,
    props: g,
    emits: w,
    setup(l, { emit: p }) {
      const s = l,
        n = h('link'),
        f = v(() => [
          n.b(),
          n.m(s.type),
          n.is('disabled', s.disabled),
          n.is('underline', s.underline && !s.disabled)
        ])
      function k(e) {
        s.disabled || p('click', e)
      }
      return (e, S) => (
        a(),
        i(
          'a',
          {
            class: c(o(f)),
            href: e.disabled || !e.href ? void 0 : e.href,
            onClick: k
          },
          [
            e.icon
              ? (a(),
                r(
                  o(E),
                  { key: 0 },
                  { default: b(() => [(a(), r(C(e.icon)))]), _: 1 }
                ))
              : t('v-if', !0),
            e.$slots.default
              ? (a(),
                i(
                  'span',
                  { key: 1, class: c(o(n).e('inner')) },
                  [d(e.$slots, 'default')],
                  2
                ))
              : t('v-if', !0),
            e.$slots.icon ? d(e.$slots, 'icon', { key: 2 }) : t('v-if', !0)
          ],
          10,
          L
        )
      )
    }
  })
var P = _(I, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue'
  ]
])
const N = B(P)
export { N as E }
