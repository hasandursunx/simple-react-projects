import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense fallback='loading...'>
      <App />
    </React.Suspense>
  </StrictMode>,
)
