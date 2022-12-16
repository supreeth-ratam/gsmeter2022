import React from "react";
import { useState } from "react";

function OP(props) {
  const [state,setState] = useState(false)
  return (
    <li>
      <div
        className="accordian--main"
        onClick={() => setState((prev) => !prev)}
      >
        <i class="uil uil-arrow-growth yellow"></i> {props.children}
      </div>
      <div
        className="accordian--reply"
        style={{ "display": state && 'block'}}
      >
        {props.reply?props.reply:"Work Under Progress"}
      </div>
    </li>
  );
}

export default OP;
