import {
  m as re,
  n as It,
  q as xe,
  s as fe,
  t as Q,
  v as S,
  x as L,
  r as T,
  y as b,
  z as ie,
  A as Ze,
  w as ce,
  o as k,
  B as x,
  C as ve,
  e as g,
  c as ne,
  b as p,
  D as Qe,
  F as he,
  G as N,
  H as te,
  _ as D,
  I as $e,
  J as pe,
  K as Ct,
  T as Xe,
  L as Et,
  M as ae,
  N as se,
  O as A,
  P as ge,
  Q as Me,
  R as $,
  S as $t,
  U as de,
  V as Mt,
  W as G,
  d as h,
  X as Tt,
  Y as St,
  Z as et,
  $ as tt,
  a0 as kt,
  a1 as Ot,
  a2 as Pe,
  a3 as be,
  a4 as Nt,
  g as X,
  a5 as Fe,
  a6 as Te,
  a7 as ye,
  a8 as Oe,
  a9 as Bt,
  aa as Pt,
  ab as Re,
  ac as j,
  ad as Ft,
  ae as Rt,
  af as Ge,
  ag as At,
  ah as Lt,
  ai as Dt,
  aj as zt,
  ak as Kt,
  f as ue,
  al as nt,
  u as Gt,
  a as Ht,
  am as Vt,
  an as Ut,
  ao as jt,
  j as He,
  ap as Ve,
  aq as Ue,
  ar as Yt,
  as as Wt,
  p as Jt,
  k as qt
} from './main-b3449a42.js'
import {
  u as ot,
  E as lt,
  a as xt,
  T as Zt,
  b as Qt,
  t as Ee,
  i as je,
  _ as Xt
} from './_plugin-vue_export-helper-140fdfbe.js'
import {
  c as oe,
  u as en,
  a as Ye,
  E as tn,
  b as Ae,
  O as nn,
  w as We,
  F as on,
  t as Ie,
  f as ln,
  d as sn
} from './el-overlay-2d45dfd6.js'
/* empty css                */ import './el-input-63e056b5.js'
import { c as st } from './refs-bf2957ae.js'
const an = re({
    size: {
      type: [Number, String],
      values: It,
      default: '',
      validator: (e) => xe(e)
    },
    shape: { type: String, values: ['circle', 'square'], default: 'circle' },
    icon: { type: fe },
    src: { type: String, default: '' },
    alt: String,
    srcSet: String,
    fit: { type: Q(String), default: 'cover' }
  }),
  rn = { error: (e) => e instanceof Event },
  un = ['src', 'alt', 'srcset'],
  cn = S({ name: 'ElAvatar' }),
  dn = S({
    ...cn,
    props: an,
    emits: rn,
    setup(e, { emit: t }) {
      const o = e,
        n = L('avatar'),
        l = T(!1),
        d = b(() => {
          const { size: u, icon: f, shape: v } = o,
            y = [n.b()]
          return (
            ie(u) && y.push(n.m(u)),
            f && y.push(n.m('icon')),
            v && y.push(n.m(v)),
            y
          )
        }),
        s = b(() => {
          const { size: u } = o
          return xe(u) ? n.cssVarBlock({ size: Ze(u) || '' }) : void 0
        }),
        a = b(() => ({ objectFit: o.fit }))
      ce(
        () => o.src,
        () => (l.value = !1)
      )
      function r(u) {
        ;(l.value = !0), t('error', u)
      }
      return (u, f) => (
        k(),
        x(
          'span',
          { class: te(g(d)), style: ve(g(s)) },
          [
            (u.src || u.srcSet) && !l.value
              ? (k(),
                x(
                  'img',
                  {
                    key: 0,
                    src: u.src,
                    alt: u.alt,
                    srcset: u.srcSet,
                    style: ve(g(a)),
                    onError: r
                  },
                  null,
                  44,
                  un
                ))
              : u.icon
              ? (k(),
                ne(
                  g(he),
                  { key: 1 },
                  { default: p(() => [(k(), ne(Qe(u.icon)))]), _: 1 }
                ))
              : N(u.$slots, 'default', { key: 2 })
          ],
          6
        )
      )
    }
  })
var pn = D(dn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue'
  ]
])
const mn = $e(pn),
  fn = S({ name: 'ElCollapseTransition' }),
  vn = S({
    ...fn,
    setup(e) {
      const t = L('collapse-transition'),
        o = {
          beforeEnter(n) {
            n.dataset || (n.dataset = {}),
              (n.dataset.oldPaddingTop = n.style.paddingTop),
              (n.dataset.oldPaddingBottom = n.style.paddingBottom),
              (n.style.maxHeight = 0),
              (n.style.paddingTop = 0),
              (n.style.paddingBottom = 0)
          },
          enter(n) {
            ;(n.dataset.oldOverflow = n.style.overflow),
              n.scrollHeight !== 0
                ? ((n.style.maxHeight = `${n.scrollHeight}px`),
                  (n.style.paddingTop = n.dataset.oldPaddingTop),
                  (n.style.paddingBottom = n.dataset.oldPaddingBottom))
                : ((n.style.maxHeight = 0),
                  (n.style.paddingTop = n.dataset.oldPaddingTop),
                  (n.style.paddingBottom = n.dataset.oldPaddingBottom)),
              (n.style.overflow = 'hidden')
          },
          afterEnter(n) {
            ;(n.style.maxHeight = ''),
              (n.style.overflow = n.dataset.oldOverflow)
          },
          beforeLeave(n) {
            n.dataset || (n.dataset = {}),
              (n.dataset.oldPaddingTop = n.style.paddingTop),
              (n.dataset.oldPaddingBottom = n.style.paddingBottom),
              (n.dataset.oldOverflow = n.style.overflow),
              (n.style.maxHeight = `${n.scrollHeight}px`),
              (n.style.overflow = 'hidden')
          },
          leave(n) {
            n.scrollHeight !== 0 &&
              ((n.style.maxHeight = 0),
              (n.style.paddingTop = 0),
              (n.style.paddingBottom = 0))
          },
          afterLeave(n) {
            ;(n.style.maxHeight = ''),
              (n.style.overflow = n.dataset.oldOverflow),
              (n.style.paddingTop = n.dataset.oldPaddingTop),
              (n.style.paddingBottom = n.dataset.oldPaddingBottom)
          }
        }
      return (n, l) => (
        k(),
        ne(
          Xe,
          pe({ name: g(t).b() }, Ct(o)),
          { default: p(() => [N(n.$slots, 'default')]), _: 3 },
          16,
          ['name']
        )
      )
    }
  })
var Ce = D(vn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue'
  ]
])
Ce.install = (e) => {
  e.component(Ce.name, Ce)
}
const hn = Ce,
  _n = S({ name: 'ElContainer' }),
  gn = S({
    ..._n,
    props: { direction: { type: String } },
    setup(e) {
      const t = e,
        o = Et(),
        n = L('container'),
        l = b(() =>
          t.direction === 'vertical'
            ? !0
            : t.direction === 'horizontal'
            ? !1
            : o && o.default
            ? o.default().some((s) => {
                const a = s.type.name
                return a === 'ElHeader' || a === 'ElFooter'
              })
            : !1
        )
      return (d, s) => (
        k(),
        x(
          'section',
          { class: te([g(n).b(), g(n).is('vertical', g(l))]) },
          [N(d.$slots, 'default')],
          2
        )
      )
    }
  })
var bn = D(gn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue'
  ]
])
const yn = S({ name: 'ElAside' }),
  wn = S({
    ...yn,
    props: { width: { type: String, default: null } },
    setup(e) {
      const t = e,
        o = L('aside'),
        n = b(() => (t.width ? o.cssVarBlock({ width: t.width }) : {}))
      return (l, d) => (
        k(),
        x(
          'aside',
          { class: te(g(o).b()), style: ve(g(n)) },
          [N(l.$slots, 'default')],
          6
        )
      )
    }
  })
var at = D(wn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue'
  ]
])
const In = S({ name: 'ElFooter' }),
  Cn = S({
    ...In,
    props: { height: { type: String, default: null } },
    setup(e) {
      const t = e,
        o = L('footer'),
        n = b(() => (t.height ? o.cssVarBlock({ height: t.height }) : {}))
      return (l, d) => (
        k(),
        x(
          'footer',
          { class: te(g(o).b()), style: ve(g(n)) },
          [N(l.$slots, 'default')],
          6
        )
      )
    }
  })
