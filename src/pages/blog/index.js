import React, { Component } from 'react';
import Posts from '../../components/posts/Posts';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Posts/>
        )
    }
}