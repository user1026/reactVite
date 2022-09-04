import { useState } from 'react'
import {Div} from "./AppCss";
import routes from "@/router/router.jsx" 
import {Routes,Route,Router,useRoutes} from "react-router-dom"
import HOCRouter from "@/router/HOCRouter.jsx";
import Login from "./view/baseHtml/login/login.jsx";
import Undefined from "./view/baseHtml/404/404.jsx";
function App() {

  const element = useRoutes(routes)
  return (
    <Div>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <HOCRouter RouterList={Routes}></HOCRouter>
          <Route path="*" element={<Undefined />}></Route>
        </Routes>
    </Div>
  )
}

export default App
