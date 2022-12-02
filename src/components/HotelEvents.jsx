import React, {useState,useEffect} from "react";
import Coments from '../components/Coments'
import Reaction from "./Reaction";
import reactionActions from "../redux/actions/reactionActions";
import { useDispatch, useSelector } from 'react-redux'
export default function HotelEvents({
  pictures,
  names,
  descrip,
  date,
  price,
  id,
}) {
  console.log(id);
  const { getReactionsByEachItinerary } = reactionActions
  const [reactions, setReactions] = useState()
  let { user, token } = useSelector(store => store.userReducer)
  let dispatch = useDispatch()
  
  let data = {
    showId: id
  }

  const [update, setUpdate] = useState(false)
  let reload = () => {
    console.log('me ejecuto')
    setUpdate(!update)
    
    
  }

  useEffect(() => {
    dispatch(getReactionsByEachItinerary(data))
    .then(res=> setReactions(res.payload.reaction))
  }, [update])

  return (
    <div className="divHotelEvents">
      <div className="divEvents">
        <div className="divEventsImg">
          <img src={pictures} alt={names} />
          
        </div>
        <div className="divEventsDescription">
          <h5>{names}</h5>
          <p>{date}</p>
          <span>Price $ {price} USD</span>
          <p className="pDescription">{descrip}</p>
        </div>
      </div>
      <div className="myReactions">
        {reactions ? reactions.map(e => {
          let quantity = e.userId.length
          return (
              <Reaction key={e._id} token={token} id={e._id} name={e.name} quantity={quantity} photo={e.userId.includes(user.id)? e.iconBack :e.icon } showId={id} reload={reload}/>
            )
            })
              : null}
      </div>
      <Coments id={id}/>
    </div>
  );
}

/* name: "Barcelona vs Real Madrid",
        description:"this war clash between the two most emblematic soccer teams in Spain",
        photo:"https://artwork.espncdn.com/programs/73d0b1c2-88ab-4b12-963e-3bf6bce5dc8b/16x9/1280x720_20221012150246.jpg",
        price:1559,
        date :2022-12-12, */
