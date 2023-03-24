import React, {useState} from 'react'

import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

const Theme = ({change}) => {
  const [toggle, setToggle] = useState(false)

  const handleClick =()=>{
    setToggle(!toggle)
    change(toggle)
  }
  return (
    <div className='toggle' data-state='false' onClick={handleClick}> 
      <div className="toggle-bg"></div>
      <div className="light">
        <BsSun />
        <p>Light</p>
      </div>
      <div className="dark">
        
      <MdOutlineDarkMode />
        <p>Dark</p>
      </div>
    </div>
  )
}

export default Theme;