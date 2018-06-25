import React, {Component} from 'react';
import GameCell from './GameCell';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state= {
      cells: Array(9).fill(null),
      playerXTurn: true,
    }
  }
  renderCell(i) {
    return (
      <GameCell
        value={this.state.cells[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }
  handleClick(i) {
    const cells = this.state.cells.slice();
    if(findWinner(cells) || cells[i]) {
      return;
    }
    if(this.state.playerXTurn) {
      cells[i] = 'X';
    }
    else {
      cells[i] = 'O';
    }
    this.setState({
      cells,
      playerXTurn: !this.state.playerXTurn
    })
  }
  handleReset() {
    this.setState({
      cells: Array(9).fill(null),
      playerXTurn: true,
    })
  }
  render() {
    const winner = findWinner(this.state.cells);
    let message;
    if(winner) {
      message= `${winner} won this round!!`;
    }
    else {
      message= `The next player is: ${this.state.playerXTurn ? 'X' : 'O'}`;
    }
    return (
      <div>
        <div className="status-message">{message}</div>
        <table>
          <tbody>
            <tr>
              <td>{this.renderCell(0)}</td>
              <td>{this.renderCell(1)}</td>
              <td>{this.renderCell(2)}</td>
            </tr>
            <tr>
              <td>{this.renderCell(3)}</td>
              <td>{this.renderCell(4)}</td>
              <td>{this.renderCell(5)}</td>
            </tr>
            <tr>
              <td>{this.renderCell(6)}</td>
              <td>{this.renderCell(7)}</td>
              <td>{this.renderCell(8)}</td>
            </tr>
          </tbody>
        </table>
        <button className="reset-button" onClick={() => this.handleReset()}>Reset Game</button>
      </div>
    );
  }
}

function findWinner(cells) {
  const winnerBoard= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let element of winnerBoard) {
    const [a, b, c] = element;
    if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

export default GameBoard;
