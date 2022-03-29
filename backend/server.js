const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const pubroute = require('./routes/public/publicRoute');
const dbConn = require('./database/db_conn/dbConn');
const server = express();

env.config();
dbConn();
server.use(cors());
server.use(cookieparser());
server.use(bodyparser.json());
server.use('/', pubroute);

server.listen(process.env.PORT, () => console.log('server listen at port', process.env.PORT));