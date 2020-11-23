import React, { Component } from 'react';
import styles from './editor.module.css';

class Editor extends Component {
    render() {
        return (
            <div className={styles.landing}>
                <img className={styles.logo} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/portlogo.png" alt="logo"/>
            </div>
        );
    }
}

export default Editor;
