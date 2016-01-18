import React from 'react'
import {render} from 'react-dom'

import {App} from './app'
import {store} from './store/store'

render(
  <App store={store}/>,
  document.getElementById('app')
)