var rt = D(Cn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue'
  ]
])
const En = S({ name: 'ElHeader' }),
  $n = S({
    ...En,
    props: { height: { type: String, default: null } },
    setup(e) {
      const t = e,
        o = L('header'),
        n = b(() => (t.height ? o.cssVarBlock({ height: t.height }) : {}))
      return (l, d) => (
        k(),
        x(
          'header',
          { class: te(g(o).b()), style: ve(g(n)) },
          [N(l.$slots, 'default')],
          6
        )
      )
    }
  })
var ut = D($n, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue'
  ]
])
const Mn = S({ name: 'ElMain' }),
  Tn = S({
    ...Mn,
    setup(e) {
      const t = L('main')
      return (o, n) => (
        k(), x('main', { class: te(g(t).b()) }, [N(o.$slots, 'default')], 2)
      )
    }
  })
var it = D(Tn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue'
  ]
])
const Sn = $e(bn, { Aside: at, Footer: rt, Header: ut, Main: it }),
  kn = ae(at),
  On = ae(rt),
  Nn = ae(ut),
  Bn = ae(it),
  Pn = S({ inheritAttrs: !1 })
function Fn(e, t, o, n, l, d) {
  return N(e.$slots, 'default')
}
var Rn = D(Pn, [
  ['render', Fn],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue'
  ]
])
const An = S({ name: 'ElCollectionItem', inheritAttrs: !1 })
function Ln(e, t, o, n, l, d) {
  return N(e.$slots, 'default')
}
var Dn = D(An, [
  ['render', Ln],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue'
  ]
])
const ct = 'data-el-collection-item',
  dt = (e) => {
    const t = `El${e}Collection`,
      o = `${t}Item`,
      n = Symbol(t),
      l = Symbol(o),
      d = {
        ...Rn,
        name: t,
        setup() {
          const a = T(null),
            r = new Map()
          se(n, {
            itemMap: r,
            getItems: () => {
              const f = g(a)
              if (!f) return []
              const v = Array.from(f.querySelectorAll(`[${ct}]`))
              return [...r.values()].sort(
                (i, C) => v.indexOf(i.ref) - v.indexOf(C.ref)
              )
            },
            collectionRef: a
          })
        }
      },
      s = {
        ...Dn,
        name: o,
        setup(a, { attrs: r }) {
          const u = T(null),
            f = A(n, void 0)
          se(l, { collectionItemRef: u }),
            ge(() => {
              const v = g(u)
              v && f.itemMap.set(v, { ref: v, ...r })
            }),
            Me(() => {
              const v = g(u)
              f.itemMap.delete(v)
            })
        }
      }
    return {
      COLLECTION_INJECTION_KEY: n,
      COLLECTION_ITEM_INJECTION_KEY: l,
      ElCollection: d,
      ElCollectionItem: s
    }
  },
  zn = re({
    style: { type: Q([String, Array, Object]) },
    currentTabId: { type: Q(String) },
    defaultCurrentTabId: String,
    loop: Boolean,
    dir: { type: String, values: ['ltr', 'rtl'], default: 'ltr' },
    orientation: { type: Q(String) },
    onBlur: Function,
    onFocus: Function,
    onMousedown: Function
  }),
  {
    ElCollection: Kn,
    ElCollectionItem: Gn,
    COLLECTION_INJECTION_KEY: Le,
    COLLECTION_ITEM_INJECTION_KEY: Hn
  } = dt('RovingFocusGroup'),
  De = Symbol('elRovingFocusGroup'),
  pt = Symbol('elRovingFocusGroupItem'),
  Vn = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last'
  },
  Un = (e, t) => {
    if (t !== 'rtl') return e
    switch (e) {
      case $.right:
        return $.left
      case $.left:
        return $.right
      default:
        return e
    }
  },
  jn = (e, t, o) => {
    const n = Un(e.key, o)
    if (
      !(t === 'vertical' && [$.left, $.right].includes(n)) &&
      !(t === 'horizontal' && [$.up, $.down].includes(n))
    )
      return Vn[n]
  },
  Yn = (e, t) => e.map((o, n) => e[(n + t) % e.length]),
  ze = (e) => {
    const { activeElement: t } = document
    for (const o of e)
      if (o === t || (o.focus(), t !== document.activeElement)) return
  },
  Je = 'currentTabIdChange',
  qe = 'rovingFocusGroup.entryFocus',
  Wn = { bubbles: !1, cancelable: !0 },
  Jn = S({
    name: 'ElRovingFocusGroupImpl',
    inheritAttrs: !1,
    props: zn,
    emits: [Je, 'entryFocus'],
    setup(e, { emit: t }) {
      var o
      const n = T(
          (o = e.currentTabId || e.defaultCurrentTabId) != null ? o : null
        ),
        l = T(!1),
        d = T(!1),
        s = T(null),
        { getItems: a } = A(Le, void 0),
        r = b(() => [{ outline: 'none' }, e.style]),
        u = (w) => {
          t(Je, w)
        },
        f = () => {
          l.value = !0
        },
        v = oe(
          (w) => {
            var M
            ;(M = e.onMousedown) == null || M.call(e, w)
          },
          () => {
            d.value = !0
          }
        ),
        y = oe(
          (w) => {
            var M
            ;(M = e.onFocus) == null || M.call(e, w)
          },
          (w) => {
            const M = !g(d),
              { target: H, currentTarget: P } = w
            if (H === P && M && !g(l)) {
              const Y = new Event(qe, Wn)
              if ((P == null || P.dispatchEvent(Y), !Y.defaultPrevented)) {
                const R = a().filter((z) => z.focusable),
                  J = R.find((z) => z.active),
                  O = R.find((z) => z.id === g(n)),
                  ee = [J, O, ...R].filter(Boolean).map((z) => z.ref)
                ze(ee)
              }
            }
            d.value = !1
          }
        ),
        i = oe(
          (w) => {
            var M
            ;(M = e.onBlur) == null || M.call(e, w)
          },
          () => {
            l.value = !1
          }
        ),
        C = (...w) => {
          t('entryFocus', ...w)
        }
      se(De, {
        currentTabbedId: $t(n),
        loop: de(e, 'loop'),
        tabIndex: b(() => (g(l) ? -1 : 0)),
        rovingFocusGroupRef: s,
        rovingFocusGroupRootStyle: r,
        orientation: de(e, 'orientation'),
        dir: de(e, 'dir'),
        onItemFocus: u,
        onItemShiftTab: f,
        onBlur: i,
        onFocus: y,
        onMousedown: v
      }),
        ce(
          () => e.currentTabId,
          (w) => {
            n.value = w ?? null
          }
        ),
        Mt(s, qe, C)
    }
  })
