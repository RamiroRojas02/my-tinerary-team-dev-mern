import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import itineraryActions from '../redux/actions/itineraryActions'
import { useNavigate } from 'react-router-dom'
import Reaction from './Reaction'
import { useEffect } from 'react'
import reactionActions from '../redux/actions/reactionActions'
export default function MyItineraryCard(props) {
  let { name, img, id } = props
  let deleteBtn = useRef()
  let editBtn = useRef()
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let { user, token } = useSelector(store => store.userReducer)
  console.log(user.id)
  const { getReactionsByEachItinerary } = reactionActions
  const [reactions, setReactions] = useState()
  const [update, setUpdate] = useState(false)
 /*     setIdIt(id)    let [idIt,setIdIt]=useState("") */
   let storeItineraries = useSelector(store=> store.itinerary)
  let reload = () => {
    setUpdate(!update)
  }
 
  const editEvent = () => {
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
    }).then(results => {
      if (results.isConfirmed) {
        let nameInput = document.getElementById('name')
        let descriptionInput = document.getElementById('description')
        let photoInput = document.getElementById('photo')
        let priceInput = document.getElementById('price')
        let itineraryToChange = {
          id: id,
          itinerary: {},
          token: JSON.parse(localStorage.getItem('token'))

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
  const deleteEvent = () => {
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
        token: JSON.parse(localStorage.getItem('token')),
        id

      }
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your itinerary has been deleted.',
          'success'
        )
        dispatch(itineraryActions.deleteItinerary(data))
        navigate('/MyItineraries')
      }
    })
  }
  async function eventBtnReaction (e) {
/*     let values = {
      name:
      idItinerary:
    } */
/*     dispatch(reactionActions.updateReactions(values)) */
  } 

  useEffect(() => {
    dispatch(getReactionsByEachItinerary(id))
    .then(res=> setReactions(res.payload.reaction))
  }, [update])
  return (
    <div className='myCard'>
      <h3>{name}</h3>
      <img src={img[0]} alt={name}></img>
      <div className="myButtons">
        <button className='editBtn' ref={editBtn} onClick={editEvent}>Edit</button>
        <button className='deleteBtn' ref={deleteBtn} onClick={deleteEvent}>Delete</button>
      </div>
      <div className="myReactions">
        {reactions ? reactions.map(e => {
          let quantity = e.userId.length
          return (
              <Reaction key={e._id} token={token} id={e._id} name={e.name} quantity={quantity} photo={e.userId.includes(user.id) ? e.iconBack : e.icon} itineraryId={id} reload={reload}/>
            )
            })
              : ""}
      </div>
    </div>
  )
}