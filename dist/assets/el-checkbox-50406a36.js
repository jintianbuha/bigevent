import {
  br as R,
  bs as U,
  b1 as Q,
  bt as X,
  a$ as ke,
  aW as ge,
  b0 as pe,
  bu as xe,
  bi as Y,
  z as A,
  q as K,
  b7 as V,
  O as w,
  y as g,
  bm as z,
  w as _,
  Z as j,
  a3 as ee,
  r as G,
  a4 as I,
  ai as ye,
  aw as H,
  v as L,
  L as ne,
  x as T,
  o as y,
  c as ae,
  b as le,
  g as q,
  H as x,
  e as i,
  ad as E,
  B as C,
  bc as $,
  bv as F,
  G as P,
  a6 as Ce,
  f as te,
  al as oe,
  a2 as D,
  D as se,
  _ as O,
  C as Se,
  m as Le,
  t as Be,
  N as Ie,
  ay as we,
  I as Ee,
  M as ie
} from './main-b3449a42.js'
import { U as N } from './el-input-63e056b5.js'
import {
  e as $e,
  c as M,
  d as ue,
  a as W,
  f as re
} from './_plugin-vue_export-helper-140fdfbe.js'
import { i as Fe } from './isEqual-e10afbf0.js'
import { j as de, m as Ne, n as Ve } from './el-message-42383dd9.js'
function ze(e) {
  return e
}
function Ge(e, n, l) {
  switch (l.length) {
    case 0:
      return e.call(n)
    case 1:
      return e.call(n, l[0])
    case 2:
      return e.call(n, l[0], l[1])
    case 3:
      return e.call(n, l[0], l[1], l[2])
  }
  return e.apply(n, l)
}
var De = 800,
  Te = 16,
  Pe = Date.now
function Oe(e) {
  var n = 0,
    l = 0
  return function () {
    var a = Pe(),
      t = Te - (a - l)
    if (((l = a), t > 0)) {
      if (++n >= De) return arguments[0]
    } else n = 0
    return e.apply(void 0, arguments)
  }
}
function Me(e) {
  return function () {
    return e
  }
}
var Re = R
  ? function (e, n) {
      return R(e, 'toString', {
        configurable: !0,
        enumerable: !1,
        value: Me(n),
        writable: !0
      })
    }
  : ze