function qn(e, t, o, n, l, d) {
  return N(e.$slots, 'default')
}
var xn = D(Jn, [
  ['render', qn],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue'
  ]
])
const Zn = S({
  name: 'ElRovingFocusGroup',
  components: { ElFocusGroupCollection: Kn, ElRovingFocusGroupImpl: xn }
})
function Qn(e, t, o, n, l, d) {
  const s = G('el-roving-focus-group-impl'),
    a = G('el-focus-group-collection')
  return (
    k(),
    ne(a, null, {
      default: p(() => [
        h(
          s,
          Tt(St(e.$attrs)),
          { default: p(() => [N(e.$slots, 'default')]), _: 3 },
          16
        )
      ]),
      _: 3
    })
  )
}
var Xn = D(Zn, [
  ['render', Qn],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue'
  ]
])
const eo = S({
  components: { ElRovingFocusCollectionItem: Gn },
  props: {
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !1 }
  },
  emits: ['mousedown', 'focus', 'keydown'],
  setup(e, { emit: t }) {
    const {
        currentTabbedId: o,
        loop: n,
        onItemFocus: l,
        onItemShiftTab: d
      } = A(De, void 0),
      { getItems: s } = A(Le, void 0),
      a = ot(),
      r = T(null),
      u = oe(
        (i) => {
          t('mousedown', i)
        },
        (i) => {
          e.focusable ? l(g(a)) : i.preventDefault()
        }
      ),
      f = oe(
        (i) => {
          t('focus', i)
        },
        () => {
          l(g(a))
        }
      ),
      v = oe(
        (i) => {
          t('keydown', i)
        },
        (i) => {
          const { key: C, shiftKey: w, target: M, currentTarget: H } = i
          if (C === $.tab && w) {
            d()
            return
          }
          if (M !== H) return
          const P = jn(i)
          if (P) {
            i.preventDefault()
            let R = s()
              .filter((J) => J.focusable)
              .map((J) => J.ref)
            switch (P) {
              case 'last': {
                R.reverse()
                break
              }
              case 'prev':
              case 'next': {
                P === 'prev' && R.reverse()
                const J = R.indexOf(H)
                R = n.value ? Yn(R, J + 1) : R.slice(J + 1)
                break
              }
            }
            et(() => {
              ze(R)
            })
          }
        }
      ),
      y = b(() => o.value === g(a))
    return (
      se(pt, {
        rovingFocusGroupItemRef: r,
        tabIndex: b(() => (g(y) ? 0 : -1)),
        handleMousedown: u,
        handleFocus: f,
        handleKeydown: v
      }),
      { id: a, handleKeydown: v, handleFocus: f, handleMousedown: u }
    )
  }
})
function to(e, t, o, n, l, d) {
  const s = G('el-roving-focus-collection-item')
  return (
    k(),
    ne(
      s,
      { id: e.id, focusable: e.focusable, active: e.active },
      { default: p(() => [N(e.$slots, 'default')]), _: 3 },
      8,
      ['id', 'focusable', 'active']
    )
  )
}
var no = D(eo, [
  ['render', to],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue'
  ]
])
const oo = re({
    trigger: en.trigger,
    effect: { ...Ye.effect, default: 'light' },
    type: { type: Q(String) },
    placement: { type: Q(String), default: 'bottom' },
    popperOptions: { type: Q(Object), default: () => ({}) },
    id: String,
    size: { type: String, default: '' },
    splitButton: Boolean,
    hideOnClick: { type: Boolean, default: !0 },
    loop: { type: Boolean, default: !0 },
    showTimeout: { type: Number, default: 150 },
    hideTimeout: { type: Number, default: 150 },
    tabindex: { type: Q([Number, String]), default: 0 },
    maxHeight: { type: Q([Number, String]), default: '' },
    popperClass: { type: String, default: '' },
    disabled: { type: Boolean, default: !1 },
    role: { type: String, default: 'menu' },
    buttonProps: { type: Q(Object) },
    teleported: Ye.teleported
  }),
  mt = re({
    command: { type: [Object, String, Number], default: () => ({}) },
    disabled: Boolean,
    divided: Boolean,
    textValue: String,
    icon: { type: fe }
  }),
  lo = re({ onKeydown: { type: Q(Function) } }),
  so = [$.down, $.pageDown, $.home],
  ft = [$.up, $.pageUp, $.end],
  ao = [...so, ...ft],
  {
    ElCollection: ro,
    ElCollectionItem: uo,
    COLLECTION_INJECTION_KEY: io,
    COLLECTION_ITEM_INJECTION_KEY: co
  } = dt('Dropdown'),
  Se = Symbol('elDropdown'),
  { ButtonGroup: po } = lt,
  mo = S({
    name: 'ElDropdown',
    components: {
      ElButton: lt,
      ElButtonGroup: po,
      ElScrollbar: tn,
      ElDropdownCollection: ro,
      ElTooltip: Ae,
      ElRovingFocusGroup: Xn,
      ElOnlyChild: nn,
      ElIcon: he,
      ArrowDown: tt
    },
    props: oo,
    emits: ['visible-change', 'click', 'command'],
    setup(e, { emit: t }) {
      const o = be(),
        n = L('dropdown'),
        { t: l } = kt(),
        d = T(),
        s = T(),
        a = T(null),
        r = T(null),
        u = T(null),
        f = T(null),
        v = T(!1),
        y = [$.enter, $.space, $.down],
        i = b(() => ({ maxHeight: Ze(e.maxHeight) })),
        C = b(() => [n.m(R.value)]),
        w = ot().value,
        M = b(() => e.id || w)
      ce(
        [d, de(e, 'trigger')],
        ([_, F], [W]) => {
          var Z, E, B
          const U = Nt(F) ? F : [F]
          ;(Z = W == null ? void 0 : W.$el) != null &&
            Z.removeEventListener &&
            W.$el.removeEventListener('pointerenter', O),
            (E = _ == null ? void 0 : _.$el) != null &&
              E.removeEventListener &&
              _.$el.removeEventListener('pointerenter', O),
            (B = _ == null ? void 0 : _.$el) != null &&
              B.addEventListener &&
              U.includes('hover') &&
              _.$el.addEventListener('pointerenter', O)
        },
        { immediate: !0 }
      ),
        Me(() => {
          var _, F
          ;(F = (_ = d.value) == null ? void 0 : _.$el) != null &&
            F.removeEventListener &&
            d.value.$el.removeEventListener('pointerenter', O)
        })
      function H() {
        P()
      }
      function P() {
        var _
        ;(_ = a.value) == null || _.onClose()
      }
      function Y() {
        var _
        ;(_ = a.value) == null || _.onOpen()
      }
      const R = xt()
      function J(..._) {
        t('command', ..._)
      }
      function O() {
        var _, F
        ;(F = (_ = d.value) == null ? void 0 : _.$el) == null || F.focus()
      }
      function q() {}
      function ee() {
        const _ = g(r)
        _ == null || _.focus(), (f.value = null)
      }
      function z(_) {
        f.value = _
      }
      function le(_) {
        v.value || (_.preventDefault(), _.stopImmediatePropagation())
      }
      function c() {
        t('visible-change', !0)
      }
      function m(_) {
        ;(_ == null ? void 0 : _.type) === 'keydown' && r.value.focus()
      }
      function I() {
        t('visible-change', !1)
      }
      return (
        se(Se, {
          contentRef: r,
          role: b(() => e.role),
          triggerId: M,
          isUsingKeyboard: v,
          onItemEnter: q,
          onItemLeave: ee
        }),
        se('elDropdown', {
          instance: o,
          dropdownSize: R,
          handleClick: H,
          commandHandler: J,
          trigger: de(e, 'trigger'),
          hideOnClick: de(e, 'hideOnClick')
        }),
        {
          t: l,
          ns: n,
          scrollbar: u,
          wrapStyle: i,
          dropdownTriggerKls: C,
          dropdownSize: R,
          triggerId: M,
          triggerKeys: y,
          currentTabId: f,
          handleCurrentTabIdChange: z,
          handlerMainButtonClick: (_) => {
            t('click', _)
          },
          handleEntryFocus: le,
          handleClose: P,
          handleOpen: Y,
          handleBeforeShowTooltip: c,
          handleShowTooltip: m,
          handleBeforeHideTooltip: I,
          onFocusAfterTrapped: (_) => {
            var F, W
            _.preventDefault(),
              (W = (F = r.value) == null ? void 0 : F.focus) == null ||
                W.call(F, { preventScroll: !0 })
          },
          popperRef: a,
          contentRef: r,
          triggeringElementRef: d,
          referenceElementRef: s
        }
      )
    }
  })
