const functions = require('firebase-functions');
const config = functions.config();
const admin = require('firebase-admin');
const cors = require('cors')({origin: true})
admin.initializeApp()
 
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({ service: 'Gmail', auth: {user: config.user.email,pass: config.user.password}})

let info = {
    from: '"Fred Foo 👻"', // sender address
    to: "yamatsuba008@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
    cors(require, response, () => {
        transporter.sendMail(info, error => {
            if (error) {
                response.send(error)
            } 
            esle 
            {response.send("donee!")}
            
        });
    })

});
