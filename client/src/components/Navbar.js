import React from 'react';
import '../styles/main.scss';

import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
            <ul>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/community">Community</NavLink>
                <NavLink to="/wiki">Wiki</NavLink>
            </ul>
    )
}

export default Navbar