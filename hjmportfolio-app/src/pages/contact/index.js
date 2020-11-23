import React, { Component } from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import styles from './contact.module.css';
import API from '../../API';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleInputChange = (event) => {
        const {
            target: { name, value },
        } = event;
            this.setState({
                [name]: value,
            });
            console.log(this.state)
    };

    sendEmail = async (e) => {
        e.preventDefault();
/*        const{ name, email, message } = this.state;
        const data = { name, email, message };
        await API.post('/auth/contact', data).then((res) => {
            if(res.errorMessage) {
                const { errorMessage } = res;
                this.setState({
                    ...this.state,
                    errorMessage,
                    successMessage: null
                })
            } else {
                const { successMessage } = res;
                this.setState({
                    ...this.state,
                    errorMessage: null,
                    successMessage
                })
            }
        });*/
    };

    render() {
        const { successMessage, errorMessage } = this.state;
        return (
            <div>
                <div className={styles.headerC}>
                    <img className={styles.header} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/contact22.png"/>
                </div>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={this.sendEmail}>
                    <FormControl>
                        <TextField
                            id="name"
                            name="name"
                            label="Your Name"
                            style={{ margin: 8 }}
                            placeholder="Name"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleInputChange}
                        />
                    </FormControl>
                <FormControl>
                    <TextField
                        id="standard-full-width"
                        name="email"
                        label="Your Email"
                        style={{ margin: 8 }}
                        placeholder="Email"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.handleInputChange}
                    />
                </FormControl>
                    <FormControl>
                        <TextField
                            id="message"
                            name="message"
                            label="Your Message"
                            style={{ margin: 8 }}
                            placeholder="Message"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleInputChange}
                        />
                    </FormControl>
                    <button type="submit" className={styles.contactB}>Send</button>
                    {successMessage ?  <Alert severity="success">
                        {successMessage}
                    </Alert> : null }
                    {errorMessage ?  <Alert severity="error">
                        {errorMessage}
                    </Alert> : null }
                </form>
                <div className={styles.contact}>
                    <p>Email: <a href="mailto:maxwell.holly444@gmail.com">maxwell.holly444@gmail.com</a></p>
                    <p><strong>Holly Maxwell</strong></p>
                    <p>Phone: 425-314-6709</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Contact;
