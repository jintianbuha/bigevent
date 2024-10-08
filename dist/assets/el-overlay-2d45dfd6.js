import {
  aC as Z,
  n as To,
  a4 as pt,
  bw as gt,
  P as le,
  ag as Co,
  Q as oe,
  A as bt,
  bc as So,
  x as ve,
  bx as Oo,
  a9 as an,
  w as z,
  bh as Ao,
  a7 as Ro,
  by as ko,
  a8 as Mo,
  bz as Fn,
  t as D,
  y as R,
  aA as Pe,
  a3 as Po,
  b7 as $n,
  e as m,
  az as Bo,
  r as M,
  bA as ln,
  bB as Ie,
  bC as Lo,
  R as Ge,
  be as Io,
  bD as No,
  m as q,
  q as Be,
  N as Se,
  _ as ne,
  v as x,
  O as be,
  V as kt,
  U as we,
  o as $,
  c as U,
  b as _,
  ad as Ne,
  g as X,
  H,
  C as Fe,
  ae as Ye,
  T as Lt,
  B as de,
  d as W,
  a6 as Dn,
  aj as Fo,
  Z as fe,
  ab as Hn,
  bf as $o,
  G as Q,
  D as Ve,
  a2 as G,
  ai as It,
  I as Nt,
  bE as Do,
  bF as Ho,
  bl as zo,
  bG as zn,
  b6 as $e,
  J as Ft,
  z as $t,
  b8 as xo,
  av as _o,
  bH as jo,
  S as Uo,
  bI as Ko,
  al as ke,
  ac as Wo,
  F as Vo,
  bJ as Yo,
  bo as qo,
  bK as un,
  ay as Xo,
  W as Ae,
  a5 as at,
  aI as it,
  f as St,
  bL as xn,
  bb as cn,
  bm as Go
} from './main-b3449a42.js'
import {
  t as _n,
  g as Zo,
  i as Dt,
  h as fn,
  u as Mt,
  E as Jo
} from './_plugin-vue_export-helper-140fdfbe.js'
import { E as Qo } from './el-input-63e056b5.js'
const er =
    'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',
  tr = (e) =>
    getComputedStyle(e).position === 'fixed' ? !1 : e.offsetParent !== null,
  dn = (e) => Array.from(e.querySelectorAll(er)).filter((t) => nr(t) && tr(t)),
  nr = (e) => {
    if (
      e.tabIndex > 0 ||
      (e.tabIndex === 0 && e.getAttribute('tabIndex') !== null)
    )
      return !0
    if (e.disabled) return !1
    switch (e.nodeName) {
      case 'A':
        return !!e.href && e.rel !== 'ignore'
      case 'INPUT':
        return !(e.type === 'hidden' || e.type === 'file')
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return !0
      default:
        return !1
    }
  },
  si = function (e, t, ...n) {
    let o
    t.includes('mouse') || t.includes('click')
      ? (o = 'MouseEvents')
      : t.includes('key')
      ? (o = 'KeyboardEvent')
      : (o = 'HTMLEvents')
    const r = document.createEvent(o)
    return r.initEvent(t, ...n), e.dispatchEvent(r), e
  },
  ce =
    (e, t, { checkForDefaultPrevented: n = !0 } = {}) =>
    (r) => {
      const s = e == null ? void 0 : e(r)
      if (n === !1 || !s) return t == null ? void 0 : t(r)
    },
  ai = (e) => (t) => t.pointerType === 'mouse' ? e(t) : void 0
function or(e) {
  return e === void 0
}
let lt
const rr = (e) => {
  var t
  if (!Z) return 0
  if (lt !== void 0) return lt
  const n = document.createElement('div')
  ;(n.className = `${e}-scrollbar__wrap`),
    (n.style.visibility = 'hidden'),
    (n.style.width = '100px'),
    (n.style.position = 'absolute'),
    (n.style.top = '-9999px'),
    document.body.appendChild(n)
  const o = n.offsetWidth
  n.style.overflow = 'scroll'
  const r = document.createElement('div')
  ;(r.style.width = '100%'), n.appendChild(r)
  const s = r.offsetWidth
  return (t = n.parentNode) == null || t.removeChild(n), (lt = o - s), lt
}
function ii(e, t) {
  if (!Z) return
  if (!t) {
    e.scrollTop = 0
    return
  }
  const n = []
  let o = t.offsetParent
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), (o = o.offsetParent)
  const r = t.offsetTop + n.reduce((l, i) => l + i.offsetTop, 0),
    s = r + t.offsetHeight,
    a = e.scrollTop,
    u = a + e.clientHeight
  r < a ? (e.scrollTop = r) : s > u && (e.scrollTop = s - e.clientHeight)
}
const sr = (e) => ['', ...To].includes(e)
var vt = ((e) => (
  (e[(e.TEXT = 1)] = 'TEXT'),
  (e[(e.CLASS = 2)] = 'CLASS'),
  (e[(e.STYLE = 4)] = 'STYLE'),
  (e[(e.PROPS = 8)] = 'PROPS'),
  (e[(e.FULL_PROPS = 16)] = 'FULL_PROPS'),
  (e[(e.HYDRATE_EVENTS = 32)] = 'HYDRATE_EVENTS'),
  (e[(e.STABLE_FRAGMENT = 64)] = 'STABLE_FRAGMENT'),
  (e[(e.KEYED_FRAGMENT = 128)] = 'KEYED_FRAGMENT'),
  (e[(e.UNKEYED_FRAGMENT = 256)] = 'UNKEYED_FRAGMENT'),
  (e[(e.NEED_PATCH = 512)] = 'NEED_PATCH'),
  (e[(e.DYNAMIC_SLOTS = 1024)] = 'DYNAMIC_SLOTS'),
  (e[(e.HOISTED = -1)] = 'HOISTED'),
  (e[(e.BAIL = -2)] = 'BAIL'),
  e
))(vt || {})
const Ot = (e) => {
    const t = pt(e) ? e : [e],
      n = []
    return (
      t.forEach((o) => {
        var r
        pt(o)
          ? n.push(...Ot(o))
          : gt(o) && pt(o.children)
          ? n.push(...Ot(o.children))
          : (n.push(o),
            gt(o) &&
              (r = o.component) != null &&
              r.subTree &&
              n.push(...Ot(o.component.subTree)))
      }),
      n
    )
  },
  ar = (e, t, n) => {
    let o = { offsetX: 0, offsetY: 0 }
    const r = (u) => {
        const l = u.clientX,
          i = u.clientY,
          { offsetX: p, offsetY: d } = o,
          b = e.value.getBoundingClientRect(),
          y = b.left,
          f = b.top,
          v = b.width,
          T = b.height,
          c = document.documentElement.clientWidth,
          h = document.documentElement.clientHeight,
          O = -y + p,
          E = -f + d,
          A = c - y - v + p,
          w = h - f - T + d,
          g = (B) => {
            const k = Math.min(Math.max(p + B.clientX - l, O), A),
              L = Math.min(Math.max(d + B.clientY - i, E), w)
            ;(o = { offsetX: k, offsetY: L }),
              (e.value.style.transform = `translate(${bt(k)}, ${bt(L)})`)
          },
          S = () => {
            document.removeEventListener('mousemove', g),
              document.removeEventListener('mouseup', S)
          }
        document.addEventListener('mousemove', g),
          document.addEventListener('mouseup', S)
      },
      s = () => {
        t.value && e.value && t.value.addEventListener('mousedown', r)
      },
      a = () => {
        t.value && e.value && t.value.removeEventListener('mousedown', r)
      }
    le(() => {
      Co(() => {
        n.value ? s() : a()
      })
    }),
      oe(() => {
        a()
      })
  },
  ir = (e, t = {}) => {
    So(e) ||
      _n('[useLockscreen]', 'You need to pass a ref param to this function')
    const n = t.ns || ve('popup'),
      o = Oo(() => n.bm('parent', 'hidden'))
    if (!Z || an(document.body, o.value)) return
    let r = 0,
      s = !1,
      a = '0'
    const u = () => {
      setTimeout(() => {
        Mo(document == null ? void 0 : document.body, o.value),
          s && document && (document.body.style.width = a)
      }, 200)
    }
    z(e, (l) => {
      if (!l) {
        u()
        return
      }
      ;(s = !an(document.body, o.value)),
        s && (a = document.body.style.width),
        (r = rr(n.namespace.value))
      const i =
          document.documentElement.clientHeight < document.body.scrollHeight,
        p = Ao(document.body, 'overflowY')
      r > 0 &&
        (i || p === 'scroll') &&
        s &&
        (document.body.style.width = `calc(100% - ${r}px)`),
        Ro(document.body, o.value)
    }),
      ko(() => u())
  },
  lr = Fn({ type: D(Boolean), default: null }),
  ur = Fn({ type: D(Function) }),
  jn = (e) => {
    const t = `update:${e}`,
      n = `onUpdate:${e}`,
      o = [t],
      r = { [e]: lr, [n]: ur }
    return {
      useModelToggle: ({
        indicator: a,
        toggleReason: u,
        shouldHideWhenRouteChanges: l,
        shouldProceed: i,
        onShow: p,
        onHide: d
      }) => {
        const b = Po(),
          { emit: y } = b,
          f = b.props,
          v = R(() => Pe(f[n])),
          T = R(() => f[e] === null),
          c = (g) => {
            a.value !== !0 &&
              ((a.value = !0), u && (u.value = g), Pe(p) && p(g))
          },
          h = (g) => {
            a.value !== !1 &&
              ((a.value = !1), u && (u.value = g), Pe(d) && d(g))
          },
          O = (g) => {
            if (f.disabled === !0 || (Pe(i) && !i())) return
            const S = v.value && Z
            S && y(t, !0), (T.value || !S) && c(g)
          },
          E = (g) => {
            if (f.disabled === !0 || !Z) return
            const S = v.value && Z
            S && y(t, !1), (T.value || !S) && h(g)
          },
          A = (g) => {
            $n(g) &&
              (f.disabled && g
                ? v.value && y(t, !1)
                : a.value !== g && (g ? c() : h()))
          },
          w = () => {
            a.value ? E() : O()
          }
        return (
          z(() => f[e], A),
          l &&
            b.appContext.config.globalProperties.$route !== void 0 &&
            z(
              () => ({ ...b.proxy.$route }),
              () => {
                l.value && a.value && E()
              }
            ),
          le(() => {
            A(f[e])
          }),
          { hide: E, show: O, toggle: w, hasUpdateHandler: v }
        )
      },
      useModelToggleProps: r,
      useModelToggleEmits: o
    }
  }
jn('modelValue')
var V = 'top',
  ee = 'bottom',
  te = 'right',
  Y = 'left',
  Ht = 'auto',
  et = [V, ee, te, Y],
  De = 'start',
  Ze = 'end',
  cr = 'clippingParents',
  Un = 'viewport',
  We = 'popper',
  fr = 'reference',
  pn = et.reduce(function (e, t) {
    return e.concat([t + '-' + De, t + '-' + Ze])
  }, []),
  zt = [].concat(et, [Ht]).reduce(function (e, t) {
    return e.concat([t, t + '-' + De, t + '-' + Ze])
  }, []),
  dr = 'beforeRead',
  pr = 'read',
  vr = 'afterRead',
  mr = 'beforeMain',
  gr = 'main',
  br = 'afterMain',
  yr = 'beforeWrite',
  hr = 'write',
  Er = 'afterWrite',
  wr = [dr, pr, vr, mr, gr, br, yr, hr, Er]
function ie(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function re(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function He(e) {
  var t = re(e).Element
  return e instanceof t || e instanceof Element
}
function J(e) {
  var t = re(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function xt(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = re(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function Tr(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (n) {
    var o = t.styles[n] || {},
      r = t.attributes[n] || {},
      s = t.elements[n]
    !J(s) ||
      !ie(s) ||
      (Object.assign(s.style, o),
      Object.keys(r).forEach(function (a) {
        var u = r[a]
        u === !1 ? s.removeAttribute(a) : s.setAttribute(a, u === !0 ? '' : u)
      }))
  })
}
function Cr(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: { position: 'absolute' },
      reference: {}
    }
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (o) {
        var r = t.elements[o],
          s = t.attributes[o] || {},
          a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
          u = a.reduce(function (l, i) {
            return (l[i] = ''), l
          }, {})
        !J(r) ||
          !ie(r) ||
          (Object.assign(r.style, u),
          Object.keys(s).forEach(function (l) {
            r.removeAttribute(l)
          }))
      })
    }
  )
}
var Kn = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: Tr,
  effect: Cr,
  requires: ['computeStyles']
}
function ae(e) {
  return e.split('-')[0]
}
var Ce = Math.max,
  yt = Math.min,
  ze = Math.round
