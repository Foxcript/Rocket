const Sequelize = require('sequelize');
const Rockets = require('../../models/rockets');
const Op = Sequelize.Op;

module.exports = { 

    async GetRockets(req, res) {

        const { search } = await req.params;

        
        function validParams() {

            if( typeof search !== 'string' || search === null ) {

                return false

            }

            return true

        }

        async function Get() {

            try {

                const response = await Rockets.findAll({
                    

                    where: {

                        rocName: {[ Op.like ]: `%${search}%`}

                    }

                })

                return res.json(response)

            } catch(e) {

                return res.json({ message: "Error during the proccess!", err: true, code:"EI-GR0-1000" })

            }

        }


        if( validParams ) {

            Get()

        } else {

            return res.json({ message:"Invalid params!", err: true, code: "EE-GR0-1000"})

        }

    }

}