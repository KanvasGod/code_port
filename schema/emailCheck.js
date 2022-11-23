const { emailV } = require('../libs/regex');

module.exports = (req, res, next) => {

    const isEmail = emailV(req.body.email);
        if(isEmail === false)
            return res.status(400).send('invalid email')
    next();
};