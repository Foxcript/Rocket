module.exports = { 

    async GetRockets(req, res) {

        const { search } = await req.params;
        const Rockets = require('../../models/rockets');
        
        function validParams() {

            if( typeof search !== 'string' || search === null ) {

                return false

            }

            return true

        }

        function Get() {

            try {

                const response = await Rockets.findAll({



                })

            }

        }

    }

}