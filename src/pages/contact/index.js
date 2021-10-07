import React, { Component } from 'react';
import ContactForm from "../../components/form/ContactForm";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="contactWrapper">
                <ContactForm />
            </section>
        )
    }
}