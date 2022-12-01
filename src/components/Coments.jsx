import React ,{useState} from "react";
import NewComment from "./NewComment";

export default function ComentSection(props) {
  let {id} = props
    let [comentState, setComentState] = useState("coment-collapse");
  let coments = () => {
    if (comentState === "coment-collapse") {
      setComentState("coment-expand");
    } else {
      setComentState("coment-collapse");
    }
  };
  return (
    <div className="comentSection">
      <button onClick={coments}>Show Coments</button>
      <div className={comentState}>
        <NewComment></NewComment>
        <h4>Coments</h4>
      </div>
    </div>
  );
}
 