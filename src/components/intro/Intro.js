import React, { useEffect } from 'react';
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <div>
            <h1 className={styles.parent}>Hi, I'm Holly...<div className={styles.border1}></div></h1>
            <h1 className={styles.parent}><span className={styles.emph}>designer</span> and <span className={styles.emph}>developer</span>.<div className={styles.border2}></div></h1>
        </div>
    );
};

export default Intro;