function fo(e, t, o, n, l, d) {
  var s
  const a = G('el-dropdown-collection'),
    r = G('el-roving-focus-group'),
    u = G('el-scrollbar'),
    f = G('el-only-child'),
    v = G('el-tooltip'),
    y = G('el-button'),
    i = G('arrow-down'),
    C = G('el-icon'),
    w = G('el-button-group')
  return (
    k(),
    x(
      'div',
      { class: te([e.ns.b(), e.ns.is('disabled', e.disabled)]) },
      [
        h(
          v,
          {
            ref: 'popperRef',
            role: e.role,
            effect: e.effect,
            'fallback-placements': ['bottom', 'top'],
            'popper-options': e.popperOptions,
            'gpu-acceleration': !1,
            'hide-after': e.trigger === 'hover' ? e.hideTimeout : 0,
            'manual-mode': !0,
            placement: e.placement,
            'popper-class': [e.ns.e('popper'), e.popperClass],
            'reference-element':
              (s = e.referenceElementRef) == null ? void 0 : s.$el,
            trigger: e.trigger,
            'trigger-keys': e.triggerKeys,
            'trigger-target-el': e.contentRef,
            'show-after': e.trigger === 'hover' ? e.showTimeout : 0,
            'stop-popper-mouse-event': !1,
            'virtual-ref': e.triggeringElementRef,
            'virtual-triggering': e.splitButton,
            disabled: e.disabled,
            transition: `${e.ns.namespace.value}-zoom-in-top`,
            teleported: e.teleported,
            pure: '',
            persistent: '',
            onBeforeShow: e.handleBeforeShowTooltip,
            onShow: e.handleShowTooltip,
            onBeforeHide: e.handleBeforeHideTooltip
          },
          Ot(
            {
              content: p(() => [
                h(
                  u,
                  {
                    ref: 'scrollbar',
                    'wrap-style': e.wrapStyle,
                    tag: 'div',
                    'view-class': e.ns.e('list')
                  },
                  {
                    default: p(() => [
                      h(
                        r,
                        {
                          loop: e.loop,
                          'current-tab-id': e.currentTabId,
                          orientation: 'horizontal',
                          onCurrentTabIdChange: e.handleCurrentTabIdChange,
                          onEntryFocus: e.handleEntryFocus
                        },
                        {
                          default: p(() => [
                            h(a, null, {
                              default: p(() => [N(e.$slots, 'dropdown')]),
                              _: 3
                            })
                          ]),
                          _: 3
                        },
                        8,
                        [
                          'loop',
                          'current-tab-id',
                          'onCurrentTabIdChange',
                          'onEntryFocus'
                        ]
                      )
                    ]),
                    _: 3
                  },
                  8,
                  ['wrap-style', 'view-class']
                )
              ]),
              _: 2
            },
            [
              e.splitButton
                ? void 0
                : {
                    name: 'default',
                    fn: p(() => [
                      h(
                        f,
                        {
                          id: e.triggerId,
                          ref: 'triggeringElementRef',
                          role: 'button',
                          tabindex: e.tabindex
                        },
                        { default: p(() => [N(e.$slots, 'default')]), _: 3 },
                        8,
                        ['id', 'tabindex']
                      )
                    ])
                  }
            ]
          ),
          1032,
          [
            'role',
            'effect',
            'popper-options',
            'hide-after',
            'placement',
            'popper-class',
            'reference-element',
            'trigger',
            'trigger-keys',
            'trigger-target-el',
            'show-after',
            'virtual-ref',
            'virtual-triggering',
            'disabled',
            'transition',
            'teleported',
            'onBeforeShow',
            'onShow',
            'onBeforeHide'
          ]
        ),
        e.splitButton
          ? (k(),
            ne(
              w,
              { key: 0 },
              {
                default: p(() => [
                  h(
                    y,
                    pe({ ref: 'referenceElementRef' }, e.buttonProps, {
                      size: e.dropdownSize,
                      type: e.type,
                      disabled: e.disabled,
                      tabindex: e.tabindex,
                      onClick: e.handlerMainButtonClick
                    }),
                    { default: p(() => [N(e.$slots, 'default')]), _: 3 },
                    16,
                    ['size', 'type', 'disabled', 'tabindex', 'onClick']
                  ),
                  h(
                    y,
                    pe(
                      { id: e.triggerId, ref: 'triggeringElementRef' },
                      e.buttonProps,
                      {
                        role: 'button',
                        size: e.dropdownSize,
                        type: e.type,
                        class: e.ns.e('caret-button'),
                        disabled: e.disabled,
                        tabindex: e.tabindex,
                        'aria-label': e.t('el.dropdown.toggleDropdown')
                      }
                    ),
                    {
                      default: p(() => [
                        h(
                          C,
                          { class: te(e.ns.e('icon')) },
                          { default: p(() => [h(i)]), _: 1 },
                          8,
                          ['class']
                        )
                      ]),
                      _: 1
                    },
                    16,
                    [
                      'id',
                      'size',
                      'type',
                      'class',
                      'disabled',
                      'tabindex',
                      'aria-label'
                    ]
                  )
                ]),
                _: 3
              }
            ))
          : Pe('v-if', !0)
      ],
      2
    )
  )
}
var vo = D(mo, [
  ['render', fo],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue'
  ]
])
const ho = S({
    name: 'DropdownItemImpl',
    components: { ElIcon: he },
    props: mt,
    emits: ['pointermove', 'pointerleave', 'click', 'clickimpl'],
    setup(e, { emit: t }) {
      const o = L('dropdown'),
        { role: n } = A(Se, void 0),
        { collectionItemRef: l } = A(co, void 0),
        { collectionItemRef: d } = A(Hn, void 0),
        {
          rovingFocusGroupItemRef: s,
          tabIndex: a,
          handleFocus: r,
          handleKeydown: u,
          handleMousedown: f
        } = A(pt, void 0),
        v = st(l, d, s),
        y = b(() =>
          n.value === 'menu'
            ? 'menuitem'
            : n.value === 'navigation'
            ? 'link'
            : 'button'
        ),
        i = oe((C) => {
          const { code: w } = C
          if (w === $.enter || w === $.space)
            return (
              C.preventDefault(),
              C.stopImmediatePropagation(),
              t('clickimpl', C),
              !0
            )
        }, u)
      return {
        ns: o,
        itemRef: v,
        dataset: { [ct]: '' },
        role: y,
        tabIndex: a,
        handleFocus: r,
        handleKeydown: i,
        handleMousedown: f
      }
    }
  }),
  _o = ['aria-disabled', 'tabindex', 'role']
function go(e, t, o, n, l, d) {
  const s = G('el-icon')
  return (
    k(),
    x(
      Te,
      null,
      [
        e.divided
          ? (k(),
            x(
              'li',
              pe(
                {
                  key: 0,
                  role: 'separator',
                  class: e.ns.bem('menu', 'item', 'divided')
                },
                e.$attrs
              ),
              null,
              16
            ))
          : Pe('v-if', !0),
        X(
          'li',
          pe(
            { ref: e.itemRef },
            { ...e.dataset, ...e.$attrs },
            {
              'aria-disabled': e.disabled,
              class: [e.ns.be('menu', 'item'), e.ns.is('disabled', e.disabled)],
              tabindex: e.tabIndex,
              role: e.role,
              onClick: t[0] || (t[0] = (a) => e.$emit('clickimpl', a)),
              onFocus:
                t[1] || (t[1] = (...a) => e.handleFocus && e.handleFocus(...a)),
              onKeydown:
                t[2] ||
                (t[2] = Fe(
                  (...a) => e.handleKeydown && e.handleKeydown(...a),
                  ['self']
                )),
              onMousedown:
                t[3] ||
                (t[3] = (...a) => e.handleMousedown && e.handleMousedown(...a)),
              onPointermove: t[4] || (t[4] = (a) => e.$emit('pointermove', a)),
              onPointerleave: t[5] || (t[5] = (a) => e.$emit('pointerleave', a))
            }
          ),
          [
            e.icon
              ? (k(),
                ne(
                  s,
                  { key: 0 },
                  { default: p(() => [(k(), ne(Qe(e.icon)))]), _: 1 }
                ))
              : Pe('v-if', !0),
            N(e.$slots, 'default')
          ],
          16,
          _o
        )
      ],
      64
    )
  )
}
var bo = D(ho, [
  ['render', go],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue'
  ]
])
const vt = () => {
    const e = A('elDropdown', {}),
      t = b(() => (e == null ? void 0 : e.dropdownSize))
    return { elDropdown: e, _elDropdownSize: t }
  },
  yo = S({
    name: 'ElDropdownItem',
    components: {
      ElDropdownCollectionItem: uo,
      ElRovingFocusItem: no,
      ElDropdownItemImpl: bo
    },
    inheritAttrs: !1,
    props: mt,
    emits: ['pointermove', 'pointerleave', 'click'],
    setup(e, { emit: t, attrs: o }) {
      const { elDropdown: n } = vt(),
        l = be(),
        d = T(null),
        s = b(() => {
          var i, C
          return (C = (i = g(d)) == null ? void 0 : i.textContent) != null
            ? C
            : ''
        }),
        { onItemEnter: a, onItemLeave: r } = A(Se, void 0),
        u = oe(
          (i) => (t('pointermove', i), i.defaultPrevented),
          We((i) => {
            if (e.disabled) {
              r(i)
              return
            }
            const C = i.currentTarget
            C === document.activeElement ||
              C.contains(document.activeElement) ||
              (a(i), i.defaultPrevented || C == null || C.focus())
          })
        ),
        f = oe(
          (i) => (t('pointerleave', i), i.defaultPrevented),
          We((i) => {
            r(i)
          })
        ),
        v = oe(
          (i) => {
            if (!e.disabled)
              return t('click', i), i.type !== 'keydown' && i.defaultPrevented
          },
          (i) => {
            var C, w, M
            if (e.disabled) {
              i.stopImmediatePropagation()
              return
            }
            ;(C = n == null ? void 0 : n.hideOnClick) != null &&
              C.value &&
              ((w = n.handleClick) == null || w.call(n)),
              (M = n.commandHandler) == null || M.call(n, e.command, l, i)
          }
        ),
        y = b(() => ({ ...e, ...o }))
      return {
        handleClick: v,
        handlePointerMove: u,
        handlePointerLeave: f,
        textContent: s,
        propsAndAttrs: y
      }
    }
  })
