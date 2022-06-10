import type { App } from 'vue'

import { WebButton } from './components'
import { WebFab } from './components'
import { WebAlert } from './components'
import { WebAlertMessage } from './components'
import { WebAvatar } from './components'
import { WebBanner } from './components'
import { WebListGroup } from './components'
import { WebDropdown } from './components'
import { WebAppBar } from './components'
import { WebBreadcrumb } from './components'
import { WebBreadcrumbItem } from './components'
import { WebCard } from './components'
import { WebDialog } from './components'

export default {
  install: (app: App) => {
    app.component('WebButton', WebButton)
    app.component('WebFab', WebFab)
    app.component('WebAlert', WebAlert)
    app.component('WebAlertMessage', WebAlertMessage)
    app.component('WebAvatar', WebAvatar)
    app.component('WebBanner', WebBanner)
    app.component('WebListGroup', WebListGroup)
    app.component('WebDropdown', WebDropdown)
    app.component('WebAppBar', WebAppBar)
    app.component('WebBreadcrumb', WebBreadcrumb)
    app.component('WebBreadcrumbItem', WebBreadcrumbItem)
    app.component('WebCard', WebCard)
    app.component('WebDialog', WebDialog)

  },
}

export {
  WebButton,
  WebFab,
  WebAlert,
  WebAlertMessage,
  WebAvatar,
  WebBanner,
  WebListGroup,
  WebDropdown,
  WebAppBar,
  WebBreadcrumb,
  WebBreadcrumbItem,
  WebCard,
  WebDialog,
};
