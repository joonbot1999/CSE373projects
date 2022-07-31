import React from 'react';
import  './css/App.css';
import { NavLink } from 'react-router-dom';

export function Nav() {
    return (
        <nav>
            <ul className="nav-cont">
                <NavLink to="/" className={(navData) => navData.isActive ? "active" : "item"}>
                    Home
                </NavLink>
                <NavLink to="/organizations" className={(navData) => navData.isActive ? "active" : "item"}>
                    Organizations
                </NavLink>
                <NavLink to="/about" className={(navData) => navData.isActive ? "active" : "item"}>
                    About Us
                </NavLink>
            </ul>        
        </nav>
    )
}