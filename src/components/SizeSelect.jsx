import React, { useEffect, useRef, useState } from 'react';

import '../assets/styles/SizeSelect.scss';

export default function SizeSelect(props) {
  const [sizes, setSizes] = useState();
  const selectElem = useRef();

  function changeEvent(e) {
    props.sizeSelected(e.target.value)
  }

  useEffect(() => {
    fetch(new URL("/sizes", props.URL))
      .then(res => {
        if (!res.ok) {
          // if (res.status === 400)
          //   return res.text().then(text => { throw Error(`400 Bad Request\n${text}`) });
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(setSizes, err => console.log(err.message));
  }, [props.URL]);

  useEffect(() => {
    let initEvent = new Event("change");
    selectElem.current.value = (sizes && sizes.at(-1)) || "default";
    changeEvent({ target: selectElem.current });
    selectElem.current.dispatchEvent(initEvent);
  }, [sizes]);

  const options = (sizes?.length && sizes.map(size => (
    <option key={`size-opt-${size}`} value={size}>{size}px</option>
  ))) || <option value="default">Default</option>;

  return (
    <select className="size-slct" onChange={changeEvent} ref={selectElem}>
      {options}
    </select>
  );
}