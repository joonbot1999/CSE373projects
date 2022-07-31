import React from 'react';
import  './css/App.css';
import { NavLink } from 'react-router-dom';

export function Footer() {
    return (
        <nav>
            <ul className="footer-container">
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