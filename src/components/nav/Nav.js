import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <section className={styles.nav}>
            <div className={styles.logoC}>
                <NavLink to="/">
                    <img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/new/logo.png" alt="logo" className={styles.logo}/>
                </NavLink>
            </div>
            <div className={styles.navLinks}>
                <div className={styles.navLinkC}>
                    <NavLink to="/resume" className={styles.navLink}>Resume</NavLink>
                </div>
                <div className={styles.navLinkC}>
                    <NavLink to="/projects" className={styles.navLink}>Projects</NavLink>
                </div>
                <div className={styles.navLinkC}>
                    <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
                </div>
            </div>
        </section>
    );
};

export default Nav;