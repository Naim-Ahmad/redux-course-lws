import { composeWithDevTools } from '@redux-devtools/extension'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App.jsx'
import './index.css'
import rootReducer from './redux/rootReducer.js'

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
