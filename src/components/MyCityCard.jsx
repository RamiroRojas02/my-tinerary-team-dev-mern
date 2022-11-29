import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import cityActions from '../redux/actions/cityActions'
import {useNavigate} from 'react-router-dom'

export default function MyCityCard(props) {
    let {name,img,id} = props
    let deleteBtn = useRef()
    let editBtn = useRef()
    let dispatch= useDispatch()
    let navigate = useNavigate()
    let storeCities = useSelector(store=> store.city)

    const editEvent = () =>{
      Swal.fire({
        title: `Update ${name}`,
        text: `${name}`,
        showCancelButton: true,
        confirmButtonText: 'Update',
        html:
            '<input placeHolder="Name" id="name" class="swal2-input">' +
            '<input placeHolder="Continent" id="continent" class="swal2-input">' +
            '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
            '<input type="number" placeHolder="Population"id="population" class="swal2-input">',
        focusConfirm: false,
    }).then(results =>{
      if (results.isConfirmed) {
        let nameInput = document.getElementById('name')
        let continentInput = document.getElementById('continent')
        let photoInput = document.getElementById('photo')
        let populationInput = document.getElementById('population')
        let cityToChange ={
          id : id,
          city : {},
          token : JSON.parse(localStorage.getItem('token'))

        }
        if (nameInput.value !== '') {
          cityToChange.city.name = nameInput.value
        }
        if (continentInput.value !== '') {
          cityToChange.city.continent = continentInput.value
        }
        if (photoInput.value !== '') {
          cityToChange.city.photo = photoInput.value
        }
        if (populationInput.value !== '') {
          cityToChange.city.populationInput = populationInput.value
        }
        Swal.fire(
            'Updated!',
            'Your city has been updated.',
            'success'
          )
        dispatch(cityActions.editCity(cityToChange))
        navigate('/MyCities')
      }
    })
  }
    const deleteEvent = () =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        let data = {
          token : JSON.parse(localStorage.getItem('token')),
          id

        }
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your city has been deleted.',
            'success'
          )
          dispatch(cityActions.deleteCity(data))
          navigate('/MyCities')
        }
      })
    }
  return (
    <div className='myCard'>
        <h3>{name}</h3>
        <img src={img} alt={name}></img>
        <div className="myButtons">
        <button className='editBtn' ref={editBtn} onClick={editEvent}>Edit</button>
        <button className='deleteBtn' ref={deleteBtn} onClick={deleteEvent}>Delete</button>
        </div>
    </div>
  )
}