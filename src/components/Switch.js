import React, { useRef } from 'react';
import "./Switch.css"

const Switch = ({setDarkMode, checked, setChecked}) => {

  const ref = useRef(null)
  const handleChange = () => {
    setChecked(ref.current.checked)
    setDarkMode(ref.current.checked)
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        checked={checked}
        ref={ref}
        type="checkbox" 
        className="checkbox" 
        name="checkbox" 
        id="checkbox" 
        onChange={handleChange}
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;
