import React, { useEffect } from 'react';
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.parent}>Hi, I'm Holly...</h1>
            <h1 className={styles.parent}><span className={styles.emph}>designer</span> and <span className={styles.emph}>developer</span>.</h1>
        </div>
    );
};

export default Intro;