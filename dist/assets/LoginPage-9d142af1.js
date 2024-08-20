import {
  r as c,
  u as R,
  a as $,
  w as q,
  o as g,
  c as v,
  b as a,
  d as e,
  e as p,
  f as t,
  g as x,
  h as N,
  E,
  i as P,
  j as b,
  l as w,
  p as z,
  k as F
} from './main-b3449a42.js'
import { E as M, a as T } from './el-col-81bdda28.js'
import { E as j } from './el-checkbox-50406a36.js'
import { E as A, a as D } from './el-form-item-583795c3.js'
import { E as G } from './el-link-da4e0f09.js'
import { _ as H, E as J } from './_plugin-vue_export-helper-140fdfbe.js'
import { E as K } from './el-input-63e056b5.js'
import './el-message-42383dd9.js'
import './isEqual-e10afbf0.js'
const S = (i) => (z('data-v-dd24256e'), (i = i()), F(), i),
  O = S(() => x('h1', null, '注册', -1)),
  Q = S(() => x('h1', null, '登录', -1)),
  W = { class: 'flex' },
  X = {
    __name: 'LoginPage',
    setup(i) {
      const u = c(!1),
        m = c(),
        o = c({ username: '', password: '', repassword: '' }),
        y = {
          username: [
            { required: !0, message: '请输入用户名', trigger: 'blur' },
            {
              min: 5,
              max: 10,
              message: '用户名必须是 5-10位 的字符',
              trigger: 'blur'
            }
          ],
          password: [
            { required: !0, message: '请输入密码', trigger: 'blur' },
            {
              pattern: /^\S{6,15}$/,
              message: '密码必须是 6-15位 的非空字符',
              trigger: 'blur'
            }
          ],
          repassword: [
            { required: !0, message: '请输入密码', trigger: 'blur' },
            {
              pattern: /^\S{6,15}$/,
              message: '密码必须是 6-15位 的非空字符',
              trigger: 'blur'
            },
            {
              validator: (f, l, n) => {
                l !== o.value.password
                  ? n(new Error('两次输入密码不一致'))
                  : n()
              },
              trigger: 'blur'
            }
          ]
        },
        C = async () => {
          await m.value.validate(),
            await N(o.value),
            E.success('注册成功'),
            (u.value = !1)
        },
        I = R(),
        U = $(),
        h = async () => {
          await m.value.validate()
          const f = await P(o.value)
          I.setToken(f.data.token), E.success('登录成功'), U.push('/')
        }
      return (
        q(u, () => {
          o.value = { username: '', password: '', repassword: '' }
        }),
        (f, l) => {
          const n = T,
            s = A,
            d = K,
            V = J,
            _ = G,
            k = D,
            L = j,
            B = M
          return (
            g(),
            v(
              B,
              { class: 'login-page' },
              {
                default: a(() => [
                  e(n, { span: 12, class: 'bg' }),
                  e(
                    n,
                    { span: 6, offset: 3, class: 'form' },
                    {
                      default: a(() => [
                        u.value
                          ? (g(),
                            v(
                              k,
                              {
                                key: 0,
                                model: o.value,
                                rules: y,
                                ref_key: 'form',
                                ref: m,
                                size: 'large',
                                autocomplete: 'off'
                              },
                              {
                                default: a(() => [
                                  e(s, null, { default: a(() => [O]), _: 1 }),
                                  e(
                                    s,
                                    { prop: 'username' },
                                    {
                                      default: a(() => [
                                        e(
                                          d,
                                          {
                                            modelValue: o.value.username,
                                            'onUpdate:modelValue':
                                              l[0] ||
                                              (l[0] = (r) =>
                                                (o.value.username = r)),
                                            'prefix-icon': p(b),
                                            placeholder: '请输入用户名'
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'prefix-icon']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(
                                    s,
                                    { prop: 'password' },
                                    {
                                      default: a(() => [
                                        e(
                                          d,
                                          {
                                            modelValue: o.value.password,
                                            'onUpdate:modelValue':
                                              l[1] ||
                                              (l[1] = (r) =>
                                                (o.value.password = r)),
                                            'prefix-icon': p(w),
                                            type: 'password',
                                            placeholder: '请输入密码'
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'prefix-icon']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(
                                    s,
                                    { prop: 'repassword' },
                                    {
                                      default: a(() => [
                                        e(
                                          d,
                                          {
                                            modelValue: o.value.repassword,
                                            'onUpdate:modelValue':
                                              l[2] ||
                                              (l[2] = (r) =>
                                                (o.value.repassword = r)),
                                            'prefix-icon': p(w),
                                            type: 'password',
                                            placeholder: '请输入再次密码'
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'prefix-icon']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(s, null, {
                                    default: a(() => [
                                      e(
                                        V,
                                        {
                                          onClick: C,
                                          class: 'button',
                                          type: 'primary',
                                          'auto-insert-space': ''
                                        },
                                        {
                                          default: a(() => [t(' 注册 ')]),
                                          _: 1
                                        }
                                      )
                                    ]),
                                    _: 1
                                  }),
                                  e(
                                    s,
                                    { class: 'flex' },
                                    {
                                      default: a(() => [
                                        e(
                                          _,
                                          {
                                            type: 'info',
                                            underline: !1,
                                            onClick:
                                              l[3] ||
                                              (l[3] = (r) => (u.value = !1))
                                          },
                                          {
                                            default: a(() => [t(' ← 返回 ')]),
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
                              ['model']
                            ))
                          : (g(),
                            v(
                              k,
                              {
                                key: 1,
                                model: o.value,
                                rules: y,
                                ref_key: 'form',
                                ref: m,
                                size: 'large',
                                autocomplete: 'off'
                              },
                              {
                                default: a(() => [
                                  e(s, null, { default: a(() => [Q]), _: 1 }),
                                  e(
                                    s,
                                    { prop: 'username' },
                                    {
                                      default: a(() => [
                                        e(
                                          d,
                                          {
                                            modelValue: o.value.username,
                                            'onUpdate:modelValue':
                                              l[4] ||
                                              (l[4] = (r) =>
                                                (o.value.username = r)),
                                            'prefix-icon': p(b),
                                            placeholder: '请输入用户名'
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'prefix-icon']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(
                                    s,
                                    { prop: 'password' },
                                    {
                                      default: a(() => [
                                        e(
                                          d,
                                          {
                                            modelValue: o.value.password,
                                            'onUpdate:modelValue':
                                              l[5] ||
                                              (l[5] = (r) =>
                                                (o.value.password = r)),
                                            name: 'password',
                                            'prefix-icon': p(w),
                                            type: 'password',
                                            placeholder: '请输入密码'
                                          },
                                          null,
                                          8,
                                          ['modelValue', 'prefix-icon']
                                        )
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(
                                    s,
                                    { class: 'flex' },
                                    {
                                      default: a(() => [
                                        x('div', W, [
                                          e(L, null, {
                                            default: a(() => [t('记住我')]),
                                            _: 1
                                          }),
                                          e(
                                            _,
                                            { type: 'primary', underline: !1 },
                                            {
                                              default: a(() => [
                                                t('忘记密码？')
                                              ]),
                                              _: 1
                                            }
                                          )
                                        ])
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(s, null, {
                                    default: a(() => [
                                      e(
                                        V,
                                        {
                                          onClick: h,
                                          class: 'button',
                                          type: 'primary',
                                          'auto-insert-space': ''
                                        },
                                        { default: a(() => [t('登录')]), _: 1 }
                                      )
                                    ]),
                                    _: 1
                                  }),
                                  e(
                                    s,
                                    { class: 'flex' },
                                    {
                                      default: a(() => [
                                        e(
                                          _,
                                          {
                                            type: 'info',
                                            underline: !1,
                                            onClick:
                                              l[6] ||
                                              (l[6] = (r) => (u.value = !0))
                                          },
                                          {
                                            default: a(() => [t(' 注册 → ')]),
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
                              ['model']
                            ))
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          )
        }
      )
    }
  },
  ue = H(X, [['__scopeId', 'data-v-dd24256e']])
export { ue as default }
