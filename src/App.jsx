import { useState } from 'react'
import {Div} from "./AppCss";
import routes from "@/router/router.jsx" 

import HOCRouter from "@/router/HOCRouter.jsx";

function App() {

  const element = useRoutes(routes)
  return (
    <Div>
       
     
          <HOCRouter RouterList={Routes}></HOCRouter>
         
       
    </Div>
  )
}

export default App
