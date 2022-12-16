import React from 'react'

function Indicator() {
  return (
    <div className="indicators-container">
        <span><i class="uil uil-check green"></i> Completed</span>
        <span><i class="uil uil-arrow-growth yellow"></i> Ongoing</span>
        <span><i class="uil uil-times red"></i> Not Yet Started</span>
      </div>
  )
}

export default Indicator