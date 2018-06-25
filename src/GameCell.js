import React, {Component} from 'react';

function GameCell(props) {
  return(
    <button
      className="cell-button"
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default GameCell;
