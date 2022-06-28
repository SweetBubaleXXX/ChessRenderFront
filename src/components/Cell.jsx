import React from "react";

import { SYMBOLS } from "./Symbols";

import "../assets/styles/Cell.scss";


export default function Cell({
  id,
  light,
  children,
  onClick
}) {

  const color = RegExp(/^[A-Z]$/).test(children) ?
    "white" :
    (RegExp(/^[a-z]$/).test(children) && "black") || "";

  return (
    <div id={id} className={`cell 
    ${light ? "light" : "dark"}
    ${color}`}
      onClick={onClick}
    >
      {SYMBOLS[children]}
    </div>
  );
}