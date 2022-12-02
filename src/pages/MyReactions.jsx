import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionActions from "../redux/actions/reactionActions";
import Reaction from "../components/Reaction";
import Swal from "sweetalert2";

export default function MyReactions() {
  let [reactionsItinerary, setReactionsItinerary] = useState([]);
  let [update, setUpdate] = useState(false);
  const { reactionByItinerary , updateReactions } = reactionActions;
  let dispatch = useDispatch();
  let reload = () => {
    setUpdate(!update);
  };
  useEffect(() => {
    dispatch(reactionByItinerary(user.id)).then((res) => {
      setReactionsItinerary(res.payload);
    });
  }, [update]);
  let { user, token } = useSelector((store) => store.userReducer);
  console.log(reactionsItinerary);

  const clickHandler = (e) => {
console.log(e)


    let values = {
      name : e.name,
      idItinerary:e.itineraryId._id,
      token
    }
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
          'Your reaction has been deleted.',
          'success'
        )
         dispatch(updateReactions(values))
         .then(res=> reload())

      }
    })
   
  }




  return (
    <>
      <h2 className="h2Reactions">My Reactions</h2>
    <div className="divContainerReaction">
        {/* {reactionsItinerary>0?<> */}
      {reactionsItinerary.map((e) => (
        <div className="myCard">
          <h3>{e.itineraryId?.name}</h3>
          <img src={e.itineraryId?.photo[0]} alt={e.itineraryId?.name}></img>
          <div className="myReactions">
            <Reaction
              key={e._id}
              token={token}
              id={e._id}
              name={e.name}
              quantity={e.userId?.length}
              photo={e.userId.includes(user.id) ? e.iconBack : e.icon}
              itineraryId={e.itineraryId._id}
              reload={reload}
            />
          </div>
          <button className="btn-ReactionDelete" onClick={(o) => clickHandler(e) } >Delete reaction</button>
        </div>
      ))}
      </div>
    </>
  );
}
