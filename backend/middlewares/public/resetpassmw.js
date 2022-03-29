const jwt = require('jsonwebtoken');

function resetpassmw(req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
            res.send({ err: "Token expire" });
        }
        else {
            req.id = decode.id;
            next();
        }
    })
}

module.exports = resetpassmw;