function xe(e, t) {
  t === void 0 && (t = !1)
  var n = e.getBoundingClientRect(),
    o = 1,
    r = 1
  if (J(e) && t) {
    var s = e.offsetHeight,
      a = e.offsetWidth
    a > 0 && (o = ze(n.width) / a || 1), s > 0 && (r = ze(n.height) / s || 1)
  }
  return {
    width: n.width / o,
    height: n.height / r,
    top: n.top / r,
    right: n.right / o,
    bottom: n.bottom / r,
    left: n.left / o,
    x: n.left / o,
    y: n.top / r
  }
}
function _t(e) {
  var t = xe(e),
    n = e.offsetWidth,
    o = e.offsetHeight
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
  )
}
function Wn(e, t) {
  var n = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (n && xt(n)) {
    var o = t
    do {
      if (o && e.isSameNode(o)) return !0
      o = o.parentNode || o.host
    } while (o)
  }
  return !1
}
function pe(e) {
  return re(e).getComputedStyle(e)
}
function Sr(e) {
  return ['table', 'td', 'th'].indexOf(ie(e)) >= 0
}
function ye(e) {
  return ((He(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function ht(e) {
  return ie(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (xt(e) ? e.host : null) || ye(e)
}
function vn(e) {
  return !J(e) || pe(e).position === 'fixed' ? null : e.offsetParent
}
function Or(e) {
  var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
    n = navigator.userAgent.indexOf('Trident') !== -1
  if (n && J(e)) {
    var o = pe(e)
    if (o.position === 'fixed') return null
  }
  var r = ht(e)
  for (xt(r) && (r = r.host); J(r) && ['html', 'body'].indexOf(ie(r)) < 0; ) {
    var s = pe(r)
    if (
      s.transform !== 'none' ||
      s.perspective !== 'none' ||
      s.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === 'filter') ||
      (t && s.filter && s.filter !== 'none')
    )
      return r
    r = r.parentNode
  }
  return null
}
function tt(e) {
  for (var t = re(e), n = vn(e); n && Sr(n) && pe(n).position === 'static'; )
    n = vn(n)
  return n &&
    (ie(n) === 'html' || (ie(n) === 'body' && pe(n).position === 'static'))
    ? t
    : n || Or(e) || t
}
function jt(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function qe(e, t, n) {
  return Ce(e, yt(t, n))
}
function Ar(e, t, n) {
  var o = qe(e, t, n)
  return o > n ? n : o
}
function Vn() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Yn(e) {
  return Object.assign({}, Vn(), e)
}
function qn(e, t) {
  return t.reduce(function (n, o) {
    return (n[o] = e), n
  }, {})
}
var Rr = function (e, t) {
  return (
    (e =
      typeof e == 'function'
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    Yn(typeof e != 'number' ? e : qn(e, et))
  )
}
function kr(e) {
  var t,
    n = e.state,
    o = e.name,
    r = e.options,
    s = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    u = ae(n.placement),
    l = jt(u),
    i = [Y, te].indexOf(u) >= 0,
    p = i ? 'height' : 'width'
  if (!(!s || !a)) {
    var d = Rr(r.padding, n),
      b = _t(s),
      y = l === 'y' ? V : Y,
      f = l === 'y' ? ee : te,
      v =
        n.rects.reference[p] + n.rects.reference[l] - a[l] - n.rects.popper[p],
      T = a[l] - n.rects.reference[l],
      c = tt(s),
      h = c ? (l === 'y' ? c.clientHeight || 0 : c.clientWidth || 0) : 0,
      O = v / 2 - T / 2,
      E = d[y],
      A = h - b[p] - d[f],
      w = h / 2 - b[p] / 2 + O,
      g = qe(E, w, A),
      S = l
    n.modifiersData[o] = ((t = {}), (t[S] = g), (t.centerOffset = g - w), t)
  }
}
function Mr(e) {
  var t = e.state,
    n = e.options,
    o = n.element,
    r = o === void 0 ? '[data-popper-arrow]' : o
  r != null &&
    ((typeof r == 'string' && ((r = t.elements.popper.querySelector(r)), !r)) ||
      !Wn(t.elements.popper, r) ||
      (t.elements.arrow = r))
}
var Pr = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: kr,
  effect: Mr,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
}
function _e(e) {
  return e.split('-')[1]
}
var Br = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function Lr(e) {
  var t = e.x,
    n = e.y,
    o = window,
    r = o.devicePixelRatio || 1
  return { x: ze(t * r) / r || 0, y: ze(n * r) / r || 0 }
}
function mn(e) {
  var t,
    n = e.popper,
    o = e.popperRect,
    r = e.placement,
    s = e.variation,
    a = e.offsets,
    u = e.position,
    l = e.gpuAcceleration,
    i = e.adaptive,
    p = e.roundOffsets,
    d = e.isFixed,
    b = a.x,
    y = b === void 0 ? 0 : b,
    f = a.y,
    v = f === void 0 ? 0 : f,
    T = typeof p == 'function' ? p({ x: y, y: v }) : { x: y, y: v }
  ;(y = T.x), (v = T.y)
  var c = a.hasOwnProperty('x'),
    h = a.hasOwnProperty('y'),
    O = Y,
    E = V,
    A = window
  if (i) {
    var w = tt(n),
      g = 'clientHeight',
      S = 'clientWidth'
    if (
      (w === re(n) &&
        ((w = ye(n)),
        pe(w).position !== 'static' &&
          u === 'absolute' &&
          ((g = 'scrollHeight'), (S = 'scrollWidth'))),
      (w = w),
      r === V || ((r === Y || r === te) && s === Ze))
    ) {
      E = ee
      var B = d && w === A && A.visualViewport ? A.visualViewport.height : w[g]
      ;(v -= B - o.height), (v *= l ? 1 : -1)
    }
    if (r === Y || ((r === V || r === ee) && s === Ze)) {
      O = te
      var k = d && w === A && A.visualViewport ? A.visualViewport.width : w[S]
      ;(y -= k - o.width), (y *= l ? 1 : -1)
    }
  }
  var L = Object.assign({ position: u }, i && Br),
    I = p === !0 ? Lr({ x: y, y: v }) : { x: y, y: v }
  if (((y = I.x), (v = I.y), l)) {
    var F
    return Object.assign(
      {},
      L,
      ((F = {}),
      (F[E] = h ? '0' : ''),
      (F[O] = c ? '0' : ''),
      (F.transform =
        (A.devicePixelRatio || 1) <= 1
          ? 'translate(' + y + 'px, ' + v + 'px)'
          : 'translate3d(' + y + 'px, ' + v + 'px, 0)'),
      F)
    )
  }
  return Object.assign(
    {},
    L,
    ((t = {}),
    (t[E] = h ? v + 'px' : ''),
    (t[O] = c ? y + 'px' : ''),
    (t.transform = ''),
    t)
  )
}
function Ir(e) {
  var t = e.state,
    n = e.options,
    o = n.gpuAcceleration,
    r = o === void 0 ? !0 : o,
    s = n.adaptive,
    a = s === void 0 ? !0 : s,
    u = n.roundOffsets,
    l = u === void 0 ? !0 : u,
    i = {
      placement: ae(t.placement),
      variation: _e(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === 'fixed'
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      mn(
        Object.assign({}, i, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        mn(
          Object.assign({}, i, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement
    }))
}
var Xn = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: Ir,
    data: {}
  },
  ut = { passive: !0 }
function Nr(e) {
  var t = e.state,
    n = e.instance,
    o = e.options,
    r = o.scroll,
    s = r === void 0 ? !0 : r,
    a = o.resize,
    u = a === void 0 ? !0 : a,
    l = re(t.elements.popper),
    i = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    s &&
      i.forEach(function (p) {
        p.addEventListener('scroll', n.update, ut)
      }),
    u && l.addEventListener('resize', n.update, ut),
    function () {
      s &&
        i.forEach(function (p) {
          p.removeEventListener('scroll', n.update, ut)
        }),
        u && l.removeEventListener('resize', n.update, ut)
    }
  )
}
var Gn = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: Nr,
    data: {}
  },
  Fr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function mt(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Fr[t]
  })
}
var $r = { start: 'end', end: 'start' }
function gn(e) {
  return e.replace(/start|end/g, function (t) {
    return $r[t]
  })
}
function Ut(e) {
  var t = re(e),
    n = t.pageXOffset,
    o = t.pageYOffset
  return { scrollLeft: n, scrollTop: o }
}
function Kt(e) {
  return xe(ye(e)).left + Ut(e).scrollLeft
}
function Dr(e) {
  var t = re(e),
    n = ye(e),
    o = t.visualViewport,
    r = n.clientWidth,
    s = n.clientHeight,
    a = 0,
    u = 0
  return (
    o &&
      ((r = o.width),
      (s = o.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((a = o.offsetLeft), (u = o.offsetTop))),
    { width: r, height: s, x: a + Kt(e), y: u }
  )
}
function Hr(e) {
  var t,
    n = ye(e),
    o = Ut(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = Ce(
      n.scrollWidth,
      n.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    a = Ce(
      n.scrollHeight,
      n.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    u = -o.scrollLeft + Kt(e),
    l = -o.scrollTop
  return (
    pe(r || n).direction === 'rtl' &&
      (u += Ce(n.clientWidth, r ? r.clientWidth : 0) - s),
    { width: s, height: a, x: u, y: l }
  )
}
function Wt(e) {
  var t = pe(e),
    n = t.overflow,
    o = t.overflowX,
    r = t.overflowY
  return /auto|scroll|overlay|hidden/.test(n + r + o)
}
function Zn(e) {
  return ['html', 'body', '#document'].indexOf(ie(e)) >= 0
    ? e.ownerDocument.body
    : J(e) && Wt(e)
    ? e
    : Zn(ht(e))
}
function Xe(e, t) {
  var n
  t === void 0 && (t = [])
  var o = Zn(e),
    r = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = re(o),
    a = r ? [s].concat(s.visualViewport || [], Wt(o) ? o : []) : o,
    u = t.concat(a)
  return r ? u : u.concat(Xe(ht(a)))
}
function Pt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  })
}
function zr(e) {
  var t = xe(e)
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  )
}
function bn(e, t) {
  return t === Un ? Pt(Dr(e)) : He(t) ? zr(t) : Pt(Hr(ye(e)))
}
function xr(e) {
  var t = Xe(ht(e)),
    n = ['absolute', 'fixed'].indexOf(pe(e).position) >= 0,
    o = n && J(e) ? tt(e) : e
  return He(o)
    ? t.filter(function (r) {
        return He(r) && Wn(r, o) && ie(r) !== 'body'
      })
    : []
}
function _r(e, t, n) {
  var o = t === 'clippingParents' ? xr(e) : [].concat(t),
    r = [].concat(o, [n]),
    s = r[0],
    a = r.reduce(function (u, l) {
      var i = bn(e, l)
      return (
        (u.top = Ce(i.top, u.top)),
        (u.right = yt(i.right, u.right)),
        (u.bottom = yt(i.bottom, u.bottom)),
        (u.left = Ce(i.left, u.left)),
        u
      )
    }, bn(e, s))
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  )
}
function Jn(e) {
  var t = e.reference,
    n = e.element,
    o = e.placement,
    r = o ? ae(o) : null,
    s = o ? _e(o) : null,
    a = t.x + t.width / 2 - n.width / 2,
    u = t.y + t.height / 2 - n.height / 2,
    l
  switch (r) {
    case V:
      l = { x: a, y: t.y - n.height }
      break
    case ee:
      l = { x: a, y: t.y + t.height }
      break
    case te:
      l = { x: t.x + t.width, y: u }
      break
    case Y:
      l = { x: t.x - n.width, y: u }
      break
    default:
      l = { x: t.x, y: t.y }
  }
  var i = r ? jt(r) : null
  if (i != null) {
    var p = i === 'y' ? 'height' : 'width'
    switch (s) {
      case De:
        l[i] = l[i] - (t[p] / 2 - n[p] / 2)
        break
      case Ze:
        l[i] = l[i] + (t[p] / 2 - n[p] / 2)
        break
    }
  }
  return l
}
function Je(e, t) {
  t === void 0 && (t = {})
  var n = t,
    o = n.placement,
    r = o === void 0 ? e.placement : o,
    s = n.boundary,
    a = s === void 0 ? cr : s,
    u = n.rootBoundary,
    l = u === void 0 ? Un : u,
    i = n.elementContext,
    p = i === void 0 ? We : i,
    d = n.altBoundary,
    b = d === void 0 ? !1 : d,
    y = n.padding,
    f = y === void 0 ? 0 : y,
    v = Yn(typeof f != 'number' ? f : qn(f, et)),
    T = p === We ? fr : We,
    c = e.rects.popper,
    h = e.elements[b ? T : p],
    O = _r(He(h) ? h : h.contextElement || ye(e.elements.popper), a, l),
    E = xe(e.elements.reference),
    A = Jn({ reference: E, element: c, strategy: 'absolute', placement: r }),
    w = Pt(Object.assign({}, c, A)),
    g = p === We ? w : E,
    S = {
      top: O.top - g.top + v.top,
      bottom: g.bottom - O.bottom + v.bottom,
      left: O.left - g.left + v.left,
      right: g.right - O.right + v.right
    },
    B = e.modifiersData.offset
  if (p === We && B) {
    var k = B[r]
    Object.keys(S).forEach(function (L) {
      var I = [te, ee].indexOf(L) >= 0 ? 1 : -1,
        F = [V, ee].indexOf(L) >= 0 ? 'y' : 'x'
      S[L] += k[F] * I
    })
  }
  return S
}
function jr(e, t) {
  t === void 0 && (t = {})
  var n = t,
    o = n.placement,
    r = n.boundary,
    s = n.rootBoundary,
    a = n.padding,
    u = n.flipVariations,
    l = n.allowedAutoPlacements,
    i = l === void 0 ? zt : l,
    p = _e(o),
    d = p
      ? u
        ? pn
        : pn.filter(function (f) {
            return _e(f) === p
          })
      : et,
    b = d.filter(function (f) {
      return i.indexOf(f) >= 0
    })
  b.length === 0 && (b = d)
  var y = b.reduce(function (f, v) {
    return (
      (f[v] = Je(e, { placement: v, boundary: r, rootBoundary: s, padding: a })[
        ae(v)
      ]),
      f
    )
  }, {})
  return Object.keys(y).sort(function (f, v) {
    return y[f] - y[v]
  })
}
function Ur(e) {
  if (ae(e) === Ht) return []
  var t = mt(e)
  return [gn(e), t, gn(t)]
}
function Kr(e) {
  var t = e.state,
    n = e.options,
    o = e.name
  if (!t.modifiersData[o]._skip) {
    for (
      var r = n.mainAxis,
        s = r === void 0 ? !0 : r,
        a = n.altAxis,
        u = a === void 0 ? !0 : a,
        l = n.fallbackPlacements,
        i = n.padding,
        p = n.boundary,
        d = n.rootBoundary,
        b = n.altBoundary,
        y = n.flipVariations,
        f = y === void 0 ? !0 : y,
        v = n.allowedAutoPlacements,
        T = t.options.placement,
        c = ae(T),
        h = c === T,
        O = l || (h || !f ? [mt(T)] : Ur(T)),
        E = [T].concat(O).reduce(function (he, ue) {
          return he.concat(
            ae(ue) === Ht
              ? jr(t, {
                  placement: ue,
                  boundary: p,
                  rootBoundary: d,
                  padding: i,
                  flipVariations: f,
                  allowedAutoPlacements: v
                })
              : ue
          )
        }, []),
        A = t.rects.reference,
        w = t.rects.popper,
        g = new Map(),
        S = !0,
        B = E[0],
        k = 0;
      k < E.length;
      k++
    ) {
      var L = E[k],
        I = ae(L),
        F = _e(L) === De,
        K = [V, ee].indexOf(I) >= 0,
        P = K ? 'width' : 'height',
        N = Je(t, {
          placement: L,
          boundary: p,
          rootBoundary: d,
          altBoundary: b,
          padding: i
        }),
        C = K ? (F ? te : Y) : F ? ee : V
      A[P] > w[P] && (C = mt(C))
      var j = mt(C),
        se = []
      if (
        (s && se.push(N[I] <= 0),
        u && se.push(N[C] <= 0, N[j] <= 0),
        se.every(function (he) {
          return he
        }))
      ) {
        ;(B = L), (S = !1)
        break
      }
      g.set(L, se)
    }
    if (S)
      for (
        var nt = f ? 3 : 1,
          wt = function (he) {
            var ue = E.find(function (rt) {
              var Ke = g.get(rt)
              if (Ke)
                return Ke.slice(0, he).every(function (Oe) {
                  return Oe
                })
            })
            if (ue) return (B = ue), 'break'
          },
          Ue = nt;
        Ue > 0;
        Ue--
      ) {
        var ot = wt(Ue)
        if (ot === 'break') break
      }
    t.placement !== B &&
      ((t.modifiersData[o]._skip = !0), (t.placement = B), (t.reset = !0))
  }
}
var Wr = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: Kr,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
}
function yn(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  )
}
function hn(e) {
  return [V, te, ee, Y].some(function (t) {
    return e[t] >= 0
  })
}
function Vr(e) {
  var t = e.state,
    n = e.name,
    o = t.rects.reference,
    r = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    a = Je(t, { elementContext: 'reference' }),
    u = Je(t, { altBoundary: !0 }),
    l = yn(a, o),
    i = yn(u, r, s),
    p = hn(l),
    d = hn(i)
  ;(t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: i,
    isReferenceHidden: p,
    hasPopperEscaped: d
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': p,
      'data-popper-escaped': d
    }))
}
var Yr = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: Vr
}
function qr(e, t, n) {
  var o = ae(e),
    r = [Y, V].indexOf(o) >= 0 ? -1 : 1,
    s = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    a = s[0],
    u = s[1]
  return (
    (a = a || 0),
    (u = (u || 0) * r),
    [Y, te].indexOf(o) >= 0 ? { x: u, y: a } : { x: a, y: u }
  )
}
function Xr(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    r = n.offset,
    s = r === void 0 ? [0, 0] : r,
    a = zt.reduce(function (p, d) {
      return (p[d] = qr(d, t.rects, s)), p
    }, {}),
    u = a[t.placement],
    l = u.x,
    i = u.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += i)),
    (t.modifiersData[o] = a)
}
var Gr = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: Xr
}
function Zr(e) {
  var t = e.state,
    n = e.name
  t.modifiersData[n] = Jn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  })
}
var Qn = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Zr, data: {} }
function Jr(e) {
  return e === 'x' ? 'y' : 'x'
}
function Qr(e) {
  var t = e.state,
    n = e.options,
    o = e.name,
    r = n.mainAxis,
    s = r === void 0 ? !0 : r,
    a = n.altAxis,
    u = a === void 0 ? !1 : a,
    l = n.boundary,
    i = n.rootBoundary,
    p = n.altBoundary,
    d = n.padding,
    b = n.tether,
    y = b === void 0 ? !0 : b,
    f = n.tetherOffset,
    v = f === void 0 ? 0 : f,
    T = Je(t, { boundary: l, rootBoundary: i, padding: d, altBoundary: p }),
    c = ae(t.placement),
    h = _e(t.placement),
    O = !h,
    E = jt(c),
    A = Jr(E),
    w = t.modifiersData.popperOffsets,
    g = t.rects.reference,
    S = t.rects.popper,
    B =
      typeof v == 'function'
        ? v(Object.assign({}, t.rects, { placement: t.placement }))
        : v,
    k =
      typeof B == 'number'
        ? { mainAxis: B, altAxis: B }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, B),
    L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    I = { x: 0, y: 0 }
  if (w) {
    if (s) {
      var F,
        K = E === 'y' ? V : Y,
        P = E === 'y' ? ee : te,
        N = E === 'y' ? 'height' : 'width',
        C = w[E],
        j = C + T[K],
        se = C - T[P],
        nt = y ? -S[N] / 2 : 0,
        wt = h === De ? g[N] : S[N],
        Ue = h === De ? -S[N] : -g[N],
        ot = t.elements.arrow,
        he = y && ot ? _t(ot) : { width: 0, height: 0 },
        ue = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Vn(),
        rt = ue[K],
        Ke = ue[P],
        Oe = qe(0, g[N], he[N]),
        mo = O
          ? g[N] / 2 - nt - Oe - rt - k.mainAxis
          : wt - Oe - rt - k.mainAxis,
        go = O
          ? -g[N] / 2 + nt + Oe + Ke + k.mainAxis
          : Ue + Oe + Ke + k.mainAxis,
        Tt = t.elements.arrow && tt(t.elements.arrow),
        bo = Tt ? (E === 'y' ? Tt.clientTop || 0 : Tt.clientLeft || 0) : 0,
        Zt = (F = L == null ? void 0 : L[E]) != null ? F : 0,
        yo = C + mo - Zt - bo,
        ho = C + go - Zt,
        Jt = qe(y ? yt(j, yo) : j, C, y ? Ce(se, ho) : se)
      ;(w[E] = Jt), (I[E] = Jt - C)
    }
    if (u) {
      var Qt,
        Eo = E === 'x' ? V : Y,
        wo = E === 'x' ? ee : te,
        Ee = w[A],
        st = A === 'y' ? 'height' : 'width',
        en = Ee + T[Eo],
        tn = Ee - T[wo],
        Ct = [V, Y].indexOf(c) !== -1,
        nn = (Qt = L == null ? void 0 : L[A]) != null ? Qt : 0,
        on = Ct ? en : Ee - g[st] - S[st] - nn + k.altAxis,
        rn = Ct ? Ee + g[st] + S[st] - nn - k.altAxis : tn,
        sn = y && Ct ? Ar(on, Ee, rn) : qe(y ? on : en, Ee, y ? rn : tn)
      ;(w[A] = sn), (I[A] = sn - Ee)
    }
    t.modifiersData[o] = I
  }
}
var es = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: Qr,
  requiresIfExists: ['offset']
}
function ts(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function ns(e) {
  return e === re(e) || !J(e) ? Ut(e) : ts(e)
}
function os(e) {
  var t = e.getBoundingClientRect(),
    n = ze(t.width) / e.offsetWidth || 1,
    o = ze(t.height) / e.offsetHeight || 1
  return n !== 1 || o !== 1
}
function rs(e, t, n) {
  n === void 0 && (n = !1)
  var o = J(t),
    r = J(t) && os(t),
    s = ye(t),
    a = xe(e, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 }
  return (
    (o || (!o && !n)) &&
      ((ie(t) !== 'body' || Wt(s)) && (u = ns(t)),
      J(t)
        ? ((l = xe(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : s && (l.x = Kt(s))),
    {
      x: a.left + u.scrollLeft - l.x,
      y: a.top + u.scrollTop - l.y,
      width: a.width,
      height: a.height
    }
  )
}
function ss(e) {
  var t = new Map(),
    n = new Set(),
    o = []
  e.forEach(function (s) {
    t.set(s.name, s)
  })
  function r(s) {
    n.add(s.name)
    var a = [].concat(s.requires || [], s.requiresIfExists || [])
    a.forEach(function (u) {
      if (!n.has(u)) {
        var l = t.get(u)
        l && r(l)
      }
    }),
      o.push(s)
  }
  return (
    e.forEach(function (s) {
      n.has(s.name) || r(s)
    }),
    o
  )
}
function as(e) {
  var t = ss(e)
  return wr.reduce(function (n, o) {
    return n.concat(
      t.filter(function (r) {
        return r.phase === o
      })
    )
  }, [])
}
function is(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            ;(t = void 0), n(e())
          })
        })),
      t
    )
  }
}
function ls(e) {
  var t = e.reduce(function (n, o) {
    var r = n[o.name]
    return (
      (n[o.name] = r
        ? Object.assign({}, r, o, {
            options: Object.assign({}, r.options, o.options),
            data: Object.assign({}, r.data, o.data)
          })
        : o),
      n
    )
  }, {})
  return Object.keys(t).map(function (n) {
    return t[n]
  })
}
var En = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function wn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return !t.some(function (o) {
    return !(o && typeof o.getBoundingClientRect == 'function')
  })
}
function Vt(e) {
  e === void 0 && (e = {})
  var t = e,
    n = t.defaultModifiers,
    o = n === void 0 ? [] : n,
    r = t.defaultOptions,
    s = r === void 0 ? En : r
  return function (a, u, l) {
    l === void 0 && (l = s)
    var i = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, En, s),
        modifiersData: {},
        elements: { reference: a, popper: u },
        attributes: {},
        styles: {}
      },
      p = [],
      d = !1,
      b = {
        state: i,
        setOptions: function (v) {
          var T = typeof v == 'function' ? v(i.options) : v
          f(),
            (i.options = Object.assign({}, s, i.options, T)),
            (i.scrollParents = {
              reference: He(a)
                ? Xe(a)
                : a.contextElement
                ? Xe(a.contextElement)
                : [],
              popper: Xe(u)
            })
          var c = as(ls([].concat(o, i.options.modifiers)))
          return (
            (i.orderedModifiers = c.filter(function (h) {
              return h.enabled
            })),
            y(),
            b.update()
          )
        },
        forceUpdate: function () {
          if (!d) {
            var v = i.elements,
              T = v.reference,
              c = v.popper
            if (wn(T, c)) {
              ;(i.rects = {
                reference: rs(T, tt(c), i.options.strategy === 'fixed'),
                popper: _t(c)
              }),
                (i.reset = !1),
                (i.placement = i.options.placement),
                i.orderedModifiers.forEach(function (S) {
                  return (i.modifiersData[S.name] = Object.assign({}, S.data))
                })
              for (var h = 0; h < i.orderedModifiers.length; h++) {
                if (i.reset === !0) {
                  ;(i.reset = !1), (h = -1)
                  continue
                }
                var O = i.orderedModifiers[h],
                  E = O.fn,
                  A = O.options,
                  w = A === void 0 ? {} : A,
                  g = O.name
                typeof E == 'function' &&
                  (i = E({ state: i, options: w, name: g, instance: b }) || i)
              }
            }
          }
        },
        update: is(function () {
          return new Promise(function (v) {
            b.forceUpdate(), v(i)
          })
        }),
        destroy: function () {
          f(), (d = !0)
        }
      }
    if (!wn(a, u)) return b
    b.setOptions(l).then(function (v) {
      !d && l.onFirstUpdate && l.onFirstUpdate(v)
    })
    function y() {
      i.orderedModifiers.forEach(function (v) {
        var T = v.name,
          c = v.options,
          h = c === void 0 ? {} : c,
          O = v.effect
        if (typeof O == 'function') {
          var E = O({ state: i, name: T, instance: b, options: h }),
            A = function () {}
          p.push(E || A)
        }
      })
    }
    function f() {
      p.forEach(function (v) {
        return v()
      }),
        (p = [])
    }
    return b
  }
}
Vt()
var us = [Gn, Qn, Xn, Kn]
Vt({ defaultModifiers: us })
var cs = [Gn, Qn, Xn, Kn, Gr, Wr, es, Pr, Yr],
  fs = Vt({ defaultModifiers: cs })
