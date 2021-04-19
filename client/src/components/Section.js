import React from 'react';

const Section = () => {
    return (
        <div className="section">
            <div className="section__pic">
                <img src="/images/sec.svg" width="50px" alt="sec pic" />
            </div>
            <div className="section__text">
                <div className="section__text__title">
                    <h3>Stoicism</h3>
                </div>
                <div className="section__text__def">
                    <p>Posts and discussions about stoicisim and related fields.</p>
                </div>
                <div className="section__text__info">
                    <p>Last Activity : 8 hours ago</p>
                </div>
            </div>
        </div>
    )
}

export default Section