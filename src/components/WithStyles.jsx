import React from "react";

export default function WithStyles(Component) {
  return props => {
    const style = { padding: "1rem", margin: "1rem" };
    return <Component style={style} {...props} />;
  };
}
