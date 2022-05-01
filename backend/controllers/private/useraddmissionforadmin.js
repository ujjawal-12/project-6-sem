
const addmissionmodel = require("../../database/db_model/addmission/addmissionusermodal");
async function getuseraddmissioncontrolleradmin(req, res) {
    // const { usernme } = req.params;
    const user = await addmissionmodel.find().exec();
    res.status(200).send({ "res": user });
}

module.exports = getuseraddmissioncontrolleradmin;