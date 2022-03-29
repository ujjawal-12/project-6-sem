const usermodal = require("../../database/db_model/user/userModal");
const bcrypt = require('bcrypt');

async function resetPassword(req, res) {
    const { password, confirmpassword } = req.body;
    if (password && confirmpassword) {
        if (password === confirmpassword) {
            const hashpassword = await bcrypt.hash(password, 10);
            usermodal.findByIdAndUpdate(req.id, { "password": hashpassword }, (err, result) => {
                res.send({ "res": "password Updated successfully" })
            })
        }
        else {
            res.send({ "err": "password doesn't match" });
        }
    }
    else {
        res.send({ "res": "empty fields" });
    }
}

module.exports = resetPassword;