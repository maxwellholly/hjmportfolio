import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';

function Carousel() {
    return (
        <div className={styles.wrapper}>
{/*            <div className={styles.projects}>
                <h1 className={styles.projH1}>UX Design Projects</h1>
                <div className="d-flex flex-row flex-nowrap overflow-auto">
                    <div className="card card-block mx-2">
                        <div className={styles.item}>
                            <a href={'https://xd.adobe.com/view/670434dc-1cc6-4fa1-90c5-6db731f0ac65-3257/'}>
                                <img src={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Master+Components.png'} alt={'Woow Design System'} className={styles.cardImg}/>
                            </a>
                        </div>
                        <h3> Woow Design System</h3>
                    </div>
                    <div className="card card-block mx-2">
                        <div className={styles.item}>
                            <a href={'https://xd.adobe.com/view/6212c59a-7e18-4813-6f69-e5cd4be33e98-1423/'}>
                                <img src={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Screen+Shot+2021-11-19+at+2.34.02+PM.png'} alt={'Woow Prototype'} className={styles.cardImg}/>
                            </a>
                        </div>
                        <h3> Woow Prototype</h3>
                    </div>
                    <div className="card card-block mx-2">
                        <div className={styles.item}>
                            <a href={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Landing.png'}>
                                <img src={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Screen+Shot+2021-11-19+at+5.37.46+PM.png'} alt={'Done! Wireframes'} className={styles.cardImg}/>
                            </a>
                        </div>
                        <h3> Done! Wireframes</h3>
                    </div>
                </div>
            </div>*/}
        </div>
    );
}

export default Carousel;