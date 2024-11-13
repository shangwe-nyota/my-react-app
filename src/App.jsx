import { useState } from "react";

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );  
}

//Export keyword makes the function accessible outside the file
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); //x starts out try by default
  const [squares, setSquares] = useState(Array(9).fill(null)); //Set board to 9 empty squares
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function handleSquareClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return; //if the Square has already been selected return early
    }
    console.log("move starting")

    const nextSquares = squares.slice(); //make a copy of the data (no reference)
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); //update the squares arr
    setXIsNext(!xIsNext); //toggle the xIsNext turn
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)}/>
      </div>
    </>
  );
}


//returns null if no winner, else returns square (the winner)
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
