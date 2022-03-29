const mongoose = require('mongoose');

async function dbConn() {
    try {
        const conn = await mongoose.connect(process.env.DB_URL + 'college');
        if (conn) {
            console.log("connected");
        }
        else {
            console.log("not connected");
        }
    }
    catch (err) {
        console.log(err.message);
    }
}

module.exports = dbConn;