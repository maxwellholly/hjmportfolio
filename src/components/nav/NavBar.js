import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

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

