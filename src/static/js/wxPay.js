import wepy from 'wepy'

export default class WxPay {
  async getOpenid() {
    const wx_res = await wepy.login()
    const params = {
      url: 'login/get_unionid',
      method: 'POST',
      data: {
        code: wx_res.code,
      },
    }
    const res = await wepy.request(params)
    return res.openid
  }

  async getWxPayParams(order_id) {
    const openid = await this.getOpenid()
    return await wepy.request({
      url: 'order/do_wxapp_pay',
      method: 'POST',
      data: {
        order_id,
        openid,
      },
    })
  }

  async requestWxPay(order_id) {
    const wxPayParams = await this.getWxPayParams(order_id)
    const {
      timeStamp,
      nonceStr,
      signType,
      paySign,
    } = wxPayParams
    return wepy.requestPayment({
      timeStamp,
      nonceStr,
      signType,
      paySign,
      'package': wxPayParams.package,
    }).then(res => {
      wepy.navigateTo({
        url: '/pages/cart/pay-success?order_id=' + order_id,
      })
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}
