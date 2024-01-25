import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import './navbar.scss'


const Navbar = () => {
    
  return (
    <div className='navbar'>
        <div className="titleNav">
            <h1>False</h1>
            <h1 className='tocka'>.</h1>
        </div>
        <ul className='switchNAv'>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/add">Add</NavLink></li>
            <li><NavLink to="/wishlist"><FaHeart /></NavLink></li>
            
            <li><NavLink to="/basket"><FaBasketShopping /></NavLink></li>
            <li><NavLink to="/search"><FaSearch /></NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar