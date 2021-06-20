import './css/app.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import TagManager from 'react-gtm-module'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, fas)

if (process.env.REACT_APP_GTM_ID && process.env.NODE_ENV === 'production') {
  TagManager.initialize({ gtmId: process.env.REACT_APP_GTM_ID })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
