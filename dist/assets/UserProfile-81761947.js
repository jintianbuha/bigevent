import {
  r as m,
  u as v,
  o as V,
  c as k,
  b as a,
  d as e,
  f as E,
  bM as U,
  E as x
} from './main-b3449a42.js'
import { E as y, a as w } from './el-form-item-583795c3.js'
import { E as B } from './_plugin-vue_export-helper-140fdfbe.js'
import { E as F } from './el-input-63e056b5.js'
import { _ as I } from './PageContainer-7f16fc74.js'
import './el-message-42383dd9.js'
const j = {
  __name: 'UserProfile',
  setup(S) {
    const s = m(),
      {
        user: { email: n, id: i, nickname: d, username: p },
        getUser: _
      } = v(),
      l = m({ id: i, username: p, nickname: d, email: n }),
      f = m({
        nickname: [
          { required: !0, message: '请输入用户昵称', trigger: 'blur' },
          {
            pattern: /^\S{2,10}/,
            message: '昵称长度在2-10个非空字符',
            trigger: 'blur'
          }
        ],
        email: [
          { required: !0, message: '请输入用户邮箱', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱格式',
            trigger: ['blur', 'change']
          }
        ]
      }),
      c = async () => {
        await s.value.validate(), await U(l.value), _(), x.success('修改成功')
      }
    return (q, t) => {
      const u = F,
        r = y,
        g = B,
        b = w
      return (
        V(),
        k(
          I,
          { title: '基本资料' },
          {
            default: a(() => [
              e(
                b,
                {
                  ref_key: 'formRef',
                  ref: s,
                  model: l.value,
                  rules: f.value,
                  'label-width': '100px'
                },
                {
                  default: a(() => [
                    e(
                      r,
                      { label: '登录名称' },
                      {
                        default: a(() => [
                          e(
                            u,
                            {
                              modelValue: l.value.username,
                              'onUpdate:modelValue':
                                t[0] || (t[0] = (o) => (l.value.username = o)),
                              disabled: ''
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
                      r,
                      { label: '用户昵称', prop: 'nickname' },
                      {
                        default: a(() => [
                          e(
                            u,
                            {
                              modelValue: l.value.nickname,
                              'onUpdate:modelValue':
                                t[1] || (t[1] = (o) => (l.value.nickname = o))
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
                      r,
                      { label: '用户邮箱', prop: 'email' },
                      {
                        default: a(() => [
                          e(
                            u,
                            {
                              modelValue: l.value.email,
                              'onUpdate:modelValue':
                                t[2] || (t[2] = (o) => (l.value.email = o))
                            },
                            null,
                            8,
                            ['modelValue']
                          )
                        ]),
                        _: 1
                      }
                    ),
                    e(r, null, {
                      default: a(() => [
                        e(
                          g,
                          { type: 'primary', onClick: c },
                          { default: a(() => [E('提交修改')]), _: 1 }
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
      )
    }
  }
}
export { j as default }
