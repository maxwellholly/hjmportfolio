/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.post('/message', function(req, res) {
    const transporter = nodemailer.createTransport({
        protocol: "SMTPS",
        port: 465,
        secure: true,
        auth: {
            username: process.env.USER,
            password: process.env.PASSWORD,
        },
        host: "smtp.mail.us-west-2.awsapps.com"
    })
    transporter.verify(function(error, succes) {
        if(error) {
            console.log(error)
        } else {
            res.json({success: 'post call succeeded!', url: req.url, body: req.body})
        }
    })
});

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
