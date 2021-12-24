const Sequelize = require('sequelize');
const Rockets = require('../../models/rockets');
const Op = Sequelize.Op;

module.exports = {

    async CreateRockets(req, res) {

        const { data } = await req.body;

        function validParams() {

            if( typeof data !== 'object' || data.length <= 0 ) {
                console.log(1)
                return false

            }
            if( typeof data.name !== 'string' || data.name === null || data.name === undefined ) {

                console.log(2)
                return false

            }
            if( typeof data.version !== 'number' || data.version === null || data.version === undefined ) {

                console.log(3)
                return false

            }
            if( typeof data.height !== 'number' || data.height  === null || data.height === undefined ) {

                console.log(4)
                return false

            }
            if( typeof data.width !== 'number' || data.width === null || data.width === undefined ) {

                console.log(5)
                return false

            }
            if( typeof data.manufacturer !== 'number' || data.manufacturer === null || data.manufacturer === undefined ) {

                console.log(6)
                return false

            }
            if( typeof data.mass !== 'number' || data.mass === null || data.mass === undefined ) {

                console.log(7)
                return false

            }
            if( typeof data.reusable !== 'boolean' || data.reusable === null || data.reusable === undefined ) {

                console.log(8)
                return false

            }
            if( typeof data.engines !== 'number' || data.engines === null || data.engines === undefined ) {

                console.log(9)
                return false

            }
            if( typeof data.NumOfEngines !== 'number' || data.NumOfEngines === null || data.NumOfEngines === undefined ) {

                console.log(10)
                return false

            }
            if( typeof data.firstFlight !== 'string' || data.firstFlight === null || data.firstFlight === undefined ) {

                console.log(11)
                return false

            }
            if( typeof data.startProject !== 'string' ||data.startProject  === null || data.startProject === undefined ) {

                console.log(12)
                return false

            }
            if( typeof data.reflights !==  'number' || data.reflights === null || data.reflights === undefined ) {

                console.log(13)
                return false

            }
            if( typeof data.payload !== 'object' || data.payload === null || data.payload === undefined ) {

                console.log(14)
                return false

            }

            return true

        }

        async function Create() {

            async function ifNotExists() {

                try {

                    const response = await Rockets.findOne({

                        where: {
    
                            rocName: data.name 
    
                        }

                    })

                    if(response) {

                        return false
                        
                    } else {

                        return true
                    }

                } catch(e) {

                    return false

                }

            }

            if( await ifNotExists() ) {

                try {

                    const response = await Rockets.create({
    
                        rocName: data.name,
                        rocVersion: data.version,
                        rocHeight: data.height,
                        rocWidth: data.width,
                        rocMass: data.mass,
                        rocReusable: data.reusable,
                        rocEnginesId: data.engines,
                        rocNumberOfEngines: data.NumOfEngines,
                        rocManufacturer: data.manufacturer,
                        rocFirstFlight: data.firstFlight, 
                        rocStartProject: data.startProject,
                        rocReflights: data.reflights,
                        rocPayload: data.payload
                    
                    })
        
                    if(response) {
        
                        return res.json({ message:"Registro criado com sucesso!", err: false })
        
                    } else {
        
                        return res.json({ message: "Houve um erro, o registro não pode ser criado!", err: true})
        
                    }
    
                } catch(e) {
    
                    return res.json({ message:"Houve um erro durante o processamento!", err:true, code:"EI-CNR-1000"})
    
                }

            } else {
                return res.json({ message: "O foguete ja foi cadastrado anteriormente!", err: true})
            }

        }

        if(validParams()) {

            Create()

        } else {

            return res.json({ message: "Parametros inválidos!", err: true, code:"EE-CNR-1000" })
        
        }

    }

}