function wo(e, t, o, n, l, d) {
  var s
  const a = G('el-dropdown-item-impl'),
    r = G('el-roving-focus-item'),
    u = G('el-dropdown-collection-item')
  return (
    k(),
    ne(
      u,
      {
        disabled: e.disabled,
        'text-value': (s = e.textValue) != null ? s : e.textContent
      },
      {
        default: p(() => [
          h(
            r,
            { focusable: !e.disabled },
            {
              default: p(() => [
                h(
                  a,
                  pe(e.propsAndAttrs, {
                    onPointerleave: e.handlePointerLeave,
                    onPointermove: e.handlePointerMove,
                    onClickimpl: e.handleClick
                  }),
                  { default: p(() => [N(e.$slots, 'default')]), _: 3 },
                  16,
                  ['onPointerleave', 'onPointermove', 'onClickimpl']
                )
              ]),
              _: 3
            },
            8,
            ['focusable']
          )
        ]),
        _: 3
      },
      8,
      ['disabled', 'text-value']
    )
  )
}
var ht = D(yo, [
  ['render', wo],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue'
  ]
])
const Io = S({
    name: 'ElDropdownMenu',
    props: lo,
    setup(e) {
      const t = L('dropdown'),
        { _elDropdownSize: o } = vt(),
        n = o.value,
        { focusTrapRef: l, onKeydown: d } = A(on, void 0),
        { contentRef: s, role: a, triggerId: r } = A(Se, void 0),
        { collectionRef: u, getItems: f } = A(io, void 0),
        {
          rovingFocusGroupRef: v,
          rovingFocusGroupRootStyle: y,
          tabIndex: i,
          onBlur: C,
          onFocus: w,
          onMousedown: M
        } = A(De, void 0),
        { collectionRef: H } = A(Le, void 0),
        P = b(() => [t.b('menu'), t.bm('menu', n == null ? void 0 : n.value)]),
        Y = st(s, u, l, v, H),
        R = oe(
          (O) => {
            var q
            ;(q = e.onKeydown) == null || q.call(e, O)
          },
          (O) => {
            const { currentTarget: q, code: ee, target: z } = O
            if (
              (q.contains(z),
              $.tab === ee && O.stopImmediatePropagation(),
              O.preventDefault(),
              z !== g(s) || !ao.includes(ee))
            )
              return
            const c = f()
              .filter((m) => !m.disabled)
              .map((m) => m.ref)
            ft.includes(ee) && c.reverse(), ze(c)
          }
        )
      return {
        size: n,
        rovingFocusGroupRootStyle: y,
        tabIndex: i,
        dropdownKls: P,
        role: a,
        triggerId: r,
        dropdownListWrapperRef: Y,
        handleKeydown: (O) => {
          R(O), d(O)
        },
        onBlur: C,
        onFocus: w,
        onMousedown: M
      }
    }
  }),
  Co = ['role', 'aria-labelledby']
function Eo(e, t, o, n, l, d) {
  return (
    k(),
    x(
      'ul',
      {
        ref: e.dropdownListWrapperRef,
        class: te(e.dropdownKls),
        style: ve(e.rovingFocusGroupRootStyle),
        tabindex: -1,
        role: e.role,
        'aria-labelledby': e.triggerId,
        onBlur: t[0] || (t[0] = (...s) => e.onBlur && e.onBlur(...s)),
        onFocus: t[1] || (t[1] = (...s) => e.onFocus && e.onFocus(...s)),
        onKeydown:
          t[2] ||
          (t[2] = Fe(
            (...s) => e.handleKeydown && e.handleKeydown(...s),
            ['self']
          )),
        onMousedown:
          t[3] ||
          (t[3] = Fe((...s) => e.onMousedown && e.onMousedown(...s), ['self']))
      },
      [N(e.$slots, 'default')],
      46,
      Co
    )
  )
}
var _t = D(Io, [
  ['render', Eo],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue'
  ]
])
const $o = $e(vo, { DropdownItem: ht, DropdownMenu: _t }),
  Mo = ae(ht),
  To = ae(_t)
let So = class {
    constructor(t, o) {
      ;(this.parent = t),
        (this.domNode = o),
        (this.subIndex = 0),
        (this.subIndex = 0),
        this.init()
    }
    init() {
      ;(this.subMenuItems = this.domNode.querySelectorAll('li')),
        this.addListeners()
    }
    gotoSubIndex(t) {
      t === this.subMenuItems.length
        ? (t = 0)
        : t < 0 && (t = this.subMenuItems.length - 1),
        this.subMenuItems[t].focus(),
        (this.subIndex = t)
    }
    addListeners() {
      const t = this.parent.domNode
      Array.prototype.forEach.call(this.subMenuItems, (o) => {
        o.addEventListener('keydown', (n) => {
          let l = !1
          switch (n.code) {
            case $.down: {
              this.gotoSubIndex(this.subIndex + 1), (l = !0)
              break
            }
            case $.up: {
              this.gotoSubIndex(this.subIndex - 1), (l = !0)
              break
            }
            case $.tab: {
              Ie(t, 'mouseleave')
              break
            }
            case $.enter:
            case $.space: {
              ;(l = !0), n.currentTarget.click()
              break
            }
          }
          return l && (n.preventDefault(), n.stopPropagation()), !1
        })
      })
    }
  },
  ko = class {
    constructor(t, o) {
      ;(this.domNode = t),
        (this.submenu = null),
        (this.submenu = null),
        this.init(o)
    }
    init(t) {
      this.domNode.setAttribute('tabindex', '0')
      const o = this.domNode.querySelector(`.${t}-menu`)
      o && (this.submenu = new So(this, o)), this.addListeners()
    }
    addListeners() {
      this.domNode.addEventListener('keydown', (t) => {
        let o = !1
        switch (t.code) {
          case $.down: {
            Ie(t.currentTarget, 'mouseenter'),
              this.submenu && this.submenu.gotoSubIndex(0),
              (o = !0)
            break
          }
          case $.up: {
            Ie(t.currentTarget, 'mouseenter'),
              this.submenu &&
                this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
              (o = !0)
            break
          }
          case $.tab: {
            Ie(t.currentTarget, 'mouseleave')
            break
          }
          case $.enter:
          case $.space: {
            ;(o = !0), t.currentTarget.click()
            break
          }
        }
        o && t.preventDefault()
      })
    }
  },
  Oo = class {
    constructor(t, o) {
      ;(this.domNode = t), this.init(o)
    }
    init(t) {
      const o = this.domNode.childNodes
      Array.from(o).forEach((n) => {
        n.nodeType === 1 && new ko(n, t)
      })
    }
  }
const No = S({
  name: 'ElMenuCollapseTransition',
  setup() {
    const e = L('menu')
    return {
      listeners: {
        onBeforeEnter: (o) => (o.style.opacity = '0.2'),
        onEnter(o, n) {
          ye(o, `${e.namespace.value}-opacity-transition`),
            (o.style.opacity = '1'),
            n()
        },
        onAfterEnter(o) {
          Oe(o, `${e.namespace.value}-opacity-transition`),
            (o.style.opacity = '')
        },
        onBeforeLeave(o) {
          o.dataset || (o.dataset = {}),
            Bt(o, e.m('collapse'))
              ? (Oe(o, e.m('collapse')),
                (o.dataset.oldOverflow = o.style.overflow),
                (o.dataset.scrollWidth = o.clientWidth.toString()),
                ye(o, e.m('collapse')))
              : (ye(o, e.m('collapse')),
                (o.dataset.oldOverflow = o.style.overflow),
                (o.dataset.scrollWidth = o.clientWidth.toString()),
                Oe(o, e.m('collapse'))),
            (o.style.width = `${o.scrollWidth}px`),
            (o.style.overflow = 'hidden')
        },
        onLeave(o) {
          ye(o, 'horizontal-collapse-transition'),
            (o.style.width = `${o.dataset.scrollWidth}px`)
        }
      }
    }
  }
})
function Bo(e, t, o, n, l, d) {
  return (
    k(),
    ne(
      Xe,
      pe({ mode: 'out-in' }, e.listeners),
      { default: p(() => [N(e.$slots, 'default')]), _: 3 },
      16
    )
  )
}
var Po = D(No, [
  ['render', Bo],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue'
  ]
])
function gt(e, t) {
  const o = b(() => {
    let l = e.parent
    const d = [t.value]
    for (; l.type.name !== 'ElMenu'; )
      l.props.index && d.unshift(l.props.index), (l = l.parent)
    return d
  })
  return {
    parentMenu: b(() => {
      let l = e.parent
      for (; l && !['ElMenu', 'ElSubMenu'].includes(l.type.name); ) l = l.parent
      return l
    }),
    indexPath: o
  }
}
function Fo(e) {
  return b(() => {
    const o = e.backgroundColor
    return o ? new Zt(o).shade(20).toString() : ''
  })
}
const bt = (e, t) => {
    const o = L('menu')
    return b(() =>
      o.cssVarBlock({
        'text-color': e.textColor || '',
        'hover-text-color': e.textColor || '',
        'bg-color': e.backgroundColor || '',
        'hover-bg-color': Fo(e).value || '',
        'active-color': e.activeTextColor || '',
        level: `${t}`
      })
    )
  },
  Ro = re({
    index: { type: String, required: !0 },
    showTimeout: { type: Number, default: 300 },
    hideTimeout: { type: Number, default: 300 },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: { type: Boolean, default: void 0 },
    teleported: { type: Boolean, default: void 0 },
    popperOffset: { type: Number, default: 6 },
    expandCloseIcon: { type: fe },
    expandOpenIcon: { type: fe },
    collapseCloseIcon: { type: fe },
    collapseOpenIcon: { type: fe }
  }),
  we = 'ElSubMenu'
