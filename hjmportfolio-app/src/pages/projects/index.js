import React, { Component } from 'react';
import styles from './projects.module.css';

class Projects extends Component {
    render() {
        return (
            <div className={styles.containerM}>
                <div className={styles.headerC}>
            <img className={styles.header} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/projects+copy.png" alt="projects header"></img>
                </div>
                <div className={styles.accentC}>
                <img className={styles.imgA} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/anton-darius-jvR9ieZVG64-unsplash.jpg" alt="accent image"/>
                </div>
            <div className={styles.container}>
                <article className={styles.project}>
                    <h2>Flavor</h2>
                    <div className={styles.site}><a href="https://maxwellholly.github.io/flavor/#/"><img src="https://hjmportfolio.s3-us-west-2.amazonaws.com/Screen+Shot+2020-11-02+at+1.28.00+AM.png" alt="flavor" className={styles.img}/></a></div>
                </article>
                <article className={styles.project}>
                    <h2>Done!</h2>
                    <div className={styles.site}><a href="https://done89.herokuapp.com/"><img src="https://hjmportfolio.s3-us-west-2.amazonaws.com/Screen+Shot+2020-11-22+at+12.08.24+PM.png" alt="done" className={styles.img}/></a></div>
                </article>
                <article className={styles.project}>
                    <h2>An Acre in Nettlewood</h2>
                    <div className={styles.site}><a href="https://maxwellholly.github.io/AnAcreInNettleWood/"><img src="https://hjmportfolio.s3-us-west-2.amazonaws.com/Screen+Shot+2020-11-02+at+1.32.29+AM.png" alt="nettlewood" className={styles.img}/></a></div>
                </article>
                <article className={styles.project}>
                    <h2>C# Programs</h2>
                    <div className={styles.site}><a href="https://github.com/maxwellholly/Maxwell_Holly_Portfolio/tree/master/C%23%20Projects%201-6"><img src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80" alt="C#" className={styles.img}/></a></div>
                </article>
                <article className={styles.project}>
                    <h2>Awoke</h2>
                    <div className={styles.site}><a href="https://asl-wdd442.github.io/asl-quiz-app-maxwellholly/"><img src="https://hjmportfolio.s3-us-west-2.amazonaws.com/Screen+Shot+2020-11-02+at+1.29.42+AM.png" alt="awoke" className={styles.img}/></a></div>
                </article>
            </div>
            </div>
        );
    }
}

export default Projects;