const Ue = Re
var Ae = Oe(Ue)
const Ke = Ae
var Z = Math.max
function He(e, n, l) {
  return (
    (n = Z(n === void 0 ? e.length - 1 : n, 0)),
    function () {
      for (
        var a = arguments, t = -1, d = Z(a.length - n, 0), c = Array(d);
        ++t < d;

      )
        c[t] = a[n + t]
      t = -1
      for (var o = Array(n + 1); ++t < n; ) o[t] = a[t]
      return (o[n] = l(c)), Ge(e, this, o)
    }
  )
}
var J = U ? U.isConcatSpreadable : void 0
function qe(e) {
  return Q(e) || de(e) || !!(J && e && e[J])
}
function ce(e, n, l, a, t) {
  var d = -1,
    c = e.length
  for (l || (l = qe), t || (t = []); ++d < c; ) {
    var o = e[d]
    n > 0 && l(o)
      ? n > 1
        ? ce(o, n - 1, l, a, t)
        : Ne(t, o)
      : a || (t[t.length] = o)
  }
  return t
}
function We(e) {
  var n = e == null ? 0 : e.length
  return n ? ce(e, 1) : []
}
function Ze(e) {
  return Ke(He(e, void 0, We), e + '')
}
function Je(e, n) {
  return e != null && n in Object(e)
}
function Qe(e, n, l) {
  n = X(n, e)
  for (var a = -1, t = n.length, d = !1; ++a < t; ) {
    var c = ke(n[a])
    if (!(d = e != null && l(e, c))) break
    e = e[c]
  }
  return d || ++a != t
    ? d
    : ((t = e == null ? 0 : e.length),
      !!t && Ve(t) && ge(c, t) && (Q(e) || de(e)))
}
function Xe(e, n) {
  return e != null && Qe(e, n, Je)
}
function Ye(e, n, l) {
  for (var a = -1, t = n.length, d = {}; ++a < t; ) {
    var c = n[a],
      o = pe(e, c)
    l(o, c) && xe(d, X(c, e), o)
  }
  return d
}
function _e(e, n) {
  return Ye(e, n, function (l, a) {
    return Xe(e, a)
  })
}
var je = Ze(function (e, n) {
  return e == null ? {} : _e(e, n)
})
const en = je,
  be = {
    modelValue: { type: [Number, String, Boolean], default: void 0 },
    label: { type: [String, Boolean, Number, Object] },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: { type: String, default: void 0 },
    trueLabel: { type: [String, Number], default: void 0 },
    falseLabel: { type: [String, Number], default: void 0 },
    id: { type: String, default: void 0 },
    controls: { type: String, default: void 0 },
    border: Boolean,
    size: Y,
    tabindex: [String, Number],
    validateEvent: { type: Boolean, default: !0 }
  },
  ve = {
    [N]: (e) => A(e) || K(e) || V(e),
    change: (e) => A(e) || K(e) || V(e)
  },
  B = Symbol('checkboxGroupContextKey'),
  nn = ({ model: e, isChecked: n }) => {
    const l = w(B, void 0),
      a = g(() => {
        var d, c
        const o = (d = l == null ? void 0 : l.max) == null ? void 0 : d.value,
          m = (c = l == null ? void 0 : l.min) == null ? void 0 : c.value
        return (
          (!z(o) && e.value.length >= o && !n.value) ||
          (!z(m) && e.value.length <= m && n.value)
        )
      })
    return {
      isDisabled: $e(
        g(() => (l == null ? void 0 : l.disabled.value) || a.value)
      ),
      isLimitDisabled: a
    }
  },
  an = (
    e,
    {
      model: n,
      isLimitExceeded: l,
      hasOwnLabel: a,
      isDisabled: t,
      isLabeledByFormItem: d
    }
  ) => {
    const c = w(B, void 0),
      { formItem: o } = M(),
      { emit: m } = ee()
    function s(r) {
      var b, v
      return r === e.trueLabel || r === !0
        ? (b = e.trueLabel) != null
          ? b
          : !0
        : (v = e.falseLabel) != null
        ? v
        : !1
    }
    function f(r, b) {
      m('change', s(r), b)
    }
    function k(r) {
      if (l.value) return
      const b = r.target
      m('change', s(b.checked), r)
    }
    async function S(r) {
      l.value ||
        (!a.value &&
          !t.value &&
          d.value &&
          (r.composedPath().some((h) => h.tagName === 'LABEL') ||
            ((n.value = s([!1, e.falseLabel].includes(n.value))),
            await j(),
            f(n.value, r))))
    }
    const u = g(() => (c == null ? void 0 : c.validateEvent) || e.validateEvent)
    return (
      _(
        () => e.modelValue,
        () => {
          u.value && (o == null || o.validate('change').catch((r) => ue()))
        }
      ),
      { handleChange: k, onClickRoot: S }
    )
  },
  ln = (e) => {
    const n = G(!1),
      { emit: l } = ee(),
      a = w(B, void 0),
      t = g(() => z(a) === !1),
      d = G(!1)
    return {
      model: g({
        get() {
          var o, m
          return t.value
            ? (o = a == null ? void 0 : a.modelValue) == null
              ? void 0
              : o.value
            : (m = e.modelValue) != null
            ? m
            : n.value
        },
        set(o) {
          var m, s
          t.value && I(o)
            ? ((d.value =
                ((m = a == null ? void 0 : a.max) == null
                  ? void 0
                  : m.value) !== void 0 &&
                o.length > (a == null ? void 0 : a.max.value)),
              d.value === !1 &&
                ((s = a == null ? void 0 : a.changeEvent) == null ||
                  s.call(a, o)))
            : (l(N, o), (n.value = o))
        }
      }),
      isGroup: t,
      isLimitExceeded: d
    }
  },
  tn = (e, n, { model: l }) => {
    const a = w(B, void 0),
      t = G(!1),
      d = g(() => {
        const s = l.value
        return V(s)
          ? s
          : I(s)
          ? ye(e.label)
            ? s.map(H).some((f) => Fe(f, e.label))
            : s.map(H).includes(e.label)
          : s != null
          ? s === e.trueLabel
          : !!s
      }),
      c = W(
        g(() => {
          var s
          return (s = a == null ? void 0 : a.size) == null ? void 0 : s.value
        }),
        { prop: !0 }
      ),
      o = W(
        g(() => {
          var s
          return (s = a == null ? void 0 : a.size) == null ? void 0 : s.value
        })
      ),
      m = g(() => !!(n.default || e.label))
    return {
      checkboxButtonSize: c,
      isChecked: d,
      isFocused: t,
      checkboxSize: o,
      hasOwnLabel: m
    }
  },
  on = (e, { model: n }) => {
    function l() {
      I(n.value) && !n.value.includes(e.label)
        ? n.value.push(e.label)
        : (n.value = e.trueLabel || !0)
    }
    e.checked && l()
  },
  me = (e, n) => {
    const { formItem: l } = M(),
      { model: a, isGroup: t, isLimitExceeded: d } = ln(e),
      {
        isFocused: c,
        isChecked: o,
        checkboxButtonSize: m,
        checkboxSize: s,
        hasOwnLabel: f
      } = tn(e, n, { model: a }),
      { isDisabled: k } = nn({ model: a, isChecked: o }),
      { inputId: S, isLabeledByFormItem: u } = re(e, {
        formItemContext: l,
        disableIdGeneration: f,
        disableIdManagement: t
      }),
      { handleChange: r, onClickRoot: b } = an(e, {
        model: a,
        isLimitExceeded: d,
        hasOwnLabel: f,
        isDisabled: k,
        isLabeledByFormItem: u
      })
    return (
      on(e, { model: a }),
      {
        inputId: S,
        isLabeledByFormItem: u,
        isChecked: o,
        isDisabled: k,
        isFocused: c,
        checkboxButtonSize: m,
        checkboxSize: s,
        hasOwnLabel: f,
        model: a,
        handleChange: r,
        onClickRoot: b
      }
    )
  },
  sn = ['tabindex', 'role', 'aria-checked'],
  un = [
    'id',
    'aria-hidden',
    'name',
    'tabindex',
    'disabled',
    'true-value',
    'false-value'
  ],
  rn = ['id', 'aria-hidden', 'disabled', 'value', 'name', 'tabindex'],
  dn = L({ name: 'ElCheckbox' }),
  cn = L({
    ...dn,
    props: be,
    emits: ve,
    setup(e) {
      const n = e,
        l = ne(),
        {
          inputId: a,
          isLabeledByFormItem: t,
          isChecked: d,
          isDisabled: c,
          isFocused: o,
          checkboxSize: m,
          hasOwnLabel: s,
          model: f,
          handleChange: k,
          onClickRoot: S
        } = me(n, l),
        u = T('checkbox'),
        r = g(() => [
          u.b(),
          u.m(m.value),
          u.is('disabled', c.value),
          u.is('bordered', n.border),
          u.is('checked', d.value)
        ]),
        b = g(() => [
          u.e('input'),
          u.is('disabled', c.value),
          u.is('checked', d.value),
          u.is('indeterminate', n.indeterminate),
          u.is('focus', o.value)
        ])
      return (v, h) => (
        y(),
        ae(
          se(!i(s) && i(t) ? 'span' : 'label'),
          {
            class: x(i(r)),
            'aria-controls': v.indeterminate ? v.controls : null,
            onClick: i(S)
          },
          {
            default: le(() => [
              q(
                'span',
                {
                  class: x(i(b)),
                  tabindex: v.indeterminate ? 0 : void 0,
                  role: v.indeterminate ? 'checkbox' : void 0,
                  'aria-checked': v.indeterminate ? 'mixed' : void 0
                },
                [
                  v.trueLabel || v.falseLabel
                    ? E(
                        (y(),
                        C(
                          'input',
                          {
                            key: 0,
                            id: i(a),
                            'onUpdate:modelValue':
                              h[0] ||
                              (h[0] = (p) => ($(f) ? (f.value = p) : null)),
                            class: x(i(u).e('original')),
                            type: 'checkbox',
                            'aria-hidden': v.indeterminate ? 'true' : 'false',
                            name: v.name,
                            tabindex: v.tabindex,
                            disabled: i(c),
                            'true-value': v.trueLabel,
                            'false-value': v.falseLabel,
                            onChange:
                              h[1] || (h[1] = (...p) => i(k) && i(k)(...p)),
                            onFocus: h[2] || (h[2] = (p) => (o.value = !0)),
                            onBlur: h[3] || (h[3] = (p) => (o.value = !1))
                          },
                          null,
                          42,
                          un
                        )),
                        [[F, i(f)]]
                      )
                    : E(
                        (y(),
                        C(
                          'input',
                          {
                            key: 1,
                            id: i(a),
                            'onUpdate:modelValue':
                              h[4] ||
                              (h[4] = (p) => ($(f) ? (f.value = p) : null)),
                            class: x(i(u).e('original')),
                            type: 'checkbox',
                            'aria-hidden': v.indeterminate ? 'true' : 'false',
                            disabled: i(c),
                            value: v.label,
                            name: v.name,
                            tabindex: v.tabindex,
                            onChange:
                              h[5] || (h[5] = (...p) => i(k) && i(k)(...p)),
                            onFocus: h[6] || (h[6] = (p) => (o.value = !0)),
                            onBlur: h[7] || (h[7] = (p) => (o.value = !1))
                          },
                          null,
                          42,
                          rn
                        )),
                        [[F, i(f)]]
                      ),
                  q('span', { class: x(i(u).e('inner')) }, null, 2)
                ],
                10,
                sn
              ),
              i(s)
                ? (y(),
                  C(
                    'span',
                    { key: 0, class: x(i(u).e('label')) },
                    [
                      P(v.$slots, 'default'),
                      v.$slots.default
                        ? D('v-if', !0)
                        : (y(), C(Ce, { key: 0 }, [te(oe(v.label), 1)], 64))
                    ],
                    2
                  ))
                : D('v-if', !0)
            ]),
            _: 3
          },
          8,
          ['class', 'aria-controls', 'onClick']
        )
      )
    }
  })
