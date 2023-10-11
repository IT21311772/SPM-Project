import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminNavbar.css';

function AdminNavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

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
                    <li>
                        <div
                            className={`nav-links ${isDropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                        >
                            <b>Finance</b>
                            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                <Link to="/trans">Finance</Link>
                                <Link to="/inventory">Visualization</Link>
                                <Link to="/fin/report">Finance Report</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`nav-links ${isDropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                        >
                            <b>Supplier</b>
                            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                <Link to="/finance">Finance</Link>
                                <Link to="/inventory">Inventory</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`nav-links ${isDropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                        >
                            <b>Order</b>
                            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                <Link to="/finance">Finance</Link>
                                <Link to="/inventory">Inventory</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`nav-links ${isDropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                        >
                            <b>Inventory</b>
                            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                <Link to="/finance">Finance</Link>
                                <Link to="/inventory">Inventory</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            className={`nav-links ${isDropdownOpen ? 'active' : ''}`}
                            onClick={toggleDropdown}
                        >
                            <b>Stores</b>
                            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                                <Link to="/finance">Finance</Link>
                                <Link to="/inventory">Inventory</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminNavBar;
