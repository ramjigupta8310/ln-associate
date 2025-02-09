import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// Import Global State
import PdfState from './ContextApi/PdfState'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <PdfState>
    <App />
  </PdfState>
  // </StrictMode>,
)
