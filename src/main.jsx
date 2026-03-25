import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// mainly used for routing
import { BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')).render(

  //   <StrictMode>
  //   <App />
  // </StrictMode>,

  //for router
  <StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
 
  </StrictMode>,
)
