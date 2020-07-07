const functions = require('firebase-functions');
const config = functions.config();
const admin = require('firebase-admin');
const cors = require('cors')({origin: true})
admin.initializeApp()
 
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({ service: 'Gmail', auth: {user: config.user.email,pass: config.user.password}})

let mailOptions = {
    from: '"Fred Foo 👻"', // sender address
    // to: "yamatsuba008@gmail.com",
    // subject: "Hello ✔", 
    // text: "Hello world?", 
    // html: "<b>Hello world?</b>", 

  };

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
    cors(require, response, () => {
        const {name, email, phone, message} = request.query;
        mailOptions = {...mailOptions, 
            to: "yamatsuba008@gmail.com", 
            subject: "Hello ✔",
            html: ` <p>From: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>PhoneNumber: ${phone}</p>
                    <p>Message: ${message}</p>` }

        transporter.sendMail(mailOptions, error => {
            if (error) {
                response.send(error)
            } 
            esle 
            {response.send("donee!")}
            
        });

        mailOptions = {...mailOptions, 
            to: email, 
            subject: "We have resived your massege",
            html: ` <p>test</p>` 
        }; 
        
        transporter.sendMail(mailOptions)
    });
});
