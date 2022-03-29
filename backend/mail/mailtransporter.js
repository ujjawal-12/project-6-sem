const nodemailer = require('nodemailer');
const env = require('dotenv');
const Mail = require('nodemailer/lib/mailer');

env.config();

let transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,
  service: 'gmail',
  auth: {
    user: process.env.HOST_EMAIL,
    pass: process.env.HOST_PASSWORD
  },
});

module.exports = transporter;