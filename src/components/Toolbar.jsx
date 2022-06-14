import React from 'react';
import Button from './Button';
import CheckButton from './CheckButton';
import SizeSelect from './SizeSelect';

export default function Toolbar(props) {
  return (
    <div className="toolbar">

      <span className="toolbar-label">Size:
        <SizeSelect URL={props.URL} sizeSelected={props.sizeSelected} />
      </span>

      <span className="toolbar-label">Render for white:
        <CheckButton onClick={props.toggleWhite} />
      </span>

      <Button title="Render" type="render" onClick={props.renderClick} />
    </div>
  );
}