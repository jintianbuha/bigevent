import {
  aC as ze,
  y as c,
  bA as Oe,
  a3 as De,
  r as N,
  q as xe,
  m as Ke,
  bi as je,
  t as J,
  s as we,
  ah as Ue,
  z as Q,
  v as ke,
  b_ as We,
  L as Ye,
  x as Se,
  az as ee,
  b$ as Xe,
  c0 as Ge,
  c1 as Ze,
  aj as qe,
  w as te,
  Z as P,
  P as Je,
  U as Qe,
  ad as et,
  ae as tt,
  o as p,
  B as x,
  a2 as v,
  a6 as ae,
  H as h,
  e as t,
  G as U,
  g as V,
  c as C,
  b as M,
  D as W,
  F as R,
  J as oe,
  d as at,
  aE as ot,
  a5 as nt,
  bB as st,
  al as Y,
  C as lt,
  _ as rt,
  ai as Ce,
  I as it
} from './main-b3449a42.js'
import {
  c as ut,
  f as ct,
  a as dt,
  e as pt,
  i as ft,
  d as Ie
} from './_plugin-vue_export-helper-140fdfbe.js'
const vt = () => ze && /firefox/i.test(window.navigator.userAgent),
  ne = 'update:modelValue',
  $t = 'change',
  mt = (o) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),
  ht = ['class', 'style'],
  yt = /^on[A-Z]/,
  bt = (o = {}) => {
    const { excludeListeners: m = !1, excludeKeys: l } = o,
      a = c(() => ((l == null ? void 0 : l.value) || []).concat(ht)),
      r = De()
    return r
      ? c(() => {
          var i
          return Oe(
            Object.entries((i = r.proxy) == null ? void 0 : i.$attrs).filter(
              ([u]) => !a.value.includes(u) && !(m && yt.test(u))
            )
          )
        })
      : c(() => ({}))
  }
