const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

admin.initializeApp();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.user.email,
      pass: config.user.password
    }
  });

let mailOptions = {
    from: `SergiiKov`
  };

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const {name, email, phone, message} = req.query;
        mailOptions = {...mailOptions, 
            to: "yamatsuba008@gmail.com", 
            subject: "Hello",
            html: ` <p>From: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>PhoneNumber: ${phone}</p>
                    <p>Message: ${message}</p>` }

                    transporter.sendMail(mailOptions, error => {
                        if (error) {
                            res.send(error);
                        } else {
                            res.send("Message sent successfully.");
                        }    
        });

        mailOptions = {...mailOptions, 
            to: email, 
            subject: "We have resived your massege",
            html: ` <p>test</p>` 
        }; 
        
        transporter.sendMail(mailOptions);
    });
});
