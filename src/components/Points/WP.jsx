import { useState } from "react";

function WP(props) {
  const [state, setState] = useState(false);
  return (
    <div>
      <div
        className="accordian--main"
        onClick={() => setState((prev) => !prev)}
      >
        <div className="points-flex">
          <i className="uil uil-times red"></i>
          <div>{props.children}</div>
        </div>
      </div>
      <div className="accordian--reply" style={{ display: state && "block" }}>
        {props.reply ? props.reply : "No reply given yet"}
      </div>
    </div>
  );
}

export default WP;
