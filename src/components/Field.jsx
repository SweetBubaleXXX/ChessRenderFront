import React, { useContext } from "react";

import Cell from "./Cell";

import { FieldOptionsContext } from "./contexts/FieldOptionsContext";
import { CellPopUpContext } from "./contexts/CellPopUpContext";

import "../assets/styles/Field.scss";


export default function Field() {
  const [isWhite, setWhite] = useContext(FieldOptionsContext).color;
  const [field, setField] = useContext(FieldOptionsContext).field;
  const [popUpVisible, setPopUpVisible] = useContext(CellPopUpContext).visibility;
  const [clickedCell, setClickedCell] = useContext(CellPopUpContext).coordinate;
  const [clickedPiece, setClickedPiece] = useContext(CellPopUpContext).piece;
  const [whitePiece, setWhitePiece] = useContext(CellPopUpContext).color;

  const cells = [];

  function CellClickEvent(e) {
    let id = e.target.id;
    let [x, y] = id.split("").map(coordinate => +coordinate);
    setClickedCell(id);
    setClickedPiece(field[y][x]);
    setWhitePiece(RegExp(/^[A-Z]$/).test(field[y][x]))
    setPopUpVisible(true);
  }

  let light = false;
  for (let y = 0; y < 8; y++) {
    let row = [];
    light = !light;

    for (let x = 0; x < 8; x++) {
      let cellId = `${x}${y}`;
      x === 0 && row.push(<div className="spacer horizontal" key={`space-h-${y}`}>{y + 1}</div>);
      row.push(
        <Cell
          id={cellId}
          light={light = !light}
          key={cellId}
          onClick={CellClickEvent}
        >
          {field[y][x]}
        </Cell>
      );
      x === 7 && row.push(<div className="spacer horizontal" key={`space-hb-${y}`}></div>);
    }

    cells.push(row);
  }

  const topSpacers = [...Array(10).keys()].map(i => <div className="spacer" key={`space-b-${i}`}></div>);
  const bottomSpacers = [...Array(10).keys()].map(i =>
    <div className="spacer" key={`space-${i}`}>{!([0, 9].includes(i)) && String.fromCharCode(96 + i)}</div>
  );

  return (
    <div className="field">
      {topSpacers}
      {isWhite ? cells.reverse() : cells.map(row => [row.at(0), ...row.slice(1, -1).reverse(), row.at(-1)])}
      {isWhite ? bottomSpacers : bottomSpacers.reverse()}
    </div>
  );
}