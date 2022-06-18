import React from "react";
import "../assets/styles/Cell.scss";


export default function Cell(props) {

  return (
    <div id={props.id} className={`cell ${props.light ? "light" : "dark"}`}>

    </div>
  );
}