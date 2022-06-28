import React, { useEffect, useState } from 'react';

import Toolbar from './components/Toolbar';
import Field from './components/Field';
import CellPopUp from './components/CellPopUp';

import { MobileLayoutContext, MobileBreakpoint } from './components/contexts/MobileLayoutContext';
import { FieldOptionsContext } from './components/contexts/FieldOptionsContext';
import { CellPopUpContext } from './components/contexts/CellPopUpContext';

import './assets/styles/App.scss';


function App({ URL }) {
  const [isMobile, setMobile] = useState(window.innerWidth < MobileBreakpoint);
  const [isWhite, setWhite] = useState(true);
  const [renderSize, setRenderSize] = useState();
  const [field, setField] = useState([
    ["R", "H", "B", "Q", "K", "B", "H", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "h", "b", "q", "k", "b", "h", "r"]
  ]);
  const [PopUpVisible, setPopUpVisible] = useState(false);
  const [ClickedCell, setClickedCell] = useState();
  const [ClickedPiece, setClickedPiece] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth < MobileBreakpoint);
    });
  });

  return (
    <MobileLayoutContext.Provider value={isMobile}>
      <FieldOptionsContext.Provider value={{
        color: [isWhite, setWhite],
        size: [renderSize, setRenderSize],
        field: [field, setField]
      }}>
        <Toolbar URL={URL}
        />
        <CellPopUpContext.Provider value={{
          visibility: [PopUpVisible, setPopUpVisible],
          coordinate: [ClickedCell, setClickedCell],
          piece: [ClickedPiece, setClickedPiece]
        }}>
          <Field />
          <CellPopUp />
        </CellPopUpContext.Provider>
      </FieldOptionsContext.Provider>
    </MobileLayoutContext.Provider>
  );
}

export default App;
