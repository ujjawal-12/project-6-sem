const usermodal = require("../../database/db_model/user/userModal");
const jwt = require('jsonwebtoken');
const transporter = require("../../mail/mailtransporter");

async function mailSend(req, res) {
    const { email } = req.body;
    if (email) {
        const user = await usermodal.findOne({ "email": email });
        if (user) {
            const token = jwt.sign({ "id": user._id }, process.env.SECRET_KEY, { expiresIn: 300 });
            const mailoption = {
                from: process.env.HOST_EMAIL, // Sender address
                to: email, // List of recipients
                subject: 'Please reset your password', // Subject line
                text: 'Hello People!', // Plain text body
                html: ' <div style="background-color: black; color: white;"><div style="text-align: center;"> <img src="https://uu-img.s3.ap-south-1.amazonaws.com/2022/02/cropped-logo-1.png" width="300" height="100"><p style="font-size: 30px;">Reset Your Account Password</p></div> <div style="border: .5px solid grey; text-align: center; font-size: 22px;"><h3>Password Reset</h3> <p>We heard that you lost your account Password. Sorry about that!</p> <p> But dontt worry! you can use the following button to reset your Password</p> <button style="background-color: green;color: white;border-radius: 6px; padding:7px;font-size: 20px;margin: 15px;"><a style="text-decoration: none; color:white;" href="http://localhost:3000/password_link?key=' + token + '">ResetYour Password<a></button> <p>If you don not use this link within 5 minutes, it will expire. to get a new Password reset link,visit: <a href="http://localhost:3000/">http://localhost:3000/signup</a></p><p>Thanks,<br></br>Ujjawal Kapoor and Sonali Bhatia</p> </div> <div style="text-align: center; font-size: 22px;"><p>You are receiving this email because a Password reset was requested for your account. <mark>Don not try to send back mail</mark></p></div></div>'
            };
            transporter.sendMail(mailoption, (err, result) => {
                if (err) {
                    res.send({ "res": err.message });
                }
                else {
                    res.send({ "res": "mail send successfully" })
                }
            })
        }
        else {
            res.send({ "res": "email doesn't exists" })
        }
    }
    else {
        res.send({ "res": 'empty field' })
    }
}

module.exports = mailSend;