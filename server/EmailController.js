var nodemailer = require('nodemailer');
module.exports={
    
    contactEmail: (req, res) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'adamb5441@gmail.com',
              pass: process.env.GPASSWORD
            }
          });
          
          var mailOptions = {
            from: 'youremail@gmail.com',
            to: 'adamb5441@gmail.com',
            subject: req.body.name,
            text: req.body.message + " - " + req.body.email
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              res.status(500).send("failed to send")
            } else {
              console.log('Email sent: ' + info.response);
              res.status(200).send("good")
            }
          });
    }
}