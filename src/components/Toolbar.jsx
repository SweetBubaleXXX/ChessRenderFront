import React, { useContext } from 'react';
import Button from './Button';
import CheckButton from './CheckButton';
import SizeSelect from './SizeSelect';
import { MobileLayoutContext } from './contexts/MobileLayoutContext';
import '../assets/styles/Toolbar.scss';

export default function Toolbar(props) {
  const isMobile = useContext(MobileLayoutContext);

  return (
    <div className={`toolbar ${isMobile ? "mobile" : ""}`}>
      {isMobile &&
        <div className="expand-toolbar-ico">
          <i className="gg-move-down"></i>
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