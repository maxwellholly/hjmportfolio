import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';

import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

function ProjectCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const [animating, setAnimating] = React.useState(false);

    const items = [
        {
            caption: 'Woow Design System',src:
                'https://hjmportfolio.s3.us-west-2.amazonaws.com/Master+Components.png',
            altText: 'Slide Two',
            link: 'https://xd.adobe.com/view/670434dc-1cc6-4fa1-90c5-6db731f0ac65-3257/'
        },
        {
            caption: 'Woow Prototype',src:
                'https://hjmportfolio.s3.us-west-2.amazonaws.com/Screen+Shot+2021-11-19+at+2.34.02+PM.png',
            altText: 'Slide Two',
            link: 'https://xd.adobe.com/view/6212c59a-7e18-4813-6f69-e5cd4be33e98-1423/'
        },
        {
            caption: 'Done! - Wireframes',src:
                'https://hjmportfolio.s3.us-west-2.amazonaws.com/Landing.png',
            altText: 'Slide One',
            link: 'https://xd.adobe.com/view/89463aec-a60b-4244-adc3-5f33c588b234-dc15/'
        },
    ];

    const itemLength = items.length - 1

    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const carouselItemData = items.map((item) => {
        return (
                <CarouselItem
                    key={item.src}
                    onExited={() => setAnimating(false)}
                    onExiting={() => setAnimating(true)}
                >
                        <a href={item.link}>
                            <img src={item.src} alt={item.altText} className={styles.item}/>
                        </a>
                </CarouselItem>
        );
    });

    return (
/*        <div className={styles.carWrap}>
            <div id={styles.tentaclel2}><img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/tentaclel.png" alt="left tentacle"/></div>
            <div id={styles.tentacler2}><img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/tentacler.png" alt="right tentacle"/></div>
            <div style={{
                display: 'block', height: '75%', width: 'calc(100vw - 50px)', padding: 50, marginRight: 'auto',
                marginLeft: 'auto', backgroundColor: 'black', marginTop: 100
            }} data-interval='false'>
                <h1>UX Design Projects</h1>
                <Carousel previous={previousButton} next={nextButton}
                          activeIndex={activeIndex}>
                    <CarouselIndicators items={items}
                                        activeIndex={activeIndex}
                                        onClickHandler={(newIndex) => {
                                            if (animating) return;
                                            setActiveIndex(newIndex);
                                        }} />
                    {carouselItemData}
                    <CarouselControl directionText=""
                                     direction="prev" onClickHandler={previousButton} />
                    <CarouselControl directionText=""
                                     direction="next" onClickHandler={nextButton} />
                </Carousel>
            </div >
            <div id={styles.octhead}><img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/octhead.svg" alt="octopus head"/></div>
        </div>*/
        <div>
            <h1 className={styles.projH1}>UX Design Projects</h1>
            <div className={styles.warning}>
                <h3 className={styles.projH3}> This section is undergoing an update, but please explore what is here!</h3>
            </div>
            <div className="d-flex flex-row flex-nowrap overflow-auto">
                <div className="card card-block mx-2" style={{minWidth: 300}}>
                    <div className={styles.item}>
                        <a href={'https://xd.adobe.com/view/670434dc-1cc6-4fa1-90c5-6db731f0ac65-3257/'}>
                            <img src={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Master+Components.png'} alt={'Woow Design System'} className={styles.cardImg}/>
                        </a>
                    </div>
                    <h3> Woow Design System</h3>
                </div>
                <div className="card card-block mx-2" style={{minWidth: 300}}>
                    <div className={styles.item}>
                        <a href={'https://xd.adobe.com/view/6212c59a-7e18-4813-6f69-e5cd4be33e98-1423/'}>
                            <img src={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Screen+Shot+2021-11-19+at+2.34.02+PM.png'} alt={'Woow Prototype'} className={styles.cardImg}/>
                        </a>
                    </div>
                    <h3> Woow Prototype</h3>
                </div>
                <div className="card card-block mx-2" style={{minWidth: 300}}>
                    <div className={styles.item}>
                        <a href={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Landing.png'}>
                            <img src={'https://hjmportfolio.s3.us-west-2.amazonaws.com/Screen+Shot+2021-11-19+at+5.37.46+PM.png'} alt={'Done! Wireframes'} className={styles.cardImg}/>
                        </a>
                    </div>
                    <h3> Done! Wireframes</h3>
                </div>
            </div>
        </div>
    );
}

export default ProjectCarousel;