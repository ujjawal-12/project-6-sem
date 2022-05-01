const mongoose = require('mongoose');

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const addmissionschema = new mongoose.Schema({
    username: { type: 'String', required: true, trim: 'true' },
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
    phone: { type: 'String', required: true, trim: 'true' },
    country: { type: 'String', required: true, trim: 'true' },
    state: { type: 'String', required: true, trim: 'true' },
    city: { type: 'String', required: true, trim: 'true' },
    program: { type: 'String', required: true, trim: 'true' },
    statuss: { type: 'String', trim: 'true' },
})

const addmissionmodel = new mongoose.model('addmission', addmissionschema)

module.exports = addmissionmodel