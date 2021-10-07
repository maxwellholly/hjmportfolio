import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './ContactForm.module.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            subject: "",
            text: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const{ email, subject, text } = this.state;
        const myInit = { body: {email, subject, text} };
        API
            .post('emailAPI', '/emailMe-staging', myInit)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error.response);
            });
    }
    render() {
        return (
            <Form method="POST" action="send" enctype="multipart/form-data" onSubmit={this.handleSubmit} className={styles.contactForm}>
                <FormGroup className={styles.formGroup}>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Your Email" onChange={this.handleInput}/>
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                    <Label for="subject">Subject</Label>
                    <Input type="text" name="subject" id="subject" placeholder="Subject" onChange={this.handleInput}/>
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                    <Label for="text">Message</Label>
                    <Input type="textarea" name="text" id="text" onChange={this.handleInput}/>
                </FormGroup>
                <Button type="submit" value="submit" className={styles.formButton}>Submit</Button>
            </Form>
        );
    }
}

export default ContactForm;