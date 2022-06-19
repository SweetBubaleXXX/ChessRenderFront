import React, { useEffect, useState } from 'react';

import '../assets/styles/CheckButton.scss';

export default function CheckButton({ onClick }) {

  const [checked, setChecked] = useState(false);

  function check() {
    onClick(!checked);
    setChecked(!checked);
  }

  useEffect(check, []);

  return (
    <span
      className={`check-btn ${checked ? 'checked' : ''}`}
      onClick={check}
      onKeyPress={check}
      tabIndex="0"
    ></span>
  );
}