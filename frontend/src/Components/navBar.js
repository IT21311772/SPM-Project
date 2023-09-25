import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 id="navbar-logo">O P A L</h1>
                <div className="menu-toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="nav-menu">
                    <li><Link to="#" className="nav-links"><b>Home</b></Link></li>
                    <li><Link to="#" className="nav-links"><b>Stores</b></Link></li>
                    <li><Link to="/about" className="nav-links"><b>About Us</b></Link></li>
                    <li><Link to="/contact" className="nav-links"><b>Contact Us</b></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
