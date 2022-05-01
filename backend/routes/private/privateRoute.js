const deleteaddmission = require('../../controllers/private/deleteaddmission');
const getuseraddmissioncontroller = require('../../controllers/private/getuseraddmissioncontroller');
const updateaddmission = require('../../controllers/private/updateaddmission');
const useraddmissioncontroller = require('../../controllers/private/useraddmissioncontroller');
const getuseraddmissioncontrolleradmin = require('../../controllers/private/useraddmissionforadmin');

const privateroute = require('express').Router();
privateroute.post("/user-addmission", useraddmissioncontroller);
privateroute.get("/getuser-addmissiondata/:usernme", getuseraddmissioncontroller);
privateroute.get("/getuser-addmissiondata", getuseraddmissioncontrolleradmin);
privateroute.patch("/getuser-update/:name", updateaddmission);
privateroute.delete("/getuser-delete/:name", deleteaddmission);


module.exports = privateroute;