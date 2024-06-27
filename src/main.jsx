import React from 'react' //dette importeres for at bruge React-biblioteket og dets DOM-manipulationsmetoder
import ReactDOM from 'react-dom/client' //dette importeres for at bruge React-biblioteket og dets DOM-manipulationsmetoder
import App from './App.jsx' //hovedkomponenten for app aplikationen 
import './index.css'
import { BrowserRouter } from 'react-router-dom'

//dette er roden for hele React projektet... "createRoot" Root findes i HTML dokumentet
ReactDOM.createRoot(document.getElementById('root')).render( 


  <React.StrictMode>  {/* //dette hjælper med at finde eventuelle fejl i appen */}
      <BrowserRouter>  {/* //Tillader brugen af routing i appen */}
          <App />  {/* //appens hovedlogik */}
      </BrowserRouter>
  </React.StrictMode>



)
