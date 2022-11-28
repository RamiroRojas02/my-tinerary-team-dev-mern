import React, {useEffect} from 'react'
import  {Routes,Route} from "react-router-dom"
import NotFound from './components/NotFound'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Cities from './pages/Cities'
import CityDetails from './pages/CityDetails'
import NewCity from './pages/NewCity'
import Hotels from './pages/Hotels'
import SignIn from './pages/SignIn'
import NewHotel from './pages/NewHotels'
import DetailsHotels from './pages/DetailsHotels'
import MyCities from './pages/MyCities'
import MyHotels from './pages/MyHotels'
import MyShows from './pages/MyShows'
import MyItineraries from './pages/MyItineraries'
import ProtectedRoute from './components/ProtectedRoute'
import { useSelector } from 'react-redux'

import { useDispatch, useSelector } from 'react-redux'
import userActions from './redux/actions/userActions'


export  const ComponentRoutes=()=> {

/*   let user = {
    role: "admin",
    logged:false
  }
  console.log(!!user.logged&&user.role.includes("admin")) */
  let {user} = useSelector(store=> store.userReducer)
  const dispatch = useDispatch()
  
  // console.log(user);
  useEffect(() => {

    
    let userToken = JSON.parse(localStorage.getItem('token'))
    if (userToken) {
    dispatch(userActions.signInToken(userToken))
  }
    
  }, [])
  

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path='/Cities' element={<Cities/>}/>

        <Route path='/SignIn' element= {<SignIn/>}/>
                <Route path='/Hotels' element={<Hotels/>}/>
   
        <Route path='/Cities' element={<Cities/>}/>
        <Route path='/CityDetails/:id' element={<CityDetails/>} location=""/>
        <Route path='/HotelDetails/:id' element={<DetailsHotels/>} location=""/>
        {/* a partir de aca son las que estan protegidas para el usuario */}
        <Route element={<ProtectedRoute isAllowed={!!user.logged&&(user.role.includes("user")||user.role.includes("admin")) } reDirect={"/SignIn"}/>}> 
        <Route path='/MyItineraries' element={<MyItineraries/>} />
        <Route path='/MyShows' element={<MyShows/>} />
        </Route>
        <Route element={<ProtectedRoute  isAllowed={user.role === "admin"} reDirect='/'/>}>
            
            <Route path='/NewCity' element={<NewCity/>}/>
            <Route path='/MyCities' element={<MyCities/>}/>         
            <Route path='/NewHotel' element={<NewHotel/>}/>
            <Route path='/MyHotels' element={<MyHotels/>} />
        </Route>

        
    </Routes>
  )
}
