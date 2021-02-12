import React from 'react';
import sectionimg from '../assets/box.png'

const Section = () => {
    return (
        <div className="section">
            <div className="section__img">
                <img src={sectionimg} alt="sectionlogo" />
            </div>
            <div className="section__text">
                <h3>Stoicism</h3>
                <p>Posts and discussions about stoicisim and related fields.</p>
                <p>Last Activity : 8 hours ago</p>
            </div>
        </div>
    )
}

export default Section