const ds = (e, t, n = {}) => {
  const o = {
      name: 'updateState',
      enabled: !0,
      phase: 'write',
      fn: ({ state: l }) => {
        const i = ps(l)
        Object.assign(a.value, i)
      },
      requires: ['computeStyles']
    },
    r = R(() => {
      const { onFirstUpdate: l, placement: i, strategy: p, modifiers: d } = m(n)
      return {
        onFirstUpdate: l,
        placement: i || 'bottom',
        strategy: p || 'absolute',
        modifiers: [...(d || []), o, { name: 'applyStyles', enabled: !1 }]
      }
    }),
    s = Bo(),
    a = M({
      styles: {
        popper: { position: m(r).strategy, left: '0', top: '0' },
        arrow: { position: 'absolute' }
      },
      attributes: {}
    }),
    u = () => {
      s.value && (s.value.destroy(), (s.value = void 0))
    }
  return (
    z(
      r,
      (l) => {
        const i = m(s)
        i && i.setOptions(l)
      },
      { deep: !0 }
    ),
    z([e, t], ([l, i]) => {
      u(), !(!l || !i) && (s.value = fs(l, i, m(r)))
    }),
    oe(() => {
      u()
    }),
    {
      state: R(() => {
        var l
        return { ...(((l = m(s)) == null ? void 0 : l.state) || {}) }
      }),
      styles: R(() => m(a).styles),
      attributes: R(() => m(a).attributes),
      update: () => {
        var l
        return (l = m(s)) == null ? void 0 : l.update()
      },
      forceUpdate: () => {
        var l
        return (l = m(s)) == null ? void 0 : l.forceUpdate()
      },
      instanceRef: R(() => m(s))
    }
  )
}
function ps(e) {
  const t = Object.keys(e.elements),
    n = ln(t.map((r) => [r, e.styles[r] || {}])),
    o = ln(t.map((r) => [r, e.attributes[r]]))
  return { styles: n, attributes: o }
}
const eo = (e) => {
  if (!e) return { onClick: Ie, onMousedown: Ie, onMouseup: Ie }
  let t = !1,
    n = !1
  return {
    onClick: (a) => {
      t && n && e(a), (t = n = !1)
    },
    onMousedown: (a) => {
      t = a.target === a.currentTarget
    },
    onMouseup: (a) => {
      n = a.target === a.currentTarget
    }
  }
}
function Tn() {
  let e
  const t = (o, r) => {
      n(), (e = window.setTimeout(o, r))
    },
    n = () => window.clearTimeout(e)
  return Lo(() => n()), { registerTimeout: t, cancelTimeout: n }
}
let Me = []
const Cn = (e) => {
    const t = e
    t.key === Ge.esc && Me.forEach((n) => n(t))
  },
  vs = (e) => {
    le(() => {
      Me.length === 0 && document.addEventListener('keydown', Cn),
        Z && Me.push(e)
    }),
      oe(() => {
        ;(Me = Me.filter((t) => t !== e)),
          Me.length === 0 && Z && document.removeEventListener('keydown', Cn)
      })
  }
