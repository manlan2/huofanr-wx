import wepy from 'wepy'

export default class WxcDialogMixin extends wepy.mixin {
  methods = {
    showDialog() {
      let dialogComponent = this.$wxpage.selectComponent('.wxc-dialog')
      dialogComponent && dialogComponent.show()
    },

    hideDialog() {
      let dialogComponent = this.$wxpage.selectComponent('.wxc-dialog')
      dialogComponent && dialogComponent.hide()
    },

    onConfirm() {
      this.$mixins[0].methods.hideDialog.call(this)
    },

    onCancel() {
      this.$mixins[0].methods.hideDialog.call(this)
    },
  }
}
