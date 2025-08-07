import React from 'react'
import "./Category.css"
import Input from '../../components/Input'
const Category = ({handlechange}) => {
  return (
    <div>
      <h2 className="sidebar-title">
        Category
      </h2>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" onChange={handlechange} value="" name='test' />
          <span className="checkmark"></span>All
        </label>

        <Input
        handlechange={handlechange}
        value="sneakers"
        title="Sneakers"
        name="test"
        />
         <Input
        handlechange={handlechange}
        value="flats"
        title="Flats"
        name="test"
        />
         <Input
        handlechange={handlechange}
        value="sandals"
        title="Sandals"
        name="test"
        />
         <Input
        handlechange={handlechange}
        value="heels"
        title="Heels"
        name="test"
        />
      </div>
    </div>
  )
}

export default Category
