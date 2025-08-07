import React from 'react'
import "./Sidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
import { FaShoppingCart } from "react-icons/fa";
const Sidebar = ({handlechange}) => {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1><FaShoppingCart /></h1>
        </div>
        <Category handlechange={handlechange}/>
        <Price handlechange={handlechange}/>
       <Colors handlechange={handlechange}/>
    </section>

    </>
  )
}

export default Sidebar
