import React from "react";

export default function Planet({name, isGas}) {
    console.log(props)
  return (
    <div>
      {props.isGas && (
        <h1 style={{ fontSize: "40px", color: "red" }}>{props.name}</h1>
      )}
    </div>
  );
}
