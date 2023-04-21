import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import { VideoProvider } from './Context/VideoContext';
import { AppProvider } from './Context/AppContext';
import App from './App'

import './index.css'
import "./Animation.css"
import "react-multi-carousel/lib/styles.css";
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
