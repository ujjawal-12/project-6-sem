const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usermodal = require('../../database/db_model/user/userModal');

async function SignIn(req, res) {
    const { email, password } = req.body;
    const user = await usermodal.findOne({ "email": email }).exec();
    if (user) {
        const psswd = await bcrypt.compare(password, user.password);
        if (psswd) {
            const token = jwt.sign({ _id: user._id, name: user.name, email: user, email }, process.env.SECRET_KEY);
            res.cookie("key", token).status(200).send({ res: 'sign in successfull', token: token ,username : user.name});
        }
        else {
            res.status(200).send({ "err": "Wrong password" });
        }
    }
    else {
        res.status(200).send({ "err": "user doesn't exists" });
    }

}

module.exports = SignIn;