let Sn
const to = () => {
    const e = No(),
      t = Zo(),
      n = R(() => `${e.value}-popper-container-${t.prefix}`),
      o = R(() => `#${n.value}`)
    return { id: n, selector: o }
  },
  ms = (e) => {
    const t = document.createElement('div')
    return (t.id = e), document.body.appendChild(t), t
  },
  gs = () => {
    const { id: e, selector: t } = to()
    return (
      Io(() => {
        Z && !Sn && !document.body.querySelector(t.value) && (Sn = ms(e.value))
      }),
      { id: e, selector: t }
    )
  },
  bs = q({
    showAfter: { type: Number, default: 0 },
    hideAfter: { type: Number, default: 200 },
    autoClose: { type: Number, default: 0 }
  }),
  ys = ({ showAfter: e, hideAfter: t, autoClose: n, open: o, close: r }) => {
    const { registerTimeout: s } = Tn(),
      { registerTimeout: a, cancelTimeout: u } = Tn()
    return {
      onOpen: (p) => {
        s(() => {
          o(p)
          const d = m(n)
          Be(d) &&
            d > 0 &&
            a(() => {
              r(p)
            }, d)
        }, m(e))
      },
      onClose: (p) => {
        u(),
          s(() => {
            r(p)
          }, m(t))
      }
    }
  },
  no = Symbol('elForwardRef'),
  hs = (e) => {
    Se(no, {
      setForwardRef: (n) => {
        e.value = n
      }
    })
  },
  Es = (e) => ({
    mounted(t) {
      e(t)
    },
    updated(t) {
      e(t)
    },
    unmounted() {
      e(null)
    }
  }),
  Le = 4,
  ws = {
    vertical: {
      offset: 'offsetHeight',
      scroll: 'scrollTop',
      scrollSize: 'scrollHeight',
      size: 'height',
      key: 'vertical',
      axis: 'Y',
      client: 'clientY',
      direction: 'top'
    },
    horizontal: {
      offset: 'offsetWidth',
      scroll: 'scrollLeft',
      scrollSize: 'scrollWidth',
      size: 'width',
      key: 'horizontal',
      axis: 'X',
      client: 'clientX',
      direction: 'left'
    }
  },
  Ts = ({ move: e, size: t, bar: n }) => ({
    [n.size]: t,
    transform: `translate${n.axis}(${e}%)`
  }),
  oo = Symbol('scrollbarContextKey'),
  Cs = q({
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: { type: Number, required: !0 },
    always: Boolean
  }),
  Ss = 'Thumb',
  Os = x({
    __name: 'thumb',
    props: Cs,
    setup(e) {
      const t = e,
        n = be(oo),
        o = ve('scrollbar')
      n || _n(Ss, 'can not inject scrollbar context')
      const r = M(),
        s = M(),
        a = M({}),
        u = M(!1)
      let l = !1,
        i = !1,
        p = Z ? document.onselectstart : null
      const d = R(() => ws[t.vertical ? 'vertical' : 'horizontal']),
        b = R(() => Ts({ size: t.size, move: t.move, bar: d.value })),
        y = R(
          () =>
            r.value[d.value.offset] ** 2 /
            n.wrapElement[d.value.scrollSize] /
            t.ratio /
            s.value[d.value.offset]
        ),
        f = (w) => {
          var g
          if ((w.stopPropagation(), w.ctrlKey || [1, 2].includes(w.button)))
            return
          ;(g = window.getSelection()) == null || g.removeAllRanges(), T(w)
          const S = w.currentTarget
          S &&
            (a.value[d.value.axis] =
              S[d.value.offset] -
              (w[d.value.client] -
                S.getBoundingClientRect()[d.value.direction]))
        },
        v = (w) => {
          if (!s.value || !r.value || !n.wrapElement) return
          const g = Math.abs(
              w.target.getBoundingClientRect()[d.value.direction] -
                w[d.value.client]
            ),
            S = s.value[d.value.offset] / 2,
            B = ((g - S) * 100 * y.value) / r.value[d.value.offset]
          n.wrapElement[d.value.scroll] =
            (B * n.wrapElement[d.value.scrollSize]) / 100
        },
        T = (w) => {
          w.stopImmediatePropagation(),
            (l = !0),
            document.addEventListener('mousemove', c),
            document.addEventListener('mouseup', h),
            (p = document.onselectstart),
            (document.onselectstart = () => !1)
        },
        c = (w) => {
          if (!r.value || !s.value || l === !1) return
          const g = a.value[d.value.axis]
          if (!g) return
          const S =
              (r.value.getBoundingClientRect()[d.value.direction] -
                w[d.value.client]) *
              -1,
            B = s.value[d.value.offset] - g,
            k = ((S - B) * 100 * y.value) / r.value[d.value.offset]
          n.wrapElement[d.value.scroll] =
            (k * n.wrapElement[d.value.scrollSize]) / 100
        },
        h = () => {
          ;(l = !1),
            (a.value[d.value.axis] = 0),
            document.removeEventListener('mousemove', c),
            document.removeEventListener('mouseup', h),
            A(),
            i && (u.value = !1)
        },
        O = () => {
          ;(i = !1), (u.value = !!t.size)
        },
        E = () => {
          ;(i = !0), (u.value = l)
        }
      oe(() => {
        A(), document.removeEventListener('mouseup', h)
      })
      const A = () => {
        document.onselectstart !== p && (document.onselectstart = p)
      }
      return (
        kt(we(n, 'scrollbarElement'), 'mousemove', O),
        kt(we(n, 'scrollbarElement'), 'mouseleave', E),
        (w, g) => (
          $(),
          U(
            Lt,
            { name: m(o).b('fade'), persisted: '' },
            {
              default: _(() => [
                Ne(
                  X(
                    'div',
                    {
                      ref_key: 'instance',
                      ref: r,
                      class: H([m(o).e('bar'), m(o).is(m(d).key)]),
                      onMousedown: v
                    },
                    [
                      X(
                        'div',
                        {
                          ref_key: 'thumb',
                          ref: s,
                          class: H(m(o).e('thumb')),
                          style: Fe(m(b)),
                          onMousedown: f
                        },
                        null,
                        38
                      )
                    ],
                    34
                  ),
                  [[Ye, w.always || u.value]]
                )
              ]),
              _: 1
            },
            8,
            ['name']
          )
        )
      )
    }
  })
var On = ne(Os, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue'
  ]
])
const As = q({
    always: { type: Boolean, default: !0 },
    width: String,
    height: String,
    ratioX: { type: Number, default: 1 },
    ratioY: { type: Number, default: 1 }
  }),
  Rs = x({
    __name: 'bar',
    props: As,
    setup(e, { expose: t }) {
      const n = e,
        o = M(0),
        r = M(0)
      return (
        t({
          handleScroll: (a) => {
            if (a) {
              const u = a.offsetHeight - Le,
                l = a.offsetWidth - Le
              ;(r.value = ((a.scrollTop * 100) / u) * n.ratioY),
                (o.value = ((a.scrollLeft * 100) / l) * n.ratioX)
            }
          }
        }),
        (a, u) => (
          $(),
          de(
            Dn,
            null,
            [
              W(
                On,
                {
                  move: o.value,
                  ratio: a.ratioX,
                  size: a.width,
                  always: a.always
                },
                null,
                8,
                ['move', 'ratio', 'size', 'always']
              ),
              W(
                On,
                {
                  move: r.value,
                  ratio: a.ratioY,
                  size: a.height,
                  vertical: '',
                  always: a.always
                },
                null,
                8,
                ['move', 'ratio', 'size', 'always']
              )
            ],
            64
          )
        )
      )
    }
  })
var ks = ne(Rs, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue'
  ]
])
const Ms = q({
    height: { type: [String, Number], default: '' },
    maxHeight: { type: [String, Number], default: '' },
    native: { type: Boolean, default: !1 },
    wrapStyle: { type: D([String, Object, Array]), default: '' },
    wrapClass: { type: [String, Array], default: '' },
    viewClass: { type: [String, Array], default: '' },
    viewStyle: { type: [String, Array, Object], default: '' },
    noresize: Boolean,
    tag: { type: String, default: 'div' },
    always: Boolean,
    minSize: { type: Number, default: 20 }
  }),
  Ps = { scroll: ({ scrollTop: e, scrollLeft: t }) => [e, t].every(Be) },
  Bs = 'ElScrollbar',
  Ls = x({ name: Bs }),
  Is = x({
    ...Ls,
    props: Ms,
    emits: Ps,
    setup(e, { expose: t, emit: n }) {
      const o = e,
        r = ve('scrollbar')
      let s, a
      const u = M(),
        l = M(),
        i = M(),
        p = M('0'),
        d = M('0'),
        b = M(),
        y = M(1),
        f = M(1),
        v = R(() => {
          const g = {}
          return (
            o.height && (g.height = bt(o.height)),
            o.maxHeight && (g.maxHeight = bt(o.maxHeight)),
            [o.wrapStyle, g]
          )
        }),
        T = R(() => [
          o.wrapClass,
          r.e('wrap'),
          { [r.em('wrap', 'hidden-default')]: !o.native }
        ]),
        c = R(() => [r.e('view'), o.viewClass]),
        h = () => {
          var g
          l.value &&
            ((g = b.value) == null || g.handleScroll(l.value),
            n('scroll', {
              scrollTop: l.value.scrollTop,
              scrollLeft: l.value.scrollLeft
            }))
        }
      function O(g, S) {
        It(g) ? l.value.scrollTo(g) : Be(g) && Be(S) && l.value.scrollTo(g, S)
      }
      const E = (g) => {
          Be(g) && (l.value.scrollTop = g)
        },
        A = (g) => {
          Be(g) && (l.value.scrollLeft = g)
        },
        w = () => {
          if (!l.value) return
          const g = l.value.offsetHeight - Le,
            S = l.value.offsetWidth - Le,
            B = g ** 2 / l.value.scrollHeight,
            k = S ** 2 / l.value.scrollWidth,
            L = Math.max(B, o.minSize),
            I = Math.max(k, o.minSize)
          ;(y.value = B / (g - B) / (L / (g - L))),
            (f.value = k / (S - k) / (I / (S - I))),
            (d.value = L + Le < g ? `${L}px` : ''),
            (p.value = I + Le < S ? `${I}px` : '')
        }
      return (
        z(
          () => o.noresize,
          (g) => {
            g
              ? (s == null || s(), a == null || a())
              : (({ stop: s } = Fo(i, w)), (a = kt('resize', w)))
          },
          { immediate: !0 }
        ),
        z(
          () => [o.maxHeight, o.height],
          () => {
            o.native ||
              fe(() => {
                var g
                w(),
                  l.value && ((g = b.value) == null || g.handleScroll(l.value))
              })
          }
        ),
        Se(oo, Hn({ scrollbarElement: u, wrapElement: l })),
        le(() => {
          o.native ||
            fe(() => {
              w()
            })
        }),
        $o(() => w()),
        t({
          wrapRef: l,
          update: w,
          scrollTo: O,
          setScrollTop: E,
          setScrollLeft: A,
          handleScroll: h
        }),
        (g, S) => (
          $(),
          de(
            'div',
            { ref_key: 'scrollbarRef', ref: u, class: H(m(r).b()) },
            [
              X(
                'div',
                {
                  ref_key: 'wrapRef',
                  ref: l,
                  class: H(m(T)),
                  style: Fe(m(v)),
                  onScroll: h
                },
                [
                  ($(),
                  U(
                    Ve(g.tag),
                    {
                      ref_key: 'resizeRef',
                      ref: i,
                      class: H(m(c)),
                      style: Fe(g.viewStyle)
                    },
                    { default: _(() => [Q(g.$slots, 'default')]), _: 3 },
                    8,
                    ['class', 'style']
                  ))
                ],
                38
              ),
              g.native
                ? G('v-if', !0)
                : ($(),
                  U(
                    ks,
                    {
                      key: 0,
                      ref_key: 'barRef',
                      ref: b,
                      height: d.value,
                      width: p.value,
                      always: g.always,
                      'ratio-x': f.value,
                      'ratio-y': y.value
                    },
                    null,
                    8,
                    ['height', 'width', 'always', 'ratio-x', 'ratio-y']
                  ))
            ],
            2
          )
        )
      )
    }
  })
var Ns = ne(Is, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue'
  ]
])
const li = Nt(Ns),
  Yt = Symbol('popper'),
  ro = Symbol('popperContent'),
  Fs = [
    'dialog',
    'grid',
    'group',
    'listbox',
    'menu',
    'navigation',
    'tooltip',
    'tree'
  ],
  so = q({ role: { type: String, values: Fs, default: 'tooltip' } }),
  $s = x({ name: 'ElPopper', inheritAttrs: !1 }),
  Ds = x({
    ...$s,
    props: so,
    setup(e, { expose: t }) {
      const n = e,
        o = M(),
        r = M(),
        s = M(),
        a = M(),
        u = R(() => n.role),
        l = {
          triggerRef: o,
          popperInstanceRef: r,
          contentRef: s,
          referenceRef: a,
          role: u
        }
      return t(l), Se(Yt, l), (i, p) => Q(i.$slots, 'default')
    }
  })
