import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
const clientId = "104013374257-opo1n66v3vrgrjombjsibibrfcp9asl3.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
  </StrictMode>,
)
