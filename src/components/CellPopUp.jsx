import React, { useContext, useState } from "react";

import Switcher from "./Switcher";

import { MobileLayoutContext } from "./contexts/MobileLayoutContext";

import '../assets/styles/CellPopUp.scss';

export default function CellPopUp() {
  const isMobile = useContext(MobileLayoutContext);
  const [whitePiece, setWhitePiece] = useState(true);

  return (
    <div className={`cell-popup ${isMobile ? "mobile" : ""}`}>
      <div className="popup-block">
        <div className="coordinate">
          <select name="cell-content" className="cell-content">
            <options value="-">Empty</options>
            <options value="k">King</options>
            <options value="q">Queen</options>
            <options value="p">Pawn</options>
            <options value="b">Bishop</options>
            <options value="h">Knight</options>
            <options value="r">Rook</options>
            <options value=".">Dot</options>
          </select>
        </div>
        <div className="color-selector">
          Black <Switcher onClick={setWhitePiece} /> White
        </div>
        <div className="border-selector-line">
          <span>Border</span>
          <select name="border-selector" className="border-selector">
            <options value="picked">Picked</options>
            <options value="move">Beat=</options>
            <options value="check">Check</options>
          </select>
        </div>
      </div>
    </div>
  );
}