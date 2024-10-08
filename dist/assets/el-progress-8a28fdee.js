import {
  m as z,
  t as b,
  v as N,
  x as M,
  y as P,
  bP as Ee,
  bQ as de,
  aE as Se,
  bR as ce,
  au as pe,
  aA as _e,
  z as ee,
  o as y,
  B as E,
  H as m,
  e,
  g as B,
  C as j,
  G as F,
  al as K,
  a2 as $,
  c as U,
  b as L,
  D as Ce,
  F as I,
  _ as W,
  I as fe,
  ah as Q,
  bB as _,
  a0 as Pe,
  r as ve,
  a6 as Fe,
  aH as Le,
  aI as me,
  a5 as q,
  d as O,
  bS as Re,
  bT as Ue,
  aS as Te,
  bU as De,
  a4 as Oe,
  O as Be,
  az as Y,
  ai as te,
  bV as Ne,
  bW as Ae,
  w as se,
  L as je,
  Q as Ie,
  N as Me,
  U as qe,
  a1 as ae,
  J as oe
} from './main-b3449a42.js'
import {
  t as x,
  i as ye,
  e as V,
  d as ze
} from './_plugin-vue_export-helper-140fdfbe.js'
import { o as He } from './el-message-42383dd9.js'
import { i as We } from './isEqual-e10afbf0.js'
var Ke = 1,
  Ve = 4
