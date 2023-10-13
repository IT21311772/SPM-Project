import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminNavbar.css';

function AdminNavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleSignout = () => {
        // Implement signout logic here, e.g., clearing authentication tokens
        // You may also redirect to the login page after signing out
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
                                <Link to="/trans" className='inside-link'>Finance</Link>
                                <Link to="/chart" className='inside-link'>Visualization</Link>
                                <Link to="/fin/report" className='inside-link'>Finance Report</Link>
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
                                <Link to="/sup" className='inside-link'>Suppliers</Link>
                                <Link to="/sup/report" className='inside-link'>Supplier Report</Link>
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
                                <Link to="/order" className='inside-link'>Orders</Link>
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
                                <Link to="/items" className='inside-link'>Inventory</Link>
                                <Link to="/items/report" className='inside-link'>Product Report</Link>
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
                                <Link to="/finance" className='inside-link'>Stores</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminNavBar;
