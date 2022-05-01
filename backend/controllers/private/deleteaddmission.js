
const addmissionmodel = require("../../database/db_model/addmission/addmissionusermodal");

async function deleteaddmission(req, res) {
    const { name } = req.params;
    addmissionmodel.deleteOne({ name: name }, async function (err) {
        if (err) console.log(err);
        const user = await addmissionmodel.find().exec();
        res.status(200).send({ "res": user });
    });

    // res.send("delete")
}

module.exports = deleteaddmission;