function ne(n) {
  return He(n, Ke | Ve)
}
const Ge = z({
    type: {
      type: String,
      default: 'line',
      values: ['line', 'circle', 'dashboard']
    },
    percentage: {
      type: Number,
      default: 0,
      validator: (n) => n >= 0 && n <= 100
    },
    status: {
      type: String,
      default: '',
      values: ['', 'success', 'exception', 'warning']
    },
    indeterminate: { type: Boolean, default: !1 },
    duration: { type: Number, default: 3 },
    strokeWidth: { type: Number, default: 6 },
    strokeLinecap: { type: b(String), default: 'round' },
    textInside: { type: Boolean, default: !1 },
    width: { type: Number, default: 126 },
    showText: { type: Boolean, default: !0 },
    color: { type: b([String, Array, Function]), default: '' },
    striped: Boolean,
    stripedFlow: Boolean,
    format: { type: b(Function), default: (n) => `${n}%` }
  }),
  Xe = ['aria-valuenow'],
  Je = { viewBox: '0 0 100 100' },
  Qe = ['d', 'stroke', 'stroke-width'],
  Ye = ['d', 'stroke', 'opacity', 'stroke-linecap', 'stroke-width'],
  Ze = { key: 0 },
  xe = N({ name: 'ElProgress' }),
  et = N({
    ...xe,
    props: Ge,
    setup(n) {
      const s = n,
        o = {
          success: '#13ce66',
          exception: '#ff4949',
          warning: '#e6a23c',
          default: '#20a0ff'
        },
        a = M('progress'),
        f = P(() => ({
          width: `${s.percentage}%`,
          animationDuration: `${s.duration}s`,
          backgroundColor: T(s.percentage)
        })),
        p = P(() => ((s.strokeWidth / s.width) * 100).toFixed(1)),
        v = P(() =>
          ['circle', 'dashboard'].includes(s.type)
            ? Number.parseInt(`${50 - Number.parseFloat(p.value) / 2}`, 10)
            : 0
        ),
        S = P(() => {
          const l = v.value,
            R = s.type === 'dashboard'
          return `
          M 50 50
          m 0 ${R ? '' : '-'}${l}
          a ${l} ${l} 0 1 1 0 ${R ? '-' : ''}${l * 2}
          a ${l} ${l} 0 1 1 0 ${R ? '' : '-'}${l * 2}
          `
        }),
        k = P(() => 2 * Math.PI * v.value),
        d = P(() => (s.type === 'dashboard' ? 0.75 : 1)),
        w = P(() => `${(-1 * k.value * (1 - d.value)) / 2}px`),
        g = P(() => ({
          strokeDasharray: `${k.value * d.value}px, ${k.value}px`,
          strokeDashoffset: w.value
        })),
        r = P(() => ({
          strokeDasharray: `${k.value * d.value * (s.percentage / 100)}px, ${
            k.value
          }px`,
          strokeDashoffset: w.value,
          transition:
            'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s'
        })),
        u = P(() => {
          let l
          return (
            s.color ? (l = T(s.percentage)) : (l = o[s.status] || o.default), l
          )
        }),
        t = P(() =>
          s.status === 'warning'
            ? Ee
            : s.type === 'line'
            ? s.status === 'success'
              ? de
              : Se
            : s.status === 'success'
            ? ce
            : pe
        ),
        c = P(() =>
          s.type === 'line' ? 12 + s.strokeWidth * 0.4 : s.width * 0.111111 + 2
        ),
        h = P(() => s.format(s.percentage))
      function i(l) {
        const R = 100 / l.length
        return l
          .map((C, A) => (ee(C) ? { color: C, percentage: (A + 1) * R } : C))
          .sort((C, A) => C.percentage - A.percentage)
      }
      const T = (l) => {
        var R
        const { color: D } = s
        if (_e(D)) return D(l)
        if (ee(D)) return D
        {
          const C = i(D)
          for (const A of C) if (A.percentage > l) return A.color
          return (R = C[C.length - 1]) == null ? void 0 : R.color
        }
      }
      return (l, R) => (
        y(),
        E(
          'div',
          {
            class: m([
              e(a).b(),
              e(a).m(l.type),
              e(a).is(l.status),
              {
                [e(a).m('without-text')]: !l.showText,
                [e(a).m('text-inside')]: l.textInside
              }
            ]),
            role: 'progressbar',
            'aria-valuenow': l.percentage,
            'aria-valuemin': '0',
            'aria-valuemax': '100'
          },
          [
            l.type === 'line'
              ? (y(),
                E(
                  'div',
                  { key: 0, class: m(e(a).b('bar')) },
                  [
                    B(
                      'div',
                      {
                        class: m(e(a).be('bar', 'outer')),
                        style: j({ height: `${l.strokeWidth}px` })
                      },
                      [
                        B(
                          'div',
                          {
                            class: m([
                              e(a).be('bar', 'inner'),
                              {
                                [e(a).bem('bar', 'inner', 'indeterminate')]:
                                  l.indeterminate
                              },
                              {
                                [e(a).bem('bar', 'inner', 'striped')]: l.striped
                              },
                              {
                                [e(a).bem('bar', 'inner', 'striped-flow')]:
                                  l.stripedFlow
                              }
                            ]),
                            style: j(e(f))
                          },
                          [
                            (l.showText || l.$slots.default) && l.textInside
                              ? (y(),
                                E(
                                  'div',
                                  {
                                    key: 0,
                                    class: m(e(a).be('bar', 'innerText'))
                                  },
                                  [
                                    F(
                                      l.$slots,
                                      'default',
                                      { percentage: l.percentage },
                                      () => [B('span', null, K(e(h)), 1)]
                                    )
                                  ],
                                  2
                                ))
                              : $('v-if', !0)
                          ],
                          6
                        )
                      ],
                      6
                    )
                  ],
                  2
                ))
              : (y(),
                E(
                  'div',
                  {
                    key: 1,
                    class: m(e(a).b('circle')),
                    style: j({ height: `${l.width}px`, width: `${l.width}px` })
                  },
                  [
                    (y(),
                    E('svg', Je, [
                      B(
                        'path',
                        {
                          class: m(e(a).be('circle', 'track')),
                          d: e(S),
                          stroke: `var(${e(a).cssVarName(
                            'fill-color-light'
                          )}, #e5e9f2)`,
                          'stroke-width': e(p),
                          fill: 'none',
                          style: j(e(g))
                        },
                        null,
                        14,
                        Qe
                      ),
                      B(
                        'path',
                        {
                          class: m(e(a).be('circle', 'path')),
                          d: e(S),
                          stroke: e(u),
                          fill: 'none',
                          opacity: l.percentage ? 1 : 0,
                          'stroke-linecap': l.strokeLinecap,
                          'stroke-width': e(p),
                          style: j(e(r))
                        },
                        null,
                        14,
                        Ye
                      )
                    ]))
                  ],
                  6
                )),
            (l.showText || l.$slots.default) && !l.textInside
              ? (y(),
                E(
                  'div',
                  {
                    key: 2,
                    class: m(e(a).e('text')),
                    style: j({ fontSize: `${e(c)}px` })
                  },
                  [
                    F(l.$slots, 'default', { percentage: l.percentage }, () => [
                      l.status
                        ? (y(),
                          U(
                            e(I),
                            { key: 1 },
                            { default: L(() => [(y(), U(Ce(e(t))))]), _: 1 }
                          ))
                        : (y(), E('span', Ze, K(e(h)), 1))
                    ])
                  ],
                  6
                ))
              : $('v-if', !0)
          ],
          10,
          Xe
        )
      )
    }
  })
