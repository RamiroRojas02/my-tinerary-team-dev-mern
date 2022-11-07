import React from 'react'
import  {Routes,Route} from "react-router-dom"
import NotFound from './components/NotFound'

import Home from './pages/Home'
import SignUp from './pages/SignUp'

import Cities from './pages/Cities'
import NewCity from './pages/NewCity'




import Hotels from './pages/Hotels'
import SignIn from './pages/SignIn'


export  const ComponentRoutes=()=> {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path='/Hotels' element={<Hotels/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path='/Cities' element={<Cities/>}/>
        <Route path='/NewCity' element={<NewCity/>}/>
        
        <Route path='/SignIn' element= {<SignIn/>}/>

    </Routes>
  )
}
