const addmissionmodel = require("../../database/db_model/addmission/addmissionusermodal");

async function useraddmissioncontroller(req, res) {
    const { username, name, email, phone, country, state, city, program, statuss } = req.body;
    // console.log(req.body);
    const addmission = new addmissionmodel({ username, name, email, phone, country, state, city, program, statuss })
    await addmission.save();
    res.status(200).send({ "res": "apply successfully" });
}

module.exports = useraddmissioncontroller;