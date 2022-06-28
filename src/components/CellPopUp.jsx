import React, { useContext, useState } from "react";

import Switcher from "./Switcher";

import { MobileLayoutContext } from "./contexts/MobileLayoutContext";
import { CellPopUpContext } from "./contexts/CellPopUpContext";

import '../assets/styles/CellPopUp.scss';

export default function CellPopUp() {
  const isMobile = useContext(MobileLayoutContext);
  const [PopUpVisible, setPopUpVisible] = useContext(CellPopUpContext).visibility;
  const [whitePiece, setWhitePiece] = useState(true);

  function setNotVisible(e) {
    if (e.target === e.currentTarget) {
      setPopUpVisible(false);
    }
  }

  return (
    <div className={`cell-popup ${isMobile ? "mobile" : ""}
                                ${PopUpVisible ? "visible" : ""}`}
      onClick={setNotVisible}>
      <div className="popup-block">
        <div className="coordinate">
          <select name="cell-content" className="cell-content">
            <option value="-">Empty</option>
            <option value="k">King</option>
            <option value="q">Queen</option>
            <option value="p">Pawn</option>
            <option value="b">Bishop</option>
            <option value="h">Knight</option>
            <option value="r">Rook</option>
            <option value=".">Dot</option>
          </select>
        </div>
        <div className="color-selector">
          <span>Black</span> <Switcher onClick={setWhitePiece} /> <span>White</span>
        </div>
        <div className="border-selector-line">
          <span>Border</span>
          <select name="border-selector" className="border-selector">
            <option value="picked">Picked</option>
            <option value="move">Beat</option>
            <option value="check">Check</option>
          </select>
        </div>
      </div>
    </div>
  );
}