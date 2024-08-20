import {
  v as w,
  a0 as j,
  O as q,
  y as V,
  o as _,
  B as E,
  g as o,
  G as h,
  H as g,
  e,
  al as K,
  d as a,
  b as r,
  c as N,
  D as oe,
  F as le,
  a2 as F,
  C as z,
  _ as M,
  aT as te,
  L as se,
  x as U,
  r as k,
  N as ae,
  ad as J,
  J as ne,
  a1 as re,
  ae as ie,
  T as ce,
  av as de,
  I as Z,
  m as ue,
  A as pe,
  f as G,
  E as P,
  aR as me,
  aS as fe
} from './main-b3449a42.js'
import {
  m as _e,
  n as ge,
  d as ve,
  a as ye,
  u as he,
  o as Ce,
  p as ke,
  e as be,
  q as $e,
  E as Ee,
  l as we,
  v as Re
} from './article-e8091cee.js'
import { _ as Be } from './PageContainer-7f16fc74.js'
import './el-checkbox-50406a36.js'
import {
  F as Se,
  j as Ve,
  e as Ne,
  g as Ie,
  k as Ae,
  d as De
} from './el-overlay-2d45dfd6.js'
import {
  b as O,
  u as Te,
  E as H
} from './_plugin-vue_export-helper-140fdfbe.js'
import { E as Fe, a as Me } from './el-form-item-583795c3.js'
import { E as Le } from './el-input-63e056b5.js'
import './el-message-42383dd9.js'
import { c as Ge } from './refs-bf2957ae.js'
import './isEqual-e10afbf0.js'
const Y = Symbol('dialogInjectionKey'),
  Pe = ['aria-label'],
  ze = ['id'],
  Ue = w({ name: 'ElDialogContent' }),
  qe = w({
    ...Ue,
    props: _e,
    emits: ge,
    setup(b) {
      const l = b,
        { t } = j(),
        { Close: i } = te,
        { dialogRef: u, headerRef: n, bodyId: p, ns: c, style: $ } = q(Y),
        { focusTrapRef: m } = q(Se),
        f = Ge(m, u),
        v = V(() => l.draggable)
      return (
        Ve(u, n, v),
        (s, C) => (
          _(),
          E(
            'div',
            {
              ref: e(f),
              class: g([
                e(c).b(),
                e(c).is('fullscreen', s.fullscreen),
                e(c).is('draggable', e(v)),
                e(c).is('align-center', s.alignCenter),
                { [e(c).m('center')]: s.center },
                s.customClass
              ]),
              style: z(e($)),
              tabindex: '-1'
            },
            [
              o(
                'header',
                { ref_key: 'headerRef', ref: n, class: g(e(c).e('header')) },
                [
                  h(s.$slots, 'header', {}, () => [
                    o(
                      'span',
                      { role: 'heading', class: g(e(c).e('title')) },
                      K(s.title),
                      3
                    )
                  ]),
                  s.showClose
                    ? (_(),
                      E(
                        'button',
                        {
                          key: 0,
                          'aria-label': e(t)('el.dialog.close'),
                          class: g(e(c).e('headerbtn')),
                          type: 'button',
                          onClick: C[0] || (C[0] = (R) => s.$emit('close'))
                        },
                        [
                          a(
                            e(le),
                            { class: g(e(c).e('close')) },
                            {
                              default: r(() => [
                                (_(), N(oe(s.closeIcon || e(i))))
                              ]),
                              _: 1
                            },
                            8,
                            ['class']
                          )
                        ],
                        10,
                        Pe
                      ))
                    : F('v-if', !0)
                ],
                2
              ),
              o(
                'div',
                { id: e(p), class: g(e(c).e('body')) },
                [h(s.$slots, 'default')],
                10,
                ze
              ),
              s.$slots.footer
                ? (_(),
                  E(
                    'footer',
                    { key: 0, class: g(e(c).e('footer')) },
                    [h(s.$slots, 'footer')],
                    2
                  ))
                : F('v-if', !0)
            ],
            6
          )
        )
      )
    }
  })
