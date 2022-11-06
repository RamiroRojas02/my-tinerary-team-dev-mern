import React from 'react'
import  {Routes,Route} from "react-router-dom"
import NotFound from './components/NotFound'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
export  const ComponentRoutes=()=> {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
  )
}
