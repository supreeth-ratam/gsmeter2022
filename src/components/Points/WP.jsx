import { useState } from "react" 


function WP(props) {
  const [state,setState] = useState(false)
  return (
    <li>
      <div className='accordian--main' onClick={() => setState(prev => !prev)}>
      <i className="uil uil-times red"></i> {props.children}
      </div>
      <div className='accordian--reply' style={{ "display": state && 'block'}}>
        {props.reply?props.reply:"No reply given yet"}
      </div>
      </li>
  )
}

export default WP