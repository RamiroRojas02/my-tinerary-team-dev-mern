import React from "react";

export default function CallToAction(props) {
    let {image,name} = props
    let { section } = props;
    return (
    <section className="sectionCard">
        <img className="imgHome1" src={image} alt={name} ></img>
        <h4>{section}</h4>
    </section>
  );
}
