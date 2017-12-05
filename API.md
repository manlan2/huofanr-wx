## Popup 组件
```javascript
import Popup from '../../components/Popup'

components = {
  Popup,
}

togglePopup() {
  this.$invoke('Popup', 'togglePopup')
}

<Popup direction="right"></Popup>
```