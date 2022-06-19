import React from 'react';
import '../assets/styles/Button.scss';

export default function Button({
  type,
  title,
  onClick
}) {
  return (
    <div
      className={`btn ${type || "default"}`}
      onClick={onClick}
      onKeyPress={() => null}
      tabIndex="0"
    >
      {title}
    </div>
  );
}