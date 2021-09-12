import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

let page;
if(window.location.pathname === "/" || window.location.pathname === "/landing"){
    page = "landing";
} else if(window.location.pathname === "/contact") {
    page = "contact";
} else if(window.location.pathname === "/resume") {
    page = "resume"
} else if(window.location.pathname === "/projects") {
    page = "projects"
}

export default function App() {
    return (
        <Router>
            <main>
                <Routes />
            </main>
            <footer>
                <div id="footerGlow" className={page}/>
            </footer>
        </Router>
    );
}
