import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes/Routes';
import Nav from './components/nav/Nav';

export default function App() {
    return (
        <Router className="main-content">
            <Nav />
            <div className="App">
                <Routes />
            </div>
        </Router>
    );
}
