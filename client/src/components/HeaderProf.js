import React from 'react'
import {NavLink} from 'react-router-dom';

const HeaderProf = () => {
    return (
        <ul>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
        </ul>
    )
}

export default HeaderProf