var tt = W(et, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue'
  ]
])
const st = fe(tt),
  ge = Symbol('uploadContextKey'),
  at = 'ElUpload'
class ot extends Error {
  constructor(s, o, a, f) {
    super(s),
      (this.name = 'UploadAjaxError'),
      (this.status = o),
      (this.method = a),
      (this.url = f)
  }
}
function re(n, s, o) {
  let a
  return (
    o.response
      ? (a = `${o.response.error || o.response}`)
      : o.responseText
      ? (a = `${o.responseText}`)
      : (a = `fail to ${s.method} ${n} ${o.status}`),
    new ot(a, o.status, s.method, n)
  )
}
function nt(n) {
  const s = n.responseText || n.response
  if (!s) return s
  try {
    return JSON.parse(s)
  } catch {
    return s
  }
}
const rt = (n) => {
    typeof XMLHttpRequest > 'u' && x(at, 'XMLHttpRequest is undefined')
    const s = new XMLHttpRequest(),
      o = n.action
    s.upload &&
      s.upload.addEventListener('progress', (p) => {
        const v = p
        ;(v.percent = p.total > 0 ? (p.loaded / p.total) * 100 : 0),
          n.onProgress(v)
      })
    const a = new FormData()
    if (n.data)
      for (const [p, v] of Object.entries(n.data))
        Array.isArray(v) ? a.append(p, ...v) : a.append(p, v)
    a.append(n.filename, n.file, n.file.name),
      s.addEventListener('error', () => {
        n.onError(re(o, n, s))
      }),
      s.addEventListener('load', () => {
        if (s.status < 200 || s.status >= 300) return n.onError(re(o, n, s))
        n.onSuccess(nt(s))
      }),
      s.open(n.method, o, !0),
      n.withCredentials && 'withCredentials' in s && (s.withCredentials = !0)
    const f = n.headers || {}
    if (f instanceof Headers) f.forEach((p, v) => s.setRequestHeader(v, p))
    else
      for (const [p, v] of Object.entries(f))
        ye(v) || s.setRequestHeader(p, String(v))
    return s.send(a), s
  },
  he = ['text', 'picture', 'picture-card']
