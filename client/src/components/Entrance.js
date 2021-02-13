import React from 'react';
import '../styles/main.scss'
import entrancelogo from '../assets/entrancelogo.svg'

const Entrance = () => {
    return (
        <div className="entrance">
            <div className="entrance__text">
                <h1>Philosophy Forum</h1>
                <h2>Where you can join discussions and find informations in related fields. </h2>
            </div>

            <div className="entrance__img">
                <img src={entrancelogo} alt="ent logo" width="150px" />
            </div>

        </div>
    )
}

export default Entrance