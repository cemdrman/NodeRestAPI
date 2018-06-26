var nodeMailer = require("nodemailer");

module.exports = {
     sendMail: function (fromWho,mailSubject,mailText){
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'xxx@gmail.com',
                pass: 'password'
            }
        });
        let mailOptions = {
            from: '"Cem DIRMAN" <cemdrman@gmail.com>', // sender address
            to: fromWho, // list of receivers
            subject: mailSubject, // Subject line
            text: mailText, // plain text body
            html: '<b>NodeJS Email Sender</b>' // html body
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
                res.render('index');
            });
    }
}
