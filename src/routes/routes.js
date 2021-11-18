const express = require('express');
const coffeeController = require('../controllers/coffee_controller');
const coffeeLoverController = require('../controllers/coffeeLover_controller');
const teaController = require('../controllers/tea_controller');

const router = new express.Router();

//coffee
router.get('/', (req, res) => res.send('Welcome to the Drinks API!'));
router.get('/coffeelover', coffeeLoverController.getMessage);
router.get('/coffee', coffeeController.getCoffee);
//tea
router.get('/tea', teaController.getTea);

module.exports = router;
