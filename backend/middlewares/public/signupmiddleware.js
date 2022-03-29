function signupmw(req, res, next) {
    const { name, email, contact, password } = req.body;
    if (name && email && password && contact) {
        next();
    }
    else {
        res.status(400).send({ res: 'invalid fields' });
    }

}

module.exports = signupmw;