import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    return (
        <div className={styles.resumeWrapper}>
            <div id={styles.tentaclel}><img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/tentaclel.png" alt="left tentacle"/></div>
            <div id={styles.tentacler}><img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/tentacler.png" alt="left tentacle"/></div>
            <div className={styles.resume}>
                <section id={styles.basicInfo}>
                    <h1>Holly Maxwell</h1>
                    <h2><b>Email </b>contact@hollymaxwell.me | <b>Ph </b>425-314-6709</h2>
                    <h4>Western Washington</h4>
                    <h3>Full stack developer with many years of varied experience. Seeking to leverage my skills and make a positive impact with a company that is in the same pursuit.</h3>
                </section>
                <section id={styles.education}>
                    <h2>Education</h2>
                    <section>
                        <h3>Full Sail University</h3>
                        <h4>Winter Park, FL</h4>
                        <h3>Bachelor of Science</h3>
                        <h4>Salutatorian</h4>
                        <h3>Web Design and Development</h3>
                        <h4>February 2018 to November 2020</h4>
                    </section>
                    <section>
                        <h3>ITT Tecnical Institute</h3>
                        <h4>Everett, WA</h4>
                        <h3>Associate of Applied Science</h3>
                        <h3>Computer Aided Drafting & Design</h3>
                        <h4>September 2008 to December 2010</h4>
                    </section>
                </section>
                <section id={styles.work}>
                    <h2>Experience</h2>
                    <section>
                        <h3>The Boeing Company</h3>
                        <h4>Everett, WA</h4>
                        <h3>Technical Designer/Drafter</h3>
                        <h4>Web Design and Development Focal</h4>
                        <h3>
                            <ul>
                                <li>
                                    Directly supported manufacturing with emergent engineering issues
                                </li>
                                <li>
                                    Investigation, validation and implementation of engineering changes to drawings, product structures and/or models
                                </li>
                                <li>
                                    Investigation and clarification of engineering drawings, engineering intent and miscellaneous required documentation as well as order of authority to support proper installation and part correctness
                                </li>
                                <li>
                                    Coordination of projects with Quality, Manufacturing, Design Engineering, MRB Engineering, Manufacturing Engineering, Stress and other pertinent parties
                                </li>
                                <li>
                                    Creation and investigation of 3D models
                                </li>
                                <li>
                                    Lead and coordinated own work packages to completion, worked independently
                                </li>
                            </ul>
                        </h3>
                        <h4>July 2019 to July 2020</h4>
                        <h4>May 2010 to May 2017</h4>
                    </section>
                    <section>
                        <h3>Dash Delivery</h3>
                        <h4>Everett, WA</h4>
                        <h3>Delivery Driver</h3>
                        <h3>Delivered same day package orders for Amazon</h3>
                        <h4>April 2018 to April 2019</h4>
                    </section>
                </section>
            </div>
            <div id={styles.octhead}><img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/octhead.svg" alt="octopus head"/></div>
        </div>
    );
};

export default Experience;