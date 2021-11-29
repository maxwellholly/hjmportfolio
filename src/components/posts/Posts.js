import React from 'react';
import styles from './Posts.module.css';

const Posts = () => {
    return (
        <div className={styles.postsWrapper}>
            <div className={styles.warning}>
                <h3 className={styles.projH3}> This section is undergoing an update, but please check back soon!</h3>
            </div>
        </div>
    );
};

export default Posts;