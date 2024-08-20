import { _ as U } from './PageContainer-7f16fc74.js'
import {
  u as E,
  r as p,
  o as r,
  c as i,
  b as a,
  d as s,
  B as S,
  e as c,
  f as d,
  bN as w,
  E as h,
  F as x,
  aO as f,
  bO as A,
  p as B,
  k as b,
  g as I
} from './main-b3449a42.js'
import { _ as N, E as R } from './_plugin-vue_export-helper-140fdfbe.js'
import { E as C } from './el-progress-8a28fdee.js'
/* empty css                */ import './el-message-42383dd9.js'
import './isEqual-e10afbf0.js'
const F = (t) => (B('data-v-55292731'), (t = t()), b(), t),
  V = ['src'],
  z = F(() => I('br', null, null, -1)),
  O = {
    __name: 'UserAvatar',
    setup(t) {
      const l = E(),
        o = p(l.user.user_pic),
        n = p(),
        m = (_) => {
          const e = new FileReader()
          e.readAsDataURL(_.raw),
            (e.onload = () => {
              o.value = e.result
            })
        },
        v = async () => {
          await w(o.value), await l.getUser(), h.success('头像更新成功')
        }
      return (_, e) => {
        const g = x,
          k = C,
          u = R,
          y = U
        return (
          r(),
          i(
            y,
            { title: '更换头像' },
            {
              default: a(() => [
                s(
                  k,
                  {
                    ref_key: 'uploadRef',
                    ref: n,
                    'auto-upload': !1,
                    class: 'avatar-uploader',
                    'show-file-list': !1,
                    'on-change': m
                  },
                  {
                    default: a(() => [
                      o.value
                        ? (r(),
                          S(
                            'img',
                            { key: 0, src: o.value, class: 'avatar' },
                            null,
                            8,
                            V
                          ))
                        : (r(),
                          i(
                            g,
                            { key: 1, class: 'avatar-uploader-icon' },
                            { default: a(() => [s(c(f))]), _: 1 }
                          ))
                    ]),
                    _: 1
                  },
                  512
                ),
                z,
                s(
                  u,
                  {
                    onClick:
                      e[0] ||
                      (e[0] = ($) =>
                        n.value.$el.querySelector('input').click()),
                    type: 'primary',
                    icon: c(f),
                    size: 'large'
                  },
                  { default: a(() => [d('选择图片')]), _: 1 },
                  8,
                  ['icon']
                ),
                s(
                  u,
                  { onClick: v, type: 'success', icon: c(A), size: 'large' },
                  { default: a(() => [d('上传头像')]), _: 1 },
                  8,
                  ['icon']
                )
              ]),
              _: 1
            }
          )
        )
      }
    }
  },
  H = N(O, [['__scopeId', 'data-v-55292731']])
export { H as default }