var Hs = ne(Ds, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue'
  ]
])
const ao = q({ arrowOffset: { type: Number, default: 5 } }),
  zs = x({ name: 'ElPopperArrow', inheritAttrs: !1 }),
  xs = x({
    ...zs,
    props: ao,
    setup(e, { expose: t }) {
      const n = e,
        o = ve('popper'),
        { arrowOffset: r, arrowRef: s, arrowStyle: a } = be(ro, void 0)
      return (
        z(
          () => n.arrowOffset,
          (u) => {
            r.value = u
          }
        ),
        oe(() => {
          s.value = void 0
        }),
        t({ arrowRef: s }),
        (u, l) => (
          $(),
          de(
            'span',
            {
              ref_key: 'arrowRef',
              ref: s,
              class: H(m(o).e('arrow')),
              style: Fe(m(a)),
              'data-popper-arrow': ''
            },
            null,
            6
          )
        )
      )
    }
  })
var _s = ne(xs, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue'
  ]
])
const js = 'ElOnlyChild',
  Us = x({
    name: js,
    setup(e, { slots: t, attrs: n }) {
      var o
      const r = be(no),
        s = Es((o = r == null ? void 0 : r.setForwardRef) != null ? o : Ie)
      return () => {
        var a
        const u = (a = t.default) == null ? void 0 : a.call(t, n)
        if (!u || u.length > 1) return null
        const l = io(u)
        return l ? Ne(Do(l, n), [[s]]) : null
      }
    }
  })
function io(e) {
  if (!e) return null
  const t = e
  for (const n of t) {
    if (It(n))
      switch (n.type) {
        case zo:
          continue
        case Ho:
        case 'svg':
          return An(n)
        case Dn:
          return io(n.children)
        default:
          return n
      }
    return An(n)
  }
  return null
}
function An(e) {
  const t = ve('only-child')
  return W('span', { class: t.e('content') }, [e])
}
const lo = q({
    virtualRef: { type: D(Object) },
    virtualTriggering: Boolean,
    onMouseenter: { type: D(Function) },
    onMouseleave: { type: D(Function) },
    onClick: { type: D(Function) },
    onKeydown: { type: D(Function) },
    onFocus: { type: D(Function) },
    onBlur: { type: D(Function) },
    onContextmenu: { type: D(Function) },
    id: String,
    open: Boolean
  }),
  Ks = x({ name: 'ElPopperTrigger', inheritAttrs: !1 }),
  Ws = x({
    ...Ks,
    props: lo,
    setup(e, { expose: t }) {
      const n = e,
        { role: o, triggerRef: r } = be(Yt, void 0)
      hs(r)
      const s = R(() => (u.value ? n.id : void 0)),
        a = R(() => {
          if (o && o.value === 'tooltip') return n.open && n.id ? n.id : void 0
        }),
        u = R(() => {
          if (o && o.value !== 'tooltip') return o.value
        }),
        l = R(() => (u.value ? `${n.open}` : void 0))
      let i
      return (
        le(() => {
          z(
            () => n.virtualRef,
            (p) => {
              p && (r.value = zn(p))
            },
            { immediate: !0 }
          ),
            z(
              r,
              (p, d) => {
                i == null || i(),
                  (i = void 0),
                  $e(p) &&
                    ([
                      'onMouseenter',
                      'onMouseleave',
                      'onClick',
                      'onKeydown',
                      'onFocus',
                      'onBlur',
                      'onContextmenu'
                    ].forEach((b) => {
                      var y
                      const f = n[b]
                      f &&
                        (p.addEventListener(b.slice(2).toLowerCase(), f),
                        (y = d == null ? void 0 : d.removeEventListener) ==
                          null || y.call(d, b.slice(2).toLowerCase(), f))
                    }),
                    (i = z(
                      [s, a, u, l],
                      (b) => {
                        ;[
                          'aria-controls',
                          'aria-describedby',
                          'aria-haspopup',
                          'aria-expanded'
                        ].forEach((y, f) => {
                          Dt(b[f])
                            ? p.removeAttribute(y)
                            : p.setAttribute(y, b[f])
                        })
                      },
                      { immediate: !0 }
                    ))),
                  $e(d) &&
                    [
                      'aria-controls',
                      'aria-describedby',
                      'aria-haspopup',
                      'aria-expanded'
                    ].forEach((b) => d.removeAttribute(b))
              },
              { immediate: !0 }
            )
        }),
        oe(() => {
          i == null || i(), (i = void 0)
        }),
        t({ triggerRef: r }),
        (p, d) =>
          p.virtualTriggering
            ? G('v-if', !0)
            : ($(),
              U(
                m(Us),
                Ft({ key: 0 }, p.$attrs, {
                  'aria-controls': m(s),
                  'aria-describedby': m(a),
                  'aria-expanded': m(l),
                  'aria-haspopup': m(u)
                }),
                { default: _(() => [Q(p.$slots, 'default')]), _: 3 },
                16,
                [
                  'aria-controls',
                  'aria-describedby',
                  'aria-expanded',
                  'aria-haspopup'
                ]
              ))
      )
    }
  })
var Vs = ne(Ws, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue'
  ]
])
const At = 'focus-trap.focus-after-trapped',
  Rt = 'focus-trap.focus-after-released',
  Ys = 'focus-trap.focusout-prevented',
  Rn = { cancelable: !0, bubbles: !1 },
  qs = { cancelable: !0, bubbles: !1 },
  kn = 'focusAfterTrapped',
  Mn = 'focusAfterReleased',
  Xs = Symbol('elFocusTrap'),
  qt = M(),
  Et = M(0),
  Xt = M(0)
let ct = 0
const uo = (e) => {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (o) => {
          const r = o.tagName === 'INPUT' && o.type === 'hidden'
          return o.disabled || o.hidden || r
            ? NodeFilter.FILTER_SKIP
            : o.tabIndex >= 0 || o === document.activeElement
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
        }
      })
    for (; n.nextNode(); ) t.push(n.currentNode)
    return t
  },
  Pn = (e, t) => {
    for (const n of e) if (!Gs(n, t)) return n
  },
  Gs = (e, t) => {
    if (getComputedStyle(e).visibility === 'hidden') return !0
    for (; e; ) {
      if (t && e === t) return !1
      if (getComputedStyle(e).display === 'none') return !0
      e = e.parentElement
    }
    return !1
  },
  Zs = (e) => {
    const t = uo(e),
      n = Pn(t, e),
      o = Pn(t.reverse(), e)
    return [n, o]
  },
  Js = (e) => e instanceof HTMLInputElement && 'select' in e,
  me = (e, t) => {
    if (e && e.focus) {
      const n = document.activeElement
      e.focus({ preventScroll: !0 }),
        (Xt.value = window.performance.now()),
        e !== n && Js(e) && t && e.select()
    }
  }
function Bn(e, t) {
  const n = [...e],
    o = e.indexOf(t)
  return o !== -1 && n.splice(o, 1), n
}
const Qs = () => {
    let e = []
    return {
      push: (o) => {
        const r = e[0]
        r && o !== r && r.pause(), (e = Bn(e, o)), e.unshift(o)
      },
      remove: (o) => {
        var r, s
        ;(e = Bn(e, o)),
          (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r)
      }
    }
  },
  ea = (e, t = !1) => {
    const n = document.activeElement
    for (const o of e) if ((me(o, t), document.activeElement !== n)) return
  },
  Ln = Qs(),
  ta = () => Et.value > Xt.value,
  ft = () => {
    ;(qt.value = 'pointer'), (Et.value = window.performance.now())
  },
  In = () => {
    ;(qt.value = 'keyboard'), (Et.value = window.performance.now())
  },
  na = () => (
    le(() => {
      ct === 0 &&
        (document.addEventListener('mousedown', ft),
        document.addEventListener('touchstart', ft),
        document.addEventListener('keydown', In)),
        ct++
    }),
    oe(() => {
      ct--,
        ct <= 0 &&
          (document.removeEventListener('mousedown', ft),
          document.removeEventListener('touchstart', ft),
          document.removeEventListener('keydown', In))
    }),
    {
      focusReason: qt,
      lastUserFocusTimestamp: Et,
      lastAutomatedFocusTimestamp: Xt
    }
  ),
  dt = (e) => new CustomEvent(Ys, { ...qs, detail: e }),
  oa = x({
    name: 'ElFocusTrap',
    inheritAttrs: !1,
    props: {
      loop: Boolean,
      trapped: Boolean,
      focusTrapEl: Object,
      focusStartEl: { type: [Object, String], default: 'first' }
    },
    emits: [
      kn,
      Mn,
      'focusin',
      'focusout',
      'focusout-prevented',
      'release-requested'
    ],
    setup(e, { emit: t }) {
      const n = M()
      let o, r
      const { focusReason: s } = na()
      vs((f) => {
        e.trapped && !a.paused && t('release-requested', f)
      })
      const a = {
          paused: !1,
          pause() {
            this.paused = !0
          },
          resume() {
            this.paused = !1
          }
        },
        u = (f) => {
          if ((!e.loop && !e.trapped) || a.paused) return
          const {
              key: v,
              altKey: T,
              ctrlKey: c,
              metaKey: h,
              currentTarget: O,
              shiftKey: E
            } = f,
            { loop: A } = e,
            w = v === Ge.tab && !T && !c && !h,
            g = document.activeElement
          if (w && g) {
            const S = O,
              [B, k] = Zs(S)
            if (B && k) {
              if (!E && g === k) {
                const I = dt({ focusReason: s.value })
                t('focusout-prevented', I),
                  I.defaultPrevented || (f.preventDefault(), A && me(B, !0))
              } else if (E && [B, S].includes(g)) {
                const I = dt({ focusReason: s.value })
                t('focusout-prevented', I),
                  I.defaultPrevented || (f.preventDefault(), A && me(k, !0))
              }
            } else if (g === S) {
              const I = dt({ focusReason: s.value })
              t('focusout-prevented', I),
                I.defaultPrevented || f.preventDefault()
            }
          }
        }
      Se(Xs, { focusTrapRef: n, onKeydown: u }),
        z(
          () => e.focusTrapEl,
          (f) => {
            f && (n.value = f)
          },
          { immediate: !0 }
        ),
        z([n], ([f], [v]) => {
          f &&
            (f.addEventListener('keydown', u),
            f.addEventListener('focusin', p),
            f.addEventListener('focusout', d)),
            v &&
              (v.removeEventListener('keydown', u),
              v.removeEventListener('focusin', p),
              v.removeEventListener('focusout', d))
        })
      const l = (f) => {
          t(kn, f)
        },
        i = (f) => t(Mn, f),
        p = (f) => {
          const v = m(n)
          if (!v) return
          const T = f.target,
            c = f.relatedTarget,
            h = T && v.contains(T)
          e.trapped || (c && v.contains(c)) || (o = c),
            h && t('focusin', f),
            !a.paused && e.trapped && (h ? (r = T) : me(r, !0))
        },
        d = (f) => {
          const v = m(n)
          if (!(a.paused || !v))
            if (e.trapped) {
              const T = f.relatedTarget
              !Dt(T) &&
                !v.contains(T) &&
                setTimeout(() => {
                  if (!a.paused && e.trapped) {
                    const c = dt({ focusReason: s.value })
                    t('focusout-prevented', c), c.defaultPrevented || me(r, !0)
                  }
                }, 0)
            } else {
              const T = f.target
              ;(T && v.contains(T)) || t('focusout', f)
            }
        }
      async function b() {
        await fe()
        const f = m(n)
        if (f) {
          Ln.push(a)
          const v = f.contains(document.activeElement)
            ? o
            : document.activeElement
          if (((o = v), !f.contains(v))) {
            const c = new Event(At, Rn)
            f.addEventListener(At, l),
              f.dispatchEvent(c),
              c.defaultPrevented ||
                fe(() => {
                  let h = e.focusStartEl
                  $t(h) ||
                    (me(h), document.activeElement !== h && (h = 'first')),
                    h === 'first' && ea(uo(f), !0),
                    (document.activeElement === v || h === 'container') && me(f)
                })
          }
        }
      }
      function y() {
        const f = m(n)
        if (f) {
          f.removeEventListener(At, l)
          const v = new CustomEvent(Rt, {
            ...Rn,
            detail: { focusReason: s.value }
          })
          f.addEventListener(Rt, i),
            f.dispatchEvent(v),
            !v.defaultPrevented &&
              (s.value == 'keyboard' ||
                !ta() ||
                f.contains(document.activeElement)) &&
              me(o ?? document.body),
            f.removeEventListener(Rt, l),
            Ln.remove(a)
        }
      }
      return (
        le(() => {
          e.trapped && b(),
            z(
              () => e.trapped,
              (f) => {
                f ? b() : y()
              }
            )
        }),
        oe(() => {
          e.trapped && y()
        }),
        { onKeydown: u }
      )
    }
  })
function ra(e, t, n, o, r, s) {
  return Q(e.$slots, 'default', { handleKeydown: e.onKeydown })
}
var co = ne(oa, [
  ['render', ra],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue'
  ]
])
const sa = ['fixed', 'absolute'],
  aa = q({
    boundariesPadding: { type: Number, default: 0 },
    fallbackPlacements: { type: D(Array), default: void 0 },
    gpuAcceleration: { type: Boolean, default: !0 },
    offset: { type: Number, default: 12 },
    placement: { type: String, values: zt, default: 'bottom' },
    popperOptions: { type: D(Object), default: () => ({}) },
    strategy: { type: String, values: sa, default: 'absolute' }
  }),
  fo = q({
    ...aa,
    id: String,
    style: { type: D([String, Array, Object]) },
    className: { type: D([String, Array, Object]) },
    effect: { type: String, default: 'dark' },
    visible: Boolean,
    enterable: { type: Boolean, default: !0 },
    pure: Boolean,
    focusOnShow: { type: Boolean, default: !1 },
    trapping: { type: Boolean, default: !1 },
    popperClass: { type: D([String, Array, Object]) },
    popperStyle: { type: D([String, Array, Object]) },
    referenceEl: { type: D(Object) },
    triggerTargetEl: { type: D(Object) },
    stopPopperMouseEvent: { type: Boolean, default: !0 },
    ariaLabel: { type: String, default: void 0 },
    virtualTriggering: Boolean,
    zIndex: Number
  }),
  ia = {
    mouseenter: (e) => e instanceof MouseEvent,
    mouseleave: (e) => e instanceof MouseEvent,
    focus: () => !0,
    blur: () => !0,
    close: () => !0
  },
  la = (e, t = []) => {
    const { placement: n, strategy: o, popperOptions: r } = e,
      s = { placement: n, strategy: o, ...r, modifiers: [...ca(e), ...t] }
    return fa(s, r == null ? void 0 : r.modifiers), s
  },
  ua = (e) => {
    if (Z) return zn(e)
  }
