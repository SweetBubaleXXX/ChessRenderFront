import React, { useContext, useState } from 'react';

import Button from './Button';
import CheckButton from './CheckButton';
import SizeSelect from './SizeSelect';

import { MobileLayoutContext } from './contexts/MobileLayoutContext';
import { FieldOptionsContext } from './contexts/FieldOptionsContext';

import expandToolbarIco from '../assets/icons/arrow-down-light.svg';
import '../assets/styles/Toolbar.scss';


export default function Toolbar({ API_URL }) {
  const isMobile = useContext(MobileLayoutContext);
  const [field, setField] = useContext(FieldOptionsContext).field;
  const [isWhite, setWhite] = useContext(FieldOptionsContext).color;
  const [renderSize, setRenderSize] = useContext(FieldOptionsContext).size;
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(!expanded);
  }

  function render() {
    fetch(new URL(`/render?size=${renderSize}`, API_URL), {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "image/png"
      },
      body: JSON.stringify({
        field: field,
        white: isWhite,
        picked: [],
        move: [],
        beat: [],
        check: []
      })
    })
      .then(res => res.blob())
      .then(file => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(file);
        link.download = "field.png";
        link.click();
      });
  }

  return (
    <div className={`toolbar 
      ${isMobile ? "mobile" : ""}
      ${expanded ? "expand" : ""}`}
    >
      {isMobile &&
        <div className="expand-toolbar-ico" onClick={expand}>
          <img src={expandToolbarIco} alt="expand icon"></img>
        </div>}

      <span className="toolbar-label size-slct-label">Size:
        <SizeSelect API_URL={API_URL} sizeSelected={setRenderSize} />
      </span>

      <span className="toolbar-label check-btn-label">Render for white:
        <CheckButton onClick={setWhite} />
      </span>

      <Button title="Render" type="render" onClick={render} />
    </div>
  );
}
