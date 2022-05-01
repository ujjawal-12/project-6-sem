const addmissionmodel = require("../../database/db_model/addmission/addmissionusermodal");
async function getuseraddmissioncontroller(req, res) {
    const { usernme } = req.params;
    const user = await addmissionmodel.find({ "username": usernme }).exec();
    res.status(200).send({ "res": user });
}

module.exports = getuseraddmissioncontroller;