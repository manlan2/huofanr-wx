## Popup 组件
```javascript
import Popup from '@/Popup'

components = {
  Popup,
}

togglePopup() {
  this.$invoke('Popup', 'togglePopup')
}

<Popup direction="right"></Popup>
```