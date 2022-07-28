import React, { useState } from "react";
import Button from "./components/Button";
import "./css/style.css";

export default function App() {
  let ctrInitVal;//set counter init value ex: counterInitVal = 10
  let ctrMaxLim;//set counter max limit value ex: counterMaxLim = 100
  ctrInitVal = ctrInitVal || 1;//counter start value
  ctrMaxLim = ctrMaxLim || 1000;//counter max limit
  const [count, setCount] = useState(ctrInitVal);

  //Method to increment counter
  let incCtr = () => {
    if(count< ctrMaxLim) {
      setCount(count + 1);
    }
  };

  //Method to decrement counter
  let decCtr = () => {
      setCount(count - 1);
  };

  return (
    <div className="app">
      <div class="cnt-ctr">
        <div class="cnt-hdr">
          <h1>Increment/decrement counter</h1>
        </div>
        <div class="cnt-btns">
          <Button symbol={"-"} action={decCtr} />
          <span>{count}</span>
          <Button symbol={"+"} action={incCtr} />
        </div>
      </div>
    </div>
  );
}
