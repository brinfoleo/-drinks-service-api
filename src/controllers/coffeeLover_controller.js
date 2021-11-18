//const coffeeService = require('../services/coffee_service');

const getMessage = async (req, res) => {
    res.send('I like coffee!');
};

module.exports = {
    getMessage
};
