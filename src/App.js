import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Nav from './components/nav/Nav';
import Canvas from './components/canvas/Canvas';
import Footer from './components/footer/Footer';

export default function App() {
    return (
        <Router>
            <Canvas/>
            <header>
                <Nav/>
            </header>
            <main>
                <Routes/>
            </main>
            <Footer/>
        </Router>
    );
}
