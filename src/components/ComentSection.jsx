import React from "react";

export default function ComentSection(props) {
    let {event, state} = props
  return (
    <div className="comentSection">
      <button onClick={event}>Show Coments</button>
      <div className={state}>
        <h4>Coments</h4>
      </div>
    </div>
  );
}
 