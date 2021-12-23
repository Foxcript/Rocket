const express = require('express');

const routes = express.Router();

routes.get('/rockets/', (req, res) => {

    return res.json({message:"All is ok for now!"})

})

module.exports = routes;