var Oe = M(qe, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue'
  ]
])
const je = ['aria-label', 'aria-labelledby', 'aria-describedby'],
  Ke = w({ name: 'ElDialog', inheritAttrs: !1 }),
  Je = w({
    ...Ke,
    props: ve,
    emits: ye,
    setup(b, { expose: l }) {
      const t = b,
        i = se()
      O(
        {
          scope: 'el-dialog',
          from: 'the title slot',
          replacement: 'the header slot',
          version: '3.0.0',
          ref: 'https://element-plus.org/en-US/component/dialog.html#slots'
        },
        V(() => !!i.title)
      ),
        O(
          {
            scope: 'el-dialog',
            from: 'custom-class',
            replacement: 'class',
            version: '2.3.0',
            ref: 'https://element-plus.org/en-US/component/dialog.html#attributes',
            type: 'Attribute'
          },
          V(() => !!t.customClass)
        )
      const u = U('dialog'),
        n = k(),
        p = k(),
        c = k(),
        {
          visible: $,
          titleId: m,
          bodyId: f,
          style: v,
          overlayDialogStyle: s,
          rendered: C,
          zIndex: R,
          afterEnter: I,
          afterLeave: y,
          beforeLeave: T,
          handleClose: A,
          onModalClick: L,
          onOpenAutoFocus: Q,
          onCloseAutoFocus: W,
          onCloseRequested: X,
          onFocusoutPrevented: x
        } = he(t, n)
      ae(Y, {
        dialogRef: n,
        headerRef: p,
        bodyId: f,
        ns: u,
        rendered: C,
        style: v
      })
      const B = Ae(L),
        ee = V(() => t.draggable && !t.fullscreen)
      return (
        l({ visible: $, dialogContentRef: c }),
        (d, S) => (
          _(),
          N(
            de,
            { to: 'body', disabled: !d.appendToBody },
            [
              a(
                ce,
                {
                  name: 'dialog-fade',
                  onAfterEnter: e(I),
                  onAfterLeave: e(y),
                  onBeforeLeave: e(T),
                  persisted: ''
                },
                {
                  default: r(() => [
                    J(
                      a(
                        e(Ne),
                        {
                          'custom-mask-event': '',
                          mask: d.modal,
                          'overlay-class': d.modalClass,
                          'z-index': e(R)
                        },
                        {
                          default: r(() => [
                            o(
                              'div',
                              {
                                role: 'dialog',
                                'aria-modal': 'true',
                                'aria-label': d.title || void 0,
                                'aria-labelledby': d.title ? void 0 : e(m),
                                'aria-describedby': e(f),
                                class: g(
                                  `${e(u).namespace.value}-overlay-dialog`
                                ),
                                style: z(e(s)),
                                onClick:
                                  S[0] ||
                                  (S[0] = (...D) =>
                                    e(B).onClick && e(B).onClick(...D)),
                                onMousedown:
                                  S[1] ||
                                  (S[1] = (...D) =>
                                    e(B).onMousedown && e(B).onMousedown(...D)),
                                onMouseup:
                                  S[2] ||
                                  (S[2] = (...D) =>
                                    e(B).onMouseup && e(B).onMouseup(...D))
                              },
                              [
                                a(
                                  e(Ie),
                                  {
                                    loop: '',
                                    trapped: e($),
                                    'focus-start-el': 'container',
                                    onFocusAfterTrapped: e(Q),
                                    onFocusAfterReleased: e(W),
                                    onFocusoutPrevented: e(x),
                                    onReleaseRequested: e(X)
                                  },
                                  {
                                    default: r(() => [
                                      e(C)
                                        ? (_(),
                                          N(
                                            Oe,
                                            ne(
                                              {
                                                key: 0,
                                                ref_key: 'dialogContentRef',
                                                ref: c
                                              },
                                              d.$attrs,
                                              {
                                                'custom-class': d.customClass,
                                                center: d.center,
                                                'align-center': d.alignCenter,
                                                'close-icon': d.closeIcon,
                                                draggable: e(ee),
                                                fullscreen: d.fullscreen,
                                                'show-close': d.showClose,
                                                title: d.title,
                                                onClose: e(A)
                                              }
                                            ),
                                            re(
                                              {
                                                header: r(() => [
                                                  d.$slots.title
                                                    ? h(d.$slots, 'title', {
                                                        key: 1
                                                      })
                                                    : h(d.$slots, 'header', {
                                                        key: 0,
                                                        close: e(A),
                                                        titleId: e(m),
                                                        titleClass:
                                                          e(u).e('title')
                                                      })
                                                ]),
                                                default: r(() => [
                                                  h(d.$slots, 'default')
                                                ]),
                                                _: 2
                                              },
                                              [
                                                d.$slots.footer
                                                  ? {
                                                      name: 'footer',
                                                      fn: r(() => [
                                                        h(d.$slots, 'footer')
                                                      ])
                                                    }
                                                  : void 0
                                              ]
                                            ),
                                            1040,
                                            [
                                              'custom-class',
                                              'center',
                                              'align-center',
                                              'close-icon',
                                              'draggable',
                                              'fullscreen',
                                              'show-close',
                                              'title',
                                              'onClose'
                                            ]
                                          ))
                                        : F('v-if', !0)
                                    ]),
                                    _: 3
                                  },
                                  8,
                                  [
                                    'trapped',
                                    'onFocusAfterTrapped',
                                    'onFocusAfterReleased',
                                    'onFocusoutPrevented',
                                    'onReleaseRequested'
                                  ]
                                )
                              ],
                              46,
                              je
                            )
                          ]),
                          _: 3
                        },
                        8,
                        ['mask', 'overlay-class', 'z-index']
                      ),
                      [[ie, e($)]]
                    )
                  ]),
                  _: 3
                },
                8,
                ['onAfterEnter', 'onAfterLeave', 'onBeforeLeave']
              )
            ],
            8,
            ['disabled']
          )
        )
      )
    }
  })
