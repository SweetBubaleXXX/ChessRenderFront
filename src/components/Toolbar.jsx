import React, { useContext, useState } from 'react';
import Button from './Button';
import CheckButton from './CheckButton';
import SizeSelect from './SizeSelect';
import { MobileLayoutContext } from './contexts/MobileLayoutContext';
import expandToolbarIco from '../assets/icons/arrow-down-light.svg';
import '../assets/styles/Toolbar.scss';

export default function Toolbar(props) {
  const isMobile = useContext(MobileLayoutContext);
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(!expanded);
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
        <SizeSelect URL={props.URL} sizeSelected={props.sizeSelected} />
      </span>

      <span className="toolbar-label check-btn-label">Render for white:
        <CheckButton onClick={props.toggleWhite} />
      </span>

      <Button title="Render" type="render" onClick={props.renderClick} />
    </div>
  );
}