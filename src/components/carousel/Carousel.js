import React, { Component } from 'react';
import styles from './Carousel.module.css';

class Carousel extends Component {
    render() {
        return (
            <div className={styles.containerM}>
                <div className={styles.container}>
                    <article className={styles.project}>
                        <div className={styles.site}><a href="https://maxwellholly.github.io/flavor/#/"><img src="https://hjmportfolio.s3-us-west-2.amazonaws.com/Screen+Shot+2020-11-02+at+1.28.00+AM.png" alt="flavor" className={styles.img}/></a></div>
                    </article>
                    <article className={styles.project}>
                        <div className={styles.site}><a href="https://maxwellholly.github.io/AnAcreInNettleWood/"><img src="https://hjmportfolio.s3-us-west-2.amazonaws.com/Screen+Shot+2020-11-02+at+1.32.29+AM.png" alt="nettlewood" className={styles.img}/></a></div>
                    </article>
                    <article className={styles.project}>
                        <div className={styles.site}><a href="https://github.com/maxwellholly/Maxwell_Holly_Portfolio/tree/master/C%23%20Projects%201-6"><img src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80" alt="C#" className={styles.img}/></a></div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Carousel;