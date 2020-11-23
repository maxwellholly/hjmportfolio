import React, { Component } from 'react';
import styles from './login.module.css';

class Login extends Component {
    render() {
        return (
            <div className={styles.landing}>
                <img className={styles.logo} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/portlogo.png" alt="logo"/>
            </div>
        );
    }
}

export default Login;
