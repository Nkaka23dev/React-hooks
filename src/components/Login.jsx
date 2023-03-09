import React, { useContext, useRef } from "react";
import { AppContext } from "./ContextTutorial";

export default function Login() {
  const { setUsername } = useContext(AppContext);
  const loginRef = useRef(null);
  const handleClick = (e) => {
    setUsername(loginRef.current.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleClick}
        ref={loginRef}
        style={{ fontSize: "1rem", padding: "1rem 2rem" }}
      />
    </div>
  );
}
