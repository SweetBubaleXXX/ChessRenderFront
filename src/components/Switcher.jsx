import React, { useEffect, useState } from 'react';

import '../assets/styles/Switcher.scss';

export default function Switcher({ onClick }) {

  const [checked, setChecked] = useState(false);

  function check() {
    onClick(!checked);
    setChecked(!checked);
  }

  useEffect(check, []);

  return (
    <div
      className={`switcher ${checked ? 'checked' : ''}`}
      onClick={check}
    ></div>
  );
}