import React from "react";

function RP({ children }) {
  return (
    <div className="points-flex">
      <i className="uil uil-check green"></i>
      <div>{children}</div>
    </div>
  );
}

export default RP;
