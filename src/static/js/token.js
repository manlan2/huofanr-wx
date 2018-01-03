import wepy from 'wepy'

export default class Token {
  constructor() {
    this.tokenUrl = 'login/login_by_wxmp'
  }

  verifyToken() {
    const token = wepy.getStorageSync('token')
    if (!token) this.getTokenFromServer()
  }

  verifySession() {
    const session_id = wepy.getStorageSync('session_id')
    if (!session_id) this.createSessionId()
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
      if (token_res.token) {
        wepy.setStorageSync('token', token_res.token)
      } else {
        this.verifySession()
      }
    } catch (error) {
      console.error('获取 token 失败')
    }
  }

  createSessionId() {
    const session_id = Math.random().toString(16).substring(2) + (+new Date()) + Math.random().toString(16).substring(2)
    wepy.setStorageSync('session_id', session_id)
  }
}
