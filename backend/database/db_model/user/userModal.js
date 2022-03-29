const mongoose = require('mongoose');

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userschema = new mongoose.Schema({
    name: { type: 'String', required: true, trim: 'true' },
    email: {
        type: 'String',
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    contact: { type: 'Number', required: true, trim: true },
    password: { type: 'String', required: true, trim: true }
});

const usermodal = new mongoose.model('userinfo', userschema);

module.exports = usermodal;