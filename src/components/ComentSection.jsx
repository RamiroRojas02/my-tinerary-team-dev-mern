import React from "react";

export default function ComentSection(props) {
    let {event, state} = props
  return (
    <div>
      <button onClick={event}>Show Coments</button>
      <div className={state}></div>
    </div>
  );
}
 