var bn = O(cn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue'
  ]
])
const vn = ['name', 'tabindex', 'disabled', 'true-value', 'false-value'],
  mn = ['name', 'tabindex', 'disabled', 'value'],
  fn = L({ name: 'ElCheckboxButton' }),
  hn = L({
    ...fn,
    props: be,
    emits: ve,
    setup(e) {
      const n = e,
        l = ne(),
        {
          isFocused: a,
          isChecked: t,
          isDisabled: d,
          checkboxButtonSize: c,
          model: o,
          handleChange: m
        } = me(n, l),
        s = w(B, void 0),
        f = T('checkbox'),
        k = g(() => {
          var u, r, b, v
          const h =
            (r =
              (u = s == null ? void 0 : s.fill) == null ? void 0 : u.value) !=
            null
              ? r
              : ''
          return {
            backgroundColor: h,
            borderColor: h,
            color:
              (v =
                (b = s == null ? void 0 : s.textColor) == null
                  ? void 0
                  : b.value) != null
                ? v
                : '',
            boxShadow: h ? `-1px 0 0 0 ${h}` : void 0
          }
        }),
        S = g(() => [
          f.b('button'),
          f.bm('button', c.value),
          f.is('disabled', d.value),
          f.is('checked', t.value),
          f.is('focus', a.value)
        ])
      return (u, r) => (
        y(),
        C(
          'label',
          { class: x(i(S)) },
          [
            u.trueLabel || u.falseLabel
              ? E(
                  (y(),
                  C(
                    'input',
                    {
                      key: 0,
                      'onUpdate:modelValue':
                        r[0] || (r[0] = (b) => ($(o) ? (o.value = b) : null)),
                      class: x(i(f).be('button', 'original')),
                      type: 'checkbox',
                      name: u.name,
                      tabindex: u.tabindex,
                      disabled: i(d),
                      'true-value': u.trueLabel,
                      'false-value': u.falseLabel,
                      onChange: r[1] || (r[1] = (...b) => i(m) && i(m)(...b)),
                      onFocus: r[2] || (r[2] = (b) => (a.value = !0)),
                      onBlur: r[3] || (r[3] = (b) => (a.value = !1))
                    },
                    null,
                    42,
                    vn
                  )),
                  [[F, i(o)]]
                )
              : E(
                  (y(),
                  C(
                    'input',
                    {
                      key: 1,
                      'onUpdate:modelValue':
                        r[4] || (r[4] = (b) => ($(o) ? (o.value = b) : null)),
                      class: x(i(f).be('button', 'original')),
                      type: 'checkbox',
                      name: u.name,
                      tabindex: u.tabindex,
                      disabled: i(d),
                      value: u.label,
                      onChange: r[5] || (r[5] = (...b) => i(m) && i(m)(...b)),
                      onFocus: r[6] || (r[6] = (b) => (a.value = !0)),
                      onBlur: r[7] || (r[7] = (b) => (a.value = !1))
                    },
                    null,
                    42,
                    mn
                  )),
                  [[F, i(o)]]
                ),
            u.$slots.default || u.label
              ? (y(),
                C(
                  'span',
                  {
                    key: 2,
                    class: x(i(f).be('button', 'inner')),
                    style: Se(i(t) ? i(k) : void 0)
                  },
                  [P(u.$slots, 'default', {}, () => [te(oe(u.label), 1)])],
                  6
                ))
              : D('v-if', !0)
          ],
          2
        )
      )
    }
  })
