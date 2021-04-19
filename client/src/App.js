import React from 'react';


import Navbar from './components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './components/pages/Home';
import Wiki from './components/pages/Wiki';
import Community from './components/pages/Community';
import Register from './components/pages/Register.js';
import Login from './components/pages/Login';
import HeaderProf from './components/HeaderProf';

import './styles/main.scss'

const App = () => {
    return (
        <Router>
            <div className="container">
                <header className="container__header">
                    <div className="container__header__title">
                        <h2>Philosophy Forum</h2>
                    </div>
                    <div className="container__header__nav">
                        <Navbar />
                    </div>
                    <div className="container__header__user">
                        <HeaderProf />
                    </div>
                </header>
                <div className="container__page">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/community" component={Community} />
                        <Route path="/wiki" component={Wiki} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
        </Router>

    )
}

export default App