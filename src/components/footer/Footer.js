import React, { useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <a className={styles.footerLink} href="https://github.com/maxwellholly">
                <img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/GitHub-Mark-32px.png" alt="Github Logo"/>
            </a>
            <a className={styles.footerLink} href="https://www.linkedin.com/in/haxwellmolly/">
                <img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/linkedInLogo.png" alt="LinkedIn Logo"/>
            </a>
        </footer>
    );
};

export default Footer;