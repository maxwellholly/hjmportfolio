import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
    return (
        <div className={styles.resumeWrapper}>
            <div className={styles.resume}>
                <a href="https://hjmportfolio.s3.us-west-2.amazonaws.com/resume2.pdf" target="_blank" download>
                    <img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/resume2.svg" alt="resume"/>
                </a>
            </div>
        </div>
    );
};

export default Experience;