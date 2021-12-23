const express = require('express');
const cors = require('cors')
const routes = require('../src/routes');

const Rockets = require('../src/models/rockets')

const server = express();

Rockets.sync({force:true});

server.use(cors())
server.use(express.json());
server.use(routes)

server.listen(3333);