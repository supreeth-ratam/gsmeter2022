import React from "react";
import { useState } from "react";

function OP(props) {
  const [state, setState] = useState(false);
  return (
    <div>
      <div
        className="accordian--main"
        onClick={() => setState((prev) => !prev)}
      >
        <div className="points-flex">

          <i className="uil uil-arrow-growth yellow"></i>
          <div>
          {props.children}
          </div>
        </div>
      </div>
      <div className="accordian--reply" style={{ display: state && "block" }}>
        {props.reply ? props.reply : "Work Under Progress"}
      </div>
    </div>
  );
}

export default OP;
