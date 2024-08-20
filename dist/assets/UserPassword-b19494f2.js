import { _ as V } from './PageContainer-7f16fc74.js'
import {
  r as n,
  u as k,
  a as x,
  o as U,
  c as F,
  b as l,
  d as e,
  f as _,
  bY as h,
  E as S
} from './main-b3449a42.js'
import { a as y, E as C } from './el-col-81bdda28.js'
import { E as N, a as P } from './el-form-item-583795c3.js'
import { E as R } from './_plugin-vue_export-helper-140fdfbe.js'
import { E as q } from './el-input-63e056b5.js'
import './el-message-42383dd9.js'
const H = {
  __name: 'UserPassword',
  setup(B) {
    const u = n(),
      o = n({ old_pwd: '', new_pwd: '', re_pwd: '' }),
      i = n({
        old_pwd: [
          { required: !0, message: '请输入原密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '原密码长度在6-15位之间',
            trigger: 'blur'
          }
        ],
        new_pwd: [
          { required: !0, message: '请输入新密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '新密码长度在6-15位之间',
            trigger: 'blur'
          },
          {
            validator: (m, r, t) => {
              r === o.value.old_pwd
                ? t(new Error('新密码不能与原密码一样'))
                : t()
            },
            trigger: 'blur'
          }
        ],
        re_pwd: [
          { required: !0, message: '请再次输入新密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '确认密码长度在6-15位之间',
            trigger: 'blur'
          },
          {
            validator: (m, r, t) => {
              r !== o.value.new_pwd
                ? t(new Error('确认密码必须和新密码一样'))
                : t()
            },
            trigger: 'blur'
          }
        ]
      }),
      d = k(),
      w = x(),
      c = async () => {
        await u.value.validate(),
          await h(o.value),
          S.success('密码修改成功'),
          d.setToken(''),
          d.setUser({}),
          w.push('/login')
      },
      f = () => {
        u.value.resetFields()
      }
    return (m, r) => {
      const t = q,
        a = N,
        p = R,
        g = P,
        v = y,
        b = C,
        E = V
      return (
        U(),
        F(
          E,
          { title: '修改密码' },
          {
            default: l(() => [
              e(b, null, {
                default: l(() => [
                  e(
                    v,
                    { span: 12 },
                    {
                      default: l(() => [
                        e(
                          g,
                          {
                            ref_key: 'formRef',
                            ref: u,
                            model: o.value,
                            rules: i.value,
                            'label-width': '100px'
                          },
                          {
                            default: l(() => [
                              e(
                                a,
                                { label: '原密码', prop: 'old_pwd' },
                                {
                                  default: l(() => [
                                    e(
                                      t,
                                      {
                                        modelValue: o.value.old_pwd,
                                        'onUpdate:modelValue':
                                          r[0] ||
                                          (r[0] = (s) => (o.value.old_pwd = s)),
                                        'show-password': ''
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              e(
                                a,
                                { label: '新密码', prop: 'new_pwd' },
                                {
                                  default: l(() => [
                                    e(
                                      t,
                                      {
                                        modelValue: o.value.new_pwd,
                                        'onUpdate:modelValue':
                                          r[1] ||
                                          (r[1] = (s) => (o.value.new_pwd = s)),
                                        'show-password': ''
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              e(
                                a,
                                { label: '确认密码', prop: 're_pwd' },
                                {
                                  default: l(() => [
                                    e(
                                      t,
                                      {
                                        modelValue: o.value.re_pwd,
                                        'onUpdate:modelValue':
                                          r[2] ||
                                          (r[2] = (s) => (o.value.re_pwd = s)),
                                        'show-password': ''
                                      },
                                      null,
                                      8,
                                      ['modelValue']
                                    )
                                  ]),
                                  _: 1
                                }
                              ),
                              e(a, null, {
                                default: l(() => [
                                  e(
                                    p,
                                    { type: 'primary', onClick: c },
                                    { default: l(() => [_('修改密码')]), _: 1 }
                                  ),
                                  e(
                                    p,
                                    { onClick: f },
                                    { default: l(() => [_('重置')]), _: 1 }
                                  )
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          },
                          8,
                          ['model', 'rules']
                        )
                      ]),
                      _: 1
                    }
                  )
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
}
export { H as default }
