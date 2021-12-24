const express = require('express');
const { GetRockets } = require('../src/controllers/rockets/get-rockets')
const { CreateRockets } = require('../src/controllers/rockets/create-new-rocket');

const routes = express.Router();

routes.get('/rockets/', GetRockets)
routes.post('/rockets/create', CreateRockets);

module.exports = routes;