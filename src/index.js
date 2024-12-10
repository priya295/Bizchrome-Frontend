import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  // </Provider>

)
