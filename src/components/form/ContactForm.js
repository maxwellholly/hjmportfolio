import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
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
            text: "",
            visibility: 'hidden'
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
        if(this.state.email !== null && this.state.email !== "" && this.state.subject !== null && this.state.subject !== "" && this.state.text !== null && this.state.text !== "") {
            const{ email, subject, text } = this.state;
            const myInit = {body: {email, subject, text}};

            API
                .post('messageAPI', '/message', myInit)
                .then(response => {
                    console.log(response);
                    this.setState({
                        email: null,
                        subject: null,
                        text: null,
                        errorMessage: null,
                        message: "Message sent, thank you!",
                        visibility: 'visible',
                        color: 'lightgreen',
                        font: 'green'
                    })
                    e.target.reset();
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        message: "Unable to send message!",
                        visibility: 'visible',
                        color: 'pink',
                        font: 'red'
                    })
                });
        } else {
            this.setState({
                message: "Unable to send message!",
                visibility: 'visible',
                color: 'pink',
                font: 'red'
            })
        }
    }

    render() {
            return (
            <Form method="POST" onSubmit={this.handleSubmit} className={styles.contactForm}>
                <h1 style={{color: 'black'}}>Contact Holly</h1>
                <FormGroup className={styles.formGroup}>
                    <Label for="email" style={{color: 'black'}}>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Your Email" onChange={this.handleInput}/>
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                    <Label for="subject" style={{color: 'black'}}>Subject</Label>
                    <Input type="text" name="subject" id="subject" placeholder="Subject" onChange={this.handleInput}/>
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                    <Label for="text" style={{color: 'black'}}>Message</Label>
                    <Input type="textarea" name="text" id="text" rows="5" onChange={this.handleInput}/>
                </FormGroup>
                <Alert style={{marginTop: 20,visibility: this.state.visibility, backgroundColor: this.state.color, color: this.state.font}}>{this.state.message}</Alert>
                <Button type="submit" value="send" className={styles.formButton}>Send</Button>
            </Form>
        );
    }
}

export default ContactForm;