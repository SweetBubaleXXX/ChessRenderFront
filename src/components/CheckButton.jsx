import React from 'react';

export default function CheckButton(props) {
  return (
    <span className="check-btn" onClick={props.onClick}></span>
  );
}