import React, { useEffect } from 'react';
import styles from './Intro.module.css';

const Intro = () => {
    useEffect(()=> {

    });
    return (
        <div>
            <div className={styles.parent}>Hi, I'm Holly...<div className={styles.border1}></div></div>
            <div className={styles.parent}><span className={styles.emph}>designer</span> and <span className={styles.emph}>developer</span>.<div className={styles.border2}></div></div>
        </div>
    );
};

export default Intro;