const express = require('express');
const { GetRockets } = require('../src/controllers/rockets/get-rockets')

const routes = express.Router();

routes.get('/rockets/', GetRockets)

module.exports = routes;