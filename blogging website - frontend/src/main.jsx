import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/* define -  purpose is to highlight potential problems in an app by adding extra checks and warnings for certain conditions. */}
    <BrowserRouter>  
    
    <App />
    
    </BrowserRouter>
  </React.StrictMode>,
)