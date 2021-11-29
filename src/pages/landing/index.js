import React, { Component } from 'react';
import Intro from '../../components/intro/Intro';

export default class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <Intro/>
                <div id="oct">
                    <img src="https://hjmportfolio.s3.us-west-2.amazonaws.com/oct2.svg" alt="Octopus"/>
                </div>
            </section>
        )
    }
}