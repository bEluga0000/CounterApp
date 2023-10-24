import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppRecoil from './AppRecoil.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: '100vw',
      minHeight: '100vh',
      backgroundColor: 'black',
      justifyContent:'center',
      gap:'1rem'}}>
      <App />
      <AppRecoil />
    </div>
  </React.StrictMode>,
)
