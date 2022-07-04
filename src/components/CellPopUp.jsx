import React, { useContext, useEffect, useRef, useState } from "react";

import Switcher from "./Switcher";

import { MobileLayoutContext } from "./contexts/MobileLayoutContext";
import { FieldOptionsContext } from "./contexts/FieldOptionsContext";
import { CellPopUpContext } from "./contexts/CellPopUpContext";

import '../assets/styles/CellPopUp.scss';

export default function CellPopUp() {
  const isMobile = useContext(MobileLayoutContext);
  const [field, setField] = useContext(FieldOptionsContext).field;
  const [popUpVisible, setPopUpVisible] = useContext(CellPopUpContext).visibility;
  const [clickedCell, setClickedCell] = useContext(CellPopUpContext).coordinate;
  const [clickedPiece, setClickedPiece] = useContext(CellPopUpContext).piece;
  const [whitePiece, setWhitePiece] = useContext(CellPopUpContext).color;
  const pieceSelector = useRef();

  function closeEvent() {
    let fieldCopy = field;
    fieldCopy[+clickedCell[1]][+clickedCell[0]] = whitePiece ? clickedPiece.toUpperCase() : clickedPiece;
    setField(fieldCopy);
  }

  function setNotVisible(e) {
    if (e.target === e.currentTarget) {
      setPopUpVisible(false);
      closeEvent();
    }
  }

  function pieceSelected(e) {
    setClickedPiece(e.target.value);

  }

  useEffect(() => {
    pieceSelector.current.value = (clickedPiece.toLowerCase());
    pieceSelected({ target: pieceSelector.current });
  }, [clickedPiece]);

  return (
    <div className={`cell-popup ${isMobile ? "mobile" : ""}
                                ${popUpVisible ? "visible" : ""}`}
      onClick={setNotVisible}>
      <div className="popup-block">
        <div className="coordinate">{String.fromCharCode(+clickedCell[0] + 97)}{+clickedCell[1] + 1}</div>
        <select name="cell-content" className="cell-content" ref={pieceSelector} onChange={pieceSelected}>
          <option value="-">Empty</option>
          <option value="k">King</option>
          <option value="q">Queen</option>
          <option value="p">Pawn</option>
          <option value="b">Bishop</option>
          <option value="h">Knight</option>
          <option value="r">Rook</option>
          <option value=".">Dot</option>
        </select>

        <div className="color-selector">
          <span>Black</span> <Switcher onClick={setWhitePiece} nowWhite={whitePiece} /> <span>White</span>
        </div>
        <div className="border-selector-line">
          <span>Border</span>
          <select name="border-selector" className="border-selector">
            <option value="false">None</option>
            <option value="picked">Picked</option>
            <option value="move">Beat</option>
            <option value="check">Check</option>
          </select>
        </div>
      </div>
    </div>
  );
}