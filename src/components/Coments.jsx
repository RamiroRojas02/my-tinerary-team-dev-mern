import React, { useState, useEffect } from "react";
import NewComment from "./NewComment";
import { useSelector, useDispatch } from "react-redux";
import commentActions from "../redux/actions/commentActions";
import MyComment from "./MyComment";
import Comment from "./Comment";



export default function ComentSection(props) {
  let { id } = props;

  let { user } = useSelector((store) => store.userReducer);
  let dispatch = useDispatch();


  let [commentsState, setComentsState] = useState([])
  let [update,setUpdate] = useState(false)

  let [comentState, setComentState] = useState("coment-collapse");
  let coments = () => {
    if (comentState === "coment-collapse") {
      setComentState("coment-expand");
    } else {
      setComentState("coment-collapse");
    }
    
    reload()

  };
  
  let reload = () =>{
    setUpdate(!update)
    dispatch(commentActions.getComments(id))
    .then( res => setComentsState(res.payload.comments) )
  }

  useEffect(() => {
    dispatch(commentActions.getComments(id))
    .then( res => setComentsState(res.payload.comments) )
  }, [update])
  
  
  

  return (
    <div className="comentSection">
      <button onClick={coments}>Show Coments</button>
      <div className={comentState}>
        <NewComment reload={reload} id={id}></NewComment>
        
          {commentsState.length === 0 ? <h3>No comments</h3> : 
          commentsState.map( e =>{
              if(e.userId._id === user.id){
                return <MyComment reload={reload} id={e._id} userId={e.userId._id} date={e.date} name= {e.name} photo={e.userId.photo} comment={e.comment} key={e._id}/>
              }else{
                return <Comment date={e.date} name= {e.name} photo={e.userId.photo} comment={e.comment} key={e._id}/>
              }
            })}
        
      </div>
    </div>
  );
}