let lt = 1
const Z = () => Date.now() + lt++,
  be = z({
    action: { type: String, default: '#' },
    headers: { type: b(Object) },
    method: { type: String, default: 'post' },
    data: { type: Object, default: () => Q({}) },
    multiple: { type: Boolean, default: !1 },
    name: { type: String, default: 'file' },
    drag: { type: Boolean, default: !1 },
    withCredentials: Boolean,
    showFileList: { type: Boolean, default: !0 },
    accept: { type: String, default: '' },
    type: { type: String, default: 'select' },
    fileList: { type: b(Array), default: () => Q([]) },
    autoUpload: { type: Boolean, default: !0 },
    listType: { type: String, values: he, default: 'text' },
    httpRequest: { type: b(Function), default: rt },
    disabled: Boolean,
    limit: Number
  }),
  it = z({
    ...be,
    beforeUpload: { type: b(Function), default: _ },
    beforeRemove: { type: b(Function) },
    onRemove: { type: b(Function), default: _ },
    onChange: { type: b(Function), default: _ },
    onPreview: { type: b(Function), default: _ },
    onSuccess: { type: b(Function), default: _ },
    onProgress: { type: b(Function), default: _ },
    onError: { type: b(Function), default: _ },
    onExceed: { type: b(Function), default: _ }
  }),
  ut = z({
    files: { type: b(Array), default: () => Q([]) },
    disabled: { type: Boolean, default: !1 },
    handlePreview: { type: b(Function), default: _ },
    listType: { type: String, values: he, default: 'text' }
  }),
  dt = { remove: (n) => !!n },
  ct = ['onKeydown'],
  pt = ['src'],
  ft = ['onClick'],
  vt = ['title'],
  mt = ['onClick'],
  yt = ['onClick'],
  gt = N({ name: 'ElUploadList' }),
  ht = N({
    ...gt,
    props: ut,
    emits: dt,
    setup(n, { emit: s }) {
      const { t: o } = Pe(),
        a = M('upload'),
        f = M('icon'),
        p = M('list'),
        v = V(),
        S = ve(!1),
        k = (d) => {
          s('remove', d)
        }
      return (d, w) => (
        y(),
        U(
          De,
          {
            tag: 'ul',
            class: m([
              e(a).b('list'),
              e(a).bm('list', d.listType),
              e(a).is('disabled', e(v))
            ]),
            name: e(p).b()
          },
          {
            default: L(() => [
              (y(!0),
              E(
                Fe,
                null,
                Le(
                  d.files,
                  (g) => (
                    y(),
                    E(
                      'li',
                      {
                        key: g.uid || g.name,
                        class: m([
                          e(a).be('list', 'item'),
                          e(a).is(g.status),
                          { focusing: S.value }
                        ]),
                        tabindex: '0',
                        onKeydown: me((r) => !e(v) && k(g), ['delete']),
                        onFocus: w[0] || (w[0] = (r) => (S.value = !0)),
                        onBlur: w[1] || (w[1] = (r) => (S.value = !1)),
                        onClick: w[2] || (w[2] = (r) => (S.value = !1))
                      },
                      [
                        F(d.$slots, 'default', { file: g }, () => [
                          d.listType === 'picture' ||
                          (g.status !== 'uploading' &&
                            d.listType === 'picture-card')
                            ? (y(),
                              E(
                                'img',
                                {
                                  key: 0,
                                  class: m(e(a).be('list', 'item-thumbnail')),
                                  src: g.url,
                                  alt: ''
                                },
                                null,
                                10,
                                pt
                              ))
                            : $('v-if', !0),
                          g.status === 'uploading' ||
                          d.listType !== 'picture-card'
                            ? (y(),
                              E(
                                'div',
                                {
                                  key: 1,
                                  class: m(e(a).be('list', 'item-info'))
                                },
                                [
                                  B(
                                    'a',
                                    {
                                      class: m(e(a).be('list', 'item-name')),
                                      onClick: q(
                                        (r) => d.handlePreview(g),
                                        ['prevent']
                                      )
                                    },
                                    [
                                      O(
                                        e(I),
                                        { class: m(e(f).m('document')) },
                                        { default: L(() => [O(e(Re))]), _: 1 },
                                        8,
                                        ['class']
                                      ),
                                      B(
                                        'span',
                                        {
                                          class: m(
                                            e(a).be('list', 'item-file-name')
                                          ),
                                          title: g.name
                                        },
                                        K(g.name),
                                        11,
                                        vt
                                      )
                                    ],
                                    10,
                                    ft
                                  ),
                                  g.status === 'uploading'
                                    ? (y(),
                                      U(
                                        e(st),
                                        {
                                          key: 0,
                                          type:
                                            d.listType === 'picture-card'
                                              ? 'circle'
                                              : 'line',
                                          'stroke-width':
                                            d.listType === 'picture-card'
                                              ? 6
                                              : 2,
                                          percentage: Number(g.percentage),
                                          style: j(
                                            d.listType === 'picture-card'
                                              ? ''
                                              : 'margin-top: 0.5rem'
                                          )
                                        },
                                        null,
                                        8,
                                        [
                                          'type',
                                          'stroke-width',
                                          'percentage',
                                          'style'
                                        ]
                                      ))
                                    : $('v-if', !0)
                                ],
                                2
                              ))
                            : $('v-if', !0),
                          B(
                            'label',
                            { class: m(e(a).be('list', 'item-status-label')) },
                            [
                              d.listType === 'text'
                                ? (y(),
                                  U(
                                    e(I),
                                    {
                                      key: 0,
                                      class: m([
                                        e(f).m('upload-success'),
                                        e(f).m('circle-check')
                                      ])
                                    },
                                    { default: L(() => [O(e(de))]), _: 1 },
                                    8,
                                    ['class']
                                  ))
                                : ['picture-card', 'picture'].includes(
                                    d.listType
                                  )
                                ? (y(),
                                  U(
                                    e(I),
                                    {
                                      key: 1,
                                      class: m([
                                        e(f).m('upload-success'),
                                        e(f).m('check')
                                      ])
                                    },
                                    { default: L(() => [O(e(ce))]), _: 1 },
                                    8,
                                    ['class']
                                  ))
                                : $('v-if', !0)
                            ],
                            2
                          ),
                          e(v)
                            ? $('v-if', !0)
                            : (y(),
                              U(
                                e(I),
                                {
                                  key: 2,
                                  class: m(e(f).m('close')),
                                  onClick: (r) => k(g)
                                },
                                { default: L(() => [O(e(pe))]), _: 2 },
                                1032,
                                ['class', 'onClick']
                              )),
                          $(
                            ' Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn'
                          ),
                          $(' This is a bug which needs to be fixed '),
                          $(' TODO: Fix the incorrect navigation interaction '),
                          e(v)
                            ? $('v-if', !0)
                            : (y(),
                              E(
                                'i',
                                { key: 3, class: m(e(f).m('close-tip')) },
                                K(e(o)('el.upload.deleteTip')),
                                3
                              )),
                          d.listType === 'picture-card'
                            ? (y(),
                              E(
                                'span',
                                {
                                  key: 4,
                                  class: m(e(a).be('list', 'item-actions'))
                                },
                                [
                                  B(
                                    'span',
                                    {
                                      class: m(e(a).be('list', 'item-preview')),
                                      onClick: (r) => d.handlePreview(g)
                                    },
                                    [
                                      O(
                                        e(I),
                                        { class: m(e(f).m('zoom-in')) },
                                        { default: L(() => [O(e(Ue))]), _: 1 },
                                        8,
                                        ['class']
                                      )
                                    ],
                                    10,
                                    mt
                                  ),
                                  e(v)
                                    ? $('v-if', !0)
                                    : (y(),
                                      E(
                                        'span',
                                        {
                                          key: 0,
                                          class: m(
                                            e(a).be('list', 'item-delete')
                                          ),
                                          onClick: (r) => k(g)
                                        },
                                        [
                                          O(
                                            e(I),
                                            { class: m(e(f).m('delete')) },
                                            {
                                              default: L(() => [O(e(Te))]),
                                              _: 1
                                            },
                                            8,
                                            ['class']
                                          )
                                        ],
                                        10,
                                        yt
                                      ))
                                ],
                                2
                              ))
                            : $('v-if', !0)
                        ])
                      ],
                      42,
                      ct
                    )
                  )
                ),
                128
              )),
              F(d.$slots, 'append')
            ]),
            _: 3
          },
          8,
          ['class', 'name']
        )
      )
    }
  })
