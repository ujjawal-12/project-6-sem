const mailSend = require('../../controllers/public/mailsend');
const resetPassword = require('../../controllers/public/resetPassword');
const SignIn = require('../../controllers/public/signIn');
const signUp = require('../../controllers/public/signup');
const resetpassmw = require('../../middlewares/public/resetpassmw');
const signupmw = require('../../middlewares/public/signupmiddleware');

const route = require('express').Router();

route.post('/signup', signupmw, signUp);
route.post('/signin', SignIn);
route.post('/mailsend', mailSend);
route.post('/resetpassword', resetpassmw, resetPassword);

module.exports = route;