var Ze = M(Je, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue'
  ]
])
const He = Z(Ze),
  Ye = {
    viewBox: '0 0 79 86',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
  },
  Qe = ['id'],
  We = ['stop-color'],
  Xe = ['stop-color'],
  xe = ['id'],
  eo = ['stop-color'],
  oo = ['stop-color'],
  lo = ['id'],
  to = {
    id: 'Illustrations',
    stroke: 'none',
    'stroke-width': '1',
    fill: 'none',
    'fill-rule': 'evenodd'
  },
  so = { id: 'B-type', transform: 'translate(-1268.000000, -535.000000)' },
  ao = { id: 'Group-2', transform: 'translate(1268.000000, 535.000000)' },
  no = ['fill'],
  ro = ['fill'],
  io = {
    id: 'Group-Copy',
    transform:
      'translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)'
  },
  co = ['fill'],
  uo = ['fill'],
  po = ['fill'],
  mo = ['fill'],
  fo = ['fill'],
  _o = {
    id: 'Rectangle-Copy-17',
    transform: 'translate(53.000000, 45.000000)'
  },
  go = ['fill', 'xlink:href'],
  vo = ['fill', 'mask'],
  yo = ['fill'],
  ho = w({ name: 'ImgEmpty' }),
  Co = w({
    ...ho,
    setup(b) {
      const l = U('empty'),
        t = Te()
      return (i, u) => (
        _(),
        E('svg', Ye, [
          o('defs', null, [
            o(
              'linearGradient',
              {
                id: `linearGradient-1-${e(t)}`,
                x1: '38.8503086%',
                y1: '0%',
                x2: '61.1496914%',
                y2: '100%'
              },
              [
                o(
                  'stop',
                  {
                    'stop-color': `var(${e(l).cssVarBlockName(
                      'fill-color-1'
                    )})`,
                    offset: '0%'
                  },
                  null,
                  8,
                  We
                ),
                o(
                  'stop',
                  {
                    'stop-color': `var(${e(l).cssVarBlockName(
                      'fill-color-4'
                    )})`,
                    offset: '100%'
                  },
                  null,
                  8,
                  Xe
                )
              ],
              8,
              Qe
            ),
            o(
              'linearGradient',
              {
                id: `linearGradient-2-${e(t)}`,
                x1: '0%',
                y1: '9.5%',
                x2: '100%',
                y2: '90.5%'
              },
              [
                o(
                  'stop',
                  {
                    'stop-color': `var(${e(l).cssVarBlockName(
                      'fill-color-1'
                    )})`,
                    offset: '0%'
                  },
                  null,
                  8,
                  eo
                ),
                o(
                  'stop',
                  {
                    'stop-color': `var(${e(l).cssVarBlockName(
                      'fill-color-6'
                    )})`,
                    offset: '100%'
                  },
                  null,
                  8,
                  oo
                )
              ],
              8,
              xe
            ),
            o(
              'rect',
              {
                id: `path-3-${e(t)}`,
                x: '0',
                y: '0',
                width: '17',
                height: '36'
              },
              null,
              8,
              lo
            )
          ]),
          o('g', to, [
            o('g', so, [
              o('g', ao, [
                o(
                  'path',
                  {
                    id: 'Oval-Copy-2',
                    d: 'M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z',
                    fill: `var(${e(l).cssVarBlockName('fill-color-3')})`
                  },
                  null,
                  8,
                  no
                ),
                o(
                  'polygon',
                  {
                    id: 'Rectangle-Copy-14',
                    fill: `var(${e(l).cssVarBlockName('fill-color-7')})`,
                    transform:
                      'translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ',
                    points: '13 58 53 58 42 45 2 45'
                  },
                  null,
                  8,
                  ro
                ),
                o('g', io, [
                  o(
                    'polygon',
                    {
                      id: 'Rectangle-Copy-10',
                      fill: `var(${e(l).cssVarBlockName('fill-color-7')})`,
                      transform:
                        'translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ',
                      points: '2.84078316e-14 3 18 3 23 7 5 7'
                    },
                    null,
                    8,
                    co
                  ),
                  o(
                    'polygon',
                    {
                      id: 'Rectangle-Copy-11',
                      fill: `var(${e(l).cssVarBlockName('fill-color-5')})`,
                      points: '-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43'
                    },
                    null,
                    8,
                    uo
                  ),
                  o(
                    'rect',
                    {
                      id: 'Rectangle-Copy-12',
                      fill: `url(#linearGradient-1-${e(t)})`,
                      transform:
                        'translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ',
                      x: '38',
                      y: '7',
                      width: '17',
                      height: '36'
                    },
                    null,
                    8,
                    po
                  ),
                  o(
                    'polygon',
                    {
                      id: 'Rectangle-Copy-13',
                      fill: `var(${e(l).cssVarBlockName('fill-color-2')})`,
                      transform:
                        'translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ',
                      points: '24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12'
                    },
                    null,
                    8,
                    mo
                  )
                ]),
                o(
                  'rect',
                  {
                    id: 'Rectangle-Copy-15',
                    fill: `url(#linearGradient-2-${e(t)})`,
                    x: '13',
                    y: '45',
                    width: '40',
                    height: '36'
                  },
                  null,
                  8,
                  fo
                ),
                o('g', _o, [
                  o(
                    'use',
                    {
                      id: 'Mask',
                      fill: `var(${e(l).cssVarBlockName('fill-color-8')})`,
                      transform:
                        'translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ',
                      'xlink:href': `#path-3-${e(t)}`
                    },
                    null,
                    8,
                    go
                  ),
                  o(
                    'polygon',
                    {
                      id: 'Rectangle-Copy',
                      fill: `var(${e(l).cssVarBlockName('fill-color-9')})`,
                      mask: `url(#mask-4-${e(t)})`,
                      transform:
                        'translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ',
                      points: '7 0 24 0 20 18 7 16.5'
                    },
                    null,
                    8,
                    vo
                  )
                ]),
                o(
                  'polygon',
                  {
                    id: 'Rectangle-Copy-18',
                    fill: `var(${e(l).cssVarBlockName('fill-color-2')})`,
                    transform:
                      'translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ',
                    points: '62 45 79 45 70 58 53 58'
                  },
                  null,
                  8,
                  yo
                )
              ])
            ])
          ])
        ])
      )
    }
  })
