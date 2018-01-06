import wepy from 'wepy'

export default class WxcDialogMixin extends wepy.mixin {
  showDialog() {
    let dialogComponent = this.$wxpage.selectComponent('.wxc-dialog')
    dialogComponent && dialogComponent.show()
  }

  hideDialog() {
    let dialogComponent = this.$wxpage.selectComponent('.wxc-dialog')
    dialogComponent && dialogComponent.hide()
  }

  methods = {
    showDialog() {
      this.showDialog()
    },

    hideDialog() {
      this.showDialog()
    },

    onConfirm() {
      this.hideDialog()
    },

    onCancel() {
      this.hideDialog()
    },
  }
}
