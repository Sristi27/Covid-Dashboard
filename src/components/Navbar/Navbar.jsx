import React from 'react';
import './navbar.css'
import icon from "./../../assets/images/icon.png"
const Navbar  = () =>
{
    return (
        <nav>
            <h1>Covid 19 Dashboard</h1>
            <span><img src={icon}/></span>
        </nav>
    )
}
export default Navbar;