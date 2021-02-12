import React from 'react';

import InfoToday from './components/InfoToday';
import WordOfTheDay from './components/WordOfTheDay';
import SectionList from './components/SectionList';
import Navbar from './components/Navbar';
import Entrance from './components/Entrance'

import './styles/main.scss'

const App = () => {
    return (
        <diV className="container">

            <header className="header">
                <section className="nav">
                    <Navbar />
                </section>
                <section className="enter">
                    <Entrance />
                </section>
            </header>

            <main className="main">
                <section className="content">
                    <SectionList />
                </section>
                <section className="today">
                    <div className="today__infotoday">
                        <InfoToday />
                    </div>
                    <div className="today__wordoftheday">
                        <WordOfTheDay />
                    </div>
                </section>
            </main>

            <footer>

            </footer>

        </diV>
    )
}

export default App