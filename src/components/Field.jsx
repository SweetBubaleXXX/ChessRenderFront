import React, { useContext } from "react";
import Cell from "./Cell";

import { FieldOptionsContext } from "./contexts/FieldOptionsContext";

import "../assets/styles/Field.scss";


export default function Field() {
  const [isWhite, setWhite] = useContext(FieldOptionsContext).color;
  const [field, setField] = useContext(FieldOptionsContext).field;

  const cells = [];

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
          whitePiece={field[y][x] === field[y][x].toUpperCase()}
        >
          {field[y][x]}
        </Cell>
      );
      x === 7 && row.push(<div className="spacer" key={`space-hb-${y}`}></div>);
    }

    cells.push(row);
  }

  return (
    <div className="field">
      {[...Array(10).keys()].map(i => <div className="spacer" key={`space-b-${i}`}></div>)}
      {isWhite ? cells.reverse() : cells}
      {[...Array(10).keys()].map(i =>
        <div className="spacer" key={`space-${i}`}>{!([0, 9].includes(i)) && String.fromCharCode(96 + i)}</div>
      )}
    </div>
  );
}