function ca(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e
  return [
    { name: 'offset', options: { offset: [0, t ?? 12] } },
    {
      name: 'preventOverflow',
      options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } }
    },
    { name: 'flip', options: { padding: 5, fallbackPlacements: o } },
    { name: 'computeStyles', options: { gpuAcceleration: n } }
  ]
}
function fa(e, t) {
  t && (e.modifiers = [...e.modifiers, ...(t ?? [])])
}
const da = 0,
  pa = (e) => {
    const {
        popperInstanceRef: t,
        contentRef: n,
        triggerRef: o,
        role: r
      } = be(Yt, void 0),
      s = M(),
      a = M(),
      u = R(() => ({ name: 'eventListeners', enabled: !!e.visible })),
      l = R(() => {
        var c
        const h = m(s),
          O = (c = m(a)) != null ? c : da
        return {
          name: 'arrow',
          enabled: !or(h),
          options: { element: h, padding: O }
        }
      }),
      i = R(() => ({
        onFirstUpdate: () => {
          f()
        },
        ...la(e, [m(l), m(u)])
      })),
      p = R(() => ua(e.referenceEl) || m(o)),
      {
        attributes: d,
        state: b,
        styles: y,
        update: f,
        forceUpdate: v,
        instanceRef: T
      } = ds(p, n, i)
    return (
      z(T, (c) => (t.value = c)),
      le(() => {
        z(
          () => {
            var c
            return (c = m(p)) == null ? void 0 : c.getBoundingClientRect()
          },
          () => {
            f()
          }
        )
      }),
      {
        attributes: d,
        arrowRef: s,
        contentRef: n,
        instanceRef: T,
        state: b,
        styles: y,
        role: r,
        forceUpdate: v,
        update: f
      }
    )
  },
  va = (e, { attributes: t, styles: n, role: o }) => {
    const { nextZIndex: r } = xo(),
      s = ve('popper'),
      a = R(() => m(t).popper),
      u = M(e.zIndex || r()),
      l = R(() => [s.b(), s.is('pure', e.pure), s.is(e.effect), e.popperClass]),
      i = R(() => [{ zIndex: m(u) }, m(n).popper, e.popperStyle || {}]),
      p = R(() => (o.value === 'dialog' ? 'false' : void 0)),
      d = R(() => m(n).arrow || {})
    return {
      ariaModal: p,
      arrowStyle: d,
      contentAttrs: a,
      contentClass: l,
      contentStyle: i,
      contentZIndex: u,
      updateZIndex: () => {
        u.value = e.zIndex || r()
      }
    }
  },
  ma = (e, t) => {
    const n = M(!1),
      o = M()
    return {
      focusStartRef: o,
      trapped: n,
      onFocusAfterReleased: (i) => {
        var p
        ;((p = i.detail) == null ? void 0 : p.focusReason) !== 'pointer' &&
          ((o.value = 'first'), t('blur'))
      },
      onFocusAfterTrapped: () => {
        t('focus')
      },
      onFocusInTrap: (i) => {
        e.visible &&
          !n.value &&
          (i.target && (o.value = i.target), (n.value = !0))
      },
      onFocusoutPrevented: (i) => {
        e.trapping ||
          (i.detail.focusReason === 'pointer' && i.preventDefault(),
          (n.value = !1))
      },
      onReleaseRequested: () => {
        ;(n.value = !1), t('close')
      }
    }
  },
  ga = x({ name: 'ElPopperContent' }),
  ba = x({
    ...ga,
    props: fo,
    emits: ia,
    setup(e, { expose: t, emit: n }) {
      const o = e,
        {
          focusStartRef: r,
          trapped: s,
          onFocusAfterReleased: a,
          onFocusAfterTrapped: u,
          onFocusInTrap: l,
          onFocusoutPrevented: i,
          onReleaseRequested: p
        } = ma(o, n),
        {
          attributes: d,
          arrowRef: b,
          contentRef: y,
          styles: f,
          instanceRef: v,
          role: T,
          update: c
        } = pa(o),
        {
          ariaModal: h,
          arrowStyle: O,
          contentAttrs: E,
          contentClass: A,
          contentStyle: w,
          updateZIndex: g
        } = va(o, { styles: f, attributes: d, role: T }),
        S = be(fn, void 0),
        B = M()
      Se(ro, { arrowStyle: O, arrowRef: b, arrowOffset: B }),
        S &&
          (S.addInputId || S.removeInputId) &&
          Se(fn, { ...S, addInputId: Ie, removeInputId: Ie })
      let k
      const L = (F = !0) => {
          c(), F && g()
        },
        I = () => {
          L(!1),
            o.visible && o.focusOnShow
              ? (s.value = !0)
              : o.visible === !1 && (s.value = !1)
        }
      return (
        le(() => {
          z(
            () => o.triggerTargetEl,
            (F, K) => {
              k == null || k(), (k = void 0)
              const P = m(F || y.value),
                N = m(K || y.value)
              $e(P) &&
                (k = z(
                  [T, () => o.ariaLabel, h, () => o.id],
                  (C) => {
                    ;['role', 'aria-label', 'aria-modal', 'id'].forEach(
                      (j, se) => {
                        Dt(C[se])
                          ? P.removeAttribute(j)
                          : P.setAttribute(j, C[se])
                      }
                    )
                  },
                  { immediate: !0 }
                )),
                N !== P &&
                  $e(N) &&
                  ['role', 'aria-label', 'aria-modal', 'id'].forEach((C) => {
                    N.removeAttribute(C)
                  })
            },
            { immediate: !0 }
          ),
            z(() => o.visible, I, { immediate: !0 })
        }),
        oe(() => {
          k == null || k(), (k = void 0)
        }),
        t({
          popperContentRef: y,
          popperInstanceRef: v,
          updatePopper: L,
          contentStyle: w
        }),
        (F, K) => (
          $(),
          de(
            'div',
            Ft({ ref_key: 'contentRef', ref: y }, m(E), {
              style: m(w),
              class: m(A),
              tabindex: '-1',
              onMouseenter: K[0] || (K[0] = (P) => F.$emit('mouseenter', P)),
              onMouseleave: K[1] || (K[1] = (P) => F.$emit('mouseleave', P))
            }),
            [
              W(
                m(co),
                {
                  trapped: m(s),
                  'trap-on-focus-in': !0,
                  'focus-trap-el': m(y),
                  'focus-start-el': m(r),
                  onFocusAfterTrapped: m(u),
                  onFocusAfterReleased: m(a),
                  onFocusin: m(l),
                  onFocusoutPrevented: m(i),
                  onReleaseRequested: m(p)
                },
                { default: _(() => [Q(F.$slots, 'default')]), _: 3 },
                8,
                [
                  'trapped',
                  'focus-trap-el',
                  'focus-start-el',
                  'onFocusAfterTrapped',
                  'onFocusAfterReleased',
                  'onFocusin',
                  'onFocusoutPrevented',
                  'onReleaseRequested'
                ]
              )
            ],
            16
          )
        )
      )
    }
  })
var ya = ne(ba, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue'
  ]
])
const ha = Nt(Hs),
  Gt = Symbol('elTooltip'),
  po = q({
    ...bs,
    ...fo,
    appendTo: { type: D([String, Object]) },
    content: { type: String, default: '' },
    rawContent: { type: Boolean, default: !1 },
    persistent: Boolean,
    ariaLabel: String,
    visible: { type: D(Boolean), default: null },
    transition: String,
    teleported: { type: Boolean, default: !0 },
    disabled: Boolean
  }),
  vo = q({
    ...lo,
    disabled: Boolean,
    trigger: { type: D([String, Array]), default: 'hover' },
    triggerKeys: { type: D(Array), default: () => [Ge.enter, Ge.space] }
  }),
  {
    useModelToggleProps: Ea,
    useModelToggleEmits: wa,
    useModelToggle: Ta
  } = jn('visible'),
  Ca = q({
    ...so,
    ...Ea,
    ...po,
    ...vo,
    ...ao,
    showArrow: { type: Boolean, default: !0 }
  }),
  Sa = [...wa, 'before-show', 'before-hide', 'show', 'hide', 'open', 'close'],
  Oa = (e, t) => (pt(e) ? e.includes(t) : e === t),
  Re = (e, t, n) => (o) => {
    Oa(m(e), t) && n(o)
  },
  Aa = x({ name: 'ElTooltipTrigger' }),
  Ra = x({
    ...Aa,
    props: vo,
    setup(e, { expose: t }) {
      const n = e,
        o = ve('tooltip'),
        {
          controlled: r,
          id: s,
          open: a,
          onOpen: u,
          onClose: l,
          onToggle: i
        } = be(Gt, void 0),
        p = M(null),
        d = () => {
          if (m(r) || n.disabled) return !0
        },
        b = we(n, 'trigger'),
        y = ce(d, Re(b, 'hover', u)),
        f = ce(d, Re(b, 'hover', l)),
        v = ce(
          d,
          Re(b, 'click', (E) => {
            E.button === 0 && i(E)
          })
        ),
        T = ce(d, Re(b, 'focus', u)),
        c = ce(d, Re(b, 'focus', l)),
        h = ce(
          d,
          Re(b, 'contextmenu', (E) => {
            E.preventDefault(), i(E)
          })
        ),
        O = ce(d, (E) => {
          const { code: A } = E
          n.triggerKeys.includes(A) && (E.preventDefault(), i(E))
        })
      return (
        t({ triggerRef: p }),
        (E, A) => (
          $(),
          U(
            m(Vs),
            {
              id: m(s),
              'virtual-ref': E.virtualRef,
              open: m(a),
              'virtual-triggering': E.virtualTriggering,
              class: H(m(o).e('trigger')),
              onBlur: m(c),
              onClick: m(v),
              onContextmenu: m(h),
              onFocus: m(T),
              onMouseenter: m(y),
              onMouseleave: m(f),
              onKeydown: m(O)
            },
            { default: _(() => [Q(E.$slots, 'default')]), _: 3 },
            8,
            [
              'id',
              'virtual-ref',
              'open',
              'virtual-triggering',
              'class',
              'onBlur',
              'onClick',
              'onContextmenu',
              'onFocus',
              'onMouseenter',
              'onMouseleave',
              'onKeydown'
            ]
          )
        )
      )
    }
  })
var ka = ne(Ra, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue'
  ]
])
const Ma = x({ name: 'ElTooltipContent', inheritAttrs: !1 }),
  Pa = x({
    ...Ma,
    props: po,
    setup(e, { expose: t }) {
      const n = e,
        { selector: o } = to(),
        r = ve('tooltip'),
        s = M(null),
        a = M(!1),
        {
          controlled: u,
          id: l,
          open: i,
          trigger: p,
          onClose: d,
          onOpen: b,
          onShow: y,
          onHide: f,
          onBeforeShow: v,
          onBeforeHide: T
        } = be(Gt, void 0),
        c = R(() => n.transition || `${r.namespace.value}-fade-in-linear`),
        h = R(() => n.persistent)
      oe(() => {
        a.value = !0
      })
      const O = R(() => (m(h) ? !0 : m(i))),
        E = R(() => (n.disabled ? !1 : m(i))),
        A = R(() => n.appendTo || o.value),
        w = R(() => {
          var C
          return (C = n.style) != null ? C : {}
        }),
        g = R(() => !m(i)),
        S = () => {
          f()
        },
        B = () => {
          if (m(u)) return !0
        },
        k = ce(B, () => {
          n.enterable && m(p) === 'hover' && b()
        }),
        L = ce(B, () => {
          m(p) === 'hover' && d()
        }),
        I = () => {
          var C, j
          ;(j = (C = s.value) == null ? void 0 : C.updatePopper) == null ||
            j.call(C),
            v == null || v()
        },
        F = () => {
          T == null || T()
        },
        K = () => {
          y(),
            (N = jo(
              R(() => {
                var C
                return (C = s.value) == null ? void 0 : C.popperContentRef
              }),
              () => {
                if (m(u)) return
                m(p) !== 'hover' && d()
              }
            ))
        },
        P = () => {
          n.virtualTriggering || d()
        }
      let N
      return (
        z(
          () => m(i),
          (C) => {
            C || N == null || N()
          },
          { flush: 'post' }
        ),
        z(
          () => n.content,
          () => {
            var C, j
            ;(j = (C = s.value) == null ? void 0 : C.updatePopper) == null ||
              j.call(C)
          }
        ),
        t({ contentRef: s }),
        (C, j) => (
          $(),
          U(
            _o,
            { disabled: !C.teleported, to: m(A) },
            [
              W(
                Lt,
                {
                  name: m(c),
                  onAfterLeave: S,
                  onBeforeEnter: I,
                  onAfterEnter: K,
                  onBeforeLeave: F
                },
                {
                  default: _(() => [
                    m(O)
                      ? Ne(
                          ($(),
                          U(
                            m(ya),
                            Ft(
                              {
                                key: 0,
                                id: m(l),
                                ref_key: 'contentRef',
                                ref: s
                              },
                              C.$attrs,
                              {
                                'aria-label': C.ariaLabel,
                                'aria-hidden': m(g),
                                'boundaries-padding': C.boundariesPadding,
                                'fallback-placements': C.fallbackPlacements,
                                'gpu-acceleration': C.gpuAcceleration,
                                offset: C.offset,
                                placement: C.placement,
                                'popper-options': C.popperOptions,
                                strategy: C.strategy,
                                effect: C.effect,
                                enterable: C.enterable,
                                pure: C.pure,
                                'popper-class': C.popperClass,
                                'popper-style': [C.popperStyle, m(w)],
                                'reference-el': C.referenceEl,
                                'trigger-target-el': C.triggerTargetEl,
                                visible: m(E),
                                'z-index': C.zIndex,
                                onMouseenter: m(k),
                                onMouseleave: m(L),
                                onBlur: P,
                                onClose: m(d)
                              }
                            ),
                            {
                              default: _(() => [
                                a.value
                                  ? G('v-if', !0)
                                  : Q(C.$slots, 'default', { key: 0 })
                              ]),
                              _: 3
                            },
                            16,
                            [
                              'id',
                              'aria-label',
                              'aria-hidden',
                              'boundaries-padding',
                              'fallback-placements',
                              'gpu-acceleration',
                              'offset',
                              'placement',
                              'popper-options',
                              'strategy',
                              'effect',
                              'enterable',
                              'pure',
                              'popper-class',
                              'popper-style',
                              'reference-el',
                              'trigger-target-el',
                              'visible',
                              'z-index',
                              'onMouseenter',
                              'onMouseleave',
                              'onClose'
                            ]
                          )),
                          [[Ye, m(E)]]
                        )
                      : G('v-if', !0)
                  ]),
                  _: 3
                },
                8,
                ['name']
              )
            ],
            8,
            ['disabled', 'to']
          )
        )
      )
    }
  })
