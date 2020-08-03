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
            subject: "I have received your message",
            html: 
            `
            
            <!DOCTYPE html>
<html lang="it"><head>
<title>Email Sergii Kovtun</title>
<!--


COLORE INTENSE  #9C010F
COLORE LIGHT #EDE8DA

TESTO LIGHT #3F3D33
TESTO INTENSE #ffffff 


 -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">

<style type="text/css">
      
      #ko_compactarticleBlock_4 .articletextintenseStyle a, #ko_compactarticleBlock_4 .articletextintenseStyle a:link, #ko_compactarticleBlock_4 .articletextintenseStyle a:visited, #ko_compactarticleBlock_4 .articletextintenseStyle a:hover{
        color: #ffffff;
        text-decoration: none;
        font-weight: bold;
        text-decoration: none
      }
      
      #ko_compactarticleBlock_4 .articletextlightStyle a, #ko_compactarticleBlock_4 .articletextlightStyle a:link, #ko_compactarticleBlock_4 .articletextlightStyle a:visited, #ko_compactarticleBlock_4 .articletextlightStyle a:hover{
        color: #3F3D33;
        text-decoration: none;
        font-weight: bold;
         text-decoration: none
      }
      </style>


  <style type="text/css">
    /* CLIENT-SPECIFIC STYLES */
    #outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
    .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;} /* Force Hotmail to display normal line spacing */
    body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
    table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
    img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */

    /* RESET STYLES */
    body{margin:0; padding:0;}
    img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
    table{border-collapse:collapse !important;}
    body{height:100% !important; margin:0; padding:0; width:100% !important;}

    /* iOS BLUE LINKS */
    .appleBody a{color:#68440a; text-decoration: none;}
    .appleFooter a{color:#999999; text-decoration: none;}

    /* MOBILE STYLES */
    @media screen and (max-width: 525px) {

        /* ALLOWS FOR FLUID TABLES */
        table[class="wrapper"]{
          width:100% !important;
          min-width:0px !important;
        }

        /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
        td[class="mobile-hide"]{
          display:none;}

        img[class="mobile-hide"]{
          display: none !important;
        }

        img[class="img-max"]{
          width:100% !important;
          max-width: 100% !important;
          height:auto !important;
        }

        /* FULL-WIDTH TABLES */
        table[class="responsive-table"]{
          width:100%!important;
        }

        /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
        td[class="padding"]{
          padding: 10px 5% 15px 5% !important;
        }

        td[class="padding-copy"]{
          padding: 10px 5% 10px 5% !important;
          text-align: center;
        }

        td[class="padding-meta"]{
          padding: 30px 5% 0px 5% !important;
          text-align: center;
        }

        td[class="no-pad"]{
          padding: 0 0 0px 0 !important;
        }

        td[class="no-padding"]{
          padding: 0 !important;
        }

        td[class="section-padding"]{
          padding: 10px 15px 10px 15px !important;
        }

        td[class="section-padding-bottom-image"]{
          padding: 10px 15px 0 15px !important;
        }

        /* ADJUST BUTTONS ON MOBILE */
        td[class="mobile-wrapper"]{
            padding: 10px 5% 15px 5% !important;
        }

        table[class="mobile-button-container"]{
            margin:0 auto;
            width:100% !important;
        }

        a[class="mobile-button"]{
            width:80% !important;
            padding: 15px !important;
            border: 0 !important;
            font-size: 16px !important;
        }

    }
</style>
</head>
<body style="margin: 0; padding: 0;" bgcolor="#ffffff" align="center">

<!-- PREHEADER -->


<table border="0" cellpadding="0" cellspacing="0" width="100%" id="ko_compactarticleBlock_4">
    <tbody><tr class="row-a">
        <td bgcolor="#1f497d" align="center" class="section-padding" style="padding: 0px 15px 0px 15px;">
            <table border="0" cellpadding="0" cellspacing="0" width="500" style="padding: 0 0 20px 0;" class="responsive-table">
                
                <tbody><tr>
                    <td valign="top" style="padding: 40px 0 0 0;" class="mobile-hide"><img alt="Kovtun Sergii" width="105" border="0" style="display: block; font-family: Arial; color: #3F3D33; font-size: 14px; width: 105px;" src="https://mosaico.io/srv/f-eb496fd/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2Feb496fd%2FMyPhoto%2520%25281%2529.jpg&amp;method=resize&amp;params=105%2Cnull"></td>
                    <td style="padding: 40px 0 0 0;" class="no-padding">
                        <!-- ARTICLE -->
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tbody><tr>
                                <td align="left" class="padding-meta" style="padding: 0 0 5px 25px; font-size: 13px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff;">I'm Kovtun Sergii</td>
                            </tr>
                            <tr>
                                <td align="left" class="padding-copy" style="padding: 0 0 5px 25px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff;">Hello!</td>
                            </tr>
                            <tr>
                                 <td align="left" class="padding-copy articletextintenseStyle" style="padding: 10px 0 15px 25px; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #ffffff;"><p style="margin-top: 0px;">Thanks for sending me an email</p></td>
                            </tr>
                            <tr>
                                <td style="padding: 0 0 45px 25px;" align="left" class="padding">
                                    <table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">
                                        <tbody><tr>
                                            <td align="center">
                                                <!-- BULLETPROOF BUTTON -->
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">
                                                    <tbody><tr>
                                                        <td align="center" style="padding: 0;" class="padding-copy">
                                                            <table border="0" cellspacing="0" cellpadding="0" class="responsive-table">
                                                                <tbody><tr>
                                                                    <td align="center">
                                                                    <a target="_new" class="mobile-button" style="display: inline-block; font-size: 15px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #3F3D33; text-decoration: none; background-color: #EDE8DA; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 20px; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-bottom: 3px solid #d9ceb1;" href="https://sergii-kov-web.herokuapp.com/">My website</a>

                                                                </td>
                                                                </tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            </td>
                                        </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
    
</tbody></table>
<!-- FOOTER -->
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 500px;" id="ko_footerBlock_2">
    <tbody><tr>
        <td bgcolor="#ffffff" align="center">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tbody><tr>
                    <td style="padding: 20px 0px 20px 0px;">
                        <!-- UNSUBSCRIBE COPY -->
                        <table width="500" border="0" cellspacing="0" cellpadding="0" align="center" class="responsive-table">
                            <tbody><tr>
                                <td align="center" valign="middle" style="font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color: #3F3D33;">
                                    <span class="appleFooter" style="color: #3F3D33;">sergiikovtun.vn@gmail.com</span><br><a class="original-only" href="[profile_link]" style="color: #3F3D33; text-decoration: none;" target="_new"></a><span class="original-only" style="font-family: Arial, sans-serif; font-size: 12px; color: #444444;">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span><a href="[show_link]" style="color: #3F3D33; text-decoration: none;" target="_new"></a>
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

</body></html>

            ` 
        }; 
        
        transporter.sendMail(mailOptions);
    });
});
