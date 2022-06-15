import React from 'react';
import '../assets/styles/Button.scss';

export default function Button(props) {
  return (
    <div
      className={`btn ${props.type || "default"}`}
      onClick={props.onClick}
      onKeyPress={() => null}
      tabIndex="0"
    >
      {props.title}
    </div>
  );
}