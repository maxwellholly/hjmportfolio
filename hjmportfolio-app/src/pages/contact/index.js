import React, { Component } from 'react';
import styles from './contact.module.css';

class Contact extends Component {

    render() {
        return (
            <div>
                <img className={styles.logo} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/portlogo.png" alt="logo"/>
            </div>
        );
    }
}

export default Contact;