var Ke = S({
  name: we,
  props: Ro,
  setup(e, { slots: t, expose: o }) {
    Qt(
      {
        from: 'popper-append-to-body',
        replacement: 'teleported',
        scope: we,
        version: '2.3.0',
        ref: 'https://element-plus.org/en-US/component/menu.html#submenu-attributes'
      },
      b(() => e.popperAppendToBody !== void 0)
    )
    const n = be(),
      { indexPath: l, parentMenu: d } = gt(
        n,
        b(() => e.index)
      ),
      s = L('menu'),
      a = L('sub-menu'),
      r = A('rootMenu')
    r || Ee(we, 'can not inject root menu')
    const u = A(`subMenu:${d.value.uid}`)
    u || Ee(we, 'can not inject sub menu')
    const f = T({}),
      v = T({})
    let y
    const i = T(!1),
      C = T(),
      w = T(null),
      M = b(() =>
        c.value === 'horizontal' && P.value ? 'bottom-start' : 'right-start'
      ),
      H = b(() =>
        (c.value === 'horizontal' && P.value) ||
        (c.value === 'vertical' && !r.props.collapse)
          ? e.expandCloseIcon && e.expandOpenIcon
            ? O.value
              ? e.expandOpenIcon
              : e.expandCloseIcon
            : tt
          : e.collapseCloseIcon && e.collapseOpenIcon
          ? O.value
            ? e.collapseOpenIcon
            : e.collapseCloseIcon
          : Pt
      ),
      P = b(() => u.level === 0),
      Y = b(() => {
        var E
        const B = (E = e.teleported) != null ? E : e.popperAppendToBody
        return B === void 0 ? P.value : B
      }),
      R = b(() =>
        r.props.collapse
          ? `${s.namespace.value}-zoom-in-left`
          : `${s.namespace.value}-zoom-in-top`
      ),
      J = b(() =>
        c.value === 'horizontal' && P.value
          ? [
              'bottom-start',
              'bottom-end',
              'top-start',
              'top-end',
              'right-start',
              'left-start'
            ]
          : [
              'right-start',
              'left-start',
              'bottom-start',
              'bottom-end',
              'top-start',
              'top-end'
            ]
      ),
      O = b(() => r.openedMenus.includes(e.index)),
      q = b(() => {
        let E = !1
        return (
          Object.values(f.value).forEach((B) => {
            B.active && (E = !0)
          }),
          Object.values(v.value).forEach((B) => {
            B.active && (E = !0)
          }),
          E
        )
      }),
      ee = b(() => r.props.backgroundColor || ''),
      z = b(() => r.props.activeTextColor || ''),
      le = b(() => r.props.textColor || ''),
      c = b(() => r.props.mode),
      m = Re({ index: e.index, indexPath: l, active: q }),
      I = bt(r.props, u.level + 1),
      V = b(() =>
        c.value !== 'horizontal'
          ? { color: le.value }
          : {
              borderBottomColor: q.value
                ? r.props.activeTextColor
                  ? z.value
                  : ''
                : 'transparent',
              color: q.value ? z.value : le.value
            }
      ),
      K = () => {
        var E, B, U
        return (U =
          (B = (E = w.value) == null ? void 0 : E.popperRef) == null
            ? void 0
            : B.popperInstanceRef) == null
          ? void 0
          : U.destroy()
      },
      _ = (E) => {
        E || K()
      },
      F = () => {
        ;(r.props.menuTrigger === 'hover' && r.props.mode === 'horizontal') ||
          (r.props.collapse && r.props.mode === 'vertical') ||
          e.disabled ||
          r.handleSubMenuClick({
            index: e.index,
            indexPath: l.value,
            active: q.value
          })
      },
      W = (E, B = e.showTimeout) => {
        var U
        E.type !== 'focus' &&
          ((r.props.menuTrigger === 'click' && r.props.mode === 'horizontal') ||
            (!r.props.collapse && r.props.mode === 'vertical') ||
            e.disabled ||
            ((u.mouseInChild.value = !0),
            y == null || y(),
            ({ stop: y } = Ge(() => {
              r.openMenu(e.index, l.value)
            }, B)),
            Y.value &&
              ((U = d.value.vnode.el) == null ||
                U.dispatchEvent(new MouseEvent('mouseenter')))))
      },
      Z = (E = !1) => {
        var B, U
        ;(r.props.menuTrigger === 'click' && r.props.mode === 'horizontal') ||
          (!r.props.collapse && r.props.mode === 'vertical') ||
          (y == null || y(),
          (u.mouseInChild.value = !1),
          ({ stop: y } = Ge(
            () => !i.value && r.closeMenu(e.index, l.value),
            e.hideTimeout
          )),
          Y.value &&
            E &&
            ((B = n.parent) == null ? void 0 : B.type.name) === 'ElSubMenu' &&
            ((U = u.handleMouseleave) == null || U.call(u, !0)))
      }
    ce(
      () => r.props.collapse,
      (E) => _(!!E)
    )
    {
      const E = (U) => {
          v.value[U.index] = U
        },
        B = (U) => {
          delete v.value[U.index]
        }
      se(`subMenu:${n.uid}`, {
        addSubMenu: E,
        removeSubMenu: B,
        handleMouseleave: Z,
        mouseInChild: i,
        level: u.level + 1
      })
    }
    return (
      o({ opened: O }),
      ge(() => {
        r.addSubMenu(m), u.addSubMenu(m)
      }),
      Me(() => {
        u.removeSubMenu(m), r.removeSubMenu(m)
      }),
      () => {
        var E
        const B = [
            (E = t.title) == null ? void 0 : E.call(t),
            j(
              he,
              {
                class: a.e('icon-arrow'),
                style: {
                  transform: O.value
                    ? (e.expandCloseIcon && e.expandOpenIcon) ||
                      (e.collapseCloseIcon &&
                        e.collapseOpenIcon &&
                        r.props.collapse)
                      ? 'none'
                      : 'rotateZ(180deg)'
                    : 'none'
                }
              },
              {
                default: () =>
                  ie(H.value) ? j(n.appContext.components[H.value]) : j(H.value)
              }
            )
          ],
          U = r.isMenuPopup
            ? j(
                Ae,
                {
                  ref: w,
                  visible: O.value,
                  effect: 'light',
                  pure: !0,
                  offset: e.popperOffset,
                  showArrow: !1,
                  persistent: !0,
                  popperClass: e.popperClass,
                  placement: M.value,
                  teleported: Y.value,
                  fallbackPlacements: J.value,
                  transition: R.value,
                  gpuAcceleration: !1
                },
                {
                  content: () => {
                    var _e
                    return j(
                      'div',
                      {
                        class: [
                          s.m(c.value),
                          s.m('popup-container'),
                          e.popperClass
                        ],
                        onMouseenter: (ke) => W(ke, 100),
                        onMouseleave: () => Z(!0),
                        onFocus: (ke) => W(ke, 100)
                      },
                      [
                        j(
                          'ul',
                          {
                            class: [
                              s.b(),
                              s.m('popup'),
                              s.m(`popup-${M.value}`)
                            ],
                            style: I.value
                          },
                          [(_e = t.default) == null ? void 0 : _e.call(t)]
                        )
                      ]
                    )
                  },
                  default: () =>
                    j(
                      'div',
                      {
                        class: a.e('title'),
                        style: [V.value, { backgroundColor: ee.value }],
                        onClick: F
                      },
                      B
                    )
                }
              )
            : j(Te, {}, [
                j(
                  'div',
                  {
                    class: a.e('title'),
                    style: [V.value, { backgroundColor: ee.value }],
                    ref: C,
                    onClick: F
                  },
                  B
                ),
                j(
                  hn,
                  {},
                  {
                    default: () => {
                      var _e
                      return Ft(
                        j(
                          'ul',
                          {
                            role: 'menu',
                            class: [s.b(), s.m('inline')],
                            style: I.value
                          },
                          [(_e = t.default) == null ? void 0 : _e.call(t)]
                        ),
                        [[Rt, O.value]]
                      )
                    }
                  }
                )
              ])
        return j(
          'li',
          {
            class: [
              a.b(),
              a.is('active', q.value),
              a.is('opened', O.value),
              a.is('disabled', e.disabled)
            ],
            role: 'menuitem',
            ariaHaspopup: !0,
            ariaExpanded: O.value,
            onMouseenter: W,
            onMouseleave: () => Z(!0),
            onFocus: W
          },
          [U]
        )
      }
    )
  }
})
const Ao = re({
    mode: {
      type: String,
      values: ['horizontal', 'vertical'],
      default: 'vertical'
    },
    defaultActive: { type: String, default: '' },
    defaultOpeneds: { type: Q(Array), default: () => Lt([]) },
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: { type: String, values: ['hover', 'click'], default: 'hover' },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapseTransition: { type: Boolean, default: !0 },
    ellipsis: { type: Boolean, default: !0 },
    popperEffect: { type: String, values: ['dark', 'light'], default: 'dark' }
  }),
  Ne = (e) => Array.isArray(e) && e.every((t) => ie(t)),
  Lo = {
    close: (e, t) => ie(e) && Ne(t),
    open: (e, t) => ie(e) && Ne(t),
    select: (e, t, o, n) =>
      ie(e) && Ne(t) && Dt(o) && (n === void 0 || n instanceof Promise)
  }
