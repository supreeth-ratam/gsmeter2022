import React from 'react'

function Indicator() {
  return (
    <div className="indicators-container">
        <span><i className="uil uil-check green"></i> Completed</span>
        <span><i className="uil uil-arrow-growth yellow"></i> Ongoing</span>
        <span><i className="uil uil-times red"></i> Not Yet Started</span>
        <span><i className="uil uil-question blue"></i> Unclear</span>
      </div>
  )
}

export default Indicator