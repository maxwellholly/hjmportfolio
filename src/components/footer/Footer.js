import React, { useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [location, setLocation] = React.useState({
        location: window.location.pathname
    });
    let page;
    if(location.location === '/') {
        page = 'landing';
    } else {
        page = location.location.replace('/', '');
    }
    function updatePage() {
        setLocation({
            location: window.location.pathname
        })
    }
    useEffect(()=> {

    });
    return (
        <footer>
            <div id={styles.footerGlow} className={page}/>
        </footer>
    );
};

export default Footer;