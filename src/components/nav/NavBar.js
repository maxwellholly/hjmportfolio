import React, { useState, useRef } from 'react';
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

    function toggle(){
        setIsOpen(!isOpen);
        if(isOpen) {
            document.getElementById("toggler").style.transform = 'rotate(90deg)';
        } else {
            document.getElementById("toggler").style.transform = 'rotate(45deg)';
        }
    };

    return (
        <div>
            <Navbar className={styles.nav} expand="md">
                <NavbarBrand className={styles.logoC}>
                    <NavLink href="/" className={styles.logoL}>
                      <img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/logoai.svg" alt="logo"  className={styles.logo}/>
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} id="toggler" className={styles.toggler}/>
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

