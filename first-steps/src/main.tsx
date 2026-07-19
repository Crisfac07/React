import React from 'react'
import ReactDOM from 'react-dom/client'
//import { FirstStepsApp } from './FirstStepsApp';
import { MyAwesomeApp } from './MyAwesomeApp';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <FirstStepsApp/> */}
    <MyAwesomeApp/>
  </React.StrictMode>,
)
