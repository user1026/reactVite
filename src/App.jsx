import { useState } from 'react'
import {Div} from "./AppCss";
import routes from "@/router/router.js" 
import {BrowserRouter,Route,Router,useRoutes} from "react-router-dom"

function App() {

  const element = useRoutes(routes)
  return (
       
         <Div>
              {element}
         </Div>
       
  )
}

export default App
