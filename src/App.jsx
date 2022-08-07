import { useState } from 'react'
import {Div} from "./AppCss";
import routes from "@/router/router.jsx" 
import {BrowserRouter,Link,Route,Router,useRoutes} from "react-router-dom"

function App() {

  const element = useRoutes(routes)
  return (
       
         <Div>
          <Link to="/login">login</Link>
              {element}
         </Div>
       
  )
}

export default App
