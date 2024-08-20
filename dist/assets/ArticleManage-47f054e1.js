import {
  at as Mi,
  m as Lt,
  n as qr,
  v as De,
  x as lt,
  y as me,
  o as ae,
  B as we,
  g as $e,
  G as ft,
  H as ye,
  e as oe,
  c as Pe,
  b as ce,
  d as pe,
  au as Pr,
  a5 as ht,
  F as Kt,
  a2 as Re,
  C as wt,
  T as Pn,
  _ as ct,
  I as qn,
  r as Se,
  a0 as yt,
  A as Ii,
  W as st,
  ad as Ht,
  J as qi,
  al as Ue,
  ae as Rn,
  av as Ri,
  s as Xt,
  D as Ln,
  O as fn,
  aw as Cn,
  ax as pt,
  w as Ze,
  a3 as xn,
  ab as jn,
  ay as Rr,
  Q as ii,
  Z as tt,
  P as Dn,
  aj as oi,
  az as Wr,
  aA as zt,
  aB as un,
  aC as xi,
  q as qt,
  aD as Sr,
  ai as Gr,
  R as Zr,
  z as li,
  aE as ji,
  $ as Di,
  N as xr,
  aF as Bi,
  aG as $i,
  a6 as Ut,
  aH as Qt,
  aI as ut,
  aJ as zi,
  a1 as Fi,
  M as ai,
  t as ui,
  ah as si,
  ag as Ui,
  aK as Hi,
  aL as Yr,
  aM as Ki,
  ac as Pt,
  aN as Vi,
  aa as Wi,
  aO as Gi,
  f as Ft,
  E as Lr,
  aP as Zi,
  aQ as Yi,
  aR as Qi,
  aS as Xi
} from './main-b3449a42.js'
import {
  g as jr,
  c as He,
  d as Ji,
  a as eo,
  u as to,
  b as Qr,
  C as no,
  e as ro,
  f as io,
  h as oo,
  i as lo,
  j as ao,
  k as uo,
  E as so,
  l as fo,
  v as co
} from './article-e8091cee.js'
import { _ as ho } from './PageContainer-7f16fc74.js'
import { U as Rt, i as po, C as fi, E as Dr } from './el-input-63e056b5.js'
import {
  e as vo,
  g as yo,
  s as go,
  E as mo,
  b as bo,
  i as _o,
  a as Oo,
  h as Eo,
  d as wo
} from './el-overlay-2d45dfd6.js'
import './el-checkbox-50406a36.js'
import { E as So } from './el-link-da4e0f09.js'
import { E as ci, a as di } from './el-form-item-583795c3.js'
import {
  a as hi,
  b as Cr,
  c as Ao,
  d as pi,
  _ as To,
  E as vi
} from './_plugin-vue_export-helper-140fdfbe.js'
import { i as Mr } from './isEqual-e10afbf0.js'
import { E as ko } from './el-progress-8a28fdee.js'
/* empty css                */ import './el-message-42383dd9.js'
const No = (e = '') =>
    e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d'),
  Po = (e) => Mi[e || 'default'],
  Lo = (e) => ({
    focus: () => {
      var w, v
      ;(v = (w = e.value) == null ? void 0 : w.focus) == null || v.call(w)
    }
  })
var yi = { exports: {} }
;(function (e, w) {
  ;(function (v, y) {
    e.exports = y()
  })(He, function () {
    var v = 1e3,
      y = 6e4,
      s = 36e5,
      O = 'millisecond',
      b = 'second',
      E = 'minute',
      g = 'hour',
      _ = 'day',
      f = 'week',
      o = 'month',
      n = 'quarter',
      t = 'year',
      d = 'date',
      i = 'Invalid Date',
      u =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      l =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      a = {
        name: 'en',
        weekdays:
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        ordinal: function (N) {
          var C = ['th', 'st', 'nd', 'rd'],
            q = N % 100
          return '[' + N + (C[(q - 20) % 10] || C[q] || C[0]) + ']'
        }
      },
      h = function (N, C, q) {
        var $ = String(N)
        return !$ || $.length >= C
          ? N
          : '' + Array(C + 1 - $.length).join(q) + N
      },
      r = {
        s: h,
        z: function (N) {
          var C = -N.utcOffset(),
            q = Math.abs(C),
            $ = Math.floor(q / 60),
            B = q % 60
          return (C <= 0 ? '+' : '-') + h($, 2, '0') + ':' + h(B, 2, '0')
        },
        m: function N(C, q) {
          if (C.date() < q.date()) return -N(q, C)
          var $ = 12 * (q.year() - C.year()) + (q.month() - C.month()),
            B = C.clone().add($, o),
            G = q - B < 0,
            z = C.clone().add($ + (G ? -1 : 1), o)
          return +(-($ + (q - B) / (G ? B - z : z - B)) || 0)
        },
        a: function (N) {
          return N < 0 ? Math.ceil(N) || 0 : Math.floor(N)
        },
        p: function (N) {
          return (
            { M: o, y: t, w: f, d: _, D: d, h: g, m: E, s: b, ms: O, Q: n }[
              N
            ] ||
            String(N || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (N) {
          return N === void 0
        }
      },
      p = 'en',
      T = {}
    T[p] = a
    var k = function (N) {
        return N instanceof m
      },
      P = function N(C, q, $) {
        var B
        if (!C) return p
        if (typeof C == 'string') {
          var G = C.toLowerCase()
          T[G] && (B = G), q && ((T[G] = q), (B = G))
          var z = C.split('-')
          if (!B && z.length > 1) return N(z[0])
        } else {
          var R = C.name
          ;(T[R] = C), (B = R)
        }
        return !$ && B && (p = B), B || (!$ && p)
      },
      M = function (N, C) {
        if (k(N)) return N.clone()
        var q = typeof C == 'object' ? C : {}
        return (q.date = N), (q.args = arguments), new m(q)
      },
      A = r
    ;(A.l = P),
      (A.i = k),
      (A.w = function (N, C) {
        return M(N, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset })
      })
    var m = (function () {
        function N(q) {
          ;(this.$L = P(q.locale, null, !0)), this.parse(q)
        }
        var C = N.prototype
        return (
          (C.parse = function (q) {
            ;(this.$d = (function ($) {
              var B = $.date,
                G = $.utc
              if (B === null) return new Date(NaN)
              if (A.u(B)) return new Date()
              if (B instanceof Date) return new Date(B)
              if (typeof B == 'string' && !/Z$/i.test(B)) {
                var z = B.match(u)
                if (z) {
                  var R = z[2] - 1 || 0,
                    L = (z[7] || '0').substring(0, 3)
                  return G
                    ? new Date(
                        Date.UTC(
                          z[1],
                          R,
                          z[3] || 1,
                          z[4] || 0,
                          z[5] || 0,
                          z[6] || 0,
                          L
                        )
                      )
                    : new Date(
                        z[1],
                        R,
                        z[3] || 1,
                        z[4] || 0,
                        z[5] || 0,
                        z[6] || 0,
                        L
                      )
                }
              }
              return new Date(B)
            })(q)),
              (this.$x = q.x || {}),
              this.init()
          }),
          (C.init = function () {
            var q = this.$d
            ;(this.$y = q.getFullYear()),
              (this.$M = q.getMonth()),
              (this.$D = q.getDate()),
              (this.$W = q.getDay()),
              (this.$H = q.getHours()),
              (this.$m = q.getMinutes()),
              (this.$s = q.getSeconds()),
              (this.$ms = q.getMilliseconds())
          }),
          (C.$utils = function () {
            return A
          }),
          (C.isValid = function () {
            return this.$d.toString() !== i
          }),
          (C.isSame = function (q, $) {
            var B = M(q)
            return this.startOf($) <= B && B <= this.endOf($)
          }),
          (C.isAfter = function (q, $) {
            return M(q) < this.startOf($)
          }),
          (C.isBefore = function (q, $) {
            return this.endOf($) < M(q)
          }),
          (C.$g = function (q, $, B) {
            return A.u(q) ? this[$] : this.set(B, q)
          }),
          (C.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (C.valueOf = function () {
            return this.$d.getTime()
          }),
          (C.startOf = function (q, $) {
            var B = this,
              G = !!A.u($) || $,
              z = A.p(q),
              R = function (V, W) {
                var J = A.w(
                  B.$u ? Date.UTC(B.$y, W, V) : new Date(B.$y, W, V),
                  B
                )
                return G ? J : J.endOf(_)
              },
              L = function (V, W) {
                return A.w(
                  B.toDate()[V].apply(
                    B.toDate('s'),
                    (G ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(W)
                  ),
                  B
                )
              },
              j = this.$W,
              D = this.$M,
              K = this.$D,
              U = 'set' + (this.$u ? 'UTC' : '')
            switch (z) {
              case t:
                return G ? R(1, 0) : R(31, 11)
              case o:
                return G ? R(1, D) : R(0, D + 1)
              case f:
                var x = this.$locale().weekStart || 0,
                  H = (j < x ? j + 7 : j) - x
                return R(G ? K - H : K + (6 - H), D)
              case _:
              case d:
                return L(U + 'Hours', 0)
              case g:
                return L(U + 'Minutes', 1)
              case E:
                return L(U + 'Seconds', 2)
              case b:
                return L(U + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (C.endOf = function (q) {
            return this.startOf(q, !1)
          }),
          (C.$set = function (q, $) {
            var B,
              G = A.p(q),
              z = 'set' + (this.$u ? 'UTC' : ''),
              R = ((B = {}),
              (B[_] = z + 'Date'),
              (B[d] = z + 'Date'),
              (B[o] = z + 'Month'),
              (B[t] = z + 'FullYear'),
              (B[g] = z + 'Hours'),
              (B[E] = z + 'Minutes'),
              (B[b] = z + 'Seconds'),
              (B[O] = z + 'Milliseconds'),
              B)[G],
              L = G === _ ? this.$D + ($ - this.$W) : $
            if (G === o || G === t) {
              var j = this.clone().set(d, 1)
              j.$d[R](L),
                j.init(),
                (this.$d = j.set(d, Math.min(this.$D, j.daysInMonth())).$d)
            } else R && this.$d[R](L)
            return this.init(), this
          }),
          (C.set = function (q, $) {
            return this.clone().$set(q, $)
          }),
          (C.get = function (q) {
            return this[A.p(q)]()
          }),
          (C.add = function (q, $) {
            var B,
              G = this
            q = Number(q)
            var z = A.p($),
              R = function (D) {
                var K = M(G)
                return A.w(K.date(K.date() + Math.round(D * q)), G)
              }
            if (z === o) return this.set(o, this.$M + q)
            if (z === t) return this.set(t, this.$y + q)
            if (z === _) return R(1)
            if (z === f) return R(7)
            var L = ((B = {}), (B[E] = y), (B[g] = s), (B[b] = v), B)[z] || 1,
              j = this.$d.getTime() + q * L
            return A.w(j, this)
          }),
          (C.subtract = function (q, $) {
            return this.add(-1 * q, $)
          }),
          (C.format = function (q) {
            var $ = this,
              B = this.$locale()
            if (!this.isValid()) return B.invalidDate || i
            var G = q || 'YYYY-MM-DDTHH:mm:ssZ',
              z = A.z(this),
              R = this.$H,
              L = this.$m,
              j = this.$M,
              D = B.weekdays,
              K = B.months,
              U = B.meridiem,
              x = function (W, J, re, ue) {
                return (W && (W[J] || W($, G))) || re[J].slice(0, ue)
              },
              H = function (W) {
                return A.s(R % 12 || 12, W, '0')
              },
              V =
                U ||
                function (W, J, re) {
                  var ue = W < 12 ? 'AM' : 'PM'
                  return re ? ue.toLowerCase() : ue
                }
            return G.replace(l, function (W, J) {
              return (
                J ||
                (function (re) {
                  switch (re) {
                    case 'YY':
                      return String($.$y).slice(-2)
                    case 'YYYY':
                      return A.s($.$y, 4, '0')
                    case 'M':
                      return j + 1
                    case 'MM':
                      return A.s(j + 1, 2, '0')
                    case 'MMM':
                      return x(B.monthsShort, j, K, 3)
                    case 'MMMM':
                      return x(K, j)
                    case 'D':
                      return $.$D
                    case 'DD':
                      return A.s($.$D, 2, '0')
                    case 'd':
                      return String($.$W)
                    case 'dd':
                      return x(B.weekdaysMin, $.$W, D, 2)
                    case 'ddd':
                      return x(B.weekdaysShort, $.$W, D, 3)
                    case 'dddd':
                      return D[$.$W]
                    case 'H':
                      return String(R)
                    case 'HH':
                      return A.s(R, 2, '0')
                    case 'h':
                      return H(1)
                    case 'hh':
                      return H(2)
                    case 'a':
                      return V(R, L, !0)
                    case 'A':
                      return V(R, L, !1)
                    case 'm':
                      return String(L)
                    case 'mm':
                      return A.s(L, 2, '0')
                    case 's':
                      return String($.$s)
                    case 'ss':
                      return A.s($.$s, 2, '0')
                    case 'SSS':
                      return A.s($.$ms, 3, '0')
                    case 'Z':
                      return z
                  }
                  return null
                })(W) ||
                z.replace(':', '')
              )
            })
          }),
          (C.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (C.diff = function (q, $, B) {
            var G,
              z = this,
              R = A.p($),
              L = M(q),
              j = (L.utcOffset() - this.utcOffset()) * y,
              D = this - L,
              K = function () {
                return A.m(z, L)
              }
            switch (R) {
              case t:
                G = K() / 12
                break
              case o:
                G = K()
                break
              case n:
                G = K() / 3
                break
              case f:
                G = (D - j) / 6048e5
                break
              case _:
                G = (D - j) / 864e5
                break
              case g:
                G = D / s
                break
              case E:
                G = D / y
                break
              case b:
                G = D / v
                break
              default:
                G = D
            }
            return B ? G : A.a(G)
          }),
          (C.daysInMonth = function () {
            return this.endOf(o).$D
          }),
          (C.$locale = function () {
            return T[this.$L]
          }),
          (C.locale = function (q, $) {
            if (!q) return this.$L
            var B = this.clone(),
              G = P(q, $, !0)
            return G && (B.$L = G), B
          }),
          (C.clone = function () {
            return A.w(this.$d, this)
          }),
          (C.toDate = function () {
            return new Date(this.valueOf())
          }),
          (C.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (C.toISOString = function () {
            return this.$d.toISOString()
          }),
          (C.toString = function () {
            return this.$d.toUTCString()
          }),
          N
        )
      })(),
      S = m.prototype
    return (
      (M.prototype = S),
      [
        ['$ms', O],
        ['$s', b],
        ['$m', E],
        ['$H', g],
        ['$W', _],
        ['$M', o],
        ['$y', t],
        ['$D', d]
      ].forEach(function (N) {
        S[N[1]] = function (C) {
          return this.$g(C, N[0], N[1])
        }
      }),
      (M.extend = function (N, C) {
        return N.$i || (N(C, m, M), (N.$i = !0)), M
      }),
      (M.locale = P),
      (M.isDayjs = k),
      (M.unix = function (N) {
        return M(1e3 * N)
      }),
      (M.en = T[p]),
      (M.Ls = T),
      (M.p = {}),
      M
    )
  })
})(yi)
var Co = yi.exports
const Mo = jr(Co),
  gi = Lt({
    type: {
      type: String,
      values: ['success', 'info', 'warning', 'danger', ''],
      default: ''
    },
    closable: Boolean,
    disableTransitions: Boolean,
    hit: Boolean,
    color: { type: String, default: '' },
    size: { type: String, values: qr, default: '' },
    effect: {
      type: String,
      values: ['dark', 'light', 'plain'],
      default: 'light'
    },
    round: Boolean
  }),
  Io = {
    close: (e) => e instanceof MouseEvent,
    click: (e) => e instanceof MouseEvent
  },
  qo = De({ name: 'ElTag' }),
  Ro = De({
    ...qo,
    props: gi,
    emits: Io,
    setup(e, { emit: w }) {
      const v = e,
        y = hi(),
        s = lt('tag'),
        O = me(() => {
          const { type: g, hit: _, effect: f, closable: o, round: n } = v
          return [
            s.b(),
            s.is('closable', o),
            s.m(g),
            s.m(y.value),
            s.m(f),
            s.is('hit', _),
            s.is('round', n)
          ]
        }),
        b = (g) => {
          w('close', g)
        },
        E = (g) => {
          w('click', g)
        }
      return (g, _) =>
        g.disableTransitions
          ? (ae(),
            we(
              'span',
              {
                key: 0,
                class: ye(oe(O)),
                style: wt({ backgroundColor: g.color }),
                onClick: E
              },
              [
                $e(
                  'span',
                  { class: ye(oe(s).e('content')) },
                  [ft(g.$slots, 'default')],
                  2
                ),
                g.closable
                  ? (ae(),
                    Pe(
                      oe(Kt),
                      {
                        key: 0,
                        class: ye(oe(s).e('close')),
                        onClick: ht(b, ['stop'])
                      },
                      { default: ce(() => [pe(oe(Pr))]), _: 1 },
                      8,
                      ['class', 'onClick']
                    ))
                  : Re('v-if', !0)
              ],
              6
            ))
          : (ae(),
            Pe(
              Pn,
              {
                key: 1,
                name: `${oe(s).namespace.value}-zoom-in-center`,
                appear: ''
              },
              {
                default: ce(() => [
                  $e(
                    'span',
                    {
                      class: ye(oe(O)),
                      style: wt({ backgroundColor: g.color }),
                      onClick: E
                    },
                    [
                      $e(
                        'span',
                        { class: ye(oe(s).e('content')) },
                        [ft(g.$slots, 'default')],
                        2
                      ),
                      g.closable
                        ? (ae(),
                          Pe(
                            oe(Kt),
                            {
                              key: 0,
                              class: ye(oe(s).e('close')),
                              onClick: ht(b, ['stop'])
                            },
                            { default: ce(() => [pe(oe(Pr))]), _: 1 },
                            8,
                            ['class', 'onClick']
                          ))
                        : Re('v-if', !0)
                    ],
                    6
                  )
                ]),
                _: 3
              },
              8,
              ['name']
            ))
    }
  })
var xo = ct(Ro, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue'
  ]
])
const jo = qn(xo),
  Do = Lt({
    ...Ji,
    direction: {
      type: String,
      default: 'rtl',
      values: ['ltr', 'rtl', 'ttb', 'btt']
    },
    size: { type: [String, Number], default: '30%' },
    withHeader: { type: Boolean, default: !0 },
    modalFade: { type: Boolean, default: !0 }
  }),
  Bo = eo,
  $o = De({
    name: 'ElDrawer',
    components: { ElOverlay: vo, ElFocusTrap: yo, ElIcon: Kt, Close: Pr },
    inheritAttrs: !1,
    props: Do,
    emits: Bo,
    setup(e, { slots: w }) {
      Cr(
        {
          scope: 'el-drawer',
          from: 'the title slot',
          replacement: 'the header slot',
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/drawer.html#slots'
        },
        me(() => !!w.title)
      ),
        Cr(
          {
            scope: 'el-drawer',
            from: 'custom-class',
            replacement: 'class',
            version: '2.3.0',
            ref: 'https://element-plus.org/en-US/component/drawer.html#attributes',
            type: 'Attribute'
          },
          me(() => !!e.customClass)
        )
      const v = Se(),
        y = Se(),
        s = lt('drawer'),
        { t: O } = yt(),
        b = me(() => e.direction === 'rtl' || e.direction === 'ltr'),
        E = me(() => Ii(e.size))
      return {
        ...to(e, v),
        drawerRef: v,
        focusStartRef: y,
        isHorizontal: b,
        drawerSize: E,
        ns: s,
        t: O
      }
    }
  }),
  zo = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  Fo = ['id'],
  Uo = ['aria-label'],
  Ho = ['id']
function Ko(e, w, v, y, s, O) {
  const b = st('close'),
    E = st('el-icon'),
    g = st('el-focus-trap'),
    _ = st('el-overlay')
  return (
    ae(),
    Pe(
      Ri,
      { to: 'body', disabled: !e.appendToBody },
      [
        pe(
          Pn,
          {
            name: e.ns.b('fade'),
            onAfterEnter: e.afterEnter,
            onAfterLeave: e.afterLeave,
            onBeforeLeave: e.beforeLeave,
            persisted: ''
          },
          {
            default: ce(() => [
              Ht(
                pe(
                  _,
                  {
                    mask: e.modal,
                    'overlay-class': e.modalClass,
                    'z-index': e.zIndex,
                    onClick: e.onModalClick
                  },
                  {
                    default: ce(() => [
                      pe(
                        g,
                        {
                          loop: '',
                          trapped: e.visible,
                          'focus-trap-el': e.drawerRef,
                          'focus-start-el': e.focusStartRef,
                          onReleaseRequested: e.onCloseRequested
                        },
                        {
                          default: ce(() => [
                            $e(
                              'div',
                              qi(
                                {
                                  ref: 'drawerRef',
                                  'aria-modal': 'true',
                                  'aria-label': e.title || void 0,
                                  'aria-labelledby': e.title
                                    ? void 0
                                    : e.titleId,
                                  'aria-describedby': e.bodyId
                                },
                                e.$attrs,
                                {
                                  class: [
                                    e.ns.b(),
                                    e.direction,
                                    e.visible && 'open',
                                    e.customClass
                                  ],
                                  style: e.isHorizontal
                                    ? 'width: ' + e.drawerSize
                                    : 'height: ' + e.drawerSize,
                                  role: 'dialog',
                                  onClick:
                                    w[1] || (w[1] = ht(() => {}, ['stop']))
                                }
                              ),
                              [
                                $e(
                                  'span',
                                  {
                                    ref: 'focusStartRef',
                                    class: ye(e.ns.e('sr-focus')),
                                    tabindex: '-1'
                                  },
                                  null,
                                  2
                                ),
                                e.withHeader
                                  ? (ae(),
                                    we(
                                      'header',
                                      { key: 0, class: ye(e.ns.e('header')) },
                                      [
                                        e.$slots.title
                                          ? ft(
                                              e.$slots,
                                              'title',
                                              { key: 1 },
                                              () => [Re(' DEPRECATED SLOT ')]
                                            )
                                          : ft(
                                              e.$slots,
                                              'header',
                                              {
                                                key: 0,
                                                close: e.handleClose,
                                                titleId: e.titleId,
                                                titleClass: e.ns.e('title')
                                              },
                                              () => [
                                                e.$slots.title
                                                  ? Re('v-if', !0)
                                                  : (ae(),
                                                    we(
                                                      'span',
                                                      {
                                                        key: 0,
                                                        id: e.titleId,
                                                        role: 'heading',
                                                        class: ye(
                                                          e.ns.e('title')
                                                        )
                                                      },
                                                      Ue(e.title),
                                                      11,
                                                      Fo
                                                    ))
                                              ]
                                            ),
                                        e.showClose
                                          ? (ae(),
                                            we(
                                              'button',
                                              {
                                                key: 2,
                                                'aria-label':
                                                  e.t('el.drawer.close'),
                                                class: ye(e.ns.e('close-btn')),
                                                type: 'button',
                                                onClick:
                                                  w[0] ||
                                                  (w[0] = (...f) =>
                                                    e.handleClose &&
                                                    e.handleClose(...f))
                                              },
                                              [
                                                pe(
                                                  E,
                                                  {
                                                    class: ye(e.ns.e('close'))
                                                  },
                                                  {
                                                    default: ce(() => [pe(b)]),
                                                    _: 1
                                                  },
                                                  8,
                                                  ['class']
                                                )
                                              ],
                                              10,
                                              Uo
                                            ))
                                          : Re('v-if', !0)
                                      ],
                                      2
                                    ))
                                  : Re('v-if', !0),
                                e.rendered
                                  ? (ae(),
                                    we(
                                      'div',
                                      {
                                        key: 1,
                                        id: e.bodyId,
                                        class: ye(e.ns.e('body'))
                                      },
                                      [ft(e.$slots, 'default')],
                                      10,
                                      Ho
                                    ))
                                  : Re('v-if', !0),
                                e.$slots.footer
                                  ? (ae(),
                                    we(
                                      'div',
                                      { key: 2, class: ye(e.ns.e('footer')) },
                                      [ft(e.$slots, 'footer')],
                                      2
                                    ))
                                  : Re('v-if', !0)
                              ],
                              16,
                              zo
                            )
                          ]),
                          _: 3
                        },
                        8,
                        [
                          'trapped',
                          'focus-trap-el',
                          'focus-start-el',
                          'onReleaseRequested'
                        ]
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['mask', 'overlay-class', 'z-index', 'onClick']
                ),
                [[Rn, e.visible]]
              )
            ]),
            _: 3
          },
          8,
          ['name', 'onAfterEnter', 'onAfterLeave', 'onBeforeLeave']
        )
      ],
      8,
      ['disabled']
    )
  )
}
var Vo = ct($o, [
  ['render', Ko],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue'
  ]
])
const Wo = qn(Vo),
  mi = Symbol('elPaginationKey'),
  Go = Lt({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    prevText: { type: String },
    prevIcon: { type: Xt }
  }),
  Zo = { click: (e) => e instanceof MouseEvent },
  Yo = ['disabled', 'aria-label', 'aria-disabled'],
  Qo = { key: 0 },
  Xo = De({ name: 'ElPaginationPrev' }),
  Jo = De({
    ...Xo,
    props: Go,
    emits: Zo,
    setup(e) {
      const w = e,
        { t: v } = yt(),
        y = me(() => w.disabled || w.currentPage <= 1)
      return (s, O) => (
        ae(),
        we(
          'button',
          {
            type: 'button',
            class: 'btn-prev',
            disabled: oe(y),
            'aria-label': s.prevText || oe(v)('el.pagination.prev'),
            'aria-disabled': oe(y),
            onClick: O[0] || (O[0] = (b) => s.$emit('click', b))
          },
          [
            s.prevText
              ? (ae(), we('span', Qo, Ue(s.prevText), 1))
              : (ae(),
                Pe(
                  oe(Kt),
                  { key: 1 },
                  { default: ce(() => [(ae(), Pe(Ln(s.prevIcon)))]), _: 1 }
                ))
          ],
          8,
          Yo
        )
      )
    }
  })
var el = ct(Jo, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue'
  ]
])
const tl = Lt({
    disabled: Boolean,
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, default: 50 },
    nextText: { type: String },
    nextIcon: { type: Xt }
  }),
  nl = ['disabled', 'aria-label', 'aria-disabled'],
  rl = { key: 0 },
  il = De({ name: 'ElPaginationNext' }),
  ol = De({
    ...il,
    props: tl,
    emits: ['click'],
    setup(e) {
      const w = e,
        { t: v } = yt(),
        y = me(
          () => w.disabled || w.currentPage === w.pageCount || w.pageCount === 0
        )
      return (s, O) => (
        ae(),
        we(
          'button',
          {
            type: 'button',
            class: 'btn-next',
            disabled: oe(y),
            'aria-label': s.nextText || oe(v)('el.pagination.next'),
            'aria-disabled': oe(y),
            onClick: O[0] || (O[0] = (b) => s.$emit('click', b))
          },
          [
            s.nextText
              ? (ae(), we('span', rl, Ue(s.nextText), 1))
              : (ae(),
                Pe(
                  oe(Kt),
                  { key: 1 },
                  { default: ce(() => [(ae(), Pe(Ln(s.nextIcon)))]), _: 1 }
                ))
          ],
          8,
          nl
        )
      )
    }
  })
var ll = ct(ol, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue'
  ]
])
const bi = Symbol('ElSelectGroup'),
  Bn = Symbol('ElSelect')
function al(e, w) {
  const v = fn(Bn),
    y = fn(bi, { disabled: !1 }),
    s = me(
      () =>
        Object.prototype.toString.call(e.value).toLowerCase() ===
        '[object object]'
    ),
    O = me(() =>
      v.props.multiple
        ? o(v.props.modelValue, e.value)
        : n(e.value, v.props.modelValue)
    ),
    b = me(() => {
      if (v.props.multiple) {
        const i = v.props.modelValue || []
        return (
          !O.value &&
          i.length >= v.props.multipleLimit &&
          v.props.multipleLimit > 0
        )
      } else return !1
    }),
    E = me(() => e.label || (s.value ? '' : e.value)),
    g = me(() => e.value || e.label || ''),
    _ = me(() => e.disabled || w.groupDisabled || b.value),
    f = xn(),
    o = (i = [], u) => {
      if (s.value) {
        const l = v.props.valueKey
        return i && i.some((a) => Cn(pt(a, l)) === pt(u, l))
      } else return i && i.includes(u)
    },
    n = (i, u) => {
      if (s.value) {
        const { valueKey: l } = v.props
        return pt(i, l) === pt(u, l)
      } else return i === u
    },
    t = () => {
      !e.disabled &&
        !y.disabled &&
        (v.hoverIndex = v.optionsArray.indexOf(f.proxy))
    }
  Ze(
    () => E.value,
    () => {
      !e.created && !v.props.remote && v.setSelected()
    }
  ),
    Ze(
      () => e.value,
      (i, u) => {
        const { remote: l, valueKey: a } = v.props
        if (
          (Object.is(i, u) ||
            (v.onOptionDestroy(u, f.proxy), v.onOptionCreate(f.proxy)),
          !e.created && !l)
        ) {
          if (
            a &&
            typeof i == 'object' &&
            typeof u == 'object' &&
            i[a] === u[a]
          )
            return
          v.setSelected()
        }
      }
    ),
    Ze(
      () => y.disabled,
      () => {
        w.groupDisabled = y.disabled
      },
      { immediate: !0 }
    )
  const { queryChange: d } = Cn(v)
  return (
    Ze(
      d,
      (i) => {
        const { query: u } = oe(i),
          l = new RegExp(No(u), 'i')
        ;(w.visible = l.test(E.value) || e.created),
          w.visible || v.filteredOptionsCount--
      },
      { immediate: !0 }
    ),
    {
      select: v,
      currentLabel: E,
      currentValue: g,
      itemSelected: O,
      isDisabled: _,
      hoverItem: t
    }
  )
}
const ul = De({
  name: 'ElOption',
  componentName: 'ElOption',
  props: {
    value: { required: !0, type: [String, Number, Boolean, Object] },
    label: [String, Number],
    created: Boolean,
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const w = lt('select'),
      v = jn({
        index: -1,
        groupDisabled: !1,
        visible: !0,
        hitState: !1,
        hover: !1
      }),
      {
        currentLabel: y,
        itemSelected: s,
        isDisabled: O,
        select: b,
        hoverItem: E
      } = al(e, v),
      { visible: g, hover: _ } = Rr(v),
      f = xn().proxy
    b.onOptionCreate(f),
      ii(() => {
        const n = f.value,
          { selected: t } = b,
          i = (b.props.multiple ? t : [t]).some((u) => u.value === f.value)
        tt(() => {
          b.cachedOptions.get(n) === f && !i && b.cachedOptions.delete(n)
        }),
          b.onOptionDestroy(n, f)
      })
    function o() {
      e.disabled !== !0 && v.groupDisabled !== !0 && b.handleOptionSelect(f)
    }
    return {
      ns: w,
      currentLabel: y,
      itemSelected: s,
      isDisabled: O,
      select: b,
      hoverItem: E,
      visible: g,
      hover: _,
      selectOptionClick: o,
      states: v
    }
  }
})
function sl(e, w, v, y, s, O) {
  return Ht(
    (ae(),
    we(
      'li',
      {
        class: ye([
          e.ns.be('dropdown', 'item'),
          e.ns.is('disabled', e.isDisabled),
          { selected: e.itemSelected, hover: e.hover }
        ]),
        onMouseenter:
          w[0] || (w[0] = (...b) => e.hoverItem && e.hoverItem(...b)),
        onClick:
          w[1] ||
          (w[1] = ht(
            (...b) => e.selectOptionClick && e.selectOptionClick(...b),
            ['stop']
          ))
      },
      [
        ft(e.$slots, 'default', {}, () => [
          $e('span', null, Ue(e.currentLabel), 1)
        ])
      ],
      34
    )),
    [[Rn, e.visible]]
  )
}
var Br = ct(ul, [
  ['render', sl],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue'
  ]
])
const fl = De({
  name: 'ElSelectDropdown',
  componentName: 'ElSelectDropdown',
  setup() {
    const e = fn(Bn),
      w = lt('select'),
      v = me(() => e.props.popperClass),
      y = me(() => e.props.multiple),
      s = me(() => e.props.fitInputWidth),
      O = Se('')
    function b() {
      var E
      O.value = `${(E = e.selectWrapper) == null ? void 0 : E.offsetWidth}px`
    }
    return (
      Dn(() => {
        b(), oi(e.selectWrapper, b)
      }),
      { ns: w, minWidth: O, popperClass: v, isMultiple: y, isFitInputWidth: s }
    )
  }
})
function cl(e, w, v, y, s, O) {
  return (
    ae(),
    we(
      'div',
      {
        class: ye([
          e.ns.b('dropdown'),
          e.ns.is('multiple', e.isMultiple),
          e.popperClass
        ]),
        style: wt({ [e.isFitInputWidth ? 'width' : 'minWidth']: e.minWidth })
      },
      [ft(e.$slots, 'default')],
      6
    )
  )
}
var dl = ct(fl, [
  ['render', cl],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue'
  ]
])
function hl(e) {
  const { t: w } = yt()
  return jn({
    options: new Map(),
    cachedOptions: new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: '',
    currentPlaceholder: w('el.select.placeholder'),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1
  })
}
let Ar = !1
const pl = (e, w, v) => {
  const { t: y } = yt(),
    s = lt('select')
  Cr(
    {
      from: 'suffixTransition',
      replacement: 'override style scheme',
      version: '2.3.0',
      scope: 'props',
      ref: 'https://element-plus.org/en-US/component/select.html#select-attributes'
    },
    me(() => e.suffixTransition === !1)
  )
  const O = Se(null),
    b = Se(null),
    E = Se(null),
    g = Se(null),
    _ = Se(null),
    f = Se(null),
    o = Se(null),
    n = Se(-1),
    t = Wr({ query: '' }),
    d = Wr(''),
    i = Se([])
  let u = 0
  const { form: l, formItem: a } = Ao(),
    h = me(() => !e.filterable || e.multiple || !w.visible),
    r = me(() => e.disabled || (l == null ? void 0 : l.disabled)),
    p = me(() => {
      const Z = e.multiple
        ? Array.isArray(e.modelValue) && e.modelValue.length > 0
        : e.modelValue !== void 0 &&
          e.modelValue !== null &&
          e.modelValue !== ''
      return e.clearable && !r.value && w.inputHovering && Z
    }),
    T = me(() =>
      e.remote && e.filterable && !e.remoteShowSuffix ? '' : e.suffixIcon
    ),
    k = me(() => s.is('reverse', T.value && w.visible && e.suffixTransition)),
    P = me(() => (e.remote ? 300 : 0)),
    M = me(() =>
      e.loading
        ? e.loadingText || y('el.select.loading')
        : e.remote && w.query === '' && w.options.size === 0
        ? !1
        : e.filterable &&
          w.query &&
          w.options.size > 0 &&
          w.filteredOptionsCount === 0
        ? e.noMatchText || y('el.select.noMatch')
        : w.options.size === 0
        ? e.noDataText || y('el.select.noData')
        : null
    ),
    A = me(() => {
      const Z = Array.from(w.options.values()),
        te = []
      return (
        i.value.forEach((le) => {
          const _e = Z.findIndex((je) => je.currentLabel === le)
          _e > -1 && te.push(Z[_e])
        }),
        te.length ? te : Z
      )
    }),
    m = me(() => Array.from(w.cachedOptions.values())),
    S = me(() => {
      const Z = A.value
        .filter((te) => !te.created)
        .some((te) => te.currentLabel === w.query)
      return e.filterable && e.allowCreate && w.query !== '' && !Z
    }),
    N = hi(),
    C = me(() => (['small'].includes(N.value) ? 'small' : 'default')),
    q = me({
      get() {
        return w.visible && M.value !== !1
      },
      set(Z) {
        w.visible = Z
      }
    })
  Ze(
    [() => r.value, () => N.value, () => (l == null ? void 0 : l.size)],
    () => {
      tt(() => {
        $()
      })
    }
  ),
    Ze(
      () => e.placeholder,
      (Z) => {
        ;(w.cachedPlaceHolder = w.currentPlaceholder = Z),
          e.multiple &&
            Array.isArray(e.modelValue) &&
            e.modelValue.length > 0 &&
            (w.currentPlaceholder = '')
      }
    ),
    Ze(
      () => e.modelValue,
      (Z, te) => {
        e.multiple &&
          ($(),
          (Z && Z.length > 0) || (b.value && w.query !== '')
            ? (w.currentPlaceholder = '')
            : (w.currentPlaceholder = w.cachedPlaceHolder),
          e.filterable && !e.reserveKeyword && ((w.query = ''), B(w.query))),
          R(),
          e.filterable && !e.multiple && (w.inputLength = 20),
          !Mr(Z, te) &&
            e.validateEvent &&
            (a == null || a.validate('change').catch((le) => pi()))
      },
      { flush: 'post', deep: !0 }
    ),
    Ze(
      () => w.visible,
      (Z) => {
        var te, le, _e, je, qe
        Z
          ? ((le = (te = g.value) == null ? void 0 : te.updatePopper) == null ||
              le.call(te),
            e.filterable &&
              ((w.filteredOptionsCount = w.optionsCount),
              (w.query = e.remote ? '' : w.selectedLabel),
              (je = (_e = E.value) == null ? void 0 : _e.focus) == null ||
                je.call(_e),
              e.multiple
                ? (qe = b.value) == null || qe.focus()
                : w.selectedLabel &&
                  ((w.currentPlaceholder = `${w.selectedLabel}`),
                  (w.selectedLabel = '')),
              B(w.query),
              !e.multiple && !e.remote && ((t.value.query = ''), un(t), un(d))))
          : (e.filterable &&
              (zt(e.filterMethod) && e.filterMethod(''),
              zt(e.remoteMethod) && e.remoteMethod('')),
            b.value && b.value.blur(),
            (w.query = ''),
            (w.previousQuery = null),
            (w.selectedLabel = ''),
            (w.inputLength = 20),
            (w.menuVisibleOnFocus = !1),
            j(),
            tt(() => {
              b.value &&
                b.value.value === '' &&
                w.selected.length === 0 &&
                (w.currentPlaceholder = w.cachedPlaceHolder)
            }),
            e.multiple ||
              (w.selected &&
                (e.filterable &&
                e.allowCreate &&
                w.createdSelected &&
                w.createdLabel
                  ? (w.selectedLabel = w.createdLabel)
                  : (w.selectedLabel = w.selected.currentLabel),
                e.filterable && (w.query = w.selectedLabel)),
              e.filterable && (w.currentPlaceholder = w.cachedPlaceHolder))),
          v.emit('visible-change', Z)
      }
    ),
    Ze(
      () => w.options.entries(),
      () => {
        var Z, te, le
        if (!xi) return
        ;(te = (Z = g.value) == null ? void 0 : Z.updatePopper) == null ||
          te.call(Z),
          e.multiple && $()
        const _e =
          ((le = f.value) == null ? void 0 : le.querySelectorAll('input')) || []
        Array.from(_e).includes(document.activeElement) || R(),
          e.defaultFirstOption &&
            (e.filterable || e.remote) &&
            w.filteredOptionsCount &&
            z()
      },
      { flush: 'post' }
    ),
    Ze(
      () => w.hoverIndex,
      (Z) => {
        qt(Z) && Z > -1 ? (n.value = A.value[Z] || {}) : (n.value = {}),
          A.value.forEach((te) => {
            te.hover = n.value === te
          })
      }
    )
  const $ = () => {
      tt(() => {
        var Z, te
        if (!O.value) return
        const le = O.value.$el.querySelector('input')
        u = u || (le.clientHeight > 0 ? le.clientHeight + 2 : 0)
        const _e = _.value,
          je = Po(N.value || (l == null ? void 0 : l.size)),
          qe = N.value || je === u || u <= 0 ? je : u
        !(le.offsetParent === null) &&
          (le.style.height = `${
            (w.selected.length === 0
              ? qe
              : Math.max(
                  _e ? _e.clientHeight + (_e.clientHeight > qe ? 6 : 0) : 0,
                  qe
                )) - 2
          }px`),
          w.visible &&
            M.value !== !1 &&
            ((te = (Z = g.value) == null ? void 0 : Z.updatePopper) == null ||
              te.call(Z))
      })
    },
    B = async (Z) => {
      if (!(w.previousQuery === Z || w.isOnComposition)) {
        if (
          w.previousQuery === null &&
          (zt(e.filterMethod) || zt(e.remoteMethod))
        ) {
          w.previousQuery = Z
          return
        }
        ;(w.previousQuery = Z),
          tt(() => {
            var te, le
            w.visible &&
              ((le = (te = g.value) == null ? void 0 : te.updatePopper) ==
                null ||
                le.call(te))
          }),
          (w.hoverIndex = -1),
          e.multiple &&
            e.filterable &&
            tt(() => {
              const te = b.value.value.length * 15 + 20
              ;(w.inputLength = e.collapseTags ? Math.min(50, te) : te),
                G(),
                $()
            }),
          e.remote && zt(e.remoteMethod)
            ? ((w.hoverIndex = -1), e.remoteMethod(Z))
            : zt(e.filterMethod)
            ? (e.filterMethod(Z), un(d))
            : ((w.filteredOptionsCount = w.optionsCount),
              (t.value.query = Z),
              un(t),
              un(d)),
          e.defaultFirstOption &&
            (e.filterable || e.remote) &&
            w.filteredOptionsCount &&
            (await tt(), z())
      }
    },
    G = () => {
      w.currentPlaceholder !== '' &&
        (w.currentPlaceholder = b.value.value ? '' : w.cachedPlaceHolder)
    },
    z = () => {
      const Z = A.value.filter(
          (_e) => _e.visible && !_e.disabled && !_e.states.groupDisabled
        ),
        te = Z.find((_e) => _e.created),
        le = Z[0]
      w.hoverIndex = de(A.value, te || le)
    },
    R = () => {
      var Z
      if (e.multiple) w.selectedLabel = ''
      else {
        const le = L(e.modelValue)
        ;(Z = le.props) != null && Z.created
          ? ((w.createdLabel = le.props.value), (w.createdSelected = !0))
          : (w.createdSelected = !1),
          (w.selectedLabel = le.currentLabel),
          (w.selected = le),
          e.filterable && (w.query = w.selectedLabel)
        return
      }
      const te = []
      Array.isArray(e.modelValue) &&
        e.modelValue.forEach((le) => {
          te.push(L(le))
        }),
        (w.selected = te),
        tt(() => {
          $()
        })
    },
    L = (Z) => {
      let te
      const le = Sr(Z).toLowerCase() === 'object',
        _e = Sr(Z).toLowerCase() === 'null',
        je = Sr(Z).toLowerCase() === 'undefined'
      for (let Le = w.cachedOptions.size - 1; Le >= 0; Le--) {
        const Ie = m.value[Le]
        if (
          le ? pt(Ie.value, e.valueKey) === pt(Z, e.valueKey) : Ie.value === Z
        ) {
          te = {
            value: Z,
            currentLabel: Ie.currentLabel,
            isDisabled: Ie.isDisabled
          }
          break
        }
      }
      if (te) return te
      const qe = le ? Z.label : !_e && !je ? Z : '',
        nt = { value: Z, currentLabel: qe }
      return e.multiple && (nt.hitState = !1), nt
    },
    j = () => {
      setTimeout(() => {
        const Z = e.valueKey
        e.multiple
          ? w.selected.length > 0
            ? (w.hoverIndex = Math.min.apply(
                null,
                w.selected.map((te) =>
                  A.value.findIndex((le) => pt(le, Z) === pt(te, Z))
                )
              ))
            : (w.hoverIndex = -1)
          : (w.hoverIndex = A.value.findIndex(
              (te) => Ee(te) === Ee(w.selected)
            ))
      }, 300)
    },
    D = () => {
      var Z, te
      K(),
        (te = (Z = g.value) == null ? void 0 : Z.updatePopper) == null ||
          te.call(Z),
        e.multiple && $()
    },
    K = () => {
      var Z
      w.inputWidth = (Z = O.value) == null ? void 0 : Z.$el.offsetWidth
    },
    U = () => {
      e.filterable &&
        w.query !== w.selectedLabel &&
        ((w.query = w.selectedLabel), B(w.query))
    },
    x = Qr(() => {
      U()
    }, P.value),
    H = Qr((Z) => {
      B(Z.target.value)
    }, P.value),
    V = (Z) => {
      Mr(e.modelValue, Z) || v.emit(fi, Z)
    },
    W = (Z) => {
      if (Z.code !== Zr.delete) {
        if (Z.target.value.length <= 0 && !X()) {
          const te = e.modelValue.slice()
          te.pop(), v.emit(Rt, te), V(te)
        }
        Z.target.value.length === 1 &&
          e.modelValue.length === 0 &&
          (w.currentPlaceholder = w.cachedPlaceHolder)
      }
    },
    J = (Z, te) => {
      const le = w.selected.indexOf(te)
      if (le > -1 && !r.value) {
        const _e = e.modelValue.slice()
        _e.splice(le, 1), v.emit(Rt, _e), V(_e), v.emit('remove-tag', te.value)
      }
      Z.stopPropagation()
    },
    re = (Z) => {
      Z.stopPropagation()
      const te = e.multiple ? [] : ''
      if (!li(te))
        for (const le of w.selected) le.isDisabled && te.push(le.value)
      v.emit(Rt, te),
        V(te),
        (w.hoverIndex = -1),
        (w.visible = !1),
        v.emit('clear')
    },
    ue = (Z) => {
      var te
      if (e.multiple) {
        const le = (e.modelValue || []).slice(),
          _e = de(le, Z.value)
        _e > -1
          ? le.splice(_e, 1)
          : (e.multipleLimit <= 0 || le.length < e.multipleLimit) &&
            le.push(Z.value),
          v.emit(Rt, le),
          V(le),
          Z.created && ((w.query = ''), B(''), (w.inputLength = 20)),
          e.filterable && ((te = b.value) == null || te.focus())
      } else v.emit(Rt, Z.value), V(Z.value), (w.visible = !1)
      ge(),
        !w.visible &&
          tt(() => {
            Oe(Z)
          })
    },
    de = (Z = [], te) => {
      if (!Gr(te)) return Z.indexOf(te)
      const le = e.valueKey
      let _e = -1
      return (
        Z.some((je, qe) =>
          Cn(pt(je, le)) === pt(te, le) ? ((_e = qe), !0) : !1
        ),
        _e
      )
    },
    ge = () => {
      const Z = b.value || O.value
      Z && (Z == null || Z.focus())
    },
    Oe = (Z) => {
      var te, le, _e, je, qe
      const nt = Array.isArray(Z) ? Z[0] : Z
      let Le = null
      if (nt != null && nt.value) {
        const Ie = A.value.filter((Ct) => Ct.value === nt.value)
        Ie.length > 0 && (Le = Ie[0].$el)
      }
      if (g.value && Le) {
        const Ie =
          (je =
            (_e =
              (le = (te = g.value) == null ? void 0 : te.popperRef) == null
                ? void 0
                : le.contentRef) == null
              ? void 0
              : _e.querySelector) == null
            ? void 0
            : je.call(_e, `.${s.be('dropdown', 'wrap')}`)
        Ie && go(Ie, Le)
      }
      ;(qe = o.value) == null || qe.handleScroll()
    },
    Me = (Z) => {
      w.optionsCount++,
        w.filteredOptionsCount++,
        w.options.set(Z.value, Z),
        w.cachedOptions.set(Z.value, Z)
    },
    Ce = (Z, te) => {
      w.options.get(Z) === te &&
        (w.optionsCount--, w.filteredOptionsCount--, w.options.delete(Z))
    },
    Y = (Z) => {
      Z.code !== Zr.backspace && X(!1),
        (w.inputLength = b.value.value.length * 15 + 20),
        $()
    },
    X = (Z) => {
      if (!Array.isArray(w.selected)) return
      const te = w.selected[w.selected.length - 1]
      if (te)
        return Z === !0 || Z === !1
          ? ((te.hitState = Z), Z)
          : ((te.hitState = !te.hitState), te.hitState)
    },
    ne = (Z) => {
      const te = Z.target.value
      if (Z.type === 'compositionend') (w.isOnComposition = !1), tt(() => B(te))
      else {
        const le = te[te.length - 1] || ''
        w.isOnComposition = !po(le)
      }
    },
    ie = () => {
      tt(() => Oe(w.selected))
    },
    ee = (Z) => {
      Ar
        ? (Ar = !1)
        : ((e.automaticDropdown || e.filterable) &&
            (e.filterable && !w.visible && (w.menuVisibleOnFocus = !0),
            (w.visible = !0)),
          v.emit('focus', Z))
    },
    he = () => {
      var Z, te, le
      ;(w.visible = !1),
        (Z = O.value) == null || Z.blur(),
        (le = (te = E.value) == null ? void 0 : te.blur) == null || le.call(te)
    },
    fe = (Z) => {
      setTimeout(() => {
        var te
        if ((te = g.value) != null && te.isFocusInsideContent()) {
          Ar = !0
          return
        }
        w.visible && xe(), v.emit('blur', Z)
      })
    },
    ve = (Z) => {
      re(Z)
    },
    xe = () => {
      w.visible = !1
    },
    Be = (Z) => {
      w.visible && (Z.preventDefault(), Z.stopPropagation(), (w.visible = !1))
    },
    Ae = (Z) => {
      var te
      ;(Z && !w.mouseEnter) ||
        r.value ||
        (w.menuVisibleOnFocus
          ? (w.menuVisibleOnFocus = !1)
          : (!g.value || !g.value.isFocusInsideContent()) &&
            (w.visible = !w.visible),
        w.visible && ((te = b.value || O.value) == null || te.focus()))
    },
    at = () => {
      w.visible ? A.value[w.hoverIndex] && ue(A.value[w.hoverIndex]) : Ae()
    },
    Ee = (Z) => (Gr(Z.value) ? pt(Z.value, e.valueKey) : Z.value),
    Ke = me(() => A.value.filter((Z) => Z.visible).every((Z) => Z.disabled)),
    gt = me(() => w.selected.slice(0, e.maxCollapseTags)),
    xt = me(() => w.selected.slice(e.maxCollapseTags)),
    mt = (Z) => {
      if (!w.visible) {
        w.visible = !0
        return
      }
      if (
        !(w.options.size === 0 || w.filteredOptionsCount === 0) &&
        !w.isOnComposition &&
        !Ke.value
      ) {
        Z === 'next'
          ? (w.hoverIndex++,
            w.hoverIndex === w.options.size && (w.hoverIndex = 0))
          : Z === 'prev' &&
            (w.hoverIndex--,
            w.hoverIndex < 0 && (w.hoverIndex = w.options.size - 1))
        const te = A.value[w.hoverIndex]
        ;(te.disabled === !0 ||
          te.states.groupDisabled === !0 ||
          !te.visible) &&
          mt(Z),
          tt(() => Oe(n.value))
      }
    }
  return {
    optionList: i,
    optionsArray: A,
    selectSize: N,
    handleResize: D,
    debouncedOnInputChange: x,
    debouncedQueryChange: H,
    deletePrevTag: W,
    deleteTag: J,
    deleteSelected: re,
    handleOptionSelect: ue,
    scrollToOption: Oe,
    readonly: h,
    resetInputHeight: $,
    showClose: p,
    iconComponent: T,
    iconReverse: k,
    showNewOption: S,
    collapseTagSize: C,
    setSelected: R,
    managePlaceholder: G,
    selectDisabled: r,
    emptyText: M,
    toggleLastOptionHitState: X,
    resetInputState: Y,
    handleComposition: ne,
    onOptionCreate: Me,
    onOptionDestroy: Ce,
    handleMenuEnter: ie,
    handleFocus: ee,
    blur: he,
    handleBlur: fe,
    handleClearClick: ve,
    handleClose: xe,
    handleKeydownEscape: Be,
    toggleMenu: Ae,
    selectOption: at,
    getValueKey: Ee,
    navigateOptions: mt,
    dropMenuVisible: q,
    queryChange: t,
    groupQueryChange: d,
    showTagList: gt,
    collapseTagList: xt,
    reference: O,
    input: b,
    iOSInput: E,
    tooltipRef: g,
    tags: _,
    selectWrapper: f,
    scrollbar: o,
    handleMouseEnter: () => {
      w.mouseEnter = !0
    },
    handleMouseLeave: () => {
      w.mouseEnter = !1
    }
  }
}
var vl = De({
  name: 'ElOptions',
  emits: ['update-options'],
  setup(e, { slots: w, emit: v }) {
    let y = []
    function s(O, b) {
      if (O.length !== b.length) return !1
      for (const [E] of O.entries()) if (O[E] != b[E]) return !1
      return !0
    }
    return () => {
      var O, b
      const E = (O = w.default) == null ? void 0 : O.call(w),
        g = []
      function _(f) {
        Array.isArray(f) &&
          f.forEach((o) => {
            var n, t, d, i
            const u =
              (n = (o == null ? void 0 : o.type) || {}) == null
                ? void 0
                : n.name
            u === 'ElOptionGroup'
              ? _(
                  !li(o.children) &&
                    !Array.isArray(o.children) &&
                    zt((t = o.children) == null ? void 0 : t.default)
                    ? (d = o.children) == null
                      ? void 0
                      : d.default()
                    : o.children
                )
              : u === 'ElOption'
              ? g.push((i = o.props) == null ? void 0 : i.label)
              : Array.isArray(o.children) && _(o.children)
          })
      }
      return (
        E.length && _((b = E[0]) == null ? void 0 : b.children),
        s(g, y) || ((y = g), v('update-options', g)),
        E
      )
    }
  }
})
const Xr = 'ElSelect',
  yl = De({
    name: Xr,
    componentName: Xr,
    components: {
      ElInput: Dr,
      ElSelectMenu: dl,
      ElOption: Br,
      ElOptions: vl,
      ElTag: jo,
      ElScrollbar: mo,
      ElTooltip: bo,
      ElIcon: Kt
    },
    directives: { ClickOutside: no },
    props: {
      name: String,
      id: String,
      modelValue: {
        type: [Array, String, Number, Boolean, Object],
        default: void 0
      },
      autocomplete: { type: String, default: 'off' },
      automaticDropdown: Boolean,
      size: { type: String, validator: _o },
      effect: { type: String, default: 'light' },
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: { type: String, default: '' },
      popperOptions: { type: Object, default: () => ({}) },
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: { type: Number, default: 0 },
      placeholder: { type: String },
      defaultFirstOption: Boolean,
      reserveKeyword: { type: Boolean, default: !0 },
      valueKey: { type: String, default: 'value' },
      collapseTags: Boolean,
      collapseTagsTooltip: { type: Boolean, default: !1 },
      maxCollapseTags: { type: Number, default: 1 },
      teleported: Oo.teleported,
      persistent: { type: Boolean, default: !0 },
      clearIcon: { type: Xt, default: ji },
      fitInputWidth: { type: Boolean, default: !1 },
      suffixIcon: { type: Xt, default: Di },
      tagType: { ...gi.type, default: 'info' },
      validateEvent: { type: Boolean, default: !0 },
      remoteShowSuffix: { type: Boolean, default: !1 },
      suffixTransition: { type: Boolean, default: !0 },
      placement: { type: String, values: Eo, default: 'bottom-start' }
    },
    emits: [Rt, fi, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],
    setup(e, w) {
      const v = lt('select'),
        y = lt('input'),
        { t: s } = yt(),
        O = hl(e),
        {
          optionList: b,
          optionsArray: E,
          selectSize: g,
          readonly: _,
          handleResize: f,
          collapseTagSize: o,
          debouncedOnInputChange: n,
          debouncedQueryChange: t,
          deletePrevTag: d,
          deleteTag: i,
          deleteSelected: u,
          handleOptionSelect: l,
          scrollToOption: a,
          setSelected: h,
          resetInputHeight: r,
          managePlaceholder: p,
          showClose: T,
          selectDisabled: k,
          iconComponent: P,
          iconReverse: M,
          showNewOption: A,
          emptyText: m,
          toggleLastOptionHitState: S,
          resetInputState: N,
          handleComposition: C,
          onOptionCreate: q,
          onOptionDestroy: $,
          handleMenuEnter: B,
          handleFocus: G,
          blur: z,
          handleBlur: R,
          handleClearClick: L,
          handleClose: j,
          handleKeydownEscape: D,
          toggleMenu: K,
          selectOption: U,
          getValueKey: x,
          navigateOptions: H,
          dropMenuVisible: V,
          reference: W,
          input: J,
          iOSInput: re,
          tooltipRef: ue,
          tags: de,
          selectWrapper: ge,
          scrollbar: Oe,
          queryChange: Me,
          groupQueryChange: Ce,
          handleMouseEnter: Y,
          handleMouseLeave: X,
          showTagList: ne,
          collapseTagList: ie
        } = pl(e, O, w),
        { focus: ee } = Lo(W),
        {
          inputWidth: he,
          selected: fe,
          inputLength: ve,
          filteredOptionsCount: xe,
          visible: Be,
          selectedLabel: Ae,
          hoverIndex: at,
          query: Ee,
          inputHovering: Ke,
          currentPlaceholder: gt,
          menuVisibleOnFocus: xt,
          isOnComposition: mt,
          options: bt,
          cachedOptions: jt,
          optionsCount: Z,
          prefixWidth: te
        } = Rr(O),
        le = me(() => {
          const Le = [v.b()],
            Ie = oe(g)
          return (
            Ie && Le.push(v.m(Ie)), e.disabled && Le.push(v.m('disabled')), Le
          )
        }),
        _e = me(() => ({ maxWidth: `${oe(he) - 32}px`, width: '100%' })),
        je = me(() => ({
          maxWidth: `${oe(he) > 123 ? oe(he) - 123 : oe(he) - 75}px`
        }))
      xr(
        Bn,
        jn({
          props: e,
          options: bt,
          optionsArray: E,
          cachedOptions: jt,
          optionsCount: Z,
          filteredOptionsCount: xe,
          hoverIndex: at,
          handleOptionSelect: l,
          onOptionCreate: q,
          onOptionDestroy: $,
          selectWrapper: ge,
          selected: fe,
          setSelected: h,
          queryChange: Me,
          groupQueryChange: Ce
        })
      ),
        Dn(() => {
          ;(O.cachedPlaceHolder = gt.value =
            e.placeholder || (() => s('el.select.placeholder'))),
            e.multiple &&
              Array.isArray(e.modelValue) &&
              e.modelValue.length > 0 &&
              (gt.value = ''),
            oi(ge, f),
            e.remote && e.multiple && r(),
            tt(() => {
              const Le = W.value && W.value.$el
              if (
                Le &&
                ((he.value = Le.getBoundingClientRect().width), w.slots.prefix)
              ) {
                const Ie = Le.querySelector(`.${y.e('prefix')}`)
                te.value = Math.max(Ie.getBoundingClientRect().width + 11, 30)
              }
            }),
            h()
        }),
        e.multiple && !Array.isArray(e.modelValue) && w.emit(Rt, []),
        !e.multiple && Array.isArray(e.modelValue) && w.emit(Rt, '')
      const qe = me(() => {
        var Le, Ie
        return (Ie = (Le = ue.value) == null ? void 0 : Le.popperRef) == null
          ? void 0
          : Ie.contentRef
      })
      return {
        isIOS: Bi,
        onOptionsRendered: (Le) => {
          b.value = Le
        },
        prefixWidth: te,
        selectSize: g,
        readonly: _,
        handleResize: f,
        collapseTagSize: o,
        debouncedOnInputChange: n,
        debouncedQueryChange: t,
        deletePrevTag: d,
        deleteTag: i,
        deleteSelected: u,
        handleOptionSelect: l,
        scrollToOption: a,
        inputWidth: he,
        selected: fe,
        inputLength: ve,
        filteredOptionsCount: xe,
        visible: Be,
        selectedLabel: Ae,
        hoverIndex: at,
        query: Ee,
        inputHovering: Ke,
        currentPlaceholder: gt,
        menuVisibleOnFocus: xt,
        isOnComposition: mt,
        options: bt,
        resetInputHeight: r,
        managePlaceholder: p,
        showClose: T,
        selectDisabled: k,
        iconComponent: P,
        iconReverse: M,
        showNewOption: A,
        emptyText: m,
        toggleLastOptionHitState: S,
        resetInputState: N,
        handleComposition: C,
        handleMenuEnter: B,
        handleFocus: G,
        blur: z,
        handleBlur: R,
        handleClearClick: L,
        handleClose: j,
        handleKeydownEscape: D,
        toggleMenu: K,
        selectOption: U,
        getValueKey: x,
        navigateOptions: H,
        dropMenuVisible: V,
        focus: ee,
        reference: W,
        input: J,
        iOSInput: re,
        tooltipRef: ue,
        popperPaneRef: qe,
        tags: de,
        selectWrapper: ge,
        scrollbar: Oe,
        wrapperKls: le,
        selectTagsStyle: _e,
        nsSelect: v,
        tagTextStyle: je,
        handleMouseEnter: Y,
        handleMouseLeave: X,
        showTagList: ne,
        collapseTagList: ie
      }
    }
  }),
  gl = ['disabled', 'autocomplete'],
  ml = ['disabled'],
  bl = {
    style: {
      height: '100%',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }
  }
function _l(e, w, v, y, s, O) {
  const b = st('el-tag'),
    E = st('el-tooltip'),
    g = st('el-icon'),
    _ = st('el-input'),
    f = st('el-option'),
    o = st('el-options'),
    n = st('el-scrollbar'),
    t = st('el-select-menu'),
    d = $i('click-outside')
  return Ht(
    (ae(),
    we(
      'div',
      {
        ref: 'selectWrapper',
        class: ye(e.wrapperKls),
        onMouseenter:
          w[21] ||
          (w[21] = (...i) => e.handleMouseEnter && e.handleMouseEnter(...i)),
        onMouseleave:
          w[22] ||
          (w[22] = (...i) => e.handleMouseLeave && e.handleMouseLeave(...i)),
        onClick:
          w[23] ||
          (w[23] = ht((...i) => e.toggleMenu && e.toggleMenu(...i), ['stop']))
      },
      [
        pe(
          E,
          {
            ref: 'tooltipRef',
            visible: e.dropMenuVisible,
            placement: e.placement,
            teleported: e.teleported,
            'popper-class': [e.nsSelect.e('popper'), e.popperClass],
            'popper-options': e.popperOptions,
            'fallback-placements': [
              'bottom-start',
              'top-start',
              'right',
              'left'
            ],
            effect: e.effect,
            pure: '',
            trigger: 'click',
            transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
            'stop-popper-mouse-event': !1,
            'gpu-acceleration': !1,
            persistent: e.persistent,
            onShow: e.handleMenuEnter
          },
          {
            default: ce(() => [
              $e(
                'div',
                {
                  class: 'select-trigger',
                  onMouseenter:
                    w[19] || (w[19] = (i) => (e.inputHovering = !0)),
                  onMouseleave: w[20] || (w[20] = (i) => (e.inputHovering = !1))
                },
                [
                  e.multiple
                    ? (ae(),
                      we(
                        'div',
                        {
                          key: 0,
                          ref: 'tags',
                          class: ye([
                            e.nsSelect.e('tags'),
                            e.nsSelect.is('disabled', e.selectDisabled)
                          ]),
                          style: wt(e.selectTagsStyle)
                        },
                        [
                          e.collapseTags && e.selected.length
                            ? (ae(),
                              Pe(
                                Pn,
                                { key: 0, onAfterLeave: e.resetInputHeight },
                                {
                                  default: ce(() => [
                                    $e(
                                      'span',
                                      {
                                        class: ye([
                                          e.nsSelect.b('tags-wrapper'),
                                          {
                                            'has-prefix':
                                              e.prefixWidth && e.selected.length
                                          }
                                        ])
                                      },
                                      [
                                        (ae(!0),
                                        we(
                                          Ut,
                                          null,
                                          Qt(
                                            e.showTagList,
                                            (i) => (
                                              ae(),
                                              Pe(
                                                b,
                                                {
                                                  key: e.getValueKey(i),
                                                  closable:
                                                    !e.selectDisabled &&
                                                    !i.isDisabled,
                                                  size: e.collapseTagSize,
                                                  hit: i.hitState,
                                                  type: e.tagType,
                                                  'disable-transitions': '',
                                                  onClose: (u) =>
                                                    e.deleteTag(u, i)
                                                },
                                                {
                                                  default: ce(() => [
                                                    $e(
                                                      'span',
                                                      {
                                                        class: ye(
                                                          e.nsSelect.e(
                                                            'tags-text'
                                                          )
                                                        ),
                                                        style: wt(
                                                          e.tagTextStyle
                                                        )
                                                      },
                                                      Ue(i.currentLabel),
                                                      7
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                [
                                                  'closable',
                                                  'size',
                                                  'hit',
                                                  'type',
                                                  'onClose'
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                        e.selected.length > e.maxCollapseTags
                                          ? (ae(),
                                            Pe(
                                              b,
                                              {
                                                key: 0,
                                                closable: !1,
                                                size: e.collapseTagSize,
                                                type: e.tagType,
                                                'disable-transitions': ''
                                              },
                                              {
                                                default: ce(() => [
                                                  e.collapseTagsTooltip
                                                    ? (ae(),
                                                      Pe(
                                                        E,
                                                        {
                                                          key: 0,
                                                          disabled:
                                                            e.dropMenuVisible,
                                                          'fallback-placements':
                                                            [
                                                              'bottom',
                                                              'top',
                                                              'right',
                                                              'left'
                                                            ],
                                                          effect: e.effect,
                                                          placement: 'bottom',
                                                          teleported:
                                                            e.teleported
                                                        },
                                                        {
                                                          default: ce(() => [
                                                            $e(
                                                              'span',
                                                              {
                                                                class: ye(
                                                                  e.nsSelect.e(
                                                                    'tags-text'
                                                                  )
                                                                )
                                                              },
                                                              '+ ' +
                                                                Ue(
                                                                  e.selected
                                                                    .length -
                                                                    e.maxCollapseTags
                                                                ),
                                                              3
                                                            )
                                                          ]),
                                                          content: ce(() => [
                                                            $e(
                                                              'div',
                                                              {
                                                                class: ye(
                                                                  e.nsSelect.e(
                                                                    'collapse-tags'
                                                                  )
                                                                )
                                                              },
                                                              [
                                                                (ae(!0),
                                                                we(
                                                                  Ut,
                                                                  null,
                                                                  Qt(
                                                                    e.collapseTagList,
                                                                    (i) => (
                                                                      ae(),
                                                                      we(
                                                                        'div',
                                                                        {
                                                                          key: e.getValueKey(
                                                                            i
                                                                          ),
                                                                          class:
                                                                            ye(
                                                                              e.nsSelect.e(
                                                                                'collapse-tag'
                                                                              )
                                                                            )
                                                                        },
                                                                        [
                                                                          pe(
                                                                            b,
                                                                            {
                                                                              class:
                                                                                'in-tooltip',
                                                                              closable:
                                                                                !e.selectDisabled &&
                                                                                !i.isDisabled,
                                                                              size: e.collapseTagSize,
                                                                              hit: i.hitState,
                                                                              type: e.tagType,
                                                                              'disable-transitions':
                                                                                '',
                                                                              style:
                                                                                {
                                                                                  margin:
                                                                                    '2px'
                                                                                },
                                                                              onClose:
                                                                                (
                                                                                  u
                                                                                ) =>
                                                                                  e.deleteTag(
                                                                                    u,
                                                                                    i
                                                                                  )
                                                                            },
                                                                            {
                                                                              default:
                                                                                ce(
                                                                                  () => [
                                                                                    $e(
                                                                                      'span',
                                                                                      {
                                                                                        class:
                                                                                          ye(
                                                                                            e.nsSelect.e(
                                                                                              'tags-text'
                                                                                            )
                                                                                          ),
                                                                                        style:
                                                                                          wt(
                                                                                            {
                                                                                              maxWidth:
                                                                                                e.inputWidth -
                                                                                                75 +
                                                                                                'px'
                                                                                            }
                                                                                          )
                                                                                      },
                                                                                      Ue(
                                                                                        i.currentLabel
                                                                                      ),
                                                                                      7
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                              _: 2
                                                                            },
                                                                            1032,
                                                                            [
                                                                              'closable',
                                                                              'size',
                                                                              'hit',
                                                                              'type',
                                                                              'onClose'
                                                                            ]
                                                                          )
                                                                        ],
                                                                        2
                                                                      )
                                                                    )
                                                                  ),
                                                                  128
                                                                ))
                                                              ],
                                                              2
                                                            )
                                                          ]),
                                                          _: 1
                                                        },
                                                        8,
                                                        [
                                                          'disabled',
                                                          'effect',
                                                          'teleported'
                                                        ]
                                                      ))
                                                    : (ae(),
                                                      we(
                                                        'span',
                                                        {
                                                          key: 1,
                                                          class: ye(
                                                            e.nsSelect.e(
                                                              'tags-text'
                                                            )
                                                          )
                                                        },
                                                        '+ ' +
                                                          Ue(
                                                            e.selected.length -
                                                              e.maxCollapseTags
                                                          ),
                                                        3
                                                      ))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['size', 'type']
                                            ))
                                          : Re('v-if', !0)
                                      ],
                                      2
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['onAfterLeave']
                              ))
                            : Re('v-if', !0),
                          e.collapseTags
                            ? Re('v-if', !0)
                            : (ae(),
                              Pe(
                                Pn,
                                { key: 1, onAfterLeave: e.resetInputHeight },
                                {
                                  default: ce(() => [
                                    $e(
                                      'span',
                                      {
                                        class: ye([
                                          e.nsSelect.b('tags-wrapper'),
                                          {
                                            'has-prefix':
                                              e.prefixWidth && e.selected.length
                                          }
                                        ]),
                                        style: wt(
                                          e.prefixWidth && e.selected.length
                                            ? {
                                                marginLeft: `${e.prefixWidth}px`
                                              }
                                            : ''
                                        )
                                      },
                                      [
                                        (ae(!0),
                                        we(
                                          Ut,
                                          null,
                                          Qt(
                                            e.selected,
                                            (i) => (
                                              ae(),
                                              Pe(
                                                b,
                                                {
                                                  key: e.getValueKey(i),
                                                  closable:
                                                    !e.selectDisabled &&
                                                    !i.isDisabled,
                                                  size: e.collapseTagSize,
                                                  hit: i.hitState,
                                                  type: e.tagType,
                                                  'disable-transitions': '',
                                                  onClose: (u) =>
                                                    e.deleteTag(u, i)
                                                },
                                                {
                                                  default: ce(() => [
                                                    $e(
                                                      'span',
                                                      {
                                                        class: ye(
                                                          e.nsSelect.e(
                                                            'tags-text'
                                                          )
                                                        ),
                                                        style: wt({
                                                          maxWidth:
                                                            e.inputWidth -
                                                            75 +
                                                            'px'
                                                        })
                                                      },
                                                      Ue(i.currentLabel),
                                                      7
                                                    )
                                                  ]),
                                                  _: 2
                                                },
                                                1032,
                                                [
                                                  'closable',
                                                  'size',
                                                  'hit',
                                                  'type',
                                                  'onClose'
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ],
                                      6
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ['onAfterLeave']
                              )),
                          e.filterable && !e.selectDisabled
                            ? Ht(
                                (ae(),
                                we(
                                  'input',
                                  {
                                    key: 2,
                                    ref: 'input',
                                    'onUpdate:modelValue':
                                      w[0] || (w[0] = (i) => (e.query = i)),
                                    type: 'text',
                                    class: ye([
                                      e.nsSelect.e('input'),
                                      e.nsSelect.is(e.selectSize),
                                      e.nsSelect.is(
                                        'disabled',
                                        e.selectDisabled
                                      )
                                    ]),
                                    disabled: e.selectDisabled,
                                    autocomplete: e.autocomplete,
                                    style: wt({
                                      marginLeft: `${e.prefixWidth}px`,
                                      flexGrow: 1,
                                      width: `${
                                        e.inputLength / (e.inputWidth - 32)
                                      }%`,
                                      maxWidth: `${e.inputWidth - 42}px`
                                    }),
                                    onFocus:
                                      w[1] ||
                                      (w[1] = (...i) =>
                                        e.handleFocus && e.handleFocus(...i)),
                                    onBlur:
                                      w[2] ||
                                      (w[2] = (...i) =>
                                        e.handleBlur && e.handleBlur(...i)),
                                    onKeyup:
                                      w[3] ||
                                      (w[3] = (...i) =>
                                        e.managePlaceholder &&
                                        e.managePlaceholder(...i)),
                                    onKeydown: [
                                      w[4] ||
                                        (w[4] = (...i) =>
                                          e.resetInputState &&
                                          e.resetInputState(...i)),
                                      w[5] ||
                                        (w[5] = ut(
                                          ht(
                                            (i) => e.navigateOptions('next'),
                                            ['prevent']
                                          ),
                                          ['down']
                                        )),
                                      w[6] ||
                                        (w[6] = ut(
                                          ht(
                                            (i) => e.navigateOptions('prev'),
                                            ['prevent']
                                          ),
                                          ['up']
                                        )),
                                      w[7] ||
                                        (w[7] = ut(
                                          (...i) =>
                                            e.handleKeydownEscape &&
                                            e.handleKeydownEscape(...i),
                                          ['esc']
                                        )),
                                      w[8] ||
                                        (w[8] = ut(
                                          ht(
                                            (...i) =>
                                              e.selectOption &&
                                              e.selectOption(...i),
                                            ['stop', 'prevent']
                                          ),
                                          ['enter']
                                        )),
                                      w[9] ||
                                        (w[9] = ut(
                                          (...i) =>
                                            e.deletePrevTag &&
                                            e.deletePrevTag(...i),
                                          ['delete']
                                        )),
                                      w[10] ||
                                        (w[10] = ut(
                                          (i) => (e.visible = !1),
                                          ['tab']
                                        ))
                                    ],
                                    onCompositionstart:
                                      w[11] ||
                                      (w[11] = (...i) =>
                                        e.handleComposition &&
                                        e.handleComposition(...i)),
                                    onCompositionupdate:
                                      w[12] ||
                                      (w[12] = (...i) =>
                                        e.handleComposition &&
                                        e.handleComposition(...i)),
                                    onCompositionend:
                                      w[13] ||
                                      (w[13] = (...i) =>
                                        e.handleComposition &&
                                        e.handleComposition(...i)),
                                    onInput:
                                      w[14] ||
                                      (w[14] = (...i) =>
                                        e.debouncedQueryChange &&
                                        e.debouncedQueryChange(...i))
                                  },
                                  null,
                                  46,
                                  gl
                                )),
                                [[zi, e.query]]
                              )
                            : Re('v-if', !0)
                        ],
                        6
                      ))
                    : Re('v-if', !0),
                  Re(
                    ' fix: https://github.com/element-plus/element-plus/issues/11415 '
                  ),
                  e.isIOS && !e.multiple && e.filterable && e.readonly
                    ? (ae(),
                      we(
                        'input',
                        {
                          key: 1,
                          ref: 'iOSInput',
                          class: ye([
                            e.nsSelect.e('input'),
                            e.nsSelect.is(e.selectSize),
                            e.nsSelect.em('input', 'iOS')
                          ]),
                          disabled: e.selectDisabled,
                          type: 'text'
                        },
                        null,
                        10,
                        ml
                      ))
                    : Re('v-if', !0),
                  pe(
                    _,
                    {
                      id: e.id,
                      ref: 'reference',
                      modelValue: e.selectedLabel,
                      'onUpdate:modelValue':
                        w[15] || (w[15] = (i) => (e.selectedLabel = i)),
                      type: 'text',
                      placeholder:
                        typeof e.currentPlaceholder == 'function'
                          ? e.currentPlaceholder()
                          : e.currentPlaceholder,
                      name: e.name,
                      autocomplete: e.autocomplete,
                      size: e.selectSize,
                      disabled: e.selectDisabled,
                      readonly: e.readonly,
                      'validate-event': !1,
                      class: ye([e.nsSelect.is('focus', e.visible)]),
                      tabindex: e.multiple && e.filterable ? -1 : void 0,
                      onFocus: e.handleFocus,
                      onBlur: e.handleBlur,
                      onInput: e.debouncedOnInputChange,
                      onPaste: e.debouncedOnInputChange,
                      onCompositionstart: e.handleComposition,
                      onCompositionupdate: e.handleComposition,
                      onCompositionend: e.handleComposition,
                      onKeydown: [
                        w[16] ||
                          (w[16] = ut(
                            ht(
                              (i) => e.navigateOptions('next'),
                              ['stop', 'prevent']
                            ),
                            ['down']
                          )),
                        w[17] ||
                          (w[17] = ut(
                            ht(
                              (i) => e.navigateOptions('prev'),
                              ['stop', 'prevent']
                            ),
                            ['up']
                          )),
                        ut(ht(e.selectOption, ['stop', 'prevent']), ['enter']),
                        ut(e.handleKeydownEscape, ['esc']),
                        w[18] || (w[18] = ut((i) => (e.visible = !1), ['tab']))
                      ]
                    },
                    Fi(
                      {
                        suffix: ce(() => [
                          e.iconComponent && !e.showClose
                            ? (ae(),
                              Pe(
                                g,
                                {
                                  key: 0,
                                  class: ye([
                                    e.nsSelect.e('caret'),
                                    e.nsSelect.e('icon'),
                                    e.iconReverse
                                  ])
                                },
                                {
                                  default: ce(() => [
                                    (ae(), Pe(Ln(e.iconComponent)))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['class']
                              ))
                            : Re('v-if', !0),
                          e.showClose && e.clearIcon
                            ? (ae(),
                              Pe(
                                g,
                                {
                                  key: 1,
                                  class: ye([
                                    e.nsSelect.e('caret'),
                                    e.nsSelect.e('icon')
                                  ]),
                                  onClick: e.handleClearClick
                                },
                                {
                                  default: ce(() => [
                                    (ae(), Pe(Ln(e.clearIcon)))
                                  ]),
                                  _: 1
                                },
                                8,
                                ['class', 'onClick']
                              ))
                            : Re('v-if', !0)
                        ]),
                        _: 2
                      },
                      [
                        e.$slots.prefix
                          ? {
                              name: 'prefix',
                              fn: ce(() => [
                                $e('div', bl, [ft(e.$slots, 'prefix')])
                              ])
                            }
                          : void 0
                      ]
                    ),
                    1032,
                    [
                      'id',
                      'modelValue',
                      'placeholder',
                      'name',
                      'autocomplete',
                      'size',
                      'disabled',
                      'readonly',
                      'class',
                      'tabindex',
                      'onFocus',
                      'onBlur',
                      'onInput',
                      'onPaste',
                      'onCompositionstart',
                      'onCompositionupdate',
                      'onCompositionend',
                      'onKeydown'
                    ]
                  )
                ],
                32
              )
            ]),
            content: ce(() => [
              pe(t, null, {
                default: ce(() => [
                  Ht(
                    pe(
                      n,
                      {
                        ref: 'scrollbar',
                        tag: 'ul',
                        'wrap-class': e.nsSelect.be('dropdown', 'wrap'),
                        'view-class': e.nsSelect.be('dropdown', 'list'),
                        class: ye([
                          e.nsSelect.is(
                            'empty',
                            !e.allowCreate &&
                              !!e.query &&
                              e.filteredOptionsCount === 0
                          )
                        ])
                      },
                      {
                        default: ce(() => [
                          e.showNewOption
                            ? (ae(),
                              Pe(
                                f,
                                { key: 0, value: e.query, created: !0 },
                                null,
                                8,
                                ['value']
                              ))
                            : Re('v-if', !0),
                          pe(
                            o,
                            { onUpdateOptions: e.onOptionsRendered },
                            {
                              default: ce(() => [ft(e.$slots, 'default')]),
                              _: 3
                            },
                            8,
                            ['onUpdateOptions']
                          )
                        ]),
                        _: 3
                      },
                      8,
                      ['wrap-class', 'view-class', 'class']
                    ),
                    [[Rn, e.options.size > 0 && !e.loading]]
                  ),
                  e.emptyText &&
                  (!e.allowCreate ||
                    e.loading ||
                    (e.allowCreate && e.options.size === 0))
                    ? (ae(),
                      we(
                        Ut,
                        { key: 0 },
                        [
                          e.$slots.empty
                            ? ft(e.$slots, 'empty', { key: 0 })
                            : (ae(),
                              we(
                                'p',
                                {
                                  key: 1,
                                  class: ye(e.nsSelect.be('dropdown', 'empty'))
                                },
                                Ue(e.emptyText),
                                3
                              ))
                        ],
                        64
                      ))
                    : Re('v-if', !0)
                ]),
                _: 3
              })
            ]),
            _: 3
          },
          8,
          [
            'visible',
            'placement',
            'teleported',
            'popper-class',
            'popper-options',
            'effect',
            'transition',
            'persistent',
            'onShow'
          ]
        )
      ],
      34
    )),
    [[d, e.handleClose, e.popperPaneRef]]
  )
}
var Ol = ct(yl, [
  ['render', _l],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue'
  ]
])
const El = De({
  name: 'ElOptionGroup',
  componentName: 'ElOptionGroup',
  props: { label: String, disabled: { type: Boolean, default: !1 } },
  setup(e) {
    const w = lt('select'),
      v = Se(!0),
      y = xn(),
      s = Se([])
    xr(bi, jn({ ...Rr(e) }))
    const O = fn(Bn)
    Dn(() => {
      s.value = b(y.subTree)
    })
    const b = (g) => {
        const _ = []
        return (
          Array.isArray(g.children) &&
            g.children.forEach((f) => {
              var o
              f.type &&
              f.type.name === 'ElOption' &&
              f.component &&
              f.component.proxy
                ? _.push(f.component.proxy)
                : (o = f.children) != null && o.length && _.push(...b(f))
            }),
          _
        )
      },
      { groupQueryChange: E } = Cn(O)
    return (
      Ze(
        E,
        () => {
          v.value = s.value.some((g) => g.visible === !0)
        },
        { flush: 'post' }
      ),
      { visible: v, ns: w }
    )
  }
})
function wl(e, w, v, y, s, O) {
  return Ht(
    (ae(),
    we(
      'ul',
      { class: ye(e.ns.be('group', 'wrap')) },
      [
        $e('li', { class: ye(e.ns.be('group', 'title')) }, Ue(e.label), 3),
        $e('li', null, [
          $e('ul', { class: ye(e.ns.b('group')) }, [ft(e.$slots, 'default')], 2)
        ])
      ],
      2
    )),
    [[Rn, e.visible]]
  )
}
var _i = ct(El, [
  ['render', wl],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue'
  ]
])
const $r = qn(Ol, { Option: Br, OptionGroup: _i }),
  zr = ai(Br)
ai(_i)
const Fr = () => fn(mi, {}),
  Sl = Lt({
    pageSize: { type: Number, required: !0 },
    pageSizes: {
      type: ui(Array),
      default: () => si([10, 20, 30, 40, 50, 100])
    },
    popperClass: { type: String },
    disabled: Boolean,
    size: { type: String, values: qr }
  }),
  Al = De({ name: 'ElPaginationSizes' }),
  Tl = De({
    ...Al,
    props: Sl,
    emits: ['page-size-change'],
    setup(e, { emit: w }) {
      const v = e,
        { t: y } = yt(),
        s = lt('pagination'),
        O = Fr(),
        b = Se(v.pageSize)
      Ze(
        () => v.pageSizes,
        (_, f) => {
          if (!Mr(_, f) && Array.isArray(_)) {
            const o = _.includes(v.pageSize) ? v.pageSize : v.pageSizes[0]
            w('page-size-change', o)
          }
        }
      ),
        Ze(
          () => v.pageSize,
          (_) => {
            b.value = _
          }
        )
      const E = me(() => v.pageSizes)
      function g(_) {
        var f
        _ !== b.value &&
          ((b.value = _),
          (f = O.handleSizeChange) == null || f.call(O, Number(_)))
      }
      return (_, f) => (
        ae(),
        we(
          'span',
          { class: ye(oe(s).e('sizes')) },
          [
            pe(
              oe($r),
              {
                'model-value': b.value,
                disabled: _.disabled,
                'popper-class': _.popperClass,
                size: _.size,
                'validate-event': !1,
                onChange: g
              },
              {
                default: ce(() => [
                  (ae(!0),
                  we(
                    Ut,
                    null,
                    Qt(
                      oe(E),
                      (o) => (
                        ae(),
                        Pe(
                          oe(zr),
                          {
                            key: o,
                            value: o,
                            label: o + oe(y)('el.pagination.pagesize')
                          },
                          null,
                          8,
                          ['value', 'label']
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              8,
              ['model-value', 'disabled', 'popper-class', 'size']
            )
          ],
          2
        )
      )
    }
  })
var kl = ct(Tl, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue'
  ]
])
const Nl = Lt({ size: { type: String, values: qr } }),
  Pl = ['disabled'],
  Ll = De({ name: 'ElPaginationJumper' }),
  Cl = De({
    ...Ll,
    props: Nl,
    setup(e) {
      const { t: w } = yt(),
        v = lt('pagination'),
        { pageCount: y, disabled: s, currentPage: O, changeEvent: b } = Fr(),
        E = Se(),
        g = me(() => {
          var o
          return (o = E.value) != null ? o : O == null ? void 0 : O.value
        })
      function _(o) {
        E.value = o ? +o : ''
      }
      function f(o) {
        ;(o = Math.trunc(+o)), b == null || b(o), (E.value = void 0)
      }
      return (o, n) => (
        ae(),
        we(
          'span',
          { class: ye(oe(v).e('jump')), disabled: oe(s) },
          [
            $e(
              'span',
              { class: ye([oe(v).e('goto')]) },
              Ue(oe(w)('el.pagination.goto')),
              3
            ),
            pe(
              oe(Dr),
              {
                size: o.size,
                class: ye([oe(v).e('editor'), oe(v).is('in-pagination')]),
                min: 1,
                max: oe(y),
                disabled: oe(s),
                'model-value': oe(g),
                'validate-event': !1,
                label: oe(w)('el.pagination.page'),
                type: 'number',
                'onUpdate:modelValue': _,
                onChange: f
              },
              null,
              8,
              ['size', 'class', 'max', 'disabled', 'model-value', 'label']
            ),
            $e(
              'span',
              { class: ye([oe(v).e('classifier')]) },
              Ue(oe(w)('el.pagination.pageClassifier')),
              3
            )
          ],
          10,
          Pl
        )
      )
    }
  })
var Ml = ct(Cl, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue'
  ]
])
const Il = Lt({ total: { type: Number, default: 1e3 } }),
  ql = ['disabled'],
  Rl = De({ name: 'ElPaginationTotal' }),
  xl = De({
    ...Rl,
    props: Il,
    setup(e) {
      const { t: w } = yt(),
        v = lt('pagination'),
        { disabled: y } = Fr()
      return (s, O) => (
        ae(),
        we(
          'span',
          { class: ye(oe(v).e('total')), disabled: oe(y) },
          Ue(oe(w)('el.pagination.total', { total: s.total })),
          11,
          ql
        )
      )
    }
  })
var jl = ct(xl, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue'
  ]
])
const Dl = Lt({
    currentPage: { type: Number, default: 1 },
    pageCount: { type: Number, required: !0 },
    pagerCount: { type: Number, default: 7 },
    disabled: Boolean
  }),
  Bl = ['onKeyup'],
  $l = ['aria-current', 'aria-label', 'tabindex'],
  zl = ['tabindex', 'aria-label'],
  Fl = ['aria-current', 'aria-label', 'tabindex'],
  Ul = ['tabindex', 'aria-label'],
  Hl = ['aria-current', 'aria-label', 'tabindex'],
  Kl = De({ name: 'ElPaginationPager' }),
  Vl = De({
    ...Kl,
    props: Dl,
    emits: ['change'],
    setup(e, { emit: w }) {
      const v = e,
        y = lt('pager'),
        s = lt('icon'),
        { t: O } = yt(),
        b = Se(!1),
        E = Se(!1),
        g = Se(!1),
        _ = Se(!1),
        f = Se(!1),
        o = Se(!1),
        n = me(() => {
          const r = v.pagerCount,
            p = (r - 1) / 2,
            T = Number(v.currentPage),
            k = Number(v.pageCount)
          let P = !1,
            M = !1
          k > r && (T > r - p && (P = !0), T < k - p && (M = !0))
          const A = []
          if (P && !M) {
            const m = k - (r - 2)
            for (let S = m; S < k; S++) A.push(S)
          } else if (!P && M) for (let m = 2; m < r; m++) A.push(m)
          else if (P && M) {
            const m = Math.floor(r / 2) - 1
            for (let S = T - m; S <= T + m; S++) A.push(S)
          } else for (let m = 2; m < k; m++) A.push(m)
          return A
        }),
        t = me(() => [
          'more',
          'btn-quickprev',
          s.b(),
          y.is('disabled', v.disabled)
        ]),
        d = me(() => [
          'more',
          'btn-quicknext',
          s.b(),
          y.is('disabled', v.disabled)
        ]),
        i = me(() => (v.disabled ? -1 : 0))
      Ui(() => {
        const r = (v.pagerCount - 1) / 2
        ;(b.value = !1),
          (E.value = !1),
          v.pageCount > v.pagerCount &&
            (v.currentPage > v.pagerCount - r && (b.value = !0),
            v.currentPage < v.pageCount - r && (E.value = !0))
      })
      function u(r = !1) {
        v.disabled || (r ? (g.value = !0) : (_.value = !0))
      }
      function l(r = !1) {
        r ? (f.value = !0) : (o.value = !0)
      }
      function a(r) {
        const p = r.target
        if (
          p.tagName.toLowerCase() === 'li' &&
          Array.from(p.classList).includes('number')
        ) {
          const T = Number(p.textContent)
          T !== v.currentPage && w('change', T)
        } else
          p.tagName.toLowerCase() === 'li' &&
            Array.from(p.classList).includes('more') &&
            h(r)
      }
      function h(r) {
        const p = r.target
        if (p.tagName.toLowerCase() === 'ul' || v.disabled) return
        let T = Number(p.textContent)
        const k = v.pageCount,
          P = v.currentPage,
          M = v.pagerCount - 2
        p.className.includes('more') &&
          (p.className.includes('quickprev')
            ? (T = P - M)
            : p.className.includes('quicknext') && (T = P + M)),
          Number.isNaN(+T) || (T < 1 && (T = 1), T > k && (T = k)),
          T !== P && w('change', T)
      }
      return (r, p) => (
        ae(),
        we(
          'ul',
          { class: ye(oe(y).b()), onClick: h, onKeyup: ut(a, ['enter']) },
          [
            r.pageCount > 0
              ? (ae(),
                we(
                  'li',
                  {
                    key: 0,
                    class: ye([
                      [
                        oe(y).is('active', r.currentPage === 1),
                        oe(y).is('disabled', r.disabled)
                      ],
                      'number'
                    ]),
                    'aria-current': r.currentPage === 1,
                    'aria-label': oe(O)('el.pagination.currentPage', {
                      pager: 1
                    }),
                    tabindex: oe(i)
                  },
                  ' 1 ',
                  10,
                  $l
                ))
              : Re('v-if', !0),
            b.value
              ? (ae(),
                we(
                  'li',
                  {
                    key: 1,
                    class: ye(oe(t)),
                    tabindex: oe(i),
                    'aria-label': oe(O)('el.pagination.prevPages', {
                      pager: r.pagerCount - 2
                    }),
                    onMouseenter: p[0] || (p[0] = (T) => u(!0)),
                    onMouseleave: p[1] || (p[1] = (T) => (g.value = !1)),
                    onFocus: p[2] || (p[2] = (T) => l(!0)),
                    onBlur: p[3] || (p[3] = (T) => (f.value = !1))
                  },
                  [
                    (g.value || f.value) && !r.disabled
                      ? (ae(), Pe(oe(Hi), { key: 0 }))
                      : (ae(), Pe(oe(Yr), { key: 1 }))
                  ],
                  42,
                  zl
                ))
              : Re('v-if', !0),
            (ae(!0),
            we(
              Ut,
              null,
              Qt(
                oe(n),
                (T) => (
                  ae(),
                  we(
                    'li',
                    {
                      key: T,
                      class: ye([
                        [
                          oe(y).is('active', r.currentPage === T),
                          oe(y).is('disabled', r.disabled)
                        ],
                        'number'
                      ]),
                      'aria-current': r.currentPage === T,
                      'aria-label': oe(O)('el.pagination.currentPage', {
                        pager: T
                      }),
                      tabindex: oe(i)
                    },
                    Ue(T),
                    11,
                    Fl
                  )
                )
              ),
              128
            )),
            E.value
              ? (ae(),
                we(
                  'li',
                  {
                    key: 2,
                    class: ye(oe(d)),
                    tabindex: oe(i),
                    'aria-label': oe(O)('el.pagination.nextPages', {
                      pager: r.pagerCount - 2
                    }),
                    onMouseenter: p[4] || (p[4] = (T) => u()),
                    onMouseleave: p[5] || (p[5] = (T) => (_.value = !1)),
                    onFocus: p[6] || (p[6] = (T) => l()),
                    onBlur: p[7] || (p[7] = (T) => (o.value = !1))
                  },
                  [
                    (_.value || o.value) && !r.disabled
                      ? (ae(), Pe(oe(Ki), { key: 0 }))
                      : (ae(), Pe(oe(Yr), { key: 1 }))
                  ],
                  42,
                  Ul
                ))
              : Re('v-if', !0),
            r.pageCount > 1
              ? (ae(),
                we(
                  'li',
                  {
                    key: 3,
                    class: ye([
                      [
                        oe(y).is('active', r.currentPage === r.pageCount),
                        oe(y).is('disabled', r.disabled)
                      ],
                      'number'
                    ]),
                    'aria-current': r.currentPage === r.pageCount,
                    'aria-label': oe(O)('el.pagination.currentPage', {
                      pager: r.pageCount
                    }),
                    tabindex: oe(i)
                  },
                  Ue(r.pageCount),
                  11,
                  Hl
                ))
              : Re('v-if', !0)
          ],
          42,
          Bl
        )
      )
    }
  })
var Wl = ct(Vl, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue'
  ]
])
const et = (e) => typeof e != 'number',
  Gl = Lt({
    pageSize: Number,
    defaultPageSize: Number,
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator: (e) =>
        qt(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
      default: 7
    },
    currentPage: Number,
    defaultCurrentPage: Number,
    layout: {
      type: String,
      default: ['prev', 'pager', 'next', 'jumper', '->', 'total'].join(', ')
    },
    pageSizes: {
      type: ui(Array),
      default: () => si([10, 20, 30, 40, 50, 100])
    },
    popperClass: { type: String, default: '' },
    prevText: { type: String, default: '' },
    prevIcon: { type: Xt, default: () => Vi },
    nextText: { type: String, default: '' },
    nextIcon: { type: Xt, default: () => Wi },
    small: Boolean,
    background: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean
  }),
  Zl = {
    'update:current-page': (e) => qt(e),
    'update:page-size': (e) => qt(e),
    'size-change': (e) => qt(e),
    'current-change': (e) => qt(e),
    'prev-click': (e) => qt(e),
    'next-click': (e) => qt(e)
  },
  Jr = 'ElPagination'
var Yl = De({
  name: Jr,
  props: Gl,
  emits: Zl,
  setup(e, { emit: w, slots: v }) {
    const { t: y } = yt(),
      s = lt('pagination'),
      O = xn().vnode.props || {},
      b =
        'onUpdate:currentPage' in O ||
        'onUpdate:current-page' in O ||
        'onCurrentChange' in O,
      E =
        'onUpdate:pageSize' in O ||
        'onUpdate:page-size' in O ||
        'onSizeChange' in O,
      g = me(() => {
        if ((et(e.total) && et(e.pageCount)) || (!et(e.currentPage) && !b))
          return !1
        if (e.layout.includes('sizes')) {
          if (et(e.pageCount)) {
            if (!et(e.total) && !et(e.pageSize) && !E) return !1
          } else if (!E) return !1
        }
        return !0
      }),
      _ = Se(et(e.defaultPageSize) ? 10 : e.defaultPageSize),
      f = Se(et(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage),
      o = me({
        get() {
          return et(e.pageSize) ? _.value : e.pageSize
        },
        set(h) {
          et(e.pageSize) && (_.value = h),
            E && (w('update:page-size', h), w('size-change', h))
        }
      }),
      n = me(() => {
        let h = 0
        return (
          et(e.pageCount)
            ? et(e.total) || (h = Math.max(1, Math.ceil(e.total / o.value)))
            : (h = e.pageCount),
          h
        )
      }),
      t = me({
        get() {
          return et(e.currentPage) ? f.value : e.currentPage
        },
        set(h) {
          let r = h
          h < 1 ? (r = 1) : h > n.value && (r = n.value),
            et(e.currentPage) && (f.value = r),
            b && (w('update:current-page', r), w('current-change', r))
        }
      })
    Ze(n, (h) => {
      t.value > h && (t.value = h)
    })
    function d(h) {
      t.value = h
    }
    function i(h) {
      o.value = h
      const r = n.value
      t.value > r && (t.value = r)
    }
    function u() {
      e.disabled || ((t.value -= 1), w('prev-click', t.value))
    }
    function l() {
      e.disabled || ((t.value += 1), w('next-click', t.value))
    }
    function a(h, r) {
      h &&
        (h.props || (h.props = {}),
        (h.props.class = [h.props.class, r].join(' ')))
    }
    return (
      xr(mi, {
        pageCount: n,
        disabled: me(() => e.disabled),
        currentPage: t,
        changeEvent: d,
        handleSizeChange: i
      }),
      () => {
        var h, r
        if (!g.value) return pi(Jr, y('el.pagination.deprecationWarning')), null
        if (!e.layout || (e.hideOnSinglePage && n.value <= 1)) return null
        const p = [],
          T = [],
          k = Pt('div', { class: s.e('rightwrapper') }, T),
          P = {
            prev: Pt(el, {
              disabled: e.disabled,
              currentPage: t.value,
              prevText: e.prevText,
              prevIcon: e.prevIcon,
              onClick: u
            }),
            jumper: Pt(Ml, { size: e.small ? 'small' : 'default' }),
            pager: Pt(Wl, {
              currentPage: t.value,
              pageCount: n.value,
              pagerCount: e.pagerCount,
              onChange: d,
              disabled: e.disabled
            }),
            next: Pt(ll, {
              disabled: e.disabled,
              currentPage: t.value,
              pageCount: n.value,
              nextText: e.nextText,
              nextIcon: e.nextIcon,
              onClick: l
            }),
            sizes: Pt(kl, {
              pageSize: o.value,
              pageSizes: e.pageSizes,
              popperClass: e.popperClass,
              disabled: e.disabled,
              size: e.small ? 'small' : 'default'
            }),
            slot:
              (r =
                (h = v == null ? void 0 : v.default) == null
                  ? void 0
                  : h.call(v)) != null
                ? r
                : null,
            total: Pt(jl, { total: et(e.total) ? 0 : e.total })
          },
          M = e.layout.split(',').map((m) => m.trim())
        let A = !1
        return (
          M.forEach((m) => {
            if (m === '->') {
              A = !0
              return
            }
            A ? T.push(P[m]) : p.push(P[m])
          }),
          a(p[0], s.is('first')),
          a(p[p.length - 1], s.is('last')),
          A &&
            T.length > 0 &&
            (a(T[0], s.is('first')),
            a(T[T.length - 1], s.is('last')),
            p.push(k)),
          Pt(
            'div',
            {
              class: [
                s.b(),
                s.is('background', e.background),
                { [s.m('small')]: e.small }
              ]
            },
            p
          )
        )
      }
    )
  }
})
const Ql = qn(Yl)
const Oi = {
  __name: 'ChannelSelect',
  props: { modelValue: { type: [Number, String] }, width: { type: String } },
  emits: ['update:modelValue'],
  setup(e, { emit: w }) {
    const v = Se([])
    return (
      (async () => {
        const s = await ro()
        v.value = s.data.data
      })(),
      (s, O) => {
        const b = zr,
          E = $r
        return (
          ae(),
          Pe(
            E,
            {
              modelValue: e.modelValue,
              'onUpdate:modelValue':
                O[0] || (O[0] = (g) => w('update:modelValue', g)),
              style: wt({ width: e.width })
            },
            {
              default: ce(() => [
                (ae(!0),
                we(
                  Ut,
                  null,
                  Qt(
                    v.value,
                    (g) => (
                      ae(),
                      Pe(
                        b,
                        { key: g.id, label: g.cate_name, value: g.id },
                        null,
                        8,
                        ['label', 'value']
                      )
                    )
                  ),
                  128
                ))
              ]),
              _: 1
            },
            8,
            ['modelValue', 'style']
          )
        )
      }
    )
  }
}
var Ei = { exports: {} }
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */ ;(function (e, w) {
  ;(function (y, s) {
    e.exports = s()
  })(typeof self < 'u' ? self : He, function () {
    return (function (v) {
      var y = {}
      function s(O) {
        if (y[O]) return y[O].exports
        var b = (y[O] = { i: O, l: !1, exports: {} })
        return v[O].call(b.exports, b, b.exports, s), (b.l = !0), b.exports
      }
      return (
        (s.m = v),
        (s.c = y),
        (s.d = function (O, b, E) {
          s.o(O, b) ||
            Object.defineProperty(O, b, {
              configurable: !1,
              enumerable: !0,
              get: E
            })
        }),
        (s.n = function (O) {
          var b =
            O && O.__esModule
              ? function () {
                  return O.default
                }
              : function () {
                  return O
                }
          return s.d(b, 'a', b), b
        }),
        (s.o = function (O, b) {
          return Object.prototype.hasOwnProperty.call(O, b)
        }),
        (s.p = ''),
        s((s.s = 109))
      )
    })([
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(17),
          b = s(18),
          E = s(19),
          g = s(45),
          _ = s(46),
          f = s(47),
          o = s(48),
          n = s(49),
          t = s(12),
          d = s(32),
          i = s(33),
          u = s(31),
          l = s(1),
          a = {
            Scope: l.Scope,
            create: l.create,
            find: l.find,
            query: l.query,
            register: l.register,
            Container: O.default,
            Format: b.default,
            Leaf: E.default,
            Embed: o.default,
            Scroll: g.default,
            Block: f.default,
            Inline: _.default,
            Text: n.default,
            Attributor: {
              Attribute: t.default,
              Class: d.default,
              Style: i.default,
              Store: u.default
            }
          }
        y.default = a
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var u =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (l, a) {
                  l.__proto__ = a
                }) ||
              function (l, a) {
                for (var h in a) a.hasOwnProperty(h) && (l[h] = a[h])
              }
            return function (l, a) {
              u(l, a)
              function h() {
                this.constructor = l
              }
              l.prototype =
                a === null
                  ? Object.create(a)
                  : ((h.prototype = a.prototype), new h())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = (function (u) {
          O(l, u)
          function l(a) {
            var h = this
            return (
              (a = '[Parchment] ' + a),
              (h = u.call(this, a) || this),
              (h.message = a),
              (h.name = h.constructor.name),
              h
            )
          }
          return l
        })(Error)
        y.ParchmentError = b
        var E = {},
          g = {},
          _ = {},
          f = {}
        y.DATA_KEY = '__blot'
        var o
        ;(function (u) {
          ;(u[(u.TYPE = 3)] = 'TYPE'),
            (u[(u.LEVEL = 12)] = 'LEVEL'),
            (u[(u.ATTRIBUTE = 13)] = 'ATTRIBUTE'),
            (u[(u.BLOT = 14)] = 'BLOT'),
            (u[(u.INLINE = 7)] = 'INLINE'),
            (u[(u.BLOCK = 11)] = 'BLOCK'),
            (u[(u.BLOCK_BLOT = 10)] = 'BLOCK_BLOT'),
            (u[(u.INLINE_BLOT = 6)] = 'INLINE_BLOT'),
            (u[(u.BLOCK_ATTRIBUTE = 9)] = 'BLOCK_ATTRIBUTE'),
            (u[(u.INLINE_ATTRIBUTE = 5)] = 'INLINE_ATTRIBUTE'),
            (u[(u.ANY = 15)] = 'ANY')
        })((o = y.Scope || (y.Scope = {})))
        function n(u, l) {
          var a = d(u)
          if (a == null) throw new b('Unable to create ' + u + ' blot')
          var h = a,
            r =
              u instanceof Node || u.nodeType === Node.TEXT_NODE
                ? u
                : h.create(l)
          return new h(r, l)
        }
        y.create = n
        function t(u, l) {
          return (
            l === void 0 && (l = !1),
            u == null
              ? null
              : u[y.DATA_KEY] != null
              ? u[y.DATA_KEY].blot
              : l
              ? t(u.parentNode, l)
              : null
          )
        }
        y.find = t
        function d(u, l) {
          l === void 0 && (l = o.ANY)
          var a
          if (typeof u == 'string') a = f[u] || E[u]
          else if (u instanceof Text || u.nodeType === Node.TEXT_NODE)
            a = f.text
          else if (typeof u == 'number')
            u & o.LEVEL & o.BLOCK
              ? (a = f.block)
              : u & o.LEVEL & o.INLINE && (a = f.inline)
          else if (u instanceof HTMLElement) {
            var h = (u.getAttribute('class') || '').split(/\s+/)
            for (var r in h) if (((a = g[h[r]]), a)) break
            a = a || _[u.tagName]
          }
          return a == null
            ? null
            : l & o.LEVEL & a.scope && l & o.TYPE & a.scope
            ? a
            : null
        }
        y.query = d
        function i() {
          for (var u = [], l = 0; l < arguments.length; l++) u[l] = arguments[l]
          if (u.length > 1)
            return u.map(function (r) {
              return i(r)
            })
          var a = u[0]
          if (typeof a.blotName != 'string' && typeof a.attrName != 'string')
            throw new b('Invalid definition')
          if (a.blotName === 'abstract')
            throw new b('Cannot register abstract class')
          if (((f[a.blotName || a.attrName] = a), typeof a.keyName == 'string'))
            E[a.keyName] = a
          else if (
            (a.className != null && (g[a.className] = a), a.tagName != null)
          ) {
            Array.isArray(a.tagName)
              ? (a.tagName = a.tagName.map(function (r) {
                  return r.toUpperCase()
                }))
              : (a.tagName = a.tagName.toUpperCase())
            var h = Array.isArray(a.tagName) ? a.tagName : [a.tagName]
            h.forEach(function (r) {
              ;(_[r] == null || a.className == null) && (_[r] = a)
            })
          }
          return a
        }
        y.register = i
      },
      function (v, y, s) {
        var O = s(51),
          b = s(11),
          E = s(3),
          g = s(20),
          _ = String.fromCharCode(0),
          f = function (o) {
            Array.isArray(o)
              ? (this.ops = o)
              : o != null && Array.isArray(o.ops)
              ? (this.ops = o.ops)
              : (this.ops = [])
          }
        ;(f.prototype.insert = function (o, n) {
          var t = {}
          return o.length === 0
            ? this
            : ((t.insert = o),
              n != null &&
                typeof n == 'object' &&
                Object.keys(n).length > 0 &&
                (t.attributes = n),
              this.push(t))
        }),
          (f.prototype.delete = function (o) {
            return o <= 0 ? this : this.push({ delete: o })
          }),
          (f.prototype.retain = function (o, n) {
            if (o <= 0) return this
            var t = { retain: o }
            return (
              n != null &&
                typeof n == 'object' &&
                Object.keys(n).length > 0 &&
                (t.attributes = n),
              this.push(t)
            )
          }),
          (f.prototype.push = function (o) {
            var n = this.ops.length,
              t = this.ops[n - 1]
            if (((o = E(!0, {}, o)), typeof t == 'object')) {
              if (typeof o.delete == 'number' && typeof t.delete == 'number')
                return (this.ops[n - 1] = { delete: t.delete + o.delete }), this
              if (
                typeof t.delete == 'number' &&
                o.insert != null &&
                ((n -= 1), (t = this.ops[n - 1]), typeof t != 'object')
              )
                return this.ops.unshift(o), this
              if (b(o.attributes, t.attributes)) {
                if (typeof o.insert == 'string' && typeof t.insert == 'string')
                  return (
                    (this.ops[n - 1] = { insert: t.insert + o.insert }),
                    typeof o.attributes == 'object' &&
                      (this.ops[n - 1].attributes = o.attributes),
                    this
                  )
                if (typeof o.retain == 'number' && typeof t.retain == 'number')
                  return (
                    (this.ops[n - 1] = { retain: t.retain + o.retain }),
                    typeof o.attributes == 'object' &&
                      (this.ops[n - 1].attributes = o.attributes),
                    this
                  )
              }
            }
            return (
              n === this.ops.length
                ? this.ops.push(o)
                : this.ops.splice(n, 0, o),
              this
            )
          }),
          (f.prototype.chop = function () {
            var o = this.ops[this.ops.length - 1]
            return o && o.retain && !o.attributes && this.ops.pop(), this
          }),
          (f.prototype.filter = function (o) {
            return this.ops.filter(o)
          }),
          (f.prototype.forEach = function (o) {
            this.ops.forEach(o)
          }),
          (f.prototype.map = function (o) {
            return this.ops.map(o)
          }),
          (f.prototype.partition = function (o) {
            var n = [],
              t = []
            return (
              this.forEach(function (d) {
                var i = o(d) ? n : t
                i.push(d)
              }),
              [n, t]
            )
          }),
          (f.prototype.reduce = function (o, n) {
            return this.ops.reduce(o, n)
          }),
          (f.prototype.changeLength = function () {
            return this.reduce(function (o, n) {
              return n.insert ? o + g.length(n) : n.delete ? o - n.delete : o
            }, 0)
          }),
          (f.prototype.length = function () {
            return this.reduce(function (o, n) {
              return o + g.length(n)
            }, 0)
          }),
          (f.prototype.slice = function (o, n) {
            ;(o = o || 0), typeof n != 'number' && (n = 1 / 0)
            for (
              var t = [], d = g.iterator(this.ops), i = 0;
              i < n && d.hasNext();

            ) {
              var u
              i < o ? (u = d.next(o - i)) : ((u = d.next(n - i)), t.push(u)),
                (i += g.length(u))
            }
            return new f(t)
          }),
          (f.prototype.compose = function (o) {
            var n = g.iterator(this.ops),
              t = g.iterator(o.ops),
              d = [],
              i = t.peek()
            if (
              i != null &&
              typeof i.retain == 'number' &&
              i.attributes == null
            ) {
              for (
                var u = i.retain;
                n.peekType() === 'insert' && n.peekLength() <= u;

              )
                (u -= n.peekLength()), d.push(n.next())
              i.retain - u > 0 && t.next(i.retain - u)
            }
            for (var l = new f(d); n.hasNext() || t.hasNext(); )
              if (t.peekType() === 'insert') l.push(t.next())
              else if (n.peekType() === 'delete') l.push(n.next())
              else {
                var a = Math.min(n.peekLength(), t.peekLength()),
                  h = n.next(a),
                  r = t.next(a)
                if (typeof r.retain == 'number') {
                  var p = {}
                  typeof h.retain == 'number'
                    ? (p.retain = a)
                    : (p.insert = h.insert)
                  var T = g.attributes.compose(
                    h.attributes,
                    r.attributes,
                    typeof h.retain == 'number'
                  )
                  if (
                    (T && (p.attributes = T),
                    l.push(p),
                    !t.hasNext() && b(l.ops[l.ops.length - 1], p))
                  ) {
                    var k = new f(n.rest())
                    return l.concat(k).chop()
                  }
                } else
                  typeof r.delete == 'number' &&
                    typeof h.retain == 'number' &&
                    l.push(r)
              }
            return l.chop()
          }),
          (f.prototype.concat = function (o) {
            var n = new f(this.ops.slice())
            return (
              o.ops.length > 0 &&
                (n.push(o.ops[0]), (n.ops = n.ops.concat(o.ops.slice(1)))),
              n
            )
          }),
          (f.prototype.diff = function (o, n) {
            if (this.ops === o.ops) return new f()
            var t = [this, o].map(function (a) {
                return a
                  .map(function (h) {
                    if (h.insert != null)
                      return typeof h.insert == 'string' ? h.insert : _
                    var r = a === o ? 'on' : 'with'
                    throw new Error('diff() called ' + r + ' non-document')
                  })
                  .join('')
              }),
              d = new f(),
              i = O(t[0], t[1], n),
              u = g.iterator(this.ops),
              l = g.iterator(o.ops)
            return (
              i.forEach(function (a) {
                for (var h = a[1].length; h > 0; ) {
                  var r = 0
                  switch (a[0]) {
                    case O.INSERT:
                      ;(r = Math.min(l.peekLength(), h)), d.push(l.next(r))
                      break
                    case O.DELETE:
                      ;(r = Math.min(h, u.peekLength())), u.next(r), d.delete(r)
                      break
                    case O.EQUAL:
                      r = Math.min(u.peekLength(), l.peekLength(), h)
                      var p = u.next(r),
                        T = l.next(r)
                      b(p.insert, T.insert)
                        ? d.retain(
                            r,
                            g.attributes.diff(p.attributes, T.attributes)
                          )
                        : d.push(T).delete(r)
                      break
                  }
                  h -= r
                }
              }),
              d.chop()
            )
          }),
          (f.prototype.eachLine = function (o, n) {
            n =
              n ||
              `
`
            for (
              var t = g.iterator(this.ops), d = new f(), i = 0;
              t.hasNext();

            ) {
              if (t.peekType() !== 'insert') return
              var u = t.peek(),
                l = g.length(u) - t.peekLength(),
                a =
                  typeof u.insert == 'string' ? u.insert.indexOf(n, l) - l : -1
              if (a < 0) d.push(t.next())
              else if (a > 0) d.push(t.next(a))
              else {
                if (o(d, t.next(1).attributes || {}, i) === !1) return
                ;(i += 1), (d = new f())
              }
            }
            d.length() > 0 && o(d, {}, i)
          }),
          (f.prototype.transform = function (o, n) {
            if (((n = !!n), typeof o == 'number'))
              return this.transformPosition(o, n)
            for (
              var t = g.iterator(this.ops), d = g.iterator(o.ops), i = new f();
              t.hasNext() || d.hasNext();

            )
              if (t.peekType() === 'insert' && (n || d.peekType() !== 'insert'))
                i.retain(g.length(t.next()))
              else if (d.peekType() === 'insert') i.push(d.next())
              else {
                var u = Math.min(t.peekLength(), d.peekLength()),
                  l = t.next(u),
                  a = d.next(u)
                if (l.delete) continue
                a.delete
                  ? i.push(a)
                  : i.retain(
                      u,
                      g.attributes.transform(l.attributes, a.attributes, n)
                    )
              }
            return i.chop()
          }),
          (f.prototype.transformPosition = function (o, n) {
            n = !!n
            for (var t = g.iterator(this.ops), d = 0; t.hasNext() && d <= o; ) {
              var i = t.peekLength(),
                u = t.peekType()
              if ((t.next(), u === 'delete')) {
                o -= Math.min(i, o - d)
                continue
              } else u === 'insert' && (d < o || !n) && (o += i)
              d += i
            }
            return o
          }),
          (v.exports = f)
      },
      function (v, y) {
        var s = Object.prototype.hasOwnProperty,
          O = Object.prototype.toString,
          b = Object.defineProperty,
          E = Object.getOwnPropertyDescriptor,
          g = function (t) {
            return typeof Array.isArray == 'function'
              ? Array.isArray(t)
              : O.call(t) === '[object Array]'
          },
          _ = function (t) {
            if (!t || O.call(t) !== '[object Object]') return !1
            var d = s.call(t, 'constructor'),
              i =
                t.constructor &&
                t.constructor.prototype &&
                s.call(t.constructor.prototype, 'isPrototypeOf')
            if (t.constructor && !d && !i) return !1
            var u
            for (u in t);
            return typeof u > 'u' || s.call(t, u)
          },
          f = function (t, d) {
            b && d.name === '__proto__'
              ? b(t, d.name, {
                  enumerable: !0,
                  configurable: !0,
                  value: d.newValue,
                  writable: !0
                })
              : (t[d.name] = d.newValue)
          },
          o = function (t, d) {
            if (d === '__proto__')
              if (s.call(t, d)) {
                if (E) return E(t, d).value
              } else return
            return t[d]
          }
        v.exports = function n() {
          var t,
            d,
            i,
            u,
            l,
            a,
            h = arguments[0],
            r = 1,
            p = arguments.length,
            T = !1
          for (
            typeof h == 'boolean' &&
              ((T = h), (h = arguments[1] || {}), (r = 2)),
              (h == null || (typeof h != 'object' && typeof h != 'function')) &&
                (h = {});
            r < p;
            ++r
          )
            if (((t = arguments[r]), t != null))
              for (d in t)
                (i = o(h, d)),
                  (u = o(t, d)),
                  h !== u &&
                    (T && u && (_(u) || (l = g(u)))
                      ? (l
                          ? ((l = !1), (a = i && g(i) ? i : []))
                          : (a = i && _(i) ? i : {}),
                        f(h, { name: d, newValue: n(T, a, u) }))
                      : typeof u < 'u' && f(h, { name: d, newValue: u }))
          return h
        }
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.BlockEmbed = y.bubbleFormats = void 0)
        var O = (function () {
            function m(S, N) {
              for (var C = 0; C < N.length; C++) {
                var q = N[C]
                ;(q.enumerable = q.enumerable || !1),
                  (q.configurable = !0),
                  'value' in q && (q.writable = !0),
                  Object.defineProperty(S, q.key, q)
              }
            }
            return function (S, N, C) {
              return N && m(S.prototype, N), C && m(S, C), S
            }
          })(),
          b = function m(S, N, C) {
            S === null && (S = Function.prototype)
            var q = Object.getOwnPropertyDescriptor(S, N)
            if (q === void 0) {
              var $ = Object.getPrototypeOf(S)
              return $ === null ? void 0 : m($, N, C)
            } else {
              if ('value' in q) return q.value
              var B = q.get
              return B === void 0 ? void 0 : B.call(C)
            }
          },
          E = s(3),
          g = h(E),
          _ = s(2),
          f = h(_),
          o = s(0),
          n = h(o),
          t = s(16),
          d = h(t),
          i = s(6),
          u = h(i),
          l = s(7),
          a = h(l)
        function h(m) {
          return m && m.__esModule ? m : { default: m }
        }
        function r(m, S) {
          if (!(m instanceof S))
            throw new TypeError('Cannot call a class as a function')
        }
        function p(m, S) {
          if (!m)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return S && (typeof S == 'object' || typeof S == 'function') ? S : m
        }
        function T(m, S) {
          if (typeof S != 'function' && S !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof S
            )
          ;(m.prototype = Object.create(S && S.prototype, {
            constructor: {
              value: m,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            S &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(m, S)
                : (m.__proto__ = S))
        }
        var k = 1,
          P = (function (m) {
            T(S, m)
            function S() {
              return (
                r(this, S),
                p(
                  this,
                  (S.__proto__ || Object.getPrototypeOf(S)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              O(S, [
                {
                  key: 'attach',
                  value: function () {
                    b(
                      S.prototype.__proto__ ||
                        Object.getPrototypeOf(S.prototype),
                      'attach',
                      this
                    ).call(this),
                      (this.attributes = new n.default.Attributor.Store(
                        this.domNode
                      ))
                  }
                },
                {
                  key: 'delta',
                  value: function () {
                    return new f.default().insert(
                      this.value(),
                      (0, g.default)(this.formats(), this.attributes.values())
                    )
                  }
                },
                {
                  key: 'format',
                  value: function (C, q) {
                    var $ = n.default.query(C, n.default.Scope.BLOCK_ATTRIBUTE)
                    $ != null && this.attributes.attribute($, q)
                  }
                },
                {
                  key: 'formatAt',
                  value: function (C, q, $, B) {
                    this.format($, B)
                  }
                },
                {
                  key: 'insertAt',
                  value: function (C, q, $) {
                    if (
                      typeof q == 'string' &&
                      q.endsWith(`
`)
                    ) {
                      var B = n.default.create(M.blotName)
                      this.parent.insertBefore(B, C === 0 ? this : this.next),
                        B.insertAt(0, q.slice(0, -1))
                    } else
                      b(
                        S.prototype.__proto__ ||
                          Object.getPrototypeOf(S.prototype),
                        'insertAt',
                        this
                      ).call(this, C, q, $)
                  }
                }
              ]),
              S
            )
          })(n.default.Embed)
        P.scope = n.default.Scope.BLOCK_BLOT
        var M = (function (m) {
          T(S, m)
          function S(N) {
            r(this, S)
            var C = p(
              this,
              (S.__proto__ || Object.getPrototypeOf(S)).call(this, N)
            )
            return (C.cache = {}), C
          }
          return (
            O(S, [
              {
                key: 'delta',
                value: function () {
                  return (
                    this.cache.delta == null &&
                      (this.cache.delta = this.descendants(n.default.Leaf)
                        .reduce(function (C, q) {
                          return q.length() === 0
                            ? C
                            : C.insert(q.value(), A(q))
                        }, new f.default())
                        .insert(
                          `
`,
                          A(this)
                        )),
                    this.cache.delta
                  )
                }
              },
              {
                key: 'deleteAt',
                value: function (C, q) {
                  b(
                    S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                    'deleteAt',
                    this
                  ).call(this, C, q),
                    (this.cache = {})
                }
              },
              {
                key: 'formatAt',
                value: function (C, q, $, B) {
                  q <= 0 ||
                    (n.default.query($, n.default.Scope.BLOCK)
                      ? C + q === this.length() && this.format($, B)
                      : b(
                          S.prototype.__proto__ ||
                            Object.getPrototypeOf(S.prototype),
                          'formatAt',
                          this
                        ).call(
                          this,
                          C,
                          Math.min(q, this.length() - C - 1),
                          $,
                          B
                        ),
                    (this.cache = {}))
                }
              },
              {
                key: 'insertAt',
                value: function (C, q, $) {
                  if ($ != null)
                    return b(
                      S.prototype.__proto__ ||
                        Object.getPrototypeOf(S.prototype),
                      'insertAt',
                      this
                    ).call(this, C, q, $)
                  if (q.length !== 0) {
                    var B = q.split(`
`),
                      G = B.shift()
                    G.length > 0 &&
                      (C < this.length() - 1 || this.children.tail == null
                        ? b(
                            S.prototype.__proto__ ||
                              Object.getPrototypeOf(S.prototype),
                            'insertAt',
                            this
                          ).call(this, Math.min(C, this.length() - 1), G)
                        : this.children.tail.insertAt(
                            this.children.tail.length(),
                            G
                          ),
                      (this.cache = {}))
                    var z = this
                    B.reduce(function (R, L) {
                      return (z = z.split(R, !0)), z.insertAt(0, L), L.length
                    }, C + G.length)
                  }
                }
              },
              {
                key: 'insertBefore',
                value: function (C, q) {
                  var $ = this.children.head
                  b(
                    S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                    'insertBefore',
                    this
                  ).call(this, C, q),
                    $ instanceof d.default && $.remove(),
                    (this.cache = {})
                }
              },
              {
                key: 'length',
                value: function () {
                  return (
                    this.cache.length == null &&
                      (this.cache.length =
                        b(
                          S.prototype.__proto__ ||
                            Object.getPrototypeOf(S.prototype),
                          'length',
                          this
                        ).call(this) + k),
                    this.cache.length
                  )
                }
              },
              {
                key: 'moveChildren',
                value: function (C, q) {
                  b(
                    S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                    'moveChildren',
                    this
                  ).call(this, C, q),
                    (this.cache = {})
                }
              },
              {
                key: 'optimize',
                value: function (C) {
                  b(
                    S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                    'optimize',
                    this
                  ).call(this, C),
                    (this.cache = {})
                }
              },
              {
                key: 'path',
                value: function (C) {
                  return b(
                    S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                    'path',
                    this
                  ).call(this, C, !0)
                }
              },
              {
                key: 'removeChild',
                value: function (C) {
                  b(
                    S.prototype.__proto__ || Object.getPrototypeOf(S.prototype),
                    'removeChild',
                    this
                  ).call(this, C),
                    (this.cache = {})
                }
              },
              {
                key: 'split',
                value: function (C) {
                  var q =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1
                  if (q && (C === 0 || C >= this.length() - k)) {
                    var $ = this.clone()
                    return C === 0
                      ? (this.parent.insertBefore($, this), this)
                      : (this.parent.insertBefore($, this.next), $)
                  } else {
                    var B = b(
                      S.prototype.__proto__ ||
                        Object.getPrototypeOf(S.prototype),
                      'split',
                      this
                    ).call(this, C, q)
                    return (this.cache = {}), B
                  }
                }
              }
            ]),
            S
          )
        })(n.default.Block)
        ;(M.blotName = 'block'),
          (M.tagName = 'P'),
          (M.defaultChild = 'break'),
          (M.allowedChildren = [u.default, n.default.Embed, a.default])
        function A(m) {
          var S =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          return m == null ||
            (typeof m.formats == 'function' &&
              (S = (0, g.default)(S, m.formats())),
            m.parent == null ||
              m.parent.blotName == 'scroll' ||
              m.parent.statics.scope !== m.statics.scope)
            ? S
            : A(m.parent, S)
        }
        ;(y.bubbleFormats = A), (y.BlockEmbed = P), (y.default = M)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.overload = y.expandConfig = void 0)
        var O =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (z) {
                  return typeof z
                }
              : function (z) {
                  return z &&
                    typeof Symbol == 'function' &&
                    z.constructor === Symbol &&
                    z !== Symbol.prototype
                    ? 'symbol'
                    : typeof z
                },
          b = (function () {
            function z(R, L) {
              var j = [],
                D = !0,
                K = !1,
                U = void 0
              try {
                for (
                  var x = R[Symbol.iterator](), H;
                  !(D = (H = x.next()).done) &&
                  (j.push(H.value), !(L && j.length === L));
                  D = !0
                );
              } catch (V) {
                ;(K = !0), (U = V)
              } finally {
                try {
                  !D && x.return && x.return()
                } finally {
                  if (K) throw U
                }
              }
              return j
            }
            return function (R, L) {
              if (Array.isArray(R)) return R
              if (Symbol.iterator in Object(R)) return z(R, L)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          E = (function () {
            function z(R, L) {
              for (var j = 0; j < L.length; j++) {
                var D = L[j]
                ;(D.enumerable = D.enumerable || !1),
                  (D.configurable = !0),
                  'value' in D && (D.writable = !0),
                  Object.defineProperty(R, D.key, D)
              }
            }
            return function (R, L, j) {
              return L && z(R.prototype, L), j && z(R, j), R
            }
          })()
        s(50)
        var g = s(2),
          _ = A(g),
          f = s(14),
          o = A(f),
          n = s(8),
          t = A(n),
          d = s(9),
          i = A(d),
          u = s(0),
          l = A(u),
          a = s(15),
          h = A(a),
          r = s(3),
          p = A(r),
          T = s(10),
          k = A(T),
          P = s(34),
          M = A(P)
        function A(z) {
          return z && z.__esModule ? z : { default: z }
        }
        function m(z, R, L) {
          return (
            R in z
              ? Object.defineProperty(z, R, {
                  value: L,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (z[R] = L),
            z
          )
        }
        function S(z, R) {
          if (!(z instanceof R))
            throw new TypeError('Cannot call a class as a function')
        }
        var N = (0, k.default)('quill'),
          C = (function () {
            E(z, null, [
              {
                key: 'debug',
                value: function (L) {
                  L === !0 && (L = 'log'), k.default.level(L)
                }
              },
              {
                key: 'find',
                value: function (L) {
                  return L.__quill || l.default.find(L)
                }
              },
              {
                key: 'import',
                value: function (L) {
                  return (
                    this.imports[L] == null &&
                      N.error(
                        'Cannot import ' +
                          L +
                          '. Are you sure it was registered?'
                      ),
                    this.imports[L]
                  )
                }
              },
              {
                key: 'register',
                value: function (L, j) {
                  var D = this,
                    K =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1
                  if (typeof L != 'string') {
                    var U = L.attrName || L.blotName
                    typeof U == 'string'
                      ? this.register('formats/' + U, L, j)
                      : Object.keys(L).forEach(function (x) {
                          D.register(x, L[x], j)
                        })
                  } else
                    this.imports[L] != null &&
                      !K &&
                      N.warn('Overwriting ' + L + ' with', j),
                      (this.imports[L] = j),
                      (L.startsWith('blots/') || L.startsWith('formats/')) &&
                      j.blotName !== 'abstract'
                        ? l.default.register(j)
                        : L.startsWith('modules') &&
                          typeof j.register == 'function' &&
                          j.register()
                }
              }
            ])
            function z(R) {
              var L = this,
                j =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {}
              if (
                (S(this, z),
                (this.options = q(R, j)),
                (this.container = this.options.container),
                this.container == null)
              )
                return N.error('Invalid Quill container', R)
              this.options.debug && z.debug(this.options.debug)
              var D = this.container.innerHTML.trim()
              this.container.classList.add('ql-container'),
                (this.container.innerHTML = ''),
                (this.container.__quill = this),
                (this.root = this.addContainer('ql-editor')),
                this.root.classList.add('ql-blank'),
                this.root.setAttribute('data-gramm', !1),
                (this.scrollingContainer =
                  this.options.scrollingContainer || this.root),
                (this.emitter = new t.default()),
                (this.scroll = l.default.create(this.root, {
                  emitter: this.emitter,
                  whitelist: this.options.formats
                })),
                (this.editor = new o.default(this.scroll)),
                (this.selection = new h.default(this.scroll, this.emitter)),
                (this.theme = new this.options.theme(this, this.options)),
                (this.keyboard = this.theme.addModule('keyboard')),
                (this.clipboard = this.theme.addModule('clipboard')),
                (this.history = this.theme.addModule('history')),
                this.theme.init(),
                this.emitter.on(t.default.events.EDITOR_CHANGE, function (U) {
                  U === t.default.events.TEXT_CHANGE &&
                    L.root.classList.toggle('ql-blank', L.editor.isBlank())
                }),
                this.emitter.on(
                  t.default.events.SCROLL_UPDATE,
                  function (U, x) {
                    var H = L.selection.lastRange,
                      V = H && H.length === 0 ? H.index : void 0
                    $.call(
                      L,
                      function () {
                        return L.editor.update(null, x, V)
                      },
                      U
                    )
                  }
                )
              var K = this.clipboard.convert(
                `<div class='ql-editor' style="white-space: normal;">` +
                  D +
                  '<p><br></p></div>'
              )
              this.setContents(K),
                this.history.clear(),
                this.options.placeholder &&
                  this.root.setAttribute(
                    'data-placeholder',
                    this.options.placeholder
                  ),
                this.options.readOnly && this.disable()
            }
            return (
              E(z, [
                {
                  key: 'addContainer',
                  value: function (L) {
                    var j =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null
                    if (typeof L == 'string') {
                      var D = L
                      ;(L = document.createElement('div')), L.classList.add(D)
                    }
                    return this.container.insertBefore(L, j), L
                  }
                },
                {
                  key: 'blur',
                  value: function () {
                    this.selection.setRange(null)
                  }
                },
                {
                  key: 'deleteText',
                  value: function (L, j, D) {
                    var K = this,
                      U = B(L, j, D),
                      x = b(U, 4)
                    return (
                      (L = x[0]),
                      (j = x[1]),
                      (D = x[3]),
                      $.call(
                        this,
                        function () {
                          return K.editor.deleteText(L, j)
                        },
                        D,
                        L,
                        -1 * j
                      )
                    )
                  }
                },
                {
                  key: 'disable',
                  value: function () {
                    this.enable(!1)
                  }
                },
                {
                  key: 'enable',
                  value: function () {
                    var L =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : !0
                    this.scroll.enable(L),
                      this.container.classList.toggle('ql-disabled', !L)
                  }
                },
                {
                  key: 'focus',
                  value: function () {
                    var L = this.scrollingContainer.scrollTop
                    this.selection.focus(),
                      (this.scrollingContainer.scrollTop = L),
                      this.scrollIntoView()
                  }
                },
                {
                  key: 'format',
                  value: function (L, j) {
                    var D = this,
                      K =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : t.default.sources.API
                    return $.call(
                      this,
                      function () {
                        var U = D.getSelection(!0),
                          x = new _.default()
                        if (U == null) return x
                        if (l.default.query(L, l.default.Scope.BLOCK))
                          x = D.editor.formatLine(
                            U.index,
                            U.length,
                            m({}, L, j)
                          )
                        else {
                          if (U.length === 0) return D.selection.format(L, j), x
                          x = D.editor.formatText(
                            U.index,
                            U.length,
                            m({}, L, j)
                          )
                        }
                        return D.setSelection(U, t.default.sources.SILENT), x
                      },
                      K
                    )
                  }
                },
                {
                  key: 'formatLine',
                  value: function (L, j, D, K, U) {
                    var x = this,
                      H = void 0,
                      V = B(L, j, D, K, U),
                      W = b(V, 4)
                    return (
                      (L = W[0]),
                      (j = W[1]),
                      (H = W[2]),
                      (U = W[3]),
                      $.call(
                        this,
                        function () {
                          return x.editor.formatLine(L, j, H)
                        },
                        U,
                        L,
                        0
                      )
                    )
                  }
                },
                {
                  key: 'formatText',
                  value: function (L, j, D, K, U) {
                    var x = this,
                      H = void 0,
                      V = B(L, j, D, K, U),
                      W = b(V, 4)
                    return (
                      (L = W[0]),
                      (j = W[1]),
                      (H = W[2]),
                      (U = W[3]),
                      $.call(
                        this,
                        function () {
                          return x.editor.formatText(L, j, H)
                        },
                        U,
                        L,
                        0
                      )
                    )
                  }
                },
                {
                  key: 'getBounds',
                  value: function (L) {
                    var j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      D = void 0
                    typeof L == 'number'
                      ? (D = this.selection.getBounds(L, j))
                      : (D = this.selection.getBounds(L.index, L.length))
                    var K = this.container.getBoundingClientRect()
                    return {
                      bottom: D.bottom - K.top,
                      height: D.height,
                      left: D.left - K.left,
                      right: D.right - K.left,
                      top: D.top - K.top,
                      width: D.width
                    }
                  }
                },
                {
                  key: 'getContents',
                  value: function () {
                    var L =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : 0,
                      j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : this.getLength() - L,
                      D = B(L, j),
                      K = b(D, 2)
                    return (L = K[0]), (j = K[1]), this.editor.getContents(L, j)
                  }
                },
                {
                  key: 'getFormat',
                  value: function () {
                    var L =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : this.getSelection(!0),
                      j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0
                    return typeof L == 'number'
                      ? this.editor.getFormat(L, j)
                      : this.editor.getFormat(L.index, L.length)
                  }
                },
                {
                  key: 'getIndex',
                  value: function (L) {
                    return L.offset(this.scroll)
                  }
                },
                {
                  key: 'getLength',
                  value: function () {
                    return this.scroll.length()
                  }
                },
                {
                  key: 'getLeaf',
                  value: function (L) {
                    return this.scroll.leaf(L)
                  }
                },
                {
                  key: 'getLine',
                  value: function (L) {
                    return this.scroll.line(L)
                  }
                },
                {
                  key: 'getLines',
                  value: function () {
                    var L =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : 0,
                      j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : Number.MAX_VALUE
                    return typeof L != 'number'
                      ? this.scroll.lines(L.index, L.length)
                      : this.scroll.lines(L, j)
                  }
                },
                {
                  key: 'getModule',
                  value: function (L) {
                    return this.theme.modules[L]
                  }
                },
                {
                  key: 'getSelection',
                  value: function () {
                    var L =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : !1
                    return (
                      L && this.focus(),
                      this.update(),
                      this.selection.getRange()[0]
                    )
                  }
                },
                {
                  key: 'getText',
                  value: function () {
                    var L =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : 0,
                      j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : this.getLength() - L,
                      D = B(L, j),
                      K = b(D, 2)
                    return (L = K[0]), (j = K[1]), this.editor.getText(L, j)
                  }
                },
                {
                  key: 'hasFocus',
                  value: function () {
                    return this.selection.hasFocus()
                  }
                },
                {
                  key: 'insertEmbed',
                  value: function (L, j, D) {
                    var K = this,
                      U =
                        arguments.length > 3 && arguments[3] !== void 0
                          ? arguments[3]
                          : z.sources.API
                    return $.call(
                      this,
                      function () {
                        return K.editor.insertEmbed(L, j, D)
                      },
                      U,
                      L
                    )
                  }
                },
                {
                  key: 'insertText',
                  value: function (L, j, D, K, U) {
                    var x = this,
                      H = void 0,
                      V = B(L, 0, D, K, U),
                      W = b(V, 4)
                    return (
                      (L = W[0]),
                      (H = W[2]),
                      (U = W[3]),
                      $.call(
                        this,
                        function () {
                          return x.editor.insertText(L, j, H)
                        },
                        U,
                        L,
                        j.length
                      )
                    )
                  }
                },
                {
                  key: 'isEnabled',
                  value: function () {
                    return !this.container.classList.contains('ql-disabled')
                  }
                },
                {
                  key: 'off',
                  value: function () {
                    return this.emitter.off.apply(this.emitter, arguments)
                  }
                },
                {
                  key: 'on',
                  value: function () {
                    return this.emitter.on.apply(this.emitter, arguments)
                  }
                },
                {
                  key: 'once',
                  value: function () {
                    return this.emitter.once.apply(this.emitter, arguments)
                  }
                },
                {
                  key: 'pasteHTML',
                  value: function (L, j, D) {
                    this.clipboard.dangerouslyPasteHTML(L, j, D)
                  }
                },
                {
                  key: 'removeFormat',
                  value: function (L, j, D) {
                    var K = this,
                      U = B(L, j, D),
                      x = b(U, 4)
                    return (
                      (L = x[0]),
                      (j = x[1]),
                      (D = x[3]),
                      $.call(
                        this,
                        function () {
                          return K.editor.removeFormat(L, j)
                        },
                        D,
                        L
                      )
                    )
                  }
                },
                {
                  key: 'scrollIntoView',
                  value: function () {
                    this.selection.scrollIntoView(this.scrollingContainer)
                  }
                },
                {
                  key: 'setContents',
                  value: function (L) {
                    var j = this,
                      D =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : t.default.sources.API
                    return $.call(
                      this,
                      function () {
                        L = new _.default(L)
                        var K = j.getLength(),
                          U = j.editor.deleteText(0, K),
                          x = j.editor.applyDelta(L),
                          H = x.ops[x.ops.length - 1]
                        H != null &&
                          typeof H.insert == 'string' &&
                          H.insert[H.insert.length - 1] ===
                            `
` &&
                          (j.editor.deleteText(j.getLength() - 1, 1),
                          x.delete(1))
                        var V = U.compose(x)
                        return V
                      },
                      D
                    )
                  }
                },
                {
                  key: 'setSelection',
                  value: function (L, j, D) {
                    if (L == null)
                      this.selection.setRange(null, j || z.sources.API)
                    else {
                      var K = B(L, j, D),
                        U = b(K, 4)
                      ;(L = U[0]),
                        (j = U[1]),
                        (D = U[3]),
                        this.selection.setRange(new a.Range(L, j), D),
                        D !== t.default.sources.SILENT &&
                          this.selection.scrollIntoView(this.scrollingContainer)
                    }
                  }
                },
                {
                  key: 'setText',
                  value: function (L) {
                    var j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : t.default.sources.API,
                      D = new _.default().insert(L)
                    return this.setContents(D, j)
                  }
                },
                {
                  key: 'update',
                  value: function () {
                    var L =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : t.default.sources.USER,
                      j = this.scroll.update(L)
                    return this.selection.update(L), j
                  }
                },
                {
                  key: 'updateContents',
                  value: function (L) {
                    var j = this,
                      D =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : t.default.sources.API
                    return $.call(
                      this,
                      function () {
                        return (L = new _.default(L)), j.editor.applyDelta(L, D)
                      },
                      D,
                      !0
                    )
                  }
                }
              ]),
              z
            )
          })()
        ;(C.DEFAULTS = {
          bounds: null,
          formats: null,
          modules: {},
          placeholder: '',
          readOnly: !1,
          scrollingContainer: null,
          strict: !0,
          theme: 'default'
        }),
          (C.events = t.default.events),
          (C.sources = t.default.sources),
          (C.version = '1.3.7'),
          (C.imports = {
            delta: _.default,
            parchment: l.default,
            'core/module': i.default,
            'core/theme': M.default
          })
        function q(z, R) {
          if (
            ((R = (0, p.default)(
              !0,
              {
                container: z,
                modules: { clipboard: !0, keyboard: !0, history: !0 }
              },
              R
            )),
            !R.theme || R.theme === C.DEFAULTS.theme)
          )
            R.theme = M.default
          else if (((R.theme = C.import('themes/' + R.theme)), R.theme == null))
            throw new Error(
              'Invalid theme ' + R.theme + '. Did you register it?'
            )
          var L = (0, p.default)(!0, {}, R.theme.DEFAULTS)
          ;[L, R].forEach(function (K) {
            ;(K.modules = K.modules || {}),
              Object.keys(K.modules).forEach(function (U) {
                K.modules[U] === !0 && (K.modules[U] = {})
              })
          })
          var j = Object.keys(L.modules).concat(Object.keys(R.modules)),
            D = j.reduce(function (K, U) {
              var x = C.import('modules/' + U)
              return (
                x == null
                  ? N.error(
                      'Cannot load ' +
                        U +
                        ' module. Are you sure you registered it?'
                    )
                  : (K[U] = x.DEFAULTS || {}),
                K
              )
            }, {})
          return (
            R.modules != null &&
              R.modules.toolbar &&
              R.modules.toolbar.constructor !== Object &&
              (R.modules.toolbar = { container: R.modules.toolbar }),
            (R = (0, p.default)(!0, {}, C.DEFAULTS, { modules: D }, L, R)),
            ['bounds', 'container', 'scrollingContainer'].forEach(function (K) {
              typeof R[K] == 'string' && (R[K] = document.querySelector(R[K]))
            }),
            (R.modules = Object.keys(R.modules).reduce(function (K, U) {
              return R.modules[U] && (K[U] = R.modules[U]), K
            }, {})),
            R
          )
        }
        function $(z, R, L, j) {
          if (
            this.options.strict &&
            !this.isEnabled() &&
            R === t.default.sources.USER
          )
            return new _.default()
          var D = L == null ? null : this.getSelection(),
            K = this.editor.delta,
            U = z()
          if (
            (D != null &&
              (L === !0 && (L = D.index),
              j == null ? (D = G(D, U, R)) : j !== 0 && (D = G(D, L, j, R)),
              this.setSelection(D, t.default.sources.SILENT)),
            U.length() > 0)
          ) {
            var x,
              H = [t.default.events.TEXT_CHANGE, U, K, R]
            if (
              ((x = this.emitter).emit.apply(
                x,
                [t.default.events.EDITOR_CHANGE].concat(H)
              ),
              R !== t.default.sources.SILENT)
            ) {
              var V
              ;(V = this.emitter).emit.apply(V, H)
            }
          }
          return U
        }
        function B(z, R, L, j, D) {
          var K = {}
          return (
            typeof z.index == 'number' && typeof z.length == 'number'
              ? typeof R != 'number'
                ? ((D = j), (j = L), (L = R), (R = z.length), (z = z.index))
                : ((R = z.length), (z = z.index))
              : typeof R != 'number' && ((D = j), (j = L), (L = R), (R = 0)),
            (typeof L > 'u' ? 'undefined' : O(L)) === 'object'
              ? ((K = L), (D = j))
              : typeof L == 'string' && (j != null ? (K[L] = j) : (D = L)),
            (D = D || t.default.sources.API),
            [z, R, K, D]
          )
        }
        function G(z, R, L, j) {
          if (z == null) return null
          var D = void 0,
            K = void 0
          if (R instanceof _.default) {
            var U = [z.index, z.index + z.length].map(function (W) {
                return R.transformPosition(W, j !== t.default.sources.USER)
              }),
              x = b(U, 2)
            ;(D = x[0]), (K = x[1])
          } else {
            var H = [z.index, z.index + z.length].map(function (W) {
                return W < R || (W === R && j === t.default.sources.USER)
                  ? W
                  : L >= 0
                  ? W + L
                  : Math.max(R, W + L)
              }),
              V = b(H, 2)
            ;(D = V[0]), (K = V[1])
          }
          return new a.Range(D, K - D)
        }
        ;(y.expandConfig = q), (y.overload = B), (y.default = C)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function u(l, a) {
              for (var h = 0; h < a.length; h++) {
                var r = a[h]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(l, r.key, r)
              }
            }
            return function (l, a, h) {
              return a && u(l.prototype, a), h && u(l, h), l
            }
          })(),
          b = function u(l, a, h) {
            l === null && (l = Function.prototype)
            var r = Object.getOwnPropertyDescriptor(l, a)
            if (r === void 0) {
              var p = Object.getPrototypeOf(l)
              return p === null ? void 0 : u(p, a, h)
            } else {
              if ('value' in r) return r.value
              var T = r.get
              return T === void 0 ? void 0 : T.call(h)
            }
          },
          E = s(7),
          g = o(E),
          _ = s(0),
          f = o(_)
        function o(u) {
          return u && u.__esModule ? u : { default: u }
        }
        function n(u, l) {
          if (!(u instanceof l))
            throw new TypeError('Cannot call a class as a function')
        }
        function t(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return l && (typeof l == 'object' || typeof l == 'function') ? l : u
        }
        function d(u, l) {
          if (typeof l != 'function' && l !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof l
            )
          ;(u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l))
        }
        var i = (function (u) {
          d(l, u)
          function l() {
            return (
              n(this, l),
              t(
                this,
                (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments)
              )
            )
          }
          return (
            O(
              l,
              [
                {
                  key: 'formatAt',
                  value: function (h, r, p, T) {
                    if (
                      l.compare(this.statics.blotName, p) < 0 &&
                      f.default.query(p, f.default.Scope.BLOT)
                    ) {
                      var k = this.isolate(h, r)
                      T && k.wrap(p, T)
                    } else
                      b(
                        l.prototype.__proto__ ||
                          Object.getPrototypeOf(l.prototype),
                        'formatAt',
                        this
                      ).call(this, h, r, p, T)
                  }
                },
                {
                  key: 'optimize',
                  value: function (h) {
                    if (
                      (b(
                        l.prototype.__proto__ ||
                          Object.getPrototypeOf(l.prototype),
                        'optimize',
                        this
                      ).call(this, h),
                      this.parent instanceof l &&
                        l.compare(
                          this.statics.blotName,
                          this.parent.statics.blotName
                        ) > 0)
                    ) {
                      var r = this.parent.isolate(this.offset(), this.length())
                      this.moveChildren(r), r.wrap(this)
                    }
                  }
                }
              ],
              [
                {
                  key: 'compare',
                  value: function (h, r) {
                    var p = l.order.indexOf(h),
                      T = l.order.indexOf(r)
                    return p >= 0 || T >= 0
                      ? p - T
                      : h === r
                      ? 0
                      : h < r
                      ? -1
                      : 1
                  }
                }
              ]
            ),
            l
          )
        })(f.default.Inline)
        ;(i.allowedChildren = [i, f.default.Embed, g.default]),
          (i.order = [
            'cursor',
            'inline',
            'underline',
            'strike',
            'italic',
            'bold',
            'script',
            'link',
            'code'
          ]),
          (y.default = i)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(0),
          b = E(O)
        function E(n) {
          return n && n.__esModule ? n : { default: n }
        }
        function g(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function _(n, t) {
          if (!n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t && (typeof t == 'object' || typeof t == 'function') ? t : n
        }
        function f(n, t) {
          if (typeof t != 'function' && t !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(n.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(n, t)
                : (n.__proto__ = t))
        }
        var o = (function (n) {
          f(t, n)
          function t() {
            return (
              g(this, t),
              _(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            )
          }
          return t
        })(b.default.Text)
        y.default = o
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function a(h, r) {
              for (var p = 0; p < r.length; p++) {
                var T = r[p]
                ;(T.enumerable = T.enumerable || !1),
                  (T.configurable = !0),
                  'value' in T && (T.writable = !0),
                  Object.defineProperty(h, T.key, T)
              }
            }
            return function (h, r, p) {
              return r && a(h.prototype, r), p && a(h, p), h
            }
          })(),
          b = function a(h, r, p) {
            h === null && (h = Function.prototype)
            var T = Object.getOwnPropertyDescriptor(h, r)
            if (T === void 0) {
              var k = Object.getPrototypeOf(h)
              return k === null ? void 0 : a(k, r, p)
            } else {
              if ('value' in T) return T.value
              var P = T.get
              return P === void 0 ? void 0 : P.call(p)
            }
          },
          E = s(54),
          g = o(E),
          _ = s(10),
          f = o(_)
        function o(a) {
          return a && a.__esModule ? a : { default: a }
        }
        function n(a, h) {
          if (!(a instanceof h))
            throw new TypeError('Cannot call a class as a function')
        }
        function t(a, h) {
          if (!a)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return h && (typeof h == 'object' || typeof h == 'function') ? h : a
        }
        function d(a, h) {
          if (typeof h != 'function' && h !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof h
            )
          ;(a.prototype = Object.create(h && h.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            h &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(a, h)
                : (a.__proto__ = h))
        }
        var i = (0, f.default)('quill:events'),
          u = ['selectionchange', 'mousedown', 'mouseup', 'click']
        u.forEach(function (a) {
          document.addEventListener(a, function () {
            for (var h = arguments.length, r = Array(h), p = 0; p < h; p++)
              r[p] = arguments[p]
            ;[].slice
              .call(document.querySelectorAll('.ql-container'))
              .forEach(function (T) {
                if (T.__quill && T.__quill.emitter) {
                  var k
                  ;(k = T.__quill.emitter).handleDOM.apply(k, r)
                }
              })
          })
        })
        var l = (function (a) {
          d(h, a)
          function h() {
            n(this, h)
            var r = t(
              this,
              (h.__proto__ || Object.getPrototypeOf(h)).call(this)
            )
            return (r.listeners = {}), r.on('error', i.error), r
          }
          return (
            O(h, [
              {
                key: 'emit',
                value: function () {
                  i.log.apply(i, arguments),
                    b(
                      h.prototype.__proto__ ||
                        Object.getPrototypeOf(h.prototype),
                      'emit',
                      this
                    ).apply(this, arguments)
                }
              },
              {
                key: 'handleDOM',
                value: function (p) {
                  for (
                    var T = arguments.length,
                      k = Array(T > 1 ? T - 1 : 0),
                      P = 1;
                    P < T;
                    P++
                  )
                    k[P - 1] = arguments[P]
                  ;(this.listeners[p.type] || []).forEach(function (M) {
                    var A = M.node,
                      m = M.handler
                    ;(p.target === A || A.contains(p.target)) &&
                      m.apply(void 0, [p].concat(k))
                  })
                }
              },
              {
                key: 'listenDOM',
                value: function (p, T, k) {
                  this.listeners[p] || (this.listeners[p] = []),
                    this.listeners[p].push({ node: T, handler: k })
                }
              }
            ]),
            h
          )
        })(g.default)
        ;(l.events = {
          EDITOR_CHANGE: 'editor-change',
          SCROLL_BEFORE_UPDATE: 'scroll-before-update',
          SCROLL_OPTIMIZE: 'scroll-optimize',
          SCROLL_UPDATE: 'scroll-update',
          SELECTION_CHANGE: 'selection-change',
          TEXT_CHANGE: 'text-change'
        }),
          (l.sources = { API: 'api', SILENT: 'silent', USER: 'user' }),
          (y.default = l)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        function O(E, g) {
          if (!(E instanceof g))
            throw new TypeError('Cannot call a class as a function')
        }
        var b = function E(g) {
          var _ =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          O(this, E), (this.quill = g), (this.options = _)
        }
        ;(b.DEFAULTS = {}), (y.default = b)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = ['error', 'warn', 'log', 'info'],
          b = 'warn'
        function E(_) {
          if (O.indexOf(_) <= O.indexOf(b)) {
            for (
              var f, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), t = 1;
              t < o;
              t++
            )
              n[t - 1] = arguments[t]
            ;(f = console)[_].apply(f, n)
          }
        }
        function g(_) {
          return O.reduce(function (f, o) {
            return (f[o] = E.bind(console, o, _)), f
          }, {})
        }
        ;(E.level = g.level =
          function (_) {
            b = _
          }),
          (y.default = g)
      },
      function (v, y, s) {
        var O = Array.prototype.slice,
          b = s(52),
          E = s(53),
          g = (v.exports = function (n, t, d) {
            return (
              d || (d = {}),
              n === t
                ? !0
                : n instanceof Date && t instanceof Date
                ? n.getTime() === t.getTime()
                : !n || !t || (typeof n != 'object' && typeof t != 'object')
                ? d.strict
                  ? n === t
                  : n == t
                : o(n, t, d)
            )
          })
        function _(n) {
          return n == null
        }
        function f(n) {
          return !(
            !n ||
            typeof n != 'object' ||
            typeof n.length != 'number' ||
            typeof n.copy != 'function' ||
            typeof n.slice != 'function' ||
            (n.length > 0 && typeof n[0] != 'number')
          )
        }
        function o(n, t, d) {
          var i, u
          if (_(n) || _(t) || n.prototype !== t.prototype) return !1
          if (E(n))
            return E(t) ? ((n = O.call(n)), (t = O.call(t)), g(n, t, d)) : !1
          if (f(n)) {
            if (!f(t) || n.length !== t.length) return !1
            for (i = 0; i < n.length; i++) if (n[i] !== t[i]) return !1
            return !0
          }
          try {
            var l = b(n),
              a = b(t)
          } catch {
            return !1
          }
          if (l.length != a.length) return !1
          for (l.sort(), a.sort(), i = l.length - 1; i >= 0; i--)
            if (l[i] != a[i]) return !1
          for (i = l.length - 1; i >= 0; i--)
            if (((u = l[i]), !g(n[u], t[u], d))) return !1
          return typeof n == typeof t
        }
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(1),
          b = (function () {
            function E(g, _, f) {
              f === void 0 && (f = {}), (this.attrName = g), (this.keyName = _)
              var o = O.Scope.TYPE & O.Scope.ATTRIBUTE
              f.scope != null
                ? (this.scope = (f.scope & O.Scope.LEVEL) | o)
                : (this.scope = O.Scope.ATTRIBUTE),
                f.whitelist != null && (this.whitelist = f.whitelist)
            }
            return (
              (E.keys = function (g) {
                return [].map.call(g.attributes, function (_) {
                  return _.name
                })
              }),
              (E.prototype.add = function (g, _) {
                return this.canAdd(g, _)
                  ? (g.setAttribute(this.keyName, _), !0)
                  : !1
              }),
              (E.prototype.canAdd = function (g, _) {
                var f = O.query(g, O.Scope.BLOT & (this.scope | O.Scope.TYPE))
                return f == null
                  ? !1
                  : this.whitelist == null
                  ? !0
                  : typeof _ == 'string'
                  ? this.whitelist.indexOf(_.replace(/["']/g, '')) > -1
                  : this.whitelist.indexOf(_) > -1
              }),
              (E.prototype.remove = function (g) {
                g.removeAttribute(this.keyName)
              }),
              (E.prototype.value = function (g) {
                var _ = g.getAttribute(this.keyName)
                return this.canAdd(g, _) && _ ? _ : ''
              }),
              E
            )
          })()
        y.default = b
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.Code = void 0)
        var O = (function () {
            function P(M, A) {
              var m = [],
                S = !0,
                N = !1,
                C = void 0
              try {
                for (
                  var q = M[Symbol.iterator](), $;
                  !(S = ($ = q.next()).done) &&
                  (m.push($.value), !(A && m.length === A));
                  S = !0
                );
              } catch (B) {
                ;(N = !0), (C = B)
              } finally {
                try {
                  !S && q.return && q.return()
                } finally {
                  if (N) throw C
                }
              }
              return m
            }
            return function (M, A) {
              if (Array.isArray(M)) return M
              if (Symbol.iterator in Object(M)) return P(M, A)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          b = (function () {
            function P(M, A) {
              for (var m = 0; m < A.length; m++) {
                var S = A[m]
                ;(S.enumerable = S.enumerable || !1),
                  (S.configurable = !0),
                  'value' in S && (S.writable = !0),
                  Object.defineProperty(M, S.key, S)
              }
            }
            return function (M, A, m) {
              return A && P(M.prototype, A), m && P(M, m), M
            }
          })(),
          E = function P(M, A, m) {
            M === null && (M = Function.prototype)
            var S = Object.getOwnPropertyDescriptor(M, A)
            if (S === void 0) {
              var N = Object.getPrototypeOf(M)
              return N === null ? void 0 : P(N, A, m)
            } else {
              if ('value' in S) return S.value
              var C = S.get
              return C === void 0 ? void 0 : C.call(m)
            }
          },
          g = s(2),
          _ = a(g),
          f = s(0),
          o = a(f),
          n = s(4),
          t = a(n),
          d = s(6),
          i = a(d),
          u = s(7),
          l = a(u)
        function a(P) {
          return P && P.__esModule ? P : { default: P }
        }
        function h(P, M) {
          if (!(P instanceof M))
            throw new TypeError('Cannot call a class as a function')
        }
        function r(P, M) {
          if (!P)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return M && (typeof M == 'object' || typeof M == 'function') ? M : P
        }
        function p(P, M) {
          if (typeof M != 'function' && M !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof M
            )
          ;(P.prototype = Object.create(M && M.prototype, {
            constructor: {
              value: P,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            M &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(P, M)
                : (P.__proto__ = M))
        }
        var T = (function (P) {
          p(M, P)
          function M() {
            return (
              h(this, M),
              r(
                this,
                (M.__proto__ || Object.getPrototypeOf(M)).apply(this, arguments)
              )
            )
          }
          return M
        })(i.default)
        ;(T.blotName = 'code'), (T.tagName = 'CODE')
        var k = (function (P) {
          p(M, P)
          function M() {
            return (
              h(this, M),
              r(
                this,
                (M.__proto__ || Object.getPrototypeOf(M)).apply(this, arguments)
              )
            )
          }
          return (
            b(
              M,
              [
                {
                  key: 'delta',
                  value: function () {
                    var m = this,
                      S = this.domNode.textContent
                    return (
                      S.endsWith(`
`) && (S = S.slice(0, -1)),
                      S.split(
                        `
`
                      ).reduce(function (N, C) {
                        return N.insert(C).insert(
                          `
`,
                          m.formats()
                        )
                      }, new _.default())
                    )
                  }
                },
                {
                  key: 'format',
                  value: function (m, S) {
                    if (!(m === this.statics.blotName && S)) {
                      var N = this.descendant(l.default, this.length() - 1),
                        C = O(N, 1),
                        q = C[0]
                      q != null && q.deleteAt(q.length() - 1, 1),
                        E(
                          M.prototype.__proto__ ||
                            Object.getPrototypeOf(M.prototype),
                          'format',
                          this
                        ).call(this, m, S)
                    }
                  }
                },
                {
                  key: 'formatAt',
                  value: function (m, S, N, C) {
                    if (
                      S !== 0 &&
                      !(
                        o.default.query(N, o.default.Scope.BLOCK) == null ||
                        (N === this.statics.blotName &&
                          C === this.statics.formats(this.domNode))
                      )
                    ) {
                      var q = this.newlineIndex(m)
                      if (!(q < 0 || q >= m + S)) {
                        var $ = this.newlineIndex(m, !0) + 1,
                          B = q - $ + 1,
                          G = this.isolate($, B),
                          z = G.next
                        G.format(N, C),
                          z instanceof M && z.formatAt(0, m - $ + S - B, N, C)
                      }
                    }
                  }
                },
                {
                  key: 'insertAt',
                  value: function (m, S, N) {
                    if (N == null) {
                      var C = this.descendant(l.default, m),
                        q = O(C, 2),
                        $ = q[0],
                        B = q[1]
                      $.insertAt(B, S)
                    }
                  }
                },
                {
                  key: 'length',
                  value: function () {
                    var m = this.domNode.textContent.length
                    return this.domNode.textContent.endsWith(`
`)
                      ? m
                      : m + 1
                  }
                },
                {
                  key: 'newlineIndex',
                  value: function (m) {
                    var S =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1
                    if (S)
                      return this.domNode.textContent.slice(0, m).lastIndexOf(`
`)
                    var N = this.domNode.textContent.slice(m).indexOf(`
`)
                    return N > -1 ? m + N : -1
                  }
                },
                {
                  key: 'optimize',
                  value: function (m) {
                    this.domNode.textContent.endsWith(`
`) ||
                      this.appendChild(
                        o.default.create(
                          'text',
                          `
`
                        )
                      ),
                      E(
                        M.prototype.__proto__ ||
                          Object.getPrototypeOf(M.prototype),
                        'optimize',
                        this
                      ).call(this, m)
                    var S = this.next
                    S != null &&
                      S.prev === this &&
                      S.statics.blotName === this.statics.blotName &&
                      this.statics.formats(this.domNode) ===
                        S.statics.formats(S.domNode) &&
                      (S.optimize(m), S.moveChildren(this), S.remove())
                  }
                },
                {
                  key: 'replace',
                  value: function (m) {
                    E(
                      M.prototype.__proto__ ||
                        Object.getPrototypeOf(M.prototype),
                      'replace',
                      this
                    ).call(this, m),
                      [].slice
                        .call(this.domNode.querySelectorAll('*'))
                        .forEach(function (S) {
                          var N = o.default.find(S)
                          N == null
                            ? S.parentNode.removeChild(S)
                            : N instanceof o.default.Embed
                            ? N.remove()
                            : N.unwrap()
                        })
                  }
                }
              ],
              [
                {
                  key: 'create',
                  value: function (m) {
                    var S = E(
                      M.__proto__ || Object.getPrototypeOf(M),
                      'create',
                      this
                    ).call(this, m)
                    return S.setAttribute('spellcheck', !1), S
                  }
                },
                {
                  key: 'formats',
                  value: function () {
                    return !0
                  }
                }
              ]
            ),
            M
          )
        })(t.default)
        ;(k.blotName = 'code-block'),
          (k.tagName = 'PRE'),
          (k.TAB = '  '),
          (y.Code = T),
          (y.default = k)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (z) {
                  return typeof z
                }
              : function (z) {
                  return z &&
                    typeof Symbol == 'function' &&
                    z.constructor === Symbol &&
                    z !== Symbol.prototype
                    ? 'symbol'
                    : typeof z
                },
          b = (function () {
            function z(R, L) {
              var j = [],
                D = !0,
                K = !1,
                U = void 0
              try {
                for (
                  var x = R[Symbol.iterator](), H;
                  !(D = (H = x.next()).done) &&
                  (j.push(H.value), !(L && j.length === L));
                  D = !0
                );
              } catch (V) {
                ;(K = !0), (U = V)
              } finally {
                try {
                  !D && x.return && x.return()
                } finally {
                  if (K) throw U
                }
              }
              return j
            }
            return function (R, L) {
              if (Array.isArray(R)) return R
              if (Symbol.iterator in Object(R)) return z(R, L)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          E = (function () {
            function z(R, L) {
              for (var j = 0; j < L.length; j++) {
                var D = L[j]
                ;(D.enumerable = D.enumerable || !1),
                  (D.configurable = !0),
                  'value' in D && (D.writable = !0),
                  Object.defineProperty(R, D.key, D)
              }
            }
            return function (R, L, j) {
              return L && z(R.prototype, L), j && z(R, j), R
            }
          })(),
          g = s(2),
          _ = S(g),
          f = s(20),
          o = S(f),
          n = s(0),
          t = S(n),
          d = s(13),
          i = S(d),
          u = s(24),
          l = S(u),
          a = s(4),
          h = S(a),
          r = s(16),
          p = S(r),
          T = s(21),
          k = S(T),
          P = s(11),
          M = S(P),
          A = s(3),
          m = S(A)
        function S(z) {
          return z && z.__esModule ? z : { default: z }
        }
        function N(z, R, L) {
          return (
            R in z
              ? Object.defineProperty(z, R, {
                  value: L,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (z[R] = L),
            z
          )
        }
        function C(z, R) {
          if (!(z instanceof R))
            throw new TypeError('Cannot call a class as a function')
        }
        var q = /^[ -~]*$/,
          $ = (function () {
            function z(R) {
              C(this, z), (this.scroll = R), (this.delta = this.getDelta())
            }
            return (
              E(z, [
                {
                  key: 'applyDelta',
                  value: function (L) {
                    var j = this,
                      D = !1
                    this.scroll.update()
                    var K = this.scroll.length()
                    return (
                      this.scroll.batchStart(),
                      (L = G(L)),
                      L.reduce(function (U, x) {
                        var H = x.retain || x.delete || x.insert.length || 1,
                          V = x.attributes || {}
                        if (x.insert != null) {
                          if (typeof x.insert == 'string') {
                            var W = x.insert
                            W.endsWith(`
`) &&
                              D &&
                              ((D = !1), (W = W.slice(0, -1))),
                              U >= K &&
                                !W.endsWith(`
`) &&
                                (D = !0),
                              j.scroll.insertAt(U, W)
                            var J = j.scroll.line(U),
                              re = b(J, 2),
                              ue = re[0],
                              de = re[1],
                              ge = (0, m.default)({}, (0, a.bubbleFormats)(ue))
                            if (ue instanceof h.default) {
                              var Oe = ue.descendant(t.default.Leaf, de),
                                Me = b(Oe, 1),
                                Ce = Me[0]
                              ge = (0, m.default)(ge, (0, a.bubbleFormats)(Ce))
                            }
                            V = o.default.attributes.diff(ge, V) || {}
                          } else if (O(x.insert) === 'object') {
                            var Y = Object.keys(x.insert)[0]
                            if (Y == null) return U
                            j.scroll.insertAt(U, Y, x.insert[Y])
                          }
                          K += H
                        }
                        return (
                          Object.keys(V).forEach(function (X) {
                            j.scroll.formatAt(U, H, X, V[X])
                          }),
                          U + H
                        )
                      }, 0),
                      L.reduce(function (U, x) {
                        return typeof x.delete == 'number'
                          ? (j.scroll.deleteAt(U, x.delete), U)
                          : U + (x.retain || x.insert.length || 1)
                      }, 0),
                      this.scroll.batchEnd(),
                      this.update(L)
                    )
                  }
                },
                {
                  key: 'deleteText',
                  value: function (L, j) {
                    return (
                      this.scroll.deleteAt(L, j),
                      this.update(new _.default().retain(L).delete(j))
                    )
                  }
                },
                {
                  key: 'formatLine',
                  value: function (L, j) {
                    var D = this,
                      K =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {}
                    return (
                      this.scroll.update(),
                      Object.keys(K).forEach(function (U) {
                        if (
                          !(
                            D.scroll.whitelist != null && !D.scroll.whitelist[U]
                          )
                        ) {
                          var x = D.scroll.lines(L, Math.max(j, 1)),
                            H = j
                          x.forEach(function (V) {
                            var W = V.length()
                            if (!(V instanceof i.default)) V.format(U, K[U])
                            else {
                              var J = L - V.offset(D.scroll),
                                re = V.newlineIndex(J + H) - J + 1
                              V.formatAt(J, re, U, K[U])
                            }
                            H -= W
                          })
                        }
                      }),
                      this.scroll.optimize(),
                      this.update(
                        new _.default().retain(L).retain(j, (0, k.default)(K))
                      )
                    )
                  }
                },
                {
                  key: 'formatText',
                  value: function (L, j) {
                    var D = this,
                      K =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {}
                    return (
                      Object.keys(K).forEach(function (U) {
                        D.scroll.formatAt(L, j, U, K[U])
                      }),
                      this.update(
                        new _.default().retain(L).retain(j, (0, k.default)(K))
                      )
                    )
                  }
                },
                {
                  key: 'getContents',
                  value: function (L, j) {
                    return this.delta.slice(L, L + j)
                  }
                },
                {
                  key: 'getDelta',
                  value: function () {
                    return this.scroll.lines().reduce(function (L, j) {
                      return L.concat(j.delta())
                    }, new _.default())
                  }
                },
                {
                  key: 'getFormat',
                  value: function (L) {
                    var j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      D = [],
                      K = []
                    j === 0
                      ? this.scroll.path(L).forEach(function (x) {
                          var H = b(x, 1),
                            V = H[0]
                          V instanceof h.default
                            ? D.push(V)
                            : V instanceof t.default.Leaf && K.push(V)
                        })
                      : ((D = this.scroll.lines(L, j)),
                        (K = this.scroll.descendants(t.default.Leaf, L, j)))
                    var U = [D, K].map(function (x) {
                      if (x.length === 0) return {}
                      for (
                        var H = (0, a.bubbleFormats)(x.shift());
                        Object.keys(H).length > 0;

                      ) {
                        var V = x.shift()
                        if (V == null) return H
                        H = B((0, a.bubbleFormats)(V), H)
                      }
                      return H
                    })
                    return m.default.apply(m.default, U)
                  }
                },
                {
                  key: 'getText',
                  value: function (L, j) {
                    return this.getContents(L, j)
                      .filter(function (D) {
                        return typeof D.insert == 'string'
                      })
                      .map(function (D) {
                        return D.insert
                      })
                      .join('')
                  }
                },
                {
                  key: 'insertEmbed',
                  value: function (L, j, D) {
                    return (
                      this.scroll.insertAt(L, j, D),
                      this.update(new _.default().retain(L).insert(N({}, j, D)))
                    )
                  }
                },
                {
                  key: 'insertText',
                  value: function (L, j) {
                    var D = this,
                      K =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {}
                    return (
                      (j = j
                        .replace(
                          /\r\n/g,
                          `
`
                        )
                        .replace(
                          /\r/g,
                          `
`
                        )),
                      this.scroll.insertAt(L, j),
                      Object.keys(K).forEach(function (U) {
                        D.scroll.formatAt(L, j.length, U, K[U])
                      }),
                      this.update(
                        new _.default().retain(L).insert(j, (0, k.default)(K))
                      )
                    )
                  }
                },
                {
                  key: 'isBlank',
                  value: function () {
                    if (this.scroll.children.length == 0) return !0
                    if (this.scroll.children.length > 1) return !1
                    var L = this.scroll.children.head
                    return L.statics.blotName !== h.default.blotName ||
                      L.children.length > 1
                      ? !1
                      : L.children.head instanceof p.default
                  }
                },
                {
                  key: 'removeFormat',
                  value: function (L, j) {
                    var D = this.getText(L, j),
                      K = this.scroll.line(L + j),
                      U = b(K, 2),
                      x = U[0],
                      H = U[1],
                      V = 0,
                      W = new _.default()
                    x != null &&
                      (x instanceof i.default
                        ? (V = x.newlineIndex(H) - H + 1)
                        : (V = x.length() - H),
                      (W = x.delta().slice(H, H + V - 1).insert(`
`)))
                    var J = this.getContents(L, j + V),
                      re = J.diff(new _.default().insert(D).concat(W)),
                      ue = new _.default().retain(L).concat(re)
                    return this.applyDelta(ue)
                  }
                },
                {
                  key: 'update',
                  value: function (L) {
                    var j =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : [],
                      D =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : void 0,
                      K = this.delta
                    if (
                      j.length === 1 &&
                      j[0].type === 'characterData' &&
                      j[0].target.data.match(q) &&
                      t.default.find(j[0].target)
                    ) {
                      var U = t.default.find(j[0].target),
                        x = (0, a.bubbleFormats)(U),
                        H = U.offset(this.scroll),
                        V = j[0].oldValue.replace(l.default.CONTENTS, ''),
                        W = new _.default().insert(V),
                        J = new _.default().insert(U.value()),
                        re = new _.default().retain(H).concat(W.diff(J, D))
                      ;(L = re.reduce(function (ue, de) {
                        return de.insert ? ue.insert(de.insert, x) : ue.push(de)
                      }, new _.default())),
                        (this.delta = K.compose(L))
                    } else
                      (this.delta = this.getDelta()),
                        (!L || !(0, M.default)(K.compose(L), this.delta)) &&
                          (L = K.diff(this.delta, D))
                    return L
                  }
                }
              ]),
              z
            )
          })()
        function B(z, R) {
          return Object.keys(R).reduce(function (L, j) {
            return (
              z[j] == null ||
                (R[j] === z[j]
                  ? (L[j] = R[j])
                  : Array.isArray(R[j])
                  ? R[j].indexOf(z[j]) < 0 && (L[j] = R[j].concat([z[j]]))
                  : (L[j] = [R[j], z[j]])),
              L
            )
          }, {})
        }
        function G(z) {
          return z.reduce(function (R, L) {
            if (L.insert === 1) {
              var j = (0, k.default)(L.attributes)
              return delete j.image, R.insert({ image: L.attributes.image }, j)
            }
            if (
              (L.attributes != null &&
                (L.attributes.list === !0 || L.attributes.bullet === !0) &&
                ((L = (0, k.default)(L)),
                L.attributes.list
                  ? (L.attributes.list = 'ordered')
                  : ((L.attributes.list = 'bullet'),
                    delete L.attributes.bullet)),
              typeof L.insert == 'string')
            ) {
              var D = L.insert
                .replace(
                  /\r\n/g,
                  `
`
                )
                .replace(
                  /\r/g,
                  `
`
                )
              return R.insert(D, L.attributes)
            }
            return R.push(L)
          }, new _.default())
        }
        y.default = $
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.Range = void 0)
        var O = (function () {
            function P(M, A) {
              var m = [],
                S = !0,
                N = !1,
                C = void 0
              try {
                for (
                  var q = M[Symbol.iterator](), $;
                  !(S = ($ = q.next()).done) &&
                  (m.push($.value), !(A && m.length === A));
                  S = !0
                );
              } catch (B) {
                ;(N = !0), (C = B)
              } finally {
                try {
                  !S && q.return && q.return()
                } finally {
                  if (N) throw C
                }
              }
              return m
            }
            return function (M, A) {
              if (Array.isArray(M)) return M
              if (Symbol.iterator in Object(M)) return P(M, A)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          b = (function () {
            function P(M, A) {
              for (var m = 0; m < A.length; m++) {
                var S = A[m]
                ;(S.enumerable = S.enumerable || !1),
                  (S.configurable = !0),
                  'value' in S && (S.writable = !0),
                  Object.defineProperty(M, S.key, S)
              }
            }
            return function (M, A, m) {
              return A && P(M.prototype, A), m && P(M, m), M
            }
          })(),
          E = s(0),
          g = l(E),
          _ = s(21),
          f = l(_),
          o = s(11),
          n = l(o),
          t = s(8),
          d = l(t),
          i = s(10),
          u = l(i)
        function l(P) {
          return P && P.__esModule ? P : { default: P }
        }
        function a(P) {
          if (Array.isArray(P)) {
            for (var M = 0, A = Array(P.length); M < P.length; M++) A[M] = P[M]
            return A
          } else return Array.from(P)
        }
        function h(P, M) {
          if (!(P instanceof M))
            throw new TypeError('Cannot call a class as a function')
        }
        var r = (0, u.default)('quill:selection'),
          p = function P(M) {
            var A =
              arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
            h(this, P), (this.index = M), (this.length = A)
          },
          T = (function () {
            function P(M, A) {
              var m = this
              h(this, P),
                (this.emitter = A),
                (this.scroll = M),
                (this.composing = !1),
                (this.mouseDown = !1),
                (this.root = this.scroll.domNode),
                (this.cursor = g.default.create('cursor', this)),
                (this.lastRange = this.savedRange = new p(0, 0)),
                this.handleComposition(),
                this.handleDragging(),
                this.emitter.listenDOM(
                  'selectionchange',
                  document,
                  function () {
                    m.mouseDown ||
                      setTimeout(m.update.bind(m, d.default.sources.USER), 1)
                  }
                ),
                this.emitter.on(
                  d.default.events.EDITOR_CHANGE,
                  function (S, N) {
                    S === d.default.events.TEXT_CHANGE &&
                      N.length() > 0 &&
                      m.update(d.default.sources.SILENT)
                  }
                ),
                this.emitter.on(
                  d.default.events.SCROLL_BEFORE_UPDATE,
                  function () {
                    if (m.hasFocus()) {
                      var S = m.getNativeRange()
                      S != null &&
                        S.start.node !== m.cursor.textNode &&
                        m.emitter.once(
                          d.default.events.SCROLL_UPDATE,
                          function () {
                            try {
                              m.setNativeRange(
                                S.start.node,
                                S.start.offset,
                                S.end.node,
                                S.end.offset
                              )
                            } catch {}
                          }
                        )
                    }
                  }
                ),
                this.emitter.on(
                  d.default.events.SCROLL_OPTIMIZE,
                  function (S, N) {
                    if (N.range) {
                      var C = N.range,
                        q = C.startNode,
                        $ = C.startOffset,
                        B = C.endNode,
                        G = C.endOffset
                      m.setNativeRange(q, $, B, G)
                    }
                  }
                ),
                this.update(d.default.sources.SILENT)
            }
            return (
              b(P, [
                {
                  key: 'handleComposition',
                  value: function () {
                    var A = this
                    this.root.addEventListener('compositionstart', function () {
                      A.composing = !0
                    }),
                      this.root.addEventListener('compositionend', function () {
                        if (((A.composing = !1), A.cursor.parent)) {
                          var m = A.cursor.restore()
                          if (!m) return
                          setTimeout(function () {
                            A.setNativeRange(
                              m.startNode,
                              m.startOffset,
                              m.endNode,
                              m.endOffset
                            )
                          }, 1)
                        }
                      })
                  }
                },
                {
                  key: 'handleDragging',
                  value: function () {
                    var A = this
                    this.emitter.listenDOM(
                      'mousedown',
                      document.body,
                      function () {
                        A.mouseDown = !0
                      }
                    ),
                      this.emitter.listenDOM(
                        'mouseup',
                        document.body,
                        function () {
                          ;(A.mouseDown = !1), A.update(d.default.sources.USER)
                        }
                      )
                  }
                },
                {
                  key: 'focus',
                  value: function () {
                    this.hasFocus() ||
                      (this.root.focus(), this.setRange(this.savedRange))
                  }
                },
                {
                  key: 'format',
                  value: function (A, m) {
                    if (
                      !(
                        this.scroll.whitelist != null &&
                        !this.scroll.whitelist[A]
                      )
                    ) {
                      this.scroll.update()
                      var S = this.getNativeRange()
                      if (
                        !(
                          S == null ||
                          !S.native.collapsed ||
                          g.default.query(A, g.default.Scope.BLOCK)
                        )
                      ) {
                        if (S.start.node !== this.cursor.textNode) {
                          var N = g.default.find(S.start.node, !1)
                          if (N == null) return
                          if (N instanceof g.default.Leaf) {
                            var C = N.split(S.start.offset)
                            N.parent.insertBefore(this.cursor, C)
                          } else N.insertBefore(this.cursor, S.start.node)
                          this.cursor.attach()
                        }
                        this.cursor.format(A, m),
                          this.scroll.optimize(),
                          this.setNativeRange(
                            this.cursor.textNode,
                            this.cursor.textNode.data.length
                          ),
                          this.update()
                      }
                    }
                  }
                },
                {
                  key: 'getBounds',
                  value: function (A) {
                    var m =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : 0,
                      S = this.scroll.length()
                    ;(A = Math.min(A, S - 1)), (m = Math.min(A + m, S - 1) - A)
                    var N = void 0,
                      C = this.scroll.leaf(A),
                      q = O(C, 2),
                      $ = q[0],
                      B = q[1]
                    if ($ == null) return null
                    var G = $.position(B, !0),
                      z = O(G, 2)
                    ;(N = z[0]), (B = z[1])
                    var R = document.createRange()
                    if (m > 0) {
                      R.setStart(N, B)
                      var L = this.scroll.leaf(A + m),
                        j = O(L, 2)
                      if ((($ = j[0]), (B = j[1]), $ == null)) return null
                      var D = $.position(B, !0),
                        K = O(D, 2)
                      return (
                        (N = K[0]),
                        (B = K[1]),
                        R.setEnd(N, B),
                        R.getBoundingClientRect()
                      )
                    } else {
                      var U = 'left',
                        x = void 0
                      return (
                        N instanceof Text
                          ? (B < N.data.length
                              ? (R.setStart(N, B), R.setEnd(N, B + 1))
                              : (R.setStart(N, B - 1),
                                R.setEnd(N, B),
                                (U = 'right')),
                            (x = R.getBoundingClientRect()))
                          : ((x = $.domNode.getBoundingClientRect()),
                            B > 0 && (U = 'right')),
                        {
                          bottom: x.top + x.height,
                          height: x.height,
                          left: x[U],
                          right: x[U],
                          top: x.top,
                          width: 0
                        }
                      )
                    }
                  }
                },
                {
                  key: 'getNativeRange',
                  value: function () {
                    var A = document.getSelection()
                    if (A == null || A.rangeCount <= 0) return null
                    var m = A.getRangeAt(0)
                    if (m == null) return null
                    var S = this.normalizeNative(m)
                    return r.info('getNativeRange', S), S
                  }
                },
                {
                  key: 'getRange',
                  value: function () {
                    var A = this.getNativeRange()
                    if (A == null) return [null, null]
                    var m = this.normalizedToRange(A)
                    return [m, A]
                  }
                },
                {
                  key: 'hasFocus',
                  value: function () {
                    return document.activeElement === this.root
                  }
                },
                {
                  key: 'normalizedToRange',
                  value: function (A) {
                    var m = this,
                      S = [[A.start.node, A.start.offset]]
                    A.native.collapsed || S.push([A.end.node, A.end.offset])
                    var N = S.map(function ($) {
                        var B = O($, 2),
                          G = B[0],
                          z = B[1],
                          R = g.default.find(G, !0),
                          L = R.offset(m.scroll)
                        return z === 0
                          ? L
                          : R instanceof g.default.Container
                          ? L + R.length()
                          : L + R.index(G, z)
                      }),
                      C = Math.min(
                        Math.max.apply(Math, a(N)),
                        this.scroll.length() - 1
                      ),
                      q = Math.min.apply(Math, [C].concat(a(N)))
                    return new p(q, C - q)
                  }
                },
                {
                  key: 'normalizeNative',
                  value: function (A) {
                    if (
                      !k(this.root, A.startContainer) ||
                      (!A.collapsed && !k(this.root, A.endContainer))
                    )
                      return null
                    var m = {
                      start: { node: A.startContainer, offset: A.startOffset },
                      end: { node: A.endContainer, offset: A.endOffset },
                      native: A
                    }
                    return (
                      [m.start, m.end].forEach(function (S) {
                        for (
                          var N = S.node, C = S.offset;
                          !(N instanceof Text) && N.childNodes.length > 0;

                        )
                          if (N.childNodes.length > C)
                            (N = N.childNodes[C]), (C = 0)
                          else if (N.childNodes.length === C)
                            (N = N.lastChild),
                              (C =
                                N instanceof Text
                                  ? N.data.length
                                  : N.childNodes.length + 1)
                          else break
                        ;(S.node = N), (S.offset = C)
                      }),
                      m
                    )
                  }
                },
                {
                  key: 'rangeToNative',
                  value: function (A) {
                    var m = this,
                      S = A.collapsed
                        ? [A.index]
                        : [A.index, A.index + A.length],
                      N = [],
                      C = this.scroll.length()
                    return (
                      S.forEach(function (q, $) {
                        q = Math.min(C - 1, q)
                        var B = void 0,
                          G = m.scroll.leaf(q),
                          z = O(G, 2),
                          R = z[0],
                          L = z[1],
                          j = R.position(L, $ !== 0),
                          D = O(j, 2)
                        ;(B = D[0]), (L = D[1]), N.push(B, L)
                      }),
                      N.length < 2 && (N = N.concat(N)),
                      N
                    )
                  }
                },
                {
                  key: 'scrollIntoView',
                  value: function (A) {
                    var m = this.lastRange
                    if (m != null) {
                      var S = this.getBounds(m.index, m.length)
                      if (S != null) {
                        var N = this.scroll.length() - 1,
                          C = this.scroll.line(Math.min(m.index, N)),
                          q = O(C, 1),
                          $ = q[0],
                          B = $
                        if (m.length > 0) {
                          var G = this.scroll.line(
                              Math.min(m.index + m.length, N)
                            ),
                            z = O(G, 1)
                          B = z[0]
                        }
                        if (!($ == null || B == null)) {
                          var R = A.getBoundingClientRect()
                          S.top < R.top
                            ? (A.scrollTop -= R.top - S.top)
                            : S.bottom > R.bottom &&
                              (A.scrollTop += S.bottom - R.bottom)
                        }
                      }
                    }
                  }
                },
                {
                  key: 'setNativeRange',
                  value: function (A, m) {
                    var S =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : A,
                      N =
                        arguments.length > 3 && arguments[3] !== void 0
                          ? arguments[3]
                          : m,
                      C =
                        arguments.length > 4 && arguments[4] !== void 0
                          ? arguments[4]
                          : !1
                    if (
                      (r.info('setNativeRange', A, m, S, N),
                      !(
                        A != null &&
                        (this.root.parentNode == null ||
                          A.parentNode == null ||
                          S.parentNode == null)
                      ))
                    ) {
                      var q = document.getSelection()
                      if (q != null)
                        if (A != null) {
                          this.hasFocus() || this.root.focus()
                          var $ = (this.getNativeRange() || {}).native
                          if (
                            $ == null ||
                            C ||
                            A !== $.startContainer ||
                            m !== $.startOffset ||
                            S !== $.endContainer ||
                            N !== $.endOffset
                          ) {
                            A.tagName == 'BR' &&
                              ((m = [].indexOf.call(
                                A.parentNode.childNodes,
                                A
                              )),
                              (A = A.parentNode)),
                              S.tagName == 'BR' &&
                                ((N = [].indexOf.call(
                                  S.parentNode.childNodes,
                                  S
                                )),
                                (S = S.parentNode))
                            var B = document.createRange()
                            B.setStart(A, m),
                              B.setEnd(S, N),
                              q.removeAllRanges(),
                              q.addRange(B)
                          }
                        } else
                          q.removeAllRanges(),
                            this.root.blur(),
                            document.body.focus()
                    }
                  }
                },
                {
                  key: 'setRange',
                  value: function (A) {
                    var m =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : !1,
                      S =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : d.default.sources.API
                    if (
                      (typeof m == 'string' && ((S = m), (m = !1)),
                      r.info('setRange', A),
                      A != null)
                    ) {
                      var N = this.rangeToNative(A)
                      this.setNativeRange.apply(this, a(N).concat([m]))
                    } else this.setNativeRange(null)
                    this.update(S)
                  }
                },
                {
                  key: 'update',
                  value: function () {
                    var A =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : d.default.sources.USER,
                      m = this.lastRange,
                      S = this.getRange(),
                      N = O(S, 2),
                      C = N[0],
                      q = N[1]
                    if (
                      ((this.lastRange = C),
                      this.lastRange != null &&
                        (this.savedRange = this.lastRange),
                      !(0, n.default)(m, this.lastRange))
                    ) {
                      var $
                      !this.composing &&
                        q != null &&
                        q.native.collapsed &&
                        q.start.node !== this.cursor.textNode &&
                        this.cursor.restore()
                      var B = [
                        d.default.events.SELECTION_CHANGE,
                        (0, f.default)(this.lastRange),
                        (0, f.default)(m),
                        A
                      ]
                      if (
                        (($ = this.emitter).emit.apply(
                          $,
                          [d.default.events.EDITOR_CHANGE].concat(B)
                        ),
                        A !== d.default.sources.SILENT)
                      ) {
                        var G
                        ;(G = this.emitter).emit.apply(G, B)
                      }
                    }
                  }
                }
              ]),
              P
            )
          })()
        function k(P, M) {
          try {
            M.parentNode
          } catch {
            return !1
          }
          return M instanceof Text && (M = M.parentNode), P.contains(M)
        }
        ;(y.Range = p), (y.default = T)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function d(i, u) {
              for (var l = 0; l < u.length; l++) {
                var a = u[l]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(i, a.key, a)
              }
            }
            return function (i, u, l) {
              return u && d(i.prototype, u), l && d(i, l), i
            }
          })(),
          b = function d(i, u, l) {
            i === null && (i = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(i, u)
            if (a === void 0) {
              var h = Object.getPrototypeOf(i)
              return h === null ? void 0 : d(h, u, l)
            } else {
              if ('value' in a) return a.value
              var r = a.get
              return r === void 0 ? void 0 : r.call(l)
            }
          },
          E = s(0),
          g = _(E)
        function _(d) {
          return d && d.__esModule ? d : { default: d }
        }
        function f(d, i) {
          if (!(d instanceof i))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(d, i) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return i && (typeof i == 'object' || typeof i == 'function') ? i : d
        }
        function n(d, i) {
          if (typeof i != 'function' && i !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof i
            )
          ;(d.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, i)
                : (d.__proto__ = i))
        }
        var t = (function (d) {
          n(i, d)
          function i() {
            return (
              f(this, i),
              o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments)
              )
            )
          }
          return (
            O(
              i,
              [
                {
                  key: 'insertInto',
                  value: function (l, a) {
                    l.children.length === 0
                      ? b(
                          i.prototype.__proto__ ||
                            Object.getPrototypeOf(i.prototype),
                          'insertInto',
                          this
                        ).call(this, l, a)
                      : this.remove()
                  }
                },
                {
                  key: 'length',
                  value: function () {
                    return 0
                  }
                },
                {
                  key: 'value',
                  value: function () {
                    return ''
                  }
                }
              ],
              [{ key: 'value', value: function () {} }]
            ),
            i
          )
        })(g.default.Embed)
        ;(t.blotName = 'break'), (t.tagName = 'BR'), (y.default = t)
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, t) {
                  n.__proto__ = t
                }) ||
              function (n, t) {
                for (var d in t) t.hasOwnProperty(d) && (n[d] = t[d])
              }
            return function (n, t) {
              o(n, t)
              function d() {
                this.constructor = n
              }
              n.prototype =
                t === null
                  ? Object.create(t)
                  : ((d.prototype = t.prototype), new d())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(44),
          E = s(30),
          g = s(1),
          _ = (function (o) {
            O(n, o)
            function n(t) {
              var d = o.call(this, t) || this
              return d.build(), d
            }
            return (
              (n.prototype.appendChild = function (t) {
                this.insertBefore(t)
              }),
              (n.prototype.attach = function () {
                o.prototype.attach.call(this),
                  this.children.forEach(function (t) {
                    t.attach()
                  })
              }),
              (n.prototype.build = function () {
                var t = this
                ;(this.children = new b.default()),
                  [].slice
                    .call(this.domNode.childNodes)
                    .reverse()
                    .forEach(function (d) {
                      try {
                        var i = f(d)
                        t.insertBefore(i, t.children.head || void 0)
                      } catch (u) {
                        if (u instanceof g.ParchmentError) return
                        throw u
                      }
                    })
              }),
              (n.prototype.deleteAt = function (t, d) {
                if (t === 0 && d === this.length()) return this.remove()
                this.children.forEachAt(t, d, function (i, u, l) {
                  i.deleteAt(u, l)
                })
              }),
              (n.prototype.descendant = function (t, d) {
                var i = this.children.find(d),
                  u = i[0],
                  l = i[1]
                return (t.blotName == null && t(u)) ||
                  (t.blotName != null && u instanceof t)
                  ? [u, l]
                  : u instanceof n
                  ? u.descendant(t, l)
                  : [null, -1]
              }),
              (n.prototype.descendants = function (t, d, i) {
                d === void 0 && (d = 0), i === void 0 && (i = Number.MAX_VALUE)
                var u = [],
                  l = i
                return (
                  this.children.forEachAt(d, i, function (a, h, r) {
                    ;((t.blotName == null && t(a)) ||
                      (t.blotName != null && a instanceof t)) &&
                      u.push(a),
                      a instanceof n && (u = u.concat(a.descendants(t, h, l))),
                      (l -= r)
                  }),
                  u
                )
              }),
              (n.prototype.detach = function () {
                this.children.forEach(function (t) {
                  t.detach()
                }),
                  o.prototype.detach.call(this)
              }),
              (n.prototype.formatAt = function (t, d, i, u) {
                this.children.forEachAt(t, d, function (l, a, h) {
                  l.formatAt(a, h, i, u)
                })
              }),
              (n.prototype.insertAt = function (t, d, i) {
                var u = this.children.find(t),
                  l = u[0],
                  a = u[1]
                if (l) l.insertAt(a, d, i)
                else {
                  var h = i == null ? g.create('text', d) : g.create(d, i)
                  this.appendChild(h)
                }
              }),
              (n.prototype.insertBefore = function (t, d) {
                if (
                  this.statics.allowedChildren != null &&
                  !this.statics.allowedChildren.some(function (i) {
                    return t instanceof i
                  })
                )
                  throw new g.ParchmentError(
                    'Cannot insert ' +
                      t.statics.blotName +
                      ' into ' +
                      this.statics.blotName
                  )
                t.insertInto(this, d)
              }),
              (n.prototype.length = function () {
                return this.children.reduce(function (t, d) {
                  return t + d.length()
                }, 0)
              }),
              (n.prototype.moveChildren = function (t, d) {
                this.children.forEach(function (i) {
                  t.insertBefore(i, d)
                })
              }),
              (n.prototype.optimize = function (t) {
                if (
                  (o.prototype.optimize.call(this, t),
                  this.children.length === 0)
                )
                  if (this.statics.defaultChild != null) {
                    var d = g.create(this.statics.defaultChild)
                    this.appendChild(d), d.optimize(t)
                  } else this.remove()
              }),
              (n.prototype.path = function (t, d) {
                d === void 0 && (d = !1)
                var i = this.children.find(t, d),
                  u = i[0],
                  l = i[1],
                  a = [[this, t]]
                return u instanceof n
                  ? a.concat(u.path(l, d))
                  : (u != null && a.push([u, l]), a)
              }),
              (n.prototype.removeChild = function (t) {
                this.children.remove(t)
              }),
              (n.prototype.replace = function (t) {
                t instanceof n && t.moveChildren(this),
                  o.prototype.replace.call(this, t)
              }),
              (n.prototype.split = function (t, d) {
                if ((d === void 0 && (d = !1), !d)) {
                  if (t === 0) return this
                  if (t === this.length()) return this.next
                }
                var i = this.clone()
                return (
                  this.parent.insertBefore(i, this.next),
                  this.children.forEachAt(t, this.length(), function (u, l, a) {
                    ;(u = u.split(l, d)), i.appendChild(u)
                  }),
                  i
                )
              }),
              (n.prototype.unwrap = function () {
                this.moveChildren(this.parent, this.next), this.remove()
              }),
              (n.prototype.update = function (t, d) {
                var i = this,
                  u = [],
                  l = []
                t.forEach(function (a) {
                  a.target === i.domNode &&
                    a.type === 'childList' &&
                    (u.push.apply(u, a.addedNodes),
                    l.push.apply(l, a.removedNodes))
                }),
                  l.forEach(function (a) {
                    if (
                      !(
                        a.parentNode != null &&
                        a.tagName !== 'IFRAME' &&
                        document.body.compareDocumentPosition(a) &
                          Node.DOCUMENT_POSITION_CONTAINED_BY
                      )
                    ) {
                      var h = g.find(a)
                      h != null &&
                        (h.domNode.parentNode == null ||
                          h.domNode.parentNode === i.domNode) &&
                        h.detach()
                    }
                  }),
                  u
                    .filter(function (a) {
                      return a.parentNode == i.domNode
                    })
                    .sort(function (a, h) {
                      return a === h
                        ? 0
                        : a.compareDocumentPosition(h) &
                          Node.DOCUMENT_POSITION_FOLLOWING
                        ? 1
                        : -1
                    })
                    .forEach(function (a) {
                      var h = null
                      a.nextSibling != null && (h = g.find(a.nextSibling))
                      var r = f(a)
                      ;(r.next != h || r.next == null) &&
                        (r.parent != null && r.parent.removeChild(i),
                        i.insertBefore(r, h || void 0))
                    })
              }),
              n
            )
          })(E.default)
        function f(o) {
          var n = g.find(o)
          if (n == null)
            try {
              n = g.create(o)
            } catch {
              ;(n = g.create(g.Scope.INLINE)),
                [].slice.call(o.childNodes).forEach(function (d) {
                  n.domNode.appendChild(d)
                }),
                o.parentNode && o.parentNode.replaceChild(n.domNode, o),
                n.attach()
            }
          return n
        }
        y.default = _
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, t) {
                  n.__proto__ = t
                }) ||
              function (n, t) {
                for (var d in t) t.hasOwnProperty(d) && (n[d] = t[d])
              }
            return function (n, t) {
              o(n, t)
              function d() {
                this.constructor = n
              }
              n.prototype =
                t === null
                  ? Object.create(t)
                  : ((d.prototype = t.prototype), new d())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(12),
          E = s(31),
          g = s(17),
          _ = s(1),
          f = (function (o) {
            O(n, o)
            function n(t) {
              var d = o.call(this, t) || this
              return (d.attributes = new E.default(d.domNode)), d
            }
            return (
              (n.formats = function (t) {
                if (typeof this.tagName == 'string') return !0
                if (Array.isArray(this.tagName)) return t.tagName.toLowerCase()
              }),
              (n.prototype.format = function (t, d) {
                var i = _.query(t)
                i instanceof b.default
                  ? this.attributes.attribute(i, d)
                  : d &&
                    i != null &&
                    (t !== this.statics.blotName || this.formats()[t] !== d) &&
                    this.replaceWith(t, d)
              }),
              (n.prototype.formats = function () {
                var t = this.attributes.values(),
                  d = this.statics.formats(this.domNode)
                return d != null && (t[this.statics.blotName] = d), t
              }),
              (n.prototype.replaceWith = function (t, d) {
                var i = o.prototype.replaceWith.call(this, t, d)
                return this.attributes.copy(i), i
              }),
              (n.prototype.update = function (t, d) {
                var i = this
                o.prototype.update.call(this, t, d),
                  t.some(function (u) {
                    return u.target === i.domNode && u.type === 'attributes'
                  }) && this.attributes.build()
              }),
              (n.prototype.wrap = function (t, d) {
                var i = o.prototype.wrap.call(this, t, d)
                return (
                  i instanceof n &&
                    i.statics.scope === this.statics.scope &&
                    this.attributes.move(i),
                  i
                )
              }),
              n
            )
          })(g.default)
        y.default = f
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var _ =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, o) {
                  f.__proto__ = o
                }) ||
              function (f, o) {
                for (var n in o) o.hasOwnProperty(n) && (f[n] = o[n])
              }
            return function (f, o) {
              _(f, o)
              function n() {
                this.constructor = f
              }
              f.prototype =
                o === null
                  ? Object.create(o)
                  : ((n.prototype = o.prototype), new n())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(30),
          E = s(1),
          g = (function (_) {
            O(f, _)
            function f() {
              return (_ !== null && _.apply(this, arguments)) || this
            }
            return (
              (f.value = function (o) {
                return !0
              }),
              (f.prototype.index = function (o, n) {
                return this.domNode === o ||
                  this.domNode.compareDocumentPosition(o) &
                    Node.DOCUMENT_POSITION_CONTAINED_BY
                  ? Math.min(n, 1)
                  : -1
              }),
              (f.prototype.position = function (o, n) {
                var t = [].indexOf.call(
                  this.parent.domNode.childNodes,
                  this.domNode
                )
                return o > 0 && (t += 1), [this.parent.domNode, t]
              }),
              (f.prototype.value = function () {
                var o
                return (
                  (o = {}),
                  (o[this.statics.blotName] =
                    this.statics.value(this.domNode) || !0),
                  o
                )
              }),
              (f.scope = E.Scope.INLINE_BLOT),
              f
            )
          })(b.default)
        y.default = g
      },
      function (v, y, s) {
        var O = s(11),
          b = s(3),
          E = {
            attributes: {
              compose: function (_, f, o) {
                typeof _ != 'object' && (_ = {}),
                  typeof f != 'object' && (f = {})
                var n = b(!0, {}, f)
                o ||
                  (n = Object.keys(n).reduce(function (d, i) {
                    return n[i] != null && (d[i] = n[i]), d
                  }, {}))
                for (var t in _)
                  _[t] !== void 0 && f[t] === void 0 && (n[t] = _[t])
                return Object.keys(n).length > 0 ? n : void 0
              },
              diff: function (_, f) {
                typeof _ != 'object' && (_ = {}),
                  typeof f != 'object' && (f = {})
                var o = Object.keys(_)
                  .concat(Object.keys(f))
                  .reduce(function (n, t) {
                    return (
                      O(_[t], f[t]) || (n[t] = f[t] === void 0 ? null : f[t]), n
                    )
                  }, {})
                return Object.keys(o).length > 0 ? o : void 0
              },
              transform: function (_, f, o) {
                if (typeof _ != 'object') return f
                if (typeof f == 'object') {
                  if (!o) return f
                  var n = Object.keys(f).reduce(function (t, d) {
                    return _[d] === void 0 && (t[d] = f[d]), t
                  }, {})
                  return Object.keys(n).length > 0 ? n : void 0
                }
              }
            },
            iterator: function (_) {
              return new g(_)
            },
            length: function (_) {
              return typeof _.delete == 'number'
                ? _.delete
                : typeof _.retain == 'number'
                ? _.retain
                : typeof _.insert == 'string'
                ? _.insert.length
                : 1
            }
          }
        function g(_) {
          ;(this.ops = _), (this.index = 0), (this.offset = 0)
        }
        ;(g.prototype.hasNext = function () {
          return this.peekLength() < 1 / 0
        }),
          (g.prototype.next = function (_) {
            _ || (_ = 1 / 0)
            var f = this.ops[this.index]
            if (f) {
              var o = this.offset,
                n = E.length(f)
              if (
                (_ >= n - o
                  ? ((_ = n - o), (this.index += 1), (this.offset = 0))
                  : (this.offset += _),
                typeof f.delete == 'number')
              )
                return { delete: _ }
              var t = {}
              return (
                f.attributes && (t.attributes = f.attributes),
                typeof f.retain == 'number'
                  ? (t.retain = _)
                  : typeof f.insert == 'string'
                  ? (t.insert = f.insert.substr(o, _))
                  : (t.insert = f.insert),
                t
              )
            } else return { retain: 1 / 0 }
          }),
          (g.prototype.peek = function () {
            return this.ops[this.index]
          }),
          (g.prototype.peekLength = function () {
            return this.ops[this.index]
              ? E.length(this.ops[this.index]) - this.offset
              : 1 / 0
          }),
          (g.prototype.peekType = function () {
            return this.ops[this.index]
              ? typeof this.ops[this.index].delete == 'number'
                ? 'delete'
                : typeof this.ops[this.index].retain == 'number'
                ? 'retain'
                : 'insert'
              : 'retain'
          }),
          (g.prototype.rest = function () {
            if (this.hasNext()) {
              if (this.offset === 0) return this.ops.slice(this.index)
              var _ = this.offset,
                f = this.index,
                o = this.next(),
                n = this.ops.slice(this.index)
              return (this.offset = _), (this.index = f), [o].concat(n)
            } else return []
          }),
          (v.exports = E)
      },
      function (v, y) {
        var s = (function () {
          function O(i, u) {
            return u != null && i instanceof u
          }
          var b
          try {
            b = Map
          } catch {
            b = function () {}
          }
          var E
          try {
            E = Set
          } catch {
            E = function () {}
          }
          var g
          try {
            g = Promise
          } catch {
            g = function () {}
          }
          function _(i, u, l, a, h) {
            typeof u == 'object' &&
              ((l = u.depth),
              (a = u.prototype),
              (h = u.includeNonEnumerable),
              (u = u.circular))
            var r = [],
              p = [],
              T = typeof Buffer < 'u'
            typeof u > 'u' && (u = !0), typeof l > 'u' && (l = 1 / 0)
            function k(P, M) {
              if (P === null) return null
              if (M === 0) return P
              var A, m
              if (typeof P != 'object') return P
              if (O(P, b)) A = new b()
              else if (O(P, E)) A = new E()
              else if (O(P, g))
                A = new g(function (R, L) {
                  P.then(
                    function (j) {
                      R(k(j, M - 1))
                    },
                    function (j) {
                      L(k(j, M - 1))
                    }
                  )
                })
              else if (_.__isArray(P)) A = []
              else if (_.__isRegExp(P))
                (A = new RegExp(P.source, d(P))),
                  P.lastIndex && (A.lastIndex = P.lastIndex)
              else if (_.__isDate(P)) A = new Date(P.getTime())
              else {
                if (T && Buffer.isBuffer(P))
                  return (
                    Buffer.allocUnsafe
                      ? (A = Buffer.allocUnsafe(P.length))
                      : (A = new Buffer(P.length)),
                    P.copy(A),
                    A
                  )
                O(P, Error)
                  ? (A = Object.create(P))
                  : typeof a > 'u'
                  ? ((m = Object.getPrototypeOf(P)), (A = Object.create(m)))
                  : ((A = Object.create(a)), (m = a))
              }
              if (u) {
                var S = r.indexOf(P)
                if (S != -1) return p[S]
                r.push(P), p.push(A)
              }
              O(P, b) &&
                P.forEach(function (R, L) {
                  var j = k(L, M - 1),
                    D = k(R, M - 1)
                  A.set(j, D)
                }),
                O(P, E) &&
                  P.forEach(function (R) {
                    var L = k(R, M - 1)
                    A.add(L)
                  })
              for (var N in P) {
                var C
                m && (C = Object.getOwnPropertyDescriptor(m, N)),
                  !(C && C.set == null) && (A[N] = k(P[N], M - 1))
              }
              if (Object.getOwnPropertySymbols)
                for (
                  var q = Object.getOwnPropertySymbols(P), N = 0;
                  N < q.length;
                  N++
                ) {
                  var $ = q[N],
                    B = Object.getOwnPropertyDescriptor(P, $)
                  ;(B && !B.enumerable && !h) ||
                    ((A[$] = k(P[$], M - 1)),
                    B.enumerable ||
                      Object.defineProperty(A, $, { enumerable: !1 }))
                }
              if (h)
                for (
                  var G = Object.getOwnPropertyNames(P), N = 0;
                  N < G.length;
                  N++
                ) {
                  var z = G[N],
                    B = Object.getOwnPropertyDescriptor(P, z)
                  ;(B && B.enumerable) ||
                    ((A[z] = k(P[z], M - 1)),
                    Object.defineProperty(A, z, { enumerable: !1 }))
                }
              return A
            }
            return k(i, l)
          }
          _.clonePrototype = function (u) {
            if (u === null) return null
            var l = function () {}
            return (l.prototype = u), new l()
          }
          function f(i) {
            return Object.prototype.toString.call(i)
          }
          _.__objToStr = f
          function o(i) {
            return typeof i == 'object' && f(i) === '[object Date]'
          }
          _.__isDate = o
          function n(i) {
            return typeof i == 'object' && f(i) === '[object Array]'
          }
          _.__isArray = n
          function t(i) {
            return typeof i == 'object' && f(i) === '[object RegExp]'
          }
          _.__isRegExp = t
          function d(i) {
            var u = ''
            return (
              i.global && (u += 'g'),
              i.ignoreCase && (u += 'i'),
              i.multiline && (u += 'm'),
              u
            )
          }
          return (_.__getRegExpFlags = d), _
        })()
        typeof v == 'object' && v.exports && (v.exports = s)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function A(m, S) {
              var N = [],
                C = !0,
                q = !1,
                $ = void 0
              try {
                for (
                  var B = m[Symbol.iterator](), G;
                  !(C = (G = B.next()).done) &&
                  (N.push(G.value), !(S && N.length === S));
                  C = !0
                );
              } catch (z) {
                ;(q = !0), ($ = z)
              } finally {
                try {
                  !C && B.return && B.return()
                } finally {
                  if (q) throw $
                }
              }
              return N
            }
            return function (m, S) {
              if (Array.isArray(m)) return m
              if (Symbol.iterator in Object(m)) return A(m, S)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          b = (function () {
            function A(m, S) {
              for (var N = 0; N < S.length; N++) {
                var C = S[N]
                ;(C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(m, C.key, C)
              }
            }
            return function (m, S, N) {
              return S && A(m.prototype, S), N && A(m, N), m
            }
          })(),
          E = function A(m, S, N) {
            m === null && (m = Function.prototype)
            var C = Object.getOwnPropertyDescriptor(m, S)
            if (C === void 0) {
              var q = Object.getPrototypeOf(m)
              return q === null ? void 0 : A(q, S, N)
            } else {
              if ('value' in C) return C.value
              var $ = C.get
              return $ === void 0 ? void 0 : $.call(N)
            }
          },
          g = s(0),
          _ = r(g),
          f = s(8),
          o = r(f),
          n = s(4),
          t = r(n),
          d = s(16),
          i = r(d),
          u = s(13),
          l = r(u),
          a = s(25),
          h = r(a)
        function r(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function p(A, m) {
          if (!(A instanceof m))
            throw new TypeError('Cannot call a class as a function')
        }
        function T(A, m) {
          if (!A)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return m && (typeof m == 'object' || typeof m == 'function') ? m : A
        }
        function k(A, m) {
          if (typeof m != 'function' && m !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof m
            )
          ;(A.prototype = Object.create(m && m.prototype, {
            constructor: {
              value: A,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            m &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(A, m)
                : (A.__proto__ = m))
        }
        function P(A) {
          return A instanceof t.default || A instanceof n.BlockEmbed
        }
        var M = (function (A) {
          k(m, A)
          function m(S, N) {
            p(this, m)
            var C = T(
              this,
              (m.__proto__ || Object.getPrototypeOf(m)).call(this, S)
            )
            return (
              (C.emitter = N.emitter),
              Array.isArray(N.whitelist) &&
                (C.whitelist = N.whitelist.reduce(function (q, $) {
                  return (q[$] = !0), q
                }, {})),
              C.domNode.addEventListener('DOMNodeInserted', function () {}),
              C.optimize(),
              C.enable(),
              C
            )
          }
          return (
            b(m, [
              {
                key: 'batchStart',
                value: function () {
                  this.batch = !0
                }
              },
              {
                key: 'batchEnd',
                value: function () {
                  ;(this.batch = !1), this.optimize()
                }
              },
              {
                key: 'deleteAt',
                value: function (N, C) {
                  var q = this.line(N),
                    $ = O(q, 2),
                    B = $[0],
                    G = $[1],
                    z = this.line(N + C),
                    R = O(z, 1),
                    L = R[0]
                  if (
                    (E(
                      m.prototype.__proto__ ||
                        Object.getPrototypeOf(m.prototype),
                      'deleteAt',
                      this
                    ).call(this, N, C),
                    L != null && B !== L && G > 0)
                  ) {
                    if (
                      B instanceof n.BlockEmbed ||
                      L instanceof n.BlockEmbed
                    ) {
                      this.optimize()
                      return
                    }
                    if (B instanceof l.default) {
                      var j = B.newlineIndex(B.length(), !0)
                      if (j > -1 && ((B = B.split(j + 1)), B === L)) {
                        this.optimize()
                        return
                      }
                    } else if (L instanceof l.default) {
                      var D = L.newlineIndex(0)
                      D > -1 && L.split(D + 1)
                    }
                    var K =
                      L.children.head instanceof i.default
                        ? null
                        : L.children.head
                    B.moveChildren(L, K), B.remove()
                  }
                  this.optimize()
                }
              },
              {
                key: 'enable',
                value: function () {
                  var N =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : !0
                  this.domNode.setAttribute('contenteditable', N)
                }
              },
              {
                key: 'formatAt',
                value: function (N, C, q, $) {
                  ;(this.whitelist != null && !this.whitelist[q]) ||
                    (E(
                      m.prototype.__proto__ ||
                        Object.getPrototypeOf(m.prototype),
                      'formatAt',
                      this
                    ).call(this, N, C, q, $),
                    this.optimize())
                }
              },
              {
                key: 'insertAt',
                value: function (N, C, q) {
                  if (
                    !(q != null && this.whitelist != null && !this.whitelist[C])
                  ) {
                    if (N >= this.length())
                      if (
                        q == null ||
                        _.default.query(C, _.default.Scope.BLOCK) == null
                      ) {
                        var $ = _.default.create(this.statics.defaultChild)
                        this.appendChild($),
                          q == null &&
                            C.endsWith(`
`) &&
                            (C = C.slice(0, -1)),
                          $.insertAt(0, C, q)
                      } else {
                        var B = _.default.create(C, q)
                        this.appendChild(B)
                      }
                    else
                      E(
                        m.prototype.__proto__ ||
                          Object.getPrototypeOf(m.prototype),
                        'insertAt',
                        this
                      ).call(this, N, C, q)
                    this.optimize()
                  }
                }
              },
              {
                key: 'insertBefore',
                value: function (N, C) {
                  if (N.statics.scope === _.default.Scope.INLINE_BLOT) {
                    var q = _.default.create(this.statics.defaultChild)
                    q.appendChild(N), (N = q)
                  }
                  E(
                    m.prototype.__proto__ || Object.getPrototypeOf(m.prototype),
                    'insertBefore',
                    this
                  ).call(this, N, C)
                }
              },
              {
                key: 'leaf',
                value: function (N) {
                  return this.path(N).pop() || [null, -1]
                }
              },
              {
                key: 'line',
                value: function (N) {
                  return N === this.length()
                    ? this.line(N - 1)
                    : this.descendant(P, N)
                }
              },
              {
                key: 'lines',
                value: function () {
                  var N =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 0,
                    C =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : Number.MAX_VALUE,
                    q = function $(B, G, z) {
                      var R = [],
                        L = z
                      return (
                        B.children.forEachAt(G, z, function (j, D, K) {
                          P(j)
                            ? R.push(j)
                            : j instanceof _.default.Container &&
                              (R = R.concat($(j, D, L))),
                            (L -= K)
                        }),
                        R
                      )
                    }
                  return q(this, N, C)
                }
              },
              {
                key: 'optimize',
                value: function () {
                  var N =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                    C =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {}
                  this.batch !== !0 &&
                    (E(
                      m.prototype.__proto__ ||
                        Object.getPrototypeOf(m.prototype),
                      'optimize',
                      this
                    ).call(this, N, C),
                    N.length > 0 &&
                      this.emitter.emit(o.default.events.SCROLL_OPTIMIZE, N, C))
                }
              },
              {
                key: 'path',
                value: function (N) {
                  return E(
                    m.prototype.__proto__ || Object.getPrototypeOf(m.prototype),
                    'path',
                    this
                  )
                    .call(this, N)
                    .slice(1)
                }
              },
              {
                key: 'update',
                value: function (N) {
                  if (this.batch !== !0) {
                    var C = o.default.sources.USER
                    typeof N == 'string' && (C = N),
                      Array.isArray(N) || (N = this.observer.takeRecords()),
                      N.length > 0 &&
                        this.emitter.emit(
                          o.default.events.SCROLL_BEFORE_UPDATE,
                          C,
                          N
                        ),
                      E(
                        m.prototype.__proto__ ||
                          Object.getPrototypeOf(m.prototype),
                        'update',
                        this
                      ).call(this, N.concat([])),
                      N.length > 0 &&
                        this.emitter.emit(o.default.events.SCROLL_UPDATE, C, N)
                  }
                }
              }
            ]),
            m
          )
        })(_.default.Scroll)
        ;(M.blotName = 'scroll'),
          (M.className = 'ql-editor'),
          (M.tagName = 'DIV'),
          (M.defaultChild = 'block'),
          (M.allowedChildren = [t.default, n.BlockEmbed, h.default]),
          (y.default = M)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.SHORTKEY = y.default = void 0)
        var O =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (x) {
                  return typeof x
                }
              : function (x) {
                  return x &&
                    typeof Symbol == 'function' &&
                    x.constructor === Symbol &&
                    x !== Symbol.prototype
                    ? 'symbol'
                    : typeof x
                },
          b = (function () {
            function x(H, V) {
              var W = [],
                J = !0,
                re = !1,
                ue = void 0
              try {
                for (
                  var de = H[Symbol.iterator](), ge;
                  !(J = (ge = de.next()).done) &&
                  (W.push(ge.value), !(V && W.length === V));
                  J = !0
                );
              } catch (Oe) {
                ;(re = !0), (ue = Oe)
              } finally {
                try {
                  !J && de.return && de.return()
                } finally {
                  if (re) throw ue
                }
              }
              return W
            }
            return function (H, V) {
              if (Array.isArray(H)) return H
              if (Symbol.iterator in Object(H)) return x(H, V)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          E = (function () {
            function x(H, V) {
              for (var W = 0; W < V.length; W++) {
                var J = V[W]
                ;(J.enumerable = J.enumerable || !1),
                  (J.configurable = !0),
                  'value' in J && (J.writable = !0),
                  Object.defineProperty(H, J.key, J)
              }
            }
            return function (H, V, W) {
              return V && x(H.prototype, V), W && x(H, W), H
            }
          })(),
          g = s(21),
          _ = A(g),
          f = s(11),
          o = A(f),
          n = s(3),
          t = A(n),
          d = s(2),
          i = A(d),
          u = s(20),
          l = A(u),
          a = s(0),
          h = A(a),
          r = s(5),
          p = A(r),
          T = s(10),
          k = A(T),
          P = s(9),
          M = A(P)
        function A(x) {
          return x && x.__esModule ? x : { default: x }
        }
        function m(x, H, V) {
          return (
            H in x
              ? Object.defineProperty(x, H, {
                  value: V,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (x[H] = V),
            x
          )
        }
        function S(x, H) {
          if (!(x instanceof H))
            throw new TypeError('Cannot call a class as a function')
        }
        function N(x, H) {
          if (!x)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return H && (typeof H == 'object' || typeof H == 'function') ? H : x
        }
        function C(x, H) {
          if (typeof H != 'function' && H !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof H
            )
          ;(x.prototype = Object.create(H && H.prototype, {
            constructor: {
              value: x,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            H &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(x, H)
                : (x.__proto__ = H))
        }
        var q = (0, k.default)('quill:keyboard'),
          $ = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey',
          B = (function (x) {
            C(H, x),
              E(H, null, [
                {
                  key: 'match',
                  value: function (W, J) {
                    return (
                      (J = U(J)),
                      ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(
                        function (re) {
                          return !!J[re] !== W[re] && J[re] !== null
                        }
                      )
                        ? !1
                        : J.key === (W.which || W.keyCode)
                    )
                  }
                }
              ])
            function H(V, W) {
              S(this, H)
              var J = N(
                this,
                (H.__proto__ || Object.getPrototypeOf(H)).call(this, V, W)
              )
              return (
                (J.bindings = {}),
                Object.keys(J.options.bindings).forEach(function (re) {
                  ;(re === 'list autofill' &&
                    V.scroll.whitelist != null &&
                    !V.scroll.whitelist.list) ||
                    (J.options.bindings[re] &&
                      J.addBinding(J.options.bindings[re]))
                }),
                J.addBinding({ key: H.keys.ENTER, shiftKey: null }, j),
                J.addBinding(
                  {
                    key: H.keys.ENTER,
                    metaKey: null,
                    ctrlKey: null,
                    altKey: null
                  },
                  function () {}
                ),
                /Firefox/i.test(navigator.userAgent)
                  ? (J.addBinding(
                      { key: H.keys.BACKSPACE },
                      { collapsed: !0 },
                      z
                    ),
                    J.addBinding({ key: H.keys.DELETE }, { collapsed: !0 }, R))
                  : (J.addBinding(
                      { key: H.keys.BACKSPACE },
                      { collapsed: !0, prefix: /^.?$/ },
                      z
                    ),
                    J.addBinding(
                      { key: H.keys.DELETE },
                      { collapsed: !0, suffix: /^.?$/ },
                      R
                    )),
                J.addBinding({ key: H.keys.BACKSPACE }, { collapsed: !1 }, L),
                J.addBinding({ key: H.keys.DELETE }, { collapsed: !1 }, L),
                J.addBinding(
                  {
                    key: H.keys.BACKSPACE,
                    altKey: null,
                    ctrlKey: null,
                    metaKey: null,
                    shiftKey: null
                  },
                  { collapsed: !0, offset: 0 },
                  z
                ),
                J.listen(),
                J
              )
            }
            return (
              E(H, [
                {
                  key: 'addBinding',
                  value: function (W) {
                    var J =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {},
                      re =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {},
                      ue = U(W)
                    if (ue == null || ue.key == null)
                      return q.warn(
                        'Attempted to add invalid keyboard binding',
                        ue
                      )
                    typeof J == 'function' && (J = { handler: J }),
                      typeof re == 'function' && (re = { handler: re }),
                      (ue = (0, t.default)(ue, J, re)),
                      (this.bindings[ue.key] = this.bindings[ue.key] || []),
                      this.bindings[ue.key].push(ue)
                  }
                },
                {
                  key: 'listen',
                  value: function () {
                    var W = this
                    this.quill.root.addEventListener('keydown', function (J) {
                      if (!J.defaultPrevented) {
                        var re = J.which || J.keyCode,
                          ue = (W.bindings[re] || []).filter(function (Ee) {
                            return H.match(J, Ee)
                          })
                        if (ue.length !== 0) {
                          var de = W.quill.getSelection()
                          if (!(de == null || !W.quill.hasFocus())) {
                            var ge = W.quill.getLine(de.index),
                              Oe = b(ge, 2),
                              Me = Oe[0],
                              Ce = Oe[1],
                              Y = W.quill.getLeaf(de.index),
                              X = b(Y, 2),
                              ne = X[0],
                              ie = X[1],
                              ee =
                                de.length === 0
                                  ? [ne, ie]
                                  : W.quill.getLeaf(de.index + de.length),
                              he = b(ee, 2),
                              fe = he[0],
                              ve = he[1],
                              xe =
                                ne instanceof h.default.Text
                                  ? ne.value().slice(0, ie)
                                  : '',
                              Be =
                                fe instanceof h.default.Text
                                  ? fe.value().slice(ve)
                                  : '',
                              Ae = {
                                collapsed: de.length === 0,
                                empty: de.length === 0 && Me.length() <= 1,
                                format: W.quill.getFormat(de),
                                offset: Ce,
                                prefix: xe,
                                suffix: Be
                              },
                              at = ue.some(function (Ee) {
                                if (
                                  (Ee.collapsed != null &&
                                    Ee.collapsed !== Ae.collapsed) ||
                                  (Ee.empty != null && Ee.empty !== Ae.empty) ||
                                  (Ee.offset != null && Ee.offset !== Ae.offset)
                                )
                                  return !1
                                if (Array.isArray(Ee.format)) {
                                  if (
                                    Ee.format.every(function (Ke) {
                                      return Ae.format[Ke] == null
                                    })
                                  )
                                    return !1
                                } else if (
                                  O(Ee.format) === 'object' &&
                                  !Object.keys(Ee.format).every(function (Ke) {
                                    return Ee.format[Ke] === !0
                                      ? Ae.format[Ke] != null
                                      : Ee.format[Ke] === !1
                                      ? Ae.format[Ke] == null
                                      : (0, o.default)(
                                          Ee.format[Ke],
                                          Ae.format[Ke]
                                        )
                                  })
                                )
                                  return !1
                                return (Ee.prefix != null &&
                                  !Ee.prefix.test(Ae.prefix)) ||
                                  (Ee.suffix != null &&
                                    !Ee.suffix.test(Ae.suffix))
                                  ? !1
                                  : Ee.handler.call(W, de, Ae) !== !0
                              })
                            at && J.preventDefault()
                          }
                        }
                      }
                    })
                  }
                }
              ]),
              H
            )
          })(M.default)
        ;(B.keys = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        }),
          (B.DEFAULTS = {
            bindings: {
              bold: K('bold'),
              italic: K('italic'),
              underline: K('underline'),
              indent: {
                key: B.keys.TAB,
                format: ['blockquote', 'indent', 'list'],
                handler: function (H, V) {
                  if (V.collapsed && V.offset !== 0) return !0
                  this.quill.format('indent', '+1', p.default.sources.USER)
                }
              },
              outdent: {
                key: B.keys.TAB,
                shiftKey: !0,
                format: ['blockquote', 'indent', 'list'],
                handler: function (H, V) {
                  if (V.collapsed && V.offset !== 0) return !0
                  this.quill.format('indent', '-1', p.default.sources.USER)
                }
              },
              'outdent backspace': {
                key: B.keys.BACKSPACE,
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ['indent', 'list'],
                offset: 0,
                handler: function (H, V) {
                  V.format.indent != null
                    ? this.quill.format('indent', '-1', p.default.sources.USER)
                    : V.format.list != null &&
                      this.quill.format('list', !1, p.default.sources.USER)
                }
              },
              'indent code-block': D(!0),
              'outdent code-block': D(!1),
              'remove tab': {
                key: B.keys.TAB,
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler: function (H) {
                  this.quill.deleteText(H.index - 1, 1, p.default.sources.USER)
                }
              },
              tab: {
                key: B.keys.TAB,
                handler: function (H) {
                  this.quill.history.cutoff()
                  var V = new i.default()
                    .retain(H.index)
                    .delete(H.length)
                    .insert('	')
                  this.quill.updateContents(V, p.default.sources.USER),
                    this.quill.history.cutoff(),
                    this.quill.setSelection(
                      H.index + 1,
                      p.default.sources.SILENT
                    )
                }
              },
              'list empty enter': {
                key: B.keys.ENTER,
                collapsed: !0,
                format: ['list'],
                empty: !0,
                handler: function (H, V) {
                  this.quill.format('list', !1, p.default.sources.USER),
                    V.format.indent &&
                      this.quill.format('indent', !1, p.default.sources.USER)
                }
              },
              'checklist enter': {
                key: B.keys.ENTER,
                collapsed: !0,
                format: { list: 'checked' },
                handler: function (H) {
                  var V = this.quill.getLine(H.index),
                    W = b(V, 2),
                    J = W[0],
                    re = W[1],
                    ue = (0, t.default)({}, J.formats(), { list: 'checked' }),
                    de = new i.default()
                      .retain(H.index)
                      .insert(
                        `
`,
                        ue
                      )
                      .retain(J.length() - re - 1)
                      .retain(1, { list: 'unchecked' })
                  this.quill.updateContents(de, p.default.sources.USER),
                    this.quill.setSelection(
                      H.index + 1,
                      p.default.sources.SILENT
                    ),
                    this.quill.scrollIntoView()
                }
              },
              'header enter': {
                key: B.keys.ENTER,
                collapsed: !0,
                format: ['header'],
                suffix: /^$/,
                handler: function (H, V) {
                  var W = this.quill.getLine(H.index),
                    J = b(W, 2),
                    re = J[0],
                    ue = J[1],
                    de = new i.default()
                      .retain(H.index)
                      .insert(
                        `
`,
                        V.format
                      )
                      .retain(re.length() - ue - 1)
                      .retain(1, { header: null })
                  this.quill.updateContents(de, p.default.sources.USER),
                    this.quill.setSelection(
                      H.index + 1,
                      p.default.sources.SILENT
                    ),
                    this.quill.scrollIntoView()
                }
              },
              'list autofill': {
                key: ' ',
                collapsed: !0,
                format: { list: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function (H, V) {
                  var W = V.prefix.length,
                    J = this.quill.getLine(H.index),
                    re = b(J, 2),
                    ue = re[0],
                    de = re[1]
                  if (de > W) return !0
                  var ge = void 0
                  switch (V.prefix.trim()) {
                    case '[]':
                    case '[ ]':
                      ge = 'unchecked'
                      break
                    case '[x]':
                      ge = 'checked'
                      break
                    case '-':
                    case '*':
                      ge = 'bullet'
                      break
                    default:
                      ge = 'ordered'
                  }
                  this.quill.insertText(H.index, ' ', p.default.sources.USER),
                    this.quill.history.cutoff()
                  var Oe = new i.default()
                    .retain(H.index - de)
                    .delete(W + 1)
                    .retain(ue.length() - 2 - de)
                    .retain(1, { list: ge })
                  this.quill.updateContents(Oe, p.default.sources.USER),
                    this.quill.history.cutoff(),
                    this.quill.setSelection(
                      H.index - W,
                      p.default.sources.SILENT
                    )
                }
              },
              'code exit': {
                key: B.keys.ENTER,
                collapsed: !0,
                format: ['code-block'],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function (H) {
                  var V = this.quill.getLine(H.index),
                    W = b(V, 2),
                    J = W[0],
                    re = W[1],
                    ue = new i.default()
                      .retain(H.index + J.length() - re - 2)
                      .retain(1, { 'code-block': null })
                      .delete(1)
                  this.quill.updateContents(ue, p.default.sources.USER)
                }
              },
              'embed left': G(B.keys.LEFT, !1),
              'embed left shift': G(B.keys.LEFT, !0),
              'embed right': G(B.keys.RIGHT, !1),
              'embed right shift': G(B.keys.RIGHT, !0)
            }
          })
        function G(x, H) {
          var V,
            W = x === B.keys.LEFT ? 'prefix' : 'suffix'
          return (
            (V = { key: x, shiftKey: H, altKey: null }),
            m(V, W, /^$/),
            m(V, 'handler', function (re) {
              var ue = re.index
              x === B.keys.RIGHT && (ue += re.length + 1)
              var de = this.quill.getLeaf(ue),
                ge = b(de, 1),
                Oe = ge[0]
              return Oe instanceof h.default.Embed
                ? (x === B.keys.LEFT
                    ? H
                      ? this.quill.setSelection(
                          re.index - 1,
                          re.length + 1,
                          p.default.sources.USER
                        )
                      : this.quill.setSelection(
                          re.index - 1,
                          p.default.sources.USER
                        )
                    : H
                    ? this.quill.setSelection(
                        re.index,
                        re.length + 1,
                        p.default.sources.USER
                      )
                    : this.quill.setSelection(
                        re.index + re.length + 1,
                        p.default.sources.USER
                      ),
                  !1)
                : !0
            }),
            V
          )
        }
        function z(x, H) {
          if (!(x.index === 0 || this.quill.getLength() <= 1)) {
            var V = this.quill.getLine(x.index),
              W = b(V, 1),
              J = W[0],
              re = {}
            if (H.offset === 0) {
              var ue = this.quill.getLine(x.index - 1),
                de = b(ue, 1),
                ge = de[0]
              if (ge != null && ge.length() > 1) {
                var Oe = J.formats(),
                  Me = this.quill.getFormat(x.index - 1, 1)
                re = l.default.attributes.diff(Oe, Me) || {}
              }
            }
            var Ce = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(H.prefix) ? 2 : 1
            this.quill.deleteText(x.index - Ce, Ce, p.default.sources.USER),
              Object.keys(re).length > 0 &&
                this.quill.formatLine(
                  x.index - Ce,
                  Ce,
                  re,
                  p.default.sources.USER
                ),
              this.quill.focus()
          }
        }
        function R(x, H) {
          var V = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(H.suffix) ? 2 : 1
          if (!(x.index >= this.quill.getLength() - V)) {
            var W = {},
              J = 0,
              re = this.quill.getLine(x.index),
              ue = b(re, 1),
              de = ue[0]
            if (H.offset >= de.length() - 1) {
              var ge = this.quill.getLine(x.index + 1),
                Oe = b(ge, 1),
                Me = Oe[0]
              if (Me) {
                var Ce = de.formats(),
                  Y = this.quill.getFormat(x.index, 1)
                ;(W = l.default.attributes.diff(Ce, Y) || {}), (J = Me.length())
              }
            }
            this.quill.deleteText(x.index, V, p.default.sources.USER),
              Object.keys(W).length > 0 &&
                this.quill.formatLine(
                  x.index + J - 1,
                  V,
                  W,
                  p.default.sources.USER
                )
          }
        }
        function L(x) {
          var H = this.quill.getLines(x),
            V = {}
          if (H.length > 1) {
            var W = H[0].formats(),
              J = H[H.length - 1].formats()
            V = l.default.attributes.diff(J, W) || {}
          }
          this.quill.deleteText(x, p.default.sources.USER),
            Object.keys(V).length > 0 &&
              this.quill.formatLine(x.index, 1, V, p.default.sources.USER),
            this.quill.setSelection(x.index, p.default.sources.SILENT),
            this.quill.focus()
        }
        function j(x, H) {
          var V = this
          x.length > 0 && this.quill.scroll.deleteAt(x.index, x.length)
          var W = Object.keys(H.format).reduce(function (J, re) {
            return (
              h.default.query(re, h.default.Scope.BLOCK) &&
                !Array.isArray(H.format[re]) &&
                (J[re] = H.format[re]),
              J
            )
          }, {})
          this.quill.insertText(
            x.index,
            `
`,
            W,
            p.default.sources.USER
          ),
            this.quill.setSelection(x.index + 1, p.default.sources.SILENT),
            this.quill.focus(),
            Object.keys(H.format).forEach(function (J) {
              W[J] == null &&
                (Array.isArray(H.format[J]) ||
                  (J !== 'link' &&
                    V.quill.format(J, H.format[J], p.default.sources.USER)))
            })
        }
        function D(x) {
          return {
            key: B.keys.TAB,
            shiftKey: !x,
            format: { 'code-block': !0 },
            handler: function (V) {
              var W = h.default.query('code-block'),
                J = V.index,
                re = V.length,
                ue = this.quill.scroll.descendant(W, J),
                de = b(ue, 2),
                ge = de[0],
                Oe = de[1]
              if (ge != null) {
                var Me = this.quill.getIndex(ge),
                  Ce = ge.newlineIndex(Oe, !0) + 1,
                  Y = ge.newlineIndex(Me + Oe + re),
                  X = ge.domNode.textContent.slice(Ce, Y).split(`
`)
                ;(Oe = 0),
                  X.forEach(function (ne, ie) {
                    x
                      ? (ge.insertAt(Ce + Oe, W.TAB),
                        (Oe += W.TAB.length),
                        ie === 0 ? (J += W.TAB.length) : (re += W.TAB.length))
                      : ne.startsWith(W.TAB) &&
                        (ge.deleteAt(Ce + Oe, W.TAB.length),
                        (Oe -= W.TAB.length),
                        ie === 0 ? (J -= W.TAB.length) : (re -= W.TAB.length)),
                      (Oe += ne.length + 1)
                  }),
                  this.quill.update(p.default.sources.USER),
                  this.quill.setSelection(J, re, p.default.sources.SILENT)
              }
            }
          }
        }
        function K(x) {
          return {
            key: x[0].toUpperCase(),
            shortKey: !0,
            handler: function (V, W) {
              this.quill.format(x, !W.format[x], p.default.sources.USER)
            }
          }
        }
        function U(x) {
          if (typeof x == 'string' || typeof x == 'number') return U({ key: x })
          if (
            ((typeof x > 'u' ? 'undefined' : O(x)) === 'object' &&
              (x = (0, _.default)(x, !1)),
            typeof x.key == 'string')
          )
            if (B.keys[x.key.toUpperCase()] != null)
              x.key = B.keys[x.key.toUpperCase()]
            else if (x.key.length === 1)
              x.key = x.key.toUpperCase().charCodeAt(0)
            else return null
          return x.shortKey && ((x[$] = x.shortKey), delete x.shortKey), x
        }
        ;(y.default = B), (y.SHORTKEY = $)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function l(a, h) {
              var r = [],
                p = !0,
                T = !1,
                k = void 0
              try {
                for (
                  var P = a[Symbol.iterator](), M;
                  !(p = (M = P.next()).done) &&
                  (r.push(M.value), !(h && r.length === h));
                  p = !0
                );
              } catch (A) {
                ;(T = !0), (k = A)
              } finally {
                try {
                  !p && P.return && P.return()
                } finally {
                  if (T) throw k
                }
              }
              return r
            }
            return function (a, h) {
              if (Array.isArray(a)) return a
              if (Symbol.iterator in Object(a)) return l(a, h)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          b = function l(a, h, r) {
            a === null && (a = Function.prototype)
            var p = Object.getOwnPropertyDescriptor(a, h)
            if (p === void 0) {
              var T = Object.getPrototypeOf(a)
              return T === null ? void 0 : l(T, h, r)
            } else {
              if ('value' in p) return p.value
              var k = p.get
              return k === void 0 ? void 0 : k.call(r)
            }
          },
          E = (function () {
            function l(a, h) {
              for (var r = 0; r < h.length; r++) {
                var p = h[r]
                ;(p.enumerable = p.enumerable || !1),
                  (p.configurable = !0),
                  'value' in p && (p.writable = !0),
                  Object.defineProperty(a, p.key, p)
              }
            }
            return function (a, h, r) {
              return h && l(a.prototype, h), r && l(a, r), a
            }
          })(),
          g = s(0),
          _ = n(g),
          f = s(7),
          o = n(f)
        function n(l) {
          return l && l.__esModule ? l : { default: l }
        }
        function t(l, a) {
          if (!(l instanceof a))
            throw new TypeError('Cannot call a class as a function')
        }
        function d(l, a) {
          if (!l)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return a && (typeof a == 'object' || typeof a == 'function') ? a : l
        }
        function i(l, a) {
          if (typeof a != 'function' && a !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof a
            )
          ;(l.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: l,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            a &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(l, a)
                : (l.__proto__ = a))
        }
        var u = (function (l) {
          i(a, l), E(a, null, [{ key: 'value', value: function () {} }])
          function a(h, r) {
            t(this, a)
            var p = d(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, h)
            )
            return (
              (p.selection = r),
              (p.textNode = document.createTextNode(a.CONTENTS)),
              p.domNode.appendChild(p.textNode),
              (p._length = 0),
              p
            )
          }
          return (
            E(a, [
              {
                key: 'detach',
                value: function () {
                  this.parent != null && this.parent.removeChild(this)
                }
              },
              {
                key: 'format',
                value: function (r, p) {
                  if (this._length !== 0)
                    return b(
                      a.prototype.__proto__ ||
                        Object.getPrototypeOf(a.prototype),
                      'format',
                      this
                    ).call(this, r, p)
                  for (
                    var T = this, k = 0;
                    T != null && T.statics.scope !== _.default.Scope.BLOCK_BLOT;

                  )
                    (k += T.offset(T.parent)), (T = T.parent)
                  T != null &&
                    ((this._length = a.CONTENTS.length),
                    T.optimize(),
                    T.formatAt(k, a.CONTENTS.length, r, p),
                    (this._length = 0))
                }
              },
              {
                key: 'index',
                value: function (r, p) {
                  return r === this.textNode
                    ? 0
                    : b(
                        a.prototype.__proto__ ||
                          Object.getPrototypeOf(a.prototype),
                        'index',
                        this
                      ).call(this, r, p)
                }
              },
              {
                key: 'length',
                value: function () {
                  return this._length
                }
              },
              {
                key: 'position',
                value: function () {
                  return [this.textNode, this.textNode.data.length]
                }
              },
              {
                key: 'remove',
                value: function () {
                  b(
                    a.prototype.__proto__ || Object.getPrototypeOf(a.prototype),
                    'remove',
                    this
                  ).call(this),
                    (this.parent = null)
                }
              },
              {
                key: 'restore',
                value: function () {
                  if (!(this.selection.composing || this.parent == null)) {
                    var r = this.textNode,
                      p = this.selection.getNativeRange(),
                      T = void 0,
                      k = void 0,
                      P = void 0
                    if (p != null && p.start.node === r && p.end.node === r) {
                      var M = [r, p.start.offset, p.end.offset]
                      ;(T = M[0]), (k = M[1]), (P = M[2])
                    }
                    for (
                      ;
                      this.domNode.lastChild != null &&
                      this.domNode.lastChild !== this.textNode;

                    )
                      this.domNode.parentNode.insertBefore(
                        this.domNode.lastChild,
                        this.domNode
                      )
                    if (this.textNode.data !== a.CONTENTS) {
                      var A = this.textNode.data.split(a.CONTENTS).join('')
                      this.next instanceof o.default
                        ? ((T = this.next.domNode),
                          this.next.insertAt(0, A),
                          (this.textNode.data = a.CONTENTS))
                        : ((this.textNode.data = A),
                          this.parent.insertBefore(
                            _.default.create(this.textNode),
                            this
                          ),
                          (this.textNode = document.createTextNode(a.CONTENTS)),
                          this.domNode.appendChild(this.textNode))
                    }
                    if ((this.remove(), k != null)) {
                      var m = [k, P].map(function (N) {
                          return Math.max(0, Math.min(T.data.length, N - 1))
                        }),
                        S = O(m, 2)
                      return (
                        (k = S[0]),
                        (P = S[1]),
                        {
                          startNode: T,
                          startOffset: k,
                          endNode: T,
                          endOffset: P
                        }
                      )
                    }
                  }
                }
              },
              {
                key: 'update',
                value: function (r, p) {
                  var T = this
                  if (
                    r.some(function (P) {
                      return (
                        P.type === 'characterData' && P.target === T.textNode
                      )
                    })
                  ) {
                    var k = this.restore()
                    k && (p.range = k)
                  }
                }
              },
              {
                key: 'value',
                value: function () {
                  return ''
                }
              }
            ]),
            a
          )
        })(_.default.Embed)
        ;(u.blotName = 'cursor'),
          (u.className = 'ql-cursor'),
          (u.tagName = 'span'),
          (u.CONTENTS = '\uFEFF'),
          (y.default = u)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(0),
          b = _(O),
          E = s(4),
          g = _(E)
        function _(d) {
          return d && d.__esModule ? d : { default: d }
        }
        function f(d, i) {
          if (!(d instanceof i))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(d, i) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return i && (typeof i == 'object' || typeof i == 'function') ? i : d
        }
        function n(d, i) {
          if (typeof i != 'function' && i !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof i
            )
          ;(d.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, i)
                : (d.__proto__ = i))
        }
        var t = (function (d) {
          n(i, d)
          function i() {
            return (
              f(this, i),
              o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments)
              )
            )
          }
          return i
        })(b.default.Container)
        ;(t.allowedChildren = [g.default, E.BlockEmbed, t]), (y.default = t)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.ColorStyle = y.ColorClass = y.ColorAttributor = void 0)
        var O = (function () {
            function u(l, a) {
              for (var h = 0; h < a.length; h++) {
                var r = a[h]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(l, r.key, r)
              }
            }
            return function (l, a, h) {
              return a && u(l.prototype, a), h && u(l, h), l
            }
          })(),
          b = function u(l, a, h) {
            l === null && (l = Function.prototype)
            var r = Object.getOwnPropertyDescriptor(l, a)
            if (r === void 0) {
              var p = Object.getPrototypeOf(l)
              return p === null ? void 0 : u(p, a, h)
            } else {
              if ('value' in r) return r.value
              var T = r.get
              return T === void 0 ? void 0 : T.call(h)
            }
          },
          E = s(0),
          g = _(E)
        function _(u) {
          return u && u.__esModule ? u : { default: u }
        }
        function f(u, l) {
          if (!(u instanceof l))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return l && (typeof l == 'object' || typeof l == 'function') ? l : u
        }
        function n(u, l) {
          if (typeof l != 'function' && l !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof l
            )
          ;(u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l))
        }
        var t = (function (u) {
            n(l, u)
            function l() {
              return (
                f(this, l),
                o(
                  this,
                  (l.__proto__ || Object.getPrototypeOf(l)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              O(l, [
                {
                  key: 'value',
                  value: function (h) {
                    var r = b(
                      l.prototype.__proto__ ||
                        Object.getPrototypeOf(l.prototype),
                      'value',
                      this
                    ).call(this, h)
                    return r.startsWith('rgb(')
                      ? ((r = r.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '')),
                        '#' +
                          r
                            .split(',')
                            .map(function (p) {
                              return ('00' + parseInt(p).toString(16)).slice(-2)
                            })
                            .join(''))
                      : r
                  }
                }
              ]),
              l
            )
          })(g.default.Attributor.Style),
          d = new g.default.Attributor.Class('color', 'ql-color', {
            scope: g.default.Scope.INLINE
          }),
          i = new t('color', 'color', { scope: g.default.Scope.INLINE })
        ;(y.ColorAttributor = t), (y.ColorClass = d), (y.ColorStyle = i)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.sanitize = y.default = void 0)
        var O = (function () {
            function i(u, l) {
              for (var a = 0; a < l.length; a++) {
                var h = l[a]
                ;(h.enumerable = h.enumerable || !1),
                  (h.configurable = !0),
                  'value' in h && (h.writable = !0),
                  Object.defineProperty(u, h.key, h)
              }
            }
            return function (u, l, a) {
              return l && i(u.prototype, l), a && i(u, a), u
            }
          })(),
          b = function i(u, l, a) {
            u === null && (u = Function.prototype)
            var h = Object.getOwnPropertyDescriptor(u, l)
            if (h === void 0) {
              var r = Object.getPrototypeOf(u)
              return r === null ? void 0 : i(r, l, a)
            } else {
              if ('value' in h) return h.value
              var p = h.get
              return p === void 0 ? void 0 : p.call(a)
            }
          },
          E = s(6),
          g = _(E)
        function _(i) {
          return i && i.__esModule ? i : { default: i }
        }
        function f(i, u) {
          if (!(i instanceof u))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(i, u) {
          if (!i)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return u && (typeof u == 'object' || typeof u == 'function') ? u : i
        }
        function n(i, u) {
          if (typeof u != 'function' && u !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof u
            )
          ;(i.prototype = Object.create(u && u.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            u &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(i, u)
                : (i.__proto__ = u))
        }
        var t = (function (i) {
          n(u, i)
          function u() {
            return (
              f(this, u),
              o(
                this,
                (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments)
              )
            )
          }
          return (
            O(
              u,
              [
                {
                  key: 'format',
                  value: function (a, h) {
                    if (a !== this.statics.blotName || !h)
                      return b(
                        u.prototype.__proto__ ||
                          Object.getPrototypeOf(u.prototype),
                        'format',
                        this
                      ).call(this, a, h)
                    ;(h = this.constructor.sanitize(h)),
                      this.domNode.setAttribute('href', h)
                  }
                }
              ],
              [
                {
                  key: 'create',
                  value: function (a) {
                    var h = b(
                      u.__proto__ || Object.getPrototypeOf(u),
                      'create',
                      this
                    ).call(this, a)
                    return (
                      (a = this.sanitize(a)),
                      h.setAttribute('href', a),
                      h.setAttribute('rel', 'noopener noreferrer'),
                      h.setAttribute('target', '_blank'),
                      h
                    )
                  }
                },
                {
                  key: 'formats',
                  value: function (a) {
                    return a.getAttribute('href')
                  }
                },
                {
                  key: 'sanitize',
                  value: function (a) {
                    return d(a, this.PROTOCOL_WHITELIST)
                      ? a
                      : this.SANITIZED_URL
                  }
                }
              ]
            ),
            u
          )
        })(g.default)
        ;(t.blotName = 'link'),
          (t.tagName = 'A'),
          (t.SANITIZED_URL = 'about:blank'),
          (t.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'])
        function d(i, u) {
          var l = document.createElement('a')
          l.href = i
          var a = l.href.slice(0, l.href.indexOf(':'))
          return u.indexOf(a) > -1
        }
        ;(y.default = t), (y.sanitize = d)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (u) {
                  return typeof u
                }
              : function (u) {
                  return u &&
                    typeof Symbol == 'function' &&
                    u.constructor === Symbol &&
                    u !== Symbol.prototype
                    ? 'symbol'
                    : typeof u
                },
          b = (function () {
            function u(l, a) {
              for (var h = 0; h < a.length; h++) {
                var r = a[h]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(l, r.key, r)
              }
            }
            return function (l, a, h) {
              return a && u(l.prototype, a), h && u(l, h), l
            }
          })(),
          E = s(23),
          g = o(E),
          _ = s(107),
          f = o(_)
        function o(u) {
          return u && u.__esModule ? u : { default: u }
        }
        function n(u, l) {
          if (!(u instanceof l))
            throw new TypeError('Cannot call a class as a function')
        }
        var t = 0
        function d(u, l) {
          u.setAttribute(l, u.getAttribute(l) !== 'true')
        }
        var i = (function () {
          function u(l) {
            var a = this
            n(this, u),
              (this.select = l),
              (this.container = document.createElement('span')),
              this.buildPicker(),
              (this.select.style.display = 'none'),
              this.select.parentNode.insertBefore(this.container, this.select),
              this.label.addEventListener('mousedown', function () {
                a.togglePicker()
              }),
              this.label.addEventListener('keydown', function (h) {
                switch (h.keyCode) {
                  case g.default.keys.ENTER:
                    a.togglePicker()
                    break
                  case g.default.keys.ESCAPE:
                    a.escape(), h.preventDefault()
                    break
                }
              }),
              this.select.addEventListener('change', this.update.bind(this))
          }
          return (
            b(u, [
              {
                key: 'togglePicker',
                value: function () {
                  this.container.classList.toggle('ql-expanded'),
                    d(this.label, 'aria-expanded'),
                    d(this.options, 'aria-hidden')
                }
              },
              {
                key: 'buildItem',
                value: function (a) {
                  var h = this,
                    r = document.createElement('span')
                  return (
                    (r.tabIndex = '0'),
                    r.setAttribute('role', 'button'),
                    r.classList.add('ql-picker-item'),
                    a.hasAttribute('value') &&
                      r.setAttribute('data-value', a.getAttribute('value')),
                    a.textContent &&
                      r.setAttribute('data-label', a.textContent),
                    r.addEventListener('click', function () {
                      h.selectItem(r, !0)
                    }),
                    r.addEventListener('keydown', function (p) {
                      switch (p.keyCode) {
                        case g.default.keys.ENTER:
                          h.selectItem(r, !0), p.preventDefault()
                          break
                        case g.default.keys.ESCAPE:
                          h.escape(), p.preventDefault()
                          break
                      }
                    }),
                    r
                  )
                }
              },
              {
                key: 'buildLabel',
                value: function () {
                  var a = document.createElement('span')
                  return (
                    a.classList.add('ql-picker-label'),
                    (a.innerHTML = f.default),
                    (a.tabIndex = '0'),
                    a.setAttribute('role', 'button'),
                    a.setAttribute('aria-expanded', 'false'),
                    this.container.appendChild(a),
                    a
                  )
                }
              },
              {
                key: 'buildOptions',
                value: function () {
                  var a = this,
                    h = document.createElement('span')
                  h.classList.add('ql-picker-options'),
                    h.setAttribute('aria-hidden', 'true'),
                    (h.tabIndex = '-1'),
                    (h.id = 'ql-picker-options-' + t),
                    (t += 1),
                    this.label.setAttribute('aria-controls', h.id),
                    (this.options = h),
                    [].slice.call(this.select.options).forEach(function (r) {
                      var p = a.buildItem(r)
                      h.appendChild(p), r.selected === !0 && a.selectItem(p)
                    }),
                    this.container.appendChild(h)
                }
              },
              {
                key: 'buildPicker',
                value: function () {
                  var a = this
                  ;[].slice.call(this.select.attributes).forEach(function (h) {
                    a.container.setAttribute(h.name, h.value)
                  }),
                    this.container.classList.add('ql-picker'),
                    (this.label = this.buildLabel()),
                    this.buildOptions()
                }
              },
              {
                key: 'escape',
                value: function () {
                  var a = this
                  this.close(),
                    setTimeout(function () {
                      return a.label.focus()
                    }, 1)
                }
              },
              {
                key: 'close',
                value: function () {
                  this.container.classList.remove('ql-expanded'),
                    this.label.setAttribute('aria-expanded', 'false'),
                    this.options.setAttribute('aria-hidden', 'true')
                }
              },
              {
                key: 'selectItem',
                value: function (a) {
                  var h =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1,
                    r = this.container.querySelector('.ql-selected')
                  if (
                    a !== r &&
                    (r != null && r.classList.remove('ql-selected'),
                    a != null &&
                      (a.classList.add('ql-selected'),
                      (this.select.selectedIndex = [].indexOf.call(
                        a.parentNode.children,
                        a
                      )),
                      a.hasAttribute('data-value')
                        ? this.label.setAttribute(
                            'data-value',
                            a.getAttribute('data-value')
                          )
                        : this.label.removeAttribute('data-value'),
                      a.hasAttribute('data-label')
                        ? this.label.setAttribute(
                            'data-label',
                            a.getAttribute('data-label')
                          )
                        : this.label.removeAttribute('data-label'),
                      h))
                  ) {
                    if (typeof Event == 'function')
                      this.select.dispatchEvent(new Event('change'))
                    else if (
                      (typeof Event > 'u' ? 'undefined' : O(Event)) === 'object'
                    ) {
                      var p = document.createEvent('Event')
                      p.initEvent('change', !0, !0),
                        this.select.dispatchEvent(p)
                    }
                    this.close()
                  }
                }
              },
              {
                key: 'update',
                value: function () {
                  var a = void 0
                  if (this.select.selectedIndex > -1) {
                    var h =
                      this.container.querySelector('.ql-picker-options')
                        .children[this.select.selectedIndex]
                    ;(a = this.select.options[this.select.selectedIndex]),
                      this.selectItem(h)
                  } else this.selectItem(null)
                  var r =
                    a != null &&
                    a !== this.select.querySelector('option[selected]')
                  this.label.classList.toggle('ql-active', r)
                }
              }
            ]),
            u
          )
        })()
        y.default = i
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(0),
          b = q(O),
          E = s(5),
          g = q(E),
          _ = s(4),
          f = q(_),
          o = s(16),
          n = q(o),
          t = s(25),
          d = q(t),
          i = s(24),
          u = q(i),
          l = s(35),
          a = q(l),
          h = s(6),
          r = q(h),
          p = s(22),
          T = q(p),
          k = s(7),
          P = q(k),
          M = s(55),
          A = q(M),
          m = s(42),
          S = q(m),
          N = s(23),
          C = q(N)
        function q($) {
          return $ && $.__esModule ? $ : { default: $ }
        }
        g.default.register({
          'blots/block': f.default,
          'blots/block/embed': _.BlockEmbed,
          'blots/break': n.default,
          'blots/container': d.default,
          'blots/cursor': u.default,
          'blots/embed': a.default,
          'blots/inline': r.default,
          'blots/scroll': T.default,
          'blots/text': P.default,
          'modules/clipboard': A.default,
          'modules/history': S.default,
          'modules/keyboard': C.default
        }),
          b.default.register(
            f.default,
            n.default,
            u.default,
            r.default,
            T.default,
            P.default
          ),
          (y.default = g.default)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(1),
          b = (function () {
            function E(g) {
              ;(this.domNode = g), (this.domNode[O.DATA_KEY] = { blot: this })
            }
            return (
              Object.defineProperty(E.prototype, 'statics', {
                get: function () {
                  return this.constructor
                },
                enumerable: !0,
                configurable: !0
              }),
              (E.create = function (g) {
                if (this.tagName == null)
                  throw new O.ParchmentError('Blot definition missing tagName')
                var _
                return (
                  Array.isArray(this.tagName)
                    ? (typeof g == 'string' &&
                        ((g = g.toUpperCase()),
                        parseInt(g).toString() === g && (g = parseInt(g))),
                      typeof g == 'number'
                        ? (_ = document.createElement(this.tagName[g - 1]))
                        : this.tagName.indexOf(g) > -1
                        ? (_ = document.createElement(g))
                        : (_ = document.createElement(this.tagName[0])))
                    : (_ = document.createElement(this.tagName)),
                  this.className && _.classList.add(this.className),
                  _
                )
              }),
              (E.prototype.attach = function () {
                this.parent != null && (this.scroll = this.parent.scroll)
              }),
              (E.prototype.clone = function () {
                var g = this.domNode.cloneNode(!1)
                return O.create(g)
              }),
              (E.prototype.detach = function () {
                this.parent != null && this.parent.removeChild(this),
                  delete this.domNode[O.DATA_KEY]
              }),
              (E.prototype.deleteAt = function (g, _) {
                var f = this.isolate(g, _)
                f.remove()
              }),
              (E.prototype.formatAt = function (g, _, f, o) {
                var n = this.isolate(g, _)
                if (O.query(f, O.Scope.BLOT) != null && o) n.wrap(f, o)
                else if (O.query(f, O.Scope.ATTRIBUTE) != null) {
                  var t = O.create(this.statics.scope)
                  n.wrap(t), t.format(f, o)
                }
              }),
              (E.prototype.insertAt = function (g, _, f) {
                var o = f == null ? O.create('text', _) : O.create(_, f),
                  n = this.split(g)
                this.parent.insertBefore(o, n)
              }),
              (E.prototype.insertInto = function (g, _) {
                _ === void 0 && (_ = null),
                  this.parent != null && this.parent.children.remove(this)
                var f = null
                g.children.insertBefore(this, _),
                  _ != null && (f = _.domNode),
                  (this.domNode.parentNode != g.domNode ||
                    this.domNode.nextSibling != f) &&
                    g.domNode.insertBefore(this.domNode, f),
                  (this.parent = g),
                  this.attach()
              }),
              (E.prototype.isolate = function (g, _) {
                var f = this.split(g)
                return f.split(_), f
              }),
              (E.prototype.length = function () {
                return 1
              }),
              (E.prototype.offset = function (g) {
                return (
                  g === void 0 && (g = this.parent),
                  this.parent == null || this == g
                    ? 0
                    : this.parent.children.offset(this) + this.parent.offset(g)
                )
              }),
              (E.prototype.optimize = function (g) {
                this.domNode[O.DATA_KEY] != null &&
                  delete this.domNode[O.DATA_KEY].mutations
              }),
              (E.prototype.remove = function () {
                this.domNode.parentNode != null &&
                  this.domNode.parentNode.removeChild(this.domNode),
                  this.detach()
              }),
              (E.prototype.replace = function (g) {
                g.parent != null &&
                  (g.parent.insertBefore(this, g.next), g.remove())
              }),
              (E.prototype.replaceWith = function (g, _) {
                var f = typeof g == 'string' ? O.create(g, _) : g
                return f.replace(this), f
              }),
              (E.prototype.split = function (g, _) {
                return g === 0 ? this : this.next
              }),
              (E.prototype.update = function (g, _) {}),
              (E.prototype.wrap = function (g, _) {
                var f = typeof g == 'string' ? O.create(g, _) : g
                return (
                  this.parent != null && this.parent.insertBefore(f, this.next),
                  f.appendChild(this),
                  f
                )
              }),
              (E.blotName = 'abstract'),
              E
            )
          })()
        y.default = b
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(12),
          b = s(32),
          E = s(33),
          g = s(1),
          _ = (function () {
            function f(o) {
              ;(this.attributes = {}), (this.domNode = o), this.build()
            }
            return (
              (f.prototype.attribute = function (o, n) {
                n
                  ? o.add(this.domNode, n) &&
                    (o.value(this.domNode) != null
                      ? (this.attributes[o.attrName] = o)
                      : delete this.attributes[o.attrName])
                  : (o.remove(this.domNode), delete this.attributes[o.attrName])
              }),
              (f.prototype.build = function () {
                var o = this
                this.attributes = {}
                var n = O.default.keys(this.domNode),
                  t = b.default.keys(this.domNode),
                  d = E.default.keys(this.domNode)
                n.concat(t)
                  .concat(d)
                  .forEach(function (i) {
                    var u = g.query(i, g.Scope.ATTRIBUTE)
                    u instanceof O.default && (o.attributes[u.attrName] = u)
                  })
              }),
              (f.prototype.copy = function (o) {
                var n = this
                Object.keys(this.attributes).forEach(function (t) {
                  var d = n.attributes[t].value(n.domNode)
                  o.format(t, d)
                })
              }),
              (f.prototype.move = function (o) {
                var n = this
                this.copy(o),
                  Object.keys(this.attributes).forEach(function (t) {
                    n.attributes[t].remove(n.domNode)
                  }),
                  (this.attributes = {})
              }),
              (f.prototype.values = function () {
                var o = this
                return Object.keys(this.attributes).reduce(function (n, t) {
                  return (n[t] = o.attributes[t].value(o.domNode)), n
                }, {})
              }),
              f
            )
          })()
        y.default = _
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var _ =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, o) {
                  f.__proto__ = o
                }) ||
              function (f, o) {
                for (var n in o) o.hasOwnProperty(n) && (f[n] = o[n])
              }
            return function (f, o) {
              _(f, o)
              function n() {
                this.constructor = f
              }
              f.prototype =
                o === null
                  ? Object.create(o)
                  : ((n.prototype = o.prototype), new n())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(12)
        function E(_, f) {
          var o = _.getAttribute('class') || ''
          return o.split(/\s+/).filter(function (n) {
            return n.indexOf(f + '-') === 0
          })
        }
        var g = (function (_) {
          O(f, _)
          function f() {
            return (_ !== null && _.apply(this, arguments)) || this
          }
          return (
            (f.keys = function (o) {
              return (o.getAttribute('class') || '')
                .split(/\s+/)
                .map(function (n) {
                  return n.split('-').slice(0, -1).join('-')
                })
            }),
            (f.prototype.add = function (o, n) {
              return this.canAdd(o, n)
                ? (this.remove(o), o.classList.add(this.keyName + '-' + n), !0)
                : !1
            }),
            (f.prototype.remove = function (o) {
              var n = E(o, this.keyName)
              n.forEach(function (t) {
                o.classList.remove(t)
              }),
                o.classList.length === 0 && o.removeAttribute('class')
            }),
            (f.prototype.value = function (o) {
              var n = E(o, this.keyName)[0] || '',
                t = n.slice(this.keyName.length + 1)
              return this.canAdd(o, t) ? t : ''
            }),
            f
          )
        })(b.default)
        y.default = g
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var _ =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, o) {
                  f.__proto__ = o
                }) ||
              function (f, o) {
                for (var n in o) o.hasOwnProperty(n) && (f[n] = o[n])
              }
            return function (f, o) {
              _(f, o)
              function n() {
                this.constructor = f
              }
              f.prototype =
                o === null
                  ? Object.create(o)
                  : ((n.prototype = o.prototype), new n())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(12)
        function E(_) {
          var f = _.split('-'),
            o = f
              .slice(1)
              .map(function (n) {
                return n[0].toUpperCase() + n.slice(1)
              })
              .join('')
          return f[0] + o
        }
        var g = (function (_) {
          O(f, _)
          function f() {
            return (_ !== null && _.apply(this, arguments)) || this
          }
          return (
            (f.keys = function (o) {
              return (o.getAttribute('style') || '')
                .split(';')
                .map(function (n) {
                  var t = n.split(':')
                  return t[0].trim()
                })
            }),
            (f.prototype.add = function (o, n) {
              return this.canAdd(o, n)
                ? ((o.style[E(this.keyName)] = n), !0)
                : !1
            }),
            (f.prototype.remove = function (o) {
              ;(o.style[E(this.keyName)] = ''),
                o.getAttribute('style') || o.removeAttribute('style')
            }),
            (f.prototype.value = function (o) {
              var n = o.style[E(this.keyName)]
              return this.canAdd(o, n) ? n : ''
            }),
            f
          )
        })(b.default)
        y.default = g
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
          function g(_, f) {
            for (var o = 0; o < f.length; o++) {
              var n = f[o]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(_, n.key, n)
            }
          }
          return function (_, f, o) {
            return f && g(_.prototype, f), o && g(_, o), _
          }
        })()
        function b(g, _) {
          if (!(g instanceof _))
            throw new TypeError('Cannot call a class as a function')
        }
        var E = (function () {
          function g(_, f) {
            b(this, g),
              (this.quill = _),
              (this.options = f),
              (this.modules = {})
          }
          return (
            O(g, [
              {
                key: 'init',
                value: function () {
                  var f = this
                  Object.keys(this.options.modules).forEach(function (o) {
                    f.modules[o] == null && f.addModule(o)
                  })
                }
              },
              {
                key: 'addModule',
                value: function (f) {
                  var o = this.quill.constructor.import('modules/' + f)
                  return (
                    (this.modules[f] = new o(
                      this.quill,
                      this.options.modules[f] || {}
                    )),
                    this.modules[f]
                  )
                }
              }
            ]),
            g
          )
        })()
        ;(E.DEFAULTS = { modules: {} }),
          (E.themes = { default: E }),
          (y.default = E)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function l(a, h) {
              for (var r = 0; r < h.length; r++) {
                var p = h[r]
                ;(p.enumerable = p.enumerable || !1),
                  (p.configurable = !0),
                  'value' in p && (p.writable = !0),
                  Object.defineProperty(a, p.key, p)
              }
            }
            return function (a, h, r) {
              return h && l(a.prototype, h), r && l(a, r), a
            }
          })(),
          b = function l(a, h, r) {
            a === null && (a = Function.prototype)
            var p = Object.getOwnPropertyDescriptor(a, h)
            if (p === void 0) {
              var T = Object.getPrototypeOf(a)
              return T === null ? void 0 : l(T, h, r)
            } else {
              if ('value' in p) return p.value
              var k = p.get
              return k === void 0 ? void 0 : k.call(r)
            }
          },
          E = s(0),
          g = o(E),
          _ = s(7),
          f = o(_)
        function o(l) {
          return l && l.__esModule ? l : { default: l }
        }
        function n(l, a) {
          if (!(l instanceof a))
            throw new TypeError('Cannot call a class as a function')
        }
        function t(l, a) {
          if (!l)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return a && (typeof a == 'object' || typeof a == 'function') ? a : l
        }
        function d(l, a) {
          if (typeof a != 'function' && a !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof a
            )
          ;(l.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: l,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            a &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(l, a)
                : (l.__proto__ = a))
        }
        var i = '\uFEFF',
          u = (function (l) {
            d(a, l)
            function a(h) {
              n(this, a)
              var r = t(
                this,
                (a.__proto__ || Object.getPrototypeOf(a)).call(this, h)
              )
              return (
                (r.contentNode = document.createElement('span')),
                r.contentNode.setAttribute('contenteditable', !1),
                [].slice.call(r.domNode.childNodes).forEach(function (p) {
                  r.contentNode.appendChild(p)
                }),
                (r.leftGuard = document.createTextNode(i)),
                (r.rightGuard = document.createTextNode(i)),
                r.domNode.appendChild(r.leftGuard),
                r.domNode.appendChild(r.contentNode),
                r.domNode.appendChild(r.rightGuard),
                r
              )
            }
            return (
              O(a, [
                {
                  key: 'index',
                  value: function (r, p) {
                    return r === this.leftGuard
                      ? 0
                      : r === this.rightGuard
                      ? 1
                      : b(
                          a.prototype.__proto__ ||
                            Object.getPrototypeOf(a.prototype),
                          'index',
                          this
                        ).call(this, r, p)
                  }
                },
                {
                  key: 'restore',
                  value: function (r) {
                    var p = void 0,
                      T = void 0,
                      k = r.data.split(i).join('')
                    if (r === this.leftGuard)
                      if (this.prev instanceof f.default) {
                        var P = this.prev.length()
                        this.prev.insertAt(P, k),
                          (p = {
                            startNode: this.prev.domNode,
                            startOffset: P + k.length
                          })
                      } else
                        (T = document.createTextNode(k)),
                          this.parent.insertBefore(g.default.create(T), this),
                          (p = { startNode: T, startOffset: k.length })
                    else
                      r === this.rightGuard &&
                        (this.next instanceof f.default
                          ? (this.next.insertAt(0, k),
                            (p = {
                              startNode: this.next.domNode,
                              startOffset: k.length
                            }))
                          : ((T = document.createTextNode(k)),
                            this.parent.insertBefore(
                              g.default.create(T),
                              this.next
                            ),
                            (p = { startNode: T, startOffset: k.length })))
                    return (r.data = i), p
                  }
                },
                {
                  key: 'update',
                  value: function (r, p) {
                    var T = this
                    r.forEach(function (k) {
                      if (
                        k.type === 'characterData' &&
                        (k.target === T.leftGuard || k.target === T.rightGuard)
                      ) {
                        var P = T.restore(k.target)
                        P && (p.range = P)
                      }
                    })
                  }
                }
              ]),
              a
            )
          })(g.default.Embed)
        y.default = u
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.AlignStyle = y.AlignClass = y.AlignAttribute = void 0)
        var O = s(0),
          b = E(O)
        function E(n) {
          return n && n.__esModule ? n : { default: n }
        }
        var g = {
            scope: b.default.Scope.BLOCK,
            whitelist: ['right', 'center', 'justify']
          },
          _ = new b.default.Attributor.Attribute('align', 'align', g),
          f = new b.default.Attributor.Class('align', 'ql-align', g),
          o = new b.default.Attributor.Style('align', 'text-align', g)
        ;(y.AlignAttribute = _), (y.AlignClass = f), (y.AlignStyle = o)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.BackgroundStyle = y.BackgroundClass = void 0)
        var O = s(0),
          b = g(O),
          E = s(26)
        function g(o) {
          return o && o.__esModule ? o : { default: o }
        }
        var _ = new b.default.Attributor.Class('background', 'ql-bg', {
            scope: b.default.Scope.INLINE
          }),
          f = new E.ColorAttributor('background', 'background-color', {
            scope: b.default.Scope.INLINE
          })
        ;(y.BackgroundClass = _), (y.BackgroundStyle = f)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.DirectionStyle = y.DirectionClass = y.DirectionAttribute = void 0)
        var O = s(0),
          b = E(O)
        function E(n) {
          return n && n.__esModule ? n : { default: n }
        }
        var g = { scope: b.default.Scope.BLOCK, whitelist: ['rtl'] },
          _ = new b.default.Attributor.Attribute('direction', 'dir', g),
          f = new b.default.Attributor.Class('direction', 'ql-direction', g),
          o = new b.default.Attributor.Style('direction', 'direction', g)
        ;(y.DirectionAttribute = _),
          (y.DirectionClass = f),
          (y.DirectionStyle = o)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.FontClass = y.FontStyle = void 0)
        var O = (function () {
            function l(a, h) {
              for (var r = 0; r < h.length; r++) {
                var p = h[r]
                ;(p.enumerable = p.enumerable || !1),
                  (p.configurable = !0),
                  'value' in p && (p.writable = !0),
                  Object.defineProperty(a, p.key, p)
              }
            }
            return function (a, h, r) {
              return h && l(a.prototype, h), r && l(a, r), a
            }
          })(),
          b = function l(a, h, r) {
            a === null && (a = Function.prototype)
            var p = Object.getOwnPropertyDescriptor(a, h)
            if (p === void 0) {
              var T = Object.getPrototypeOf(a)
              return T === null ? void 0 : l(T, h, r)
            } else {
              if ('value' in p) return p.value
              var k = p.get
              return k === void 0 ? void 0 : k.call(r)
            }
          },
          E = s(0),
          g = _(E)
        function _(l) {
          return l && l.__esModule ? l : { default: l }
        }
        function f(l, a) {
          if (!(l instanceof a))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(l, a) {
          if (!l)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return a && (typeof a == 'object' || typeof a == 'function') ? a : l
        }
        function n(l, a) {
          if (typeof a != 'function' && a !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof a
            )
          ;(l.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: l,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            a &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(l, a)
                : (l.__proto__ = a))
        }
        var t = {
            scope: g.default.Scope.INLINE,
            whitelist: ['serif', 'monospace']
          },
          d = new g.default.Attributor.Class('font', 'ql-font', t),
          i = (function (l) {
            n(a, l)
            function a() {
              return (
                f(this, a),
                o(
                  this,
                  (a.__proto__ || Object.getPrototypeOf(a)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              O(a, [
                {
                  key: 'value',
                  value: function (r) {
                    return b(
                      a.prototype.__proto__ ||
                        Object.getPrototypeOf(a.prototype),
                      'value',
                      this
                    )
                      .call(this, r)
                      .replace(/["']/g, '')
                  }
                }
              ]),
              a
            )
          })(g.default.Attributor.Style),
          u = new i('font', 'font-family', t)
        ;(y.FontStyle = u), (y.FontClass = d)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.SizeStyle = y.SizeClass = void 0)
        var O = s(0),
          b = E(O)
        function E(f) {
          return f && f.__esModule ? f : { default: f }
        }
        var g = new b.default.Attributor.Class('size', 'ql-size', {
            scope: b.default.Scope.INLINE,
            whitelist: ['small', 'large', 'huge']
          }),
          _ = new b.default.Attributor.Style('size', 'font-size', {
            scope: b.default.Scope.INLINE,
            whitelist: ['10px', '18px', '32px']
          })
        ;(y.SizeClass = g), (y.SizeStyle = _)
      },
      function (v, y, s) {
        v.exports = {
          align: { '': s(76), center: s(77), right: s(78), justify: s(79) },
          background: s(80),
          blockquote: s(81),
          bold: s(82),
          clean: s(83),
          code: s(58),
          'code-block': s(58),
          color: s(84),
          direction: { '': s(85), rtl: s(86) },
          float: { center: s(87), full: s(88), left: s(89), right: s(90) },
          formula: s(91),
          header: { 1: s(92), 2: s(93) },
          italic: s(94),
          image: s(95),
          indent: { '+1': s(96), '-1': s(97) },
          link: s(98),
          list: { ordered: s(99), bullet: s(100), check: s(101) },
          script: { sub: s(102), super: s(103) },
          strike: s(104),
          underline: s(105),
          video: s(106)
        }
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.getLastChangeIndex = y.default = void 0)
        var O = (function () {
            function h(r, p) {
              for (var T = 0; T < p.length; T++) {
                var k = p[T]
                ;(k.enumerable = k.enumerable || !1),
                  (k.configurable = !0),
                  'value' in k && (k.writable = !0),
                  Object.defineProperty(r, k.key, k)
              }
            }
            return function (r, p, T) {
              return p && h(r.prototype, p), T && h(r, T), r
            }
          })(),
          b = s(0),
          E = n(b),
          g = s(5),
          _ = n(g),
          f = s(9),
          o = n(f)
        function n(h) {
          return h && h.__esModule ? h : { default: h }
        }
        function t(h, r) {
          if (!(h instanceof r))
            throw new TypeError('Cannot call a class as a function')
        }
        function d(h, r) {
          if (!h)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return r && (typeof r == 'object' || typeof r == 'function') ? r : h
        }
        function i(h, r) {
          if (typeof r != 'function' && r !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof r
            )
          ;(h.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: h,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            r &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(h, r)
                : (h.__proto__ = r))
        }
        var u = (function (h) {
          i(r, h)
          function r(p, T) {
            t(this, r)
            var k = d(
              this,
              (r.__proto__ || Object.getPrototypeOf(r)).call(this, p, T)
            )
            return (
              (k.lastRecorded = 0),
              (k.ignoreChange = !1),
              k.clear(),
              k.quill.on(_.default.events.EDITOR_CHANGE, function (P, M, A, m) {
                P !== _.default.events.TEXT_CHANGE ||
                  k.ignoreChange ||
                  (!k.options.userOnly || m === _.default.sources.USER
                    ? k.record(M, A)
                    : k.transform(M))
              }),
              k.quill.keyboard.addBinding(
                { key: 'Z', shortKey: !0 },
                k.undo.bind(k)
              ),
              k.quill.keyboard.addBinding(
                { key: 'Z', shortKey: !0, shiftKey: !0 },
                k.redo.bind(k)
              ),
              /Win/i.test(navigator.platform) &&
                k.quill.keyboard.addBinding(
                  { key: 'Y', shortKey: !0 },
                  k.redo.bind(k)
                ),
              k
            )
          }
          return (
            O(r, [
              {
                key: 'change',
                value: function (T, k) {
                  if (this.stack[T].length !== 0) {
                    var P = this.stack[T].pop()
                    this.stack[k].push(P),
                      (this.lastRecorded = 0),
                      (this.ignoreChange = !0),
                      this.quill.updateContents(P[T], _.default.sources.USER),
                      (this.ignoreChange = !1)
                    var M = a(P[T])
                    this.quill.setSelection(M)
                  }
                }
              },
              {
                key: 'clear',
                value: function () {
                  this.stack = { undo: [], redo: [] }
                }
              },
              {
                key: 'cutoff',
                value: function () {
                  this.lastRecorded = 0
                }
              },
              {
                key: 'record',
                value: function (T, k) {
                  if (T.ops.length !== 0) {
                    this.stack.redo = []
                    var P = this.quill.getContents().diff(k),
                      M = Date.now()
                    if (
                      this.lastRecorded + this.options.delay > M &&
                      this.stack.undo.length > 0
                    ) {
                      var A = this.stack.undo.pop()
                      ;(P = P.compose(A.undo)), (T = A.redo.compose(T))
                    } else this.lastRecorded = M
                    this.stack.undo.push({ redo: T, undo: P }),
                      this.stack.undo.length > this.options.maxStack &&
                        this.stack.undo.shift()
                  }
                }
              },
              {
                key: 'redo',
                value: function () {
                  this.change('redo', 'undo')
                }
              },
              {
                key: 'transform',
                value: function (T) {
                  this.stack.undo.forEach(function (k) {
                    ;(k.undo = T.transform(k.undo, !0)),
                      (k.redo = T.transform(k.redo, !0))
                  }),
                    this.stack.redo.forEach(function (k) {
                      ;(k.undo = T.transform(k.undo, !0)),
                        (k.redo = T.transform(k.redo, !0))
                    })
                }
              },
              {
                key: 'undo',
                value: function () {
                  this.change('undo', 'redo')
                }
              }
            ]),
            r
          )
        })(o.default)
        u.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }
        function l(h) {
          var r = h.ops[h.ops.length - 1]
          return r == null
            ? !1
            : r.insert != null
            ? typeof r.insert == 'string' &&
              r.insert.endsWith(`
`)
            : r.attributes != null
            ? Object.keys(r.attributes).some(function (p) {
                return E.default.query(p, E.default.Scope.BLOCK) != null
              })
            : !1
        }
        function a(h) {
          var r = h.reduce(function (T, k) {
              return (T += k.delete || 0), T
            }, 0),
            p = h.length() - r
          return l(h) && (p -= 1), p
        }
        ;(y.default = u), (y.getLastChangeIndex = a)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.BaseTooltip = void 0)
        var O = (function () {
            function j(D, K) {
              for (var U = 0; U < K.length; U++) {
                var x = K[U]
                ;(x.enumerable = x.enumerable || !1),
                  (x.configurable = !0),
                  'value' in x && (x.writable = !0),
                  Object.defineProperty(D, x.key, x)
              }
            }
            return function (D, K, U) {
              return K && j(D.prototype, K), U && j(D, U), D
            }
          })(),
          b = function j(D, K, U) {
            D === null && (D = Function.prototype)
            var x = Object.getOwnPropertyDescriptor(D, K)
            if (x === void 0) {
              var H = Object.getPrototypeOf(D)
              return H === null ? void 0 : j(H, K, U)
            } else {
              if ('value' in x) return x.value
              var V = x.get
              return V === void 0 ? void 0 : V.call(U)
            }
          },
          E = s(3),
          g = M(E),
          _ = s(2),
          f = M(_),
          o = s(8),
          n = M(o),
          t = s(23),
          d = M(t),
          i = s(34),
          u = M(i),
          l = s(59),
          a = M(l),
          h = s(60),
          r = M(h),
          p = s(28),
          T = M(p),
          k = s(61),
          P = M(k)
        function M(j) {
          return j && j.__esModule ? j : { default: j }
        }
        function A(j, D) {
          if (!(j instanceof D))
            throw new TypeError('Cannot call a class as a function')
        }
        function m(j, D) {
          if (!j)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return D && (typeof D == 'object' || typeof D == 'function') ? D : j
        }
        function S(j, D) {
          if (typeof D != 'function' && D !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof D
            )
          ;(j.prototype = Object.create(D && D.prototype, {
            constructor: {
              value: j,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            D &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(j, D)
                : (j.__proto__ = D))
        }
        var N = [!1, 'center', 'right', 'justify'],
          C = [
            '#000000',
            '#e60000',
            '#ff9900',
            '#ffff00',
            '#008a00',
            '#0066cc',
            '#9933ff',
            '#ffffff',
            '#facccc',
            '#ffebcc',
            '#ffffcc',
            '#cce8cc',
            '#cce0f5',
            '#ebd6ff',
            '#bbbbbb',
            '#f06666',
            '#ffc266',
            '#ffff66',
            '#66b966',
            '#66a3e0',
            '#c285ff',
            '#888888',
            '#a10000',
            '#b26b00',
            '#b2b200',
            '#006100',
            '#0047b2',
            '#6b24b2',
            '#444444',
            '#5c0000',
            '#663d00',
            '#666600',
            '#003700',
            '#002966',
            '#3d1466'
          ],
          q = [!1, 'serif', 'monospace'],
          $ = ['1', '2', '3', !1],
          B = ['small', !1, 'large', 'huge'],
          G = (function (j) {
            S(D, j)
            function D(K, U) {
              A(this, D)
              var x = m(
                  this,
                  (D.__proto__ || Object.getPrototypeOf(D)).call(this, K, U)
                ),
                H = function V(W) {
                  if (!document.body.contains(K.root))
                    return document.body.removeEventListener('click', V)
                  x.tooltip != null &&
                    !x.tooltip.root.contains(W.target) &&
                    document.activeElement !== x.tooltip.textbox &&
                    !x.quill.hasFocus() &&
                    x.tooltip.hide(),
                    x.pickers != null &&
                      x.pickers.forEach(function (J) {
                        J.container.contains(W.target) || J.close()
                      })
                }
              return K.emitter.listenDOM('click', document.body, H), x
            }
            return (
              O(D, [
                {
                  key: 'addModule',
                  value: function (U) {
                    var x = b(
                      D.prototype.__proto__ ||
                        Object.getPrototypeOf(D.prototype),
                      'addModule',
                      this
                    ).call(this, U)
                    return U === 'toolbar' && this.extendToolbar(x), x
                  }
                },
                {
                  key: 'buildButtons',
                  value: function (U, x) {
                    U.forEach(function (H) {
                      var V = H.getAttribute('class') || ''
                      V.split(/\s+/).forEach(function (W) {
                        if (
                          W.startsWith('ql-') &&
                          ((W = W.slice(3)), x[W] != null)
                        )
                          if (W === 'direction')
                            H.innerHTML = x[W][''] + x[W].rtl
                          else if (typeof x[W] == 'string') H.innerHTML = x[W]
                          else {
                            var J = H.value || ''
                            J != null && x[W][J] && (H.innerHTML = x[W][J])
                          }
                      })
                    })
                  }
                },
                {
                  key: 'buildPickers',
                  value: function (U, x) {
                    var H = this
                    this.pickers = U.map(function (W) {
                      if (W.classList.contains('ql-align'))
                        return (
                          W.querySelector('option') == null && L(W, N),
                          new r.default(W, x.align)
                        )
                      if (
                        W.classList.contains('ql-background') ||
                        W.classList.contains('ql-color')
                      ) {
                        var J = W.classList.contains('ql-background')
                          ? 'background'
                          : 'color'
                        return (
                          W.querySelector('option') == null &&
                            L(W, C, J === 'background' ? '#ffffff' : '#000000'),
                          new a.default(W, x[J])
                        )
                      } else return W.querySelector('option') == null && (W.classList.contains('ql-font') ? L(W, q) : W.classList.contains('ql-header') ? L(W, $) : W.classList.contains('ql-size') && L(W, B)), new T.default(W)
                    })
                    var V = function () {
                      H.pickers.forEach(function (J) {
                        J.update()
                      })
                    }
                    this.quill.on(n.default.events.EDITOR_CHANGE, V)
                  }
                }
              ]),
              D
            )
          })(u.default)
        G.DEFAULTS = (0, g.default)(!0, {}, u.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula: function () {
                  this.quill.theme.tooltip.edit('formula')
                },
                image: function () {
                  var D = this,
                    K = this.container.querySelector(
                      'input.ql-image[type=file]'
                    )
                  K == null &&
                    ((K = document.createElement('input')),
                    K.setAttribute('type', 'file'),
                    K.setAttribute(
                      'accept',
                      'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'
                    ),
                    K.classList.add('ql-image'),
                    K.addEventListener('change', function () {
                      if (K.files != null && K.files[0] != null) {
                        var U = new FileReader()
                        ;(U.onload = function (x) {
                          var H = D.quill.getSelection(!0)
                          D.quill.updateContents(
                            new f.default()
                              .retain(H.index)
                              .delete(H.length)
                              .insert({ image: x.target.result }),
                            n.default.sources.USER
                          ),
                            D.quill.setSelection(
                              H.index + 1,
                              n.default.sources.SILENT
                            ),
                            (K.value = '')
                        }),
                          U.readAsDataURL(K.files[0])
                      }
                    }),
                    this.container.appendChild(K)),
                    K.click()
                },
                video: function () {
                  this.quill.theme.tooltip.edit('video')
                }
              }
            }
          }
        })
        var z = (function (j) {
          S(D, j)
          function D(K, U) {
            A(this, D)
            var x = m(
              this,
              (D.__proto__ || Object.getPrototypeOf(D)).call(this, K, U)
            )
            return (
              (x.textbox = x.root.querySelector('input[type="text"]')),
              x.listen(),
              x
            )
          }
          return (
            O(D, [
              {
                key: 'listen',
                value: function () {
                  var U = this
                  this.textbox.addEventListener('keydown', function (x) {
                    d.default.match(x, 'enter')
                      ? (U.save(), x.preventDefault())
                      : d.default.match(x, 'escape') &&
                        (U.cancel(), x.preventDefault())
                  })
                }
              },
              {
                key: 'cancel',
                value: function () {
                  this.hide()
                }
              },
              {
                key: 'edit',
                value: function () {
                  var U =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : 'link',
                    x =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null
                  this.root.classList.remove('ql-hidden'),
                    this.root.classList.add('ql-editing'),
                    x != null
                      ? (this.textbox.value = x)
                      : U !== this.root.getAttribute('data-mode') &&
                        (this.textbox.value = ''),
                    this.position(
                      this.quill.getBounds(this.quill.selection.savedRange)
                    ),
                    this.textbox.select(),
                    this.textbox.setAttribute(
                      'placeholder',
                      this.textbox.getAttribute('data-' + U) || ''
                    ),
                    this.root.setAttribute('data-mode', U)
                }
              },
              {
                key: 'restoreFocus',
                value: function () {
                  var U = this.quill.scrollingContainer.scrollTop
                  this.quill.focus(),
                    (this.quill.scrollingContainer.scrollTop = U)
                }
              },
              {
                key: 'save',
                value: function () {
                  var U = this.textbox.value
                  switch (this.root.getAttribute('data-mode')) {
                    case 'link': {
                      var x = this.quill.root.scrollTop
                      this.linkRange
                        ? (this.quill.formatText(
                            this.linkRange,
                            'link',
                            U,
                            n.default.sources.USER
                          ),
                          delete this.linkRange)
                        : (this.restoreFocus(),
                          this.quill.format('link', U, n.default.sources.USER)),
                        (this.quill.root.scrollTop = x)
                      break
                    }
                    case 'video':
                      U = R(U)
                    case 'formula': {
                      if (!U) break
                      var H = this.quill.getSelection(!0)
                      if (H != null) {
                        var V = H.index + H.length
                        this.quill.insertEmbed(
                          V,
                          this.root.getAttribute('data-mode'),
                          U,
                          n.default.sources.USER
                        ),
                          this.root.getAttribute('data-mode') === 'formula' &&
                            this.quill.insertText(
                              V + 1,
                              ' ',
                              n.default.sources.USER
                            ),
                          this.quill.setSelection(V + 2, n.default.sources.USER)
                      }
                      break
                    }
                  }
                  ;(this.textbox.value = ''), this.hide()
                }
              }
            ]),
            D
          )
        })(P.default)
        function R(j) {
          var D =
            j.match(
              /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
            ) ||
            j.match(
              /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
            )
          return D
            ? (D[1] || 'https') +
                '://www.youtube.com/embed/' +
                D[2] +
                '?showinfo=0'
            : (D = j.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
            ? (D[1] || 'https') + '://player.vimeo.com/video/' + D[2] + '/'
            : j
        }
        function L(j, D) {
          var K =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
          D.forEach(function (U) {
            var x = document.createElement('option')
            U === K
              ? x.setAttribute('selected', 'selected')
              : x.setAttribute('value', U),
              j.appendChild(x)
          })
        }
        ;(y.BaseTooltip = z), (y.default = G)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
          function b() {
            ;(this.head = this.tail = null), (this.length = 0)
          }
          return (
            (b.prototype.append = function () {
              for (var E = [], g = 0; g < arguments.length; g++)
                E[g] = arguments[g]
              this.insertBefore(E[0], null),
                E.length > 1 && this.append.apply(this, E.slice(1))
            }),
            (b.prototype.contains = function (E) {
              for (var g, _ = this.iterator(); (g = _()); )
                if (g === E) return !0
              return !1
            }),
            (b.prototype.insertBefore = function (E, g) {
              E &&
                ((E.next = g),
                g != null
                  ? ((E.prev = g.prev),
                    g.prev != null && (g.prev.next = E),
                    (g.prev = E),
                    g === this.head && (this.head = E))
                  : this.tail != null
                  ? ((this.tail.next = E),
                    (E.prev = this.tail),
                    (this.tail = E))
                  : ((E.prev = null), (this.head = this.tail = E)),
                (this.length += 1))
            }),
            (b.prototype.offset = function (E) {
              for (var g = 0, _ = this.head; _ != null; ) {
                if (_ === E) return g
                ;(g += _.length()), (_ = _.next)
              }
              return -1
            }),
            (b.prototype.remove = function (E) {
              this.contains(E) &&
                (E.prev != null && (E.prev.next = E.next),
                E.next != null && (E.next.prev = E.prev),
                E === this.head && (this.head = E.next),
                E === this.tail && (this.tail = E.prev),
                (this.length -= 1))
            }),
            (b.prototype.iterator = function (E) {
              return (
                E === void 0 && (E = this.head),
                function () {
                  var g = E
                  return E != null && (E = E.next), g
                }
              )
            }),
            (b.prototype.find = function (E, g) {
              g === void 0 && (g = !1)
              for (var _, f = this.iterator(); (_ = f()); ) {
                var o = _.length()
                if (
                  E < o ||
                  (g && E === o && (_.next == null || _.next.length() !== 0))
                )
                  return [_, E]
                E -= o
              }
              return [null, 0]
            }),
            (b.prototype.forEach = function (E) {
              for (var g, _ = this.iterator(); (g = _()); ) E(g)
            }),
            (b.prototype.forEachAt = function (E, g, _) {
              if (!(g <= 0))
                for (
                  var f = this.find(E),
                    o = f[0],
                    n = f[1],
                    t,
                    d = E - n,
                    i = this.iterator(o);
                  (t = i()) && d < E + g;

                ) {
                  var u = t.length()
                  E > d
                    ? _(t, E - d, Math.min(g, d + u - E))
                    : _(t, 0, Math.min(u, E + g - d)),
                    (d += u)
                }
            }),
            (b.prototype.map = function (E) {
              return this.reduce(function (g, _) {
                return g.push(E(_)), g
              }, [])
            }),
            (b.prototype.reduce = function (E, g) {
              for (var _, f = this.iterator(); (_ = f()); ) g = E(g, _)
              return g
            }),
            b
          )
        })()
        y.default = O
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, t) {
                  n.__proto__ = t
                }) ||
              function (n, t) {
                for (var d in t) t.hasOwnProperty(d) && (n[d] = t[d])
              }
            return function (n, t) {
              o(n, t)
              function d() {
                this.constructor = n
              }
              n.prototype =
                t === null
                  ? Object.create(t)
                  : ((d.prototype = t.prototype), new d())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(17),
          E = s(1),
          g = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          },
          _ = 100,
          f = (function (o) {
            O(n, o)
            function n(t) {
              var d = o.call(this, t) || this
              return (
                (d.scroll = d),
                (d.observer = new MutationObserver(function (i) {
                  d.update(i)
                })),
                d.observer.observe(d.domNode, g),
                d.attach(),
                d
              )
            }
            return (
              (n.prototype.detach = function () {
                o.prototype.detach.call(this), this.observer.disconnect()
              }),
              (n.prototype.deleteAt = function (t, d) {
                this.update(),
                  t === 0 && d === this.length()
                    ? this.children.forEach(function (i) {
                        i.remove()
                      })
                    : o.prototype.deleteAt.call(this, t, d)
              }),
              (n.prototype.formatAt = function (t, d, i, u) {
                this.update(), o.prototype.formatAt.call(this, t, d, i, u)
              }),
              (n.prototype.insertAt = function (t, d, i) {
                this.update(), o.prototype.insertAt.call(this, t, d, i)
              }),
              (n.prototype.optimize = function (t, d) {
                var i = this
                t === void 0 && (t = []),
                  d === void 0 && (d = {}),
                  o.prototype.optimize.call(this, d)
                for (
                  var u = [].slice.call(this.observer.takeRecords());
                  u.length > 0;

                )
                  t.push(u.pop())
                for (
                  var l = function (p, T) {
                      T === void 0 && (T = !0),
                        !(p == null || p === i) &&
                          p.domNode.parentNode != null &&
                          (p.domNode[E.DATA_KEY].mutations == null &&
                            (p.domNode[E.DATA_KEY].mutations = []),
                          T && l(p.parent))
                    },
                    a = function (p) {
                      p.domNode[E.DATA_KEY] == null ||
                        p.domNode[E.DATA_KEY].mutations == null ||
                        (p instanceof b.default && p.children.forEach(a),
                        p.optimize(d))
                    },
                    h = t,
                    r = 0;
                  h.length > 0;
                  r += 1
                ) {
                  if (r >= _)
                    throw new Error(
                      '[Parchment] Maximum optimize iterations reached'
                    )
                  for (
                    h.forEach(function (p) {
                      var T = E.find(p.target, !0)
                      T != null &&
                        (T.domNode === p.target &&
                          (p.type === 'childList'
                            ? (l(E.find(p.previousSibling, !1)),
                              [].forEach.call(p.addedNodes, function (k) {
                                var P = E.find(k, !1)
                                l(P, !1),
                                  P instanceof b.default &&
                                    P.children.forEach(function (M) {
                                      l(M, !1)
                                    })
                              }))
                            : p.type === 'attributes' && l(T.prev)),
                        l(T))
                    }),
                      this.children.forEach(a),
                      h = [].slice.call(this.observer.takeRecords()),
                      u = h.slice();
                    u.length > 0;

                  )
                    t.push(u.pop())
                }
              }),
              (n.prototype.update = function (t, d) {
                var i = this
                d === void 0 && (d = {}),
                  (t = t || this.observer.takeRecords()),
                  t
                    .map(function (u) {
                      var l = E.find(u.target, !0)
                      return l == null
                        ? null
                        : l.domNode[E.DATA_KEY].mutations == null
                        ? ((l.domNode[E.DATA_KEY].mutations = [u]), l)
                        : (l.domNode[E.DATA_KEY].mutations.push(u), null)
                    })
                    .forEach(function (u) {
                      u == null ||
                        u === i ||
                        u.domNode[E.DATA_KEY] == null ||
                        u.update(u.domNode[E.DATA_KEY].mutations || [], d)
                    }),
                  this.domNode[E.DATA_KEY].mutations != null &&
                    o.prototype.update.call(
                      this,
                      this.domNode[E.DATA_KEY].mutations,
                      d
                    ),
                  this.optimize(t, d)
              }),
              (n.blotName = 'scroll'),
              (n.defaultChild = 'block'),
              (n.scope = E.Scope.BLOCK_BLOT),
              (n.tagName = 'DIV'),
              n
            )
          })(b.default)
        y.default = f
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var f =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (o, n) {
                  o.__proto__ = n
                }) ||
              function (o, n) {
                for (var t in n) n.hasOwnProperty(t) && (o[t] = n[t])
              }
            return function (o, n) {
              f(o, n)
              function t() {
                this.constructor = o
              }
              o.prototype =
                n === null
                  ? Object.create(n)
                  : ((t.prototype = n.prototype), new t())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(18),
          E = s(1)
        function g(f, o) {
          if (Object.keys(f).length !== Object.keys(o).length) return !1
          for (var n in f) if (f[n] !== o[n]) return !1
          return !0
        }
        var _ = (function (f) {
          O(o, f)
          function o() {
            return (f !== null && f.apply(this, arguments)) || this
          }
          return (
            (o.formats = function (n) {
              if (n.tagName !== o.tagName) return f.formats.call(this, n)
            }),
            (o.prototype.format = function (n, t) {
              var d = this
              n === this.statics.blotName && !t
                ? (this.children.forEach(function (i) {
                    i instanceof b.default || (i = i.wrap(o.blotName, !0)),
                      d.attributes.copy(i)
                  }),
                  this.unwrap())
                : f.prototype.format.call(this, n, t)
            }),
            (o.prototype.formatAt = function (n, t, d, i) {
              if (this.formats()[d] != null || E.query(d, E.Scope.ATTRIBUTE)) {
                var u = this.isolate(n, t)
                u.format(d, i)
              } else f.prototype.formatAt.call(this, n, t, d, i)
            }),
            (o.prototype.optimize = function (n) {
              f.prototype.optimize.call(this, n)
              var t = this.formats()
              if (Object.keys(t).length === 0) return this.unwrap()
              var d = this.next
              d instanceof o &&
                d.prev === this &&
                g(t, d.formats()) &&
                (d.moveChildren(this), d.remove())
            }),
            (o.blotName = 'inline'),
            (o.scope = E.Scope.INLINE_BLOT),
            (o.tagName = 'SPAN'),
            o
          )
        })(b.default)
        y.default = _
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var _ =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, o) {
                  f.__proto__ = o
                }) ||
              function (f, o) {
                for (var n in o) o.hasOwnProperty(n) && (f[n] = o[n])
              }
            return function (f, o) {
              _(f, o)
              function n() {
                this.constructor = f
              }
              f.prototype =
                o === null
                  ? Object.create(o)
                  : ((n.prototype = o.prototype), new n())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(18),
          E = s(1),
          g = (function (_) {
            O(f, _)
            function f() {
              return (_ !== null && _.apply(this, arguments)) || this
            }
            return (
              (f.formats = function (o) {
                var n = E.query(f.blotName).tagName
                if (o.tagName !== n) return _.formats.call(this, o)
              }),
              (f.prototype.format = function (o, n) {
                E.query(o, E.Scope.BLOCK) != null &&
                  (o === this.statics.blotName && !n
                    ? this.replaceWith(f.blotName)
                    : _.prototype.format.call(this, o, n))
              }),
              (f.prototype.formatAt = function (o, n, t, d) {
                E.query(t, E.Scope.BLOCK) != null
                  ? this.format(t, d)
                  : _.prototype.formatAt.call(this, o, n, t, d)
              }),
              (f.prototype.insertAt = function (o, n, t) {
                if (t == null || E.query(n, E.Scope.INLINE) != null)
                  _.prototype.insertAt.call(this, o, n, t)
                else {
                  var d = this.split(o),
                    i = E.create(n, t)
                  d.parent.insertBefore(i, d)
                }
              }),
              (f.prototype.update = function (o, n) {
                navigator.userAgent.match(/Trident/)
                  ? this.build()
                  : _.prototype.update.call(this, o, n)
              }),
              (f.blotName = 'block'),
              (f.scope = E.Scope.BLOCK_BLOT),
              (f.tagName = 'P'),
              f
            )
          })(b.default)
        y.default = g
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var g =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (_, f) {
                  _.__proto__ = f
                }) ||
              function (_, f) {
                for (var o in f) f.hasOwnProperty(o) && (_[o] = f[o])
              }
            return function (_, f) {
              g(_, f)
              function o() {
                this.constructor = _
              }
              _.prototype =
                f === null
                  ? Object.create(f)
                  : ((o.prototype = f.prototype), new o())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(19),
          E = (function (g) {
            O(_, g)
            function _() {
              return (g !== null && g.apply(this, arguments)) || this
            }
            return (
              (_.formats = function (f) {}),
              (_.prototype.format = function (f, o) {
                g.prototype.formatAt.call(this, 0, this.length(), f, o)
              }),
              (_.prototype.formatAt = function (f, o, n, t) {
                f === 0 && o === this.length()
                  ? this.format(n, t)
                  : g.prototype.formatAt.call(this, f, o, n, t)
              }),
              (_.prototype.formats = function () {
                return this.statics.formats(this.domNode)
              }),
              _
            )
          })(b.default)
        y.default = E
      },
      function (v, y, s) {
        var O =
          (this && this.__extends) ||
          (function () {
            var _ =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (f, o) {
                  f.__proto__ = o
                }) ||
              function (f, o) {
                for (var n in o) o.hasOwnProperty(n) && (f[n] = o[n])
              }
            return function (f, o) {
              _(f, o)
              function n() {
                this.constructor = f
              }
              f.prototype =
                o === null
                  ? Object.create(o)
                  : ((n.prototype = o.prototype), new n())
            }
          })()
        Object.defineProperty(y, '__esModule', { value: !0 })
        var b = s(19),
          E = s(1),
          g = (function (_) {
            O(f, _)
            function f(o) {
              var n = _.call(this, o) || this
              return (n.text = n.statics.value(n.domNode)), n
            }
            return (
              (f.create = function (o) {
                return document.createTextNode(o)
              }),
              (f.value = function (o) {
                var n = o.data
                return n.normalize && (n = n.normalize()), n
              }),
              (f.prototype.deleteAt = function (o, n) {
                this.domNode.data = this.text =
                  this.text.slice(0, o) + this.text.slice(o + n)
              }),
              (f.prototype.index = function (o, n) {
                return this.domNode === o ? n : -1
              }),
              (f.prototype.insertAt = function (o, n, t) {
                t == null
                  ? ((this.text =
                      this.text.slice(0, o) + n + this.text.slice(o)),
                    (this.domNode.data = this.text))
                  : _.prototype.insertAt.call(this, o, n, t)
              }),
              (f.prototype.length = function () {
                return this.text.length
              }),
              (f.prototype.optimize = function (o) {
                _.prototype.optimize.call(this, o),
                  (this.text = this.statics.value(this.domNode)),
                  this.text.length === 0
                    ? this.remove()
                    : this.next instanceof f &&
                      this.next.prev === this &&
                      (this.insertAt(this.length(), this.next.value()),
                      this.next.remove())
              }),
              (f.prototype.position = function (o, n) {
                return [this.domNode, o]
              }),
              (f.prototype.split = function (o, n) {
                if ((n === void 0 && (n = !1), !n)) {
                  if (o === 0) return this
                  if (o === this.length()) return this.next
                }
                var t = E.create(this.domNode.splitText(o))
                return (
                  this.parent.insertBefore(t, this.next),
                  (this.text = this.statics.value(this.domNode)),
                  t
                )
              }),
              (f.prototype.update = function (o, n) {
                var t = this
                o.some(function (d) {
                  return d.type === 'characterData' && d.target === t.domNode
                }) && (this.text = this.statics.value(this.domNode))
              }),
              (f.prototype.value = function () {
                return this.text
              }),
              (f.blotName = 'text'),
              (f.scope = E.Scope.INLINE_BLOT),
              f
            )
          })(b.default)
        y.default = g
      },
      function (v, y, s) {
        var O = document.createElement('div')
        if (
          (O.classList.toggle('test-class', !1),
          O.classList.contains('test-class'))
        ) {
          var b = DOMTokenList.prototype.toggle
          DOMTokenList.prototype.toggle = function (E, g) {
            return arguments.length > 1 && !this.contains(E) == !g
              ? g
              : b.call(this, E)
          }
        }
        String.prototype.startsWith ||
          (String.prototype.startsWith = function (E, g) {
            return (g = g || 0), this.substr(g, E.length) === E
          }),
          String.prototype.endsWith ||
            (String.prototype.endsWith = function (E, g) {
              var _ = this.toString()
              ;(typeof g != 'number' ||
                !isFinite(g) ||
                Math.floor(g) !== g ||
                g > _.length) &&
                (g = _.length),
                (g -= E.length)
              var f = _.indexOf(E, g)
              return f !== -1 && f === g
            }),
          Array.prototype.find ||
            Object.defineProperty(Array.prototype, 'find', {
              value: function (g) {
                if (this === null)
                  throw new TypeError(
                    'Array.prototype.find called on null or undefined'
                  )
                if (typeof g != 'function')
                  throw new TypeError('predicate must be a function')
                for (
                  var _ = Object(this),
                    f = _.length >>> 0,
                    o = arguments[1],
                    n,
                    t = 0;
                  t < f;
                  t++
                )
                  if (((n = _[t]), g.call(o, n, t, _))) return n
              }
            }),
          document.addEventListener('DOMContentLoaded', function () {
            document.execCommand('enableObjectResizing', !1, !1),
              document.execCommand('autoUrlDetect', !1, !1)
          })
      },
      function (v, y) {
        var s = -1,
          O = 1,
          b = 0
        function E(r, p, T) {
          if (r == p) return r ? [[b, r]] : []
          ;(T < 0 || r.length < T) && (T = null)
          var k = o(r, p),
            P = r.substring(0, k)
          ;(r = r.substring(k)), (p = p.substring(k)), (k = n(r, p))
          var M = r.substring(r.length - k)
          ;(r = r.substring(0, r.length - k)),
            (p = p.substring(0, p.length - k))
          var A = g(r, p)
          return (
            P && A.unshift([b, P]),
            M && A.push([b, M]),
            d(A),
            T != null && (A = l(A, T)),
            (A = a(A)),
            A
          )
        }
        function g(r, p) {
          var T
          if (!r) return [[O, p]]
          if (!p) return [[s, r]]
          var k = r.length > p.length ? r : p,
            P = r.length > p.length ? p : r,
            M = k.indexOf(P)
          if (M != -1)
            return (
              (T = [
                [O, k.substring(0, M)],
                [b, P],
                [O, k.substring(M + P.length)]
              ]),
              r.length > p.length && (T[0][0] = T[2][0] = s),
              T
            )
          if (P.length == 1)
            return [
              [s, r],
              [O, p]
            ]
          var A = t(r, p)
          if (A) {
            var m = A[0],
              S = A[1],
              N = A[2],
              C = A[3],
              q = A[4],
              $ = E(m, N),
              B = E(S, C)
            return $.concat([[b, q]], B)
          }
          return _(r, p)
        }
        function _(r, p) {
          for (
            var T = r.length,
              k = p.length,
              P = Math.ceil((T + k) / 2),
              M = P,
              A = 2 * P,
              m = new Array(A),
              S = new Array(A),
              N = 0;
            N < A;
            N++
          )
            (m[N] = -1), (S[N] = -1)
          ;(m[M + 1] = 0), (S[M + 1] = 0)
          for (
            var C = T - k, q = C % 2 != 0, $ = 0, B = 0, G = 0, z = 0, R = 0;
            R < P;
            R++
          ) {
            for (var L = -R + $; L <= R - B; L += 2) {
              var j = M + L,
                D
              L == -R || (L != R && m[j - 1] < m[j + 1])
                ? (D = m[j + 1])
                : (D = m[j - 1] + 1)
              for (
                var K = D - L;
                D < T && K < k && r.charAt(D) == p.charAt(K);

              )
                D++, K++
              if (((m[j] = D), D > T)) B += 2
              else if (K > k) $ += 2
              else if (q) {
                var U = M + C - L
                if (U >= 0 && U < A && S[U] != -1) {
                  var x = T - S[U]
                  if (D >= x) return f(r, p, D, K)
                }
              }
            }
            for (var H = -R + G; H <= R - z; H += 2) {
              var U = M + H,
                x
              H == -R || (H != R && S[U - 1] < S[U + 1])
                ? (x = S[U + 1])
                : (x = S[U - 1] + 1)
              for (
                var V = x - H;
                x < T && V < k && r.charAt(T - x - 1) == p.charAt(k - V - 1);

              )
                x++, V++
              if (((S[U] = x), x > T)) z += 2
              else if (V > k) G += 2
              else if (!q) {
                var j = M + C - H
                if (j >= 0 && j < A && m[j] != -1) {
                  var D = m[j],
                    K = M + D - j
                  if (((x = T - x), D >= x)) return f(r, p, D, K)
                }
              }
            }
          }
          return [
            [s, r],
            [O, p]
          ]
        }
        function f(r, p, T, k) {
          var P = r.substring(0, T),
            M = p.substring(0, k),
            A = r.substring(T),
            m = p.substring(k),
            S = E(P, M),
            N = E(A, m)
          return S.concat(N)
        }
        function o(r, p) {
          if (!r || !p || r.charAt(0) != p.charAt(0)) return 0
          for (
            var T = 0, k = Math.min(r.length, p.length), P = k, M = 0;
            T < P;

          )
            r.substring(M, P) == p.substring(M, P)
              ? ((T = P), (M = T))
              : (k = P),
              (P = Math.floor((k - T) / 2 + T))
          return P
        }
        function n(r, p) {
          if (!r || !p || r.charAt(r.length - 1) != p.charAt(p.length - 1))
            return 0
          for (
            var T = 0, k = Math.min(r.length, p.length), P = k, M = 0;
            T < P;

          )
            r.substring(r.length - P, r.length - M) ==
            p.substring(p.length - P, p.length - M)
              ? ((T = P), (M = T))
              : (k = P),
              (P = Math.floor((k - T) / 2 + T))
          return P
        }
        function t(r, p) {
          var T = r.length > p.length ? r : p,
            k = r.length > p.length ? p : r
          if (T.length < 4 || k.length * 2 < T.length) return null
          function P(B, G, z) {
            for (
              var R = B.substring(z, z + Math.floor(B.length / 4)),
                L = -1,
                j = '',
                D,
                K,
                U,
                x;
              (L = G.indexOf(R, L + 1)) != -1;

            ) {
              var H = o(B.substring(z), G.substring(L)),
                V = n(B.substring(0, z), G.substring(0, L))
              j.length < V + H &&
                ((j = G.substring(L - V, L) + G.substring(L, L + H)),
                (D = B.substring(0, z - V)),
                (K = B.substring(z + H)),
                (U = G.substring(0, L - V)),
                (x = G.substring(L + H)))
            }
            return j.length * 2 >= B.length ? [D, K, U, x, j] : null
          }
          var M = P(T, k, Math.ceil(T.length / 4)),
            A = P(T, k, Math.ceil(T.length / 2)),
            m
          if (!M && !A) return null
          A ? (M ? (m = M[4].length > A[4].length ? M : A) : (m = A)) : (m = M)
          var S, N, C, q
          r.length > p.length
            ? ((S = m[0]), (N = m[1]), (C = m[2]), (q = m[3]))
            : ((C = m[0]), (q = m[1]), (S = m[2]), (N = m[3]))
          var $ = m[4]
          return [S, N, C, q, $]
        }
        function d(r) {
          r.push([b, ''])
          for (var p = 0, T = 0, k = 0, P = '', M = '', A; p < r.length; )
            switch (r[p][0]) {
              case O:
                k++, (M += r[p][1]), p++
                break
              case s:
                T++, (P += r[p][1]), p++
                break
              case b:
                T + k > 1
                  ? (T !== 0 &&
                      k !== 0 &&
                      ((A = o(M, P)),
                      A !== 0 &&
                        (p - T - k > 0 && r[p - T - k - 1][0] == b
                          ? (r[p - T - k - 1][1] += M.substring(0, A))
                          : (r.splice(0, 0, [b, M.substring(0, A)]), p++),
                        (M = M.substring(A)),
                        (P = P.substring(A))),
                      (A = n(M, P)),
                      A !== 0 &&
                        ((r[p][1] = M.substring(M.length - A) + r[p][1]),
                        (M = M.substring(0, M.length - A)),
                        (P = P.substring(0, P.length - A)))),
                    T === 0
                      ? r.splice(p - k, T + k, [O, M])
                      : k === 0
                      ? r.splice(p - T, T + k, [s, P])
                      : r.splice(p - T - k, T + k, [s, P], [O, M]),
                    (p = p - T - k + (T ? 1 : 0) + (k ? 1 : 0) + 1))
                  : p !== 0 && r[p - 1][0] == b
                  ? ((r[p - 1][1] += r[p][1]), r.splice(p, 1))
                  : p++,
                  (k = 0),
                  (T = 0),
                  (P = ''),
                  (M = '')
                break
            }
          r[r.length - 1][1] === '' && r.pop()
          var m = !1
          for (p = 1; p < r.length - 1; )
            r[p - 1][0] == b &&
              r[p + 1][0] == b &&
              (r[p][1].substring(r[p][1].length - r[p - 1][1].length) ==
              r[p - 1][1]
                ? ((r[p][1] =
                    r[p - 1][1] +
                    r[p][1].substring(0, r[p][1].length - r[p - 1][1].length)),
                  (r[p + 1][1] = r[p - 1][1] + r[p + 1][1]),
                  r.splice(p - 1, 1),
                  (m = !0))
                : r[p][1].substring(0, r[p + 1][1].length) == r[p + 1][1] &&
                  ((r[p - 1][1] += r[p + 1][1]),
                  (r[p][1] =
                    r[p][1].substring(r[p + 1][1].length) + r[p + 1][1]),
                  r.splice(p + 1, 1),
                  (m = !0))),
              p++
          m && d(r)
        }
        var i = E
        ;(i.INSERT = O), (i.DELETE = s), (i.EQUAL = b), (v.exports = i)
        function u(r, p) {
          if (p === 0) return [b, r]
          for (var T = 0, k = 0; k < r.length; k++) {
            var P = r[k]
            if (P[0] === s || P[0] === b) {
              var M = T + P[1].length
              if (p === M) return [k + 1, r]
              if (p < M) {
                r = r.slice()
                var A = p - T,
                  m = [P[0], P[1].slice(0, A)],
                  S = [P[0], P[1].slice(A)]
                return r.splice(k, 1, m, S), [k + 1, r]
              } else T = M
            }
          }
          throw new Error('cursor_pos is out of bounds!')
        }
        function l(r, p) {
          var T = u(r, p),
            k = T[1],
            P = T[0],
            M = k[P],
            A = k[P + 1]
          if (M == null) return r
          if (M[0] !== b) return r
          if (A != null && M[1] + A[1] === A[1] + M[1])
            return k.splice(P, 2, A, M), h(k, P, 2)
          if (A != null && A[1].indexOf(M[1]) === 0) {
            k.splice(P, 2, [A[0], M[1]], [0, M[1]])
            var m = A[1].slice(M[1].length)
            return m.length > 0 && k.splice(P + 2, 0, [A[0], m]), h(k, P, 3)
          } else return r
        }
        function a(r) {
          for (
            var p = !1,
              T = function (A) {
                return A.charCodeAt(0) >= 56320 && A.charCodeAt(0) <= 57343
              },
              k = function (A) {
                return (
                  A.charCodeAt(A.length - 1) >= 55296 &&
                  A.charCodeAt(A.length - 1) <= 56319
                )
              },
              P = 2;
            P < r.length;
            P += 1
          )
            r[P - 2][0] === b &&
              k(r[P - 2][1]) &&
              r[P - 1][0] === s &&
              T(r[P - 1][1]) &&
              r[P][0] === O &&
              T(r[P][1]) &&
              ((p = !0),
              (r[P - 1][1] = r[P - 2][1].slice(-1) + r[P - 1][1]),
              (r[P][1] = r[P - 2][1].slice(-1) + r[P][1]),
              (r[P - 2][1] = r[P - 2][1].slice(0, -1)))
          if (!p) return r
          for (var M = [], P = 0; P < r.length; P += 1)
            r[P][1].length > 0 && M.push(r[P])
          return M
        }
        function h(r, p, T) {
          for (var k = p + T - 1; k >= 0 && k >= p - 1; k--)
            if (k + 1 < r.length) {
              var P = r[k],
                M = r[k + 1]
              P[0] === M[1] && r.splice(k, 2, [P[0], P[1] + M[1]])
            }
          return r
        }
      },
      function (v, y) {
        ;(y = v.exports = typeof Object.keys == 'function' ? Object.keys : s),
          (y.shim = s)
        function s(O) {
          var b = []
          for (var E in O) b.push(E)
          return b
        }
      },
      function (v, y) {
        var s =
          (function () {
            return Object.prototype.toString.call(arguments)
          })() == '[object Arguments]'
        ;(y = v.exports = s ? O : b), (y.supported = O)
        function O(E) {
          return Object.prototype.toString.call(E) == '[object Arguments]'
        }
        y.unsupported = b
        function b(E) {
          return (
            (E &&
              typeof E == 'object' &&
              typeof E.length == 'number' &&
              Object.prototype.hasOwnProperty.call(E, 'callee') &&
              !Object.prototype.propertyIsEnumerable.call(E, 'callee')) ||
            !1
          )
        }
      },
      function (v, y) {
        var s = Object.prototype.hasOwnProperty,
          O = '~'
        function b() {}
        Object.create &&
          ((b.prototype = Object.create(null)), new b().__proto__ || (O = !1))
        function E(_, f, o) {
          ;(this.fn = _), (this.context = f), (this.once = o || !1)
        }
        function g() {
          ;(this._events = new b()), (this._eventsCount = 0)
        }
        ;(g.prototype.eventNames = function () {
          var f = [],
            o,
            n
          if (this._eventsCount === 0) return f
          for (n in (o = this._events))
            s.call(o, n) && f.push(O ? n.slice(1) : n)
          return Object.getOwnPropertySymbols
            ? f.concat(Object.getOwnPropertySymbols(o))
            : f
        }),
          (g.prototype.listeners = function (f, o) {
            var n = O ? O + f : f,
              t = this._events[n]
            if (o) return !!t
            if (!t) return []
            if (t.fn) return [t.fn]
            for (var d = 0, i = t.length, u = new Array(i); d < i; d++)
              u[d] = t[d].fn
            return u
          }),
          (g.prototype.emit = function (f, o, n, t, d, i) {
            var u = O ? O + f : f
            if (!this._events[u]) return !1
            var l = this._events[u],
              a = arguments.length,
              h,
              r
            if (l.fn) {
              switch ((l.once && this.removeListener(f, l.fn, void 0, !0), a)) {
                case 1:
                  return l.fn.call(l.context), !0
                case 2:
                  return l.fn.call(l.context, o), !0
                case 3:
                  return l.fn.call(l.context, o, n), !0
                case 4:
                  return l.fn.call(l.context, o, n, t), !0
                case 5:
                  return l.fn.call(l.context, o, n, t, d), !0
                case 6:
                  return l.fn.call(l.context, o, n, t, d, i), !0
              }
              for (r = 1, h = new Array(a - 1); r < a; r++)
                h[r - 1] = arguments[r]
              l.fn.apply(l.context, h)
            } else {
              var p = l.length,
                T
              for (r = 0; r < p; r++)
                switch (
                  (l[r].once && this.removeListener(f, l[r].fn, void 0, !0), a)
                ) {
                  case 1:
                    l[r].fn.call(l[r].context)
                    break
                  case 2:
                    l[r].fn.call(l[r].context, o)
                    break
                  case 3:
                    l[r].fn.call(l[r].context, o, n)
                    break
                  case 4:
                    l[r].fn.call(l[r].context, o, n, t)
                    break
                  default:
                    if (!h)
                      for (T = 1, h = new Array(a - 1); T < a; T++)
                        h[T - 1] = arguments[T]
                    l[r].fn.apply(l[r].context, h)
                }
            }
            return !0
          }),
          (g.prototype.on = function (f, o, n) {
            var t = new E(o, n || this),
              d = O ? O + f : f
            return (
              this._events[d]
                ? this._events[d].fn
                  ? (this._events[d] = [this._events[d], t])
                  : this._events[d].push(t)
                : ((this._events[d] = t), this._eventsCount++),
              this
            )
          }),
          (g.prototype.once = function (f, o, n) {
            var t = new E(o, n || this, !0),
              d = O ? O + f : f
            return (
              this._events[d]
                ? this._events[d].fn
                  ? (this._events[d] = [this._events[d], t])
                  : this._events[d].push(t)
                : ((this._events[d] = t), this._eventsCount++),
              this
            )
          }),
          (g.prototype.removeListener = function (f, o, n, t) {
            var d = O ? O + f : f
            if (!this._events[d]) return this
            if (!o)
              return (
                --this._eventsCount === 0
                  ? (this._events = new b())
                  : delete this._events[d],
                this
              )
            var i = this._events[d]
            if (i.fn)
              i.fn === o &&
                (!t || i.once) &&
                (!n || i.context === n) &&
                (--this._eventsCount === 0
                  ? (this._events = new b())
                  : delete this._events[d])
            else {
              for (var u = 0, l = [], a = i.length; u < a; u++)
                (i[u].fn !== o ||
                  (t && !i[u].once) ||
                  (n && i[u].context !== n)) &&
                  l.push(i[u])
              l.length
                ? (this._events[d] = l.length === 1 ? l[0] : l)
                : --this._eventsCount === 0
                ? (this._events = new b())
                : delete this._events[d]
            }
            return this
          }),
          (g.prototype.removeAllListeners = function (f) {
            var o
            return (
              f
                ? ((o = O ? O + f : f),
                  this._events[o] &&
                    (--this._eventsCount === 0
                      ? (this._events = new b())
                      : delete this._events[o]))
                : ((this._events = new b()), (this._eventsCount = 0)),
              this
            )
          }),
          (g.prototype.off = g.prototype.removeListener),
          (g.prototype.addListener = g.prototype.on),
          (g.prototype.setMaxListeners = function () {
            return this
          }),
          (g.prefixed = O),
          (g.EventEmitter = g),
          typeof v < 'u' && (v.exports = g)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.matchText =
            y.matchSpacing =
            y.matchNewline =
            y.matchBlot =
            y.matchAttributor =
            y.default =
              void 0)
        var O =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (Y) {
                  return typeof Y
                }
              : function (Y) {
                  return Y &&
                    typeof Symbol == 'function' &&
                    Y.constructor === Symbol &&
                    Y !== Symbol.prototype
                    ? 'symbol'
                    : typeof Y
                },
          b = (function () {
            function Y(X, ne) {
              var ie = [],
                ee = !0,
                he = !1,
                fe = void 0
              try {
                for (
                  var ve = X[Symbol.iterator](), xe;
                  !(ee = (xe = ve.next()).done) &&
                  (ie.push(xe.value), !(ne && ie.length === ne));
                  ee = !0
                );
              } catch (Be) {
                ;(he = !0), (fe = Be)
              } finally {
                try {
                  !ee && ve.return && ve.return()
                } finally {
                  if (he) throw fe
                }
              }
              return ie
            }
            return function (X, ne) {
              if (Array.isArray(X)) return X
              if (Symbol.iterator in Object(X)) return Y(X, ne)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          E = (function () {
            function Y(X, ne) {
              for (var ie = 0; ie < ne.length; ie++) {
                var ee = ne[ie]
                ;(ee.enumerable = ee.enumerable || !1),
                  (ee.configurable = !0),
                  'value' in ee && (ee.writable = !0),
                  Object.defineProperty(X, ee.key, ee)
              }
            }
            return function (X, ne, ie) {
              return ne && Y(X.prototype, ne), ie && Y(X, ie), X
            }
          })(),
          g = s(3),
          _ = S(g),
          f = s(2),
          o = S(f),
          n = s(0),
          t = S(n),
          d = s(5),
          i = S(d),
          u = s(10),
          l = S(u),
          a = s(9),
          h = S(a),
          r = s(36),
          p = s(37),
          T = s(13),
          k = S(T),
          P = s(26),
          M = s(38),
          A = s(39),
          m = s(40)
        function S(Y) {
          return Y && Y.__esModule ? Y : { default: Y }
        }
        function N(Y, X, ne) {
          return (
            X in Y
              ? Object.defineProperty(Y, X, {
                  value: ne,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (Y[X] = ne),
            Y
          )
        }
        function C(Y, X) {
          if (!(Y instanceof X))
            throw new TypeError('Cannot call a class as a function')
        }
        function q(Y, X) {
          if (!Y)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return X && (typeof X == 'object' || typeof X == 'function') ? X : Y
        }
        function $(Y, X) {
          if (typeof X != 'function' && X !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof X
            )
          ;(Y.prototype = Object.create(X && X.prototype, {
            constructor: {
              value: Y,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            X &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(Y, X)
                : (Y.__proto__ = X))
        }
        var B = (0, l.default)('quill:clipboard'),
          G = '__ql-matcher',
          z = [
            [Node.TEXT_NODE, Ce],
            [Node.TEXT_NODE, ge],
            ['br', re],
            [Node.ELEMENT_NODE, ge],
            [Node.ELEMENT_NODE, J],
            [Node.ELEMENT_NODE, Oe],
            [Node.ELEMENT_NODE, W],
            [Node.ELEMENT_NODE, Me],
            ['li', de],
            ['b', V.bind(V, 'bold')],
            ['i', V.bind(V, 'italic')],
            ['style', ue]
          ],
          R = [r.AlignAttribute, M.DirectionAttribute].reduce(function (Y, X) {
            return (Y[X.keyName] = X), Y
          }, {}),
          L = [
            r.AlignStyle,
            p.BackgroundStyle,
            P.ColorStyle,
            M.DirectionStyle,
            A.FontStyle,
            m.SizeStyle
          ].reduce(function (Y, X) {
            return (Y[X.keyName] = X), Y
          }, {}),
          j = (function (Y) {
            $(X, Y)
            function X(ne, ie) {
              C(this, X)
              var ee = q(
                this,
                (X.__proto__ || Object.getPrototypeOf(X)).call(this, ne, ie)
              )
              return (
                ee.quill.root.addEventListener('paste', ee.onPaste.bind(ee)),
                (ee.container = ee.quill.addContainer('ql-clipboard')),
                ee.container.setAttribute('contenteditable', !0),
                ee.container.setAttribute('tabindex', -1),
                (ee.matchers = []),
                z.concat(ee.options.matchers).forEach(function (he) {
                  var fe = b(he, 2),
                    ve = fe[0],
                    xe = fe[1]
                  ;(!ie.matchVisual && xe === Oe) || ee.addMatcher(ve, xe)
                }),
                ee
              )
            }
            return (
              E(X, [
                {
                  key: 'addMatcher',
                  value: function (ie, ee) {
                    this.matchers.push([ie, ee])
                  }
                },
                {
                  key: 'convert',
                  value: function (ie) {
                    if (typeof ie == 'string')
                      return (
                        (this.container.innerHTML = ie.replace(
                          /\>\r?\n +\</g,
                          '><'
                        )),
                        this.convert()
                      )
                    var ee = this.quill.getFormat(
                      this.quill.selection.savedRange.index
                    )
                    if (ee[k.default.blotName]) {
                      var he = this.container.innerText
                      return (
                        (this.container.innerHTML = ''),
                        new o.default().insert(
                          he,
                          N({}, k.default.blotName, ee[k.default.blotName])
                        )
                      )
                    }
                    var fe = this.prepareMatching(),
                      ve = b(fe, 2),
                      xe = ve[0],
                      Be = ve[1],
                      Ae = H(this.container, xe, Be)
                    return (
                      U(
                        Ae,
                        `
`
                      ) &&
                        Ae.ops[Ae.ops.length - 1].attributes == null &&
                        (Ae = Ae.compose(
                          new o.default().retain(Ae.length() - 1).delete(1)
                        )),
                      B.log('convert', this.container.innerHTML, Ae),
                      (this.container.innerHTML = ''),
                      Ae
                    )
                  }
                },
                {
                  key: 'dangerouslyPasteHTML',
                  value: function (ie, ee) {
                    var he =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : i.default.sources.API
                    if (typeof ie == 'string')
                      this.quill.setContents(this.convert(ie), ee),
                        this.quill.setSelection(0, i.default.sources.SILENT)
                    else {
                      var fe = this.convert(ee)
                      this.quill.updateContents(
                        new o.default().retain(ie).concat(fe),
                        he
                      ),
                        this.quill.setSelection(
                          ie + fe.length(),
                          i.default.sources.SILENT
                        )
                    }
                  }
                },
                {
                  key: 'onPaste',
                  value: function (ie) {
                    var ee = this
                    if (!(ie.defaultPrevented || !this.quill.isEnabled())) {
                      var he = this.quill.getSelection(),
                        fe = new o.default().retain(he.index),
                        ve = this.quill.scrollingContainer.scrollTop
                      this.container.focus(),
                        this.quill.selection.update(i.default.sources.SILENT),
                        setTimeout(function () {
                          ;(fe = fe.concat(ee.convert()).delete(he.length)),
                            ee.quill.updateContents(fe, i.default.sources.USER),
                            ee.quill.setSelection(
                              fe.length() - he.length,
                              i.default.sources.SILENT
                            ),
                            (ee.quill.scrollingContainer.scrollTop = ve),
                            ee.quill.focus()
                        }, 1)
                    }
                  }
                },
                {
                  key: 'prepareMatching',
                  value: function () {
                    var ie = this,
                      ee = [],
                      he = []
                    return (
                      this.matchers.forEach(function (fe) {
                        var ve = b(fe, 2),
                          xe = ve[0],
                          Be = ve[1]
                        switch (xe) {
                          case Node.TEXT_NODE:
                            he.push(Be)
                            break
                          case Node.ELEMENT_NODE:
                            ee.push(Be)
                            break
                          default:
                            ;[].forEach.call(
                              ie.container.querySelectorAll(xe),
                              function (Ae) {
                                ;(Ae[G] = Ae[G] || []), Ae[G].push(Be)
                              }
                            )
                            break
                        }
                      }),
                      [ee, he]
                    )
                  }
                }
              ]),
              X
            )
          })(h.default)
        j.DEFAULTS = { matchers: [], matchVisual: !0 }
        function D(Y, X, ne) {
          return (typeof X > 'u' ? 'undefined' : O(X)) === 'object'
            ? Object.keys(X).reduce(function (ie, ee) {
                return D(ie, ee, X[ee])
              }, Y)
            : Y.reduce(function (ie, ee) {
                return ee.attributes && ee.attributes[X]
                  ? ie.push(ee)
                  : ie.insert(
                      ee.insert,
                      (0, _.default)({}, N({}, X, ne), ee.attributes)
                    )
              }, new o.default())
        }
        function K(Y) {
          if (Y.nodeType !== Node.ELEMENT_NODE) return {}
          var X = '__ql-computed-style'
          return Y[X] || (Y[X] = window.getComputedStyle(Y))
        }
        function U(Y, X) {
          for (
            var ne = '', ie = Y.ops.length - 1;
            ie >= 0 && ne.length < X.length;
            --ie
          ) {
            var ee = Y.ops[ie]
            if (typeof ee.insert != 'string') break
            ne = ee.insert + ne
          }
          return ne.slice(-1 * X.length) === X
        }
        function x(Y) {
          if (Y.childNodes.length === 0) return !1
          var X = K(Y)
          return ['block', 'list-item'].indexOf(X.display) > -1
        }
        function H(Y, X, ne) {
          return Y.nodeType === Y.TEXT_NODE
            ? ne.reduce(function (ie, ee) {
                return ee(Y, ie)
              }, new o.default())
            : Y.nodeType === Y.ELEMENT_NODE
            ? [].reduce.call(
                Y.childNodes || [],
                function (ie, ee) {
                  var he = H(ee, X, ne)
                  return (
                    ee.nodeType === Y.ELEMENT_NODE &&
                      ((he = X.reduce(function (fe, ve) {
                        return ve(ee, fe)
                      }, he)),
                      (he = (ee[G] || []).reduce(function (fe, ve) {
                        return ve(ee, fe)
                      }, he))),
                    ie.concat(he)
                  )
                },
                new o.default()
              )
            : new o.default()
        }
        function V(Y, X, ne) {
          return D(ne, Y, !0)
        }
        function W(Y, X) {
          var ne = t.default.Attributor.Attribute.keys(Y),
            ie = t.default.Attributor.Class.keys(Y),
            ee = t.default.Attributor.Style.keys(Y),
            he = {}
          return (
            ne
              .concat(ie)
              .concat(ee)
              .forEach(function (fe) {
                var ve = t.default.query(fe, t.default.Scope.ATTRIBUTE)
                ;(ve != null &&
                  ((he[ve.attrName] = ve.value(Y)), he[ve.attrName])) ||
                  ((ve = R[fe]),
                  ve != null &&
                    (ve.attrName === fe || ve.keyName === fe) &&
                    (he[ve.attrName] = ve.value(Y) || void 0),
                  (ve = L[fe]),
                  ve != null &&
                    (ve.attrName === fe || ve.keyName === fe) &&
                    ((ve = L[fe]), (he[ve.attrName] = ve.value(Y) || void 0)))
              }),
            Object.keys(he).length > 0 && (X = D(X, he)),
            X
          )
        }
        function J(Y, X) {
          var ne = t.default.query(Y)
          if (ne == null) return X
          if (ne.prototype instanceof t.default.Embed) {
            var ie = {},
              ee = ne.value(Y)
            ee != null &&
              ((ie[ne.blotName] = ee),
              (X = new o.default().insert(ie, ne.formats(Y))))
          } else
            typeof ne.formats == 'function' &&
              (X = D(X, ne.blotName, ne.formats(Y)))
          return X
        }
        function re(Y, X) {
          return (
            U(
              X,
              `
`
            ) ||
              X.insert(`
`),
            X
          )
        }
        function ue() {
          return new o.default()
        }
        function de(Y, X) {
          var ne = t.default.query(Y)
          if (
            ne == null ||
            ne.blotName !== 'list-item' ||
            !U(
              X,
              `
`
            )
          )
            return X
          for (
            var ie = -1, ee = Y.parentNode;
            !ee.classList.contains('ql-clipboard');

          )
            (t.default.query(ee) || {}).blotName === 'list' && (ie += 1),
              (ee = ee.parentNode)
          return ie <= 0
            ? X
            : X.compose(
                new o.default().retain(X.length() - 1).retain(1, { indent: ie })
              )
        }
        function ge(Y, X) {
          return (
            U(
              X,
              `
`
            ) ||
              ((x(Y) ||
                (X.length() > 0 && Y.nextSibling && x(Y.nextSibling))) &&
                X.insert(`
`)),
            X
          )
        }
        function Oe(Y, X) {
          if (
            x(Y) &&
            Y.nextElementSibling != null &&
            !U(
              X,
              `

`
            )
          ) {
            var ne =
              Y.offsetHeight +
              parseFloat(K(Y).marginTop) +
              parseFloat(K(Y).marginBottom)
            Y.nextElementSibling.offsetTop > Y.offsetTop + ne * 1.5 &&
              X.insert(`
`)
          }
          return X
        }
        function Me(Y, X) {
          var ne = {},
            ie = Y.style || {}
          return (
            ie.fontStyle && K(Y).fontStyle === 'italic' && (ne.italic = !0),
            ie.fontWeight &&
              (K(Y).fontWeight.startsWith('bold') ||
                parseInt(K(Y).fontWeight) >= 700) &&
              (ne.bold = !0),
            Object.keys(ne).length > 0 && (X = D(X, ne)),
            parseFloat(ie.textIndent || 0) > 0 &&
              (X = new o.default().insert('	').concat(X)),
            X
          )
        }
        function Ce(Y, X) {
          var ne = Y.data
          if (Y.parentNode.tagName === 'O:P') return X.insert(ne.trim())
          if (
            ne.trim().length === 0 &&
            Y.parentNode.classList.contains('ql-clipboard')
          )
            return X
          if (!K(Y.parentNode).whiteSpace.startsWith('pre')) {
            var ie = function (he, fe) {
              return (
                (fe = fe.replace(/[^\u00a0]/g, '')),
                fe.length < 1 && he ? ' ' : fe
              )
            }
            ;(ne = ne.replace(/\r\n/g, ' ').replace(/\n/g, ' ')),
              (ne = ne.replace(/\s\s+/g, ie.bind(ie, !0))),
              ((Y.previousSibling == null && x(Y.parentNode)) ||
                (Y.previousSibling != null && x(Y.previousSibling))) &&
                (ne = ne.replace(/^\s+/, ie.bind(ie, !1))),
              ((Y.nextSibling == null && x(Y.parentNode)) ||
                (Y.nextSibling != null && x(Y.nextSibling))) &&
                (ne = ne.replace(/\s+$/, ie.bind(ie, !1)))
          }
          return X.insert(ne)
        }
        ;(y.default = j),
          (y.matchAttributor = W),
          (y.matchBlot = J),
          (y.matchNewline = ge),
          (y.matchSpacing = Oe),
          (y.matchText = Ce)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function d(i, u) {
              for (var l = 0; l < u.length; l++) {
                var a = u[l]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(i, a.key, a)
              }
            }
            return function (i, u, l) {
              return u && d(i.prototype, u), l && d(i, l), i
            }
          })(),
          b = function d(i, u, l) {
            i === null && (i = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(i, u)
            if (a === void 0) {
              var h = Object.getPrototypeOf(i)
              return h === null ? void 0 : d(h, u, l)
            } else {
              if ('value' in a) return a.value
              var r = a.get
              return r === void 0 ? void 0 : r.call(l)
            }
          },
          E = s(6),
          g = _(E)
        function _(d) {
          return d && d.__esModule ? d : { default: d }
        }
        function f(d, i) {
          if (!(d instanceof i))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(d, i) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return i && (typeof i == 'object' || typeof i == 'function') ? i : d
        }
        function n(d, i) {
          if (typeof i != 'function' && i !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof i
            )
          ;(d.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, i)
                : (d.__proto__ = i))
        }
        var t = (function (d) {
          n(i, d)
          function i() {
            return (
              f(this, i),
              o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments)
              )
            )
          }
          return (
            O(
              i,
              [
                {
                  key: 'optimize',
                  value: function (l) {
                    b(
                      i.prototype.__proto__ ||
                        Object.getPrototypeOf(i.prototype),
                      'optimize',
                      this
                    ).call(this, l),
                      this.domNode.tagName !== this.statics.tagName[0] &&
                        this.replaceWith(this.statics.blotName)
                  }
                }
              ],
              [
                {
                  key: 'create',
                  value: function () {
                    return b(
                      i.__proto__ || Object.getPrototypeOf(i),
                      'create',
                      this
                    ).call(this)
                  }
                },
                {
                  key: 'formats',
                  value: function () {
                    return !0
                  }
                }
              ]
            ),
            i
          )
        })(g.default)
        ;(t.blotName = 'bold'), (t.tagName = ['STRONG', 'B']), (y.default = t)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.addControls = y.default = void 0)
        var O = (function () {
            function m(S, N) {
              var C = [],
                q = !0,
                $ = !1,
                B = void 0
              try {
                for (
                  var G = S[Symbol.iterator](), z;
                  !(q = (z = G.next()).done) &&
                  (C.push(z.value), !(N && C.length === N));
                  q = !0
                );
              } catch (R) {
                ;($ = !0), (B = R)
              } finally {
                try {
                  !q && G.return && G.return()
                } finally {
                  if ($) throw B
                }
              }
              return C
            }
            return function (S, N) {
              if (Array.isArray(S)) return S
              if (Symbol.iterator in Object(S)) return m(S, N)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          b = (function () {
            function m(S, N) {
              for (var C = 0; C < N.length; C++) {
                var q = N[C]
                ;(q.enumerable = q.enumerable || !1),
                  (q.configurable = !0),
                  'value' in q && (q.writable = !0),
                  Object.defineProperty(S, q.key, q)
              }
            }
            return function (S, N, C) {
              return N && m(S.prototype, N), C && m(S, C), S
            }
          })(),
          E = s(2),
          g = l(E),
          _ = s(0),
          f = l(_),
          o = s(5),
          n = l(o),
          t = s(10),
          d = l(t),
          i = s(9),
          u = l(i)
        function l(m) {
          return m && m.__esModule ? m : { default: m }
        }
        function a(m, S, N) {
          return (
            S in m
              ? Object.defineProperty(m, S, {
                  value: N,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (m[S] = N),
            m
          )
        }
        function h(m, S) {
          if (!(m instanceof S))
            throw new TypeError('Cannot call a class as a function')
        }
        function r(m, S) {
          if (!m)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return S && (typeof S == 'object' || typeof S == 'function') ? S : m
        }
        function p(m, S) {
          if (typeof S != 'function' && S !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof S
            )
          ;(m.prototype = Object.create(S && S.prototype, {
            constructor: {
              value: m,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            S &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(m, S)
                : (m.__proto__ = S))
        }
        var T = (0, d.default)('quill:toolbar'),
          k = (function (m) {
            p(S, m)
            function S(N, C) {
              h(this, S)
              var q = r(
                this,
                (S.__proto__ || Object.getPrototypeOf(S)).call(this, N, C)
              )
              if (Array.isArray(q.options.container)) {
                var $ = document.createElement('div')
                M($, q.options.container),
                  N.container.parentNode.insertBefore($, N.container),
                  (q.container = $)
              } else
                typeof q.options.container == 'string'
                  ? (q.container = document.querySelector(q.options.container))
                  : (q.container = q.options.container)
              if (!(q.container instanceof HTMLElement)) {
                var B
                return (
                  (B = T.error('Container required for toolbar', q.options)),
                  r(q, B)
                )
              }
              return (
                q.container.classList.add('ql-toolbar'),
                (q.controls = []),
                (q.handlers = {}),
                Object.keys(q.options.handlers).forEach(function (G) {
                  q.addHandler(G, q.options.handlers[G])
                }),
                [].forEach.call(
                  q.container.querySelectorAll('button, select'),
                  function (G) {
                    q.attach(G)
                  }
                ),
                q.quill.on(n.default.events.EDITOR_CHANGE, function (G, z) {
                  G === n.default.events.SELECTION_CHANGE && q.update(z)
                }),
                q.quill.on(n.default.events.SCROLL_OPTIMIZE, function () {
                  var G = q.quill.selection.getRange(),
                    z = O(G, 1),
                    R = z[0]
                  q.update(R)
                }),
                q
              )
            }
            return (
              b(S, [
                {
                  key: 'addHandler',
                  value: function (C, q) {
                    this.handlers[C] = q
                  }
                },
                {
                  key: 'attach',
                  value: function (C) {
                    var q = this,
                      $ = [].find.call(C.classList, function (G) {
                        return G.indexOf('ql-') === 0
                      })
                    if ($) {
                      if (
                        (($ = $.slice(3)),
                        C.tagName === 'BUTTON' &&
                          C.setAttribute('type', 'button'),
                        this.handlers[$] == null)
                      ) {
                        if (
                          this.quill.scroll.whitelist != null &&
                          this.quill.scroll.whitelist[$] == null
                        ) {
                          T.warn('ignoring attaching to disabled format', $, C)
                          return
                        }
                        if (f.default.query($) == null) {
                          T.warn(
                            'ignoring attaching to nonexistent format',
                            $,
                            C
                          )
                          return
                        }
                      }
                      var B = C.tagName === 'SELECT' ? 'change' : 'click'
                      C.addEventListener(B, function (G) {
                        var z = void 0
                        if (C.tagName === 'SELECT') {
                          if (C.selectedIndex < 0) return
                          var R = C.options[C.selectedIndex]
                          R.hasAttribute('selected')
                            ? (z = !1)
                            : (z = R.value || !1)
                        } else C.classList.contains('ql-active') ? (z = !1) : (z = C.value || !C.hasAttribute('value')), G.preventDefault()
                        q.quill.focus()
                        var L = q.quill.selection.getRange(),
                          j = O(L, 1),
                          D = j[0]
                        if (q.handlers[$] != null) q.handlers[$].call(q, z)
                        else if (
                          f.default.query($).prototype instanceof
                          f.default.Embed
                        ) {
                          if (((z = prompt('Enter ' + $)), !z)) return
                          q.quill.updateContents(
                            new g.default()
                              .retain(D.index)
                              .delete(D.length)
                              .insert(a({}, $, z)),
                            n.default.sources.USER
                          )
                        } else q.quill.format($, z, n.default.sources.USER)
                        q.update(D)
                      }),
                        this.controls.push([$, C])
                    }
                  }
                },
                {
                  key: 'update',
                  value: function (C) {
                    var q = C == null ? {} : this.quill.getFormat(C)
                    this.controls.forEach(function ($) {
                      var B = O($, 2),
                        G = B[0],
                        z = B[1]
                      if (z.tagName === 'SELECT') {
                        var R = void 0
                        if (C == null) R = null
                        else if (q[G] == null)
                          R = z.querySelector('option[selected]')
                        else if (!Array.isArray(q[G])) {
                          var L = q[G]
                          typeof L == 'string' && (L = L.replace(/\"/g, '\\"')),
                            (R = z.querySelector('option[value="' + L + '"]'))
                        }
                        R == null
                          ? ((z.value = ''), (z.selectedIndex = -1))
                          : (R.selected = !0)
                      } else if (C == null) z.classList.remove('ql-active')
                      else if (z.hasAttribute('value')) {
                        var j =
                          q[G] === z.getAttribute('value') ||
                          (q[G] != null &&
                            q[G].toString() === z.getAttribute('value')) ||
                          (q[G] == null && !z.getAttribute('value'))
                        z.classList.toggle('ql-active', j)
                      } else z.classList.toggle('ql-active', q[G] != null)
                    })
                  }
                }
              ]),
              S
            )
          })(u.default)
        k.DEFAULTS = {}
        function P(m, S, N) {
          var C = document.createElement('button')
          C.setAttribute('type', 'button'),
            C.classList.add('ql-' + S),
            N != null && (C.value = N),
            m.appendChild(C)
        }
        function M(m, S) {
          Array.isArray(S[0]) || (S = [S]),
            S.forEach(function (N) {
              var C = document.createElement('span')
              C.classList.add('ql-formats'),
                N.forEach(function (q) {
                  if (typeof q == 'string') P(C, q)
                  else {
                    var $ = Object.keys(q)[0],
                      B = q[$]
                    Array.isArray(B) ? A(C, $, B) : P(C, $, B)
                  }
                }),
                m.appendChild(C)
            })
        }
        function A(m, S, N) {
          var C = document.createElement('select')
          C.classList.add('ql-' + S),
            N.forEach(function (q) {
              var $ = document.createElement('option')
              q !== !1
                ? $.setAttribute('value', q)
                : $.setAttribute('selected', 'selected'),
                C.appendChild($)
            }),
            m.appendChild(C)
        }
        ;(k.DEFAULTS = {
          container: null,
          handlers: {
            clean: function () {
              var S = this,
                N = this.quill.getSelection()
              if (N != null)
                if (N.length == 0) {
                  var C = this.quill.getFormat()
                  Object.keys(C).forEach(function (q) {
                    f.default.query(q, f.default.Scope.INLINE) != null &&
                      S.quill.format(q, !1)
                  })
                } else this.quill.removeFormat(N, n.default.sources.USER)
            },
            direction: function (S) {
              var N = this.quill.getFormat().align
              S === 'rtl' && N == null
                ? this.quill.format('align', 'right', n.default.sources.USER)
                : !S &&
                  N === 'right' &&
                  this.quill.format('align', !1, n.default.sources.USER),
                this.quill.format('direction', S, n.default.sources.USER)
            },
            indent: function (S) {
              var N = this.quill.getSelection(),
                C = this.quill.getFormat(N),
                q = parseInt(C.indent || 0)
              if (S === '+1' || S === '-1') {
                var $ = S === '+1' ? 1 : -1
                C.direction === 'rtl' && ($ *= -1),
                  this.quill.format('indent', q + $, n.default.sources.USER)
              }
            },
            link: function (S) {
              S === !0 && (S = prompt('Enter link URL:')),
                this.quill.format('link', S, n.default.sources.USER)
            },
            list: function (S) {
              var N = this.quill.getSelection(),
                C = this.quill.getFormat(N)
              S === 'check'
                ? C.list === 'checked' || C.list === 'unchecked'
                  ? this.quill.format('list', !1, n.default.sources.USER)
                  : this.quill.format(
                      'list',
                      'unchecked',
                      n.default.sources.USER
                    )
                : this.quill.format('list', S, n.default.sources.USER)
            }
          }
        }),
          (y.default = k),
          (y.addControls = M)
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function d(i, u) {
              for (var l = 0; l < u.length; l++) {
                var a = u[l]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(i, a.key, a)
              }
            }
            return function (i, u, l) {
              return u && d(i.prototype, u), l && d(i, l), i
            }
          })(),
          b = function d(i, u, l) {
            i === null && (i = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(i, u)
            if (a === void 0) {
              var h = Object.getPrototypeOf(i)
              return h === null ? void 0 : d(h, u, l)
            } else {
              if ('value' in a) return a.value
              var r = a.get
              return r === void 0 ? void 0 : r.call(l)
            }
          },
          E = s(28),
          g = _(E)
        function _(d) {
          return d && d.__esModule ? d : { default: d }
        }
        function f(d, i) {
          if (!(d instanceof i))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(d, i) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return i && (typeof i == 'object' || typeof i == 'function') ? i : d
        }
        function n(d, i) {
          if (typeof i != 'function' && i !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof i
            )
          ;(d.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, i)
                : (d.__proto__ = i))
        }
        var t = (function (d) {
          n(i, d)
          function i(u, l) {
            f(this, i)
            var a = o(
              this,
              (i.__proto__ || Object.getPrototypeOf(i)).call(this, u)
            )
            return (
              (a.label.innerHTML = l),
              a.container.classList.add('ql-color-picker'),
              [].slice
                .call(a.container.querySelectorAll('.ql-picker-item'), 0, 7)
                .forEach(function (h) {
                  h.classList.add('ql-primary')
                }),
              a
            )
          }
          return (
            O(i, [
              {
                key: 'buildItem',
                value: function (l) {
                  var a = b(
                    i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                    'buildItem',
                    this
                  ).call(this, l)
                  return (
                    (a.style.backgroundColor = l.getAttribute('value') || ''), a
                  )
                }
              },
              {
                key: 'selectItem',
                value: function (l, a) {
                  b(
                    i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                    'selectItem',
                    this
                  ).call(this, l, a)
                  var h = this.label.querySelector('.ql-color-label'),
                    r = (l && l.getAttribute('data-value')) || ''
                  h &&
                    (h.tagName === 'line'
                      ? (h.style.stroke = r)
                      : (h.style.fill = r))
                }
              }
            ]),
            i
          )
        })(g.default)
        y.default = t
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function d(i, u) {
              for (var l = 0; l < u.length; l++) {
                var a = u[l]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(i, a.key, a)
              }
            }
            return function (i, u, l) {
              return u && d(i.prototype, u), l && d(i, l), i
            }
          })(),
          b = function d(i, u, l) {
            i === null && (i = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(i, u)
            if (a === void 0) {
              var h = Object.getPrototypeOf(i)
              return h === null ? void 0 : d(h, u, l)
            } else {
              if ('value' in a) return a.value
              var r = a.get
              return r === void 0 ? void 0 : r.call(l)
            }
          },
          E = s(28),
          g = _(E)
        function _(d) {
          return d && d.__esModule ? d : { default: d }
        }
        function f(d, i) {
          if (!(d instanceof i))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(d, i) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return i && (typeof i == 'object' || typeof i == 'function') ? i : d
        }
        function n(d, i) {
          if (typeof i != 'function' && i !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof i
            )
          ;(d.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, i)
                : (d.__proto__ = i))
        }
        var t = (function (d) {
          n(i, d)
          function i(u, l) {
            f(this, i)
            var a = o(
              this,
              (i.__proto__ || Object.getPrototypeOf(i)).call(this, u)
            )
            return (
              a.container.classList.add('ql-icon-picker'),
              [].forEach.call(
                a.container.querySelectorAll('.ql-picker-item'),
                function (h) {
                  h.innerHTML = l[h.getAttribute('data-value') || '']
                }
              ),
              (a.defaultItem = a.container.querySelector('.ql-selected')),
              a.selectItem(a.defaultItem),
              a
            )
          }
          return (
            O(i, [
              {
                key: 'selectItem',
                value: function (l, a) {
                  b(
                    i.prototype.__proto__ || Object.getPrototypeOf(i.prototype),
                    'selectItem',
                    this
                  ).call(this, l, a),
                    (l = l || this.defaultItem),
                    (this.label.innerHTML = l.innerHTML)
                }
              }
            ]),
            i
          )
        })(g.default)
        y.default = t
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
          function g(_, f) {
            for (var o = 0; o < f.length; o++) {
              var n = f[o]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(_, n.key, n)
            }
          }
          return function (_, f, o) {
            return f && g(_.prototype, f), o && g(_, o), _
          }
        })()
        function b(g, _) {
          if (!(g instanceof _))
            throw new TypeError('Cannot call a class as a function')
        }
        var E = (function () {
          function g(_, f) {
            var o = this
            b(this, g),
              (this.quill = _),
              (this.boundsContainer = f || document.body),
              (this.root = _.addContainer('ql-tooltip')),
              (this.root.innerHTML = this.constructor.TEMPLATE),
              this.quill.root === this.quill.scrollingContainer &&
                this.quill.root.addEventListener('scroll', function () {
                  o.root.style.marginTop = -1 * o.quill.root.scrollTop + 'px'
                }),
              this.hide()
          }
          return (
            O(g, [
              {
                key: 'hide',
                value: function () {
                  this.root.classList.add('ql-hidden')
                }
              },
              {
                key: 'position',
                value: function (f) {
                  var o = f.left + f.width / 2 - this.root.offsetWidth / 2,
                    n = f.bottom + this.quill.root.scrollTop
                  ;(this.root.style.left = o + 'px'),
                    (this.root.style.top = n + 'px'),
                    this.root.classList.remove('ql-flip')
                  var t = this.boundsContainer.getBoundingClientRect(),
                    d = this.root.getBoundingClientRect(),
                    i = 0
                  if (
                    (d.right > t.right &&
                      ((i = t.right - d.right),
                      (this.root.style.left = o + i + 'px')),
                    d.left < t.left &&
                      ((i = t.left - d.left),
                      (this.root.style.left = o + i + 'px')),
                    d.bottom > t.bottom)
                  ) {
                    var u = d.bottom - d.top,
                      l = f.bottom - f.top + u
                    ;(this.root.style.top = n - l + 'px'),
                      this.root.classList.add('ql-flip')
                  }
                  return i
                }
              },
              {
                key: 'show',
                value: function () {
                  this.root.classList.remove('ql-editing'),
                    this.root.classList.remove('ql-hidden')
                }
              }
            ]),
            g
          )
        })()
        y.default = E
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function A(m, S) {
              var N = [],
                C = !0,
                q = !1,
                $ = void 0
              try {
                for (
                  var B = m[Symbol.iterator](), G;
                  !(C = (G = B.next()).done) &&
                  (N.push(G.value), !(S && N.length === S));
                  C = !0
                );
              } catch (z) {
                ;(q = !0), ($ = z)
              } finally {
                try {
                  !C && B.return && B.return()
                } finally {
                  if (q) throw $
                }
              }
              return N
            }
            return function (m, S) {
              if (Array.isArray(m)) return m
              if (Symbol.iterator in Object(m)) return A(m, S)
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
            }
          })(),
          b = function A(m, S, N) {
            m === null && (m = Function.prototype)
            var C = Object.getOwnPropertyDescriptor(m, S)
            if (C === void 0) {
              var q = Object.getPrototypeOf(m)
              return q === null ? void 0 : A(q, S, N)
            } else {
              if ('value' in C) return C.value
              var $ = C.get
              return $ === void 0 ? void 0 : $.call(N)
            }
          },
          E = (function () {
            function A(m, S) {
              for (var N = 0; N < S.length; N++) {
                var C = S[N]
                ;(C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(m, C.key, C)
              }
            }
            return function (m, S, N) {
              return S && A(m.prototype, S), N && A(m, N), m
            }
          })(),
          g = s(3),
          _ = h(g),
          f = s(8),
          o = h(f),
          n = s(43),
          t = h(n),
          d = s(27),
          i = h(d),
          u = s(15),
          l = s(41),
          a = h(l)
        function h(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function r(A, m) {
          if (!(A instanceof m))
            throw new TypeError('Cannot call a class as a function')
        }
        function p(A, m) {
          if (!A)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return m && (typeof m == 'object' || typeof m == 'function') ? m : A
        }
        function T(A, m) {
          if (typeof m != 'function' && m !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof m
            )
          ;(A.prototype = Object.create(m && m.prototype, {
            constructor: {
              value: A,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            m &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(A, m)
                : (A.__proto__ = m))
        }
        var k = [
            [{ header: ['1', '2', '3', !1] }],
            ['bold', 'italic', 'underline', 'link'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean']
          ],
          P = (function (A) {
            T(m, A)
            function m(S, N) {
              r(this, m),
                N.modules.toolbar != null &&
                  N.modules.toolbar.container == null &&
                  (N.modules.toolbar.container = k)
              var C = p(
                this,
                (m.__proto__ || Object.getPrototypeOf(m)).call(this, S, N)
              )
              return C.quill.container.classList.add('ql-snow'), C
            }
            return (
              E(m, [
                {
                  key: 'extendToolbar',
                  value: function (N) {
                    N.container.classList.add('ql-snow'),
                      this.buildButtons(
                        [].slice.call(N.container.querySelectorAll('button')),
                        a.default
                      ),
                      this.buildPickers(
                        [].slice.call(N.container.querySelectorAll('select')),
                        a.default
                      ),
                      (this.tooltip = new M(this.quill, this.options.bounds)),
                      N.container.querySelector('.ql-link') &&
                        this.quill.keyboard.addBinding(
                          { key: 'K', shortKey: !0 },
                          function (C, q) {
                            N.handlers.link.call(N, !q.format.link)
                          }
                        )
                  }
                }
              ]),
              m
            )
          })(t.default)
        P.DEFAULTS = (0, _.default)(!0, {}, t.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function (m) {
                  if (m) {
                    var S = this.quill.getSelection()
                    if (S == null || S.length == 0) return
                    var N = this.quill.getText(S)
                    ;/^\S+@\S+\.\S+$/.test(N) &&
                      N.indexOf('mailto:') !== 0 &&
                      (N = 'mailto:' + N)
                    var C = this.quill.theme.tooltip
                    C.edit('link', N)
                  } else this.quill.format('link', !1)
                }
              }
            }
          }
        })
        var M = (function (A) {
          T(m, A)
          function m(S, N) {
            r(this, m)
            var C = p(
              this,
              (m.__proto__ || Object.getPrototypeOf(m)).call(this, S, N)
            )
            return (C.preview = C.root.querySelector('a.ql-preview')), C
          }
          return (
            E(m, [
              {
                key: 'listen',
                value: function () {
                  var N = this
                  b(
                    m.prototype.__proto__ || Object.getPrototypeOf(m.prototype),
                    'listen',
                    this
                  ).call(this),
                    this.root
                      .querySelector('a.ql-action')
                      .addEventListener('click', function (C) {
                        N.root.classList.contains('ql-editing')
                          ? N.save()
                          : N.edit('link', N.preview.textContent),
                          C.preventDefault()
                      }),
                    this.root
                      .querySelector('a.ql-remove')
                      .addEventListener('click', function (C) {
                        if (N.linkRange != null) {
                          var q = N.linkRange
                          N.restoreFocus(),
                            N.quill.formatText(
                              q,
                              'link',
                              !1,
                              o.default.sources.USER
                            ),
                            delete N.linkRange
                        }
                        C.preventDefault(), N.hide()
                      }),
                    this.quill.on(
                      o.default.events.SELECTION_CHANGE,
                      function (C, q, $) {
                        if (C != null) {
                          if (C.length === 0 && $ === o.default.sources.USER) {
                            var B = N.quill.scroll.descendant(
                                i.default,
                                C.index
                              ),
                              G = O(B, 2),
                              z = G[0],
                              R = G[1]
                            if (z != null) {
                              N.linkRange = new u.Range(C.index - R, z.length())
                              var L = i.default.formats(z.domNode)
                              ;(N.preview.textContent = L),
                                N.preview.setAttribute('href', L),
                                N.show(),
                                N.position(N.quill.getBounds(N.linkRange))
                              return
                            }
                          } else delete N.linkRange
                          N.hide()
                        }
                      }
                    )
                }
              },
              {
                key: 'show',
                value: function () {
                  b(
                    m.prototype.__proto__ || Object.getPrototypeOf(m.prototype),
                    'show',
                    this
                  ).call(this),
                    this.root.removeAttribute('data-mode')
                }
              }
            ]),
            m
          )
        })(n.BaseTooltip)
        ;(M.TEMPLATE = [
          '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
          '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
          '<a class="ql-action"></a>',
          '<a class="ql-remove"></a>'
        ].join('')),
          (y.default = P)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(29),
          b = ee(O),
          E = s(36),
          g = s(38),
          _ = s(64),
          f = s(65),
          o = ee(f),
          n = s(66),
          t = ee(n),
          d = s(67),
          i = ee(d),
          u = s(37),
          l = s(26),
          a = s(39),
          h = s(40),
          r = s(56),
          p = ee(r),
          T = s(68),
          k = ee(T),
          P = s(27),
          M = ee(P),
          A = s(69),
          m = ee(A),
          S = s(70),
          N = ee(S),
          C = s(71),
          q = ee(C),
          $ = s(72),
          B = ee($),
          G = s(73),
          z = ee(G),
          R = s(13),
          L = ee(R),
          j = s(74),
          D = ee(j),
          K = s(75),
          U = ee(K),
          x = s(57),
          H = ee(x),
          V = s(41),
          W = ee(V),
          J = s(28),
          re = ee(J),
          ue = s(59),
          de = ee(ue),
          ge = s(60),
          Oe = ee(ge),
          Me = s(61),
          Ce = ee(Me),
          Y = s(108),
          X = ee(Y),
          ne = s(62),
          ie = ee(ne)
        function ee(he) {
          return he && he.__esModule ? he : { default: he }
        }
        b.default.register(
          {
            'attributors/attribute/direction': g.DirectionAttribute,
            'attributors/class/align': E.AlignClass,
            'attributors/class/background': u.BackgroundClass,
            'attributors/class/color': l.ColorClass,
            'attributors/class/direction': g.DirectionClass,
            'attributors/class/font': a.FontClass,
            'attributors/class/size': h.SizeClass,
            'attributors/style/align': E.AlignStyle,
            'attributors/style/background': u.BackgroundStyle,
            'attributors/style/color': l.ColorStyle,
            'attributors/style/direction': g.DirectionStyle,
            'attributors/style/font': a.FontStyle,
            'attributors/style/size': h.SizeStyle
          },
          !0
        ),
          b.default.register(
            {
              'formats/align': E.AlignClass,
              'formats/direction': g.DirectionClass,
              'formats/indent': _.IndentClass,
              'formats/background': u.BackgroundStyle,
              'formats/color': l.ColorStyle,
              'formats/font': a.FontClass,
              'formats/size': h.SizeClass,
              'formats/blockquote': o.default,
              'formats/code-block': L.default,
              'formats/header': t.default,
              'formats/list': i.default,
              'formats/bold': p.default,
              'formats/code': R.Code,
              'formats/italic': k.default,
              'formats/link': M.default,
              'formats/script': m.default,
              'formats/strike': N.default,
              'formats/underline': q.default,
              'formats/image': B.default,
              'formats/video': z.default,
              'formats/list/item': d.ListItem,
              'modules/formula': D.default,
              'modules/syntax': U.default,
              'modules/toolbar': H.default,
              'themes/bubble': X.default,
              'themes/snow': ie.default,
              'ui/icons': W.default,
              'ui/picker': re.default,
              'ui/icon-picker': Oe.default,
              'ui/color-picker': de.default,
              'ui/tooltip': Ce.default
            },
            !0
          ),
          (y.default = b.default)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.IndentClass = void 0)
        var O = (function () {
            function i(u, l) {
              for (var a = 0; a < l.length; a++) {
                var h = l[a]
                ;(h.enumerable = h.enumerable || !1),
                  (h.configurable = !0),
                  'value' in h && (h.writable = !0),
                  Object.defineProperty(u, h.key, h)
              }
            }
            return function (u, l, a) {
              return l && i(u.prototype, l), a && i(u, a), u
            }
          })(),
          b = function i(u, l, a) {
            u === null && (u = Function.prototype)
            var h = Object.getOwnPropertyDescriptor(u, l)
            if (h === void 0) {
              var r = Object.getPrototypeOf(u)
              return r === null ? void 0 : i(r, l, a)
            } else {
              if ('value' in h) return h.value
              var p = h.get
              return p === void 0 ? void 0 : p.call(a)
            }
          },
          E = s(0),
          g = _(E)
        function _(i) {
          return i && i.__esModule ? i : { default: i }
        }
        function f(i, u) {
          if (!(i instanceof u))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(i, u) {
          if (!i)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return u && (typeof u == 'object' || typeof u == 'function') ? u : i
        }
        function n(i, u) {
          if (typeof u != 'function' && u !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof u
            )
          ;(i.prototype = Object.create(u && u.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            u &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(i, u)
                : (i.__proto__ = u))
        }
        var t = (function (i) {
            n(u, i)
            function u() {
              return (
                f(this, u),
                o(
                  this,
                  (u.__proto__ || Object.getPrototypeOf(u)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              O(u, [
                {
                  key: 'add',
                  value: function (a, h) {
                    if (h === '+1' || h === '-1') {
                      var r = this.value(a) || 0
                      h = h === '+1' ? r + 1 : r - 1
                    }
                    return h === 0
                      ? (this.remove(a), !0)
                      : b(
                          u.prototype.__proto__ ||
                            Object.getPrototypeOf(u.prototype),
                          'add',
                          this
                        ).call(this, a, h)
                  }
                },
                {
                  key: 'canAdd',
                  value: function (a, h) {
                    return (
                      b(
                        u.prototype.__proto__ ||
                          Object.getPrototypeOf(u.prototype),
                        'canAdd',
                        this
                      ).call(this, a, h) ||
                      b(
                        u.prototype.__proto__ ||
                          Object.getPrototypeOf(u.prototype),
                        'canAdd',
                        this
                      ).call(this, a, parseInt(h))
                    )
                  }
                },
                {
                  key: 'value',
                  value: function (a) {
                    return (
                      parseInt(
                        b(
                          u.prototype.__proto__ ||
                            Object.getPrototypeOf(u.prototype),
                          'value',
                          this
                        ).call(this, a)
                      ) || void 0
                    )
                  }
                }
              ]),
              u
            )
          })(g.default.Attributor.Class),
          d = new t('indent', 'ql-indent', {
            scope: g.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          })
        y.IndentClass = d
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(4),
          b = E(O)
        function E(n) {
          return n && n.__esModule ? n : { default: n }
        }
        function g(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function _(n, t) {
          if (!n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t && (typeof t == 'object' || typeof t == 'function') ? t : n
        }
        function f(n, t) {
          if (typeof t != 'function' && t !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(n.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(n, t)
                : (n.__proto__ = t))
        }
        var o = (function (n) {
          f(t, n)
          function t() {
            return (
              g(this, t),
              _(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            )
          }
          return t
        })(b.default)
        ;(o.blotName = 'blockquote'),
          (o.tagName = 'blockquote'),
          (y.default = o)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function t(d, i) {
              for (var u = 0; u < i.length; u++) {
                var l = i[u]
                ;(l.enumerable = l.enumerable || !1),
                  (l.configurable = !0),
                  'value' in l && (l.writable = !0),
                  Object.defineProperty(d, l.key, l)
              }
            }
            return function (d, i, u) {
              return i && t(d.prototype, i), u && t(d, u), d
            }
          })(),
          b = s(4),
          E = g(b)
        function g(t) {
          return t && t.__esModule ? t : { default: t }
        }
        function _(t, d) {
          if (!(t instanceof d))
            throw new TypeError('Cannot call a class as a function')
        }
        function f(t, d) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return d && (typeof d == 'object' || typeof d == 'function') ? d : t
        }
        function o(t, d) {
          if (typeof d != 'function' && d !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof d
            )
          ;(t.prototype = Object.create(d && d.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            d &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : (t.__proto__ = d))
        }
        var n = (function (t) {
          o(d, t)
          function d() {
            return (
              _(this, d),
              f(
                this,
                (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments)
              )
            )
          }
          return (
            O(d, null, [
              {
                key: 'formats',
                value: function (u) {
                  return this.tagName.indexOf(u.tagName) + 1
                }
              }
            ]),
            d
          )
        })(E.default)
        ;(n.blotName = 'header'),
          (n.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']),
          (y.default = n)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.ListItem = void 0)
        var O = (function () {
            function r(p, T) {
              for (var k = 0; k < T.length; k++) {
                var P = T[k]
                ;(P.enumerable = P.enumerable || !1),
                  (P.configurable = !0),
                  'value' in P && (P.writable = !0),
                  Object.defineProperty(p, P.key, P)
              }
            }
            return function (p, T, k) {
              return T && r(p.prototype, T), k && r(p, k), p
            }
          })(),
          b = function r(p, T, k) {
            p === null && (p = Function.prototype)
            var P = Object.getOwnPropertyDescriptor(p, T)
            if (P === void 0) {
              var M = Object.getPrototypeOf(p)
              return M === null ? void 0 : r(M, T, k)
            } else {
              if ('value' in P) return P.value
              var A = P.get
              return A === void 0 ? void 0 : A.call(k)
            }
          },
          E = s(0),
          g = t(E),
          _ = s(4),
          f = t(_),
          o = s(25),
          n = t(o)
        function t(r) {
          return r && r.__esModule ? r : { default: r }
        }
        function d(r, p, T) {
          return (
            p in r
              ? Object.defineProperty(r, p, {
                  value: T,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (r[p] = T),
            r
          )
        }
        function i(r, p) {
          if (!(r instanceof p))
            throw new TypeError('Cannot call a class as a function')
        }
        function u(r, p) {
          if (!r)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return p && (typeof p == 'object' || typeof p == 'function') ? p : r
        }
        function l(r, p) {
          if (typeof p != 'function' && p !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof p
            )
          ;(r.prototype = Object.create(p && p.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            p &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(r, p)
                : (r.__proto__ = p))
        }
        var a = (function (r) {
          l(p, r)
          function p() {
            return (
              i(this, p),
              u(
                this,
                (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments)
              )
            )
          }
          return (
            O(
              p,
              [
                {
                  key: 'format',
                  value: function (k, P) {
                    k === h.blotName && !P
                      ? this.replaceWith(g.default.create(this.statics.scope))
                      : b(
                          p.prototype.__proto__ ||
                            Object.getPrototypeOf(p.prototype),
                          'format',
                          this
                        ).call(this, k, P)
                  }
                },
                {
                  key: 'remove',
                  value: function () {
                    this.prev == null && this.next == null
                      ? this.parent.remove()
                      : b(
                          p.prototype.__proto__ ||
                            Object.getPrototypeOf(p.prototype),
                          'remove',
                          this
                        ).call(this)
                  }
                },
                {
                  key: 'replaceWith',
                  value: function (k, P) {
                    return (
                      this.parent.isolate(
                        this.offset(this.parent),
                        this.length()
                      ),
                      k === this.parent.statics.blotName
                        ? (this.parent.replaceWith(k, P), this)
                        : (this.parent.unwrap(),
                          b(
                            p.prototype.__proto__ ||
                              Object.getPrototypeOf(p.prototype),
                            'replaceWith',
                            this
                          ).call(this, k, P))
                    )
                  }
                }
              ],
              [
                {
                  key: 'formats',
                  value: function (k) {
                    return k.tagName === this.tagName
                      ? void 0
                      : b(
                          p.__proto__ || Object.getPrototypeOf(p),
                          'formats',
                          this
                        ).call(this, k)
                  }
                }
              ]
            ),
            p
          )
        })(f.default)
        ;(a.blotName = 'list-item'), (a.tagName = 'LI')
        var h = (function (r) {
          l(p, r),
            O(p, null, [
              {
                key: 'create',
                value: function (k) {
                  var P = k === 'ordered' ? 'OL' : 'UL',
                    M = b(
                      p.__proto__ || Object.getPrototypeOf(p),
                      'create',
                      this
                    ).call(this, P)
                  return (
                    (k === 'checked' || k === 'unchecked') &&
                      M.setAttribute('data-checked', k === 'checked'),
                    M
                  )
                }
              },
              {
                key: 'formats',
                value: function (k) {
                  if (k.tagName === 'OL') return 'ordered'
                  if (k.tagName === 'UL')
                    return k.hasAttribute('data-checked')
                      ? k.getAttribute('data-checked') === 'true'
                        ? 'checked'
                        : 'unchecked'
                      : 'bullet'
                }
              }
            ])
          function p(T) {
            i(this, p)
            var k = u(
                this,
                (p.__proto__ || Object.getPrototypeOf(p)).call(this, T)
              ),
              P = function (A) {
                if (A.target.parentNode === T) {
                  var m = k.statics.formats(T),
                    S = g.default.find(A.target)
                  m === 'checked'
                    ? S.format('list', 'unchecked')
                    : m === 'unchecked' && S.format('list', 'checked')
                }
              }
            return (
              T.addEventListener('touchstart', P),
              T.addEventListener('mousedown', P),
              k
            )
          }
          return (
            O(p, [
              {
                key: 'format',
                value: function (k, P) {
                  this.children.length > 0 && this.children.tail.format(k, P)
                }
              },
              {
                key: 'formats',
                value: function () {
                  return d(
                    {},
                    this.statics.blotName,
                    this.statics.formats(this.domNode)
                  )
                }
              },
              {
                key: 'insertBefore',
                value: function (k, P) {
                  if (k instanceof a)
                    b(
                      p.prototype.__proto__ ||
                        Object.getPrototypeOf(p.prototype),
                      'insertBefore',
                      this
                    ).call(this, k, P)
                  else {
                    var M = P == null ? this.length() : P.offset(this),
                      A = this.split(M)
                    A.parent.insertBefore(k, A)
                  }
                }
              },
              {
                key: 'optimize',
                value: function (k) {
                  b(
                    p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                    'optimize',
                    this
                  ).call(this, k)
                  var P = this.next
                  P != null &&
                    P.prev === this &&
                    P.statics.blotName === this.statics.blotName &&
                    P.domNode.tagName === this.domNode.tagName &&
                    P.domNode.getAttribute('data-checked') ===
                      this.domNode.getAttribute('data-checked') &&
                    (P.moveChildren(this), P.remove())
                }
              },
              {
                key: 'replace',
                value: function (k) {
                  if (k.statics.blotName !== this.statics.blotName) {
                    var P = g.default.create(this.statics.defaultChild)
                    k.moveChildren(P), this.appendChild(P)
                  }
                  b(
                    p.prototype.__proto__ || Object.getPrototypeOf(p.prototype),
                    'replace',
                    this
                  ).call(this, k)
                }
              }
            ]),
            p
          )
        })(n.default)
        ;(h.blotName = 'list'),
          (h.scope = g.default.Scope.BLOCK_BLOT),
          (h.tagName = ['OL', 'UL']),
          (h.defaultChild = 'list-item'),
          (h.allowedChildren = [a]),
          (y.ListItem = a),
          (y.default = h)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(56),
          b = E(O)
        function E(n) {
          return n && n.__esModule ? n : { default: n }
        }
        function g(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function _(n, t) {
          if (!n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t && (typeof t == 'object' || typeof t == 'function') ? t : n
        }
        function f(n, t) {
          if (typeof t != 'function' && t !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(n.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(n, t)
                : (n.__proto__ = t))
        }
        var o = (function (n) {
          f(t, n)
          function t() {
            return (
              g(this, t),
              _(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            )
          }
          return t
        })(b.default)
        ;(o.blotName = 'italic'), (o.tagName = ['EM', 'I']), (y.default = o)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function d(i, u) {
              for (var l = 0; l < u.length; l++) {
                var a = u[l]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  Object.defineProperty(i, a.key, a)
              }
            }
            return function (i, u, l) {
              return u && d(i.prototype, u), l && d(i, l), i
            }
          })(),
          b = function d(i, u, l) {
            i === null && (i = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(i, u)
            if (a === void 0) {
              var h = Object.getPrototypeOf(i)
              return h === null ? void 0 : d(h, u, l)
            } else {
              if ('value' in a) return a.value
              var r = a.get
              return r === void 0 ? void 0 : r.call(l)
            }
          },
          E = s(6),
          g = _(E)
        function _(d) {
          return d && d.__esModule ? d : { default: d }
        }
        function f(d, i) {
          if (!(d instanceof i))
            throw new TypeError('Cannot call a class as a function')
        }
        function o(d, i) {
          if (!d)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return i && (typeof i == 'object' || typeof i == 'function') ? i : d
        }
        function n(d, i) {
          if (typeof i != 'function' && i !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof i
            )
          ;(d.prototype = Object.create(i && i.prototype, {
            constructor: {
              value: d,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            i &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(d, i)
                : (d.__proto__ = i))
        }
        var t = (function (d) {
          n(i, d)
          function i() {
            return (
              f(this, i),
              o(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments)
              )
            )
          }
          return (
            O(i, null, [
              {
                key: 'create',
                value: function (l) {
                  return l === 'super'
                    ? document.createElement('sup')
                    : l === 'sub'
                    ? document.createElement('sub')
                    : b(
                        i.__proto__ || Object.getPrototypeOf(i),
                        'create',
                        this
                      ).call(this, l)
                }
              },
              {
                key: 'formats',
                value: function (l) {
                  if (l.tagName === 'SUB') return 'sub'
                  if (l.tagName === 'SUP') return 'super'
                }
              }
            ]),
            i
          )
        })(g.default)
        ;(t.blotName = 'script'), (t.tagName = ['SUB', 'SUP']), (y.default = t)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(6),
          b = E(O)
        function E(n) {
          return n && n.__esModule ? n : { default: n }
        }
        function g(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function _(n, t) {
          if (!n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t && (typeof t == 'object' || typeof t == 'function') ? t : n
        }
        function f(n, t) {
          if (typeof t != 'function' && t !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(n.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(n, t)
                : (n.__proto__ = t))
        }
        var o = (function (n) {
          f(t, n)
          function t() {
            return (
              g(this, t),
              _(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            )
          }
          return t
        })(b.default)
        ;(o.blotName = 'strike'), (o.tagName = 'S'), (y.default = o)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = s(6),
          b = E(O)
        function E(n) {
          return n && n.__esModule ? n : { default: n }
        }
        function g(n, t) {
          if (!(n instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function _(n, t) {
          if (!n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t && (typeof t == 'object' || typeof t == 'function') ? t : n
        }
        function f(n, t) {
          if (typeof t != 'function' && t !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(n.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(n, t)
                : (n.__proto__ = t))
        }
        var o = (function (n) {
          f(t, n)
          function t() {
            return (
              g(this, t),
              _(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            )
          }
          return t
        })(b.default)
        ;(o.blotName = 'underline'), (o.tagName = 'U'), (y.default = o)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function u(l, a) {
              for (var h = 0; h < a.length; h++) {
                var r = a[h]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(l, r.key, r)
              }
            }
            return function (l, a, h) {
              return a && u(l.prototype, a), h && u(l, h), l
            }
          })(),
          b = function u(l, a, h) {
            l === null && (l = Function.prototype)
            var r = Object.getOwnPropertyDescriptor(l, a)
            if (r === void 0) {
              var p = Object.getPrototypeOf(l)
              return p === null ? void 0 : u(p, a, h)
            } else {
              if ('value' in r) return r.value
              var T = r.get
              return T === void 0 ? void 0 : T.call(h)
            }
          },
          E = s(0),
          g = f(E),
          _ = s(27)
        function f(u) {
          return u && u.__esModule ? u : { default: u }
        }
        function o(u, l) {
          if (!(u instanceof l))
            throw new TypeError('Cannot call a class as a function')
        }
        function n(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return l && (typeof l == 'object' || typeof l == 'function') ? l : u
        }
        function t(u, l) {
          if (typeof l != 'function' && l !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof l
            )
          ;(u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l))
        }
        var d = ['alt', 'height', 'width'],
          i = (function (u) {
            t(l, u)
            function l() {
              return (
                o(this, l),
                n(
                  this,
                  (l.__proto__ || Object.getPrototypeOf(l)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              O(
                l,
                [
                  {
                    key: 'format',
                    value: function (h, r) {
                      d.indexOf(h) > -1
                        ? r
                          ? this.domNode.setAttribute(h, r)
                          : this.domNode.removeAttribute(h)
                        : b(
                            l.prototype.__proto__ ||
                              Object.getPrototypeOf(l.prototype),
                            'format',
                            this
                          ).call(this, h, r)
                    }
                  }
                ],
                [
                  {
                    key: 'create',
                    value: function (h) {
                      var r = b(
                        l.__proto__ || Object.getPrototypeOf(l),
                        'create',
                        this
                      ).call(this, h)
                      return (
                        typeof h == 'string' &&
                          r.setAttribute('src', this.sanitize(h)),
                        r
                      )
                    }
                  },
                  {
                    key: 'formats',
                    value: function (h) {
                      return d.reduce(function (r, p) {
                        return (
                          h.hasAttribute(p) && (r[p] = h.getAttribute(p)), r
                        )
                      }, {})
                    }
                  },
                  {
                    key: 'match',
                    value: function (h) {
                      return (
                        /\.(jpe?g|gif|png)$/.test(h) ||
                        /^data:image\/.+;base64/.test(h)
                      )
                    }
                  },
                  {
                    key: 'sanitize',
                    value: function (h) {
                      return (0, _.sanitize)(h, ['http', 'https', 'data'])
                        ? h
                        : '//:0'
                    }
                  },
                  {
                    key: 'value',
                    value: function (h) {
                      return h.getAttribute('src')
                    }
                  }
                ]
              ),
              l
            )
          })(g.default.Embed)
        ;(i.blotName = 'image'), (i.tagName = 'IMG'), (y.default = i)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 })
        var O = (function () {
            function u(l, a) {
              for (var h = 0; h < a.length; h++) {
                var r = a[h]
                ;(r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(l, r.key, r)
              }
            }
            return function (l, a, h) {
              return a && u(l.prototype, a), h && u(l, h), l
            }
          })(),
          b = function u(l, a, h) {
            l === null && (l = Function.prototype)
            var r = Object.getOwnPropertyDescriptor(l, a)
            if (r === void 0) {
              var p = Object.getPrototypeOf(l)
              return p === null ? void 0 : u(p, a, h)
            } else {
              if ('value' in r) return r.value
              var T = r.get
              return T === void 0 ? void 0 : T.call(h)
            }
          },
          E = s(4),
          g = s(27),
          _ = f(g)
        function f(u) {
          return u && u.__esModule ? u : { default: u }
        }
        function o(u, l) {
          if (!(u instanceof l))
            throw new TypeError('Cannot call a class as a function')
        }
        function n(u, l) {
          if (!u)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return l && (typeof l == 'object' || typeof l == 'function') ? l : u
        }
        function t(u, l) {
          if (typeof l != 'function' && l !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof l
            )
          ;(u.prototype = Object.create(l && l.prototype, {
            constructor: {
              value: u,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            l &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(u, l)
                : (u.__proto__ = l))
        }
        var d = ['height', 'width'],
          i = (function (u) {
            t(l, u)
            function l() {
              return (
                o(this, l),
                n(
                  this,
                  (l.__proto__ || Object.getPrototypeOf(l)).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              O(
                l,
                [
                  {
                    key: 'format',
                    value: function (h, r) {
                      d.indexOf(h) > -1
                        ? r
                          ? this.domNode.setAttribute(h, r)
                          : this.domNode.removeAttribute(h)
                        : b(
                            l.prototype.__proto__ ||
                              Object.getPrototypeOf(l.prototype),
                            'format',
                            this
                          ).call(this, h, r)
                    }
                  }
                ],
                [
                  {
                    key: 'create',
                    value: function (h) {
                      var r = b(
                        l.__proto__ || Object.getPrototypeOf(l),
                        'create',
                        this
                      ).call(this, h)
                      return (
                        r.setAttribute('frameborder', '0'),
                        r.setAttribute('allowfullscreen', !0),
                        r.setAttribute('src', this.sanitize(h)),
                        r
                      )
                    }
                  },
                  {
                    key: 'formats',
                    value: function (h) {
                      return d.reduce(function (r, p) {
                        return (
                          h.hasAttribute(p) && (r[p] = h.getAttribute(p)), r
                        )
                      }, {})
                    }
                  },
                  {
                    key: 'sanitize',
                    value: function (h) {
                      return _.default.sanitize(h)
                    }
                  },
                  {
                    key: 'value',
                    value: function (h) {
                      return h.getAttribute('src')
                    }
                  }
                ]
              ),
              l
            )
          })(E.BlockEmbed)
        ;(i.blotName = 'video'),
          (i.className = 'ql-video'),
          (i.tagName = 'IFRAME'),
          (y.default = i)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.FormulaBlot = void 0)
        var O = (function () {
            function h(r, p) {
              for (var T = 0; T < p.length; T++) {
                var k = p[T]
                ;(k.enumerable = k.enumerable || !1),
                  (k.configurable = !0),
                  'value' in k && (k.writable = !0),
                  Object.defineProperty(r, k.key, k)
              }
            }
            return function (r, p, T) {
              return p && h(r.prototype, p), T && h(r, T), r
            }
          })(),
          b = function h(r, p, T) {
            r === null && (r = Function.prototype)
            var k = Object.getOwnPropertyDescriptor(r, p)
            if (k === void 0) {
              var P = Object.getPrototypeOf(r)
              return P === null ? void 0 : h(P, p, T)
            } else {
              if ('value' in k) return k.value
              var M = k.get
              return M === void 0 ? void 0 : M.call(T)
            }
          },
          E = s(35),
          g = t(E),
          _ = s(5),
          f = t(_),
          o = s(9),
          n = t(o)
        function t(h) {
          return h && h.__esModule ? h : { default: h }
        }
        function d(h, r) {
          if (!(h instanceof r))
            throw new TypeError('Cannot call a class as a function')
        }
        function i(h, r) {
          if (!h)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return r && (typeof r == 'object' || typeof r == 'function') ? r : h
        }
        function u(h, r) {
          if (typeof r != 'function' && r !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof r
            )
          ;(h.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: h,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            r &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(h, r)
                : (h.__proto__ = r))
        }
        var l = (function (h) {
          u(r, h)
          function r() {
            return (
              d(this, r),
              i(
                this,
                (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments)
              )
            )
          }
          return (
            O(r, null, [
              {
                key: 'create',
                value: function (T) {
                  var k = b(
                    r.__proto__ || Object.getPrototypeOf(r),
                    'create',
                    this
                  ).call(this, T)
                  return (
                    typeof T == 'string' &&
                      (window.katex.render(T, k, {
                        throwOnError: !1,
                        errorColor: '#f00'
                      }),
                      k.setAttribute('data-value', T)),
                    k
                  )
                }
              },
              {
                key: 'value',
                value: function (T) {
                  return T.getAttribute('data-value')
                }
              }
            ]),
            r
          )
        })(g.default)
        ;(l.blotName = 'formula'),
          (l.className = 'ql-formula'),
          (l.tagName = 'SPAN')
        var a = (function (h) {
          u(r, h),
            O(r, null, [
              {
                key: 'register',
                value: function () {
                  f.default.register(l, !0)
                }
              }
            ])
          function r() {
            d(this, r)
            var p = i(
              this,
              (r.__proto__ || Object.getPrototypeOf(r)).call(this)
            )
            if (window.katex == null)
              throw new Error('Formula module requires KaTeX.')
            return p
          }
          return r
        })(n.default)
        ;(y.FormulaBlot = l), (y.default = a)
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.CodeToken = y.CodeBlock = void 0)
        var O = (function () {
            function T(k, P) {
              for (var M = 0; M < P.length; M++) {
                var A = P[M]
                ;(A.enumerable = A.enumerable || !1),
                  (A.configurable = !0),
                  'value' in A && (A.writable = !0),
                  Object.defineProperty(k, A.key, A)
              }
            }
            return function (k, P, M) {
              return P && T(k.prototype, P), M && T(k, M), k
            }
          })(),
          b = function T(k, P, M) {
            k === null && (k = Function.prototype)
            var A = Object.getOwnPropertyDescriptor(k, P)
            if (A === void 0) {
              var m = Object.getPrototypeOf(k)
              return m === null ? void 0 : T(m, P, M)
            } else {
              if ('value' in A) return A.value
              var S = A.get
              return S === void 0 ? void 0 : S.call(M)
            }
          },
          E = s(0),
          g = i(E),
          _ = s(5),
          f = i(_),
          o = s(9),
          n = i(o),
          t = s(13),
          d = i(t)
        function i(T) {
          return T && T.__esModule ? T : { default: T }
        }
        function u(T, k) {
          if (!(T instanceof k))
            throw new TypeError('Cannot call a class as a function')
        }
        function l(T, k) {
          if (!T)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return k && (typeof k == 'object' || typeof k == 'function') ? k : T
        }
        function a(T, k) {
          if (typeof k != 'function' && k !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof k
            )
          ;(T.prototype = Object.create(k && k.prototype, {
            constructor: {
              value: T,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            k &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(T, k)
                : (T.__proto__ = k))
        }
        var h = (function (T) {
          a(k, T)
          function k() {
            return (
              u(this, k),
              l(
                this,
                (k.__proto__ || Object.getPrototypeOf(k)).apply(this, arguments)
              )
            )
          }
          return (
            O(k, [
              {
                key: 'replaceWith',
                value: function (M) {
                  ;(this.domNode.textContent = this.domNode.textContent),
                    this.attach(),
                    b(
                      k.prototype.__proto__ ||
                        Object.getPrototypeOf(k.prototype),
                      'replaceWith',
                      this
                    ).call(this, M)
                }
              },
              {
                key: 'highlight',
                value: function (M) {
                  var A = this.domNode.textContent
                  this.cachedText !== A &&
                    ((A.trim().length > 0 || this.cachedText == null) &&
                      ((this.domNode.innerHTML = M(A)),
                      this.domNode.normalize(),
                      this.attach()),
                    (this.cachedText = A))
                }
              }
            ]),
            k
          )
        })(d.default)
        h.className = 'ql-syntax'
        var r = new g.default.Attributor.Class('token', 'hljs', {
            scope: g.default.Scope.INLINE
          }),
          p = (function (T) {
            a(k, T),
              O(k, null, [
                {
                  key: 'register',
                  value: function () {
                    f.default.register(r, !0), f.default.register(h, !0)
                  }
                }
              ])
            function k(P, M) {
              u(this, k)
              var A = l(
                this,
                (k.__proto__ || Object.getPrototypeOf(k)).call(this, P, M)
              )
              if (typeof A.options.highlight != 'function')
                throw new Error(
                  'Syntax module requires highlight.js. Please include the library on the page before Quill.'
                )
              var m = null
              return (
                A.quill.on(f.default.events.SCROLL_OPTIMIZE, function () {
                  clearTimeout(m),
                    (m = setTimeout(function () {
                      A.highlight(), (m = null)
                    }, A.options.interval))
                }),
                A.highlight(),
                A
              )
            }
            return (
              O(k, [
                {
                  key: 'highlight',
                  value: function () {
                    var M = this
                    if (!this.quill.selection.composing) {
                      this.quill.update(f.default.sources.USER)
                      var A = this.quill.getSelection()
                      this.quill.scroll.descendants(h).forEach(function (m) {
                        m.highlight(M.options.highlight)
                      }),
                        this.quill.update(f.default.sources.SILENT),
                        A != null &&
                          this.quill.setSelection(A, f.default.sources.SILENT)
                    }
                  }
                }
              ]),
              k
            )
          })(n.default)
        ;(p.DEFAULTS = {
          highlight: (function () {
            return window.hljs == null
              ? null
              : function (T) {
                  var k = window.hljs.highlightAuto(T)
                  return k.value
                }
          })(),
          interval: 1e3
        }),
          (y.CodeBlock = h),
          (y.CodeToken = r),
          (y.default = p)
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'
      },
      function (v, y) {
        v.exports =
          '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'
      },
      function (v, y, s) {
        Object.defineProperty(y, '__esModule', { value: !0 }),
          (y.default = y.BubbleTooltip = void 0)
        var O = function k(P, M, A) {
            P === null && (P = Function.prototype)
            var m = Object.getOwnPropertyDescriptor(P, M)
            if (m === void 0) {
              var S = Object.getPrototypeOf(P)
              return S === null ? void 0 : k(S, M, A)
            } else {
              if ('value' in m) return m.value
              var N = m.get
              return N === void 0 ? void 0 : N.call(A)
            }
          },
          b = (function () {
            function k(P, M) {
              for (var A = 0; A < M.length; A++) {
                var m = M[A]
                ;(m.enumerable = m.enumerable || !1),
                  (m.configurable = !0),
                  'value' in m && (m.writable = !0),
                  Object.defineProperty(P, m.key, m)
              }
            }
            return function (P, M, A) {
              return M && k(P.prototype, M), A && k(P, A), P
            }
          })(),
          E = s(3),
          g = u(E),
          _ = s(8),
          f = u(_),
          o = s(43),
          n = u(o),
          t = s(15),
          d = s(41),
          i = u(d)
        function u(k) {
          return k && k.__esModule ? k : { default: k }
        }
        function l(k, P) {
          if (!(k instanceof P))
            throw new TypeError('Cannot call a class as a function')
        }
        function a(k, P) {
          if (!k)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return P && (typeof P == 'object' || typeof P == 'function') ? P : k
        }
        function h(k, P) {
          if (typeof P != 'function' && P !== null)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof P
            )
          ;(k.prototype = Object.create(P && P.prototype, {
            constructor: {
              value: k,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            P &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(k, P)
                : (k.__proto__ = P))
        }
        var r = [
            ['bold', 'italic', 'link'],
            [{ header: 1 }, { header: 2 }, 'blockquote']
          ],
          p = (function (k) {
            h(P, k)
            function P(M, A) {
              l(this, P),
                A.modules.toolbar != null &&
                  A.modules.toolbar.container == null &&
                  (A.modules.toolbar.container = r)
              var m = a(
                this,
                (P.__proto__ || Object.getPrototypeOf(P)).call(this, M, A)
              )
              return m.quill.container.classList.add('ql-bubble'), m
            }
            return (
              b(P, [
                {
                  key: 'extendToolbar',
                  value: function (A) {
                    ;(this.tooltip = new T(this.quill, this.options.bounds)),
                      this.tooltip.root.appendChild(A.container),
                      this.buildButtons(
                        [].slice.call(A.container.querySelectorAll('button')),
                        i.default
                      ),
                      this.buildPickers(
                        [].slice.call(A.container.querySelectorAll('select')),
                        i.default
                      )
                  }
                }
              ]),
              P
            )
          })(n.default)
        p.DEFAULTS = (0, g.default)(!0, {}, n.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function (P) {
                  P
                    ? this.quill.theme.tooltip.edit()
                    : this.quill.format('link', !1)
                }
              }
            }
          }
        })
        var T = (function (k) {
          h(P, k)
          function P(M, A) {
            l(this, P)
            var m = a(
              this,
              (P.__proto__ || Object.getPrototypeOf(P)).call(this, M, A)
            )
            return (
              m.quill.on(f.default.events.EDITOR_CHANGE, function (S, N, C, q) {
                if (S === f.default.events.SELECTION_CHANGE)
                  if (
                    N != null &&
                    N.length > 0 &&
                    q === f.default.sources.USER
                  ) {
                    m.show(),
                      (m.root.style.left = '0px'),
                      (m.root.style.width = ''),
                      (m.root.style.width = m.root.offsetWidth + 'px')
                    var $ = m.quill.getLines(N.index, N.length)
                    if ($.length === 1) m.position(m.quill.getBounds(N))
                    else {
                      var B = $[$.length - 1],
                        G = m.quill.getIndex(B),
                        z = Math.min(B.length() - 1, N.index + N.length - G),
                        R = m.quill.getBounds(new t.Range(G, z))
                      m.position(R)
                    }
                  } else
                    document.activeElement !== m.textbox &&
                      m.quill.hasFocus() &&
                      m.hide()
              }),
              m
            )
          }
          return (
            b(P, [
              {
                key: 'listen',
                value: function () {
                  var A = this
                  O(
                    P.prototype.__proto__ || Object.getPrototypeOf(P.prototype),
                    'listen',
                    this
                  ).call(this),
                    this.root
                      .querySelector('.ql-close')
                      .addEventListener('click', function () {
                        A.root.classList.remove('ql-editing')
                      }),
                    this.quill.on(
                      f.default.events.SCROLL_OPTIMIZE,
                      function () {
                        setTimeout(function () {
                          if (!A.root.classList.contains('ql-hidden')) {
                            var m = A.quill.getSelection()
                            m != null && A.position(A.quill.getBounds(m))
                          }
                        }, 1)
                      }
                    )
                }
              },
              {
                key: 'cancel',
                value: function () {
                  this.show()
                }
              },
              {
                key: 'position',
                value: function (A) {
                  var m = O(
                      P.prototype.__proto__ ||
                        Object.getPrototypeOf(P.prototype),
                      'position',
                      this
                    ).call(this, A),
                    S = this.root.querySelector('.ql-tooltip-arrow')
                  if (((S.style.marginLeft = ''), m === 0)) return m
                  S.style.marginLeft = -1 * m - S.offsetWidth / 2 + 'px'
                }
              }
            ]),
            P
          )
        })(o.BaseTooltip)
        ;(T.TEMPLATE = [
          '<span class="ql-tooltip-arrow"></span>',
          '<div class="ql-tooltip-editor">',
          '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
          '<a class="ql-close"></a>',
          '</div>'
        ].join('')),
          (y.BubbleTooltip = T),
          (y.default = p)
      },
      function (v, y, s) {
        v.exports = s(63)
      }
    ]).default
  })
})(Ei)
var Xl = Ei.exports
const Tr = jr(Xl)
var St = -1,
  vt = 1,
  ot = 0
function cn(e, w, v, y) {
  if (e === w) return e ? [[ot, e]] : []
  if (v != null) {
    var s = ra(e, w, v)
    if (s) return s
  }
  var O = Ur(e, w),
    b = e.substring(0, O)
  ;(e = e.substring(O)), (w = w.substring(O)), (O = Hr(e, w))
  var E = e.substring(e.length - O)
  ;(e = e.substring(0, e.length - O)), (w = w.substring(0, w.length - O))
  var g = Jl(e, w)
  return b && g.unshift([ot, b]), E && g.push([ot, E]), wi(g, y), g
}
function Jl(e, w) {
  var v
  if (!e) return [[vt, w]]
  if (!w) return [[St, e]]
  var y = e.length > w.length ? e : w,
    s = e.length > w.length ? w : e,
    O = y.indexOf(s)
  if (O !== -1)
    return (
      (v = [
        [vt, y.substring(0, O)],
        [ot, s],
        [vt, y.substring(O + s.length)]
      ]),
      e.length > w.length && (v[0][0] = v[2][0] = St),
      v
    )
  if (s.length === 1)
    return [
      [St, e],
      [vt, w]
    ]
  var b = ta(e, w)
  if (b) {
    var E = b[0],
      g = b[1],
      _ = b[2],
      f = b[3],
      o = b[4],
      n = cn(E, _),
      t = cn(g, f)
    return n.concat([[ot, o]], t)
  }
  return ea(e, w)
}
function ea(e, w) {
  for (
    var v = e.length,
      y = w.length,
      s = Math.ceil((v + y) / 2),
      O = s,
      b = 2 * s,
      E = new Array(b),
      g = new Array(b),
      _ = 0;
    _ < b;
    _++
  )
    (E[_] = -1), (g[_] = -1)
  ;(E[O + 1] = 0), (g[O + 1] = 0)
  for (
    var f = v - y, o = f % 2 !== 0, n = 0, t = 0, d = 0, i = 0, u = 0;
    u < s;
    u++
  ) {
    for (var l = -u + n; l <= u - t; l += 2) {
      var a = O + l,
        h
      l === -u || (l !== u && E[a - 1] < E[a + 1])
        ? (h = E[a + 1])
        : (h = E[a - 1] + 1)
      for (var r = h - l; h < v && r < y && e.charAt(h) === w.charAt(r); )
        h++, r++
      if (((E[a] = h), h > v)) t += 2
      else if (r > y) n += 2
      else if (o) {
        var p = O + f - l
        if (p >= 0 && p < b && g[p] !== -1) {
          var T = v - g[p]
          if (h >= T) return ei(e, w, h, r)
        }
      }
    }
    for (var k = -u + d; k <= u - i; k += 2) {
      var p = O + k,
        T
      k === -u || (k !== u && g[p - 1] < g[p + 1])
        ? (T = g[p + 1])
        : (T = g[p - 1] + 1)
      for (
        var P = T - k;
        T < v && P < y && e.charAt(v - T - 1) === w.charAt(y - P - 1);

      )
        T++, P++
      if (((g[p] = T), T > v)) i += 2
      else if (P > y) d += 2
      else if (!o) {
        var a = O + f - k
        if (a >= 0 && a < b && E[a] !== -1) {
          var h = E[a],
            r = O + h - a
          if (((T = v - T), h >= T)) return ei(e, w, h, r)
        }
      }
    }
  }
  return [
    [St, e],
    [vt, w]
  ]
}
function ei(e, w, v, y) {
  var s = e.substring(0, v),
    O = w.substring(0, y),
    b = e.substring(v),
    E = w.substring(y),
    g = cn(s, O),
    _ = cn(b, E)
  return g.concat(_)
}
function Ur(e, w) {
  if (!e || !w || e.charAt(0) !== w.charAt(0)) return 0
  for (var v = 0, y = Math.min(e.length, w.length), s = y, O = 0; v < s; )
    e.substring(O, s) == w.substring(O, s) ? ((v = s), (O = v)) : (y = s),
      (s = Math.floor((y - v) / 2 + v))
  return Si(e.charCodeAt(s - 1)) && s--, s
}
function Hr(e, w) {
  if (!e || !w || e.slice(-1) !== w.slice(-1)) return 0
  for (var v = 0, y = Math.min(e.length, w.length), s = y, O = 0; v < s; )
    e.substring(e.length - s, e.length - O) ==
    w.substring(w.length - s, w.length - O)
      ? ((v = s), (O = v))
      : (y = s),
      (s = Math.floor((y - v) / 2 + v))
  return Ai(e.charCodeAt(e.length - s)) && s--, s
}
function ta(e, w) {
  var v = e.length > w.length ? e : w,
    y = e.length > w.length ? w : e
  if (v.length < 4 || y.length * 2 < v.length) return null
  function s(t, d, i) {
    for (
      var u = t.substring(i, i + Math.floor(t.length / 4)),
        l = -1,
        a = '',
        h,
        r,
        p,
        T;
      (l = d.indexOf(u, l + 1)) !== -1;

    ) {
      var k = Ur(t.substring(i), d.substring(l)),
        P = Hr(t.substring(0, i), d.substring(0, l))
      a.length < P + k &&
        ((a = d.substring(l - P, l) + d.substring(l, l + k)),
        (h = t.substring(0, i - P)),
        (r = t.substring(i + k)),
        (p = d.substring(0, l - P)),
        (T = d.substring(l + k)))
    }
    return a.length * 2 >= t.length ? [h, r, p, T, a] : null
  }
  var O = s(v, y, Math.ceil(v.length / 4)),
    b = s(v, y, Math.ceil(v.length / 2)),
    E
  if (!O && !b) return null
  b ? (O ? (E = O[4].length > b[4].length ? O : b) : (E = b)) : (E = O)
  var g, _, f, o
  e.length > w.length
    ? ((g = E[0]), (_ = E[1]), (f = E[2]), (o = E[3]))
    : ((f = E[0]), (o = E[1]), (g = E[2]), (_ = E[3]))
  var n = E[4]
  return [g, _, f, o, n]
}
function wi(e, w) {
  e.push([ot, ''])
  for (var v = 0, y = 0, s = 0, O = '', b = '', E; v < e.length; ) {
    if (v < e.length - 1 && !e[v][1]) {
      e.splice(v, 1)
      continue
    }
    switch (e[v][0]) {
      case vt:
        s++, (b += e[v][1]), v++
        break
      case St:
        y++, (O += e[v][1]), v++
        break
      case ot:
        var g = v - s - y - 1
        if (w) {
          if (g >= 0 && ki(e[g][1])) {
            var _ = e[g][1].slice(-1)
            if (
              ((e[g][1] = e[g][1].slice(0, -1)),
              (O = _ + O),
              (b = _ + b),
              !e[g][1])
            ) {
              e.splice(g, 1), v--
              var f = g - 1
              e[f] && e[f][0] === vt && (s++, (b = e[f][1] + b), f--),
                e[f] && e[f][0] === St && (y++, (O = e[f][1] + O), f--),
                (g = f)
            }
          }
          if (Ti(e[v][1])) {
            var _ = e[v][1].charAt(0)
            ;(e[v][1] = e[v][1].slice(1)), (O += _), (b += _)
          }
        }
        if (v < e.length - 1 && !e[v][1]) {
          e.splice(v, 1)
          break
        }
        if (O.length > 0 || b.length > 0) {
          O.length > 0 &&
            b.length > 0 &&
            ((E = Ur(b, O)),
            E !== 0 &&
              (g >= 0
                ? (e[g][1] += b.substring(0, E))
                : (e.splice(0, 0, [ot, b.substring(0, E)]), v++),
              (b = b.substring(E)),
              (O = O.substring(E))),
            (E = Hr(b, O)),
            E !== 0 &&
              ((e[v][1] = b.substring(b.length - E) + e[v][1]),
              (b = b.substring(0, b.length - E)),
              (O = O.substring(0, O.length - E))))
          var o = s + y
          O.length === 0 && b.length === 0
            ? (e.splice(v - o, o), (v = v - o))
            : O.length === 0
            ? (e.splice(v - o, o, [vt, b]), (v = v - o + 1))
            : b.length === 0
            ? (e.splice(v - o, o, [St, O]), (v = v - o + 1))
            : (e.splice(v - o, o, [St, O], [vt, b]), (v = v - o + 2))
        }
        v !== 0 && e[v - 1][0] === ot
          ? ((e[v - 1][1] += e[v][1]), e.splice(v, 1))
          : v++,
          (s = 0),
          (y = 0),
          (O = ''),
          (b = '')
        break
    }
  }
  e[e.length - 1][1] === '' && e.pop()
  var n = !1
  for (v = 1; v < e.length - 1; )
    e[v - 1][0] === ot &&
      e[v + 1][0] === ot &&
      (e[v][1].substring(e[v][1].length - e[v - 1][1].length) === e[v - 1][1]
        ? ((e[v][1] =
            e[v - 1][1] +
            e[v][1].substring(0, e[v][1].length - e[v - 1][1].length)),
          (e[v + 1][1] = e[v - 1][1] + e[v + 1][1]),
          e.splice(v - 1, 1),
          (n = !0))
        : e[v][1].substring(0, e[v + 1][1].length) == e[v + 1][1] &&
          ((e[v - 1][1] += e[v + 1][1]),
          (e[v][1] = e[v][1].substring(e[v + 1][1].length) + e[v + 1][1]),
          e.splice(v + 1, 1),
          (n = !0))),
      v++
  n && wi(e, w)
}
function Si(e) {
  return e >= 55296 && e <= 56319
}
function Ai(e) {
  return e >= 56320 && e <= 57343
}
function Ti(e) {
  return Ai(e.charCodeAt(0))
}
function ki(e) {
  return Si(e.charCodeAt(e.length - 1))
}
function na(e) {
  for (var w = [], v = 0; v < e.length; v++) e[v][1].length > 0 && w.push(e[v])
  return w
}
function kr(e, w, v, y) {
  return ki(e) || Ti(y)
    ? null
    : na([
        [ot, e],
        [St, w],
        [vt, v],
        [ot, y]
      ])
}
function ra(e, w, v) {
  var y = typeof v == 'number' ? { index: v, length: 0 } : v.oldRange,
    s = typeof v == 'number' ? null : v.newRange,
    O = e.length,
    b = w.length
  if (y.length === 0 && (s === null || s.length === 0)) {
    var E = y.index,
      g = e.slice(0, E),
      _ = e.slice(E),
      f = s ? s.index : null
    e: {
      var o = E + b - O
      if ((f !== null && f !== o) || o < 0 || o > b) break e
      var n = w.slice(0, o),
        t = w.slice(o)
      if (t !== _) break e
      var d = Math.min(E, o),
        i = g.slice(0, d),
        u = n.slice(0, d)
      if (i !== u) break e
      var l = g.slice(d),
        a = n.slice(d)
      return kr(i, l, a, _)
    }
    e: {
      if (f !== null && f !== E) break e
      var h = E,
        n = w.slice(0, h),
        t = w.slice(h)
      if (n !== g) break e
      var r = Math.min(O - h, b - h),
        p = _.slice(_.length - r),
        T = t.slice(t.length - r)
      if (p !== T) break e
      var l = _.slice(0, _.length - r),
        a = t.slice(0, t.length - r)
      return kr(g, l, a, p)
    }
  }
  if (y.length > 0 && s && s.length === 0)
    e: {
      var i = e.slice(0, y.index),
        p = e.slice(y.index + y.length),
        d = i.length,
        r = p.length
      if (b < d + r) break e
      var u = w.slice(0, d),
        T = w.slice(b - r)
      if (i !== u || p !== T) break e
      var l = e.slice(d, O - r),
        a = w.slice(d, b - r)
      return kr(i, l, a, p)
    }
  return null
}
function $n(e, w, v) {
  return cn(e, w, v, !0)
}
$n.INSERT = vt
$n.DELETE = St
$n.EQUAL = ot
var ia = $n,
  Mn = { exports: {} }
Mn.exports
;(function (e, w) {
  var v = 200,
    y = '__lodash_hash_undefined__',
    s = 9007199254740991,
    O = '[object Arguments]',
    b = '[object Array]',
    E = '[object Boolean]',
    g = '[object Date]',
    _ = '[object Error]',
    f = '[object Function]',
    o = '[object GeneratorFunction]',
    n = '[object Map]',
    t = '[object Number]',
    d = '[object Object]',
    i = '[object Promise]',
    u = '[object RegExp]',
    l = '[object Set]',
    a = '[object String]',
    h = '[object Symbol]',
    r = '[object WeakMap]',
    p = '[object ArrayBuffer]',
    T = '[object DataView]',
    k = '[object Float32Array]',
    P = '[object Float64Array]',
    M = '[object Int8Array]',
    A = '[object Int16Array]',
    m = '[object Int32Array]',
    S = '[object Uint8Array]',
    N = '[object Uint8ClampedArray]',
    C = '[object Uint16Array]',
    q = '[object Uint32Array]',
    $ = /[\\^$.*+?()[\]{}|]/g,
    B = /\w*$/,
    G = /^\[object .+?Constructor\]$/,
    z = /^(?:0|[1-9]\d*)$/,
    R = {}
  ;(R[O] =
    R[b] =
    R[p] =
    R[T] =
    R[E] =
    R[g] =
    R[k] =
    R[P] =
    R[M] =
    R[A] =
    R[m] =
    R[n] =
    R[t] =
    R[d] =
    R[u] =
    R[l] =
    R[a] =
    R[h] =
    R[S] =
    R[N] =
    R[C] =
    R[q] =
      !0),
    (R[_] = R[f] = R[r] = !1)
  var L = typeof He == 'object' && He && He.Object === Object && He,
    j = typeof self == 'object' && self && self.Object === Object && self,
    D = L || j || Function('return this')(),
    K = w && !w.nodeType && w,
    U = K && !0 && e && !e.nodeType && e,
    x = U && U.exports === K
  function H(c, I) {
    return c.set(I[0], I[1]), c
  }
  function V(c, I) {
    return c.add(I), c
  }
  function W(c, I) {
    for (var F = -1, Q = c ? c.length : 0; ++F < Q && I(c[F], F, c) !== !1; );
    return c
  }
  function J(c, I) {
    for (var F = -1, Q = I.length, be = c.length; ++F < Q; ) c[be + F] = I[F]
    return c
  }
  function re(c, I, F, Q) {
    var be = -1,
      se = c ? c.length : 0
    for (Q && se && (F = c[++be]); ++be < se; ) F = I(F, c[be], be, c)
    return F
  }
  function ue(c, I) {
    for (var F = -1, Q = Array(c); ++F < c; ) Q[F] = I(F)
    return Q
  }
  function de(c, I) {
    return c == null ? void 0 : c[I]
  }
  function ge(c) {
    var I = !1
    if (c != null && typeof c.toString != 'function')
      try {
        I = !!(c + '')
      } catch {}
    return I
  }
  function Oe(c) {
    var I = -1,
      F = Array(c.size)
    return (
      c.forEach(function (Q, be) {
        F[++I] = [be, Q]
      }),
      F
    )
  }
  function Me(c, I) {
    return function (F) {
      return c(I(F))
    }
  }
  function Ce(c) {
    var I = -1,
      F = Array(c.size)
    return (
      c.forEach(function (Q) {
        F[++I] = Q
      }),
      F
    )
  }
  var Y = Array.prototype,
    X = Function.prototype,
    ne = Object.prototype,
    ie = D['__core-js_shared__'],
    ee = (function () {
      var c = /[^.]+$/.exec((ie && ie.keys && ie.keys.IE_PROTO) || '')
      return c ? 'Symbol(src)_1.' + c : ''
    })(),
    he = X.toString,
    fe = ne.hasOwnProperty,
    ve = ne.toString,
    xe = RegExp(
      '^' +
        he
          .call(fe)
          .replace($, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    ),
    Be = x ? D.Buffer : void 0,
    Ae = D.Symbol,
    at = D.Uint8Array,
    Ee = Me(Object.getPrototypeOf, Object),
    Ke = Object.create,
    gt = ne.propertyIsEnumerable,
    xt = Y.splice,
    mt = Object.getOwnPropertySymbols,
    bt = Be ? Be.isBuffer : void 0,
    jt = Me(Object.keys, Object),
    Z = dt(D, 'DataView'),
    te = dt(D, 'Map'),
    le = dt(D, 'Promise'),
    _e = dt(D, 'Set'),
    je = dt(D, 'WeakMap'),
    qe = dt(Object, 'create'),
    nt = Je(Z),
    Le = Je(te),
    Ie = Je(le),
    Ct = Je(_e),
    Jt = Je(je),
    Mt = Ae ? Ae.prototype : void 0,
    hn = Mt ? Mt.valueOf : void 0
  function At(c) {
    var I = -1,
      F = c ? c.length : 0
    for (this.clear(); ++I < F; ) {
      var Q = c[I]
      this.set(Q[0], Q[1])
    }
  }
  function zn() {
    this.__data__ = qe ? qe(null) : {}
  }
  function Fn(c) {
    return this.has(c) && delete this.__data__[c]
  }
  function Un(c) {
    var I = this.__data__
    if (qe) {
      var F = I[c]
      return F === y ? void 0 : F
    }
    return fe.call(I, c) ? I[c] : void 0
  }
  function pn(c) {
    var I = this.__data__
    return qe ? I[c] !== void 0 : fe.call(I, c)
  }
  function en(c, I) {
    var F = this.__data__
    return (F[c] = qe && I === void 0 ? y : I), this
  }
  ;(At.prototype.clear = zn),
    (At.prototype.delete = Fn),
    (At.prototype.get = Un),
    (At.prototype.has = pn),
    (At.prototype.set = en)
  function Ve(c) {
    var I = -1,
      F = c ? c.length : 0
    for (this.clear(); ++I < F; ) {
      var Q = c[I]
      this.set(Q[0], Q[1])
    }
  }
  function Hn() {
    this.__data__ = []
  }
  function Kn(c) {
    var I = this.__data__,
      F = Wt(I, c)
    if (F < 0) return !1
    var Q = I.length - 1
    return F == Q ? I.pop() : xt.call(I, F, 1), !0
  }
  function Vn(c) {
    var I = this.__data__,
      F = Wt(I, c)
    return F < 0 ? void 0 : I[F][1]
  }
  function Wn(c) {
    return Wt(this.__data__, c) > -1
  }
  function Gn(c, I) {
    var F = this.__data__,
      Q = Wt(F, c)
    return Q < 0 ? F.push([c, I]) : (F[Q][1] = I), this
  }
  ;(Ve.prototype.clear = Hn),
    (Ve.prototype.delete = Kn),
    (Ve.prototype.get = Vn),
    (Ve.prototype.has = Wn),
    (Ve.prototype.set = Gn)
  function Ye(c) {
    var I = -1,
      F = c ? c.length : 0
    for (this.clear(); ++I < F; ) {
      var Q = c[I]
      this.set(Q[0], Q[1])
    }
  }
  function Zn() {
    this.__data__ = { hash: new At(), map: new (te || Ve)(), string: new At() }
  }
  function Yn(c) {
    return Bt(this, c).delete(c)
  }
  function Qn(c) {
    return Bt(this, c).get(c)
  }
  function Xn(c) {
    return Bt(this, c).has(c)
  }
  function Jn(c, I) {
    return Bt(this, c).set(c, I), this
  }
  ;(Ye.prototype.clear = Zn),
    (Ye.prototype.delete = Yn),
    (Ye.prototype.get = Qn),
    (Ye.prototype.has = Xn),
    (Ye.prototype.set = Jn)
  function rt(c) {
    this.__data__ = new Ve(c)
  }
  function er() {
    this.__data__ = new Ve()
  }
  function tr(c) {
    return this.__data__.delete(c)
  }
  function nr(c) {
    return this.__data__.get(c)
  }
  function rr(c) {
    return this.__data__.has(c)
  }
  function ir(c, I) {
    var F = this.__data__
    if (F instanceof Ve) {
      var Q = F.__data__
      if (!te || Q.length < v - 1) return Q.push([c, I]), this
      F = this.__data__ = new Ye(Q)
    }
    return F.set(c, I), this
  }
  ;(rt.prototype.clear = er),
    (rt.prototype.delete = tr),
    (rt.prototype.get = nr),
    (rt.prototype.has = rr),
    (rt.prototype.set = ir)
  function Vt(c, I) {
    var F = on(c) || Zt(c) ? ue(c.length, String) : [],
      Q = F.length,
      be = !!Q
    for (var se in c)
      (I || fe.call(c, se)) &&
        !(be && (se == 'length' || mr(se, Q))) &&
        F.push(se)
    return F
  }
  function vn(c, I, F) {
    var Q = c[I]
    ;(!(fe.call(c, I) && _n(Q, F)) || (F === void 0 && !(I in c))) && (c[I] = F)
  }
  function Wt(c, I) {
    for (var F = c.length; F--; ) if (_n(c[F][0], I)) return F
    return -1
  }
  function _t(c, I) {
    return c && rn(I, an(I), c)
  }
  function tn(c, I, F, Q, be, se, Te) {
    var ke
    if ((Q && (ke = se ? Q(c, be, se, Te) : Q(c)), ke !== void 0)) return ke
    if (!Et(c)) return c
    var ze = on(c)
    if (ze) {
      if (((ke = yr(c)), !I)) return hr(c, ke)
    } else {
      var Ne = kt(c),
        Qe = Ne == f || Ne == o
      if (On(c)) return Gt(c, I)
      if (Ne == d || Ne == O || (Qe && !se)) {
        if (ge(c)) return se ? c : {}
        if (((ke = Ot(Qe ? {} : c)), !I)) return pr(c, _t(ke, c))
      } else {
        if (!R[Ne]) return se ? c : {}
        ke = gr(c, Ne, tn, I)
      }
    }
    Te || (Te = new rt())
    var it = Te.get(c)
    if (it) return it
    if ((Te.set(c, ke), !ze)) var Fe = F ? vr(c) : an(c)
    return (
      W(Fe || c, function (Xe, We) {
        Fe && ((We = Xe), (Xe = c[We])), vn(ke, We, tn(Xe, I, F, Q, We, c, Te))
      }),
      ke
    )
  }
  function or(c) {
    return Et(c) ? Ke(c) : {}
  }
  function lr(c, I, F) {
    var Q = I(c)
    return on(c) ? Q : J(Q, F(c))
  }
  function ar(c) {
    return ve.call(c)
  }
  function ur(c) {
    if (!Et(c) || _r(c)) return !1
    var I = ln(c) || ge(c) ? xe : G
    return I.test(Je(c))
  }
  function sr(c) {
    if (!mn(c)) return jt(c)
    var I = []
    for (var F in Object(c)) fe.call(c, F) && F != 'constructor' && I.push(F)
    return I
  }
  function Gt(c, I) {
    if (I) return c.slice()
    var F = new c.constructor(c.length)
    return c.copy(F), F
  }
  function nn(c) {
    var I = new c.constructor(c.byteLength)
    return new at(I).set(new at(c)), I
  }
  function Dt(c, I) {
    var F = I ? nn(c.buffer) : c.buffer
    return new c.constructor(F, c.byteOffset, c.byteLength)
  }
  function yn(c, I, F) {
    var Q = I ? F(Oe(c), !0) : Oe(c)
    return re(Q, H, new c.constructor())
  }
  function gn(c) {
    var I = new c.constructor(c.source, B.exec(c))
    return (I.lastIndex = c.lastIndex), I
  }
  function fr(c, I, F) {
    var Q = I ? F(Ce(c), !0) : Ce(c)
    return re(Q, V, new c.constructor())
  }
  function cr(c) {
    return hn ? Object(hn.call(c)) : {}
  }
  function dr(c, I) {
    var F = I ? nn(c.buffer) : c.buffer
    return new c.constructor(F, c.byteOffset, c.length)
  }
  function hr(c, I) {
    var F = -1,
      Q = c.length
    for (I || (I = Array(Q)); ++F < Q; ) I[F] = c[F]
    return I
  }
  function rn(c, I, F, Q) {
    F || (F = {})
    for (var be = -1, se = I.length; ++be < se; ) {
      var Te = I[be],
        ke = Q ? Q(F[Te], c[Te], Te, F, c) : void 0
      vn(F, Te, ke === void 0 ? c[Te] : ke)
    }
    return F
  }
  function pr(c, I) {
    return rn(c, Tt(c), I)
  }
  function vr(c) {
    return lr(c, an, Tt)
  }
  function Bt(c, I) {
    var F = c.__data__
    return br(I) ? F[typeof I == 'string' ? 'string' : 'hash'] : F.map
  }
  function dt(c, I) {
    var F = de(c, I)
    return ur(F) ? F : void 0
  }
  var Tt = mt ? Me(mt, Object) : Er,
    kt = ar
  ;((Z && kt(new Z(new ArrayBuffer(1))) != T) ||
    (te && kt(new te()) != n) ||
    (le && kt(le.resolve()) != i) ||
    (_e && kt(new _e()) != l) ||
    (je && kt(new je()) != r)) &&
    (kt = function (c) {
      var I = ve.call(c),
        F = I == d ? c.constructor : void 0,
        Q = F ? Je(F) : void 0
      if (Q)
        switch (Q) {
          case nt:
            return T
          case Le:
            return n
          case Ie:
            return i
          case Ct:
            return l
          case Jt:
            return r
        }
      return I
    })
  function yr(c) {
    var I = c.length,
      F = c.constructor(I)
    return (
      I &&
        typeof c[0] == 'string' &&
        fe.call(c, 'index') &&
        ((F.index = c.index), (F.input = c.input)),
      F
    )
  }
  function Ot(c) {
    return typeof c.constructor == 'function' && !mn(c) ? or(Ee(c)) : {}
  }
  function gr(c, I, F, Q) {
    var be = c.constructor
    switch (I) {
      case p:
        return nn(c)
      case E:
      case g:
        return new be(+c)
      case T:
        return Dt(c, Q)
      case k:
      case P:
      case M:
      case A:
      case m:
      case S:
      case N:
      case C:
      case q:
        return dr(c, Q)
      case n:
        return yn(c, Q, F)
      case t:
      case a:
        return new be(c)
      case u:
        return gn(c)
      case l:
        return fr(c, Q, F)
      case h:
        return cr(c)
    }
  }
  function mr(c, I) {
    return (
      (I = I ?? s),
      !!I &&
        (typeof c == 'number' || z.test(c)) &&
        c > -1 &&
        c % 1 == 0 &&
        c < I
    )
  }
  function br(c) {
    var I = typeof c
    return I == 'string' || I == 'number' || I == 'symbol' || I == 'boolean'
      ? c !== '__proto__'
      : c === null
  }
  function _r(c) {
    return !!ee && ee in c
  }
  function mn(c) {
    var I = c && c.constructor,
      F = (typeof I == 'function' && I.prototype) || ne
    return c === F
  }
  function Je(c) {
    if (c != null) {
      try {
        return he.call(c)
      } catch {}
      try {
        return c + ''
      } catch {}
    }
    return ''
  }
  function bn(c) {
    return tn(c, !0, !0)
  }
  function _n(c, I) {
    return c === I || (c !== c && I !== I)
  }
  function Zt(c) {
    return (
      Or(c) &&
      fe.call(c, 'callee') &&
      (!gt.call(c, 'callee') || ve.call(c) == O)
    )
  }
  var on = Array.isArray
  function Yt(c) {
    return c != null && En(c.length) && !ln(c)
  }
  function Or(c) {
    return wn(c) && Yt(c)
  }
  var On = bt || wr
  function ln(c) {
    var I = Et(c) ? ve.call(c) : ''
    return I == f || I == o
  }
  function En(c) {
    return typeof c == 'number' && c > -1 && c % 1 == 0 && c <= s
  }
  function Et(c) {
    var I = typeof c
    return !!c && (I == 'object' || I == 'function')
  }
  function wn(c) {
    return !!c && typeof c == 'object'
  }
  function an(c) {
    return Yt(c) ? Vt(c) : sr(c)
  }
  function Er() {
    return []
  }
  function wr() {
    return !1
  }
  e.exports = bn
})(Mn, Mn.exports)
var Ni = Mn.exports,
  In = { exports: {} }
In.exports
;(function (e, w) {
  var v = 200,
    y = '__lodash_hash_undefined__',
    s = 1,
    O = 2,
    b = 9007199254740991,
    E = '[object Arguments]',
    g = '[object Array]',
    _ = '[object AsyncFunction]',
    f = '[object Boolean]',
    o = '[object Date]',
    n = '[object Error]',
    t = '[object Function]',
    d = '[object GeneratorFunction]',
    i = '[object Map]',
    u = '[object Number]',
    l = '[object Null]',
    a = '[object Object]',
    h = '[object Promise]',
    r = '[object Proxy]',
    p = '[object RegExp]',
    T = '[object Set]',
    k = '[object String]',
    P = '[object Symbol]',
    M = '[object Undefined]',
    A = '[object WeakMap]',
    m = '[object ArrayBuffer]',
    S = '[object DataView]',
    N = '[object Float32Array]',
    C = '[object Float64Array]',
    q = '[object Int8Array]',
    $ = '[object Int16Array]',
    B = '[object Int32Array]',
    G = '[object Uint8Array]',
    z = '[object Uint8ClampedArray]',
    R = '[object Uint16Array]',
    L = '[object Uint32Array]',
    j = /[\\^$.*+?()[\]{}|]/g,
    D = /^\[object .+?Constructor\]$/,
    K = /^(?:0|[1-9]\d*)$/,
    U = {}
  ;(U[N] = U[C] = U[q] = U[$] = U[B] = U[G] = U[z] = U[R] = U[L] = !0),
    (U[E] =
      U[g] =
      U[m] =
      U[f] =
      U[S] =
      U[o] =
      U[n] =
      U[t] =
      U[i] =
      U[u] =
      U[a] =
      U[p] =
      U[T] =
      U[k] =
      U[A] =
        !1)
  var x = typeof He == 'object' && He && He.Object === Object && He,
    H = typeof self == 'object' && self && self.Object === Object && self,
    V = x || H || Function('return this')(),
    W = w && !w.nodeType && w,
    J = W && !0 && e && !e.nodeType && e,
    re = J && J.exports === W,
    ue = re && x.process,
    de = (function () {
      try {
        return ue && ue.binding && ue.binding('util')
      } catch {}
    })(),
    ge = de && de.isTypedArray
  function Oe(c, I) {
    for (var F = -1, Q = c == null ? 0 : c.length, be = 0, se = []; ++F < Q; ) {
      var Te = c[F]
      I(Te, F, c) && (se[be++] = Te)
    }
    return se
  }
  function Me(c, I) {
    for (var F = -1, Q = I.length, be = c.length; ++F < Q; ) c[be + F] = I[F]
    return c
  }
  function Ce(c, I) {
    for (var F = -1, Q = c == null ? 0 : c.length; ++F < Q; )
      if (I(c[F], F, c)) return !0
    return !1
  }
  function Y(c, I) {
    for (var F = -1, Q = Array(c); ++F < c; ) Q[F] = I(F)
    return Q
  }
  function X(c) {
    return function (I) {
      return c(I)
    }
  }
  function ne(c, I) {
    return c.has(I)
  }
  function ie(c, I) {
    return c == null ? void 0 : c[I]
  }
  function ee(c) {
    var I = -1,
      F = Array(c.size)
    return (
      c.forEach(function (Q, be) {
        F[++I] = [be, Q]
      }),
      F
    )
  }
  function he(c, I) {
    return function (F) {
      return c(I(F))
    }
  }
  function fe(c) {
    var I = -1,
      F = Array(c.size)
    return (
      c.forEach(function (Q) {
        F[++I] = Q
      }),
      F
    )
  }
  var ve = Array.prototype,
    xe = Function.prototype,
    Be = Object.prototype,
    Ae = V['__core-js_shared__'],
    at = xe.toString,
    Ee = Be.hasOwnProperty,
    Ke = (function () {
      var c = /[^.]+$/.exec((Ae && Ae.keys && Ae.keys.IE_PROTO) || '')
      return c ? 'Symbol(src)_1.' + c : ''
    })(),
    gt = Be.toString,
    xt = RegExp(
      '^' +
        at
          .call(Ee)
          .replace(j, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    ),
    mt = re ? V.Buffer : void 0,
    bt = V.Symbol,
    jt = V.Uint8Array,
    Z = Be.propertyIsEnumerable,
    te = ve.splice,
    le = bt ? bt.toStringTag : void 0,
    _e = Object.getOwnPropertySymbols,
    je = mt ? mt.isBuffer : void 0,
    qe = he(Object.keys, Object),
    nt = Tt(V, 'DataView'),
    Le = Tt(V, 'Map'),
    Ie = Tt(V, 'Promise'),
    Ct = Tt(V, 'Set'),
    Jt = Tt(V, 'WeakMap'),
    Mt = Tt(Object, 'create'),
    hn = Je(nt),
    At = Je(Le),
    zn = Je(Ie),
    Fn = Je(Ct),
    Un = Je(Jt),
    pn = bt ? bt.prototype : void 0,
    en = pn ? pn.valueOf : void 0
  function Ve(c) {
    var I = -1,
      F = c == null ? 0 : c.length
    for (this.clear(); ++I < F; ) {
      var Q = c[I]
      this.set(Q[0], Q[1])
    }
  }
  function Hn() {
    ;(this.__data__ = Mt ? Mt(null) : {}), (this.size = 0)
  }
  function Kn(c) {
    var I = this.has(c) && delete this.__data__[c]
    return (this.size -= I ? 1 : 0), I
  }
  function Vn(c) {
    var I = this.__data__
    if (Mt) {
      var F = I[c]
      return F === y ? void 0 : F
    }
    return Ee.call(I, c) ? I[c] : void 0
  }
  function Wn(c) {
    var I = this.__data__
    return Mt ? I[c] !== void 0 : Ee.call(I, c)
  }
  function Gn(c, I) {
    var F = this.__data__
    return (
      (this.size += this.has(c) ? 0 : 1),
      (F[c] = Mt && I === void 0 ? y : I),
      this
    )
  }
  ;(Ve.prototype.clear = Hn),
    (Ve.prototype.delete = Kn),
    (Ve.prototype.get = Vn),
    (Ve.prototype.has = Wn),
    (Ve.prototype.set = Gn)
  function Ye(c) {
    var I = -1,
      F = c == null ? 0 : c.length
    for (this.clear(); ++I < F; ) {
      var Q = c[I]
      this.set(Q[0], Q[1])
    }
  }
  function Zn() {
    ;(this.__data__ = []), (this.size = 0)
  }
  function Yn(c) {
    var I = this.__data__,
      F = Gt(I, c)
    if (F < 0) return !1
    var Q = I.length - 1
    return F == Q ? I.pop() : te.call(I, F, 1), --this.size, !0
  }
  function Qn(c) {
    var I = this.__data__,
      F = Gt(I, c)
    return F < 0 ? void 0 : I[F][1]
  }
  function Xn(c) {
    return Gt(this.__data__, c) > -1
  }
  function Jn(c, I) {
    var F = this.__data__,
      Q = Gt(F, c)
    return Q < 0 ? (++this.size, F.push([c, I])) : (F[Q][1] = I), this
  }
  ;(Ye.prototype.clear = Zn),
    (Ye.prototype.delete = Yn),
    (Ye.prototype.get = Qn),
    (Ye.prototype.has = Xn),
    (Ye.prototype.set = Jn)
  function rt(c) {
    var I = -1,
      F = c == null ? 0 : c.length
    for (this.clear(); ++I < F; ) {
      var Q = c[I]
      this.set(Q[0], Q[1])
    }
  }
  function er() {
    ;(this.size = 0),
      (this.__data__ = {
        hash: new Ve(),
        map: new (Le || Ye)(),
        string: new Ve()
      })
  }
  function tr(c) {
    var I = dt(this, c).delete(c)
    return (this.size -= I ? 1 : 0), I
  }
  function nr(c) {
    return dt(this, c).get(c)
  }
  function rr(c) {
    return dt(this, c).has(c)
  }
  function ir(c, I) {
    var F = dt(this, c),
      Q = F.size
    return F.set(c, I), (this.size += F.size == Q ? 0 : 1), this
  }
  ;(rt.prototype.clear = er),
    (rt.prototype.delete = tr),
    (rt.prototype.get = nr),
    (rt.prototype.has = rr),
    (rt.prototype.set = ir)
  function Vt(c) {
    var I = -1,
      F = c == null ? 0 : c.length
    for (this.__data__ = new rt(); ++I < F; ) this.add(c[I])
  }
  function vn(c) {
    return this.__data__.set(c, y), this
  }
  function Wt(c) {
    return this.__data__.has(c)
  }
  ;(Vt.prototype.add = Vt.prototype.push = vn), (Vt.prototype.has = Wt)
  function _t(c) {
    var I = (this.__data__ = new Ye(c))
    this.size = I.size
  }
  function tn() {
    ;(this.__data__ = new Ye()), (this.size = 0)
  }
  function or(c) {
    var I = this.__data__,
      F = I.delete(c)
    return (this.size = I.size), F
  }
  function lr(c) {
    return this.__data__.get(c)
  }
  function ar(c) {
    return this.__data__.has(c)
  }
  function ur(c, I) {
    var F = this.__data__
    if (F instanceof Ye) {
      var Q = F.__data__
      if (!Le || Q.length < v - 1)
        return Q.push([c, I]), (this.size = ++F.size), this
      F = this.__data__ = new rt(Q)
    }
    return F.set(c, I), (this.size = F.size), this
  }
  ;(_t.prototype.clear = tn),
    (_t.prototype.delete = or),
    (_t.prototype.get = lr),
    (_t.prototype.has = ar),
    (_t.prototype.set = ur)
  function sr(c, I) {
    var F = Zt(c),
      Q = !F && _n(c),
      be = !F && !Q && Yt(c),
      se = !F && !Q && !be && wn(c),
      Te = F || Q || be || se,
      ke = Te ? Y(c.length, String) : [],
      ze = ke.length
    for (var Ne in c)
      (I || Ee.call(c, Ne)) &&
        !(
          Te &&
          (Ne == 'length' ||
            (be && (Ne == 'offset' || Ne == 'parent')) ||
            (se &&
              (Ne == 'buffer' || Ne == 'byteLength' || Ne == 'byteOffset')) ||
            gr(Ne, ze))
        ) &&
        ke.push(Ne)
    return ke
  }
  function Gt(c, I) {
    for (var F = c.length; F--; ) if (bn(c[F][0], I)) return F
    return -1
  }
  function nn(c, I, F) {
    var Q = I(c)
    return Zt(c) ? Q : Me(Q, F(c))
  }
  function Dt(c) {
    return c == null
      ? c === void 0
        ? M
        : l
      : le && le in Object(c)
      ? kt(c)
      : mn(c)
  }
  function yn(c) {
    return Et(c) && Dt(c) == E
  }
  function gn(c, I, F, Q, be) {
    return c === I
      ? !0
      : c == null || I == null || (!Et(c) && !Et(I))
      ? c !== c && I !== I
      : fr(c, I, F, Q, gn, be)
  }
  function fr(c, I, F, Q, be, se) {
    var Te = Zt(c),
      ke = Zt(I),
      ze = Te ? g : Ot(c),
      Ne = ke ? g : Ot(I)
    ;(ze = ze == E ? a : ze), (Ne = Ne == E ? a : Ne)
    var Qe = ze == a,
      it = Ne == a,
      Fe = ze == Ne
    if (Fe && Yt(c)) {
      if (!Yt(I)) return !1
      ;(Te = !0), (Qe = !1)
    }
    if (Fe && !Qe)
      return (
        se || (se = new _t()),
        Te || wn(c) ? rn(c, I, F, Q, be, se) : pr(c, I, ze, F, Q, be, se)
      )
    if (!(F & s)) {
      var Xe = Qe && Ee.call(c, '__wrapped__'),
        We = it && Ee.call(I, '__wrapped__')
      if (Xe || We) {
        var It = Xe ? c.value() : c,
          Nt = We ? I.value() : I
        return se || (se = new _t()), be(It, Nt, F, Q, se)
      }
    }
    return Fe ? (se || (se = new _t()), vr(c, I, F, Q, be, se)) : !1
  }
  function cr(c) {
    if (!En(c) || br(c)) return !1
    var I = On(c) ? xt : D
    return I.test(Je(c))
  }
  function dr(c) {
    return Et(c) && ln(c.length) && !!U[Dt(c)]
  }
  function hr(c) {
    if (!_r(c)) return qe(c)
    var I = []
    for (var F in Object(c)) Ee.call(c, F) && F != 'constructor' && I.push(F)
    return I
  }
  function rn(c, I, F, Q, be, se) {
    var Te = F & s,
      ke = c.length,
      ze = I.length
    if (ke != ze && !(Te && ze > ke)) return !1
    var Ne = se.get(c)
    if (Ne && se.get(I)) return Ne == I
    var Qe = -1,
      it = !0,
      Fe = F & O ? new Vt() : void 0
    for (se.set(c, I), se.set(I, c); ++Qe < ke; ) {
      var Xe = c[Qe],
        We = I[Qe]
      if (Q) var It = Te ? Q(We, Xe, Qe, I, c, se) : Q(Xe, We, Qe, c, I, se)
      if (It !== void 0) {
        if (It) continue
        it = !1
        break
      }
      if (Fe) {
        if (
          !Ce(I, function (Nt, $t) {
            if (!ne(Fe, $t) && (Xe === Nt || be(Xe, Nt, F, Q, se)))
              return Fe.push($t)
          })
        ) {
          it = !1
          break
        }
      } else if (!(Xe === We || be(Xe, We, F, Q, se))) {
        it = !1
        break
      }
    }
    return se.delete(c), se.delete(I), it
  }
  function pr(c, I, F, Q, be, se, Te) {
    switch (F) {
      case S:
        if (c.byteLength != I.byteLength || c.byteOffset != I.byteOffset)
          return !1
        ;(c = c.buffer), (I = I.buffer)
      case m:
        return !(c.byteLength != I.byteLength || !se(new jt(c), new jt(I)))
      case f:
      case o:
      case u:
        return bn(+c, +I)
      case n:
        return c.name == I.name && c.message == I.message
      case p:
      case k:
        return c == I + ''
      case i:
        var ke = ee
      case T:
        var ze = Q & s
        if ((ke || (ke = fe), c.size != I.size && !ze)) return !1
        var Ne = Te.get(c)
        if (Ne) return Ne == I
        ;(Q |= O), Te.set(c, I)
        var Qe = rn(ke(c), ke(I), Q, be, se, Te)
        return Te.delete(c), Qe
      case P:
        if (en) return en.call(c) == en.call(I)
    }
    return !1
  }
  function vr(c, I, F, Q, be, se) {
    var Te = F & s,
      ke = Bt(c),
      ze = ke.length,
      Ne = Bt(I),
      Qe = Ne.length
    if (ze != Qe && !Te) return !1
    for (var it = ze; it--; ) {
      var Fe = ke[it]
      if (!(Te ? Fe in I : Ee.call(I, Fe))) return !1
    }
    var Xe = se.get(c)
    if (Xe && se.get(I)) return Xe == I
    var We = !0
    se.set(c, I), se.set(I, c)
    for (var It = Te; ++it < ze; ) {
      Fe = ke[it]
      var Nt = c[Fe],
        $t = I[Fe]
      if (Q) var Vr = Te ? Q($t, Nt, Fe, I, c, se) : Q(Nt, $t, Fe, c, I, se)
      if (!(Vr === void 0 ? Nt === $t || be(Nt, $t, F, Q, se) : Vr)) {
        We = !1
        break
      }
      It || (It = Fe == 'constructor')
    }
    if (We && !It) {
      var Sn = c.constructor,
        An = I.constructor
      Sn != An &&
        'constructor' in c &&
        'constructor' in I &&
        !(
          typeof Sn == 'function' &&
          Sn instanceof Sn &&
          typeof An == 'function' &&
          An instanceof An
        ) &&
        (We = !1)
    }
    return se.delete(c), se.delete(I), We
  }
  function Bt(c) {
    return nn(c, an, yr)
  }
  function dt(c, I) {
    var F = c.__data__
    return mr(I) ? F[typeof I == 'string' ? 'string' : 'hash'] : F.map
  }
  function Tt(c, I) {
    var F = ie(c, I)
    return cr(F) ? F : void 0
  }
  function kt(c) {
    var I = Ee.call(c, le),
      F = c[le]
    try {
      c[le] = void 0
      var Q = !0
    } catch {}
    var be = gt.call(c)
    return Q && (I ? (c[le] = F) : delete c[le]), be
  }
  var yr = _e
      ? function (c) {
          return c == null
            ? []
            : ((c = Object(c)),
              Oe(_e(c), function (I) {
                return Z.call(c, I)
              }))
        }
      : Er,
    Ot = Dt
  ;((nt && Ot(new nt(new ArrayBuffer(1))) != S) ||
    (Le && Ot(new Le()) != i) ||
    (Ie && Ot(Ie.resolve()) != h) ||
    (Ct && Ot(new Ct()) != T) ||
    (Jt && Ot(new Jt()) != A)) &&
    (Ot = function (c) {
      var I = Dt(c),
        F = I == a ? c.constructor : void 0,
        Q = F ? Je(F) : ''
      if (Q)
        switch (Q) {
          case hn:
            return S
          case At:
            return i
          case zn:
            return h
          case Fn:
            return T
          case Un:
            return A
        }
      return I
    })
  function gr(c, I) {
    return (
      (I = I ?? b),
      !!I &&
        (typeof c == 'number' || K.test(c)) &&
        c > -1 &&
        c % 1 == 0 &&
        c < I
    )
  }
  function mr(c) {
    var I = typeof c
    return I == 'string' || I == 'number' || I == 'symbol' || I == 'boolean'
      ? c !== '__proto__'
      : c === null
  }
  function br(c) {
    return !!Ke && Ke in c
  }
  function _r(c) {
    var I = c && c.constructor,
      F = (typeof I == 'function' && I.prototype) || Be
    return c === F
  }
  function mn(c) {
    return gt.call(c)
  }
  function Je(c) {
    if (c != null) {
      try {
        return at.call(c)
      } catch {}
      try {
        return c + ''
      } catch {}
    }
    return ''
  }
  function bn(c, I) {
    return c === I || (c !== c && I !== I)
  }
  var _n = yn(
      (function () {
        return arguments
      })()
    )
      ? yn
      : function (c) {
          return Et(c) && Ee.call(c, 'callee') && !Z.call(c, 'callee')
        },
    Zt = Array.isArray
  function on(c) {
    return c != null && ln(c.length) && !On(c)
  }
  var Yt = je || wr
  function Or(c, I) {
    return gn(c, I)
  }
  function On(c) {
    if (!En(c)) return !1
    var I = Dt(c)
    return I == t || I == d || I == _ || I == r
  }
  function ln(c) {
    return typeof c == 'number' && c > -1 && c % 1 == 0 && c <= b
  }
  function En(c) {
    var I = typeof c
    return c != null && (I == 'object' || I == 'function')
  }
  function Et(c) {
    return c != null && typeof c == 'object'
  }
  var wn = ge ? X(ge) : dr
  function an(c) {
    return on(c) ? sr(c) : hr(c)
  }
  function Er() {
    return []
  }
  function wr() {
    return !1
  }
  e.exports = Or
})(In, In.exports)
var Pi = In.exports,
  Kr = {},
  Li =
    (He && He.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e }
    }
Object.defineProperty(Kr, '__esModule', { value: !0 })
var oa = Li(Ni),
  la = Li(Pi),
  Ir
;(function (e) {
  function w(O, b, E) {
    O === void 0 && (O = {}),
      b === void 0 && (b = {}),
      typeof O != 'object' && (O = {}),
      typeof b != 'object' && (b = {})
    var g = oa.default(b)
    E ||
      (g = Object.keys(g).reduce(function (f, o) {
        return g[o] != null && (f[o] = g[o]), f
      }, {}))
    for (var _ in O) O[_] !== void 0 && b[_] === void 0 && (g[_] = O[_])
    return Object.keys(g).length > 0 ? g : void 0
  }
  e.compose = w
  function v(O, b) {
    O === void 0 && (O = {}),
      b === void 0 && (b = {}),
      typeof O != 'object' && (O = {}),
      typeof b != 'object' && (b = {})
    var E = Object.keys(O)
      .concat(Object.keys(b))
      .reduce(function (g, _) {
        return (
          la.default(O[_], b[_]) || (g[_] = b[_] === void 0 ? null : b[_]), g
        )
      }, {})
    return Object.keys(E).length > 0 ? E : void 0
  }
  e.diff = v
  function y(O, b) {
    O === void 0 && (O = {}), b === void 0 && (b = {}), (O = O || {})
    var E = Object.keys(b).reduce(function (g, _) {
      return b[_] !== O[_] && O[_] !== void 0 && (g[_] = b[_]), g
    }, {})
    return Object.keys(O).reduce(function (g, _) {
      return O[_] !== b[_] && b[_] === void 0 && (g[_] = null), g
    }, E)
  }
  e.invert = y
  function s(O, b, E) {
    if ((E === void 0 && (E = !1), typeof O != 'object')) return b
    if (typeof b == 'object') {
      if (!E) return b
      var g = Object.keys(b).reduce(function (_, f) {
        return O[f] === void 0 && (_[f] = b[f]), _
      }, {})
      return Object.keys(g).length > 0 ? g : void 0
    }
  }
  e.transform = s
})(Ir || (Ir = {}))
Kr.default = Ir
var Tn = {},
  kn = {},
  ti
function aa() {
  if (ti) return kn
  ti = 1
  var e =
    (He && He.__importDefault) ||
    function (y) {
      return y && y.__esModule ? y : { default: y }
    }
  Object.defineProperty(kn, '__esModule', { value: !0 })
  var w = e(Ci()),
    v = (function () {
      function y(s) {
        ;(this.ops = s), (this.index = 0), (this.offset = 0)
      }
      return (
        (y.prototype.hasNext = function () {
          return this.peekLength() < 1 / 0
        }),
        (y.prototype.next = function (s) {
          s || (s = 1 / 0)
          var O = this.ops[this.index]
          if (O) {
            var b = this.offset,
              E = w.default.length(O)
            if (
              (s >= E - b
                ? ((s = E - b), (this.index += 1), (this.offset = 0))
                : (this.offset += s),
              typeof O.delete == 'number')
            )
              return { delete: s }
            var g = {}
            return (
              O.attributes && (g.attributes = O.attributes),
              typeof O.retain == 'number'
                ? (g.retain = s)
                : typeof O.insert == 'string'
                ? (g.insert = O.insert.substr(b, s))
                : (g.insert = O.insert),
              g
            )
          } else return { retain: 1 / 0 }
        }),
        (y.prototype.peek = function () {
          return this.ops[this.index]
        }),
        (y.prototype.peekLength = function () {
          return this.ops[this.index]
            ? w.default.length(this.ops[this.index]) - this.offset
            : 1 / 0
        }),
        (y.prototype.peekType = function () {
          return this.ops[this.index]
            ? typeof this.ops[this.index].delete == 'number'
              ? 'delete'
              : typeof this.ops[this.index].retain == 'number'
              ? 'retain'
              : 'insert'
            : 'retain'
        }),
        (y.prototype.rest = function () {
          if (this.hasNext()) {
            if (this.offset === 0) return this.ops.slice(this.index)
            var s = this.offset,
              O = this.index,
              b = this.next(),
              E = this.ops.slice(this.index)
            return (this.offset = s), (this.index = O), [b].concat(E)
          } else return []
        }),
        y
      )
    })()
  return (kn.default = v), kn
}
var ni
function Ci() {
  if (ni) return Tn
  ni = 1
  var e =
    (He && He.__importDefault) ||
    function (y) {
      return y && y.__esModule ? y : { default: y }
    }
  Object.defineProperty(Tn, '__esModule', { value: !0 })
  var w = e(aa()),
    v
  return (
    (function (y) {
      function s(b) {
        return new w.default(b)
      }
      y.iterator = s
      function O(b) {
        return typeof b.delete == 'number'
          ? b.delete
          : typeof b.retain == 'number'
          ? b.retain
          : typeof b.insert == 'string'
          ? b.insert.length
          : 1
      }
      y.length = O
    })(v || (v = {})),
    (Tn.default = v),
    Tn
  )
}
var dn =
    (He && He.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e }
    },
  Nn = dn(ia),
  ua = dn(Ni),
  Nr = dn(Pi),
  sn = dn(Kr),
  Ge = dn(Ci()),
  sa = String.fromCharCode(0),
  fa = (function () {
    function e(w) {
      Array.isArray(w)
        ? (this.ops = w)
        : w != null && Array.isArray(w.ops)
        ? (this.ops = w.ops)
        : (this.ops = [])
    }
    return (
      (e.prototype.insert = function (w, v) {
        var y = {}
        return typeof w == 'string' && w.length === 0
          ? this
          : ((y.insert = w),
            v != null &&
              typeof v == 'object' &&
              Object.keys(v).length > 0 &&
              (y.attributes = v),
            this.push(y))
      }),
      (e.prototype.delete = function (w) {
        return w <= 0 ? this : this.push({ delete: w })
      }),
      (e.prototype.retain = function (w, v) {
        if (w <= 0) return this
        var y = { retain: w }
        return (
          v != null &&
            typeof v == 'object' &&
            Object.keys(v).length > 0 &&
            (y.attributes = v),
          this.push(y)
        )
      }),
      (e.prototype.push = function (w) {
        var v = this.ops.length,
          y = this.ops[v - 1]
        if (((w = ua.default(w)), typeof y == 'object')) {
          if (typeof w.delete == 'number' && typeof y.delete == 'number')
            return (this.ops[v - 1] = { delete: y.delete + w.delete }), this
          if (
            typeof y.delete == 'number' &&
            w.insert != null &&
            ((v -= 1), (y = this.ops[v - 1]), typeof y != 'object')
          )
            return this.ops.unshift(w), this
          if (Nr.default(w.attributes, y.attributes)) {
            if (typeof w.insert == 'string' && typeof y.insert == 'string')
              return (
                (this.ops[v - 1] = { insert: y.insert + w.insert }),
                typeof w.attributes == 'object' &&
                  (this.ops[v - 1].attributes = w.attributes),
                this
              )
            if (typeof w.retain == 'number' && typeof y.retain == 'number')
              return (
                (this.ops[v - 1] = { retain: y.retain + w.retain }),
                typeof w.attributes == 'object' &&
                  (this.ops[v - 1].attributes = w.attributes),
                this
              )
          }
        }
        return (
          v === this.ops.length ? this.ops.push(w) : this.ops.splice(v, 0, w),
          this
        )
      }),
      (e.prototype.chop = function () {
        var w = this.ops[this.ops.length - 1]
        return w && w.retain && !w.attributes && this.ops.pop(), this
      }),
      (e.prototype.filter = function (w) {
        return this.ops.filter(w)
      }),
      (e.prototype.forEach = function (w) {
        this.ops.forEach(w)
      }),
      (e.prototype.map = function (w) {
        return this.ops.map(w)
      }),
      (e.prototype.partition = function (w) {
        var v = [],
          y = []
        return (
          this.forEach(function (s) {
            var O = w(s) ? v : y
            O.push(s)
          }),
          [v, y]
        )
      }),
      (e.prototype.reduce = function (w, v) {
        return this.ops.reduce(w, v)
      }),
      (e.prototype.changeLength = function () {
        return this.reduce(function (w, v) {
          return v.insert
            ? w + Ge.default.length(v)
            : v.delete
            ? w - v.delete
            : w
        }, 0)
      }),
      (e.prototype.length = function () {
        return this.reduce(function (w, v) {
          return w + Ge.default.length(v)
        }, 0)
      }),
      (e.prototype.slice = function (w, v) {
        w === void 0 && (w = 0), v === void 0 && (v = 1 / 0)
        for (
          var y = [], s = Ge.default.iterator(this.ops), O = 0;
          O < v && s.hasNext();

        ) {
          var b = void 0
          O < w ? (b = s.next(w - O)) : ((b = s.next(v - O)), y.push(b)),
            (O += Ge.default.length(b))
        }
        return new e(y)
      }),
      (e.prototype.compose = function (w) {
        var v = Ge.default.iterator(this.ops),
          y = Ge.default.iterator(w.ops),
          s = [],
          O = y.peek()
        if (O != null && typeof O.retain == 'number' && O.attributes == null) {
          for (
            var b = O.retain;
            v.peekType() === 'insert' && v.peekLength() <= b;

          )
            (b -= v.peekLength()), s.push(v.next())
          O.retain - b > 0 && y.next(O.retain - b)
        }
        for (var E = new e(s); v.hasNext() || y.hasNext(); )
          if (y.peekType() === 'insert') E.push(y.next())
          else if (v.peekType() === 'delete') E.push(v.next())
          else {
            var g = Math.min(v.peekLength(), y.peekLength()),
              _ = v.next(g),
              f = y.next(g)
            if (typeof f.retain == 'number') {
              var o = {}
              typeof _.retain == 'number'
                ? (o.retain = g)
                : (o.insert = _.insert)
              var n = sn.default.compose(
                _.attributes,
                f.attributes,
                typeof _.retain == 'number'
              )
              if (
                (n && (o.attributes = n),
                E.push(o),
                !y.hasNext() && Nr.default(E.ops[E.ops.length - 1], o))
              ) {
                var t = new e(v.rest())
                return E.concat(t).chop()
              }
            } else
              typeof f.delete == 'number' &&
                typeof _.retain == 'number' &&
                E.push(f)
          }
        return E.chop()
      }),
      (e.prototype.concat = function (w) {
        var v = new e(this.ops.slice())
        return (
          w.ops.length > 0 &&
            (v.push(w.ops[0]), (v.ops = v.ops.concat(w.ops.slice(1)))),
          v
        )
      }),
      (e.prototype.diff = function (w, v) {
        if (this.ops === w.ops) return new e()
        var y = [this, w].map(function (g) {
            return g
              .map(function (_) {
                if (_.insert != null)
                  return typeof _.insert == 'string' ? _.insert : sa
                var f = g === w ? 'on' : 'with'
                throw new Error('diff() called ' + f + ' non-document')
              })
              .join('')
          }),
          s = new e(),
          O = Nn.default(y[0], y[1], v),
          b = Ge.default.iterator(this.ops),
          E = Ge.default.iterator(w.ops)
        return (
          O.forEach(function (g) {
            for (var _ = g[1].length; _ > 0; ) {
              var f = 0
              switch (g[0]) {
                case Nn.default.INSERT:
                  ;(f = Math.min(E.peekLength(), _)), s.push(E.next(f))
                  break
                case Nn.default.DELETE:
                  ;(f = Math.min(_, b.peekLength())), b.next(f), s.delete(f)
                  break
                case Nn.default.EQUAL:
                  f = Math.min(b.peekLength(), E.peekLength(), _)
                  var o = b.next(f),
                    n = E.next(f)
                  Nr.default(o.insert, n.insert)
                    ? s.retain(f, sn.default.diff(o.attributes, n.attributes))
                    : s.push(n).delete(f)
                  break
              }
              _ -= f
            }
          }),
          s.chop()
        )
      }),
      (e.prototype.eachLine = function (w, v) {
        v === void 0 &&
          (v = `
`)
        for (
          var y = Ge.default.iterator(this.ops), s = new e(), O = 0;
          y.hasNext();

        ) {
          if (y.peekType() !== 'insert') return
          var b = y.peek(),
            E = Ge.default.length(b) - y.peekLength(),
            g = typeof b.insert == 'string' ? b.insert.indexOf(v, E) - E : -1
          if (g < 0) s.push(y.next())
          else if (g > 0) s.push(y.next(g))
          else {
            if (w(s, y.next(1).attributes || {}, O) === !1) return
            ;(O += 1), (s = new e())
          }
        }
        s.length() > 0 && w(s, {}, O)
      }),
      (e.prototype.invert = function (w) {
        var v = new e()
        return (
          this.reduce(function (y, s) {
            if (s.insert) v.delete(Ge.default.length(s))
            else {
              if (s.retain && s.attributes == null)
                return v.retain(s.retain), y + s.retain
              if (s.delete || (s.retain && s.attributes)) {
                var O = s.delete || s.retain,
                  b = w.slice(y, y + O)
                return (
                  b.forEach(function (E) {
                    s.delete
                      ? v.push(E)
                      : s.retain &&
                        s.attributes &&
                        v.retain(
                          Ge.default.length(E),
                          sn.default.invert(s.attributes, E.attributes)
                        )
                  }),
                  y + O
                )
              }
            }
            return y
          }, 0),
          v.chop()
        )
      }),
      (e.prototype.transform = function (w, v) {
        if ((v === void 0 && (v = !1), (v = !!v), typeof w == 'number'))
          return this.transformPosition(w, v)
        for (
          var y = w,
            s = Ge.default.iterator(this.ops),
            O = Ge.default.iterator(y.ops),
            b = new e();
          s.hasNext() || O.hasNext();

        )
          if (s.peekType() === 'insert' && (v || O.peekType() !== 'insert'))
            b.retain(Ge.default.length(s.next()))
          else if (O.peekType() === 'insert') b.push(O.next())
          else {
            var E = Math.min(s.peekLength(), O.peekLength()),
              g = s.next(E),
              _ = O.next(E)
            if (g.delete) continue
            _.delete
              ? b.push(_)
              : b.retain(E, sn.default.transform(g.attributes, _.attributes, v))
          }
        return b.chop()
      }),
      (e.prototype.transformPosition = function (w, v) {
        v === void 0 && (v = !1), (v = !!v)
        for (
          var y = Ge.default.iterator(this.ops), s = 0;
          y.hasNext() && s <= w;

        ) {
          var O = y.peekLength(),
            b = y.peekType()
          if ((y.next(), b === 'delete')) {
            w -= Math.min(O, w - s)
            continue
          } else b === 'insert' && (s < w || !v) && (w += O)
          s += O
        }
        return w
      }),
      (e.Op = Ge.default),
      (e.AttributeMap = sn.default),
      e
    )
  })(),
  ca = fa
const da = jr(ca)
/*!
 * VueQuill @vueup/vue-quill v1.2.0
 * https://vueup.github.io/vue-quill/
 *
 * Includes quill v1.3.7
 * https://quilljs.com/
 *
 * Copyright (c) 2023 Ahmad Luthfi Masruri
 * Released under the MIT license
 * Date: 2023-05-12T08:44:03.742Z
 */ const ri = {
    essential: [
      [{ header: [1, 2, 3, 4, 5, 6, !1] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
      ['blockquote', 'code-block', 'link'],
      [{ color: [] }, 'clean']
    ],
    minimal: [
      [{ header: 1 }, { header: 2 }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }]
    ],
    full: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', !1, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, !1] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'video', 'image'],
      ['clean']
    ]
  },
  ha = De({
    name: 'QuillEditor',
    inheritAttrs: !1,
    props: {
      content: { type: [String, Object] },
      contentType: {
        type: String,
        default: 'delta',
        validator: (e) => ['delta', 'html', 'text'].includes(e)
      },
      enable: { type: Boolean, default: !0 },
      readOnly: { type: Boolean, default: !1 },
      placeholder: { type: String, required: !1 },
      theme: {
        type: String,
        default: 'snow',
        validator: (e) => ['snow', 'bubble', ''].includes(e)
      },
      toolbar: {
        type: [String, Array, Object],
        required: !1,
        validator: (e) =>
          typeof e == 'string' && e !== ''
            ? e.charAt(0) === '#'
              ? !0
              : Object.keys(ri).indexOf(e) !== -1
            : !0
      },
      modules: { type: Object, required: !1 },
      options: { type: Object, required: !1 },
      globalOptions: { type: Object, required: !1 }
    },
    emits: [
      'textChange',
      'selectionChange',
      'editorChange',
      'update:content',
      'focus',
      'blur',
      'ready'
    ],
    setup: (e, w) => {
      Dn(() => {
        O()
      }),
        ii(() => {
          v = null
        })
      let v, y
      const s = Se(),
        O = () => {
          var m
          if (s.value) {
            if (((y = b()), e.modules))
              if (Array.isArray(e.modules))
                for (const S of e.modules)
                  Tr.register(`modules/${S.name}`, S.module)
              else Tr.register(`modules/${e.modules.name}`, e.modules.module)
            ;(v = new Tr(s.value, y)),
              h(e.content),
              v.on('text-change', o),
              v.on('selection-change', t),
              v.on('editor-change', d),
              e.theme !== 'bubble' && s.value.classList.remove('ql-bubble'),
              e.theme !== 'snow' && s.value.classList.remove('ql-snow'),
              (m = v.getModule('toolbar')) === null ||
                m === void 0 ||
                m.container.addEventListener('mousedown', (S) => {
                  S.preventDefault()
                }),
              w.emit('ready', v)
          }
        },
        b = () => {
          const m = {}
          if (
            (e.theme !== '' && (m.theme = e.theme),
            e.readOnly && (m.readOnly = e.readOnly),
            e.placeholder && (m.placeholder = e.placeholder),
            e.toolbar &&
              e.toolbar !== '' &&
              (m.modules = {
                toolbar: (() => {
                  if (typeof e.toolbar == 'object') return e.toolbar
                  if (typeof e.toolbar == 'string')
                    return e.toolbar.charAt(0) === '#'
                      ? e.toolbar
                      : ri[e.toolbar]
                })()
              }),
            e.modules)
          ) {
            const S = (() => {
              var N, C
              const q = {}
              if (Array.isArray(e.modules))
                for (const $ of e.modules)
                  q[$.name] = (N = $.options) !== null && N !== void 0 ? N : {}
              else
                q[e.modules.name] =
                  (C = e.modules.options) !== null && C !== void 0 ? C : {}
              return q
            })()
            m.modules = Object.assign({}, m.modules, S)
          }
          return Object.assign({}, e.globalOptions, e.options, m)
        },
        E = (m) => (typeof m == 'object' && m ? m.slice() : m),
        g = (m) =>
          Object.values(m.ops).some(
            (S) => !S.retain || Object.keys(S).length !== 1
          )
      let _
      const f = (m) => {
          if (typeof _ == typeof m) {
            if (m === _) return !0
            if (typeof m == 'object' && m && typeof _ == 'object' && _)
              return !g(_.diff(m))
          }
          return !1
        },
        o = (m, S, N) => {
          ;(_ = E(a())),
            f(e.content) || w.emit('update:content', _),
            w.emit('textChange', { delta: m, oldContents: S, source: N })
        },
        n = Se(),
        t = (m, S, N) => {
          ;(n.value = !!(v != null && v.hasFocus())),
            w.emit('selectionChange', { range: m, oldRange: S, source: N })
        }
      Ze(n, (m) => {
        m ? w.emit('focus', s) : w.emit('blur', s)
      })
      const d = (...m) => {
          m[0] === 'text-change' &&
            w.emit('editorChange', {
              name: m[0],
              delta: m[1],
              oldContents: m[2],
              source: m[3]
            }),
            m[0] === 'selection-change' &&
              w.emit('editorChange', {
                name: m[0],
                range: m[1],
                oldRange: m[2],
                source: m[3]
              })
        },
        i = () => s.value,
        u = () => {
          var m
          return (m = v == null ? void 0 : v.getModule('toolbar')) === null ||
            m === void 0
            ? void 0
            : m.container
        },
        l = () => {
          if (v) return v
          throw `The quill editor hasn't been instantiated yet,
                  make sure to call this method when the editor ready
                  or use v-on:ready="onReady(quill)" event instead.`
        },
        a = (m, S) =>
          e.contentType === 'html'
            ? T()
            : e.contentType === 'text'
            ? r(m, S)
            : v == null
            ? void 0
            : v.getContents(m, S),
        h = (m, S = 'api') => {
          const N = m || (e.contentType === 'delta' ? new da() : '')
          e.contentType === 'html'
            ? k(N)
            : e.contentType === 'text'
            ? p(N, S)
            : v == null || v.setContents(N, S),
            (_ = E(N))
        },
        r = (m, S) => {
          var N
          return (N = v == null ? void 0 : v.getText(m, S)) !== null &&
            N !== void 0
            ? N
            : ''
        },
        p = (m, S = 'api') => {
          v == null || v.setText(m, S)
        },
        T = () => {
          var m
          return (m = v == null ? void 0 : v.root.innerHTML) !== null &&
            m !== void 0
            ? m
            : ''
        },
        k = (m) => {
          v && (v.root.innerHTML = m)
        },
        P = (m, S = 'api') => {
          const N = v == null ? void 0 : v.clipboard.convert(m)
          N && (v == null || v.setContents(N, S))
        },
        M = () => {
          v == null || v.focus()
        },
        A = () => {
          tt(() => {
            var m
            !w.slots.toolbar &&
              v &&
              ((m = v.getModule('toolbar')) === null ||
                m === void 0 ||
                m.container.remove()),
              O()
          })
        }
      return (
        Ze(
          () => e.content,
          (m) => {
            if (!v || !m || f(m)) return
            const S = v.getSelection()
            S && tt(() => (v == null ? void 0 : v.setSelection(S))), h(m)
          },
          { deep: !0 }
        ),
        Ze(
          () => e.enable,
          (m) => {
            v && v.enable(m)
          }
        ),
        {
          editor: s,
          getEditor: i,
          getToolbar: u,
          getQuill: l,
          getContents: a,
          setContents: h,
          getHTML: T,
          setHTML: k,
          pasteHTML: P,
          focus: M,
          getText: r,
          setText: p,
          reinit: A
        }
      )
    },
    render() {
      var e, w
      return [
        (w = (e = this.$slots).toolbar) === null || w === void 0
          ? void 0
          : w.call(e),
        Pt('div', { ref: 'editor', ...this.$attrs })
      ]
    }
  })
const pa = ['src'],
  va = { class: 'editor' },
  ya = {
    __name: 'ArticleEdit',
    emits: ['success'],
    setup(e, { expose: w, emit: v }) {
      const y = Se(!1),
        s = { title: '', cate_id: '', cover_img: '', content: '', state: '' },
        O = Se({ ...s }),
        b = Se(''),
        E = (n) => {
          ;(b.value = URL.createObjectURL(n.raw)), (O.value.cover_img = n.raw)
        },
        g = async (n) => {
          O.value.state = n
          const t = new FormData()
          for (let d in O.value) t.append(d, O.value[d])
          O.value.id
            ? (await io(t),
              Lr.success('修改成功'),
              (y.value = !1),
              v('success', 'edit'))
            : (await oo(t),
              Lr.success('添加成功'),
              (y.value = !1),
              v('success', 'add'))
        },
        _ = Se(),
        f = async (n) => {
          if (((y.value = !0), n.id)) {
            const t = await lo(n.id)
            ;(O.value = t.data.data), (b.value = Zi + O.value.cover_img)
            const d = await o(b.value, O.value.cover_img)
            O.value.cover_img = d
          } else (O.value = { ...s }), (b.value = ''), _.value.setHTML('')
        }
      async function o(n, t) {
        try {
          const d = await Yi.get(n, { responseType: 'arraybuffer' }),
            i = new Blob([d.data], { type: d.headers['content-type'] })
          return new File([i], t, { type: d.headers['content-type'] })
        } catch (d) {
          return (
            console.error('Error converting image URL to File object:', d), null
          )
        }
      }
      return (
        w({ open: f }),
        (n, t) => {
          const d = Dr,
            i = ci,
            u = Kt,
            l = ko,
            a = vi,
            h = di,
            r = Wo
          return (
            ae(),
            Pe(
              r,
              {
                modelValue: y.value,
                'onUpdate:modelValue': t[5] || (t[5] = (p) => (y.value = p)),
                title: O.value.id ? '编辑文章' : '添加文章',
                direction: 'rtl',
                size: '50%'
              },
              {
                default: ce(() => [
                  pe(
                    h,
                    { model: O.value, ref: 'formRef', 'label-width': '100px' },
                    {
                      default: ce(() => [
                        pe(
                          i,
                          { label: '文章标题', prop: 'title' },
                          {
                            default: ce(() => [
                              pe(
                                d,
                                {
                                  modelValue: O.value.title,
                                  'onUpdate:modelValue':
                                    t[0] || (t[0] = (p) => (O.value.title = p)),
                                  placeholder: '请输入标题'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        pe(
                          i,
                          { label: '文章分类', prop: 'cate_id' },
                          {
                            default: ce(() => [
                              pe(
                                Oi,
                                {
                                  modelValue: O.value.cate_id,
                                  'onUpdate:modelValue':
                                    t[1] ||
                                    (t[1] = (p) => (O.value.cate_id = p)),
                                  width: '100%'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        pe(
                          i,
                          { label: '文章封面', prop: 'cover_img' },
                          {
                            default: ce(() => [
                              pe(
                                l,
                                {
                                  class: 'avatar-uploader',
                                  'show-file-list': !1,
                                  'auto-upload': !1,
                                  'on-change': E
                                },
                                {
                                  default: ce(() => [
                                    b.value
                                      ? (ae(),
                                        we(
                                          'img',
                                          {
                                            key: 0,
                                            src: b.value,
                                            class: 'avatar'
                                          },
                                          null,
                                          8,
                                          pa
                                        ))
                                      : (ae(),
                                        Pe(
                                          u,
                                          {
                                            key: 1,
                                            class: 'avatar-uploader-icon'
                                          },
                                          {
                                            default: ce(() => [pe(oe(Gi))]),
                                            _: 1
                                          }
                                        ))
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        pe(
                          i,
                          { label: '文章内容', prop: 'content' },
                          {
                            default: ce(() => [
                              $e('div', va, [
                                pe(
                                  oe(ha),
                                  {
                                    ref_key: 'editorRef',
                                    ref: _,
                                    content: O.value.content,
                                    'onUpdate:content':
                                      t[2] ||
                                      (t[2] = (p) => (O.value.content = p)),
                                    'content-type': 'html',
                                    theme: 'snow'
                                  },
                                  null,
                                  8,
                                  ['content']
                                )
                              ])
                            ]),
                            _: 1
                          }
                        ),
                        pe(i, null, {
                          default: ce(() => [
                            pe(
                              a,
                              {
                                onClick: t[3] || (t[3] = (p) => g('已发布')),
                                type: 'primary'
                              },
                              { default: ce(() => [Ft('发布')]), _: 1 }
                            ),
                            pe(
                              a,
                              {
                                onClick: t[4] || (t[4] = (p) => g('草稿')),
                                type: 'info'
                              },
                              { default: ce(() => [Ft('草稿')]), _: 1 }
                            )
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    },
                    8,
                    ['model']
                  )
                ]),
                _: 1
              },
              8,
              ['modelValue', 'title']
            )
          )
        }
      )
    }
  },
  ga = To(ya, [['__scopeId', 'data-v-abe39c98']]),
  ma = (e) => Mo(e).format('YYYY年MM月DD日'),
  Ma = {
    __name: 'ArticleManage',
    setup(e) {
      const w = Se([]),
        v = Se(0),
        y = Se(!1),
        s = Se({ pagenum: 1, pagesize: 5, cate_id: '', state: '' }),
        O = async () => {
          y.value = !0
          const i = await ao(s.value)
          ;(w.value = i.data.data), (v.value = i.data.total), (y.value = !1)
        }
      O()
      const b = (i) => {
          ;(s.value.pagenum = 1), (s.value.pagesize = i), O()
        },
        E = (i) => {
          ;(s.value.pagenum = i), O()
        },
        g = () => {
          ;(s.value.pagenum = 1), O()
        },
        _ = () => {
          ;(s.value.pagenum = 1),
            (s.value.cate_id = ''),
            (s.value.state = ''),
            O()
        },
        f = Se(),
        o = () => {
          f.value.open({})
        },
        n = (i) => {
          f.value.open(i)
        },
        t = async (i) => {
          await wo.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }),
            await uo(i.id),
            Lr.success('删除成功'),
            O()
        },
        d = (i) => {
          if (i === 'add') {
            const u = Math.ceil((v.value + 1) / s.value.pagesize)
            s.value.pagenum = u
          }
          O()
        }
      return (i, u) => {
        const l = vi,
          a = ci,
          h = zr,
          r = $r,
          p = di,
          T = So,
          k = so,
          P = fo,
          M = Ql,
          A = ho,
          m = co
        return (
          ae(),
          Pe(
            A,
            { title: '文章管理' },
            {
              extra: ce(() => [
                pe(
                  l,
                  { type: 'primary', onClick: o },
                  { default: ce(() => [Ft('添加文章')]), _: 1 }
                )
              ]),
              default: ce(() => [
                pe(
                  p,
                  { inline: '' },
                  {
                    default: ce(() => [
                      pe(
                        a,
                        { label: '文章分类:' },
                        {
                          default: ce(() => [
                            pe(
                              Oi,
                              {
                                modelValue: s.value.cate_id,
                                'onUpdate:modelValue':
                                  u[0] || (u[0] = (S) => (s.value.cate_id = S))
                              },
                              null,
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      pe(
                        a,
                        { label: '发布状态:' },
                        {
                          default: ce(() => [
                            pe(
                              r,
                              {
                                modelValue: s.value.state,
                                'onUpdate:modelValue':
                                  u[1] || (u[1] = (S) => (s.value.state = S))
                              },
                              {
                                default: ce(() => [
                                  pe(h, { label: '已发布', value: '已发布' }),
                                  pe(h, { label: '草稿', value: '草稿' })
                                ]),
                                _: 1
                              },
                              8,
                              ['modelValue']
                            )
                          ]),
                          _: 1
                        }
                      ),
                      pe(a, null, {
                        default: ce(() => [
                          pe(
                            l,
                            { onClick: g, type: 'primary' },
                            { default: ce(() => [Ft('搜索')]), _: 1 }
                          ),
                          pe(
                            l,
                            { onClick: _ },
                            { default: ce(() => [Ft('重置')]), _: 1 }
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                ),
                Ht(
                  (ae(),
                  Pe(
                    P,
                    { data: w.value },
                    {
                      default: ce(() => [
                        pe(
                          k,
                          { label: '文章标题', prop: 'title' },
                          {
                            default: ce(({ row: S }) => [
                              pe(
                                T,
                                { type: 'primary', underline: !1 },
                                {
                                  default: ce(() => [Ft(Ue(S.title), 1)]),
                                  _: 2
                                },
                                1024
                              )
                            ]),
                            _: 1
                          }
                        ),
                        pe(k, { label: '分类', prop: 'cate_name' }),
                        pe(
                          k,
                          { label: '发表时间', prop: 'pub_date' },
                          {
                            default: ce(({ row: S }) => [
                              Ft(Ue(oe(ma)(S.pub_date)), 1)
                            ]),
                            _: 1
                          }
                        ),
                        pe(k, { label: '状态', prop: 'state' }),
                        pe(
                          k,
                          { label: '操作' },
                          {
                            default: ce(({ row: S }) => [
                              pe(
                                l,
                                {
                                  circle: '',
                                  plain: '',
                                  type: 'primary',
                                  icon: oe(Qi),
                                  onClick: (N) => n(S)
                                },
                                null,
                                8,
                                ['icon', 'onClick']
                              ),
                              pe(
                                l,
                                {
                                  circle: '',
                                  plain: '',
                                  type: 'danger',
                                  icon: oe(Xi),
                                  onClick: (N) => t(S)
                                },
                                null,
                                8,
                                ['icon', 'onClick']
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['data']
                  )),
                  [[m, y.value]]
                ),
                pe(
                  M,
                  {
                    'current-page': s.value.pagenum,
                    'onUpdate:currentPage':
                      u[2] || (u[2] = (S) => (s.value.pagenum = S)),
                    'page-size': s.value.pagesize,
                    'onUpdate:pageSize':
                      u[3] || (u[3] = (S) => (s.value.pagesize = S)),
                    'page-sizes': [2, 3, 5, 10],
                    background: !0,
                    layout: 'jumper, total, sizes, prev, pager, next',
                    total: v.value,
                    onSizeChange: b,
                    onCurrentChange: E,
                    style: {
                      'margin-top': '20px',
                      'justify-content': 'flex-end'
                    }
                  },
                  null,
                  8,
                  ['current-page', 'page-size', 'total']
                ),
                pe(
                  ga,
                  { ref_key: 'articleEditRef', ref: f, onSuccess: d },
                  null,
                  512
                )
              ]),
              _: 1
            }
          )
        )
      }
    }
  }
export { Ma as default }
