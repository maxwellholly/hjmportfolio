import React, { Component } from 'react';
import styles from './resume.module.css';

class Resume extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.headerC}>
                    <img className={styles.header} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/resume.png" alt="projects header"></img>
                </div>
                <div className={styles.resume}>
                    <article className={styles.skills}>
                        <section className={styles.langs}> React | C# | SQL | JavaScript | Redux | CSS | SCSS | Git | HTML | ASP </section>
                        <section className={styles.apps}> Photoshop | Adobe XD | WebStorm | Visual Studio | MAMP | Postico </section>
                    </article>
                    <article className={styles.resumeSec}>
                        <p className={styles.work}>Career</p>
                        <section className={styles.career}>
                            <h2 className={styles.h2}>Boeing</h2>
                            <h3>Technical Designer & Drafter</h3>
                            <h4>2010-2017 & 2019-2020</h4>
                            <h5>Responsibilities</h5>
                            <ul>
                                <li>Root-cause analysis</li>
                                <li>Engineering corrective action</li>
                                <li>Part and assembly design</li>
                                <li>3D model design and integration</li>
                            </ul>
                        </section>
                    </article>
                    <article className={styles.resumeSec}>
                        <p className={styles.work}>Education</p>
                        <section className={styles.school}>
                            <h2 className={styles.h2}>Full Sail University</h2>
                            <h3>Bachelor of Science - Web Design and Development</h3>
                            <h4>2018-2020</h4>
                        </section>
                    </article>
                </div>
            </div>
        );
    }
}

export default Resume;
