const addmissionmodel = require("../../database/db_model/addmission/addmissionusermodal");

async function updateaddmission(req, res) {
    const { name } = req.params;
    console.log(name)
    addmissionmodel.findOneAndUpdate({ name: { $gte: name } },
        { statuss: "Approved" }, null, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Original Doc : ", docs);
            }
        });

    const user = await addmissionmodel.find().exec();
    res.status(200).send({ "res": user });
    // addmissionmodel.update({name:name}, function (err, result) {
    //     if (err){
    //         console.log(err)
    //     }else{
    //         console.log("Result :", result) 
    //     }
    // });
    // res.send("update")
}

module.exports = updateaddmission;