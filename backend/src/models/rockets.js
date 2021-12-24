const sequelize = require('../models/sequelize-setup');
const Sequelize = require('sequelize');

const Rockets = sequelize.define('rockets', {

    rocId: {

        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    rocName: {

        type: Sequelize.TEXT,
        allowNull: false

    },

    rocVersion: {

        type: Sequelize.TEXT
    },

    rocHeight: {

        type: Sequelize.INTEGER

    },

    rocWidth: {

        type: Sequelize.INTEGER

    },

    rocMass: {

        type: Sequelize.INTEGER

    },

    rocReusable: {

        type: Sequelize.BOOLEAN

    },

    /**
     * Associated to engines table
     */
    rocEnginesId: {

        type: Sequelize.INTEGER

    },
    
    rocNumberOfEngines: {

        type: Sequelize.INTEGER

    },


    /**
     * Associated to manufacturers table
     */
    rocManufacturer: {

        type: Sequelize.INTEGER,
        allowNull: false

    },

    rocFirstFlight: {

        type: Sequelize.DATE

    },

    rocStartProject: {

        type: Sequelize.DATE

    },

    rocReflights: {

        type: Sequelize.INTEGER

    },
    
    /**
     * payloadMass = FLOAT;
     * params = FLOAT;
     * 
     * {
     * 
     *  payload: {
     * 
     *    params: {
     *      height: 0.0, // 0.0m
     *      width: 0.0   // 0.0m
     *    },
     *    
     *    orbits: {
     *      GEO: {
     *       payloadMass: 0.000 // 0.000kg (for all)
     *      },
     *      LEO: {
     *       payloadMass: 0.000
     *      },
     *      MEO: {
     *       payloadMass: 0.000
     *      },
     *      SSO: {
     *       payloadMass: 0.000
     *      },
     *      GTO: {
     *       payloadMass: 0.000
     *      },
     *      LPOINTS: {
     *       payloadMass: 0.000,
     *       l-point: 'L1'  // L1, L2, L3, L4, L5
     *      }
     *    }   
     * 
     * 
     *  }
     * 
     * }
     */
    rocPayload: {

        type: Sequelize.JSON

    }



},{

    freezeTableName: true

})

module.exports = Rockets;