var ko = M(Co, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue'
  ]
])
const bo = ue({
    image: { type: String, default: '' },
    imageSize: Number,
    description: { type: String, default: '' }
  }),
  $o = ['src'],
  Eo = { key: 1 },
  wo = w({ name: 'ElEmpty' }),
  Ro = w({
    ...wo,
    props: bo,
    setup(b) {
      const l = b,
        { t } = j(),
        i = U('empty'),
        u = V(() => l.description || t('el.table.emptyText')),
        n = V(() => ({ width: pe(l.imageSize) }))
      return (p, c) => (
        _(),
        E(
          'div',
          { class: g(e(i).b()) },
          [
            o(
              'div',
              { class: g(e(i).e('image')), style: z(e(n)) },
              [
                p.image
                  ? (_(),
                    E(
                      'img',
                      { key: 0, src: p.image, ondragstart: 'return false' },
                      null,
                      8,
                      $o
                    ))
                  : h(p.$slots, 'image', { key: 1 }, () => [a(ko)])
              ],
              6
            ),
            o(
              'div',
              { class: g(e(i).e('description')) },
              [
                p.$slots.description
                  ? h(p.$slots, 'description', { key: 0 })
                  : (_(), E('p', Eo, K(e(u)), 1))
              ],
              2
            ),
            p.$slots.default
              ? (_(),
                E(
                  'div',
                  { key: 0, class: g(e(i).e('bottom')) },
                  [h(p.$slots, 'default')],
                  2
                ))
              : F('v-if', !0)
          ],
          2
        )
      )
    }
  })