var Do = S({
  name: 'ElMenu',
  props: Ao,
  emits: Lo,
  setup(e, { emit: t, slots: o, expose: n }) {
    const l = be(),
      d = l.appContext.config.globalProperties.$router,
      s = T(),
      a = L('menu'),
      r = L('sub-menu'),
      u = T(-1),
      f = T(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : []),
      v = T(e.defaultActive),
      y = T({}),
      i = T({}),
      C = b(
        () => e.mode === 'horizontal' || (e.mode === 'vertical' && e.collapse)
      ),
      w = () => {
        const c = v.value && y.value[v.value]
        if (!c || e.mode === 'horizontal' || e.collapse) return
        c.indexPath.forEach((I) => {
          const V = i.value[I]
          V && M(I, V.indexPath)
        })
      },
      M = (c, m) => {
        f.value.includes(c) ||
          (e.uniqueOpened && (f.value = f.value.filter((I) => m.includes(I))),
          f.value.push(c),
          t('open', c, m))
      },
      H = (c) => {
        const m = f.value.indexOf(c)
        m !== -1 && f.value.splice(m, 1)
      },
      P = (c, m) => {
        H(c), t('close', c, m)
      },
      Y = ({ index: c, indexPath: m }) => {
        f.value.includes(c) ? P(c, m) : M(c, m)
      },
      R = (c) => {
        ;(e.mode === 'horizontal' || e.collapse) && (f.value = [])
        const { index: m, indexPath: I } = c
        if (!(je(m) || je(I)))
          if (e.router && d) {
            const V = c.route || m,
              K = d.push(V).then((_) => (_ || (v.value = m), _))
            t('select', m, I, { index: m, indexPath: I, route: V }, K)
          } else (v.value = m), t('select', m, I, { index: m, indexPath: I })
      },
      J = (c) => {
        const m = y.value,
          I = m[c] || (v.value && m[v.value]) || m[e.defaultActive]
        I ? (v.value = I.index) : (v.value = c)
      },
      O = () => {
        var c, m
        if (!s.value) return -1
        const I = Array.from(
            (m = (c = s.value) == null ? void 0 : c.childNodes) != null ? m : []
          ).filter(
            (E) =>
              E.nodeName !== '#comment' &&
              (E.nodeName !== '#text' || E.nodeValue)
          ),
          V = 64,
          K = Number.parseInt(getComputedStyle(s.value).paddingLeft, 10),
          _ = Number.parseInt(getComputedStyle(s.value).paddingRight, 10),
          F = s.value.clientWidth - K - _
        let W = 0,
          Z = 0
        return (
          I.forEach((E, B) => {
            ;(W += E.offsetWidth || 0), W <= F - V && (Z = B + 1)
          }),
          Z === I.length ? -1 : Z
        )
      },
      q = (c, m = 33.34) => {
        let I
        return () => {
          I && clearTimeout(I),
            (I = setTimeout(() => {
              c()
            }, m))
        }
      }
    let ee = !0
    const z = () => {
      const c = () => {
        ;(u.value = -1),
          et(() => {
            u.value = O()
          })
      }
      ee ? c() : q(c)(), (ee = !1)
    }
    ce(
      () => e.defaultActive,
      (c) => {
        y.value[c] || (v.value = ''), J(c)
      }
    ),
      ce(
        () => e.collapse,
        (c) => {
          c && (f.value = [])
        }
      ),
      ce(y.value, w)
    let le
    At(() => {
      e.mode === 'horizontal' && e.ellipsis
        ? (le = zt(s, z).stop)
        : le == null || le()
    })
    {
      const c = (K) => {
          i.value[K.index] = K
        },
        m = (K) => {
          delete i.value[K.index]
        }
      se(
        'rootMenu',
        Re({
          props: e,
          openedMenus: f,
          items: y,
          subMenus: i,
          activeIndex: v,
          isMenuPopup: C,
          addMenuItem: (K) => {
            y.value[K.index] = K
          },
          removeMenuItem: (K) => {
            delete y.value[K.index]
          },
          addSubMenu: c,
          removeSubMenu: m,
          openMenu: M,
          closeMenu: P,
          handleMenuItemClick: R,
          handleSubMenuClick: Y
        })
      ),
        se(`subMenu:${l.uid}`, {
          addSubMenu: c,
          removeSubMenu: m,
          mouseInChild: T(!1),
          level: 0
        })
    }
    return (
      ge(() => {
        e.mode === 'horizontal' && new Oo(l.vnode.el, a.namespace.value)
      }),
      n({
        open: (m) => {
          const { indexPath: I } = i.value[m]
          I.forEach((V) => M(V, I))
        },
        close: H,
        handleResize: z
      }),
      () => {
        var c, m
        let I =
          (m = (c = o.default) == null ? void 0 : c.call(o)) != null ? m : []
        const V = []
        if (e.mode === 'horizontal' && s.value) {
          const F = ln(I),
            W = u.value === -1 ? F : F.slice(0, u.value),
            Z = u.value === -1 ? [] : F.slice(u.value)
          Z != null &&
            Z.length &&
            e.ellipsis &&
            ((I = W),
            V.push(
              j(
                Ke,
                { index: 'sub-menu-more', class: r.e('hide-arrow') },
                {
                  title: () =>
                    j(
                      he,
                      { class: r.e('icon-more') },
                      { default: () => j(Kt) }
                    ),
                  default: () => Z
                }
              )
            ))
        }
        const K = bt(e, 0),
          _ = j(
            'ul',
            {
              key: String(e.collapse),
              role: 'menubar',
              ref: s,
              style: K.value,
              class: {
                [a.b()]: !0,
                [a.m(e.mode)]: !0,
                [a.m('collapse')]: e.collapse
              }
            },
            [...I, ...V]
          )
        return e.collapseTransition && e.mode === 'vertical'
          ? j(Po, () => _)
          : _
      }
    )
  }
})
const zo = re({
    index: { type: Q([String, null]), default: null },
    route: { type: Q([String, Object]) },
    disabled: Boolean
  }),
  Ko = { click: (e) => ie(e.index) && Array.isArray(e.indexPath) },
  Be = 'ElMenuItem',
  Go = S({
    name: Be,
    components: { ElTooltip: Ae },
    props: zo,
    emits: Ko,
    setup(e, { emit: t }) {
      const o = be(),
        n = A('rootMenu'),
        l = L('menu'),
        d = L('menu-item')
      n || Ee(Be, 'can not inject root menu')
      const { parentMenu: s, indexPath: a } = gt(o, de(e, 'index')),
        r = A(`subMenu:${s.value.uid}`)
      r || Ee(Be, 'can not inject sub menu')
      const u = b(() => e.index === n.activeIndex),
        f = Re({ index: e.index, indexPath: a, active: u }),
        v = () => {
          e.disabled ||
            (n.handleMenuItemClick({
              index: e.index,
              indexPath: a.value,
              route: e.route
            }),
            t('click', f))
        }
      return (
        ge(() => {
          r.addSubMenu(f), n.addMenuItem(f)
        }),
        Me(() => {
          r.removeSubMenu(f), n.removeMenuItem(f)
        }),
        {
          parentMenu: s,
          rootMenu: n,
          active: u,
          nsMenu: l,
          nsMenuItem: d,
          handleClick: v
        }
      )
    }
  })