var Ba = ne(Pa, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue'
  ]
])
const La = ['innerHTML'],
  Ia = { key: 1 },
  Na = x({ name: 'ElTooltip' }),
  Fa = x({
    ...Na,
    props: Ca,
    emits: Sa,
    setup(e, { expose: t, emit: n }) {
      const o = e
      gs()
      const r = Mt(),
        s = M(),
        a = M(),
        u = () => {
          var c
          const h = m(s)
          h && ((c = h.popperInstanceRef) == null || c.update())
        },
        l = M(!1),
        i = M(),
        {
          show: p,
          hide: d,
          hasUpdateHandler: b
        } = Ta({ indicator: l, toggleReason: i }),
        { onOpen: y, onClose: f } = ys({
          showAfter: we(o, 'showAfter'),
          hideAfter: we(o, 'hideAfter'),
          autoClose: we(o, 'autoClose'),
          open: p,
          close: d
        }),
        v = R(() => $n(o.visible) && !b.value)
      Se(Gt, {
        controlled: v,
        id: r,
        open: Uo(l),
        trigger: we(o, 'trigger'),
        onOpen: (c) => {
          y(c)
        },
        onClose: (c) => {
          f(c)
        },
        onToggle: (c) => {
          m(l) ? f(c) : y(c)
        },
        onShow: () => {
          n('show', i.value)
        },
        onHide: () => {
          n('hide', i.value)
        },
        onBeforeShow: () => {
          n('before-show', i.value)
        },
        onBeforeHide: () => {
          n('before-hide', i.value)
        },
        updatePopper: u
      }),
        z(
          () => o.disabled,
          (c) => {
            c && l.value && (l.value = !1)
          }
        )
      const T = () => {
        var c, h
        const O =
          (h = (c = a.value) == null ? void 0 : c.contentRef) == null
            ? void 0
            : h.popperContentRef
        return O && O.contains(document.activeElement)
      }
      return (
        Ko(() => l.value && d()),
        t({
          popperRef: s,
          contentRef: a,
          isFocusInsideContent: T,
          updatePopper: u,
          onOpen: y,
          onClose: f,
          hide: d
        }),
        (c, h) => (
          $(),
          U(
            m(ha),
            { ref_key: 'popperRef', ref: s, role: c.role },
            {
              default: _(() => [
                W(
                  ka,
                  {
                    disabled: c.disabled,
                    trigger: c.trigger,
                    'trigger-keys': c.triggerKeys,
                    'virtual-ref': c.virtualRef,
                    'virtual-triggering': c.virtualTriggering
                  },
                  {
                    default: _(() => [
                      c.$slots.default
                        ? Q(c.$slots, 'default', { key: 0 })
                        : G('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  [
                    'disabled',
                    'trigger',
                    'trigger-keys',
                    'virtual-ref',
                    'virtual-triggering'
                  ]
                ),
                W(
                  Ba,
                  {
                    ref_key: 'contentRef',
                    ref: a,
                    'aria-label': c.ariaLabel,
                    'boundaries-padding': c.boundariesPadding,
                    content: c.content,
                    disabled: c.disabled,
                    effect: c.effect,
                    enterable: c.enterable,
                    'fallback-placements': c.fallbackPlacements,
                    'hide-after': c.hideAfter,
                    'gpu-acceleration': c.gpuAcceleration,
                    offset: c.offset,
                    persistent: c.persistent,
                    'popper-class': c.popperClass,
                    'popper-style': c.popperStyle,
                    placement: c.placement,
                    'popper-options': c.popperOptions,
                    pure: c.pure,
                    'raw-content': c.rawContent,
                    'reference-el': c.referenceEl,
                    'trigger-target-el': c.triggerTargetEl,
                    'show-after': c.showAfter,
                    strategy: c.strategy,
                    teleported: c.teleported,
                    transition: c.transition,
                    'virtual-triggering': c.virtualTriggering,
                    'z-index': c.zIndex,
                    'append-to': c.appendTo
                  },
                  {
                    default: _(() => [
                      Q(c.$slots, 'content', {}, () => [
                        c.rawContent
                          ? ($(),
                            de(
                              'span',
                              { key: 0, innerHTML: c.content },
                              null,
                              8,
                              La
                            ))
                          : ($(), de('span', Ia, ke(c.content), 1))
                      ]),
                      c.showArrow
                        ? ($(),
                          U(
                            m(_s),
                            { key: 0, 'arrow-offset': c.arrowOffset },
                            null,
                            8,
                            ['arrow-offset']
                          ))
                        : G('v-if', !0)
                    ]),
                    _: 3
                  },
                  8,
                  [
                    'aria-label',
                    'boundaries-padding',
                    'content',
                    'disabled',
                    'effect',
                    'enterable',
                    'fallback-placements',
                    'hide-after',
                    'gpu-acceleration',
                    'offset',
                    'persistent',
                    'popper-class',
                    'popper-style',
                    'placement',
                    'popper-options',
                    'pure',
                    'raw-content',
                    'reference-el',
                    'trigger-target-el',
                    'show-after',
                    'strategy',
                    'teleported',
                    'transition',
                    'virtual-triggering',
                    'z-index',
                    'append-to'
                  ]
                )
              ]),
              _: 3
            },
            8,
            ['role']
          )
        )
      )
    }
  })
var $a = ne(Fa, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue'
  ]
])
const ui = Nt($a),
  Bt = '_trap-focus-children',
  Te = [],
  Nn = (e) => {
    if (Te.length === 0) return
    const t = Te[Te.length - 1][Bt]
    if (t.length > 0 && e.code === Ge.tab) {
      if (t.length === 1) {
        e.preventDefault(), document.activeElement !== t[0] && t[0].focus()
        return
      }
      const n = e.shiftKey,
        o = e.target === t[0],
        r = e.target === t[t.length - 1]
      o && n && (e.preventDefault(), t[t.length - 1].focus()),
        r && !n && (e.preventDefault(), t[0].focus())
    }
  },
  Da = {
    beforeMount(e) {
      ;(e[Bt] = dn(e)),
        Te.push(e),
        Te.length <= 1 && document.addEventListener('keydown', Nn)
    },
    updated(e) {
      fe(() => {
        e[Bt] = dn(e)
      })
    },
    unmounted() {
      Te.shift(), Te.length === 0 && document.removeEventListener('keydown', Nn)
    }
  },
  Ha = q({
    mask: { type: Boolean, default: !0 },
    customMaskEvent: { type: Boolean, default: !1 },
    overlayClass: { type: D([String, Array, Object]) },
    zIndex: { type: D([String, Number]) }
  }),
  za = { click: (e) => e instanceof MouseEvent },
  xa = 'overlay'
var _a = x({
  name: 'ElOverlay',
  props: Ha,
  emits: za,
  setup(e, { slots: t, emit: n }) {
    const o = ve(xa),
      r = (l) => {
        n('click', l)
      },
      {
        onClick: s,
        onMousedown: a,
        onMouseup: u
      } = eo(e.customMaskEvent ? void 0 : r)
    return () =>
      e.mask
        ? W(
            'div',
            {
              class: [o.b(), e.overlayClass],
              style: { zIndex: e.zIndex },
              onClick: s,
              onMousedown: a,
              onMouseup: u
            },
            [Q(t, 'default')],
            vt.STYLE | vt.CLASS | vt.PROPS,
            ['onClick', 'onMouseup', 'onMousedown']
          )
        : Wo(
            'div',
            {
              class: e.overlayClass,
              style: {
                zIndex: e.zIndex,
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px'
              }
            },
            [Q(t, 'default')]
          )
  }
})
const ja = _a,
  Ua = x({
    name: 'ElMessageBox',
    directives: { TrapFocus: Da },
    components: {
      ElButton: Jo,
      ElFocusTrap: co,
      ElInput: Qo,
      ElOverlay: ja,
      ElIcon: Vo,
      ...Yo
    },
    inheritAttrs: !1,
    props: {
      buttonSize: { type: String, validator: sr },
      modal: { type: Boolean, default: !0 },
      lockScroll: { type: Boolean, default: !0 },
      showClose: { type: Boolean, default: !0 },
      closeOnClickModal: { type: Boolean, default: !0 },
      closeOnPressEscape: { type: Boolean, default: !0 },
      closeOnHashChange: { type: Boolean, default: !0 },
      center: Boolean,
      draggable: Boolean,
      roundButton: { default: !1, type: Boolean },
      container: { type: String, default: 'body' },
      boxType: { type: String, default: '' }
    },
    emits: ['vanish', 'action'],
    setup(e, { emit: t }) {
      const {
          locale: n,
          zIndex: o,
          ns: r,
          size: s
        } = qo(
          'message-box',
          R(() => e.buttonSize)
        ),
        { t: a } = n,
        { nextZIndex: u } = o,
        l = M(!1),
        i = Hn({
          autofocus: !0,
          beforeClose: null,
          callback: null,
          cancelButtonText: '',
          cancelButtonClass: '',
          confirmButtonText: '',
          confirmButtonClass: '',
          customClass: '',
          customStyle: {},
          dangerouslyUseHTMLString: !1,
          distinguishCancelAndClose: !1,
          icon: '',
          inputPattern: null,
          inputPlaceholder: '',
          inputType: 'text',
          inputValue: null,
          inputValidator: null,
          inputErrorMessage: '',
          message: null,
          modalFade: !0,
          modalClass: '',
          showCancelButton: !1,
          showConfirmButton: !0,
          type: '',
          title: void 0,
          showInput: !1,
          action: '',
          confirmButtonLoading: !1,
          cancelButtonLoading: !1,
          confirmButtonDisabled: !1,
          editorErrorMessage: '',
          validateError: !1,
          zIndex: u()
        }),
        p = R(() => {
          const P = i.type
          return { [r.bm('icon', P)]: P && un[P] }
        }),
        d = Mt(),
        b = Mt(),
        y = R(() => i.icon || un[i.type] || ''),
        f = R(() => !!i.message),
        v = M(),
        T = M(),
        c = M(),
        h = M(),
        O = M(),
        E = R(() => i.confirmButtonClass)
      z(
        () => i.inputValue,
        async (P) => {
          await fe(), e.boxType === 'prompt' && P !== null && L()
        },
        { immediate: !0 }
      ),
        z(
          () => l.value,
          (P) => {
            var N, C
            P &&
              (e.boxType !== 'prompt' &&
                (i.autofocus
                  ? (c.value =
                      (C = (N = O.value) == null ? void 0 : N.$el) != null
                        ? C
                        : v.value)
                  : (c.value = v.value)),
              (i.zIndex = u())),
              e.boxType === 'prompt' &&
                (P
                  ? fe().then(() => {
                      var j
                      h.value &&
                        h.value.$el &&
                        (i.autofocus
                          ? (c.value = (j = I()) != null ? j : v.value)
                          : (c.value = v.value))
                    })
                  : ((i.editorErrorMessage = ''), (i.validateError = !1)))
          }
        )
      const A = R(() => e.draggable)
      ar(v, T, A),
        le(async () => {
          await fe(),
            e.closeOnHashChange && window.addEventListener('hashchange', w)
        }),
        oe(() => {
          e.closeOnHashChange && window.removeEventListener('hashchange', w)
        })
      function w() {
        l.value &&
          ((l.value = !1),
          fe(() => {
            i.action && t('action', i.action)
          }))
      }
      const g = () => {
          e.closeOnClickModal &&
            k(i.distinguishCancelAndClose ? 'close' : 'cancel')
        },
        S = eo(g),
        B = (P) => {
          if (i.inputType !== 'textarea')
            return P.preventDefault(), k('confirm')
        },
        k = (P) => {
          var N
          ;(e.boxType === 'prompt' && P === 'confirm' && !L()) ||
            ((i.action = P),
            i.beforeClose
              ? (N = i.beforeClose) == null || N.call(i, P, i, w)
              : w())
        },
        L = () => {
          if (e.boxType === 'prompt') {
            const P = i.inputPattern
            if (P && !P.test(i.inputValue || ''))
              return (
                (i.editorErrorMessage =
                  i.inputErrorMessage || a('el.messagebox.error')),
                (i.validateError = !0),
                !1
              )
            const N = i.inputValidator
            if (typeof N == 'function') {
              const C = N(i.inputValue)
              if (C === !1)
                return (
                  (i.editorErrorMessage =
                    i.inputErrorMessage || a('el.messagebox.error')),
                  (i.validateError = !0),
                  !1
                )
              if (typeof C == 'string')
                return (i.editorErrorMessage = C), (i.validateError = !0), !1
            }
          }
          return (i.editorErrorMessage = ''), (i.validateError = !1), !0
        },
        I = () => {
          const P = h.value.$refs
          return P.input || P.textarea
        },
        F = () => {
          k('close')
        },
        K = () => {
          e.closeOnPressEscape && F()
        }
      return (
        e.lockScroll && ir(l),
        {
          ...Xo(i),
          ns: r,
          overlayEvent: S,
          visible: l,
          hasMessage: f,
          typeClass: p,
          contentId: d,
          inputId: b,
          btnSize: s,
          iconComponent: y,
          confirmButtonClasses: E,
          rootRef: v,
          focusStartRef: c,
          headerRef: T,
          inputRef: h,
          confirmRef: O,
          doClose: w,
          handleClose: F,
          onCloseRequested: K,
          handleWrapperClick: g,
          handleInputEnter: B,
          handleAction: k,
          t: a
        }
      )
    }
  }),
  Ka = ['aria-label', 'aria-describedby'],
  Wa = ['aria-label'],
  Va = ['id']
function Ya(e, t, n, o, r, s) {
  const a = Ae('el-icon'),
    u = Ae('close'),
    l = Ae('el-input'),
    i = Ae('el-button'),
    p = Ae('el-focus-trap'),
    d = Ae('el-overlay')
  return (
    $(),
    U(
      Lt,
      {
        name: 'fade-in-linear',
        onAfterLeave: t[11] || (t[11] = (b) => e.$emit('vanish')),
        persisted: ''
      },
      {
        default: _(() => [
          Ne(
            W(
              d,
              {
                'z-index': e.zIndex,
                'overlay-class': [e.ns.is('message-box'), e.modalClass],
                mask: e.modal
              },
              {
                default: _(() => [
                  X(
                    'div',
                    {
                      role: 'dialog',
                      'aria-label': e.title,
                      'aria-modal': 'true',
                      'aria-describedby': e.showInput ? void 0 : e.contentId,
                      class: H(`${e.ns.namespace.value}-overlay-message-box`),
                      onClick:
                        t[8] ||
                        (t[8] = (...b) =>
                          e.overlayEvent.onClick &&
                          e.overlayEvent.onClick(...b)),
                      onMousedown:
                        t[9] ||
                        (t[9] = (...b) =>
                          e.overlayEvent.onMousedown &&
                          e.overlayEvent.onMousedown(...b)),
                      onMouseup:
                        t[10] ||
                        (t[10] = (...b) =>
                          e.overlayEvent.onMouseup &&
                          e.overlayEvent.onMouseup(...b))
                    },
                    [
                      W(
                        p,
                        {
                          loop: '',
                          trapped: e.visible,
                          'focus-trap-el': e.rootRef,
                          'focus-start-el': e.focusStartRef,
                          onReleaseRequested: e.onCloseRequested
                        },
                        {
                          default: _(() => [
                            X(
                              'div',
                              {
                                ref: 'rootRef',
                                class: H([
                                  e.ns.b(),
                                  e.customClass,
                                  e.ns.is('draggable', e.draggable),
                                  { [e.ns.m('center')]: e.center }
                                ]),
                                style: Fe(e.customStyle),
                                tabindex: '-1',
                                onClick: t[7] || (t[7] = at(() => {}, ['stop']))
                              },
                              [
                                e.title !== null && e.title !== void 0
                                  ? ($(),
                                    de(
                                      'div',
                                      {
                                        key: 0,
                                        ref: 'headerRef',
                                        class: H(e.ns.e('header'))
                                      },
                                      [
                                        X(
                                          'div',
                                          { class: H(e.ns.e('title')) },
                                          [
                                            e.iconComponent && e.center
                                              ? ($(),
                                                U(
                                                  a,
                                                  {
                                                    key: 0,
                                                    class: H([
                                                      e.ns.e('status'),
                                                      e.typeClass
                                                    ])
                                                  },
                                                  {
                                                    default: _(() => [
                                                      ($(),
                                                      U(Ve(e.iconComponent)))
                                                    ]),
                                                    _: 1
                                                  },
                                                  8,
                                                  ['class']
                                                ))
                                              : G('v-if', !0),
                                            X('span', null, ke(e.title), 1)
                                          ],
                                          2
                                        ),
                                        e.showClose
                                          ? ($(),
                                            de(
                                              'button',
                                              {
                                                key: 0,
                                                type: 'button',
                                                class: H(e.ns.e('headerbtn')),
                                                'aria-label': e.t(
                                                  'el.messagebox.close'
                                                ),
                                                onClick:
                                                  t[0] ||
                                                  (t[0] = (b) =>
                                                    e.handleAction(
                                                      e.distinguishCancelAndClose
                                                        ? 'close'
                                                        : 'cancel'
                                                    )),
                                                onKeydown:
                                                  t[1] ||
                                                  (t[1] = it(
                                                    at(
                                                      (b) =>
                                                        e.handleAction(
                                                          e.distinguishCancelAndClose
                                                            ? 'close'
                                                            : 'cancel'
                                                        ),
                                                      ['prevent']
                                                    ),
                                                    ['enter']
                                                  ))
                                              },
                                              [
                                                W(
                                                  a,
                                                  { class: H(e.ns.e('close')) },
                                                  {
                                                    default: _(() => [W(u)]),
                                                    _: 1
                                                  },
                                                  8,
                                                  ['class']
                                                )
                                              ],
                                              42,
                                              Wa
                                            ))
                                          : G('v-if', !0)
                                      ],
                                      2
                                    ))
                                  : G('v-if', !0),
                                X(
                                  'div',
                                  {
                                    id: e.contentId,
                                    class: H(e.ns.e('content'))
                                  },
                                  [
                                    X(
                                      'div',
                                      { class: H(e.ns.e('container')) },
                                      [
                                        e.iconComponent &&
                                        !e.center &&
                                        e.hasMessage
                                          ? ($(),
                                            U(
                                              a,
                                              {
                                                key: 0,
                                                class: H([
                                                  e.ns.e('status'),
                                                  e.typeClass
                                                ])
                                              },
                                              {
                                                default: _(() => [
                                                  ($(), U(Ve(e.iconComponent)))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : G('v-if', !0),
                                        e.hasMessage
                                          ? ($(),
                                            de(
                                              'div',
                                              {
                                                key: 1,
                                                class: H(e.ns.e('message'))
                                              },
                                              [
                                                Q(
                                                  e.$slots,
                                                  'default',
                                                  {},
                                                  () => [
                                                    e.dangerouslyUseHTMLString
                                                      ? ($(),
                                                        U(
                                                          Ve(
                                                            e.showInput
                                                              ? 'label'
                                                              : 'p'
                                                          ),
                                                          {
                                                            key: 1,
                                                            for: e.showInput
                                                              ? e.inputId
                                                              : void 0,
                                                            innerHTML: e.message
                                                          },
                                                          null,
                                                          8,
                                                          ['for', 'innerHTML']
                                                        ))
                                                      : ($(),
                                                        U(
                                                          Ve(
                                                            e.showInput
                                                              ? 'label'
                                                              : 'p'
                                                          ),
                                                          {
                                                            key: 0,
                                                            for: e.showInput
                                                              ? e.inputId
                                                              : void 0
                                                          },
                                                          {
                                                            default: _(() => [
                                                              St(
                                                                ke(
                                                                  e.dangerouslyUseHTMLString
                                                                    ? ''
                                                                    : e.message
                                                                ),
                                                                1
                                                              )
                                                            ]),
                                                            _: 1
                                                          },
                                                          8,
                                                          ['for']
                                                        ))
                                                  ]
                                                )
                                              ],
                                              2
                                            ))
                                          : G('v-if', !0)
                                      ],
                                      2
                                    ),
                                    Ne(
                                      X(
                                        'div',
                                        { class: H(e.ns.e('input')) },
                                        [
                                          W(
                                            l,
                                            {
                                              id: e.inputId,
                                              ref: 'inputRef',
                                              modelValue: e.inputValue,
                                              'onUpdate:modelValue':
                                                t[2] ||
                                                (t[2] = (b) =>
                                                  (e.inputValue = b)),
                                              type: e.inputType,
                                              placeholder: e.inputPlaceholder,
                                              'aria-invalid': e.validateError,
                                              class: H({
                                                invalid: e.validateError
                                              }),
                                              onKeydown: it(
                                                e.handleInputEnter,
                                                ['enter']
                                              )
                                            },
                                            null,
                                            8,
                                            [
                                              'id',
                                              'modelValue',
                                              'type',
                                              'placeholder',
                                              'aria-invalid',
                                              'class',
                                              'onKeydown'
                                            ]
                                          ),
                                          X(
                                            'div',
                                            {
                                              class: H(e.ns.e('errormsg')),
                                              style: Fe({
                                                visibility: e.editorErrorMessage
                                                  ? 'visible'
                                                  : 'hidden'
                                              })
                                            },
                                            ke(e.editorErrorMessage),
                                            7
                                          )
                                        ],
                                        2
                                      ),
                                      [[Ye, e.showInput]]
                                    )
                                  ],
                                  10,
                                  Va
                                ),
                                X(
                                  'div',
                                  { class: H(e.ns.e('btns')) },
                                  [
                                    e.showCancelButton
                                      ? ($(),
                                        U(
                                          i,
                                          {
                                            key: 0,
                                            loading: e.cancelButtonLoading,
                                            class: H([e.cancelButtonClass]),
                                            round: e.roundButton,
                                            size: e.btnSize,
                                            onClick:
                                              t[3] ||
                                              (t[3] = (b) =>
                                                e.handleAction('cancel')),
                                            onKeydown:
                                              t[4] ||
                                              (t[4] = it(
                                                at(
                                                  (b) =>
                                                    e.handleAction('cancel'),
                                                  ['prevent']
                                                ),
                                                ['enter']
                                              ))
                                          },
                                          {
                                            default: _(() => [
                                              St(
                                                ke(
                                                  e.cancelButtonText ||
                                                    e.t('el.messagebox.cancel')
                                                ),
                                                1
                                              )
                                            ]),
                                            _: 1
                                          },
                                          8,
                                          ['loading', 'class', 'round', 'size']
                                        ))
                                      : G('v-if', !0),
                                    Ne(
                                      W(
                                        i,
                                        {
                                          ref: 'confirmRef',
                                          type: 'primary',
                                          loading: e.confirmButtonLoading,
                                          class: H([e.confirmButtonClasses]),
                                          round: e.roundButton,
                                          disabled: e.confirmButtonDisabled,
                                          size: e.btnSize,
                                          onClick:
                                            t[5] ||
                                            (t[5] = (b) =>
                                              e.handleAction('confirm')),
                                          onKeydown:
                                            t[6] ||
                                            (t[6] = it(
                                              at(
                                                (b) =>
                                                  e.handleAction('confirm'),
                                                ['prevent']
                                              ),
                                              ['enter']
                                            ))
                                        },
                                        {
                                          default: _(() => [
                                            St(
                                              ke(
                                                e.confirmButtonText ||
                                                  e.t('el.messagebox.confirm')
                                              ),
                                              1
                                            )
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        [
                                          'loading',
                                          'class',
                                          'round',
                                          'disabled',
                                          'size'
                                        ]
                                      ),
                                      [[Ye, e.showConfirmButton]]
                                    )
                                  ],
                                  2
                                )
                              ],
                              6
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
                    ],
                    42,
                    Ka
                  )
                ]),
                _: 3
              },
              8,
              ['z-index', 'overlay-class', 'mask']
            ),
            [[Ye, e.visible]]
          )
        ]),
        _: 3
      }
    )
  )
}
var qa = ne(Ua, [
  ['render', Ya],
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue'
  ]
])
const Qe = new Map(),
  Xa = (e) => {
    let t = document.body
    return (
      e.appendTo &&
        ($t(e.appendTo) && (t = document.querySelector(e.appendTo)),
        $e(e.appendTo) && (t = e.appendTo),
        $e(t) || (t = document.body)),
      t
    )
  },
  Ga = (e, t, n = null) => {
    const o = W(
      qa,
      e,
      Pe(e.message) || gt(e.message)
        ? { default: Pe(e.message) ? e.message : () => e.message }
        : null
    )
    return (
      (o.appContext = n),
      xn(o, t),
      Xa(e).appendChild(t.firstElementChild),
      o.component
    )
  },
  Za = () => document.createElement('div'),
  Ja = (e, t) => {
    const n = Za()
    ;(e.onVanish = () => {
      xn(null, n), Qe.delete(r)
    }),
      (e.onAction = (s) => {
        const a = Qe.get(r)
        let u
        e.showInput ? (u = { value: r.inputValue, action: s }) : (u = s),
          e.callback
            ? e.callback(u, o.proxy)
            : s === 'cancel' || s === 'close'
            ? e.distinguishCancelAndClose && s !== 'cancel'
              ? a.reject('close')
              : a.reject('cancel')
            : a.resolve(u)
      })
    const o = Ga(e, n, t),
      r = o.proxy
    for (const s in e) cn(e, s) && !cn(r.$props, s) && (r[s] = e[s])
    return (r.visible = !0), r
  }
function je(e, t = null) {
  if (!Z) return Promise.reject()
  let n
  return (
    $t(e) || gt(e) ? (e = { message: e }) : (n = e.callback),
    new Promise((o, r) => {
      const s = Ja(e, t ?? je._context)
      Qe.set(s, { options: e, callback: n, resolve: o, reject: r })
    })
  )
}
const Qa = ['alert', 'confirm', 'prompt'],
  ei = {
    alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
    confirm: { showCancelButton: !0 },
    prompt: { showCancelButton: !0, showInput: !0 }
  }
Qa.forEach((e) => {
  je[e] = ti(e)
})
function ti(e) {
  return (t, n, o, r) => {
    let s = ''
    return (
      It(n) ? ((o = n), (s = '')) : Go(n) ? (s = '') : (s = n),
      je(
        Object.assign({ title: s, message: t, type: '', ...ei[e] }, o, {
          boxType: e
        }),
        r
      )
    )
  }
}
je.close = () => {
  Qe.forEach((e, t) => {
    t.doClose()
  }),
    Qe.clear()
}
je._context = null
const ge = je
ge.install = (e) => {
  ;(ge._context = e._context),
    (e.config.globalProperties.$msgbox = ge),
    (e.config.globalProperties.$messageBox = ge),
    (e.config.globalProperties.$alert = ge.alert),
    (e.config.globalProperties.$confirm = ge.confirm),
    (e.config.globalProperties.$prompt = ge.prompt)
}
const ci = ge
export {
  li as E,
  Xs as F,
  Us as O,
  po as a,
  ui as b,
  ce as c,
  ci as d,
  ja as e,
  Ot as f,
  co as g,
  zt as h,
  sr as i,
  ar as j,
  eo as k,
  ir as l,
  ys as m,
  ii as s,
  si as t,
  vo as u,
  ai as w,
  fs as y
}
