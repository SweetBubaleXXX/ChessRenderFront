import React from "react";

import { SYMBOLS } from "./Symbols";

import "../assets/styles/Cell.scss";


export default function Cell({
  id,
  light,
  whitePiece,
  children
}) {

  return (
    <div id={id} className={`cell 
    ${light ? "light" : "dark"}
    ${whitePiece ? "white" : "black"}`}
    onClick={()=>{}}
    >
      {SYMBOLS[children]}
    </div>
  );
}