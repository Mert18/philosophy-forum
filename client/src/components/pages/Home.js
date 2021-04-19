import React from 'react'

import InfoToday from '../InfoToday';
import WordOfTheDay from '../WordOfTheDay';
import SectionList from '../SectionList';
import Entrance from '../Entrance';

const Home = () => {
    return (
             <main className="main">
                 <section className="main__entrance">
                     <Entrance />
                 </section>

                <section className="main__content">
                    <SectionList />
                </section>

                <section className="main__today">
                    <InfoToday />
                </section>
                
                </main>
    )
}

export default Home