var Bo = M(Ro, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue'
  ]
])
const So = Z(Bo)
const Vo = { class: 'dialog-footer' },
  No = {
    __name: 'ChannelEdit',
    emits: ['success'],
    setup(b, { expose: l, emit: t }) {
      const i = k(!1),
        u = k(),
        n = k({ cate_name: '', cate_alias: '' }),
        p = {
          cate_name: [
            { required: !0, message: '请输入分类名称', trigger: 'blur' },
            {
              pattern: /^\S{1,10}$/,
              message: '分类名必须是 1-10 位的非空字符',
              trigger: 'blur'
            }
          ],
          cate_alias: [
            { required: !0, message: '请输入分类别名', trigger: 'blur' },
            {
              pattern: /^[a-zA-Z0-9]{1,15}$/,
              message: '分类名必须是 1-15 位的字母或数字',
              trigger: 'blur'
            }
          ]
        },
        c = async () => {
          await u.value.validate(),
            n.value.id
              ? (await Ce(n.value), P.success('编辑成功'))
              : (await ke(n.value), P.success('添加成功')),
            (i.value = !1),
            t('success')
        }
      return (
        l({
          open: (m) => {
            ;(i.value = !0), (n.value = { ...m })
          }
        }),
        (m, f) => {
          const v = Le,
            s = Fe,
            C = Me,
            R = H,
            I = He
          return (
            _(),
            N(
              I,
              {
                modelValue: i.value,
                'onUpdate:modelValue': f[3] || (f[3] = (y) => (i.value = y)),
                title: n.value.id ? '编辑分类' : '添加分类',
                width: '30%'
              },
              {
                footer: r(() => [
                  o('span', Vo, [
                    a(
                      R,
                      { onClick: f[2] || (f[2] = (y) => (i.value = !1)) },
                      { default: r(() => [G('取消')]), _: 1 }
                    ),
                    a(
                      R,
                      { type: 'primary', onClick: c },
                      { default: r(() => [G(' 确认 ')]), _: 1 }
                    )
                  ])
                ]),
                default: r(() => [
                  a(
                    C,
                    {
                      ref_key: 'formRef',
                      ref: u,
                      model: n.value,
                      rules: p,
                      'label-width': '100px',
                      style: { 'padding-right': '30px' }
                    },
                    {
                      default: r(() => [
                        a(
                          s,
                          { label: '分类名称', prop: 'cate_name' },
                          {
                            default: r(() => [
                              a(
                                v,
                                {
                                  modelValue: n.value.cate_name,
                                  'onUpdate:modelValue':
                                    f[0] ||
                                    (f[0] = (y) => (n.value.cate_name = y)),
                                  placeholder: '请输入分类名称'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        ),
                        a(
                          s,
                          { label: '分类别名', prop: 'cate_alias' },
                          {
                            default: r(() => [
                              a(
                                v,
                                {
                                  modelValue: n.value.cate_alias,
                                  'onUpdate:modelValue':
                                    f[1] ||
                                    (f[1] = (y) => (n.value.cate_alias = y)),
                                  placeholder: '请输入分类别名'
                                },
                                null,
                                8,
                                ['modelValue']
                              )
                            ]),
                            _: 1
                          }
                        )
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
  qo = {
    __name: 'ArticleChannel',
    setup(b) {
      const l = k([]),
        t = k(!1),
        i = k(),
        u = async () => {
          t.value = !0
          const m = await be()
          ;(l.value = m.data.data), (t.value = !1)
        }
      u()
      const n = async (m) => {
          await De.confirm('你确认要删除该分类么', '温馨提示', {
            type: 'warning',
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }),
            await $e(m.id),
            P.success('删除成功'),
            u()
        },
        p = (m) => {
          i.value.open(m)
        },
        c = () => {
          i.value.open({})
        },
        $ = () => {
          u()
        }
      return (m, f) => {
        const v = H,
          s = Ee,
          C = So,
          R = we,
          I = Be,
          y = Re
        return (
          _(),
          N(
            I,
            { title: '文章分类' },
            {
              extra: r(() => [
                a(
                  v,
                  { onClick: c },
                  { default: r(() => [G('添加分类')]), _: 1 }
                )
              ]),
              default: r(() => [
                J(
                  (_(),
                  N(
                    R,
                    { data: l.value, style: { width: '100%' } },
                    {
                      empty: r(() => [a(C, { description: '没有数据' })]),
                      default: r(() => [
                        a(s, { type: 'index', label: '序号', width: '100' }),
                        a(s, { prop: 'cate_name', label: '分类名称' }),
                        a(s, { prop: 'cate_alias', label: '分类别名' }),
                        a(
                          s,
                          { label: '操作', width: '150' },
                          {
                            default: r(({ row: T, $index: A }) => [
                              a(
                                v,
                                {
                                  icon: e(me),
                                  circle: '',
                                  plain: '',
                                  type: 'primary',
                                  onClick: (L) => p(T, A)
                                },
                                null,
                                8,
                                ['icon', 'onClick']
                              ),
                              a(
                                v,
                                {
                                  icon: e(fe),
                                  circle: '',
                                  plain: '',
                                  type: 'danger',
                                  onClick: (L) => n(T, A)
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
                  [[y, t.value]]
                ),
                a(No, { ref_key: 'dialog', ref: i, onSuccess: $ }, null, 512)
              ]),
              _: 1
            }
          )
        )
      }
    }
  }
export { qo as default }
