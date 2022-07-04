import React, { useEffect, useState } from 'react';

import '../assets/styles/Switcher.scss';

export default function Switcher({ onClick, nowWhite }) {

  const [checked, setChecked] = useState(nowWhite);

  function check() {
    onClick(!checked);
    setChecked(!checked);
  }

  useEffect(() => {
    setChecked(nowWhite)
  }, [nowWhite]);

  return (
    <div
      className={`switcher ${checked ? 'checked' : ''}`}
      onClick={check}
    ></div>
  );
}