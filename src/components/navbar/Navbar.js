import React from 'react'
import './Navbar.scss'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from 'react';
import Cart from '../cart/Cart';
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
    const [openCart, setOpenCart] = useState(false);
  return (
    <>
        <nav className='navbar'>

            <div className="nav-left">
                <h1 className='heading'>Leafy</h1>
            </div>


            <div className="nav-center">
                <ul className='link-group'>
                    <li className='hover-link'><a href="">plants</a></li>
                    <li className='hover-link'><a href="">seeds</a></li>
                    <li className='hover-link'><a href="">pots</a></li>
                    <li className='hover-link'><a href="">blog</a></li>
                </ul>
            </div>


            <div className="nav-right">
                <div className="search-box">
                    <input type="text" className='searchbar' placeholder='search here...'/>
                        <IoIosSearch  className="icon"/>
                </div>


                <div className="profile">
                    <CgProfile className='icon' />
                </div>


                <div className="cart" onClick={() => setOpenCart(!openCart)}>
                    <MdOutlineShoppingCart className='icon'/>

                </div>
            </div>


        </nav>
        {openCart && <Cart onClose={() => setOpenCart(false)}/>}
    </>
  )
}

export default Navbar;