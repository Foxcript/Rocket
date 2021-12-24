const Sequelize = require('sequelize');
const data = require('../auth/auth-file')
const { db, server } = data;

const sequelize = new Sequelize(db.dbname, db.username, db.passwd, {

    host: server.address,
    port: db.port,
    dialect: "mysql",
    
    timezone: "-03:00"

})

module.exports = sequelize;