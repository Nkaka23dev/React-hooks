import React, { forwardRef, useImperativeHandle, useState } from "react";

const Parent = forwardRef((props, ref) => {
  const [showText, setShowText] = useState(false);
  useImperativeHandle(ref, () => ({
    alterShowtext() {
      setShowText(!showText);
    },
  }));
  //    const onclick = () => {
  //        setShowText(!showText)
  //    }
  return (
    <div>
      <button
        style={{ padding: "1rem 3rem", marginTop: "0.9rem", fontSize: "2rem" }}
      >
        Parent Button
      </button>
      {showText && <h1 style={{ fontSize: "3rem" }}>I ma showing now</h1>}
    </div>
  );
});

export default Parent;