var le = W(ht, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue'
  ]
])
const bt = z({ disabled: { type: Boolean, default: !1 } }),
  kt = { file: (n) => Oe(n) },
  $t = ['onDrop', 'onDragover'],
  ke = 'ElUploadDrag',
  wt = N({ name: ke }),
  Et = N({
    ...wt,
    props: bt,
    emits: kt,
    setup(n, { emit: s }) {
      const o = Be(ge)
      o || x(ke, 'usage: <el-upload><el-upload-dragger /></el-upload>')
      const a = M('upload'),
        f = ve(!1),
        p = V(),
        v = (k) => {
          if (p.value) return
          ;(f.value = !1), k.stopPropagation()
          const d = Array.from(k.dataTransfer.files),
            w = o.accept.value
          if (!w) {
            s('file', d)
            return
          }
          const g = d.filter((r) => {
            const { type: u, name: t } = r,
              c = t.includes('.') ? `.${t.split('.').pop()}` : '',
              h = u.replace(/\/.*$/, '')
            return w
              .split(',')
              .map((i) => i.trim())
              .filter((i) => i)
              .some((i) =>
                i.startsWith('.')
                  ? c === i
                  : /\/\*$/.test(i)
                  ? h === i.replace(/\/\*$/, '')
                  : /^[^/]+\/[^/]+$/.test(i)
                  ? u === i
                  : !1
              )
          })
          s('file', g)
        },
        S = () => {
          p.value || (f.value = !0)
        }
      return (k, d) => (
        y(),
        E(
          'div',
          {
            class: m([e(a).b('dragger'), e(a).is('dragover', f.value)]),
            onDrop: q(v, ['prevent']),
            onDragover: q(S, ['prevent']),
            onDragleave: d[0] || (d[0] = q((w) => (f.value = !1), ['prevent']))
          },
          [F(k.$slots, 'default')],
          42,
          $t
        )
      )
    }
  })
