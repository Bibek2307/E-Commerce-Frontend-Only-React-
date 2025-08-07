import React from 'react'

const Button = ({handleclick,value,title}) => {
  return (
    <div>
      <button onClick={handleclick} className='btns' value={value}>{title}</button>
    </div>
  )
}

export default Button
