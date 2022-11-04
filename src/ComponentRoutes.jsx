import React from 'react'
import  {Routes,Route} from "react-router-dom"
import NotFound from './components/NotFound'
import Home from './layout/Home'
import SignIn from './layout/SignIn'
export  const ComponentRoutes=()=> {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path='/SignIn' element= {<SignIn/>}/>
    </Routes>
  )
}
