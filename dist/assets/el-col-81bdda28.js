import {
  m as g,
  v as p,
  x as _,
  y as o,
  N as R,
  o as h,
  c as w,
  b as $,
  G as v,
  H as N,
  e as c,
  C as j,
  D as C,
  _ as x,
  I as E,
  t as u,
  ah as r,
  O as S,
  q as b,
  ai as k
} from './main-b3449a42.js'
const O = Symbol('rowContextKey'),
  K = [
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly'
  ],
  P = ['top', 'middle', 'bottom'],
  B = g({
    tag: { type: String, default: 'div' },
    gutter: { type: Number, default: 0 },
    justify: { type: String, values: K, default: 'start' },
    align: { type: String, values: P, default: 'top' }
  }),
  D = p({ name: 'ElRow' }),
  I = p({
    ...D,
    props: B,
    setup(f) {
      const t = f,
        l = _('row'),
        a = o(() => t.gutter)
      R(O, { gutter: a })
      const i = o(() => {
          const e = {}
          return (
            t.gutter && (e.marginRight = e.marginLeft = `-${t.gutter / 2}px`), e
          )
        }),
        m = o(() => [
          l.b(),
          l.is(`justify-${t.justify}`, t.justify !== 'start'),
          l.is(`align-${t.align}`, t.align !== 'top')
        ])
      return (e, d) => (
        h(),
        w(
          C(e.tag),
          { class: N(c(m)), style: j(c(i)) },
          { default: $(() => [v(e.$slots, 'default')]), _: 3 },
          8,
          ['class', 'style']
        )
      )
    }
  })
var L = x(I, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue'
  ]
])
const F = E(L),
  q = g({
    tag: { type: String, default: 'div' },
    span: { type: Number, default: 24 },
    offset: { type: Number, default: 0 },
    pull: { type: Number, default: 0 },
    push: { type: Number, default: 0 },
    xs: { type: u([Number, Object]), default: () => r({}) },
    sm: { type: u([Number, Object]), default: () => r({}) },
    md: { type: u([Number, Object]), default: () => r({}) },
    lg: { type: u([Number, Object]), default: () => r({}) },
    xl: { type: u([Number, Object]), default: () => r({}) }
  }),
  A = p({ name: 'ElCol' }),
  G = p({
    ...A,
    props: q,
    setup(f) {
      const t = f,
        { gutter: l } = S(O, { gutter: o(() => 0) }),
        a = _('col'),
        i = o(() => {
          const e = {}
          return (
            l.value && (e.paddingLeft = e.paddingRight = `${l.value / 2}px`), e
          )
        }),
        m = o(() => {
          const e = []
          return (
            ['span', 'offset', 'pull', 'push'].forEach((s) => {
              const n = t[s]
              b(n) &&
                (s === 'span'
                  ? e.push(a.b(`${t[s]}`))
                  : n > 0 && e.push(a.b(`${s}-${t[s]}`)))
            }),
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach((s) => {
              b(t[s])
                ? e.push(a.b(`${s}-${t[s]}`))
                : k(t[s]) &&
                  Object.entries(t[s]).forEach(([n, y]) => {
                    e.push(
                      n !== 'span' ? a.b(`${s}-${n}-${y}`) : a.b(`${s}-${y}`)
                    )
                  })
            }),
            l.value && e.push(a.is('guttered')),
            [a.b(), e]
          )
        })
      return (e, d) => (
        h(),
        w(
          C(e.tag),
          { class: N(c(m)), style: j(c(i)) },
          { default: $(() => [v(e.$slots, 'default')]), _: 3 },
          8,
          ['class', 'style']
        )
      )
    }
  })
var H = x(G, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue'
  ]
])
const M = E(H)
export { F as E, M as a }