function gt(o) {
  const m = N()
  function l() {
    if (o.value == null) return
    const { selectionStart: r, selectionEnd: i, value: u } = o.value
    if (r == null || i == null) return
    const w = u.slice(0, Math.max(0, r)),
      d = u.slice(Math.max(0, i))
    m.value = {
      selectionStart: r,
      selectionEnd: i,
      value: u,
      beforeTxt: w,
      afterTxt: d
    }
  }
  function a() {
    if (o.value == null || m.value == null) return
    const { value: r } = o.value,
      { beforeTxt: i, afterTxt: u, selectionStart: w } = m.value
    if (i == null || u == null || w == null) return
    let d = r.length
    if (r.endsWith(u)) d = r.length - u.length
    else if (r.startsWith(i)) d = i.length
    else {
      const y = i[w - 1],
        I = r.indexOf(y, w - 1)
      I !== -1 && (d = I + 1)
    }
    o.value.setSelectionRange(d, d)
  }
  return [l, a]
}
let b
const xt = `
  height:0 !important;
  visibility:hidden !important;
  ${vt() ? '' : 'overflow:hidden !important;'}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  wt = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
  ]
function St(o) {
  const m = window.getComputedStyle(o),
    l = m.getPropertyValue('box-sizing'),
    a =
      Number.parseFloat(m.getPropertyValue('padding-bottom')) +
      Number.parseFloat(m.getPropertyValue('padding-top')),
    r =
      Number.parseFloat(m.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(m.getPropertyValue('border-top-width'))
  return {
    contextStyle: wt.map((u) => `${u}:${m.getPropertyValue(u)}`).join(';'),
    paddingSize: a,
    borderSize: r,
    boxSizing: l
  }
}
function Ee(o, m = 1, l) {
  var a
  b || ((b = document.createElement('textarea')), document.body.appendChild(b))
  const { paddingSize: r, borderSize: i, boxSizing: u, contextStyle: w } = St(o)
  b.setAttribute('style', `${w};${xt}`),
    (b.value = o.value || o.placeholder || '')
  let d = b.scrollHeight
  const y = {}
  u === 'border-box' ? (d = d + i) : u === 'content-box' && (d = d - r),
    (b.value = '')
  const I = b.scrollHeight - r
  if (xe(m)) {
    let f = I * m
    u === 'border-box' && (f = f + r + i),
      (d = Math.max(f, d)),
      (y.minHeight = `${f}px`)
  }
  if (xe(l)) {
    let f = I * l
    u === 'border-box' && (f = f + r + i), (d = Math.min(f, d))
  }
  return (
    (y.height = `${d}px`),
    (a = b.parentNode) == null || a.removeChild(b),
    (b = void 0),
    y
  )
}
const Ct = Ke({
    id: { type: String, default: void 0 },
    size: je,
    disabled: Boolean,
    modelValue: { type: J([String, Number, Object]), default: '' },
    type: { type: String, default: 'text' },
    resize: {
      type: String,
      values: ['none', 'both', 'horizontal', 'vertical']
    },
    autosize: { type: J([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    suffixIcon: { type: we },
    prefixIcon: { type: we },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: J([Object, Array, String]), default: () => Ue({}) }
  }),
  It = {
    [ne]: (o) => Q(o),
    input: (o) => Q(o),
    change: (o) => Q(o),
    focus: (o) => o instanceof FocusEvent,
    blur: (o) => o instanceof FocusEvent,
    clear: () => !0,
    mouseleave: (o) => o instanceof MouseEvent,
    mouseenter: (o) => o instanceof MouseEvent,
    keydown: (o) => o instanceof Event,
    compositionstart: (o) => o instanceof CompositionEvent,
    compositionupdate: (o) => o instanceof CompositionEvent,
    compositionend: (o) => o instanceof CompositionEvent
  },
  Et = ['role'],
  zt = [
    'id',
    'type',
    'disabled',
    'formatter',
    'parser',
    'readonly',
    'autocomplete',
    'tabindex',
    'aria-label',
    'placeholder',
    'form'
  ],
  kt = [
    'id',
    'tabindex',
    'disabled',
    'readonly',
    'autocomplete',
    'aria-label',
    'placeholder',
    'form'
  ],
  Pt = ke({ name: 'ElInput', inheritAttrs: !1 }),
  Vt = ke({
    ...Pt,
    props: Ct,
    emits: It,
    setup(o, { expose: m, emit: l }) {
      const a = o,
        r = We(),
        i = Ye(),
        u = c(() => {
          const e = {}
          return (
            a.containerRole === 'combobox' &&
              ((e['aria-haspopup'] = r['aria-haspopup']),
              (e['aria-owns'] = r['aria-owns']),
              (e['aria-expanded'] = r['aria-expanded'])),
            e
          )
        }),
        w = c(() => [
          a.type === 'textarea' ? le.b() : n.b(),
          n.m(Pe.value),
          n.is('disabled', z.value),
          n.is('exceed', Fe.value),
          {
            [n.b('group')]: i.prepend || i.append,
            [n.bm('group', 'append')]: i.append,
            [n.bm('group', 'prepend')]: i.prepend,
            [n.m('prefix')]: i.prefix || a.prefixIcon,
            [n.m('suffix')]:
              i.suffix || a.suffixIcon || a.clearable || a.showPassword,
            [n.bm('suffix', 'password-clear')]: D.value && G.value
          },
          r.class
        ]),
        d = c(() => [n.e('wrapper'), n.is('focus', F.value)]),
        y = bt({ excludeKeys: c(() => Object.keys(u.value)) }),
        { form: I, formItem: f } = ut(),
        { inputId: se } = ct(a, { formItemContext: f }),
        Pe = dt(),
        z = pt(),
        n = Se('input'),
        le = Se('textarea'),
        H = ee(),
        S = ee(),
        F = N(!1),
        X = N(!1),
        T = N(!1),
        L = N(!1),
        re = N(),
        O = ee(a.inputStyle),
        _ = c(() => H.value || S.value),
        ie = c(() => {
          var e
          return (e = I == null ? void 0 : I.statusIcon) != null ? e : !1
        }),
        $ = c(() => (f == null ? void 0 : f.validateState) || ''),
        ue = c(() => $.value && Xe[$.value]),
        Ve = c(() => (L.value ? Ge : Ze)),
        Ne = c(() => [r.style, a.inputStyle]),
        ce = c(() => [a.inputStyle, O.value, { resize: a.resize }]),
        E = c(() => (ft(a.modelValue) ? '' : String(a.modelValue))),
        D = c(
          () =>
            a.clearable &&
            !z.value &&
            !a.readonly &&
            !!E.value &&
            (F.value || X.value)
        ),
        G = c(
          () =>
            a.showPassword &&
            !z.value &&
            !a.readonly &&
            !!E.value &&
            (!!E.value || F.value)
        ),
        k = c(
          () =>
            a.showWordLimit &&
            !!y.value.maxlength &&
            (a.type === 'text' || a.type === 'textarea') &&
            !z.value &&
            !a.readonly &&
            !a.showPassword
        ),
        Z = c(() => E.value.length),
        Fe = c(() => !!k.value && Z.value > Number(y.value.maxlength)),
        Te = c(
          () =>
            !!i.suffix ||
            !!a.suffixIcon ||
            D.value ||
            a.showPassword ||
            k.value ||
            (!!$.value && ie.value)
        ),
        [_e, $e] = gt(H)
      qe(S, (e) => {
        if ((Be(), !k.value || a.resize !== 'both')) return
        const s = e[0],
          { width: g } = s.contentRect
        re.value = { right: `calc(100% - ${g + 15 + 6}px)` }
      })
      const B = () => {
          const { type: e, autosize: s } = a
          if (!(!ze || e !== 'textarea' || !S.value))
            if (s) {
              const g = Ce(s) ? s.minRows : void 0,
                j = Ce(s) ? s.maxRows : void 0,
                ge = Ee(S.value, g, j)
              ;(O.value = { overflowY: 'hidden', ...ge }),
                P(() => {
                  S.value.offsetHeight, (O.value = ge)
                })
            } else O.value = { minHeight: Ee(S.value).minHeight }
        },
        Be = ((e) => {
          let s = !1
          return () => {
            var g
            if (s || !a.autosize) return
            ;((g = S.value) == null ? void 0 : g.offsetParent) === null ||
              (e(), (s = !0))
          }
        })(B),
        A = () => {
          const e = _.value,
            s = a.formatter ? a.formatter(E.value) : E.value
          !e || e.value === s || (e.value = s)
        },
        q = async (e) => {
          _e()
          let { value: s } = e.target
          if ((a.formatter && (s = a.parser ? a.parser(s) : s), !T.value)) {
            if (s === E.value) {
              A()
              return
            }
            l(ne, s), l('input', s), await P(), A(), $e()
          }
        },
        de = (e) => {
          l('change', e.target.value)
        },
        pe = (e) => {
          l('compositionstart', e), (T.value = !0)
        },
        fe = (e) => {
          var s
          l('compositionupdate', e)
          const g = (s = e.target) == null ? void 0 : s.value,
            j = g[g.length - 1] || ''
          T.value = !mt(j)
        },
        ve = (e) => {
          l('compositionend', e), T.value && ((T.value = !1), q(e))
        },
        Ae = () => {
          ;(L.value = !L.value), K()
        },
        K = async () => {
          var e
          await P(), (e = _.value) == null || e.focus()
        },
        Me = () => {
          var e
          return (e = _.value) == null ? void 0 : e.blur()
        },
        me = (e) => {
          ;(F.value = !0), l('focus', e)
        },
        he = (e) => {
          var s
          ;(F.value = !1),
            l('blur', e),
            a.validateEvent &&
              ((s = f == null ? void 0 : f.validate) == null ||
                s.call(f, 'blur').catch((g) => Ie()))
        },
        Re = (e) => {
          ;(X.value = !1), l('mouseleave', e)
        },
        He = (e) => {
          ;(X.value = !0), l('mouseenter', e)
        },
        ye = (e) => {
          l('keydown', e)
        },
        Le = () => {
          var e
          ;(e = _.value) == null || e.select()
        },
        be = () => {
          l(ne, ''), l('change', ''), l('clear'), l('input', '')
        }
      return (
        te(
          () => a.modelValue,
          () => {
            var e
            P(() => B()),
              a.validateEvent &&
                ((e = f == null ? void 0 : f.validate) == null ||
                  e.call(f, 'change').catch((s) => Ie()))
          }
        ),
        te(E, () => A()),
        te(
          () => a.type,
          async () => {
            await P(), A(), B()
          }
        ),
        Je(() => {
          !a.formatter && a.parser, A(), P(B)
        }),
        m({
          input: H,
          textarea: S,
          ref: _,
          textareaStyle: ce,
          autosize: Qe(a, 'autosize'),
          focus: K,
          blur: Me,
          select: Le,
          clear: be,
          resizeTextarea: B
        }),
        (e, s) =>
          et(
            (p(),
            x(
              'div',
              oe(t(u), {
                class: t(w),
                style: t(Ne),
                role: e.containerRole,
                onMouseenter: He,
                onMouseleave: Re
              }),
              [
                v(' input '),
                e.type !== 'textarea'
                  ? (p(),
                    x(
                      ae,
                      { key: 0 },
                      [
                        v(' prepend slot '),
                        e.$slots.prepend
                          ? (p(),
                            x(
                              'div',
                              { key: 0, class: h(t(n).be('group', 'prepend')) },
                              [U(e.$slots, 'prepend')],
                              2
                            ))
                          : v('v-if', !0),
                        V(
                          'div',
                          { class: h(t(d)) },
                          [
                            v(' prefix slot '),
                            e.$slots.prefix || e.prefixIcon
                              ? (p(),
                                x(
                                  'span',
                                  { key: 0, class: h(t(n).e('prefix')) },
                                  [
                                    V(
                                      'span',
                                      {
                                        class: h(t(n).e('prefix-inner')),
                                        onClick: K
                                      },
                                      [
                                        U(e.$slots, 'prefix'),
                                        e.prefixIcon
                                          ? (p(),
                                            C(
                                              t(R),
                                              {
                                                key: 0,
                                                class: h(t(n).e('icon'))
                                              },
                                              {
                                                default: M(() => [
                                                  (p(), C(W(e.prefixIcon)))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : v('v-if', !0)
                                      ],
                                      2
                                    )
                                  ],
                                  2
                                ))
                              : v('v-if', !0),
                            V(
                              'input',
                              oe(
                                {
                                  id: t(se),
                                  ref_key: 'input',
                                  ref: H,
                                  class: t(n).e('inner')
                                },
                                t(y),
                                {
                                  type: e.showPassword
                                    ? L.value
                                      ? 'text'
                                      : 'password'
                                    : e.type,
                                  disabled: t(z),
                                  formatter: e.formatter,
                                  parser: e.parser,
                                  readonly: e.readonly,
                                  autocomplete: e.autocomplete,
                                  tabindex: e.tabindex,
                                  'aria-label': e.label,
                                  placeholder: e.placeholder,
                                  style: e.inputStyle,
                                  form: a.form,
                                  onCompositionstart: pe,
                                  onCompositionupdate: fe,
                                  onCompositionend: ve,
                                  onInput: q,
                                  onFocus: me,
                                  onBlur: he,
                                  onChange: de,
                                  onKeydown: ye
                                }
                              ),
                              null,
                              16,
                              zt
                            ),
                            v(' suffix slot '),
                            t(Te)
                              ? (p(),
                                x(
                                  'span',
                                  { key: 1, class: h(t(n).e('suffix')) },
                                  [
                                    V(
                                      'span',
                                      {
                                        class: h(t(n).e('suffix-inner')),
                                        onClick: K
                                      },
                                      [
                                        !t(D) || !t(G) || !t(k)
                                          ? (p(),
                                            x(
                                              ae,
                                              { key: 0 },
                                              [
                                                U(e.$slots, 'suffix'),
                                                e.suffixIcon
                                                  ? (p(),
                                                    C(
                                                      t(R),
                                                      {
                                                        key: 0,
                                                        class: h(t(n).e('icon'))
                                                      },
                                                      {
                                                        default: M(() => [
                                                          (p(),
                                                          C(W(e.suffixIcon)))
                                                        ]),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['class']
                                                    ))
                                                  : v('v-if', !0)
                                              ],
                                              64
                                            ))
                                          : v('v-if', !0),
                                        t(D)
                                          ? (p(),
                                            C(
                                              t(R),
                                              {
                                                key: 1,
                                                class: h([
                                                  t(n).e('icon'),
                                                  t(n).e('clear')
                                                ]),
                                                onMousedown: nt(t(st), [
                                                  'prevent'
                                                ]),
                                                onClick: be
                                              },
                                              {
                                                default: M(() => [at(t(ot))]),
                                                _: 1
                                              },
                                              8,
                                              ['class', 'onMousedown']
                                            ))
                                          : v('v-if', !0),
                                        t(G)
                                          ? (p(),
                                            C(
                                              t(R),
                                              {
                                                key: 2,
                                                class: h([
                                                  t(n).e('icon'),
                                                  t(n).e('password')
                                                ]),
                                                onClick: Ae
                                              },
                                              {
                                                default: M(() => [
                                                  (p(), C(W(t(Ve))))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : v('v-if', !0),
                                        t(k)
                                          ? (p(),
                                            x(
                                              'span',
                                              {
                                                key: 3,
                                                class: h(t(n).e('count'))
                                              },
                                              [
                                                V(
                                                  'span',
                                                  {
                                                    class: h(
                                                      t(n).e('count-inner')
                                                    )
                                                  },
                                                  Y(t(Z)) +
                                                    ' / ' +
                                                    Y(t(y).maxlength),
                                                  3
                                                )
                                              ],
                                              2
                                            ))
                                          : v('v-if', !0),
                                        t($) && t(ue) && t(ie)
                                          ? (p(),
                                            C(
                                              t(R),
                                              {
                                                key: 4,
                                                class: h([
                                                  t(n).e('icon'),
                                                  t(n).e('validateIcon'),
                                                  t(n).is(
                                                    'loading',
                                                    t($) === 'validating'
                                                  )
                                                ])
                                              },
                                              {
                                                default: M(() => [
                                                  (p(), C(W(t(ue))))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : v('v-if', !0)
                                      ],
                                      2
                                    )
                                  ],
                                  2
                                ))
                              : v('v-if', !0)
                          ],
                          2
                        ),
                        v(' append slot '),
                        e.$slots.append
                          ? (p(),
                            x(
                              'div',
                              { key: 1, class: h(t(n).be('group', 'append')) },
                              [U(e.$slots, 'append')],
                              2
                            ))
                          : v('v-if', !0)
                      ],
                      64
                    ))
                  : (p(),
                    x(
                      ae,
                      { key: 1 },
                      [
                        v(' textarea '),
                        V(
                          'textarea',
                          oe(
                            {
                              id: t(se),
                              ref_key: 'textarea',
                              ref: S,
                              class: t(le).e('inner')
                            },
                            t(y),
                            {
                              tabindex: e.tabindex,
                              disabled: t(z),
                              readonly: e.readonly,
                              autocomplete: e.autocomplete,
                              style: t(ce),
                              'aria-label': e.label,
                              placeholder: e.placeholder,
                              form: a.form,
                              onCompositionstart: pe,
                              onCompositionupdate: fe,
                              onCompositionend: ve,
                              onInput: q,
                              onFocus: me,
                              onBlur: he,
                              onChange: de,
                              onKeydown: ye
                            }
                          ),
                          null,
                          16,
                          kt
                        ),
                        t(k)
                          ? (p(),
                            x(
                              'span',
                              {
                                key: 0,
                                style: lt(re.value),
                                class: h(t(n).e('count'))
                              },
                              Y(t(Z)) + ' / ' + Y(t(y).maxlength),
                              7
                            ))
                          : v('v-if', !0)
                      ],
                      64
                    ))
              ],
              16,
              Et
            )),
            [[tt, e.type !== 'hidden']]
          )
      )
    }
  })
var Nt = rt(Vt, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue'
  ]
])
const Bt = it(Nt)
export { $t as C, Bt as E, ne as U, mt as i }
