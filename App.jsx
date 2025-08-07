import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import "./index.css"
import Sidebar from './Sidebar/Sidebar'

//Database
import products from './db/data'
import Card from './components/Card'

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(null)

  //input
  const [query, setQuery] = useState("")

  const handleinputchange = (event) => {
    setQuery(event.target.value)
  }

  const filtereditems = products.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  //radio
  const handlechange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //button
  const handleclick = (event) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    if (query) {
      filteredProducts = filtereditems
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
        category === selected|| 
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected
      )
    }

    return filteredProducts.map(({ img, title, star, newPrice, reviews, prevPrice }) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ))
  }

  const result = filteredData(products,selectedCategory,query);

  return (
    <>
      <Sidebar handlechange={handlechange}/>
      <Nav query={query} handleinputchange={handleinputchange}/>
      <Recommended handleclick={handleclick} />
      <Products result={result} />
    </>
  )
}

export default App