var fe = O(hn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue'
  ]
])
const kn = Le({
    modelValue: { type: Be(Array), default: () => [] },
    disabled: Boolean,
    min: Number,
    max: Number,
    size: Y,
    label: String,
    fill: String,
    textColor: String,
    tag: { type: String, default: 'div' },
    validateEvent: { type: Boolean, default: !0 }
  }),
  gn = { [N]: (e) => I(e), change: (e) => I(e) },
  pn = L({ name: 'ElCheckboxGroup' }),
  xn = L({
    ...pn,
    props: kn,
    emits: gn,
    setup(e, { emit: n }) {
      const l = e,
        a = T('checkbox'),
        { formItem: t } = M(),
        { inputId: d, isLabeledByFormItem: c } = re(l, { formItemContext: t }),
        o = async (s) => {
          n(N, s), await j(), n('change', s)
        },
        m = g({
          get() {
            return l.modelValue
          },
          set(s) {
            o(s)
          }
        })
      return (
        Ie(B, {
          ...en(we(l), [
            'size',
            'min',
            'max',
            'disabled',
            'validateEvent',
            'fill',
            'textColor'
          ]),
          modelValue: m,
          changeEvent: o
        }),
        _(
          () => l.modelValue,
          () => {
            l.validateEvent &&
              (t == null || t.validate('change').catch((s) => ue()))
          }
        ),
        (s, f) => {
          var k
          return (
            y(),
            ae(
              se(s.tag),
              {
                id: i(d),
                class: x(i(a).b('group')),
                role: 'group',
                'aria-label': i(c) ? void 0 : s.label || 'checkbox-group',
                'aria-labelledby': i(c)
                  ? (k = i(t)) == null
                    ? void 0
                    : k.labelId
                  : void 0
              },
              { default: le(() => [P(s.$slots, 'default')]), _: 3 },
              8,
              ['id', 'class', 'aria-label', 'aria-labelledby']
            )
          )
        }
      )
    }
  })
var he = O(xn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue'
  ]
])
const In = Ee(bn, { CheckboxButton: fe, CheckboxGroup: he })
ie(fe)
ie(he)
export { In as E, ce as b, Xe as h, ze as i, He as o, Ke as s }
