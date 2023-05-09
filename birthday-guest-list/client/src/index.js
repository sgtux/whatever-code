import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { Store } from './store'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
)