function Ho(e, t, o, n, l, d) {
  const s = G('el-tooltip')
  return (
    k(),
    x(
      'li',
      {
        class: te([
          e.nsMenuItem.b(),
          e.nsMenuItem.is('active', e.active),
          e.nsMenuItem.is('disabled', e.disabled)
        ]),
        role: 'menuitem',
        tabindex: '-1',
        onClick: t[0] || (t[0] = (...a) => e.handleClick && e.handleClick(...a))
      },
      [
        e.parentMenu.type.name === 'ElMenu' &&
        e.rootMenu.props.collapse &&
        e.$slots.title
          ? (k(),
            ne(
              s,
              {
                key: 0,
                effect: e.rootMenu.props.popperEffect,
                placement: 'right',
                'fallback-placements': ['left'],
                persistent: ''
              },
              {
                content: p(() => [N(e.$slots, 'title')]),
                default: p(() => [
                  X(
                    'div',
                    { class: te(e.nsMenu.be('tooltip', 'trigger')) },
                    [N(e.$slots, 'default')],
                    2
                  )
                ]),
                _: 3
              },
              8,
              ['effect']
            ))
          : (k(),
            x(
              Te,
              { key: 1 },
              [N(e.$slots, 'default'), N(e.$slots, 'title')],
              64
            ))
      ],
      2
    )
  )
}
var yt = D(Go, [
  ['render', Ho],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue'
  ]
])
const Vo = { title: String },
  Uo = 'ElMenuItemGroup',
  jo = S({
    name: Uo,
    props: Vo,
    setup() {
      return { ns: L('menu-item-group') }
    }
  })
function Yo(e, t, o, n, l, d) {
  return (
    k(),
    x(
      'li',
      { class: te(e.ns.b()) },
      [
        X(
          'div',
          { class: te(e.ns.e('title')) },
          [
            e.$slots.title
              ? N(e.$slots, 'title', { key: 1 })
              : (k(), x(Te, { key: 0 }, [ue(nt(e.title), 1)], 64))
          ],
          2
        ),
        X('ul', null, [N(e.$slots, 'default')])
      ],
      2
    )
  )
}
var wt = D(jo, [
  ['render', Yo],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue'
  ]
])
const Wo = $e(Do, { MenuItem: yt, MenuItemGroup: wt, SubMenu: Ke }),
  Jo = ae(yt)
ae(wt)
const qo = ae(Ke)
const xo = '/assets/default-745c3d16.png'
const me = (e) => (Jt('data-v-5d3579fd'), (e = e()), qt(), e),
  Zo = me(() => X('div', { class: 'el-aside__logo' }, null, -1)),
  Qo = me(() => X('span', null, '文章分类', -1)),
  Xo = me(() => X('span', null, '文章管理', -1)),
  el = me(() => X('span', null, '个人中心', -1)),
  tl = me(() => X('span', null, '基本资料', -1)),
  nl = me(() => X('span', null, '更换头像', -1)),
  ol = me(() => X('span', null, '重置密码', -1)),
  ll = { class: 'el-dropdown__box' },
  sl = {
    __name: 'LayoutContainer',
    setup(e) {
      const t = Gt(),
        o = Ht()
      ge(() => {
        t.getUser()
      })
      const n = async (l) => {
        l === 'logout'
          ? (await sn.confirm('你确认要进行退出么', '温馨提示', {
              type: 'warning',
              confirmButtonText: '确认',
              cancelButtonText: '取消'
            }),
            t.removeToken(),
            t.setUser({}),
            o.push('/login'))
          : o.push(`/user/${l}`)
      }
      return (l, d) => {
        const s = he,
          a = Jo,
          r = qo,
          u = Wo,
          f = kn,
          v = mn,
          y = Mo,
          i = To,
          C = $o,
          w = Nn,
          M = G('router-view'),
          H = Bn,
          P = On,
          Y = Sn
        return (
          k(),
          ne(
            Y,
            { class: 'layout-container' },
            {
              default: p(() => [
                h(
                  f,
                  { width: '200px' },
                  {
                    default: p(() => [
                      Zo,
                      h(
                        u,
                        {
                          'active-text-color': '#ffd04b',
                          'background-color': '#232323',
                          'default-active': l.$route.path,
                          'text-color': '#fff',
                          router: ''
                        },
                        {
                          default: p(() => [
                            h(
                              a,
                              { index: '/article/channel' },
                              {
                                default: p(() => [
                                  h(s, null, {
                                    default: p(() => [h(g(Vt))]),
                                    _: 1
                                  }),
                                  Qo
                                ]),
                                _: 1
                              }
                            ),
                            h(
                              a,
                              { index: '/article/manage' },
                              {
                                default: p(() => [
                                  h(s, null, {
                                    default: p(() => [h(g(Ut))]),
                                    _: 1
                                  }),
                                  Xo
                                ]),
                                _: 1
                              }
                            ),
                            h(
                              r,
                              { index: '/user' },
                              {
                                title: p(() => [
                                  h(s, null, {
                                    default: p(() => [h(g(jt))]),
                                    _: 1
                                  }),
                                  el
                                ]),
                                default: p(() => [
                                  h(
                                    a,
                                    { index: '/user/profile' },
                                    {
                                      default: p(() => [
                                        h(s, null, {
                                          default: p(() => [h(g(He))]),
                                          _: 1
                                        }),
                                        tl
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  h(
                                    a,
                                    { index: '/user/avatar' },
                                    {
                                      default: p(() => [
                                        h(s, null, {
                                          default: p(() => [h(g(Ve))]),
                                          _: 1
                                        }),
                                        nl
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  h(
                                    a,
                                    { index: '/user/password' },
                                    {
                                      default: p(() => [
                                        h(s, null, {
                                          default: p(() => [h(g(Ue))]),
                                          _: 1
                                        }),
                                        ol
                                      ]),
                                      _: 1
                                    }
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['default-active']
                      )
                    ]),
                    _: 1
                  }
                ),
                h(Y, null, {
                  default: p(() => [
                    h(w, null, {
                      default: p(() => [
                        X('div', null, [
                          ue(' 黑马程序员：'),
                          X(
                            'strong',
                            null,
                            nt(g(t).user.nickname || g(t).user.username),
                            1
                          )
                        ]),
                        h(
                          C,
                          { placement: 'bottom-end', onCommand: n },
                          {
                            dropdown: p(() => [
                              h(i, null, {
                                default: p(() => [
                                  h(
                                    y,
                                    { command: 'profile', icon: g(He) },
                                    {
                                      default: p(() => [ue('基本资料')]),
                                      _: 1
                                    },
                                    8,
                                    ['icon']
                                  ),
                                  h(
                                    y,
                                    { command: 'avatar', icon: g(Ve) },
                                    {
                                      default: p(() => [ue('更换头像')]),
                                      _: 1
                                    },
                                    8,
                                    ['icon']
                                  ),
                                  h(
                                    y,
                                    { command: 'password', icon: g(Ue) },
                                    {
                                      default: p(() => [ue('重置密码')]),
                                      _: 1
                                    },
                                    8,
                                    ['icon']
                                  ),
                                  h(
                                    y,
                                    { command: 'logout', icon: g(Yt) },
                                    {
                                      default: p(() => [ue('退出登录')]),
                                      _: 1
                                    },
                                    8,
                                    ['icon']
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            default: p(() => [
                              X('span', ll, [
                                h(
                                  v,
                                  { src: g(t).user.user_pic || g(xo) },
                                  null,
                                  8,
                                  ['src']
                                ),
                                h(s, null, {
                                  default: p(() => [h(g(Wt))]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      _: 1
                    }),
                    h(H, null, { default: p(() => [h(M)]), _: 1 }),
                    h(P, null, {
                      default: p(() => [
                        ue('大事件 ©2023 Created by 黑马程序员')
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }
          )
        )
      }
    }
  },
  vl = Xt(sl, [['__scopeId', 'data-v-5d3579fd']])
export { vl as default }
