import React, { useState, useEffect } from "react";
import NewComment from "./NewComment";
import { useSelector, useDispatch } from "react-redux";
import commentActions from "../redux/actions/commentActions";
import MyComment from "./MyComment";
import Comment from "./Comment";

export default function ComentSection(props) {
  let { id } = props;
  let { comments } = useSelector((store) => store.commentReducer);
  let { user } = useSelector((store) => store.userReducer);
  let dispatch = useDispatch();
  let [comentState, setComentState] = useState("coment-collapse");
  let coments = () => {
    if (comentState === "coment-collapse") {
      setComentState("coment-expand");
    } else {
      setComentState("coment-collapse");
    }
    dispatch(commentActions.getComments(id));
  };

  return (
    <div className="comentSection">
      <button onClick={coments}>Show Coments</button>
      <div className={comentState}>
        <NewComment idShow={id}></NewComment>
        
          {comments.length === 0 ? <h3>No comments</h3> : 
            comments.map( e =>{
              if(e.userId._id === user.id){
                return <MyComment name= {e.name} photo={e.userId.photo} comment={e.comment} key={e._id}/>
              }else{
                return <Comment name= {e.name} photo={e.userId.photo} comment={e.comment} key={e._id}/>
              }
            })}
        
      </div>
    </div>
  );
}
