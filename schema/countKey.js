const { count } = require('../libs/counter.js');
module.exports = (req, res, next) => {
    let counts = count(1, 10);
    req.go = counts;
    next();
};