const bcrypt = require('bcrypt');
const usermodal = require('../../database/db_model/user/userModal');
async function signUp(req, res) {
    try {
        const { name, email, contact, password } = req.body;
        const user = await usermodal.findOne({ "email": email });
        if (user) {
            res.status(200).send({ res: 'user allready registered ' });
        }
        else {
            const hashpassword = await bcrypt.hash(password, 10);
            const userregister = new usermodal({ "name": name, "email": email, "contact": Number(contact), "password": hashpassword });
            await userregister.save();
            res.status(200).send({ res: 'user registered successfuly' });
        }
    }
    catch (err) {
        res.status(500).send({ res: err.message });
    }
}

module.exports = signUp;