import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import itineraryActions from '../redux/actions/itineraryActions'
import {useNavigate} from 'react-router-dom'

export default function MyItineraryCard(props) {
    let {name,img,id} = props
    let deleteBtn = useRef()
    let editBtn = useRef()
    let dispatch= useDispatch()
    let navigate = useNavigate()
    let storeItineraries = useSelector(store=> store.itinerary)

    const editEvent = () =>{
      Swal.fire({
        title: `Update ${name}`,
        text: `${name}`,
        showCancelButton: true,
        confirmButtonText: 'Update',
        html:
            '<input placeHolder="Name" id="name" class="swal2-input">' +
            '<input placeHolder="Description" id="description" class="swal2-input">' +
            '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
            '<input type="number" placeHolder="Price"id="price" class="swal2-input">',
        focusConfirm: false,
    }).then(results =>{
      if (results.isConfirmed) {
        let nameInput = document.getElementById('name')
        let descriptionInput = document.getElementById('description')
        let photoInput = document.getElementById('photo')
        let priceInput = document.getElementById('price')
        let itineraryToChange ={
          id : id,
          itinerary : {}
        }
        if (nameInput.value !== '') {
          itineraryToChange.itinerary.name = nameInput.value
        }
        if (descriptionInput.value !== '') {
          itineraryToChange.itinerary.description = descriptionInput.value
        }
        if (photoInput.value !== '') {
          itineraryToChange.itinerary.photo = photoInput.value
        }
        if (priceInput.value !== '') {
          itineraryToChange.itinerary.price = priceInput.value
        }
        Swal.fire(
            'Updated!',
            'Your itinerary has been updated.',
            'success'
          )
        dispatch(itineraryActions.editItinerary(itineraryToChange))
        navigate('/MyItineraries')
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
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your itinerary has been deleted.',
            'success'
          )
          dispatch(itineraryActions.deleteItinerary(id))
          navigate('/MyItineraries')
        }
      })
    }
  return (
    <div className='myCard'>
        <h3>{name}</h3>
        <img src={img[0]} alt={name}></img>
        <div className="myButtons">
        <button className='editBtn' ref={editBtn} onClick={editEvent}>Edit</button>
        <button className='deleteBtn' ref={deleteBtn} onClick={deleteEvent}>Delete</button>
        </div>
    </div>
  )
}