import React from 'react'
import "./Recommended.css"
import Button from '../components/Button'
const Recommended = ({handleclick}) => {
  return (
    <>
    <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className='btns' onClick={handleclick} value=''>All Products</button>
          <Button 
          handleclick={handleclick}
          value="Adidas"
          title="Adidas"
          />
           <Button 
          handleclick={handleclick}
          value="Nike"
          title="Nike"
          />
           <Button 
          handleclick={handleclick}
          value="Puma"
          title="Puma"
          />
           <Button 
          handleclick={handleclick}
          value="Vans"
          title="Vans"
          />
        </div>
      </div>
      </>
  )
}

export default Recommended
