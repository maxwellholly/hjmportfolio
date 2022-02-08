import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';

import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function Carousel() {
    return (
        <div className={styles.wrapper}>
            <Card>
                <a href="https://github.com/maxwellholly/C_Projects">
                    <CardImg top width="100%" src="https://hjmportfolio.s3.us-west-2.amazonaws.com/C.svg" alt="C Sharp" />
                </a>
            </Card>
            <Card>
                <a href="https://maxwellholly.github.io/flavor/#/">
                    <CardImg top width="100%" src="https://hjmportfolio.s3.us-west-2.amazonaws.com/flavor.svg" alt="flavor app" />
                </a>
            </Card>
        </div>
    );
}

export default Carousel;