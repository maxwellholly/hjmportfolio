/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

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

export default Nav;*/

import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className={styles.nav} expand="md">
                <NavbarBrand className={styles.logoC}>
                    <NavLink href="/">
                        <img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/new/logo.png" alt="logo" className={styles.logo}/>
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className={styles.toggler}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className={styles.navItem}>
                            <NavLink href="/resume">Resume</NavLink>
                        </NavItem>
                        <NavItem className={styles.navItem}>
                            <NavLink href="/projects">Projects</NavLink>
                        </NavItem>
                        <NavItem className={styles.navItem}>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;

