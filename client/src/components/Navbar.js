import React from 'react';
import '../styles/main.scss'

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <ul className="nav-items">
                <li><a href="/">Home</a></li>
                <li><a href="/">Community</a></li>
                <li><a href="/">Wiki</a></li>
                <li><a href="/">Register</a></li>
                <li><a href="/">Log In</a></li>
            </ul>
        </div>
    )
}

export default Navbar