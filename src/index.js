import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './app/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/index.scss'

const root = document.getElementById('root')

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
)
