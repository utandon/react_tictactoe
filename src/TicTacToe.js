import React, {Component} from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends Component {
  render() {
    return(
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <GameBoard />
      </div>
    );
  }
}

export default TicTacToe;
