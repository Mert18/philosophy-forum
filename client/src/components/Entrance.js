import React from 'react';
import '../styles/main.scss'
import WordOfTheDay from './WordOfTheDay';

const Entrance = () => {
    return (
        <div className="entrance">
            <div className="entrance__text">
                <WordOfTheDay />
            </div>

        </div>
    )
}

export default Entrance