import { useState } from "react";

function Square() {
  //value is value we store, setValue is function to change the value
  const [value, setValue] = useState(null); //state how we remember things in react
  function handleClick() {
    console.log("Clicked!");
    setValue("X"); //set the value variable to "X" on click
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

//Export keyword makes the function accessible outside the file
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //Set board to 9 empty squares
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
