import React, {useState,useEffect} from "react";
import ComentSection from "./Coments";
import Reaction from "./Reaction";
import reactionActions from "../redux/actions/reactionActions";
import { useDispatch, useSelector } from 'react-redux'

export default function Tinerary(props) {
  let { photo, name, price, duration, description,id } = props;
  // console.log(id);
  const { getReactionsByEachItinerary } = reactionActions
  const [reactions, setReactions] = useState()
  let { user, token } = useSelector(store => store.userReducer)
  let dispatch = useDispatch()
  

  const [update, setUpdate] = useState(false)
  let reload = () => {
    setUpdate(!update)
  }
  let data = {
    itineraryId: id
  }
  // console.log(data);
  useEffect(() => {
    dispatch(getReactionsByEachItinerary(data))
    .then(res=> setReactions(res.payload.reaction))
  }, [update])
  return (
    <div className="tinerary">
      <h3>{name}</h3>
      <div className="CollectionTinerary">
        {photo.map((e, indice) => (
          <img src={e} alt="Tinerary-img" key={indice}></img>
        ))}
      </div>
      <div className="description">
        <h4>Description</h4>
        <p>{description}</p>
        <h5>Price: {price} USD</h5>
        <h5>Duration: {duration} Hours</h5>
      </div>
      <div className="myReactions">
        {reactions ? reactions.map(e => {
          let quantity = e.userId.length
          return (
              <Reaction key={e._id} token={token} id={e._id} name={e.name} quantity={quantity} photo={e.userId.includes(user.id)? e.iconBack :e.icon } itineraryId={id} reload={reload}/>
            )
            })
              : ""}
      </div>
      <ComentSection id={id}/>
    </div>
  );
}
