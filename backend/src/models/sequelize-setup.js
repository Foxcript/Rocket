const Sequelize = require('sequelize');
const { db, host } = require('../auth/auth-file')

const sequelize = new Sequelize(db.dbname, db.username, db.passwd, {

    host: host.address,
    port: db.port,
    dialect: "mysql",
    
    timezone: "-03:00"

})

module.exports = sequelize;