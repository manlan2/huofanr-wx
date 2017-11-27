import wepy from 'wepy'

export default class Token {
  constructor() {
    this.verifyUrl = 'token/verify'
    this.tokenUrl = 'cmd/login'
  }

  async verify() {
    const token = wepy.getStorageSync('token')
    if (token) {
      this._verifyFromServer(token)
    } else {
      this.getTokenFromServer()
    }
  }

  // 验证 token 是否过期
  async _verifyFromServer(token) {
    const res = wepy.request({url: this.verifyUrl, data: {token}})
    if (!res.verify) { // 如果 Token 过期，重新获取
      this.getTokenFromServer()
    }
  }

  // 获取新的 token
  async getTokenFromServer() {
    try {
      const wx_res = await wepy.login()
      const params = {
        url: this.tokenUrl,
        method: 'POST',
        data: {
          code: wx_res.code,
        },
      }
      const token_res = await wepy.request(params)
      wepy.setStorageSync('token', token_res.jwt)
      return token_res.jwt
    } catch (error) {
      console.log('获取 token 失败')
    }
  }
}
