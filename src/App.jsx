import { useState } from "react";

function Square() {
  //value is value we store, setValue is function to change the value
  const [value, setValue] = useState(null); //state how we remember things in react
  function handleClick() {
    console.log("Clicked!");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

//Export keyword makes the function accessible outside the file
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value />
        <Square value />
        <Square value />
      </div>
      <div className="board-row">
        <Square value />
        <Square value />
        <Square value />
      </div>
      <div className="board-row">
        <Square value />
        <Square value />
        <Square value />
      </div>
    </>
  );
}
