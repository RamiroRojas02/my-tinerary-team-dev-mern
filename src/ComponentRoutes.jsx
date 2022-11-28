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
import MyProfile from './pages/MyProfile'
import ProtectedRoute from './components/ProtectedRoute'

import MyItineraries from './pages/MyItineraries'

import { useDispatch, useSelector } from 'react-redux'
import userActions from './redux/actions/userActions'


export  const ComponentRoutes=()=> {
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
        
        <Route element={<ProtectedRoute isAllowed={!user.logged} reDirect='/MyProfile'/>}>
          <Route path='/SignIn' element= {<SignIn/>}/>
        </Route>
        
        
        <Route path='/CityDetails/:id' element={<CityDetails/>} location=""/>
        <Route path='/HotelDetails/:id' element={<DetailsHotels/>} location=""/>
        <Route path='/MyItineraries' element={<MyItineraries/>} />
        <Route path='/Hotels' element={<Hotels/>}/>
        <Route path='/MyShows' element={<MyShows/>} />
        <Route path='/Cities' element={<Cities/>}/>
        <Route element={<ProtectedRoute  isAllowed={user.role === "admin"} reDirect='/'/>}>
            <Route path='/NewCity' element={<NewCity/>}/>
            <Route path='/MyCities' element={<MyCities/>}/>         
            <Route path='/NewHotel' element={<NewHotel/>}/>
            <Route path='/MyHotels' element={<MyHotels/>} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!user.logged} reDirect={'/SignIn'}/>}>

            <Route path='/MyProfile' element={<MyProfile/>} />

        </Route> 

        
    </Routes>
  )
}
