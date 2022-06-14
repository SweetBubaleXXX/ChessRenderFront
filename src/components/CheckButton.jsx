import React, { useState } from 'react';
import '../assets/styles/CheckButton.scss';

export default function CheckButton(props) {
  const [checked, setChecked] = useState(true);

  function check() {
    setChecked(!checked);
    props.onClick(checked);
  }

  return (
    <span className={`check-btn ${checked ? 'checked' : ''}`} onClick={check}></span>
  );
}