var St = W(Et, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue'
  ]
])
const _t = z({
    ...be,
    beforeUpload: { type: b(Function), default: _ },
    onRemove: { type: b(Function), default: _ },
    onStart: { type: b(Function), default: _ },
    onSuccess: { type: b(Function), default: _ },
    onProgress: { type: b(Function), default: _ },
    onError: { type: b(Function), default: _ },
    onExceed: { type: b(Function), default: _ }
  }),
  Ct = ['onKeydown'],
  Pt = ['name', 'multiple', 'accept'],
  Ft = N({ name: 'ElUploadContent', inheritAttrs: !1 }),
  Lt = N({
    ...Ft,
    props: _t,
    setup(n, { expose: s }) {
      const o = n,
        a = M('upload'),
        f = V(),
        p = Y({}),
        v = Y(),
        S = (t) => {
          if (t.length === 0) return
          const {
            autoUpload: c,
            limit: h,
            fileList: i,
            multiple: T,
            onStart: l,
            onExceed: R
          } = o
          if (h && i.length + t.length > h) {
            R(t, i)
            return
          }
          T || (t = t.slice(0, 1))
          for (const D of t) {
            const C = D
            ;(C.uid = Z()), l(C), c && k(C)
          }
        },
        k = async (t) => {
          if (((v.value.value = ''), !o.beforeUpload)) return d(t)
          let c,
            h = {}
          try {
            const T = o.data,
              l = o.beforeUpload(t)
            ;(h = te(o.data) ? ne(o.data) : o.data),
              (c = await l),
              te(o.data) && We(T, h) && (h = ne(o.data))
          } catch {
            c = !1
          }
          if (c === !1) {
            o.onRemove(t)
            return
          }
          let i = t
          c instanceof Blob &&
            (c instanceof File
              ? (i = c)
              : (i = new File([c], t.name, { type: t.type }))),
            d(Object.assign(i, { uid: t.uid }), h)
        },
        d = (t, c) => {
          const {
              headers: h,
              data: i,
              method: T,
              withCredentials: l,
              name: R,
              action: D,
              onProgress: C,
              onSuccess: A,
              onError: $e,
              httpRequest: we
            } = o,
            { uid: G } = t,
            X = {
              headers: h || {},
              withCredentials: l,
              file: t,
              data: c ?? i,
              method: T,
              filename: R,
              action: D,
              onProgress: (H) => {
                C(H, t)
              },
              onSuccess: (H) => {
                A(H, t), delete p.value[G]
              },
              onError: (H) => {
                $e(H, t), delete p.value[G]
              }
            },
            J = we(X)
          ;(p.value[G] = J),
            J instanceof Promise && J.then(X.onSuccess, X.onError)
        },
        w = (t) => {
          const c = t.target.files
          c && S(Array.from(c))
        },
        g = () => {
          f.value || ((v.value.value = ''), v.value.click())
        },
        r = () => {
          g()
        }
      return (
        s({
          abort: (t) => {
            Ne(p.value)
              .filter(t ? ([h]) => String(t.uid) === h : () => !0)
              .forEach(([h, i]) => {
                i instanceof XMLHttpRequest && i.abort(), delete p.value[h]
              })
          },
          upload: k
        }),
        (t, c) => (
          y(),
          E(
            'div',
            {
              class: m([e(a).b(), e(a).m(t.listType), e(a).is('drag', t.drag)]),
              tabindex: '0',
              onClick: g,
              onKeydown: me(q(r, ['self']), ['enter', 'space'])
            },
            [
              t.drag
                ? (y(),
                  U(
                    St,
                    { key: 0, disabled: e(f), onFile: S },
                    { default: L(() => [F(t.$slots, 'default')]), _: 3 },
                    8,
                    ['disabled']
                  ))
                : F(t.$slots, 'default', { key: 1 }),
              B(
                'input',
                {
                  ref_key: 'inputRef',
                  ref: v,
                  class: m(e(a).e('input')),
                  name: t.name,
                  multiple: t.multiple,
                  accept: t.accept,
                  type: 'file',
                  onChange: w,
                  onClick: c[0] || (c[0] = q(() => {}, ['stop']))
                },
                null,
                42,
                Pt
              )
            ],
            42,
            Ct
          )
        )
      )
    }
  })
