import React from "react";

export default function Button(props) {
  let { action, symbol } = props;
  return <button onClick={action}>{symbol}</button>;
}