var ie = W(Lt, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue'
  ]
])
const ue = 'ElUpload',
  Rt = (n) => {
    var s
    ;(s = n.url) != null && s.startsWith('blob:') && URL.revokeObjectURL(n.url)
  },
  Ut = (n, s) => {
    const o = Ae(n, 'fileList', void 0, { passive: !0 }),
      a = (r) => o.value.find((u) => u.uid === r.uid)
    function f(r) {
      var u
      ;(u = s.value) == null || u.abort(r)
    }
    function p(r = ['ready', 'uploading', 'success', 'fail']) {
      o.value = o.value.filter((u) => !r.includes(u.status))
    }
    const v = (r, u) => {
        const t = a(u)
        t &&
          (console.error(r),
          (t.status = 'fail'),
          o.value.splice(o.value.indexOf(t), 1),
          n.onError(r, t, o.value),
          n.onChange(t, o.value))
      },
      S = (r, u) => {
        const t = a(u)
        t &&
          (n.onProgress(r, t, o.value),
          (t.status = 'uploading'),
          (t.percentage = Math.round(r.percent)))
      },
      k = (r, u) => {
        const t = a(u)
        t &&
          ((t.status = 'success'),
          (t.response = r),
          n.onSuccess(r, t, o.value),
          n.onChange(t, o.value))
      },
      d = (r) => {
        ye(r.uid) && (r.uid = Z())
        const u = {
          name: r.name,
          percentage: 0,
          status: 'ready',
          size: r.size,
          raw: r,
          uid: r.uid
        }
        if (n.listType === 'picture-card' || n.listType === 'picture')
          try {
            u.url = URL.createObjectURL(r)
          } catch (t) {
            ze(ue, t.message), n.onError(t, u, o.value)
          }
        ;(o.value = [...o.value, u]), n.onChange(u, o.value)
      },
      w = async (r) => {
        const u = r instanceof File ? a(r) : r
        u || x(ue, 'file to be removed not found')
        const t = (c) => {
          f(c)
          const h = o.value
          h.splice(h.indexOf(c), 1), n.onRemove(c, h), Rt(c)
        }
        n.beforeRemove
          ? (await n.beforeRemove(u, o.value)) !== !1 && t(u)
          : t(u)
      }
    function g() {
      o.value
        .filter(({ status: r }) => r === 'ready')
        .forEach(({ raw: r }) => {
          var u
          return r && ((u = s.value) == null ? void 0 : u.upload(r))
        })
    }
    return (
      se(
        () => n.listType,
        (r) => {
          ;(r !== 'picture-card' && r !== 'picture') ||
            (o.value = o.value.map((u) => {
              const { raw: t, url: c } = u
              if (!c && t)
                try {
                  u.url = URL.createObjectURL(t)
                } catch (h) {
                  n.onError(h, u, o.value)
                }
              return u
            }))
        }
      ),
      se(
        o,
        (r) => {
          for (const u of r)
            u.uid || (u.uid = Z()), u.status || (u.status = 'success')
        },
        { immediate: !0, deep: !0 }
      ),
      {
        uploadFiles: o,
        abort: f,
        clearFiles: p,
        handleError: v,
        handleProgress: S,
        handleStart: d,
        handleSuccess: k,
        handleRemove: w,
        submit: g
      }
    )
  },
  Tt = N({ name: 'ElUpload' }),
  Dt = N({
    ...Tt,
    props: it,
    setup(n, { expose: s }) {
      const o = n,
        a = je(),
        f = V(),
        p = Y(),
        {
          abort: v,
          submit: S,
          clearFiles: k,
          uploadFiles: d,
          handleStart: w,
          handleError: g,
          handleRemove: r,
          handleSuccess: u,
          handleProgress: t
        } = Ut(o, p),
        c = P(() => o.listType === 'picture-card'),
        h = P(() => ({
          ...o,
          fileList: d.value,
          onStart: w,
          onProgress: t,
          onSuccess: u,
          onError: g,
          onRemove: r
        }))
      return (
        Ie(() => {
          d.value.forEach(({ url: i }) => {
            i != null && i.startsWith('blob:') && URL.revokeObjectURL(i)
          })
        }),
        Me(ge, { accept: qe(o, 'accept') }),
        s({
          abort: v,
          submit: S,
          clearFiles: k,
          handleStart: w,
          handleRemove: r
        }),
        (i, T) => (
          y(),
          E('div', null, [
            e(c) && i.showFileList
              ? (y(),
                U(
                  le,
                  {
                    key: 0,
                    disabled: e(f),
                    'list-type': i.listType,
                    files: e(d),
                    'handle-preview': i.onPreview,
                    onRemove: e(r)
                  },
                  ae(
                    {
                      append: L(() => [
                        O(
                          ie,
                          oe({ ref_key: 'uploadRef', ref: p }, e(h)),
                          {
                            default: L(() => [
                              e(a).trigger
                                ? F(i.$slots, 'trigger', { key: 0 })
                                : $('v-if', !0),
                              !e(a).trigger && e(a).default
                                ? F(i.$slots, 'default', { key: 1 })
                                : $('v-if', !0)
                            ]),
                            _: 3
                          },
                          16
                        )
                      ]),
                      _: 2
                    },
                    [
                      i.$slots.file
                        ? {
                            name: 'default',
                            fn: L(({ file: l }) => [
                              F(i.$slots, 'file', { file: l })
                            ])
                          }
                        : void 0
                    ]
                  ),
                  1032,
                  [
                    'disabled',
                    'list-type',
                    'files',
                    'handle-preview',
                    'onRemove'
                  ]
                ))
              : $('v-if', !0),
            !e(c) || (e(c) && !i.showFileList)
              ? (y(),
                U(
                  ie,
                  oe({ key: 1, ref_key: 'uploadRef', ref: p }, e(h)),
                  {
                    default: L(() => [
                      e(a).trigger
                        ? F(i.$slots, 'trigger', { key: 0 })
                        : $('v-if', !0),
                      !e(a).trigger && e(a).default
                        ? F(i.$slots, 'default', { key: 1 })
                        : $('v-if', !0)
                    ]),
                    _: 3
                  },
                  16
                ))
              : $('v-if', !0),
            i.$slots.trigger
              ? F(i.$slots, 'default', { key: 2 })
              : $('v-if', !0),
            F(i.$slots, 'tip'),
            !e(c) && i.showFileList
              ? (y(),
                U(
                  le,
                  {
                    key: 3,
                    disabled: e(f),
                    'list-type': i.listType,
                    files: e(d),
                    'handle-preview': i.onPreview,
                    onRemove: e(r)
                  },
                  ae({ _: 2 }, [
                    i.$slots.file
                      ? {
                          name: 'default',
                          fn: L(({ file: l }) => [
                            F(i.$slots, 'file', { file: l })
                          ])
                        }
                      : void 0
                  ]),
                  1032,
                  [
                    'disabled',
                    'list-type',
                    'files',
                    'handle-preview',
                    'onRemove'
                  ]
                ))
              : $('v-if', !0)
          ])
        )
      )
    }
  })
var Ot = W(Dt, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue'
  ]
])
const It = fe(Ot)
export { It as E }
